
import { Button } from "@/components/ui/button";
import JobCard, { JobData } from "./JobCard";
import { ArrowRight } from "lucide-react";

// Sample job listings
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
  }
];

const FeaturedJobs = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="heading-lg text-gray-900">Featured Job Opportunities</h2>
            <p className="text-gray-600 mt-2">Discover your next career move</p>
          </div>
          <Button variant="link" className="text-brand-blue font-medium mt-2 md:mt-0 p-0 h-auto flex items-center">
            Browse all jobs
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
