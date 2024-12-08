with open('index.md', 'r', encoding='utf-8') as file:
	content = file.read()

print(repr(content))
# Replace old_text with new_text in the content
new_content = content.replace('\n\n', '\\\n')
print((new_content))

with open('index.md', 'w', encoding='utf-8') as file:
	file.write(new_content)
