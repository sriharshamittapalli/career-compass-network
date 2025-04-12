
import { Button } from "@/components/ui/button";
import { 
  BookmarkIcon, 
  MapPinIcon, 
  ClockIcon, 
  DollarSignIcon,
  BriefcaseIcon
} from "lucide-react";
import { useState } from "react";

export interface JobData {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  featured?: boolean;
}

interface JobCardProps {
  job: JobData;
}

const JobCard = ({ job }: JobCardProps) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className={`bg-white rounded-xl overflow-hidden card-hover ${
      job.featured ? 'border-l-4 border-l-brand-teal border border-gray-200' : 'border border-gray-200'
    }`}>
      <div className="p-6">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
              {job.logo ? (
                <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-lg font-bold text-gray-400">{job.company.charAt(0)}</span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-600 text-sm">{job.company}</p>
              <div className="mt-1 flex flex-wrap gap-3">
                <span className="inline-flex items-center text-xs text-gray-500">
                  <MapPinIcon size={12} className="mr-1 text-gray-400" />
                  {job.location}
                </span>
                <span className="inline-flex items-center text-xs text-gray-500">
                  <BriefcaseIcon size={12} className="mr-1 text-gray-400" />
                  {job.type}
                </span>
              </div>
            </div>
          </div>
          <button 
            className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
              saved ? 'text-brand-blue bg-brand-blue/10' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setSaved(!saved)}
            aria-label={saved ? "Unsave job" : "Save job"}
          >
            <BookmarkIcon size={16} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-700 line-clamp-2">{job.description}</p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium flex items-center">
            <DollarSignIcon size={12} className="mr-1 text-gray-500" />
            {job.salary}
          </span>
          <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium flex items-center">
            <ClockIcon size={12} className="mr-1 text-gray-500" />
            {job.posted}
          </span>
        </div>
        
        <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
          {job.featured && (
            <span className="text-xs font-medium text-brand-teal px-2.5 py-1 bg-brand-teal/10 rounded-full">
              Featured
            </span>
          )}
          <div className="flex-1"></div>
          <Button size="sm" className="h-9 bg-brand-blue hover:bg-brand-darkBlue text-white">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
