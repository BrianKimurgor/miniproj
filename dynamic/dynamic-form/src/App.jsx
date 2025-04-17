import React, { useState } from 'react';

const DynamicProductForm = () => {
  // Initial state
  const [formData, setFormData] = useState({
    deviceType: '',
    manufacturer: '',
    specifications: {}
  });
  
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
      { name: 'storage', label: 'Storage (GB)', type: 'select', options: ['256', '512', '1024', '2048'] },
      { name: 'screenSize', label: 'Screen Size (inches)', type: 'select', options: ['13', '14', '15.6', '16', '17'] }
    ],
    Monitor: [
      { name: 'screenSize', label: 'Screen Size (inches)', type: 'select', options: ['24', '27', '32', '34', '49'] },
      { name: 'resolution', label: 'Resolution', type: 'select', options: ['1080p', '2K', '4K', '5K', 'Ultrawide'] },
      { name: 'refreshRate', label: 'Refresh Rate (Hz)', type: 'select', options: ['60', '75', '144', '165', '240'] }
    ],
    Mouse: [
      { name: 'dpi', label: 'DPI', type: 'select', options: ['800', '1600', '3200', '6400', '12000'] },
      { name: 'connectivity', label: 'Connectivity', type: 'select', options: ['Wired', 'Wireless', 'Bluetooth'] },
      { name: 'buttons', label: 'Number of Buttons', type: 'select', options: ['2', '3', '5', '7', '12'] }
    ],
    Keyboard: [
      { name: 'keyboardType', label: 'Keyboard Type', type: 'select', options: ['Membrane', 'Mechanical', 'Optical'] },
      { name: 'layout', label: 'Layout', type: 'select', options: ['Full Size', 'TKL', '60%', '40%'] },
      { name: 'connectivity', label: 'Connectivity', type: 'select', options: ['Wired', 'Wireless', 'Bluetooth'] }
    ]
  };
  
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
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData);
    alert('Order placed successfully!');
    // Here you would typically send the data to your backend
  };

  // Icon components for visual enhancement
  const SelectIcon = () => (
    <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  // Get device icon based on selection
  const DeviceIcon = () => {
    if (!formData.deviceType) return null;
    
    const icons = {
      Laptop: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      Monitor: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      Mouse: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8a7 7 0 0114 0v8a7 7 0 01-14 0V8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8m-5-4h10" />
        </svg>
      ),
      Keyboard: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      )
    };
    
    return icons[formData.deviceType];
  };
  
  // Render form based on selections
  return (
    <div className="w-full h-full mx-auto p-6 font-sans bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-gray-800">Product Configurator</h2>
        <div className="text-indigo-600">
          <DeviceIcon />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column - Form */}
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            {/* Device Type Selection */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Device Type</label>
              <div className="relative">
                <select 
                  value={formData.deviceType} 
                  onChange={handleDeviceTypeChange}
                  required
                  className="appearance-none block w-full pl-4 pr-10 py-3 text-base text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white"
                >
                  <option value="">Select a device type</option>
                  {deviceTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <SelectIcon />
              </div>
            </div>
            
            {/* Manufacturer Selection - only appears after device type is selected */}
            {formData.deviceType && (
              <div className="mb-2 animate-fadeIn">
                <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
                <div className="relative">
                  <select 
                    value={formData.manufacturer} 
                    onChange={handleManufacturerChange}
                    required
                    className="appearance-none block w-full pl-4 pr-10 py-3 text-base text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white"
                  >
                    <option value="">Select a manufacturer</option>
                    {manufacturers[formData.deviceType].map((manufacturer) => (
                      <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
                    ))}
                  </select>
                  <SelectIcon />
                </div>
              </div>
            )}
            
            {/* Specifications Form - only appears after manufacturer is selected */}
            {formData.deviceType && formData.manufacturer && (
              <div className="mt-2 p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm animate-fadeIn">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">
                    <svg className="w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Specifications
                </h3>
                
                <div className="space-y-4">
                  {specificationFields[formData.deviceType].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                      <div className="relative">
                        <select
                          value={formData.specifications[field.name] || ''}
                          onChange={(e) => handleSpecChange(e, field.name)}
                          required
                          className="appearance-none block w-full pl-4 pr-10 py-2 text-base text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        <SelectIcon />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button 
                    type="submit" 
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    <span className="mr-2">Place Order</span>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right Column - Summary */}
        {formData.manufacturer && (
          <div className="w-full">
            <div className="sticky top-0 p-5 bg-indigo-50 border border-indigo-100 rounded-lg animate-fadeIn">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Your Selection</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-md shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Device Type</p>
                  <p className="font-medium text-gray-800">{formData.deviceType}</p>
                </div>
                
                <div className="p-3 bg-white rounded-md shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Manufacturer</p>
                  <p className="font-medium text-gray-800">{formData.manufacturer}</p>
                </div>
              </div>
              
              {Object.keys(formData.specifications).length > 0 && (
                <div className="mt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Specifications</p>
                  <div className="bg-white rounded-md shadow-sm p-3">
                    <ul className="divide-y divide-gray-100">
                      {Object.entries(formData.specifications).map(([key, value]) => (
                        <li key={key} className="py-2 flex justify-between">
                          <span className="text-gray-600 capitalize">{key}:</span>
                          <span className="font-medium text-gray-800">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicProductForm;