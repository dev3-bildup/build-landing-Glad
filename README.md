# Bildup AI Landing Page

A modern, responsive landing page built with vanilla HTML, CSS, and JavaScript using a modular component architecture.

## 🏗️ Architecture

The project uses a modular component-based architecture for better maintainability and reusability:

```
landing-page/
├── index.html              # Main HTML file
├── styles.css              # Global styles
├── app.js                  # Main application file
├── components/             # Reusable components
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section
│   ├── IntroSection.js    # Introduction section
│   ├── BildupSection.js   # Main platform showcase
│   ├── FeatureSection.js  # Reusable feature sections
│   └── Footer.js          # Footer component
├── utils/                  # Utility classes
│   └── AnimationManager.js # Animation and scroll management
└── public/                 # Static assets (images)
```

## 🚀 Features

- **Modular Components**: Each section is a reusable component
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Intersection Observer for scroll animations
- **Mobile Menu**: Hamburger menu for mobile devices
- **Progress Bar**: Scroll progress indicator
- **Parallax Effects**: Subtle hero section parallax
- **Hover Effects**: Interactive image scaling
- **ES6 Modules**: Modern JavaScript module system

## 📦 Components

### Header Component
```javascript
import Header from './components/Header.js';
const header = new Header();
```

### Hero Component
```javascript
import Hero from './components/Hero.js';
const hero = new Hero({
    title: "Your AI Tutor, Built Just for You",
    subtitle: "Seamlessly Connected Learning Ecosystem.",
    ctaText: "Get started with Bildup AI",
    backgroundImage: "public/herobg.png",
    backgroundImageMobile: "public/herobgsmall.png"
});
```

### Feature Section Component
```javascript
import FeatureSection from './components/FeatureSection.js';
const feature = new FeatureSection({
    title: "Study Anywhere",
    description: "Access your learning materials from any device.",
    image: "public/studyanywherebg.png",
    imagePosition: "right", // "left" or "right"
    backgroundColor: "white" // "white" or "gray"
});
```

### Footer Component
```javascript
import Footer from './components/Footer.js';
const footer = new Footer({
    companyName: "Bildup AI",
    tagline: "Your personal AI tutor for smarter learning.",
    quickLinks: [
        { text: "Home", href: "#home" },
        { text: "Features", href: "#features" }
    ],
    socialLinks: [
        { platform: "Facebook", icon: "public/facebook.png", href: "#" }
    ]
});
```

## 🎨 Customization

### Adding New Features
1. Create a new component in the `components/` directory
2. Import and use it in `app.js`
3. Add any necessary styles to `styles.css`

### Modifying Existing Components
Each component has a `updateConfig()` method:
```javascript
hero.updateConfig({
    title: "New Title",
    ctaText: "New Button Text"
});
```

### Styling
- Global styles are in `styles.css`
- Component-specific styles can be added to each component
- Responsive breakpoints: 768px (tablet), 480px (mobile)

## 🔧 Development

### Running the Project
1. Clone the repository
2. Open `index.html` in a web browser
3. For development server, use a local server (e.g., Live Server in VS Code)

### File Structure
- **Components**: Self-contained, reusable UI elements
- **Utils**: Shared utility classes and functions
- **Styles**: Global CSS with component-specific styles
- **Assets**: Images and other static files

### Component Lifecycle
Each component follows this lifecycle:
1. **Constructor**: Initialize with config
2. **init()**: Create DOM elements and event listeners
3. **render()**: Return the DOM element
4. **destroy()**: Clean up event listeners and DOM elements

## 📱 Responsive Design

The landing page is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive images
- Touch-friendly interactions
- Optimized typography scaling

## 🎯 Performance

- Lazy loading of components
- Efficient event delegation
- Minimal DOM manipulation
- Optimized animations
- Clean component lifecycle management

## 🔄 Component Reusability

Components are designed to be:
- **Configurable**: All content and styling can be customized
- **Self-contained**: Each component manages its own state and events
- **Composable**: Components can be combined to create complex layouts
- **Testable**: Each component can be tested independently

## 📄 License

This project is open source and available under the MIT License. 