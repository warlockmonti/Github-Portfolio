import cv2
import numpy as np
import os

def remove_bg(img_path, out_path):
    img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)
    if img is None: return
    
    if img.shape[2] == 3:
        b, g, r = cv2.split(img)
        alpha = np.ones(b.shape, dtype=b.dtype) * 255
        img = cv2.merge((b, g, r, alpha))

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGRA2GRAY)
    
    # Threshold background
    mask = gray > 240
    img[mask, 3] = 0 # Transparent
    
    # Crop to content (remove excessive transparent borders)
    y_nonzero, x_nonzero, _ = np.nonzero(img)
    if len(y_nonzero) > 0 and len(x_nonzero) > 0:
        y1, y2 = np.min(y_nonzero), np.max(y_nonzero)
        x1, x2 = np.min(x_nonzero), np.max(x_nonzero)
        # add some padding (10px)
        p = 10
        y1 = max(0, y1 - p)
        y2 = min(img.shape[0], y2 + p)
        x1 = max(0, x1 - p)
        x2 = min(img.shape[1], x2 + p)
        img = img[y1:y2, x1:x2]
        
    cv2.imwrite(out_path, img)

if __name__ == "__main__":
    happy_img = r"C:\Users\monti\.gemini\antigravity\brain\183e026b-b3c7-4ad2-9990-f9490673e810\cat_5_happy_1771948652107.png"
    sad_img = r"C:\Users\monti\.gemini\antigravity\brain\183e026b-b3c7-4ad2-9990-f9490673e810\cat_6_sad_1771948754009.png"
    out_dir = r"C:\Users\monti\OneDrive\Desktop\japanese-tutor\public\mascots"
    
    remove_bg(happy_img, os.path.join(out_dir, "cat_5.png"))
    remove_bg(sad_img, os.path.join(out_dir, "cat_6.png"))
