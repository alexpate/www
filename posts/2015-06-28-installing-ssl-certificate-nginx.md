---
title:  "Installing a Positive SSL certificate on Nginx"
summary: "This is a quick guide of how to install an SSL certificate on an nginx server. It assumes that you"
---

This is a quick guide of how to install an SSL certificate on an nginx server. It assumes that you already have a server set up, and have purchased an SSL certificate. If not, you can pick one up from [namecheap](http://www.namecheap.com/?aff=88180) for a pretty decent price. (And yes, that is an affiliate link!)

## Note

The examples below are just that, so remember to make the nesscary changes before copying/pasting.

## 1 - Generate CSR

Open up the terminal, and SSH in to your server. The following will generate a CSR block.

```bash
openssl req -new -newkey rsa:2048 -nodes -keyout your_domain_here.key -out your_domain_here.csr
```

You will then be asked to put in some more information about the admin of the certificate:

```bash
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:GB
State or Province Name (full name) [Some-State]:Hertfordshire
Locality Name (eg, city) []:St Albans
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Alexander Pate
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:alexpate.uk
Email Address []:alex@alexpate.uk

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```

Those last three are optional, so just press enter to skip through them.

## 2 - Copy CSR

Open the CSR in terminal with the following. It should be a jumble of letters and numbers.

```python
nano your_domain_here.csr
```

## 3 - Paste in to issuer.

Depending on who you purchased the certificate from, there might be some different steps. If you purchased from NameCheap, then you'll need to login to your account, head to 'manage SSL Certificates', and click on 'issue'. You'll then be asked to select the server configuration (nginx), and then paste the contents of the CSR in to the box.

They also might require some other information. Likewise, once this is done, you might also get a domain validation email asking you to permit the issuance of the certificate (that bit's all pretty straight forward).

## 4 - Prepare the certificate

A couple of minutes later, you'll receive an email containing the main bulk of the certificate. You should have four main files in the zip:

```bash
AddTrustExternalCARoot.crt
your_domain.crt
COMODORSAAddTrustCA.crt
COMODORSADomainValidationSecureServerCA.crt
```

You can ignore the AddTrustExternalCARoot.crt for the moment, that's not required.

Before we upload the files, we need to bundle them in to a single file. To do this, head back to the terminal, and change directory in to wherever the zip file is (probably downloads).

(Pro-tip: instead of typing the whole location, type CD and drag and drop the folder in to the terminal).

Paste the following:

```bash
cat your_domain.crt COMODORSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt > your_domain.cer
```

## 5 - Upload to server

You'll now see that a new file (your_domain.cer) has been created. Upload this file to your server. I always keep my certificates here:

```bash
/etc/ssl/customcerts
```

but as long as you're consistent, it doesn't really matter.

Likewise, when you were generating your CSR, you might have noticed a .key file was also created. Copy this file to the certificates folder. You'll also want to change the permissions on this file.

```bash
cd /etc/ssl/customcerts
chmod 400 your_domain.key
```

## 6 - Upload your nginx server block

Open up your nginx config file (/etc/nginx/sites-available/).

There's no right way of doing this, but here's an excerpt of what mine looks like. You'll need to add a new server block listening to the 443 port (ssl). You'll also need to reference the location of the ssl_certificate, and ssl_certificate_key files.

The bottom block redirects non-https to https.

```nginx
server {
    listen 443 default ssl ipv6only=on;

    server_name alexpate.uk;

    ssl_certificate /etc/ssl/customcerts/alexpate_uk.cer;
    ssl_certificate_key /etc/ssl/customcerts/alexpate.key;

    root /var/www/;
    index index.html index.htm;

}

server {
    listen 80;
    server_name alexpate.uk;
    rewrite ^ https://$server_name$request_uri? permanent;
}
```

## 7 - Restart nginx

Restart nginx, and you're all good to go!

```bash
service nginx restart
```
