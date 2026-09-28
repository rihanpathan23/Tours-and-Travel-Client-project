import React from 'react';

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Magical Manali Adventure",
      location: "Himachal Pradesh",
      description: "Experience the snow-capped peaks, lush pine forests, and thrilling mountain adventures in the heart of the Himalayas.",
      duration: "5 Days / 4 Nights",
      price: "₹22,000",
      image: "https://images.unsplash.com/photo-1605649487212-4dcb1b6b1cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "Serene Kerala Backwaters",
      location: "Kerala",
      description: "Cruise through tranquil backwaters on a traditional houseboat, explore lush tea gardens, and relax in nature's lap.",
      duration: "6 Days / 5 Nights",
      price: "₹28,500",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: 3,
      title: "Vibrant Goa Getaway",
      location: "Goa",
      description: "Dive into the vibrant nightlife, relax on golden sandy shores, and savor the rich coastal heritage and seafood.",
      duration: "4 Days / 3 Nights",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
    }
  ];

  return (
    <section id="packages" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Popular Tours</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Explore Our Tour Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover breathtaking destinations, curated experiences, and create unforgettable memories with our top-rated travel packages.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges */}
                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                    Best Seller
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium">{pkg.location}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
                    {pkg.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Meta Info (Duration & Price) */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Starts from</p>
                    <p className="text-xl font-extrabold text-blue-600">{pkg.price}</p>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gray-50 hover:bg-blue-600 text-gray-900 hover:text-white border border-gray-200 hover:border-blue-600 font-semibold py-3 px-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
            <span>View all packages</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TourPackages;