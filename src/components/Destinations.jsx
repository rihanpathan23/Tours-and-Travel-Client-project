import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Goa',
      description: 'Experience stunning golden beaches, vibrant nightlife, thrilling water sports, and rich Portuguese heritage in India\'s most beloved coastal paradise.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Manali',
      description: 'Discover majestic snow-capped peaks, lush green pine valleys, and adventurous mountain trails in this breathtaking Himalayan resort town.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Kerala',
      description: 'Relax in serene palm-fringed backwaters, explore aromatic tea gardens, and rejuvenate in the tropical beauty of God\'s Own Country.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Jaipur',
      description: 'Step into the majestic Pink City filled with magnificent royal palaces, historic forts, vibrant bazaars, and timeless Rajasthani culture.',
      image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Kashmir',
      description: 'Witness heaven on earth with serene Dal Lake shikara rides, blooming tulip gardens, snow-covered mountains, and unmatched scenic beauty.',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Udaipur',
      description: 'Explore the City of Lakes, featuring romantic boat rides, stunning marble palaces, royal heritage, and breathtaking sunset views.',
      image: 'https://images.unsplash.com/photo-1615836245337-f5b9b230fb44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      name: 'Andaman Islands',
      description: 'Dive into crystal-clear turquoise waters, discover vibrant coral reefs, and relax on pristine white sand tropical beaches.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      name: 'Darjeeling',
      description: 'Sip world-famous Himalayan tea while watching sunrise over Kanchenjunga peak, surrounded by misty green hills and toy train rides.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      name: 'Leh Ladakh',
      description: 'Embark on an epic high-altitude adventure through rugged mountain landscapes, stunning blue lakes, and ancient Buddhist monasteries.',
      image: 'https://images.unsplash.com/photo-1581793746788-1c7c34571d8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Fallback image in case a URL fails to load
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  };

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Top Locations</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Popular Destinations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Step out of your routine and explore breathtaking new places. From sun-kissed beaches to misty mountains, your next adventure starts here.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img 
                  src={destination.image} 
                  alt={`Beautiful view of ${destination.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={handleImageError}
                />
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90"></div>
                
                {/* Destination Name Overlay */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-3xl font-bold text-white mb-2 tracking-wide">
                    {destination.name}
                  </h3>
                  <div className="w-12 h-1 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-24"></div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {destination.description}
                </p>
                
                {/* Button */}
                <button className="inline-flex items-center justify-center w-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                  <span>Explore Destination</span>
                  <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;