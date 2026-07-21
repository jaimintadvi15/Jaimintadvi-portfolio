import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Simple validation helper
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 mx-auto rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-[#22c55e]/30 bg-[#040806]/90 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.85)]"
        >
          <div>
            <h3 className="font-display font-semibold text-xl text-white mb-2">
              Send a Message
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Got a question, proposal, or want to say hi? Write it below and Jaimin will get back to you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-[#060c09] border ${
                      errors.name ? 'border-amber-500/50 focus:border-amber-500' : 'border-[#22c55e]/30 focus:border-[#22c55e]'
                    } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#22c55e]/30 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[10px] text-amber-400 mt-1 font-mono">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-[#060c09] border ${
                      errors.email ? 'border-amber-500/50 focus:border-amber-500' : 'border-[#22c55e]/30 focus:border-[#22c55e]'
                    } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#22c55e]/30 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[10px] text-amber-400 mt-1 font-mono">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject-input" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject-input"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-[#060c09] border ${
                    errors.subject ? 'border-amber-500/50 focus:border-amber-500' : 'border-[#22c55e]/30 focus:border-[#22c55e]'
                  } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#22c55e]/30 transition-all`}
                  placeholder="Opportunity / Quick Query"
                />
                {errors.subject && (
                  <span className="flex items-center gap-1 text-[10px] text-amber-400 mt-1 font-mono">
                    <AlertCircle className="h-3 w-3" />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message-input" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                  Message Details
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-[#060c09] border ${
                    errors.message ? 'border-amber-500/50 focus:border-amber-500' : 'border-[#22c55e]/30 focus:border-[#22c55e]'
                  } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#22c55e]/30 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <span className="flex items-center gap-1 text-[10px] text-amber-400 mt-1 font-mono">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Trigger with states */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isSubmitting
                    ? 'bg-emerald-600/50 text-slate-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5'
                }`}
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <Send className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-0.5 transition-transform'}`} />
              </button>
            </form>
          </div>

          {/* Submission Feedback Overlay */}
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm font-mono"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-bold block">Message Received Successfully!</span>
                  <span>Thank you! I&apos;ve logged your request and will respond shortly.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Column: Info & Social Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Quick Contact Info */}
          <div className="glass-card rounded-3xl p-6 md:p-8 flex-1 flex flex-col justify-between border border-[#22c55e]/30 bg-[#040806]/90 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.85)]">
            <div>
              <h3 className="font-display font-semibold text-xl text-white mb-4">
                Connect Directly
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                Feel free to leverage any of the communication channels listed below to accelerate correspondence.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                <a 
                  href="mailto:jaimintadvi15@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-2xl bg-[#060c09] border border-[#22c55e]/20 hover:border-[#22c55e]/50 hover:bg-[#09140f] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] group-hover:bg-[#22c55e]/20 transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 block uppercase">Primary Email</span>
                    <span className="text-slate-200 text-xs md:text-sm font-mono font-semibold">jaimintadvi15@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/jaimintadvi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3 rounded-2xl bg-[#060c09] border border-[#22c55e]/20 hover:border-[#22c55e]/50 hover:bg-[#09140f] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] group-hover:bg-[#22c55e]/20 transition-all">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 block uppercase">GitHub Profile</span>
                    <span className="text-slate-200 text-xs md:text-sm font-mono font-semibold">github.com/jaimintadvi</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#060c09] border border-[#22c55e]/20">
                  <div className="p-3 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 block uppercase">Location Coordinates</span>
                    <span className="text-slate-200 text-xs md:text-sm font-mono font-semibold">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles badges matrix */}
            <div className="pt-6 border-t border-white/5 mt-6">
              <span className="font-mono text-[10px] text-slate-500 block uppercase mb-3">On the Web</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/jaimintadvi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#060c09] hover:bg-[#09140f] border border-[#22c55e]/20 hover:border-[#22c55e]/50 text-slate-300 hover:text-[#22c55e] transition-all group font-mono font-bold text-xs"
                >
                  <Github className="h-4 w-4 text-[#22c55e]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/jaimintadvi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#060c09] hover:bg-[#09140f] border border-[#22c55e]/20 hover:border-[#22c55e]/50 text-slate-300 hover:text-[#22c55e] transition-all group font-mono font-bold text-xs"
                >
                  <Linkedin className="h-4 w-4 text-[#22c55e]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
