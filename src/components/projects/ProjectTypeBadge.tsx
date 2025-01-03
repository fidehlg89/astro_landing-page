import React from "react";

import { Briefcase, User } from "lucide-react";
import type { ProjectType } from "../../types";

const typeConfig = {
  personal: {
    icon: User,
    text: "Personal Project",
    className: "bg-purple-100 text-purple-700",
  },
  enterprise: {
    icon: Briefcase,
    text: "Enterprise",
    className: "bg-blue-100 text-blue-700",
  },
};

interface ProjectTypeBadgeProps {
  type: ProjectType;
}

export function ProjectTypeBadge({ type }: ProjectTypeBadgeProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <span
      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.className}`}
    >
      <Icon size={12} />
      {config.text}
    </span>
  );
}
