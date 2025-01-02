export type ProjectStatus = 'online' | 'offline' | 'maintenance';
export type ProjectType = 'personal' | 'enterprise';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: ProjectStatus;
  type: ProjectType;
  liveUrl?: string;
  githubUrl?: string;
}