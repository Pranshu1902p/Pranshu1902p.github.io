export type techType = {
  name: string;
  image?: string;
};

export type projectType = {
  name: string;
  description: string;
  image: any[];
  figmaLink?: string;
  githubLink?: string;
  link?: string;
  tech: techType[];
};

export type experienceType = {
  name: string;
  description: string;
  position: string;
  image?: any;
  tech: string[];
  startDate?: string;
  endDate?: string;
};

export type linkType = {
  title: string;
  active: boolean;
  link: string;
};
