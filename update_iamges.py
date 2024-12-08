import os
import re

# Function to update the image path in the front matter and content
def update_image_paths_in_file(file_path, post_title):
    with open(file_path, 'r') as file:
        content = file.read()

    # Update image path in the front matter
    # Assuming image paths in front matter follow this pattern: "featured_image: 'image.ext'"
    content = re.sub(r"featured_image:\s*['\"](.*?)['\"]", lambda m: f"featured_image: '/assets/{post_title}-{m.group(1).split('/')[-1]}'", content)

    # Update image paths in the content body
    # Assuming the images in the body are written like ![alt text](/path/to/image.ext)
    content = re.sub(r'!\[.*?\]\((.*?)\)', lambda m: f"![alt text](/assets/{post_title}-{m.group(1).split('/')[-1]})", content)

    # Write back the updated content to the same file
    with open(file_path, 'w') as file:
        file.write(content)

# Loop over all post directories and apply the update
def update_all_posts(posts_directory):
    for folder in os.listdir(posts_directory):
        post_folder = os.path.join(posts_directory, folder)
        if os.path.isdir(post_folder):
            for file_name in os.listdir(post_folder):
                if file_name == "index.md":
                    post_file_path = os.path.join(post_folder, file_name)

                    # Extract the post title (subfolder name) and the first image name
                    post_title = folder
                    update_image_paths_in_file(post_file_path, post_title)

                    print(f"Updated image paths for post: {post_title}")

# Specify the directory where your posts are stored
posts_directory = "_posts"
update_all_posts(posts_directory)
