# Dynamic Product Configurator

A React-based dynamic form that adapts its fields based on user selections, providing a streamlined and personalized user experience.

## 🚀 Overview

This project demonstrates how to implement dynamic form rendering in React, where form fields change based on user selections. It's particularly useful for e-commerce sites, product configurators, or any application where users need to make selections from a complex set of options.

### Key Features

- **Adaptive Form Fields**: Form fields dynamically update based on user selections
- **Cascading Dropdowns**: Selections in one field affect the options available in subsequent fields
- **Responsive Design**: Works well on both desktop and mobile devices
- **Real-time Summary**: Shows a summary of selections as the user progresses through the form
- **Modern UI**: Clean, intuitive interface with visual feedback

## 💡 How It Works

### The Challenge

When building forms for products with many variations (like electronics), traditional static forms can become overwhelming for users. They might see options that don't apply to their selection or miss important choices.

### The Solution

Dynamic form rendering solves this by:

1. **Progressive Disclosure**: Only showing relevant options based on previous selections
2. **Contextual Choices**: Ensuring users only see choices that make sense for their selection
3. **Reduced Cognitive Load**: Breaking complex decisions into manageable steps

### Technical Implementation

The form uses React's state management to track user selections and conditionally render form fields:

```jsx
// State to track form data
const [formData, setFormData] = useState({
  deviceType: '',
  manufacturer: '',
  specifications: {}
});

// When device type changes, reset dependent fields
const handleDeviceTypeChange = (e) => {
  const selectedDeviceType = e.target.value;
  setFormData({
    deviceType: selectedDeviceType,
    manufacturer: '', // Reset manufacturer
    specifications: {} // Reset specifications
  });
};
```

The form then conditionally renders fields based on the current state:

```jsx
{/* Manufacturer Selection - only appears after device type is selected */}
{formData.deviceType && (
  <div className="mb-6 animate-fadeIn">
    <label>Manufacturer</label>
    <select 
      value={formData.manufacturer} 
      onChange={handleManufacturerChange}
      required
    >
      <option value="">Select a manufacturer</option>
      {manufacturers[formData.deviceType].map((manufacturer) => (
        <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
      ))}
    </select>
  </div>
)}
```

## 🛠️ Implementation Details

### Data Structure

The form uses a structured approach to define available options:

```jsx
// Available device types
const deviceTypes = ['Laptop', 'Monitor', 'Mouse', 'Keyboard'];

// Manufacturers based on device type
const manufacturers = {
  Laptop: ['Dell', 'HP', 'Apple', 'Lenovo', 'ASUS'],
  Monitor: ['Samsung', 'LG', 'ASUS', 'Dell', 'BenQ'],
  Mouse: ['Logitech', 'Razer', 'Microsoft', 'SteelSeries'],
  Keyboard: ['Logitech', 'Corsair', 'Razer', 'Keychron']
};

// Specification fields for each device type
const specificationFields = {
  Laptop: [
    { name: 'processor', label: 'Processor', type: 'select', options: ['Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen 5', 'AMD Ryzen 7'] },
    { name: 'ram', label: 'RAM (GB)', type: 'select', options: ['8', '16', '32', '64'] },
    // More specifications...
  ],
  // Other device types...
};
```

### State Management

The form uses React's `useState` hook to manage form data and track user selections:

```jsx
const [formData, setFormData] = useState({
  deviceType: '',
  manufacturer: '',
  specifications: {}
});
```

### Event Handlers

Event handlers update the state based on user selections:

```jsx
// Handle device type selection
const handleDeviceTypeChange = (e) => {
  const selectedDeviceType = e.target.value;
  setFormData({
    deviceType: selectedDeviceType,
    manufacturer: '',
    specifications: {}
  });
};

// Handle manufacturer selection
const handleManufacturerChange = (e) => {
  setFormData({
    ...formData,
    manufacturer: e.target.value,
    specifications: {}
  });
};

// Handle specification changes
const handleSpecChange = (e, fieldName) => {
  setFormData({
    ...formData,
    specifications: {
      ...formData.specifications,
      [fieldName]: e.target.value
    }
  });
};
```

### Conditional Rendering

The form uses conditional rendering to show or hide fields based on the current state:

```jsx
{/* Manufacturer Selection - only appears after device type is selected */}
{formData.deviceType && (
  <div className="mb-6 animate-fadeIn">
    {/* Manufacturer selection fields */}
  </div>
)}

{/* Specifications Form - only appears after manufacturer is selected */}
{formData.deviceType && formData.manufacturer && (
  <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm animate-fadeIn">
    {/* Specification fields */}
  </div>
)}
```

## 🎨 UI/UX Considerations

### Visual Feedback

- **Animations**: Smooth transitions when fields appear or disappear
- **Icons**: Visual indicators for different device types
- **Color Coding**: Consistent color scheme for better visual hierarchy

### Responsive Design

The form uses a responsive grid layout that adapts to different screen sizes:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Left Column - Form */}
  <div className="w-full">
    {/* Form content */}
  </div>

  {/* Right Column - Summary */}
  <div className="w-full">
    {/* Summary content */}
  </div>
</div>
```

### Accessibility

- Proper labeling for form fields
- Keyboard navigation support
- Focus management for dynamic content

## 🔍 Key Takeaways

1. **Progressive Disclosure**: Show users only what they need to see at each step
2. **State Management**: Use React state to track and update form data
3. **Conditional Rendering**: Show/hide fields based on user selections
4. **Data Structure**: Organize options in a structured way for easy maintenance
5. **User Experience**: Focus on creating a smooth, intuitive flow

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## 🌐 Deploying to GitHub Pages

GitHub Pages is a great way to showcase your React projects. Here's how to deploy this project:

### 1. Add GitHub Pages Dependency

First, install the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

### 2. Update package.json

Add these fields to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/dynamic-form",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Replace `yourusername` with your actual GitHub username and `dynamic-form` with your repository name.

### 3. Configure Vite for GitHub Pages

Since you're using Vite, you need to update your `vite.config.js` file to handle the base URL correctly:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dynamic-form/', // Replace with your repository name
})
```

### 4. Deploy to GitHub Pages

Run the deploy command:

```bash
npm run deploy
```

### 5. Configure GitHub Repository

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Source", select the `gh-pages` branch
4. Save the changes

Your site will be available at `https://yourusername.github.io/dynamic-form/` after a few minutes.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by real-world e-commerce product configurators
- Built with React and Tailwind CSS
- Special thanks to the React community for their excellent documentation and resources
