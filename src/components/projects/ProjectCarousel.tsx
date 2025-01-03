import React from "react";

import { ProjectCard } from "./ProjectCard";
import { CarouselButton } from "./CarouselButton";
import type { Project } from "../../types";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const previousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const visibleProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <CarouselButton
            direction="previous"
            onClick={previousPage}
            disabled={currentPage === 0}
          />
          <span className="text-gray-600">
            {currentPage + 1} / {totalPages}
          </span>
          <CarouselButton
            direction="next"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          />
        </div>
      )}
    </div>
  );
}
