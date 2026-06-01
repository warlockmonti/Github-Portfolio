import cv2
import numpy as np
import os

def extract_sprites(image_path, prefix, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    
    # Read image
    img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print(f"Failed to load {image_path}")
        return
        
    print(f"Loaded {image_path} with shape {img.shape}")
    
    # If not 4 channels, add alpha
    if img.shape[2] == 3:
        b, g, r = cv2.split(img)
        alpha = np.ones(b.shape, dtype=b.dtype) * 255
        img = cv2.merge((b, g, r, alpha))

    # Convert to grayscale for thresholding
    gray = cv2.cvtColor(img, cv2.COLOR_BGRA2GRAY)
    
    # The background is white, so anything not white is the sprite
    # Threshold: white (255) becomes black (0), others become white (255)
    _, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)
    
    # Find contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Filter small contours
    valid_contours = []
    for cnt in contours:
        x, y, w, h = cv2.boundingRect(cnt)
        if w > 50 and h > 50: # Assume sprites are decent sized
            valid_contours.append((x, y, w, h))
            
    # Sort contours by y first (rows), then by x (columns)
    # Group by rows: if y diff < 100, same row
    valid_contours.sort(key=lambda b: b[1])
    rows = []
    current_row = []
    current_y = -1
    for b in valid_contours:
        if current_y == -1 or abs(b[1] - current_y) < h // 2:
            current_row.append(b)
            if current_y == -1: current_y = b[1]
        else:
            rows.append(sorted(current_row, key=lambda x: x[0]))
            current_row = [b]
            current_y = b[1]
    if current_row:
        rows.append(sorted(current_row, key=lambda x: x[0]))
        
    # Flatten
    sorted_boxes = [box for row in rows for box in row]
    
    print(f"Found {len(sorted_boxes)} sprites in {image_path}")
    
    pad = 10
    for i, (x, y, w, h) in enumerate(sorted_boxes):
        # Add padding
        x1 = max(0, x - pad)
        y1 = max(0, y - pad)
        x2 = min(img.shape[1], x + w + pad)
        y2 = min(img.shape[0], y + h + pad)
        
        sprite = img[y1:y2, x1:x2].copy()
        
        # Transparent background for the sprite
        # Find white pixels in sprite and make transparent
        sprite_gray = cv2.cvtColor(sprite, cv2.COLOR_BGRA2GRAY)
        mask = sprite_gray > 240
        sprite[mask, 3] = 0 # set alpha to 0 for white pixels
        
        out_path = os.path.join(output_dir, f"{prefix}_{i+1}.png")
        cv2.imwrite(out_path, sprite)
        print(f"Saved {out_path}")

if __name__ == '__main__':
    bunny_img = r"C:\Users\monti\OneDrive\Desktop\20260224_142828159_iOS.png"
    cat_img = r"C:\Users\monti\OneDrive\Desktop\20260224_142837253_iOS.png"
    out_dir = r"C:\Users\monti\OneDrive\Desktop\japanese-tutor\public\mascots"
    
    extract_sprites(bunny_img, "bunny", out_dir)
    extract_sprites(cat_img, "cat", out_dir)
