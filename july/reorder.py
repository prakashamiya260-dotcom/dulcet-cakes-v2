import re

file_path = r"c:\Users\praka\Downloads\Dulcet cakes\july\app\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find the cakes array
match = re.search(r"const cakes: Cake\[\] = \[\s*([\s\S]*?)\n\];", content)
if not match:
    print("Could not find cakes array")
    exit(1)

cakes_str = match.group(1)

# Split into individual cake objects
# Each cake object starts with '{' and ends with '},' or '}'
cake_objects = re.findall(r"(\{\s*id: \"[^\"]+\"[\s\S]*?\})", cakes_str)

order = ["strawberry-bliss", "classic-chocolate", "red-velvet", "blueberry-delight"]
reordered_cakes = []
remaining_cakes = []

for c_obj in cake_objects:
    id_match = re.search(r'id: "([^"]+)"', c_obj)
    if id_match:
        c_id = id_match.group(1)
        if c_id in order:
            pass # Handle below
        else:
            remaining_cakes.append((c_id, c_obj))

# Add in correct order
for o_id in order:
    for c_obj in cake_objects:
        if f'id: "{o_id}"' in c_obj:
            reordered_cakes.append(c_obj)
            break

# Add the rest
for _, c_obj in remaining_cakes:
    reordered_cakes.append(c_obj)

# Reconstruct
new_cakes_str = "const cakes: Cake[] = [\n    " + ",\n    ".join(reordered_cakes) + ",\n];"
content = content[:match.start()] + new_cakes_str + content[match.end():]

# Also fix the initial video load
content = content.replace('v1.src = "/videos/hero.mp4";', 'v1.src = cakes[0].video || "/videos/hero.mp4";')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully reordered cakes and fixed initial video!")
