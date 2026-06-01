import sqlite3
import zipfile
import tempfile
import json
import os
import shutil

APKG_PATH = r"C:\Users\monti\Downloads\Japanese_Core_2000_Step_01_Listening_Sentence_Vocab__Images.apkg"
TS_OUTPUT = r"C:\Users\monti\OneDrive\Desktop\japanese-tutor\src\data\core2000.ts"

def clean_html(raw_html):
    import re
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', raw_html)
    return cleantext.replace('&nbsp;', ' ').strip()

def main():
    if not os.path.exists(APKG_PATH):
        print(f"Error: APKG not found at {APKG_PATH}")
        return

    temp_dir = tempfile.mkdtemp()
    db_path = os.path.join(temp_dir, "collection.anki2")

    try:
        with zipfile.ZipFile(APKG_PATH, 'r') as z:
            z.extract("collection.anki2", temp_dir)
        
        conn = sqlite3.connect(db_path)
        c = conn.cursor()
        
        # Get notes ordered by id to maintain deck order
        c.execute("SELECT flds FROM notes ORDER BY id")
        rows = c.fetchall()
        
        vocab_list = []
        current_item = None
        
        for row in rows:
            fields = row[0].split('\x1f')
            
            # The type is in field 6
            if len(fields) > 6:
                note_type = fields[6]
                
                if note_type == 'item':
                    # Parse item
                    expr = fields[0]
                    meaning = fields[1]
                    reading = fields[2] if fields[2] else expr
                    current_item = {
                        "word": expr,
                        "reading": reading,
                        "meaning": meaning,
                        "sentence": "",
                        "sentence_meaning": "",
                        "sentence_reading": ""
                    }
                    vocab_list.append(current_item)
                
                elif note_type == 'sentence' and current_item:
                    # Parse corresponding sentence
                    # fields[0] = Japanese sentence (often with <b>)
                    # fields[1] = English sentence <br/> word -- translation
                    # fields[2] = reading sentence
                    
                    sentence_jp = clean_html(fields[0])
                    
                    # Split meaning field by <br />
                    meaning_parts = fields[1].split('<br />')
                    sentence_en = clean_html(meaning_parts[0]) if meaning_parts else ""
                    
                    sentence_reading = clean_html(fields[2])
                    
                    current_item["sentence"] = sentence_jp
                    current_item["sentence_meaning"] = sentence_en
                    current_item["sentence_reading"] = sentence_reading
                    
            if len(vocab_list) >= 200:
                break

        # Generate TypeScript file
        ts_content = "export interface CoreVocab {\n"
        ts_content += "  word: string;\n"
        ts_content += "  reading: string;\n"
        ts_content += "  meaning: string;\n"
        ts_content += "  sentence: string;\n"
        ts_content += "  sentence_meaning: string;\n"
        ts_content += "  sentence_reading: string;\n"
        ts_content += "}\n\n"
        
        ts_content += "export const core2000Words: CoreVocab[] = "
        ts_content += json.dumps(vocab_list, ensure_ascii=False, indent=2)
        ts_content += ";\n"

        with open(TS_OUTPUT, 'w', encoding='utf-8') as f:
            f.write(ts_content)
            
        print(f"Successfully extracted {len(vocab_list)} words to {TS_OUTPUT}")
        
    finally:
        conn.close()
        shutil.rmtree(temp_dir)

if __name__ == '__main__':
    main()
