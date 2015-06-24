# Hi there!
This is the as-of-yet unpublished source code of my personal site.

## What's the point of this repo
This repo is more for me. However, when I was first learning web development I learnt a lot looking at other developers code. Hopefully by open sourcing this, someone might find it useful.

## To-do list
- Social meta tags (Twitter Cards, Open Graph)
- General speed optimisation
- Setup nginx redirects (server only)
- Setup nginx 404

## The workflow
- Local development
- Commit changes to GitHub
- GitHub sends posthook to my server
- Server pulls latest master and runs `jekyll build`
