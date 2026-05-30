/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Folder, Filter, ExternalLink, Cpu, X, Sparkles, Check } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'genai' | 'deep-learning' | 'ml'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { label: 'All Projects', id: 'all' as const },
    { label: 'Generative AI / Automation', id: 'genai' as const },
    { label: 'Deep Learning', id: 'deep-learning' as const },
    { label: 'Machine Learning', id: 'ml' as const },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-28 border-t border-zinc-900 grid-bg">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left">
          <div className="space-y-2">
            <motion.div
              id="projects-section-badge"
              className="inline-flex items-center space-x-1.5 bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-mono text-purple-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Folder size={12} className="text-purple-400" />
              <span className="uppercase tracking-widest font-medium">Engineered Solutions</span>
            </motion.div>
            
            <motion.h2
              id="projects-section-title"
              className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Featured Projects
            </motion.h2>
            
            <motion.p
              id="projects-section-desc"
              className="text-zinc-500 text-sm max-w-md font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A selection of machine learning architectures, automated intelligence tools, and complex neural systems.
            </motion.p>
          </div>

          {/* Core Categories Selector Tab */}
          <motion.div
            id="projects-filter-bar"
            className="flex flex-wrap items-center justify-center gap-1.5 bg-zinc-950/60 border border-zinc-900 p-1.5 rounded-2xl max-w-full md:max-w-max self-center md:self-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filterTabs.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  id={`filter-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors relative cursor-pointer ${
                    active ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {active && (
                    <motion.div
                      className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl"
                      layoutId="activeFilterBg"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Dynamic Project Cards Grid */}
        <motion.div
          id="project-cards-grid"
          layout="position"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layoutId={`project-container-${project.id}`}
                className="group rounded-3xl bg-zinc-950/40 border border-zinc-900/80 p-6 flex flex-col justify-between h-full backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
              >
                {/* Visual Accent glow line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent group-hover:via-purple-500/30 transition-all duration-500" />

                <div>
                  {/* Top: title year metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-zinc-600 text-xs tracking-wider">{project.year}</span>
                    {project.metric && (
                      <span className="inline-flex items-center space-x-1.5 bg-purple-950/20 border border-purple-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-purple-400">
                        <Sparkles size={10} />
                        <span>{project.metric}</span>
                      </span>
                    )}
                  </div>

                  {/* Main Title & Description */}
                  <div className="mb-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-medium text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 font-sans text-xs tracking-wide">
                      {project.subtitle}
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed pt-1.5 font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom: Tech tags & Expand invitation */}
                <div className="pt-5 border-t border-zinc-900/60 mt-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono bg-zinc-900/60 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] font-mono text-zinc-600 self-center">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-purple-400 group-hover:text-purple-300 font-medium flex items-center space-x-1 self-end sm:self-center">
                    <span>Details</span>
                    <ExternalLink size={12} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal expansion dialog */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                id="modal-backdrop"
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Box container */}
              <motion.div
                id="project-dialog-box"
                layoutId={`project-container-${selectedProject.id}`}
                className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl z-10"
                transition={{ duration: 0.3 }}
              >
                {/* Close Button top-right */}
                <button
                  id="close-project-modal"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-colors"
                  aria-label="Close dialog"
                >
                  <X size={16} />
                </button>

                {/* Header Information inside modal */}
                <div className="mb-6 pb-5 border-b border-zinc-900">
                  <div className="flex items-center gap-2 mb-2 font-mono">
                    <span className="text-zinc-500 text-xs">{selectedProject.year}</span>
                    <span className="text-zinc-700">•</span>
                    <span className="text-purple-400 uppercase text-[10px] tracking-widest font-bold">
                      {selectedProject.category} PROJECT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Grid metrics details */}
                {selectedProject.metric && (
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-950/20 to-indigo-950/10 border border-purple-500/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-purple-400 tracking-wider uppercase">Key Pipeline Metric Achievement</span>
                      <span className="text-base font-display font-medium text-white">{selectedProject.metric}</span>
                    </div>
                  </div>
                )}

                {/* Substantive descriptions bullet points from Resume */}
                <div className="space-y-4 mb-8">
                  <span className="block font-mono text-zinc-500 text-[10px] tracking-wider uppercase">Project Details & Contributions</span>
                  <ul className="space-y-3.5">
                    {selectedProject.points.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-3 text-zinc-300 text-sm leading-relaxed">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-lg bg-purple-950/50 border border-purple-500/10 flex items-center justify-center">
                          <Check size={12} className="text-purple-400" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expanded lists of Applied Stack */}
                <div className="space-y-3">
                  <span className="block font-mono text-zinc-500 text-[10px] tracking-wider uppercase">Comprehensive Implementation Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="text-xs font-mono bg-zinc-900 border border-zinc-850 text-zinc-200 px-3 py-1 rounded-xl"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
