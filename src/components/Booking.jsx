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

  const [bookingSummary, setBookingSummary] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    setErrorMessage('');
    setBookingSummary({ ...formData });
  };

  const handleEditDetails = () => {
    setBookingSummary(null);
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
          {!bookingSummary ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-xl">
                  {errorMessage}
                </div>
              )}

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
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200"
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
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200"
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
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200"
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
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200 text-gray-700"
                  >
                    <option value="">Select Destination</option>
                    <option value="Goa">Goa</option>
                    <option value="Manali">Manali</option>
                    <option value="Kerala">Kerala</option>
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
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200"
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
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors duration-200 text-gray-700"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          ) : (
            /* Booking Summary */
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-2xl font-bold text-gray-900">Review Booking Summary</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Please review your details before proceeding to the payment step.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-gray-100">
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">Traveler Name</span>
                  <p className="text-base font-bold text-gray-900 mt-1">{bookingSummary.fullName}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">Email Address</span>
                  <p className="text-base font-bold text-gray-900 mt-1">{bookingSummary.email}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">Phone Number</span>
                  <p className="text-base font-bold text-gray-900 mt-1">{bookingSummary.phone}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">Selected Destination</span>
                  <p className="text-base font-bold text-blue-600 mt-1">{bookingSummary.destination}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">Travel Date</span>
                  <p className="text-base font-bold text-gray-900 mt-1">{bookingSummary.travelDate}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">Total Travelers</span>
                  <p className="text-base font-bold text-gray-900 mt-1">{bookingSummary.travelers}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleEditDetails}
                  className="w-full sm:w-1/2 py-3.5 px-6 rounded-xl font-semibold border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-200"
                >
                  Edit Details
                </button>
                <button
                  type="button"
                  onClick={() => alert('Payment gateway integration in progress.')}
                  className="w-full sm:w-1/2 py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;