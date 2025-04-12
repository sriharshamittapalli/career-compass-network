
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="heading-xl text-gray-900">
              Connect, Collaborate, <span className="text-brand-blue">Advance</span> Your Career
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join thousands of professionals building meaningful connections 
              and discovering career opportunities that align with their passions.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-darkBlue text-white px-8">
                Create Your Profile
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
                Explore Jobs
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">
                Join over <span className="font-medium">10,000+</span> professionals and <span className="font-medium">2,500+</span> companies
              </p>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-teal opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-12 w-80 h-80 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-brand-lightBlue rounded-full flex items-center justify-center">
                    <span className="text-brand-blue font-bold text-xl">JP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Jane Porter</h3>
                    <p className="text-gray-600">Product Designer at Designo</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      "CareerCompass helped me connect with amazing opportunities and land my dream job!"
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">+42 connections</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 w-48">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xs">TD</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">TechDynamics</h4>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Senior Developer position is now open!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
