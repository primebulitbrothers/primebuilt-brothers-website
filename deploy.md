# Deployment Guide - PrimeBuilt Brothers Website

This guide will walk you through deploying your React frontend and Node.js backend to production.

## 🚀 Frontend Deployment (React)

### Option 1: Netlify (Recommended for beginners)

1. **Build your React app:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy!

3. **Custom Domain (Optional):**
   - Go to Site Settings > Domain Management
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts and deploy!**

### Option 3: GitHub Pages

1. **Add homepage to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add scripts to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🔧 Backend Deployment (Node.js)

### Option 1: Heroku

1. **Install Heroku CLI:**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Windows
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Create Heroku app:**
   ```bash
   heroku create your-app-name
   ```

4. **Set environment variables:**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set GOOGLE_FORM_URL=your-google-form-url
   ```

5. **Deploy:**
   ```bash
   git push heroku main
   ```

### Option 2: DigitalOcean App Platform

1. **Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)**
2. **Create new app from GitHub repository**
3. **Configure:**
   - Source: Your GitHub repo
   - Branch: main
   - Root directory: server
   - Build command: `npm install`
   - Run command: `npm start`
4. **Set environment variables**
5. **Deploy!**

### Option 3: Railway

1. **Go to [railway.app](https://railway.app)**
2. **Connect your GitHub repository**
3. **Configure:**
   - Root directory: server
   - Build command: `npm install`
   - Start command: `npm start`
4. **Set environment variables**
5. **Deploy!**

## 🌐 Domain & DNS Configuration

### 1. Purchase Domain
- GoDaddy, Namecheap, or Google Domains
- Choose a professional domain name

### 2. Configure DNS
- **A Record**: Point to your hosting IP
- **CNAME**: www → yourdomain.com
- **MX Records**: For email (if needed)

### 3. SSL Certificate
- Most hosting platforms provide free SSL
- Enable HTTPS for security

## 🔒 Environment Variables

### Frontend (.env)
```bash
REACT_APP_API_URL=https://your-backend-url.com
REACT_APP_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
```

### Backend (.env)
```bash
NODE_ENV=production
PORT=5000
GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
CORS_ORIGIN=https://yourdomain.com
```

## 📱 Google Forms Integration

### 1. Create Google Form
1. Go to [forms.google.com](https://forms.google.com)
2. Create new form
3. Add fields for:
   - Name
   - Email
   - Phone
   - Service Interest
   - Project Details
   - Budget Range
   - Timeline

### 2. Get Form URL
1. Click "Send" button
2. Copy the form URL
3. Update in your environment variables

### 3. Test Integration
1. Submit test form
2. Verify data is received
3. Check confirmation page works

## 🧪 Testing Before Deployment

### 1. Local Testing
```bash
# Frontend
npm start
# Test all pages and functionality

# Backend
cd server
npm run dev
# Test API endpoints
```

### 2. Build Testing
```bash
npm run build
# Check for build errors
# Test build folder locally
```

### 3. Production Testing
- Test all forms work
- Verify contact information
- Check mobile responsiveness
- Test navigation and routing

## 📊 Performance Optimization

### 1. Image Optimization
- Compress images
- Use WebP format
- Implement lazy loading

### 2. Code Splitting
- React.lazy() for route-based splitting
- Dynamic imports for components

### 3. Caching
- Browser caching
- CDN for static assets
- Service worker for offline support

## 🔍 SEO Setup

### 1. Meta Tags
- Title tags for each page
- Meta descriptions
- Open Graph tags
- Twitter Card tags

### 2. Sitemap
- Generate sitemap.xml
- Submit to Google Search Console

### 3. Analytics
- Google Analytics
- Google Search Console
- Facebook Pixel (if needed)

## 🚨 Common Issues & Solutions

### Build Errors
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version
# Should be 16+ for React 18
```

### CORS Issues
```bash
# Update CORS origin in backend
CORS_ORIGIN=https://yourdomain.com
```

### Environment Variables
```bash
# Frontend variables must start with REACT_APP_
REACT_APP_API_URL=https://api.yourdomain.com

# Backend variables
NODE_ENV=production
```

## 📞 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Contact information is accurate
- [ ] Mobile responsiveness works
- [ ] SSL certificate is active
- [ ] Google Analytics is tracking
- [ ] Search console is configured
- [ ] Performance is acceptable
- [ ] Backup strategy is in place

## 🆘 Support & Troubleshooting

### Frontend Issues
- Check browser console for errors
- Verify build process completes
- Test on different devices/browsers

### Backend Issues
- Check server logs
- Verify environment variables
- Test API endpoints individually

### Domain Issues
- DNS propagation can take 24-48 hours
- Check DNS records are correct
- Verify SSL certificate is active

---

**Need help?** Check the main README.md or create an issue in your repository.
