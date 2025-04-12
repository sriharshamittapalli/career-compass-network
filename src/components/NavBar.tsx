
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold">CC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CareerCompass</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium">
              Home
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-brand-blue font-medium">
              Profiles
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-brand-blue font-medium">
              Jobs
            </Link>
          </nav>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </div>
            <Button variant="outline" className="border-gray-300 text-gray-700">Sign In</Button>
            <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-blue px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/profile" 
                className="text-gray-700 hover:text-brand-blue px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Profiles
              </Link>
              <Link 
                to="/jobs" 
                className="text-gray-700 hover:text-brand-blue px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
              <div className="pt-2 border-t">
                <div className="flex flex-col space-y-3 px-4 pt-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <Button variant="outline" className="border-gray-300 text-gray-700 w-full">Sign In</Button>
                  <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white w-full">Sign Up</Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
