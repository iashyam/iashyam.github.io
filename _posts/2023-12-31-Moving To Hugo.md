---
categories:
- x
- y
date: '2023-12-31'
draft: false
image: assets/Moving To Hugo-1.png
math: true
tags:
- Article
- Tech
title: My New Website is on HUGO
---


I have been running a blog for about four years, about two hundred posts with poems and articles of various kinds. Everything was going great with my website, but when everything is going great, you lose interest in life. To make it more interesting, you need to step out of your comfort zone and do things that could be more interesting. So, I spent my vacations building a website for myself. 

# Why Leave Blogger?

Blogger has several advantages, like free hosting and deployment. It gives you a template, and you can use your data to make a website. And because it was all automatic, it had minimal options:

- It has got a notepad-like editor. You can't do much with it; you can't insert blockquotes, equations, or code blocks. 
- It has very few customization options. You have to work with the themes they provide, which aren't simple and beautiful. After learning a little bit of web dev myself, I wasn't satisfied with their services.
- Automation with Blogger was like chewing the iron. I spent much time learning Blogger _API_ for simple tasks like making a post. The gist of the argument is that you can't use programming with Blogger. If you want to make a change, you will have to do it manually. 
- Perhaps it is my fault, but keeping a hierarchy with the blogger editor is hard. After a time, the heading and subheading all get mixed up. 

I had been considering moving to a better platform for a long time. I had previously made some attempts to do so. I tried to set up a website on _WordPress_two years ago. WordPress is better and more customizable, but it's not free. (Actually, it's free, but it's got the same free options as Blogger.). 

# The Journey

