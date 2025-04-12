
import { Button } from "@/components/ui/button";
import ProfileCard, { ProfileData } from "./ProfileCard";
import { ArrowRight } from "lucide-react";

// Sample profile data
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
  }
];

const FeaturedProfiles = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="heading-lg text-gray-900">Featured Professionals</h2>
            <p className="text-gray-600 mt-2">Connect with top talent across various industries</p>
          </div>
          <Button variant="link" className="text-brand-blue font-medium mt-2 md:mt-0 p-0 h-auto flex items-center">
            View all profiles
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfiles;
