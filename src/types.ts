export interface Skill {
  name: string;
  iconName: string; // references lucide icons or tech representation
  color: string; // Accent color for the skill badge/shadow
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  imageName: string; // custom generated image reference or premium mock illustration
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  iconType: 'trophy' | 'certificate' | 'star' | 'users';
}
