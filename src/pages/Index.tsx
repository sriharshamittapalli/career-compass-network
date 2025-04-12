
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedProfiles from "@/components/FeaturedProfiles";
import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import { Building2, Code2, Briefcase, Crown, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <div className="py-10 bg-white">
          <div className="container-custom text-center">
            <p className="text-gray-500 text-sm mb-6">TRUSTED BY LEADING COMPANIES</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { name: "TechCorp", icon: <Code2 size={22} /> },
                { name: "ProServices", icon: <Briefcase size={22} /> },
                { name: "LeadIndustry", icon: <Crown size={22} /> },
                { name: "InnovateHQ", icon: <Building2 size={22} /> },
                { name: "DataSystems", icon: <BarChart3 size={22} /> }
              ].map((company) => (
                <div key={company.name} className="flex items-center text-gray-500 font-semibold hover:text-brand-blue transition-colors">
                  {company.icon}
                  <span className="ml-2">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FeaturedProfiles />
        <FeaturedJobs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
