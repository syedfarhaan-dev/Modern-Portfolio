/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, SkillCategory, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'Syed Farhaan',
  title: 'Software Engineer & AI/ML Engineer',
  tagline: 'Building scalable software and AI-powered systems that solve real-world problems.',
  location: 'Mysore, India',
  email: 'farhaansyed34@gmail.com',
  phone: '+91 9380278837',
  github: 'https://github.com/syedfarhaan-dev',
  linkedin: 'https://www.linkedin.com/in/syed-farhaan-245739259/',
  summary: 'Software Engineer & AI/ML Engineer with hands-on experience developing full-stack applications, machine learning solutions, Generative AI systems, and intelligent automation workflows. Skilled in Python, FastAPI, React, AWS, Docker, TensorFlow, and PyTorch, with experience building production-ready applications, RAG pipelines, LLM-powered systems, and deployable AI solutions. Passionate about combining software engineering, cloud technologies, and artificial intelligence to create scalable products that deliver measurable business impact.'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'R'],
    color: 'from-purple-500/20 to-indigo-500/10'
  },
  {
    category: 'Software Engineering',
    skills: [
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Design Patterns',
      'Software Development',
      'REST API Development',
      'System Design',
      'Problem Solving'
    ],
    color: 'from-blue-500/20 to-cyan-500/10'
  },
  {
    category: 'Frontend Development',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Responsive Design',
      'UI Development'
    ],
    color: 'from-indigo-500/20 to-blue-500/10'
  },
  {
    category: 'Backend Development',
    skills: [
      'FastAPI',
      'Flask',
      'REST APIs',
      'Backend Development',
      'API Integration',
      'Authentication Systems'
    ],
    color: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Generative AI',
      'Large Language Models',
      'Statistical Modeling',
      'Predictive Analytics',
      'Model Evaluation'
    ],
    color: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Keras',
      'Hugging Face',
      'OpenCV',
      'Pandas',
      'NumPy'
    ],
    color: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    category: 'GenAI & Agentic AI',
    skills: [
      'Prompt Engineering',
      'RAG Pipelines',
      'Agentic AI',
      'LLM Applications',
      'AI Automation',
      'n8n Automation'
    ],
    color: 'from-fuchsia-500/20 to-pink-500/10'
  },
  {
    category: 'Cloud, DevOps & Deployment',
    skills: [
      'AWS',
      'Docker',
      'CI/CD Pipelines',
      'Git',
      'GitHub',
      'Model Deployment',
    ],
    color: 'from-rose-500/20 to-pink-500/10'
  },
  {
    category: 'Databases & Data Engineering',
    skills: [
      'MySQL',
      'MongoDB',
      'Data Preprocessing',
      'Feature Engineering',
      'ETL Pipelines',
    ],
    color: 'from-amber-500/20 to-orange-500/10'
  },
  {
    category: 'Visualization & Analytics',
    skills: [
      'Power BI',
      'Tableau',
      'Matplotlib',
      'Seaborn',
      'Data Visualization'
    ],
    color: 'from-sky-500/20 to-indigo-500/10'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp0',
    role: 'AIML Intern',
    company: 'Defence Research and Development Organisation (DRDO)',
    location: 'Bengaluru, Karnataka, India (On-site)',
    period: 'Dec 2025 – May 2026',
    points: [
      'Researched and worked on research-oriented and mission-critical problem statements aligned with national defense applications.',
      'Designed, trained, and evaluated machine learning models, performed data preprocessing and feature engineering, and applied core AI techniques to solve real-world challenges.',
      'Collaborated actively with defense scientists and researchers, gaining hands-on exposure to cutting-edge deep-tech architectures, secure systems, and high-impact research environments.',
      'Strengthened analytical thinking, complex problem-solving skills, and practical understanding of deploying AI solutions in real-time and high-reliability domains.'
    ],
    tech: ['AIML', 'Deep Learning', 'Feature Engineering', 'Model Deployment', 'Defence Tech', 'Government Systems'],
    type: 'intern'
  },
  {
    id: 'exp1',
    role: 'Machine Learning Intern',
    company: 'Cognifyz Technologies',
    location: 'Maharashtra, India',
    period: 'Oct 2024 – Apr 2025',
    points: [
      'Developed and optimized machine learning models using Scikit-learn and TensorFlow for business-oriented datasets, improving prediction accuracy and workflow efficiency.',
      'Built data preprocessing and feature engineering pipelines using Pandas, NumPy, and Scikit-learn, reducing data inconsistencies by 25%.',
      'Automated model training and deployment workflows using Flask, Docker, and CI/CD pipelines, reducing manual operational effort by 40%.'
    ],
    tech: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'Docker', 'CI/CD'],
    type: 'intern'
  },
  {
    id: 'exp2',
    role: 'Freelance AI & Full-Stack Developer',
    company: 'Remote',
    location: 'India',
    period: 'Nov 2024 – Present',
    points: [
      'Delivered AI-enabled applications integrating TensorFlow and Scikit-learn models into production-ready FastAPI backends for academic and business use cases.',
      'Designed and deployed scalable ML inference APIs using Docker, REST APIs, CI/CD, and AWS deployment workflows.',
      'Developed AI-powered automation and analytics solutions to improve operational efficiency and support data-driven decision-making.'
    ],
    tech: ['TensorFlow', 'Scikit-learn', 'FastAPI', 'REST APIs', 'Docker', 'AWS (EC2)', 'CI/CD'],
    type: 'freelance'
  }
];

