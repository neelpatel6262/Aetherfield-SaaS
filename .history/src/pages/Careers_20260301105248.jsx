import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router; adjust if not
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const Careers = () => {
  const jobs = [
    {
      title: "UX Designer",
      location: "San Francisco, CA",
      type: "Contract",
      description:
        "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
      link: "/jobs/ux-designer", // Placeholder for job detail page
    },
    {
      title: "Data Scientist",
      location: "Denver, CO",
      type: "Full-time",
      description:
        "Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams.",
      link: "/jobs/data-scientist",
    },
    {
      title: "Product Manager",
      location: "Seattle, WA",
      type: "Part-time",
      description:
        "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
      link: "/jobs/product-manager",
    },
    {
      title: "Open Application",
      location: "Denver, CO",
      type: "Full-time",
      description:
        "Don't see your role available? Apply for an open application!",
      link: "/apply", // Placeholder for application form
      isOpen: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Careers at Aetherfield
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our mission to build thoughtful, scalable climate intelligence solutions for sustainability-forward organizations.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {jobs.map((job, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <span>{job.location}</span>
                      <Badge variant={job.type.toLowerCase().includes("full") ? "default" : "secondary"}>
                        {job.type}
                      </Badge>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  asChild
                  className="w-full md:w-auto"
                  variant={job.isOpen ? "default" : "outline"}
                >
                  <Link to={job.link}>
                    {job.isOpen ? "Apply Now" : "View Role"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA if needed */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Ready to make an impact? We're always looking for passionate talent.
          </p>
          <Button size="lg" asChild>
            <Link to="/apply">Explore Opportunities</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;