from rembg import remove
from PIL import Image

input_path = r"C:\Users\user\Documents\site zenith\zenith-vision\public\assets\robot_mascot.png"
output_path = r"C:\Users\user\Documents\site zenith\zenith-vision\public\assets\robot_mascot.png"

try:
    input_img = Image.open(input_path)
    output_img = remove(input_img)
    output_img.save(output_path)
    print("Background removed successfully.")
except Exception as e:
    print(f"Error: {e}")
