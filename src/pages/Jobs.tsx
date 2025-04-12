
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  SearchIcon, 
  FilterIcon, 
  BriefcaseIcon, 
  MapPinIcon,
  ClockIcon,
  DollarSignIcon
} from "lucide-react";
import JobCard, { JobData } from "@/components/JobCard";

// Extended sample jobs data
const jobs: JobData[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechInnovate",
    logo: "",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120K - $150K",
    posted: "Posted 2 days ago",
    description: "We're looking for a senior frontend developer with expertise in React and TypeScript to join our team building innovative web applications.",
    featured: true
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignCraft",
    logo: "",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90K - $115K",
    posted: "Posted 1 week ago",
    description: "Join our design team to create intuitive user experiences for our product suite. You'll work closely with product managers and engineers."
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "AnalyticsAI",
    logo: "",
    location: "Remote",
    type: "Full-time",
    salary: "$125K - $160K",
    posted: "Posted 3 days ago",
    description: "Help us build the future of AI-powered analytics. You'll work on cutting-edge machine learning models and data pipelines."
  },
  {
    id: "4",
    title: "Marketing Manager",
    company: "GrowthBoost",
    logo: "",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$95K - $120K",
    posted: "Posted 1 day ago",
    description: "We're seeking a results-driven marketing manager to lead our digital marketing efforts and drive customer acquisition."
  },
  {
    id: "5",
    title: "Backend Engineer",
    company: "CloudScale",
    logo: "",
    location: "Remote",
    type: "Full-time",
    salary: "$130K - $160K",
    posted: "Posted 5 days ago",
    description: "Join our backend engineering team to build scalable microservices using Node.js, Python, and AWS technologies."
  },
  {
    id: "6",
    title: "Product Manager",
    company: "ProductLabs",
    logo: "",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110K - $140K",
    posted: "Posted 1 week ago",
    description: "Lead product development for our B2B SaaS platform, working with cross-functional teams to deliver value to customers.",
    featured: true
  }
];

// Filter categories
const filterCategories = [
  {
    name: "Job Type",
    icon: BriefcaseIcon,
    options: ["Full-time", "Part-time", "Contract", "Internship", "Remote"]
  },
  {
    name: "Location",
    icon: MapPinIcon,
    options: ["Remote", "San Francisco", "New York", "Austin", "Chicago", "Seattle"]
  },
  {
    name: "Experience",
    icon: ClockIcon,
    options: ["Entry Level", "Mid Level", "Senior", "Lead", "Executive"]
  },
  {
    name: "Salary",
    icon: DollarSignIcon,
    options: ["$0 - $50K", "$50K - $100K", "$100K - $150K", "$150K+"]
  }
];

const Jobs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-gray-50">
        <div className="container-custom py-8 md:py-12">
          <div className="mb-10">
            <h1 className="heading-lg text-gray-900 mb-4">Find Your Next Opportunity</h1>
            <p className="text-gray-600 max-w-3xl">
              Browse job listings from top companies and find your perfect career match.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="bg-white p-5 rounded-xl border border-gray-200 sticky top-24">
                <h2 className="font-semibold mb-4 flex items-center">
                  <FilterIcon size={16} className="mr-2" />
                  Filters
                </h2>
                
                <div className="space-y-6">
                  {filterCategories.map((category) => (
                    <div key={category.name} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <h3 className="text-sm font-medium mb-3 flex items-center">
                        <category.icon size={14} className="mr-2" />
                        {category.name}
                      </h3>
                      <div className="space-y-2">
                        {category.options.map((option) => (
                          <div key={option} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={option.replace(/\s+/g, '-').toLowerCase()} 
                              className="rounded text-brand-blue focus:ring-brand-blue"
                            />
                            <label 
                              htmlFor={option.replace(/\s+/g, '-').toLowerCase()} 
                              className="ml-2 text-sm text-gray-700"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-col space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    Clear All Filters
                  </Button>
                  <Button size="sm" className="w-full bg-brand-blue hover:bg-brand-darkBlue">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1">
              <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">
                <div className="relative">
                  <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    type="search"
                    placeholder="Search by title, company, or keyword..."
                    className="pl-10 py-5"
                  />
                </div>
              </div>
              
              <div className="mb-6 flex justify-between items-center">
                <p className="text-sm text-gray-500">Showing {jobs.length} jobs</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">Sort by:</span>
                  <select className="text-sm border rounded-md p-1">
                    <option>Most recent</option>
                    <option>Highest salary</option>
                    <option>Best match</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  Load More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
