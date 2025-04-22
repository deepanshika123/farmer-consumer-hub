
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";

const Index = () => {
  const { userType, setUserType } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-custom-green text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Farmer-Consumer Hub</h1>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-custom-yellow transition-colors">Home</Link>
            <Link to="#about" className="hover:text-custom-yellow transition-colors">About</Link>
            <Link to="#contact" className="hover:text-custom-yellow transition-colors">Contact</Link>
            <Link to="/dashboard/profile">
              <Button className="bg-custom-yellow text-custom-green hover:bg-custom-yellow/90">
                Dashboard
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden container mx-auto px-4 pt-2 pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="py-2 hover:text-custom-yellow transition-colors">Home</Link>
              <Link to="#about" className="py-2 hover:text-custom-yellow transition-colors">About</Link>
              <Link to="#contact" className="py-2 hover:text-custom-yellow transition-colors">Contact</Link>
              <Link to="/dashboard/profile">
                <Button className="w-full bg-custom-yellow text-custom-green hover:bg-custom-yellow/90">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <main className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-custom-green mb-6">
              Connecting Farmers and Consumers Directly
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              A platform that eliminates middlemen, supports local agriculture, and brings fresh produce directly to consumers.
            </p>
            
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">Continue as:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard/profile" onClick={() => setUserType("farmer")}>
                  <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-custom-green hover:bg-custom-green/90 text-white">
                    I'm a Farmer
                  </Button>
                </Link>
                <Link to="/dashboard/consumer-profile" onClick={() => setUserType("consumer")}>
                  <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-custom-yellow hover:bg-custom-yellow/90 text-custom-green">
                    I'm a Consumer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-custom-green mb-4">Our Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed to benefit both farmers and consumers with tools that make local food systems more efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-custom-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Direct Marketplace</h3>
              <p className="text-gray-600 text-center">Buy and sell produce directly without intermediaries</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-custom-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Market Analysis</h3>
              <p className="text-gray-600 text-center">Track prices and trends to optimize your farming business</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-custom-green/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.599A5 5 0 105.5 10.5a4.5 4.5 0 00-2 8.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Weather Analysis</h3>
              <p className="text-gray-600 text-center">Access agricultural weather data to plan your farming activities</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-custom-green text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Farmer-Consumer Hub</h2>
              <p className="text-sm mt-1">Connecting farms to tables since 2023</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-custom-yellow transition-colors">Privacy</a>
              <a href="#" className="hover:text-custom-yellow transition-colors">Terms</a>
              <a href="#" className="hover:text-custom-yellow transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; 2023 Farmer-Consumer Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
