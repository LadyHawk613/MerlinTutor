# Christy Winstead Tutoring Website

A professional, responsive website for tutoring services in mathematics, science, computer skills, and chess. Built with clean HTML, CSS, and JavaScript for fast loading and easy maintenance.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Layout**: Clean, modern design with calming blue color scheme
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Accessible**: Built with accessibility best practices and keyboard navigation
- **SEO Optimized**: Semantic HTML structure and meta tags for search engines
- **Contact Form**: Functional contact form with validation
- **Scheduling Integration**: Ready for Calendly integration
- **Easy to Update**: Well-commented code for easy customization

## 📁 File Structure

```
christy-tutoring-website/
├── index.html          # Main HTML file
├── thank-you.html
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets (currently empty)
├── README.md           # This file
└── deployment-guide.md # Detailed deployment instructions
```

## 🚀 Quick Start

1. **Download the files** to your computer
2. **Open `index.html`** in a web browser to preview locally
3. **Customize the content** by editing the HTML file
4. **Deploy** using one of the methods below

## ✏️ Customization Guide

### 1. Update Personal Information

Edit `index.html` and replace the following placeholders:

- `35` - Your years of experience
- `BS Maht Education & Computer Science` - Your educational background
- `[Your degree/certification]` - Your credentials
- `[Years of teaching experience]` - Your experience details
- `[Relevant certifications or achievements]` - Your achievements
- `[Special training or expertise]` - Your specializations

### 2. Add Your Photo

1. Save your professional photo as `images/profile-photo.jpg`
2. Replace the SVG placeholder in the About section with:
   ```html
   <img src="images/profile-photo.jpg" alt="Christy Winstead" class="about__image">
   ```

### 3. Update Contact Information

In the Contact section, update:
✔️- Email address: `christy@christywinstead.com`
- Phone number: `(123) 456-7890`
- Add your actual Calendly link in `js/main.js`

### 4. Customize Colors

To change the color scheme, edit these CSS variables in `css/styles.css`:
- Primary Blue: `#2563eb`
- Light Blue: `#dbeafe`
- Text Gray: `#6b7280`
- Dark Gray: `#1f2937`

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

**Pros**: Free, easy to update, custom domain support
**Cons**: Public repository required for free tier

**Steps**:
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `tutoring-website`
3. Upload all website files to the repository
4. Go to Settings → Pages
5. Select "Deploy from a branch" → "main" → "/ (root)"
6. Your site will be available at `https://yourusername.github.io/tutoring-website`

**To update**: Simply edit files and commit changes to GitHub

### Option 2: Netlify (Recommended - Free)

**Pros**: Free tier, easy drag-and-drop deployment, custom domain, form handling
**Cons**: Limited build minutes on free tier

**Steps**:
1. Go to [netlify.com](https://netlify.com) and create an account
2. Drag and drop your website folder onto the Netlify dashboard
3. Your site will be deployed instantly with a random URL
4. Optionally, connect a custom domain in Site Settings

**To update**: Drag and drop the updated folder again

### Option 3: Vercel (Free)

**Pros**: Free, fast deployment, good performance
**Cons**: Requires GitHub account for easy updates

**Steps**:
1. Go to [vercel.com](https://vercel.com) and sign up
2. Connect your GitHub account
3. Import your repository
4. Deploy automatically

### Option 4: Traditional Web Hosting

**Pros**: Full control, can use existing hosting
**Cons**: Usually costs money, requires FTP/file manager

**Steps**:
1. Purchase hosting from providers like Bluehost, SiteGround, or GoDaddy
2. Upload files via FTP or hosting control panel
3. Point your domain to the hosting

## 📧 Contact Form Setup

The contact form currently shows a success message and creates a mailto link. For a fully functional form, you have several options:

### Option 1: Netlify Forms (Easiest)
If using Netlify, add `netlify` attribute to the form tag:
```html
<form class="form" id="contact-form" netlify>
```

### Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Replace the form action with your Formspree endpoint
3. Update the JavaScript to submit to Formspree

### Option 3: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their integration guide
3. Update the JavaScript to use EmailJS

## 📅 Calendly Integration

To add Calendly scheduling:

1. **Create a Calendly account** at [calendly.com](https://calendly.com)
2. **Set up your availability** and meeting types
3. **Get your Calendly link** (e.g., `https://calendly.com/your-username`)
4. **Update the JavaScript** in `js/main.js`:
   ```javascript
   // Replace the placeholder URL with your actual Calendly link
   const calendlyUrl = 'https://calendly.com/your-calendly-username';
   ```
5. **Optional**: Add Calendly's widget script for inline embedding

## 🔧 Technical Details

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance
- Optimized images and fonts
- Minimal JavaScript
- CSS Grid and Flexbox for layouts
- No external dependencies except Google Fonts

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast mode support
- Screen reader friendly

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Optimized text sizes for mobile reading
- Responsive images and layouts

## 🎨 Design Features

- **Clean Typography**: Inter font family for modern readability
- **Smooth Animations**: Hover effects and scroll animations
- **Professional Color Scheme**: Calming blues and neutrals
- **Card-based Layout**: Easy to scan information architecture
- **Visual Hierarchy**: Clear headings and content organization

## 🔄 Updating Content

### Adding New Testimonials
1. Copy an existing testimonial card in the HTML
2. Update the content, name, and role
3. Change the avatar initials

### Adding New Subjects
1. Copy an existing subject card
2. Update the icon, title, description, and details list
3. Ensure the grid layout accommodates the new card

### Modifying Sections
Each section is clearly marked in the HTML with comments. Simply find the section you want to edit and update the content.

## 🆘 Troubleshooting

### Common Issues

**Images not loading**:
- Check file paths are correct
- Ensure images are in the `images/` folder
- Verify image file extensions match the HTML

**Fonts not loading**:
- Check internet connection (Google Fonts requires internet)
- Verify the font link in the HTML head section

**Mobile menu not working**:
- Ensure JavaScript file is properly linked
- Check browser console for errors

**Contact form not working**:
- Set up a form handling service (see Contact Form Setup above)
- Check JavaScript console for errors

### Getting Help

If you need assistance:
1. Check the browser console for error messages
2. Validate your HTML at [validator.w3.org](https://validator.w3.org)
3. Test CSS at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

## 📄 License

This website template is created specifically for Christy Winstead Tutoring. Feel free to modify and use as needed for your tutoring business.

## 🎯 Next Steps

1. **Customize the content** with your personal information
2. **Add your professional photo**
3. **Set up Calendly** for appointment scheduling
4. **Choose a deployment method** and publish your site
5. **Set up contact form handling**
6. **Add Google Analytics** for visitor tracking (optional)
7. **Register a custom domain** (optional)

---

**Built with ❤️ for effective tutoring services**

