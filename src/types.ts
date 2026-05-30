/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  description: string;
  points: string[];
  tech: string[];
  category: 'all' | 'genai' | 'deep-learning' | 'ml' | 'data-engineering';
  metric?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tech?: string[];
  type: 'intern' | 'freelance';
}

export interface SkillCategory {
  category: string;
  skills: string[];
  color: string; // Tailwind class color accent
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
  coursework?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}
