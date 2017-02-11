# Hi there!
This is the source code of my [personal site](https://alexpate.uk).

## What's the point of this repo?
Besides being an obvious place for me to keep track of my code, I would like to think that someone might find this useful. Got any questions, send me an email.

## Installation
Want to use this site locally?

- `git clone` the repo somewhere safe
- Run `bundle install && npm install`*
- To serve the site, `gulp`
- The site should now be running at http://localhost:4000

**I prefer to bypass Jekyll's built in asset pipeline, and use Gulp.**

## Deployment
The entire site is hosted on a Cloudfront/S3 combo. A rake task is provided, which in turn builds the site, and pushes up to S3.

In order to deploy, you will first need to create a `.env` file with the following contents:

```bash
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# Dev/Staging::Production
AWS_S3_BUCKET=alexpate.uk
AWS_CLOUDFRONT_DISTRIBUTION_ID=
```

Then simply run: `rake deploy:production`

## Say hello!
Feel free to say hello over on twitter [@alexjpate](http://twitter.com/alexjpate).
