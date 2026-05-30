/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight, Check } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<string | null>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="relative py-28 border-t border-zinc-900 bg-zinc-950/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <motion.div
            id="exp-section-indicator"
            className="inline-flex items-center space-x-1.5 bg-indigo-950/40 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-mono text-indigo-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase size={12} className="text-indigo-400" />
            <span className="uppercase tracking-widest font-medium">Professional Journey</span>
          </motion.div>
          
          <motion.h2
            id="exp-section-title"
            className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Career Roadmap
          </motion.h2>
          
          <motion.p
            id="exp-section-p"
            className="text-zinc-500 text-sm max-w-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hands-on experience deploying scalable machine learning models and crafting production-grade backends.
          </motion.p>
        </div>

        {/* Experience Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline Selector List - Left Column */}
          <div className="lg:col-span-5 space-y-4">
            {EXPERIENCES.map((exp, index) => {
              const isSelected = selectedExp === exp.id;
              return (
                <motion.div
                  id={`exp-card-${exp.id}`}
                  key={exp.id}
                  onClick={() => setSelectedExp(exp.id)}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-zinc-900 border-indigo-500/30 shadow-xl shadow-indigo-500/5'
                      : 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/30'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: isSelected ? 1 : 1.01 }}
                >
                  {/* Shared Layout Active Background Indicator */}
                  {isSelected && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-600"
                      layoutId="sidebarActiveIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <span className="text-lg font-display font-medium text-white group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-300 ${
                          isSelected ? 'rotate-90 text-indigo-400' : 'text-zinc-600'
                        }`}
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-y-1.5 gap-x-3 text-sm text-zinc-400">
                      <span className="text-zinc-200 font-medium">{exp.company}</span>
                      <span className="text-zinc-700">•</span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} className="text-zinc-600" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-900/60 text-xs font-mono">
                    <div className="flex items-center space-x-1.5 text-indigo-400">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full uppercase tracking-wider text-[9px] ${
                      exp.type === 'freelance' 
                        ? 'bg-amber-950/20 text-amber-400 border border-amber-900/30' 
                        : 'bg-purple-950/20 text-purple-400 border border-purple-900/30'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Details Panel - Right Column */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {EXPERIENCES.map((exp) => {
                if (exp.id !== selectedExp) return null;
                return (
                  <motion.div
                    id={`exp-details-${exp.id}`}
                    key={exp.id}
                    className="p-6 sm:p-8 rounded-3xl bg-zinc-950/50 border border-zinc-900 relative overflow-hidden backdrop-blur-sm self-stretch h-full flex flex-col justify-between"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing effect background layout */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/5 rounded-full blur-[40px] pointer-events-none" />

                    <div>
                      {/* Detailed header info */}
                      <div className="border-b border-zinc-900 pb-5 mb-6">
                        <span className="block font-mono text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-1">
                          Role Context & Accomplishments
                        </span>
                        <h3 className="text-2xl font-display font-medium text-white mb-2">{exp.role}</h3>
                        <p className="text-zinc-400 flex flex-wrap gap-2 text-sm">
                          <span className="text-zinc-200 font-semibold">{exp.company}</span>
                          <span className="text-zinc-700">|</span>
                          <span>{exp.location}</span>
                          <span className="text-zinc-700">|</span>
                          <span className="text-zinc-400">{exp.period}</span>
                        </p>
                      </div>

                      {/* Accomplishments Bullet points */}
                      <ul className="space-y-4">
                        {exp.points.map((point, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start space-x-3.5 text-zinc-300 text-sm leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                          >
                            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-lg bg-indigo-950/50 border border-indigo-500/10 flex items-center justify-center">
                              <Check size={12} className="text-indigo-400" />
                            </span>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Integrated Technologies */}
                    {exp.tech && (
                      <div className="mt-8 pt-6 border-t border-zinc-900">
                        <span className="block font-mono text-zinc-500 text-[10px] tracking-wider uppercase mb-3">
                          Applied Core Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-lg"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
