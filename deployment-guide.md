# Detailed Deployment Guide

This guide provides step-by-step instructions for deploying your tutoring website using various free and paid hosting options.

## 🎯 Recommended Deployment Path

For most users, we recommend this order of preference:

1. **Netlify** (Easiest, best features)
2. **GitHub Pages** (Good for developers)
3. **Vercel** (Good performance)
4. **Traditional hosting** (If you already have hosting)

---

## 🚀 Method 1: Netlify (Recommended)

**Best for**: Beginners, contact forms, custom domains
**Cost**: Free (with paid upgrades available)
**Time**: 5 minutes

### Step-by-Step Instructions

1. **Prepare Your Files**
   - Ensure all files are in a single folder named `christy-tutoring-website`
   - Double-check that `index.html` is in the root of this folder

2. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up" and create an account (email or GitHub)

3. **Deploy Your Site**
   - Once logged in, you'll see the Netlify dashboard
   - Look for the area that says "Want to deploy a new site without connecting to Git?"
   - Drag and drop your entire `christy-tutoring-website` folder onto this area
   - Netlify will automatically deploy your site

4. **Get Your URL**
   - After deployment (usually 30-60 seconds), you'll get a random URL like `https://amazing-curie-123456.netlify.app`
   - Your site is now live!

5. **Customize Your URL (Optional)**
   - In your site dashboard, click "Site settings"
   - Click "Change site name"
   - Enter a custom name like `christy-tutoring` to get `https://christy-tutoring.netlify.app`

6. **Add Custom Domain (Optional)**
   - In Site settings, click "Domain management"
   - Click "Add custom domain"
   - Enter your domain (e.g., `christywinstead.com`)
   - Follow the DNS setup instructions

### Updating Your Site on Netlify

**Method 1: Drag and Drop**
- Make changes to your local files
- Drag and drop the updated folder to your site's "Deploys" page

**Method 2: Git Integration (Advanced)**
- Connect your GitHub repository
- Push changes to GitHub to automatically deploy

### Netlify Contact Form Setup

To make your contact form functional:

1. **Add Netlify Form Attribute**
   In your `index.html`, find the contact form and add `netlify`:
   ```html
   <form class="form" id="contact-form" netlify>
   ```

2. **Add Hidden Field**
   Add this hidden field inside your form:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

3. **Update Form Action**
   ```html
   <form class="form" id="contact-form" netlify name="contact" method="POST">
   ```

4. **Redeploy**
   Upload your updated files to Netlify

5. **View Submissions**
   - Go to your Netlify dashboard
   - Click on your site
   - Go to "Forms" to see submissions

---

## 🐙 Method 2: GitHub Pages

**Best for**: Developers, version control, free hosting
**Cost**: Free
**Time**: 10 minutes

### Step-by-Step Instructions

