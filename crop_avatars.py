import os
from PIL import Image

src_dir = "/Users/haldwani/.gemini/antigravity-ide/brain/f7cb9428-0f35-4644-a4d7-eb78eab3ccff/.user_uploaded"
dest_dir = "public/images/reviews"

os.makedirs(dest_dir, exist_ok=True)

files = [
    ("media_1787379498843.png", "shuchi.png"),
    ("media_1787379511392.png", "harshit.png"),
    ("media_1787379520933.png", "amar.png"),
    ("media_1787379532372.png", "paras.png"),
    ("media_1787379541652.png", "vijay.png"),
    ("media_1787379655040.png", "prabjot.png"),
    ("media_1787379669608.png", "sagar.png"),
    ("media_1787379677893.png", "vaibhav.png"),
]

for src, dest in files:
    try:
        path = os.path.join(src_dir, src)
        img = Image.open(path)
        
        # Crop top left corner roughly around avatar (approx x: 20-200, y: 20-200)
        # Google maps mobile screenshots usually have the avatar at ~x:40, y:40, width ~150
        width, height = img.size
        # Crop square from left side, with a small top padding
        crop_size = int(width * 0.25) # Avatar is roughly 15-20% of width
        left = int(width * 0.05)
        top = int(height * 0.05)
        right = left + crop_size
        bottom = top + crop_size
        
        cropped = img.crop((left, top, right, bottom))
        cropped.save(os.path.join(dest_dir, dest))
        print(f"Cropped {dest}")
    except Exception as e:
        print(f"Failed {src}: {e}")
