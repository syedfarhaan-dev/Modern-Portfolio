/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  // Message Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate API delay for premium feel
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Clean up fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-zinc-900 bg-zinc-950/20">
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-purple-950/10 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <motion.div
            id="contact-section-badge"
            className="inline-flex items-center space-x-1.5 bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-mono text-purple-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Mail size={12} className="text-purple-400" />
            <span className="uppercase tracking-widest font-medium font-mono">Engagement Desk</span>
          </motion.div>
          
          <motion.h2
            id="contact-section-title"
            className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Initiate Contact
          </motion.h2>
          
          <motion.p
            id="contact-section-desc"
            className="text-zinc-500 text-sm max-w-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to deploy professional AI solutions, build ML models, or collaborate on deep engineering pipelines.
          </motion.p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-display font-medium text-white">Direct Connect channels</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Feel free to reach out via email or phone. Click any card below to immediately copy the credentials.
            </p>

            {/* Email copying card */}
            <motion.div
              id="copy-card-email"
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900/80 hover:border-zinc-800 transition-all cursor-pointer flex items-center justify-between group relative overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-850 text-purple-400 group-hover:border-purple-500/20 transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Email Address</span>
                  <span className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <div className="text-zinc-500 hover:text-white transition-colors p-1.5 rounded-lg">
                {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </div>
            </motion.div>

            {/* Phone copying card */}
            <motion.div
              id="copy-card-phone"
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900/80 hover:border-zinc-800 transition-all cursor-pointer flex items-center justify-between group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-850 text-cyan-400 group-hover:border-cyan-500/20 transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Mobile Number</span>
                  <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>
              <div className="text-zinc-500 hover:text-white transition-colors p-1.5 rounded-lg">
                {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </div>
            </motion.div>

            {/* Location indicator */}
            <motion.div
              id="info-card-location"
              className="p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900/80 flex items-center justify-between group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-850 text-zinc-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Current Location</span>
                  <span className="text-sm font-medium text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interaction message console */}
          <div className="lg:col-span-7">
            <motion.div
              id="message-form-container"
              className="p-6 sm:p-8 rounded-3xl bg-zinc-950/40 border border-zinc-900/80 relative overflow-hidden backdrop-blur-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-display font-medium text-white mb-2">Deploy a Message</h3>
              <p className="text-zinc-500 text-xs font-mono tracking-wide mb-6">CONSOLE_SESSION: SECURE_COMMUNICATION_BRIDGE</p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Your Name *</label>
                        <input
                          id="form-input-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rachel Green"
                          className="w-full text-sm rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors font-sans"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Your Email *</label>
                        <input
                          id="form-input-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rachel@example.com"
                          className="w-full text-sm rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Subject</label>
                      <input
                        id="form-input-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g., Deep Learning Consultation / Hiring opportunities"
                        className="w-full text-sm rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors font-sans"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Message *</label>
                      <textarea
                        id="form-input-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your pipeline request or proposal details here..."
                        className="w-full text-sm rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors font-sans resize-none"
                      />
                    </div>

                    {/* Submit action */}
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 group px-5 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send size={15} />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    id="form-success-container"
                    className="py-12 flex flex-col items-center text-center space-y-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Check size={24} />
                    </div>
                    <div className="space-y-1 max-w-sm">
                      <h4 className="text-lg font-display font-medium text-white">Transmission Successful</h4>
                      <p className="text-zinc-400 text-sm font-sans font-light">
                        Message packet processed successfully! It is logged in local console state.
                      </p>
                    </div>

                    {/* Custom console reply box simulating AI */}
                    <div className="w-full bg-zinc-900 border border-zinc-900/80 rounded-2xl p-4 text-left font-mono text-xs text-zinc-300 space-y-2 mt-4 relative">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-zinc-500 text-[10px]">
                        <span className="flex items-center gap-1.5"><Terminal size={12} /> FARHAAN_AI_AUTO_COPROCESSOR.sh</span>
                        <span>0.003s RESPONSE</span>
                      </div>
                      <p className="text-zinc-400">
                        {`> Thank you for writing! Since you are previewing my interactive portfolio, I want to reassure you that farhaansyed34@gmail.com is ready to receive emails. I will respond to your proposal directly at your inbox.`}
                      </p>
                    </div>

                    <button
                      id="reset-form-btn"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer pt-2"
                    >
                      <span>Deploy another ticket</span>
                      <ArrowRight size={12} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
