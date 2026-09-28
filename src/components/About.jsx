import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative group order-2 lg:order-1 mt-10 lg:mt-0">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-blue-50 rounded-2xl transform rotate-3 scale-105 transition-all duration-500 group-hover:rotate-1 group-hover:bg-blue-100 -z-10"></div>
            
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Exciting travel destination"
              className="relative rounded-2xl shadow-xl w-full h-[400px] sm:h-[550px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            
            {/* Floating Info Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 bg-white p-5 rounded-2xl shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-600 font-extrabold text-2xl">1000+</p>
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider">Happy Travelers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">About Us</h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Discover the World <br />
                <span className="text-blue-600">With TravelGo</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Based in the  Kopargaon, TravelGo is your trusted gateway to the world's most breathtaking destinations. Led by our dedicated founding team—<span className="font-semibold text-gray-900">Rushikesh Prakash Barwant, Gaurav Sunil Gaikwad, and Datta Dnyaeshwar Kadam</span>—we are driven by a singular passion: turning your travel dreams into reality. 
            </p>

            <div className="space-y-6 pt-4">
              
              {/* Feature 1 */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">Premium Travel Services</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">From luxury flight bookings to meticulously tailored itinerary planning, we handle every detail so you can focus entirely on the adventure.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">Customer Satisfaction</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">Your peace of mind is our priority. With 24/7 dedicated support and a highly personalized approach, your journey is guaranteed to be stress-free.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">Memorable Journeys</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">We curate exclusive, off-the-beaten-path experiences to guarantee a vacation filled with moments you will cherish for a lifetime.</p>
                </div>
              </div>

            </div>

            <div className="pt-6">
              <button className="bg-gray-900 hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                Contact Our Team
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;