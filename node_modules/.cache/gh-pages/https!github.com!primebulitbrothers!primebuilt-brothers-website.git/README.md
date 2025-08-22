# PrimeBuilt Brothers - Kitchen Remodeling & Landscaping Website

A sleek, professional website for PrimeBuilt Brothers, a kitchen remodeling and landscaping business. Built with ReactJS frontend and NodeJS backend.

## 🏠 Services Offered

- **Kitchen Remodeling** - Custom designs and premium materials
- **Custom Closets** - Personalized storage solutions
- **Custom Patios** - Beautiful outdoor living spaces
- **Walkways** - Durable and attractive pathways
- **Retaining Walls** - Functional slope solutions
- **General Landscaping** - Comprehensive outdoor transformations

## ✨ Features

- **Modern Design** - Sleek, professional interface with smooth animations
- **Responsive Layout** - Optimized for all devices (desktop, tablet, mobile)
- **Google Forms Integration** - Seamless quote request forms
- **Confirmation System** - User-friendly post-submission experience
- **Contact Management** - Multiple ways for customers to reach you
- **Service Showcase** - Detailed information about all offerings
- **SEO Optimized** - Built with search engine optimization in mind

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **CSS3** - Custom styling with modern design principles
- **React Icons** - Beautiful icon library
- **Framer Motion** - Smooth animations and transitions

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Compression** - Response compression

## 📁 Project Structure

```
PrimeBulit_Brothers/
├── public/                 # Static files
├── src/                   # React source code
│   ├── components/        # Reusable components
│   │   ├── Navbar.js     # Navigation component
│   │   └── Footer.js     # Footer component
│   ├── pages/            # Page components
│   │   ├── Home.js       # Homepage
│   │   ├── Services.js   # Services page
│   │   ├── About.js      # About page
│   │   ├── Contact.js    # Contact page
│   │   ├── QuoteForm.js  # Quote request form
│   │   └── QuoteConfirmation.js # Confirmation page
│   ├── App.js            # Main app component
│   └── index.js          # Entry point
├── server/               # Node.js backend
│   ├── server.js         # Express server
│   └── package.json      # Backend dependencies
├── package.json          # Frontend dependencies
└── README.md             # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp env.example .env
   ```

4. **Configure environment variables:**
   - Update `GOOGLE_FORM_URL` with your actual Google Form URL
   - Set `PORT` and other configurations as needed

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Start production server:**
   ```bash
   npm start
   ```

## 🔧 Configuration

### Google Forms Integration

1. Create a Google Form for quote requests
2. Copy the form URL
3. Update the `GOOGLE_FORM_URL` in your environment file
4. The form will be embedded in the Quote Form page

### Customization

- **Colors**: Update CSS variables in `src/index.css`
- **Content**: Modify text content in component files
- **Images**: Replace placeholder images with actual project photos
- **Contact Info**: Update phone, email, and address in components

## 📱 Pages

### Home (`/`)
- Hero section with call-to-action
- Service highlights
- Company features
- Contact information

### Services (`/services`)
- Detailed service descriptions
- Feature lists for each service
- Process explanation
- Call-to-action for quotes

### About (`/about`)
- Company story and history
- Core values
- Team information
- Company statistics

### Contact (`/contact`)
- Contact form
- Business information
- Social media links
- Map placeholder

### Quote Form (`/quote`)
- Google Forms integration
- Service information
- Process explanation
- Additional resources

### Quote Confirmation (`/quote-confirmation`)
- Success message
- Next steps timeline
- Contact methods
- Additional resources

## 🚀 Deployment

### Frontend Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting service:**
   - Netlify, Vercel, or similar
   - Upload the `build` folder contents

### Backend Deployment

1. **Set environment variables:**
   - `NODE_ENV=production`
   - Configure production database and email settings

2. **Deploy to your server:**
   - Heroku, DigitalOcean, AWS, or similar
   - Ensure Node.js is installed

3. **Start the server:**
   ```bash
   npm start
   ```

## 🔒 Security Features

- **Helmet.js** - Security headers
- **CORS** - Controlled cross-origin access
- **Input validation** - Form data sanitization
- **Content Security Policy** - XSS protection

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoints**: 480px, 768px, 1024px
- **Touch-friendly navigation**
- **Optimized for all screen sizes**

## 🎨 Design Features

- **Modern gradient backgrounds**
- **Smooth hover animations**
- **Professional color scheme**
- **Clean typography**
- **Consistent spacing**

## 📞 Support

For technical support or questions about the website:
- Email: [your-email@domain.com]
- Phone: [your-phone-number]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for PrimeBuilt Brothers**

Transform your home with expert craftsmanship in kitchen remodeling and landscaping.
