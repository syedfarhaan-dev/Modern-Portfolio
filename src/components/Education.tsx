/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, ADDITIONAL_INFO } from '../data';

export default function Education() {
  return (
    <section id="education" className="relative py-28 border-t border-zinc-900 grid-bg">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <motion.div
            id="edu-section-badge"
            className="inline-flex items-center space-x-1.5 bg-indigo-950/40 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-mono text-indigo-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap size={12} className="text-indigo-400" />
            <span className="uppercase tracking-widest font-medium font-mono">Academic Background</span>
          </motion.div>
          
          <motion.h2
            id="edu-section-title"
            className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Education & Certs
          </motion.h2>
          
          <motion.p
            id="edu-section-desc"
            className="text-zinc-500 text-sm max-w-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A solid academic foundation in computer science and credentials from world-leading programs.
          </motion.p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education Degrees */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl font-display font-medium text-zinc-100 flex items-center gap-2 mb-6">
              <BookOpen size={18} className="text-indigo-400" /> Academic Qualifications
            </h3>

            {EDUCATION.map((edu, index) => (
              <motion.div
                id={`edu-item-${index}`}
                key={edu.id}
                className="relative p-6 rounded-2xl bg-zinc-950/40 border border-zinc-900/80 hover:border-zinc-800 transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Side highlight line */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-indigo-500/20 group-hover:bg-indigo-500/80 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-lg font-display font-medium text-white block">
                      {edu.degree}
                    </span>
                    <span className="text-zinc-400 text-sm block">
                      {edu.institution}, {edu.location}
                    </span>
                  </div>

                  {/* Highlights Grade badge */}
                  <div className="bg-zinc-900/60 border border-zinc-850 px-3 py-1.5 rounded-xl self-start flex flex-col items-center">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-wider uppercase">
                      {edu.gradeLabel}
                    </span>
                    <span className="text-base font-display font-bold text-indigo-400">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                {/* Coursework Tags */}
                {edu.coursework && (
                  <div className="mt-5 pt-4 border-t border-zinc-900/60">
                    <span className="block font-mono text-zinc-500 text-[10px] tracking-wider uppercase mb-2">
                      Coursework Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-[10px] font-mono bg-zinc-950 text-indigo-300 border border-indigo-950 border-indigo-900/30 px-2 py-0.5 rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer block for period */}
                <div className="flex items-center space-x-1.5 text-zinc-500 font-mono text-xs mt-4">
                  <Calendar size={12} />
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Verifiable Certs & Core Areas */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="text-xl font-display font-medium text-zinc-100 flex items-center gap-2 mb-6">
                <Award size={18} className="text-cyan-400" /> Dynamic Credentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div
                    id={`cert-item-${cert.id}`}
                    key={cert.id}
                    className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-900/80 hover:border-zinc-800 transition-all text-left flex items-start space-x-3 group"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="p-2 rounded-lg bg-zinc-900 text-cyan-400 border border-zinc-850 group-hover:border-cyan-500/20 transition-all flex-shrink-0">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <span className="block font-medium text-sm text-white leading-snug group-hover:text-cyan-400 transition-colors">
                        {cert.name}
                      </span>
                      <span className="block text-[11px] text-zinc-500 font-mono mt-0.5">
                        {cert.issuer}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional info section (Languages & Areas of Interest) */}
            <div className="pt-6 border-t border-zinc-900">
              <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-4">
                Additional Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Languages */}
                <div className="space-y-2 bg-zinc-950/20 p-4 rounded-2xl border border-zinc-900">
                  <span className="text-xs font-mono text-zinc-500 block">LANGUAGES</span>
                  <div className="flex flex-wrap gap-2">
                    {ADDITIONAL_INFO.languages.map((lang) => (
                      <span key={lang} className="text-xs font-medium text-zinc-300 bg-zinc-900/60 border border-zinc-800 px-2.5 py-1 rounded-lg">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="space-y-2 bg-zinc-950/20 p-4 rounded-2xl border border-zinc-900">
                  <span className="text-xs font-mono text-zinc-500 block">PRIMARY ENTHUSIASM</span>
                  <div className="flex flex-wrap gap-2">
                    {ADDITIONAL_INFO.interests.slice(0, 3).map((interest) => (
                      <span key={interest} className="text-[10px] font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-950/30 px-2.5 py-1 rounded-lg">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
