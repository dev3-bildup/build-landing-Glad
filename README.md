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



