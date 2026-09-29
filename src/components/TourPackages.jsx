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
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      featured: true,
    },
    {
      id: 4,
      title: "Royal Rajasthan Heritage",
      location: "Rajasthan",
      description: "Discover the majestic forts of Jaipur, the romantic lakes of Udaipur, and the timeless culture of the desert state.",
      duration: "7 Days / 6 Nights",
      price: "₹32,000",
      image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: 5,
      title: "Andaman Tropical Paradise",
      location: "Andaman Islands",
      description: "Enjoy pristine white-sand beaches, crystal clear waters, scuba diving, and unforgettable sunsets in Havelock.",
      duration: "6 Days / 5 Nights",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: 6,
      title: "Kashmir Valley Tour",
      location: "Jammu & Kashmir",
      description: "Experience a Shikara ride on Dal Lake, stroll through tulip gardens, and witness the unparalleled beauty of Gulmarg.",
      duration: "5 Days / 4 Nights",
      price: "₹29,000",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 7,
      title: "Epic Ladakh Expedition",
      location: "Ladakh",
      description: "Ride through high mountain passes, camp by the mesmerizing Pangong Lake, and explore ancient Buddhist monasteries.",
      duration: "8 Days / 7 Nights",
      price: "₹38,500",
      image: "https://images.unsplash.com/photo-1581793746788-1c7c34571d8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: 8,
      title: "Darjeeling Tea Trail",
      location: "West Bengal",
      description: "Watch the sunrise over Mount Kanchenjunga, take a ride on the toy train, and walk through world-famous tea estates.",
      duration: "4 Days / 3 Nights",
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: 9,
      title: "Mystic Meghalaya",
      location: "Meghalaya",
      description: "Walk on living root bridges, visit the cleanest village in Asia, and explore stunning waterfalls and deep caves.",
      duration: "6 Days / 5 Nights",
      price: "₹26,000",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
    }
  ];

  // Fallback image in case a URL fails to load
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  };

  // Scroll function to redirect to Booking section
  const handleViewDetails = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const offset = 80; // Navbar ki height compensate karne ke liye
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={pkg.image} 
                  alt={`Travel package for ${pkg.title} in ${pkg.location}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={handleImageError}
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

                {/* Action Button updated with onClick handler */}
                <button 
                  onClick={handleViewDetails}
                  className="w-full bg-gray-50 hover:bg-blue-600 text-gray-900 hover:text-white border border-gray-200 hover:border-blue-600 font-semibold py-3 px-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 cursor-pointer"
                >
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewDetails}
            className="inline-flex items-center justify-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 cursor-pointer"
          >
            <span>Book a custom package</span>
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