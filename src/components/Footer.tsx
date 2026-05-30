/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 relative overflow-hidden">
      {/* Decorative linear glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
        
        {/* Left Side Info */}
        <div className="space-y-1">
          <p className="font-display font-medium text-sm text-zinc-300">
            © {currentYear} Syed Farhaan. All rights reserved.
          </p>
          <p className="text-zinc-600 font-mono text-[10px]">
            Designed and fully animated with Framer Motion, optimized for ATS ecosystems.
          </p>
        </div>

        {/* Right Side branding */}
        <div className="flex items-center space-x-6 font-mono text-zinc-500 text-xs">
          <a
            id="footer-github"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            id="footer-linkedin"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
