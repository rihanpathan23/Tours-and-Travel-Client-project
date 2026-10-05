import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: 1,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Frontend Validation
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.destination ||
      !formData.travelDate ||
      !formData.travelers
    ) {
      setErrorMessage('Please fill in all required fields to proceed.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/bookings`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      destination: formData.destination,
      travel_date: formData.travelDate,
      guests: parseInt(formData.travelers, 10),
    }),
  }
);
      const data = await response.json();

      if (response.ok && data.success) {
        // Show success message and clear form
        setSuccessMessage('Booking successful! We have received your details and will contact you shortly.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          destination: '',
          travelDate: '',
          travelers: 1,
        });
      } else {
        // Show error from backend
        setErrorMessage(data.message || 'Failed to create booking. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      console.error('Booking error:', error);
      setErrorMessage('Unable to connect to the server. Please check your internet connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">
            Plan Your Getaway
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Book Your Next Adventure
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Reserve your spot for an unforgettable trip. Fill out your details below and prepare for your upcoming journey.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          
          {/* Status Messages */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-xl flex items-center">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-xl flex items-center">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Destination Dropdown */}
              <div>
                <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                  Destination <span className="text-red-500">*</span>
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200 text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select Destination</option>
                  <option value="Goa">Goa</option>
                  <option value="Manali">Manali</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option
    value="Andaman">Andaman</option>
    <option value="Leh-Ladakh">Leh-Ladakh</option>
    <option value="Darjeeling">Darjeeling</option>
    <option value="Shimla">Shimla</option>
    <option value="Sikkim">Sikkim</option>
                </select>
              </div>
        
              

              {/* Number of Travelers */}
              <div>
                <label htmlFor="travelers" className="block text-sm font-semibold text-gray-700 mb-2">
                  Travelers <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  min="1"
                  max="50"
                  value={formData.travelers}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Travel Date */}
            <div>
              <label htmlFor="travelDate" className="block text-sm font-semibold text-gray-700 mb-2">
                Travel Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="travelDate"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200 text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-white font-bold py-4 px-8 rounded-xl shadow-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${
                  isLoading 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;