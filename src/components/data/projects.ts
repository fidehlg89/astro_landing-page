import { type Project } from "../../types";

export const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A modern dashboard for managing online stores with real-time analytics and inventory management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    status: "online",
    type: "enterprise",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather App",
    description:
      "A beautiful weather application with detailed forecasts and interactive maps.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "API Integration", "Geolocation"],
    status: "maintenance",
    type: "personal",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management Platform",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    status: "online",
    type: "enterprise",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An all-in-one dashboard for managing multiple social media accounts.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Social APIs", "Analytics"],
    status: "offline",
    type: "personal",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
