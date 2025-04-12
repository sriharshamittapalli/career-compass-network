
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, MapPinIcon, LinkIcon } from "lucide-react";

export interface ProfileData {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  avatar: string;
  skills: string[];
  connections: number;
  bio: string;
}

interface ProfileCardProps {
  profile: ProfileData;
  featured?: boolean;
}

const ProfileCard = ({ profile, featured = false }: ProfileCardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden card-hover ${
        featured ? 'border-2 border-brand-blue/20' : 'border border-gray-200'
      }`}
    >
      {featured && (
        <div className="bg-brand-blue/10 py-1.5 px-4 text-center">
          <span className="text-xs font-medium text-brand-blue">Featured Profile</span>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src={profile.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{profile.name}</h3>
            <p className="text-gray-600 flex items-center">
              <BriefcaseIcon size={14} className="mr-1" />
              <span>{profile.title}</span>
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              <MapPinIcon size={14} className="mr-1" />
              <span>{profile.location}</span>
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700 text-sm line-clamp-2">{profile.bio}</p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.slice(0, 3).map((skill) => (
            <span 
              key={skill} 
              className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
          {profile.skills.length > 3 && (
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              +{profile.skills.length - 3} more
            </span>
          )}
        </div>
        
        <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span className="text-brand-blue font-medium">{profile.connections}</span> connections
          </div>
          <Button size="sm" variant="outline" className="h-8 rounded-full">
            <LinkIcon size={14} className="mr-1.5" />
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
