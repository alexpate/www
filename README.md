# journal.alexpate.uk

👋 Welcome to the source code of my [personal site](https://alexpate.uk).

## Installation

How to get this site running locally:

- `git clone https://github.com/alexpate/alexpate.uk`
- `npm install`
- To develop the site: `npm run start`
- To build the site for production: `npm run build`
- The site should now be running at http://localhost:8000

## Deployment

As it is a static site, the site is hosted in an S3 bucket, which is then served via a heavily cached cloudfront instance.

Build and deployment is triggered at every push to master, and takes place in GitHub actions. See the [main workflow file](.github/workflows/build-and-deploy.yml)

## Say hello!

Feel free to say hello over on twitter [@alexjpate](http://twitter.com/alexjpate).
