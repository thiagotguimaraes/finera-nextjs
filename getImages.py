import re

# Load the HTML file
with open("images.html", "r", encoding="utf-8") as file:
    html_content = file.read()

# Regex to match <img> tags and capture all attributes
img_tag_regex = r"<img\b[^>]*?>"

# Find all <img> tags in the HTML content
img_tags = re.findall(img_tag_regex, html_content)

# Save the extracted <img> tags to a new file
output_file = "extracted_images.txt"
with open(output_file, "w", encoding="utf-8") as file:
    file.write("Extracted <img> tags:\n")
    for img in img_tags:
        file.write(img + "\n")

print(f"Extracted <img> tags have been saved to {output_file}")