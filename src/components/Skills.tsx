/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Terminal, Layers, Database, Compass, Award, BarChart4, Bookmark } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

// Map icons to categories
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Programming Languages':
      return <Terminal size={18} className="text-purple-400" />;
    case 'AI / Machine Learning':
      return <Cpu size={18} className="text-cyan-400" />;
    case 'Frameworks & Libraries':
      return <Layers size={18} className="text-emerald-400" />;
    case 'Data Engineering':
      return <Database size={18} className="text-amber-400" />;
    case 'MLOps & Deployment':
      return <Compass size={18} className="text-rose-400" />;
    case 'GenAI & Automation':
      return <Award size={18} className="text-fuchsia-400" />;
    case 'Visualization & Analytics':
      return <BarChart4 size={18} className="text-sky-400" />;
    default:
      return <Bookmark size={18} className="text-zinc-400" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-zinc-900 bg-zinc-950/10">
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <motion.div
            id="skills-section-badge"
            className="inline-flex items-center space-x-1.5 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-mono text-cyan-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Cpu size={12} className="text-cyan-400" />
            <span className="uppercase tracking-widest font-medium font-mono">Expertise Matrix</span>
          </motion.div>
          
          <motion.h2
            id="skills-section-title"
            className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical Vault
          </motion.h2>
          
          <motion.p
            id="skills-section-desc"
            className="text-zinc-500 text-sm max-w-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive taxonomy of artificial intelligence, programming models, database pipelines, and cloud systems.
          </motion.p>
        </div>

        {/* Bento Grid layout for skill categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div
              id={`skill-card-${index}`}
              key={cat.category}
              className={`p-6 rounded-2xl bg-zinc-950/40 border border-zinc-900/80 hover:border-zinc-800 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              {/* Subtle category-specific gradient glow corner */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${cat.color} rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500`} />

              <div>
                {/* Header title & icon */}
                <div className="flex items-center space-x-3 mb-5 border-b border-zinc-900 pb-3">
                  <div className="p-2 bg-zinc-900/60 rounded-xl border border-zinc-850">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="font-display font-medium text-[15px] sm:text-base text-white tracking-tight group-hover:text-white transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Badges of specific skills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono font-medium text-zinc-400 bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 hover:text-zinc-100 px-2.5 py-1 rounded-lg transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
