
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  SearchIcon, 
  FilterIcon, 
  BriefcaseIcon, 
  MapPinIcon,
  GraduationCapIcon,
  TagIcon
} from "lucide-react";
import ProfileCard, { ProfileData } from "@/components/ProfileCard";

// Extended sample profile data
const profiles: ProfileData[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    title: "Senior UX Designer",
    company: "DesignCraft",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    skills: ["UI/UX", "Figma", "Design Systems", "User Research"],
    connections: 423,
    bio: "Passionate about creating intuitive and beautiful user experiences that solve real problems."
  },
  {
    id: "2",
    name: "Marcus Chen",
    title: "Full Stack Developer",
    company: "TechInnovate",
    location: "New York, NY",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    skills: ["React", "Node.js", "TypeScript", "GraphQL", "AWS"],
    connections: 289,
    bio: "Full stack developer with 6+ years of experience building scalable web applications."
  },
  {
    id: "3",
    name: "Sophia Williams",
    title: "Product Manager",
    company: "ProductLabs",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping"],
    connections: 356,
    bio: "Strategic product manager with a passion for building products that customers love."
  },
  {
    id: "4",
    name: "David Johnson",
    title: "Marketing Director",
    company: "GrowthBoost",
    location: "Chicago, IL",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    connections: 412,
    bio: "Results-driven marketing professional with a track record of scaling B2B SaaS companies."
  },
  {
    id: "5",
    name: "Olivia Garcia",
    title: "Data Scientist",
    company: "AnalyticsAI",
    location: "Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    skills: ["Machine Learning", "Python", "Data Visualization", "Statistics"],
    connections: 267,
    bio: "Passionate about turning data into actionable insights that drive business decisions."
  },
  {
    id: "6",
    name: "James Wilson",
    title: "Frontend Engineer",
    company: "WebSolutions",
    location: "Boston, MA",
    avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    skills: ["React", "JavaScript", "CSS", "Accessibility"],
    connections: 189,
    bio: "Frontend developer focusing on creating fast, accessible, and beautiful web applications."
  }
];

// Filter categories
const filterCategories = [
  {
    name: "Job Title",
    icon: BriefcaseIcon,
    options: ["Designer", "Developer", "Product Manager", "Data Scientist", "Marketing"]
  },
  {
    name: "Location",
    icon: MapPinIcon,
    options: ["Remote", "San Francisco", "New York", "Austin", "Seattle", "Boston"]
  },
  {
    name: "Experience",
    icon: GraduationCapIcon,
    options: ["Entry Level", "Mid Level", "Senior", "Lead", "Executive"]
  },
  {
    name: "Skills",
    icon: TagIcon,
    options: ["React", "JavaScript", "UI/UX", "Product Management", "Machine Learning"]
  }
];

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-gray-50">
        <div className="container-custom py-8 md:py-12">
          <div className="mb-10">
            <h1 className="heading-lg text-gray-900 mb-4">Discover Professionals</h1>
            <p className="text-gray-600 max-w-3xl">
              Connect with talented professionals across various industries and build your professional network.
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
                    placeholder="Search by name, skill, or company..."
                    className="pl-10 py-5"
                  />
                </div>
              </div>
              
              <div className="mb-6 flex justify-between items-center">
                <p className="text-sm text-gray-500">Showing {profiles.length} professionals</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">Sort by:</span>
                  <select className="text-sm border rounded-md p-1">
                    <option>Relevance</option>
                    <option>Most connections</option>
                    <option>Recently active</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profiles.map((profile, index) => (
                  <ProfileCard key={profile.id} profile={profile} featured={index === 0} />
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  Load More Profiles
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

export default Profile;
