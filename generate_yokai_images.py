#!/usr/bin/env python3
"""
Generate yokai enemy images in pixel art style for JQuest Japanese Tutor
"""

import os
from PIL import Image, ImageDraw

def create_pixel_art_image(width, height, pixels, filename):
    """Create a pixel art image from pixel data"""
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    for y in range(height):
        for x in range(width):
            if y < len(pixels) and x < len(pixels[y]):
                color = pixels[y][x]
                if color != 'transparent':
                    draw.rectangle([x, y, x+1, y+1], fill=color)
    
    img = img.resize((64, 64), Image.NEAREST)  # Scale up for visibility
    img.save(filename)
    print(f"Created: {filename}")

def generate_nurikabe():
    """Generate Nurikabe (wall spirit) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent'],
        ['#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent'],
        ['#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513'],
        ['#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513'],
        ['transparent', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent'],
        ['transparent', 'transparent', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'nurikabe.png')

def generate_rokurokubi():
    """Generate Rokurokubi (long-necked woman) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#FFB6C1', '#FFB6C1', '#FFB6C1', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#FFB6C1', '#FFB6C1', '#FFB6C1', '#FFB6C1', '#FFB6C1', 'transparent', 'transparent'],
        ['transparent', '#FFB6C1', '#FFB6C1', '#FFB6C1', '#FFB6C1', '#FFB6C1', '#FFB6C1', 'transparent'],
        ['transparent', 'transparent', '#FFB6C1', '#FFB6C1', '#FFB6C1', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#FFB6C1', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#FFB6C1', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'rokurokubi.png')

def generate_kasa_obake():
    """Generate Kasa-obake (animated umbrella) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent'],
        ['#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent'],
        ['transparent', 'transparent', '#000000', '#000000', '#000000', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#000000', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#000000', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'kasa-obake.png')

def generate_kuchisake_onna():
    """Generate Kuchisake-onna (slit-mouthed woman) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', 'transparent', 'transparent'],
        ['transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', 'transparent'],
        ['transparent', 'transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#FF0000', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', '#FF0000', '#FF0000', '#FF0000', '#FF0000', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'kuchisake-onna.png')

def generate_zashiki_warashi():
    """Generate Zashiki-warashi (house spirit) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#FFD700', '#FFD700', '#FFD700', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#FFD700', '#FFD700', '#FFD700', '#FFD700', '#FFD700', 'transparent', 'transparent'],
        ['transparent', '#FFD700', '#FFD700', '#FFD700', '#FFD700', '#FFD700', '#FFD700', 'transparent'],
        ['transparent', 'transparent', '#FFD700', '#FFD700', '#FFD700', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#FFD700', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#FFD700', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'zashiki-warashi.png')

def generate_jubokko():
    """Generate Jubokko (tree demon) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#228B22', '#228B22', '#228B22', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#228B22', '#228B22', '#228B22', '#228B22', '#228B22', 'transparent', 'transparent'],
        ['#228B22', '#228B22', '#228B22', '#228B22', '#228B22', '#228B22', '#228B22', 'transparent'],
        ['#228B22', '#228B22', '#228B22', '#228B22', '#228B22', '#228B22', '#228B22', '#228B22'],
        ['transparent', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent'],
        ['transparent', 'transparent', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', '#8B4513', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'jubokko.png')

def generate_gashadokuro():
    """Generate Gashadokuro (giant skeleton) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#D3D3D3', '#D3D3D3', '#D3D3D3', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', 'transparent', 'transparent'],
        ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', 'transparent'],
        ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
        ['transparent', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', 'transparent'],
        ['transparent', 'transparent', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#D3D3D3', '#D3D3D3', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'gashadokuro.png')

def generate_yuki_onna():
    """Generate Yuki-onna (snow woman) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#F0F8FF', '#F0F8FF', '#F0F8FF', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF', 'transparent', 'transparent'],
        ['transparent', '#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF', 'transparent'],
        ['transparent', 'transparent', '#F0F8FF', '#F0F8FF', '#F0F8FF', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#F0F8FF', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#F0F8FF', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'yuki-onna.png')

def generate_yama_uba():
    """Generate Yama-uba (mountain witch) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent'],
        ['transparent', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', 'transparent'],
        ['transparent', 'transparent', '#8B4513', '#8B4513', '#8B4513', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'yama-uba.png')

def generate_funayurei():
    """Generate Funayūrei (boat ghost) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#4682B4', '#4682B4', '#4682B4', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#4682B4', '#4682B4', '#4682B4', '#4682B4', '#4682B4', 'transparent', 'transparent'],
        ['transparent', '#4682B4', '#4682B4', '#4682B4', '#4682B4', '#4682B4', '#4682B4', 'transparent'],
        ['transparent', 'transparent', '#4682B4', '#4682B4', '#4682B4', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#4682B4', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#4682B4', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'funayurei.png')

def generate_yurei():
    """Generate Yūrei (traditional ghost) image"""
    pixels = [
        ['transparent'] * 8,
        ['transparent', 'transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF', 'transparent', 'transparent', 'transparent'],
        ['transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', 'transparent', 'transparent'],
        ['transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', 'transparent'],
        ['transparent', 'transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#000000', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#000000', 'transparent', 'transparent', 'transparent', 'transparent'],
        ['transparent', 'transparent', 'transparent', '#8B4513', 'transparent', 'transparent', 'transparent', 'transparent']
    ]
    create_pixel_art_image(8, 8, pixels, 'yurei.png')

def main():
    """Generate all yokai images"""
    os.makedirs('japanese-tutor/public/assets', exist_ok=True)
    os.chdir('japanese-tutor/public/assets')
    
    print("Generating yokai images...")
    generate_nurikabe()
    generate_rokurokubi()
    generate_kasa_obake()
    generate_kuchisake_onna()
    generate_zashiki_warashi()
    generate_jubokko()
    generate_gashadokuro()
    generate_yuki_onna()
    generate_yama_uba()
    generate_funayurei()
    generate_yurei()
    print("All yokai images generated successfully!")

if __name__ == "__main__":
    main()