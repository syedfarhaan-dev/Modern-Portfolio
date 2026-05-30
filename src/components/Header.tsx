/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            id="header-logo"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 focus:outline-none cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-display font-bold text-lg text-white shadow-lg shadow-indigo-500/20">
              SF
            </div>
            <div className="text-left hidden sm:block">
              <span className="block font-display font-medium text-sm text-zinc-100 tracking-wide">
                SYED FARHAAN
              </span>
              <span className="block font-mono text-[10px] text-purple-400 tracking-wider">
                AI/ML ENGINEER
              </span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative cursor-pointer ${
                  activeSection === item.id
                    ? 'text-purple-400'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Socials & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              id="header-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-900"
              aria-label="GitHub Profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              id="header-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-zinc-900"
              aria-label="LinkedIn Profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              id="header-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-zinc-900"
              aria-label="Email Contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
            >
              <Mail size={18} />
            </motion.a>
            <motion.button
              id="header-hire-btn"
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-100 hover:text-white text-sm font-medium transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Mail size={14} className="text-purple-400" />
              <span>Hire Me</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-drawer"
          className="md:hidden bg-zinc-950 border-b border-zinc-900 px-4 pt-2 pb-6 space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <button
              id={`mobile-nav-${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-purple-950/40 text-purple-400 border border-purple-900/30'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center space-x-4 pt-4 px-4 border-t border-zinc-900">
            <a
              id="mobile-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              id="mobile-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              id="mobile-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <button
              id="mobile-hire"
              onClick={() => scrollToSection('contact')}
              className="ml-auto px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 hover:text-white text-sm font-medium transition-all"
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
