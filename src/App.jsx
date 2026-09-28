import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to TravelGo
        </h1>
        <p className="text-center text-gray-600 mt-4 text-lg">
          Your dream vacation awaits. Explore our destinations and packages today.
        </p>
      </main>
    </div>
  );
}

export default App;