export const PROJECTS: Project[] = [
{
id: 'proj5',
title: 'Jarvis AI Assistant',
subtitle: 'Multi-Agent Voice Automation Platform',
year: '2025',
description: 'An AI-powered virtual assistant integrating voice recognition, LLMs, system automation, communication tools, and productivity workflows through a unified interface.',
points: [
'Built a voice-enabled AI assistant using Python with wake-word detection, speech recognition, and text-to-speech capabilities.',
'Integrated OpenAI GPT, Google Gemini, and HugChat to support conversational AI, code generation, and intelligent task execution.',
'Developed automation workflows for WhatsApp messaging, web navigation, application control, system monitoring, and productivity tools.'
],
tech: ['Python', 'OpenAI GPT', 'Google Gemini', 'Speech Recognition', 'Automation', 'REST APIs', 'EEL'],
category: 'genai',
metric: '30+ Automated Features'
},
{
id: 'proj1',
title: 'AI Resume Optimization Agent',
subtitle: 'ATS Alignment & Keyword Tuning Engine',
year: '2026',
description: 'An AI-powered resume optimization workflow platform using LLM multi-agents to analyze job descriptions and refine ATS keyword matching dynamically.',
points: [
'Built an AI-powered resume optimization agent using n8n automation and LLM-based workflows to analyze job descriptions and improve ATS alignment.',
'Implemented prompt engineering and NLP-based keyword extraction techniques to generate role-specific resume enhancements dynamically.',
'Developed automated AI workflows for resume refinement, improving keyword matching, content optimization, and recruiter visibility.'
],
tech: ['n8n', 'LLM Agents', 'NLP', 'Prompt Engineering', 'Keyword Extraction', 'API Integrations'],
category: 'genai',
metric: 'Increased ATS Match Rate'
},
{
id: 'proj3',
title: 'Hybrid Deep Learning Architecture',
subtitle: '3D Object Detection Neural Core',
year: '2025',
description: 'A custom dual-stream convolutional architecture leveraging CNN features for high-definition 3D bounding-box regression tasks.',
points: [
'Developed a hybrid deep learning architecture using PyTorch, ResNet101, and VGG19 for 3D object detection through binary regression techniques.',
'Implemented transfer learning and fine-tuning workflows, achieving an R² score of 0.96 through optimized training and feature representation strategies.'
],
tech: ['PyTorch', 'ResNet101', 'VGG19', 'Binary Regression', 'Transfer Learning', 'Computer Vision'],
category: 'deep-learning',
metric: 'R² Score of 0.96'
},
{
id: 'proj4',
title: 'AI-Powered Threat Detection System',
subtitle: 'Heuristic Cyber Signature Classifier',
year: '2023',
description: 'A highly accurate security classifier designed on automated feature extractions of static and dynamic behavior reports of execution kernels.',
points: [
'Designed a Random Forest classifier with 98.3% accuracy for identifying malware patterns.',
'Built end-to-end preprocessing and inference pipelines using Scikit-learn and Pandas.'
],
tech: ['Random Forest', 'Scikit-learn', 'Pandas', 'Feature Engineering', 'Cybersecurity'],
category: 'ml',
metric: '98.3% Prediction Accuracy'
},
{
id: 'proj6',
title: 'QuickLink URL Shortener',
subtitle: 'Scalable Link Management Platform',
year: '2025',
description: 'A full-stack URL shortening platform enabling secure link generation, custom aliases, and high-speed URL redirection.',
points: [
'Developed RESTful APIs for URL shortening, retrieval, and redirection using FastAPI and PostgreSQL.',
'Implemented custom short links, persistent storage, and optimized database queries for efficient URL lookup.',
'Designed a responsive web interface for link creation and management with scalable backend architecture.'
],
tech: ['FastAPI', 'PostgreSQL', 'React', 'REST APIs', 'Python', 'AWS'],
category: 'fullstack',
metric: 'High-Speed URL Redirection'
},
{
id: 'proj2',
title: 'PowerSight AI',
subtitle: 'AI-Driven Power Management System',
year: '2025',
description: 'An intelligent predictive power system that analyzes time-series logs to predict grid power outages and optimize energy distribution cycles.',
points: [
'Developed LSTM and Random Forest models for power outage prediction using time-series data.',
'Built and deployed preprocessing and training pipelines on AWS EC2 using Docker and FastAPI.',
'Reduced prediction error by 18% through feature selection and hyperparameter optimization.'
],
tech: ['LSTM Networks', 'Random Forest', 'FastAPI', 'Docker', 'AWS EC2', 'Time-series', 'Python'],
category: 'deep-learning',
metric: '18% Error Reduction'
}
];


