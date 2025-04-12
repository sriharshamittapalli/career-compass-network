
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  // Social media icons mapping
  const socialIcons = {
    twitter: <Twitter size={18} />,
    linkedin: <Linkedin size={18} />,
    facebook: <Facebook size={18} />,
    instagram: <Instagram size={18} />
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center">
                <span className="text-brand-blue font-bold">CC</span>
              </div>
              <span className="text-xl font-bold">CareerCompass</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting professionals with meaningful opportunities.
            </p>
            <div className="flex space-x-3">
              {Object.entries(socialIcons).map(([name, icon]) => (
                <a 
                  key={name} 
                  href="#" 
                  aria-label={name}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition-colors"
                >
                  <span className="sr-only">{name}</span>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">For Professionals</h3>
            <ul className="space-y-3">
              {["Browse Jobs", "Create Profile", "Career Resources", "Networking Events"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">For Employers</h3>
            <ul className="space-y-3">
              {["Post a Job", "Browse Profiles", "Recruiting Solutions", "Pricing"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 CareerCompass. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
