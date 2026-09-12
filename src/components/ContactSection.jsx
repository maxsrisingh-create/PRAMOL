import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Shield, Clock, Building, ArrowRight, HardHat } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyProfile } from '../data/companyData';
import siteHarkhauliBrick from '../assets/images/site_harkhauli_brickwork.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Government Tender / RFP',
    district: 'Sitamarhi',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger confetti celebration
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Site Photo Badge */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                Closing & Direct Contact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Building the Future Together
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Join us in shaping next-generation infrastructure. Contact us for strategic partnerships, government tenders, joint ventures, and investment inquiries.
            </p>
          </div>

          {/* Section Heading Site Photo Card */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-gold-500/30 shadow-xl shrink-0">
            <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-navy-950 border border-white/10 shrink-0">
              <img 
                src={siteHarkhauliBrick} 
                alt="Corporate Field Operations" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-1 text-[8px] font-mono text-gold-400 bg-navy-950/90 px-1 rounded">
                HOTLINES
              </span>
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>2 Active Hotlines</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">6287968432 / 8210270422</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest block">
                DIRECT INQUIRIES & CORPORATE HEADQUARTERS
              </span>
              <h3 className="text-2xl font-display font-bold text-white leading-snug">
                Pramol Enterprises Private Limited
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our corporate operations, engineering estimating cell, and executive leadership for prompt tender proposals and field mobilizations.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3.5">
              
              {/* Primary Phone Card */}
              <a
                href="tel:6287968432"
                className="p-4 sm:p-5 rounded-2xl bg-navy-900 border border-white/10 hover:border-gold-500/50 flex items-center gap-4 transition-all group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Primary Hotline</div>
                  <div className="text-lg font-bold text-white group-hover:text-gold-300 font-mono transition-colors">
                    +91 6287968432
                  </div>
                </div>
              </a>

              {/* Secondary Phone Card */}
              <a
                href="tel:8210270422"
                className="p-4 sm:p-5 rounded-2xl bg-navy-900 border border-white/10 hover:border-amber-500/50 flex items-center gap-4 transition-all group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-navy-950 transition-all shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Corporate & Tender Desk</div>
                  <div className="text-lg font-bold text-white group-hover:text-amber-300 font-mono transition-colors">
                    +91 8210270422
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:pramolenterprises@gmail.com"
                className="p-4 sm:p-5 rounded-2xl bg-navy-900 border border-white/10 hover:border-gold-500/50 flex items-center gap-4 transition-all group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Official Email</div>
                  <div className="text-base font-bold text-white group-hover:text-gold-300 font-mono transition-colors truncate">
                    pramolenterprises@gmail.com
                  </div>
                </div>
              </a>

            </div>

            {/* Turnkey Assurance Badge */}
            <div className="p-4 rounded-xl bg-navy-850 border border-gold-500/20 flex items-center gap-3">
              <Shield className="w-5 h-5 text-gold-500 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white">Guaranteed Response Time:</strong> Our tender estimating team responds to all formal RFPs within 24 business hours.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-navy-900 border border-gold-500/30 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-6 text-center space-y-5 animate-in fade-in zoom-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto shadow-lg shadow-gold-500/10">
                    <CheckCircle2 className="w-8 h-8 text-gold-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                      Thank you for your interest in collaborating with us.
                    </h3>
                    <div className="inline-block px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
                      Our online enquiry submission service is currently unavailable.
                    </div>
                  </div>

                  <div className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto space-y-4 text-left bg-navy-950/80 p-5 sm:p-6 rounded-2xl border border-white/10 shadow-inner">
                    <p className="font-semibold text-slate-100">
                      For project inquiries, tenders, RFPs, or collaborations, please contact our team directly:
                    </p>
                    
                    <div className="space-y-2.5 font-mono text-xs sm:text-sm pt-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base">📞</span>
                        <span className="text-slate-400 font-sans font-medium">Phone:</span>
                        <span className="text-white font-bold">[</span>
                        <a href="tel:6287968432" className="text-gold-400 hover:text-gold-300 hover:underline font-bold transition-colors">6287968432</a>
                        <span className="text-slate-400">,</span>
                        <a href="tel:8210270422" className="text-amber-400 hover:text-amber-300 hover:underline font-bold transition-colors">8210270422</a>
                        <span className="text-white font-bold">]</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base">📧</span>
                        <span className="text-slate-400 font-sans font-medium">Email:</span>
                        <a href="mailto:pramolenterprises@gmail.com" className="text-gold-400 hover:text-gold-300 hover:underline font-bold transition-colors">pramolenterprises@gmail.com</a>
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs pt-1 border-t border-white/5">
                      Our team will be happy to discuss your requirements and assist you further.
                    </p>
                  </div>

                  <p className="text-gold-400 font-semibold text-sm">
                    Thank you for choosing us.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Government Tender / RFP',
                        district: 'Sitamarhi',
                        message: ''
                      });
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-gold-400 border border-gold-500/30 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    Back to Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-xl font-display font-bold text-white">
                      Connect With Us
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out your requirement to connect with our technical and management team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>

                    {/* Inquiry Category */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Inquiry Category
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option>Government Tender / RFP</option>
                        <option>School Science Lab Turnkey Work</option>
                        <option>Mukhyamantri Nalkup / Irrigation</option>
                        <option>Joint Venture / Subcontracting</option>
                        <option>Material Supply Alliance</option>
                        <option>General Corporate Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Location / Region */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Target District / State Location
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="e.g. Sitamarhi / Muzaffarpur / Other"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Project Scope & Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the project location, estimated scope, timeline, and tender details..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin"></span>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
