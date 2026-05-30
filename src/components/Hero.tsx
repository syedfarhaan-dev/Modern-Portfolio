/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedTitle, setTypedTitle] = useState('');
  const titles = ['Building AI-Powered Systems', 'Generative AI Developer', 'Agentic AI Builder', 'Full-Stack Engineer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // typing effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 2000; // Pause at full title
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setTypedTitle(
        isDeleting
          ? currentTitle.substring(0, charIndex - 1)
          : currentTitle.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  // Interactive Neural network canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const numParticles = Math.min(Math.floor((width * height) / 15000), 75);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background network connection grid
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.25)';
        ctx.fill();

        // Connect particles to mouse
        if (mouse.x > -1000) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const alpha = (1 - dist / 180) * 0.15;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 120) * 0.08;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg">
      {/* Dynamic Background Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Bio and Text */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <motion.div
            id="status-badge"
            className="inline-flex self-center lg:self-start items-center space-x-2 bg-purple-950/30 border border-purple-500/20 px-3 py-1.5 rounded-full shadow-inner"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span className="text-xs font-mono text-purple-200 uppercase tracking-widest font-medium">
              Open to Roles in AI & Data Science
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.h2
              id="hero-greeting"
              className="text-lg md:text-xl font-mono text-cyan-400 tracking-wider font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Hi, I am Syed Farhaan
            </motion.h2>

            <motion.h1
              id="hero-job-title"
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight min-h-[5rem] sm:min-h-[7rem] lg:min-h-[9rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Software Engineer & AI/ML Engineer <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {typedTitle}
              </span>
              <span className="animate-pulse text-purple-400">|</span>
            </motion.h1>
          </div>

          <motion.p
            id="hero-summary"
            className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-light text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {PERSONAL_INFO.tagline} {PERSONAL_INFO.summary}
          </motion.p>

          {/* Buttons & Actions */}
          <motion.div
            id="hero-actions"
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button
              id="hero-cta-btn"
              onClick={() => handleScrollToSection('projects')}
              className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-secondary-btn"
              onClick={() => handleScrollToSection('contact')}
              className="px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Let's Connect</span>
            </button>
          </motion.div>

          {/* Social icons bottom */}
          <motion.div
            id="hero-social-links"
            className="flex items-center justify-center lg:justify-start space-x-6 pt-6 border-t border-zinc-900 w-full lg:max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              id="social-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              id="social-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              id="social-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive AI Visual Card Representation */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            id="hero-interactive-card"
            className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl bg-zinc-950/40 border border-zinc-800 p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            {/* Hologram gradient inside */}
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-cyan-500/10 rounded-full blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-purple-500/10 rounded-full blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Neural Net Interface Representation Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-400 animate-pulse" />
                <span className="font-mono text-[10px] text-zinc-500 tracking-wider">SYSTEMS ARCHITECTURE</span>
              </div>
              <div className="flex space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
              </div>
            </div>

            {/* Main Holographic metrics */}
            <div className="space-y-6 my-6">
              <div className="space-y-1">
                <span className="block font-mono text-[10px] text-zinc-500 tracking-wider uppercase">Current Focus</span>
                <span className="text-xl font-display font-medium text-white flex items-center gap-2">
                  <Cpu className="text-cyan-400 w-4 h-4" /> Deep AI Pipelines
                </span>
                <span className="block font-mono text-xs text-zinc-400">RAG, Transformer models, MLOps AWS</span>
              </div>

              {/* Live Status Indicators (Actual metrics from Resume) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/40 border border-zinc-900 p-3.5 rounded-xl">
                  <span className="block font-mono text-[9px] text-zinc-500 tracking-wider uppercase">ACADEMIC EXCELLENCE</span>
                  <span className="text-2xl font-display font-semibold text-white">9.35</span>
                  <span className="block text-[10px] text-cyan-400 mt-0.5">BE AI&ML CGPA</span>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-900 p-3.5 rounded-xl">
                  <span className="block font-mono text-[9px] text-zinc-500 tracking-wider uppercase">COMPLEX PIPELINES</span>
                  <span className="text-2xl font-display font-semibold text-white">100%</span>
                  <span className="block text-[10px] text-purple-400 mt-0.5">Production-Ready API</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-zinc-500 tracking-wider uppercase">Active Agents In Production</span>
                <div className="space-y-1.5 text-xs text-zinc-300 font-mono">
                  <div className="flex items-center space-x-2 bg-purple-950/20 px-2 py-1 rounded border border-purple-900/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>AI Resume Optimization Agent</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-cyan-950/20 px-2 py-1 rounded border border-cyan-900/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>PowerSight Prediction Engine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with telemetry indicator */}
            <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span className="tracking-wide">SYED_FARHAAN_CORE.v2.6</span>
              <span className="text-emerald-400 animate-pulse bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">ONLINE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
