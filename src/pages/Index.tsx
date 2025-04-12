
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedProfiles from "@/components/FeaturedProfiles";
import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <div className="py-8 bg-white">
          <div className="container-custom text-center">
            <div className="flex flex-wrap justify-center gap-12 opacity-70">
              {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company) => (
                <div key={company} className="text-gray-400 font-semibold">
                  {company}
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
