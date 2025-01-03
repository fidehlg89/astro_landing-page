import React from "react";
import { projects } from "../data/projects";
import { ProjectCarousel } from "./ProjectCarousel";

export function Projects() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore some of my recent work and personal projects that showcase my
          skills and passion for development.
        </p>
      </div>
      <ProjectCarousel projects={projects}/>
    </div>
  );
}