export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: 'Bachelor of Engineering in Computer Science (AI & ML)',
    institution: 'ATME College of Engineering',
    location: 'Mysore, India',
    period: '2022 – 2026',
    grade: '9.71',
    gradeLabel: 'CGPA',
    coursework: ['Deep Learning', 'Data Mining', 'Probability & Statistics', 'NLP', 'Neural Networks', 'Optimization']
  },
  {
    id: 'edu2',
    degree: 'PUC - Science Stream (PCM + Computer Science)',
    institution: 'Maharaja’s College',
    location: 'Mysore, India',
    period: '2020 – 2022',
    grade: '94%',
    gradeLabel: 'Percentage'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert1',
    name: 'Machine Learning',
    issuer: 'Coursera (Andrew Ng)'
  },
  {
    id: 'cert2',
    name: 'Advanced Machine Learning',
    issuer: 'Coursera (Andrew Ng)'
  },
  {
    id: 'cert3',
    name: 'Machine Learning with TensorFlow',
    issuer: 'Infosys Springboard'
  },
  {
    id: 'cert4',
    name: 'CS50P: Introduction to Python',
    issuer: 'Harvard University'
  },
  {
    id: 'cert5',
    name: 'Python for Artificial Intelligence(AI)',
    issuer: 'Infosys Springboard'
  }
];

export const ADDITIONAL_INFO = {
  languages: ['English', 'Hindi', 'Kannada', 'Urdu'],
  interests: ['Applied Machine Learning', 'Deep Learning', 'MLOps', 'Data Mining', 'Model Operationalization', 'Edge AI']
};
