import json

print("Paste your bullet list. Press Enter twice when finished:")

lines = []
while True:
    line = input()
    if line == "":
        break
    lines.append(line)

items = [
    line.lstrip("-*• ").strip()
    for line in lines
    if line.strip()
]

print(json.dumps(items, indent=4))