1. **Create GitHub Account**
   - Go to [github.com](https://github.com)
   - Click "Sign up" and create an account

2. **Create New Repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it `tutoring-website` (or any name you prefer)
   - Make sure it's set to "Public"
   - Check "Add a README file"
   - Click "Create repository"

3. **Upload Your Files**
   - In your new repository, click "uploading an existing file"
   - Drag and drop all your website files (index.html, css folder, js folder, etc.)
   - Scroll down and click "Commit changes"

4. **Enable GitHub Pages**
   - In your repository, click "Settings" (top menu)
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

5. **Get Your URL**
   - GitHub will show you the URL where your site is published
   - It will be: `https://yourusername.github.io/tutoring-website`
   - It may take a few minutes to become available

### Updating Your GitHub Pages Site

1. **Edit Files Directly on GitHub**
   - Click on any file in your repository
   - Click the pencil icon to edit
   - Make changes and commit

2. **Upload New Files**
   - Go to your repository
   - Click "Add file" → "Upload files"
   - Drag and drop updated files

### Custom Domain with GitHub Pages

1. **Add CNAME File**
   - In your repository, create a new file called `CNAME`
   - Add your domain name (e.g., `christywinstead.com`)
   - Commit the file

2. **Configure DNS**
   - In your domain registrar's DNS settings
   - Add a CNAME record pointing to `yourusername.github.io`

---

## ⚡ Method 3: Vercel

**Best for**: Fast deployment, good performance
**Cost**: Free
**Time**: 5 minutes

### Step-by-Step Instructions

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or email

2. **Import Project**
   - Click "New Project"
   - If you have GitHub: Import your repository
   - If not: Use "Browse All Templates" and upload files

3. **Deploy**
   - Vercel will automatically detect it's a static site
   - Click "Deploy"
   - Your site will be live in seconds

4. **Get Your URL**
   - You'll get a URL like `https://tutoring-website-abc123.vercel.app`

### Custom Domain with Vercel

1. **Go to Project Settings**
   - Click on your project
   - Go to "Settings" → "Domains"

2. **Add Domain**
   - Enter your domain name
   - Follow the DNS configuration instructions

---

## 🌐 Method 4: Traditional Web Hosting

**Best for**: If you already have hosting, need full control
**Cost**: Usually $3-15/month
**Time**: 15-30 minutes

### Popular Hosting Providers

- **Bluehost**: Good for beginners, WordPress integration
- **SiteGround**: Fast, good support
- **HostGator**: Affordable, reliable
- **GoDaddy**: Well-known, many features
- **Namecheap**: Good value, includes domain

### Step-by-Step Instructions

1. **Purchase Hosting**
   - Choose a hosting provider
   - Select a plan (basic shared hosting is sufficient)
   - Register or connect your domain

2. **Access File Manager**
   - Log into your hosting control panel (cPanel, Plesk, etc.)
   - Find "File Manager" or "Files"
   - Navigate to `public_html` or `www` folder

3. **Upload Files**
   - Upload all your website files to the public folder
   - Make sure `index.html` is in the root directory

4. **Test Your Site**
   - Visit your domain name
   - Your site should be live

### FTP Upload (Alternative)

1. **Get FTP Credentials**
   - Find FTP details in your hosting control panel

2. **Use FTP Client**
   - Download FileZilla (free FTP client)
   - Connect using your FTP credentials
   - Upload files to the public folder

---

## 📧 Contact Form Solutions

Since static sites can't process forms server-side, here are solutions:

### 1. Netlify Forms (If using Netlify)
- Easiest option
- Built into Netlify
- See Netlify section above

### 2. Formspree
- Works with any hosting
- Free tier: 50 submissions/month
- Steps:
  1. Go to [formspree.io](https://formspree.io)
  2. Create account and get form endpoint
  3. Update form action: `<form action="https://formspree.io/f/your-id" method="POST">`

### 3. EmailJS
- Send emails directly from JavaScript
- Free tier: 200 emails/month
- Steps:
  1. Sign up at [emailjs.com](https://emailjs.com)
  2. Follow their integration guide
  3. Update your JavaScript

### 4. Google Forms (Simple Alternative)
- Create a Google Form
- Embed it in your site
- Free and reliable

---

## 🔧 Domain Setup

### Buying a Domain

**Recommended Registrars**:
- **Namecheap**: Good prices, free privacy protection
- **Google Domains**: Simple interface, good integration
- **Cloudflare**: Competitive pricing, good features

**Domain Suggestions**:
- `christywinstead.com`
- `christywinsteadtutoring.com`
- `winsteadtutoring.com`
- `christytutoring.com`

### Connecting Domain to Hosting

**For Netlify/Vercel/GitHub Pages**:
- Add domain in your hosting dashboard
- Update DNS records at your domain registrar
- Usually takes 24-48 hours to propagate

**For Traditional Hosting**:
- Point nameservers to your hosting provider
- Or update A records to your hosting IP

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Create Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Set up a new property for your website

2. **Get Tracking Code**
   - Copy the Global Site Tag (gtag.js) code

3. **Add to Website**
   - Paste the code in the `<head>` section of your `index.html`

4. **Verify Setup**
   - Visit your site and check if data appears in Analytics

---

## 🚨 Troubleshooting Common Issues

### Site Not Loading
- **Check file names**: Ensure `index.html` is spelled correctly
- **Check file location**: Make sure `index.html` is in the root directory
- **Wait for propagation**: DNS changes can take up to 48 hours

### Images Not Showing
- **Check file paths**: Ensure image paths in HTML match actual file locations
- **Check file names**: File names are case-sensitive on most servers
- **Upload images**: Make sure image files were uploaded to the `images/` folder

### Contact Form Not Working
- **Set up form handling**: Static sites need a form service (see Contact Form Solutions)
- **Check form attributes**: Ensure proper `action` and `method` attributes

### Mobile Menu Not Working
- **Check JavaScript**: Ensure `main.js` file is uploaded and linked correctly
- **Check browser console**: Look for JavaScript errors

### Fonts Not Loading
- **Check internet connection**: Google Fonts requires internet access
- **Check font link**: Verify the Google Fonts link in your HTML head

---

## 📞 Getting Help

If you encounter issues:

1. **Check hosting provider documentation**
2. **Search for specific error messages**
3. **Contact hosting support** (most providers offer 24/7 chat)
4. **Use browser developer tools** to check for errors
5. **Validate your HTML** at [validator.w3.org](https://validator.w3.org)

---

## 🎉 Congratulations!

Once deployed, your professional tutoring website will be live and ready to attract students. Remember to:

- Test all links and forms
- Check mobile responsiveness
- Set up analytics
- Add your site to Google Search Console
- Share your new website URL!

Your website is now ready to help grow your tutoring business!

