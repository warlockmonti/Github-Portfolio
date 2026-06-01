import os
import re
import requests
import json

VOICEVOX_BASE = "http://localhost:50021"
SPEAKER_ID = 13
AUDIO_DIR = r"C:\Users\monti\OneDrive\Desktop\japanese-tutor\public\audio"
DATA_DIR = r"C:\Users\monti\OneDrive\Desktop\japanese-tutor\src\data"
USEAUDIO_PATH = r"C:\Users\monti\OneDrive\Desktop\japanese-tutor\src\hooks\useAudio.ts"

# Regex to detect Japanese characters (Hiragana, Katakana, Kanji)
JP_REGEX = re.compile(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]')

def extract_strings_from_file(filepath):
    """Extract potential Japanese audio keys using regex rules."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match common dict properties in the game data
    patterns = [
        r'japanese:\s*[\'"`](.+?)[\'"`]',
        r'char:\s*[\'"`](.+?)[\'"`]',
        r'word:\s*[\'"`](.+?)[\'"`]',
        r'(?<!_)sentence:\s*[\'"`](.+?)[\'"`]' # For core2000.ts (avoid sentence_meaning)
    ]
    
    extracted = set()
    for pattern in patterns:
        matches = re.findall(pattern, content)
        for m in matches:
            # Must contain actual Japanese characters
            if JP_REGEX.search(m):
                # Unescape if it was JSON string escaped
                m = m.replace('\\"', '"').replace("\\'", "'")
                extracted.add(m)
                
    return extracted

def generate_audio(text: str, output_path: str) -> bool:
    try:
        resp = requests.post(f"{VOICEVOX_BASE}/audio_query", params={"text": text, "speaker": SPEAKER_ID}, timeout=15)
        if resp.status_code != 200:
            print(f"  ERROR audio_query for '{text}': {resp.status_code}")
            return False
        
        synth = requests.post(f"{VOICEVOX_BASE}/synthesis", params={"speaker": SPEAKER_ID}, headers={"Content-Type": "application/json"}, data=resp.text, timeout=30)
        if synth.status_code != 200:
            print(f"  ERROR synthesis for '{text}': {synth.status_code}")
            return False
            
        with open(output_path, 'wb') as f:
            f.write(synth.content)
        return True
    except Exception as e:
        print(f"  EXCEPTION for '{text}': {e}")
        return False

def main():
    # 1. Parse useAudio.ts to find existing keys and highest file number
    with open(USEAUDIO_PATH, 'r', encoding='utf-8') as f:
        audio_content = f.read()

    existing_keys = set()
    highest_num = 0
    
    # Matches: 'Some string': '123.wav'
    map_matches = re.findall(r'[\'"`](.+?)[\'"`]\s*:\s*[\'"`](\d{3})\.wav[\'"`]', audio_content)
    for text, num_str in map_matches:
        existing_keys.add(text)
        num = int(num_str)
        if num > highest_num:
            highest_num = num

    print(f"Found {len(existing_keys)} existing audio mappings. Highest file number: {highest_num:03d}.wav")

    # 2. Extract strictly from all data files
    all_needed = set()
    for fname in os.listdir(DATA_DIR):
        if fname.endswith('.ts'):
            filepath = os.path.join(DATA_DIR, fname)
            extracted = extract_strings_from_file(filepath)
            all_needed.update(extracted)

    new_phrases = [p for p in all_needed if p not in existing_keys]
    print(f"Total new phrases needing audio: {len(new_phrases)}")

    if not new_phrases:
        print("Everything is up to date!")
        return

    # 3. Generate missing audio
    next_num = highest_num + 1
    new_entries = []

    for phrase in new_phrases:
        filename = f"{next_num:03d}.wav"
        path = os.path.join(AUDIO_DIR, filename)
        print(f"Generating [{next_num:03d}.wav] for '{phrase}' ... ", end='', flush=True)
        
        if generate_audio(phrase, path):
            print("OK")
            new_entries.append((phrase, filename))
            next_num += 1
        else:
            print("FAILED")

    # 4. Output block to append to useAudio.ts
    out_file = "new_audio_entries.txt"
    with open(out_file, 'w', encoding='utf-8') as f:
        for phrase, fname in new_entries:
            escaped = phrase.replace("'", "\\'")
            f.write(f"    '{escaped}': '{fname}',\n")
            
    print(f"\nDone! Wrote {len(new_entries)} entries to {out_file}. Paste them into useAudio.ts AUDIO_MAP.")

if __name__ == "__main__":
    main()