The inspiration for Hugo came from my [Guide's Blog](https://rajeshrinet.github.io/) on GitHub. It was simple and beautifully built. I asked my guide about it, and he got me through this powerful static website builder called [Hugo](https://gohugo.io/). I started working on the website when I got home from IIT. 

Firstly, I tried a bunch of YouTube videos. I got some part of it, but I couldn't understand how it was happening. Then I tried a GitHub repo, which has an automated process for creating a website. After two days of full attention, I felt it wasn't going well, and I wanted to quit. 

But then I followed the documentation given on the official website. I read it carefully and went through the instructions one by one. I got to learn a lot in that process. I built a website on my local server. But when I went to deploy it, I faced a lot of trouble. 

Then I came across [this Article](https://www.henryleach.com/2021/10/moving-from-blogger-to-hugo/) By Henry Leach. It has got a much more detailed method from Blogger to Hugo. He has offered his own theme, too. So, I built the website using his theme. But it was facing the same problem in deployment. I reached out to him through _Github Issues_. He suggested using some hosting services other than Github Pages. 

So, I switched my hosting to Netlify. [Vishakha's tutorial](https://www.youtube.com/watch?v=LdhFqtPSdmE) came in handy to deploy my website on Netlify. After some changes in the base URL and all, my website was ready. 

# Why Hugo?

As a programmer myself, it gives me a shot of dopamine to write a website on my computer and host it online. It has become a fun thing to write a post on _VS Code_ and watch it automatically being published. Hugo has several advantages over Bloggers:
- The best thing about Hugo is that many people are already using Hugo. And these people are not ordinary people; they are developers. So, every issue you face is online in some forum like [Stack Overflow](https://stackoverflow.com/).
- It uses markdown syntax, which is easy to write and keep track of.
- Using markdown, I got to access various things that were previously not on Blogger, such as equations:
  $$\iota \hbar \frac{\partial\Psi}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\Psi + V(\bf{r})\Psi $$
  That meant I could now write scientific and programming articles, too. I can show off my science knowledge and cool programming projects here. 
- With markdown support, it became even more accessible to post scientific stuff; I can just download my Jupyter Notebook as markdown and post it here. It's as cool as that. 
- Hugo gave me a lot of control over my website. I can adjust the theme according to thousands of free themes available on Hugo Gallery and customize the **CSS** and **JS** and hence basically every part of them as I would like it. 
- It's an amazing combination: It's free of cost and not too technically complicated to handle. 

But Hugo doesn't provide everything. One thing that I would surely miss about Blogger is their mobile app. Most days, I just copied poems from my _Notes_ app and pasted them into the _Blogger_ app to keep the streak alive. With the Hugo website, I will have to create every post manually on my laptop. This is also a motivation because now I will spend more time writing lengthy articles rather than just a few words poem for a post. 

# Moving the Content:

The first thing I did after making the template website was to enable _Latex_ support. Henry's theme initially didn't allow Latex. So, I needed to change some JS to enable Latex on my website. [Adwin Kofler](https://hyperupcall.github.io/blog/) came to my aid and gave me a step-by-step guide to enable Latex.

Exporting content from Blogger was relatively easy. I told them that I wanted to back up the content. 

## Blog to Markdown

Creating the markdown for every blog post was challenging, but luckily, someone had already written scripts to do that task. I used [blog to md](https://github.com/palaniraja/blog2md) script, which was written by talented programmer [Palani Raja](https://www.palaniraja.com/). I put the `XML` file downloaded from Blogger in it and got a `.md` file for every post on Blogger. 

## Page Bundles

We needed to create a folder containing the markdown post and all the images for every post. This was a tedious task, but as I had mentioned earlier, Now I can use my programming knowledge to handle such tasks. I wrote this Python script, which created a folder for every post and placed the markdown file as `index.md` in it. 

```python 
import os

all_files = os.listdir()

for file in all_files:
    if file.endswith(".md"):

        #name the folder same as post
        folder_name = file[:-3]
        folder_path = os.getcwd() + '/' + folder_name
        os.mkdir(folder_name)
        os.rename(file, os.path.join(folder_path, 'index.md'))
```

## Extracting Images 
The next step is to download the pictures. The above conversion wrote only the links to the pictures, as currently hosted on Blogger, into the files in Markdown format. The pictures are still on the Blogger servers.

Here, my script skills came short. While I could have spent some time and written another script for this, I felt Lazy, and I asked __ChatGPT__ to write a code for me. The AI provided me the following code, which will download the images from links given in the `.md` file and place them in the same folder. 

```python 
import os
import re
import requests
from tqdm import tqdm

def download_image(url, destination):
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(destination, 'wb') as file:
            file.write(response.content)
        #print(f"Image downloaded successfully to {destination}")
    #else:
        #print(f"Failed to download image. Status code: {response.status_code}")

def process_folder(folder_path):
    # List all files in the folder
    files = os.listdir(folder_path)

    # Look for the .md file with the same name as the folder
    md_file = 'index.md'

    if md_file:
        md_file_path = os.path.join(folder_path, md_file)

        # Read the content of the .md file
        with open(md_file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Extract the first image link from the .md file
        image_match = re.search(r'!\[.*?\]\((.*?)\)', content)

        if image_match:
            image_link = image_match.group(1)

            if image_link.startswith(('http://', 'https://')):
                # Download the online image and save it as "featured.*" in the same folder
                response = requests.head(image_link)
                content_type = response.headers.get('content-type')

                image_extension = content_type.split('/')[-1] if content_type else 'png'
                image_destination = os.path.join(folder_path, f'featured.{image_extension}')

                download_image(image_link, image_destination)

                # Add "featured_image: 'featured.ext'" to the third line of the .md file
                content_lines = content.split('\n')
                content_lines.insert(2, f'featured_image: \'featured.{image_extension}\'')
                content = '\n'.join(content_lines)

                # Write the modified content back to the .md file
                with open(md_file_path, 'w', encoding='utf-8') as file:
                    file.write(content)

def process_folders_in_directory(root_directory):
    # Iterate over all folders in the root directory
    for folder_name in tqdm(os.listdir(root_directory)):
        folder_path = os.path.join(root_directory, folder_name)
        
        # Check if the item in the root directory is a folder
        if os.path.isdir(folder_path):
            process_folder(folder_path)

# Replace 'your_root_directory' with the path to the root directory containing the folders
root_directory = os.getcwd()

# Process all folders in the root directory
process_folders_in_directory(root_directory)
```


## Resizing Images

The images downloaded by the above code were high resolution. They were large in size, so it took some time and data to upload on GitHub. Also, it makes the site load slower. Again, the code I used to resize the images was written by ChatGPT.

```python 
from PIL import Image
import os

def resize_image(image_path, output_path, factor):
    try:
        with Image.open(image_path) as img:
            new_width = int(img.width * factor)
            new_height = int(img.height * factor)
            img = img.resize((new_width, new_height), Image.ANTIALIAS)
            img.save(output_path)
            print(f"Image resized successfully to {new_width}x{new_height}: {output_path}")
    except Exception as e:
        print(f"Error resizing image: {e}")

def resize_images_in_folder(folder_path, factor):
    # List all files in the folder
    files = os.listdir(folder_path)

    # Look for image files in the folder
    image_files = [f for f in files if f.lower().endswith(('.png,' '.jpg,' '.jpeg,' '.gif,' '.bmp'))]

    for image_file in image_files:
        image_path = os.path.join(folder_path, image_file)
        output_path = os.path.join(folder_path, f"{image_file}")

        resize_image(image_path, output_path, factor)

def resize_images_in_directory(root_directory, factor):
    # Iterate over all folders in the root directory
    for folder_name in os.listdir(root_directory):
        folder_path = os.path.join(root_directory, folder_name)
        
        # Check if the item in the root directory is a folder
        if os.path.isdir(folder_path):
            resize_images_in_folder(folder_path, factor)

# Replace 'your_root_directory' with the path to the root directory containing the folders
root_directory = os.getcwd()

# Set the factor for resizing (e.g., 0.6 for 60% reduction)
resize_factor = 0.8

# Resize images in all folders in the root directory
resize_images_in_directory(root_directory, resize_factor)
```

## Fixing the poems

After doing all that hard work, I wasn't still sure about deploying the website. I locally built the website on my computer using the `Hugo server,` I noticed that the poems were not behaving as expected. They had large gaps between the lines, and the verses were not rendered perfectly. That meant that I would have to edit the markdown file of every poem. But thankfully, I knew some programming. I had to do much manual tweaking to find out the problem with an example post, and then I wrote the script to fix the poems. I wrote this script myself, not using ChatGPT.

```python 
def process_folder(folder):
    md_file = os.path.join(folder, 'index.md')

    flag = True
    with open(md_file, 'r') as f:
        content = f.read()
        if 'tags: \n- Poem' in content:
            print("Poem hai")
            flag = True
            
        if 'tags: \n- Hindi Poem' in content:
            print("Poem Hindi hai")
                flag = True
    
    if flag:
        new = content.replace("\n\n", '\\\n')
        with open(md_file,'w') as f:
            f.write(new)
```

## Hosting and Deployment 

As I said, I had already deployed my website on __Netlify__ using Vaishakha's tutorial. But that was not all; I wanted a custom domain because the subdomain Netlify provided was ugly. Now I am broke. 

Then I remembered that [Student Developer Pack](https://education.github.com/pack) provides a free domain service that I had yet to use. So I went there and looked for options. I wanted a good domain name. There were three options available: _.me_, _.tech_ or _.live_; two required Credit Card registration, and one was free. So I purchased [therestframe.tech](https://therestframe.tech). 

But that didn't include an SSL certificate, and the domain was practically useless without an SSL certificate. Then I went back to the previous two domains and did some tweaking, but all in vain. Then I found out that [cloudflare](https://www.cloudflare.com/) provides a free SSL certificate. Then, I headed over there and registered an SSL certificate. And guess what: Netlify doesn't accept Cloudflare SSL. I was devastated at this point. 

I did further research, and [Andrew Lock](https://andrewlock.net/) rescued me from this horrible shock. Following his [tutorial](https://andrewlock.net/configuring-https-with-netlify-and-cloudflare/), I could join Netlify and Cloudfare. (Do the hyperlinks look ugly here? Please tell me!). 

I registered the new domain name, and finally, my website was up and running. 

## Dark Mode
After the website was online and I have officially launched the website on all my channels then, one of my friends, suggested that I should put a dark theme since some of use read in the night. That was a brilliant suggestion except that I didn't know anything about how to turn on dark mode. Originally the theme didn't support dark theme. 

Starting as a starter, I put the query in Google's search engine: _How to turn on dark mode in a website?_ The answer was simple: Make the background black and make the text white. As simple as that but not so simple it turned out to be. I changed the background color and font color and the website was ready in dark mode. 

But I wasn't satisfied. I cared for the light theme. I wanted to put a button at the corner which swiches light mode to dark mode. Intially my idea was to put a sun for the light theme and moon for the dark theme. When we click on the moon, the light theme turns to dark and moon turns to sun. I gave the exect idea to __ChatGPT__ and asked it to write a code. I copy pasted the code according to the instructions given. It didn't work. 

I said to GPT that it doesn't work and it gave me modified code. That didn't work as well. I was angry at this moment. But then I was a coder myself. I put my debugger glasses on and began the mission to find the bug. I started with the usual `console.log` function, and found out that the button was working fine but it wasn't loading CSS. After working for two hours in browser's developer tools and tweaking a lot of things, I found out the solution. It was to make a class `dark-mode` saperately and then giving the body the class using JavaScript. 

But I wasn't done yet, some elements like links and tags were not looking good in dark mode. So I had to play a lot around them to finally adjust them and finalize the dark mode. 

# Afterthoughts 

It feels great to see my website up and running. It gives me a lot of joy. But there are a lot of questions and concerns. 

Will I post regularly now that I can't merely copy and paste? How long will it take me to go back to the ugly and basic zone of Blogger? What will happen when the free domain expires? 

Right now, I don't know the answer to any of these questions. But I may be sure of one thing: I will never be shy of research about my project or any other thing. This experience of building a website has taught me a lot of things, and the biggest lesson being:

> There is an answer to every question; you must search harder. 

I read the documentations and long, boring texts, and I watched plenty of YouTube, but I went further in my efforts this time; I actually contacted the developers of these programs to learn more about the technology, and this is some experience. Every time we try to do something we are uncomfortable with, we learn something we were unaware of. These are some great lessons. 

I look forward to new challenges in the coming year, $2024$. I will not underestimate myself and will always be shy and bold in doing complex research to acquire knowledge. 

![Haapy New Year](https://www.hindustantimes.com/ht-img/img/2023/12/29/550x309/cover_1703849413460_1703849423727.jpg)