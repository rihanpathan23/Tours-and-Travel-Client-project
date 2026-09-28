import Navbar from "./components/Navbar";
import About from "./components/About";
import Destinations from "./components/Destinations";
import TourPackages from "./components/TourPackages";
import Booking from "./components/Booking";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <main id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">TravelGo</span>
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Your dream vacation awaits. Explore our exclusive destinations, premium packages, and embark on the journey of a lifetime with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#destinations" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            Explore Destinations
          </a>
          <a href="#packages" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
            View Packages
          </a>
        </div>
      </main>

      {/* About Section */}
      <About />
      
      {/* Destinations Section */}
      <Destinations />

      {/* Tour Packages Section */}
      <TourPackages />

      {/* Booking Form Section */}
      <Booking />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;