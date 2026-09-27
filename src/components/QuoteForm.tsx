import React, { useState } from 'react';
import { Phone, Send, CheckCircle2, Upload, FileText, X, MessageSquare, Copy, Check } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { QuoteFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

export const QuoteForm: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    requirementType: 'Laser Cutting',
    material: 'Mild Steel (MS)',
    quantity: '',
    description: '',
    preferredContact: 'phone',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(null);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);
  const [enquiryRef, setEnquiryRef] = useState<string>('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please detail your sheet-metal requirement';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      setSelectedFile({
        name: file.name,
        size: `${sizeMb} MB`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refCode = `MV-${Math.floor(1000 + Math.random() * 9000)}`;
    setEnquiryRef(refCode);
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    const summaryText = `*MAXX V ENGINEERINGS ENQUIRY (${enquiryRef})*
Name: ${formData.fullName}
Company: ${formData.companyName || 'N/A'}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Service: ${formData.requirementType}
Material: ${formData.material}
Quantity/Thickness: ${formData.quantity || 'N/A'}
Details: ${formData.description}`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const whatsappUrl = `https://wa.me/918019115556?text=${encodeURIComponent(
    `Hello MAXX V ENGINEERINGS, I have an enquiry regarding ${formData.requirementType}. Name: ${formData.fullName}, Phone: ${formData.phone}, Material: ${formData.material}, Details: ${formData.description}`
  )}`;

  return (
    <section id="quote-form" className={`py-20 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-white border-slate-300' : 'bg-[#0E0E0E] text-white border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
            <span>GET A QUOTE</span>
            <span className="text-slate-400">/</span>
            <span>SPECIFICATION ENQUIRY</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black font-display tracking-tight uppercase ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            REQUEST A FORMAL QUOTE
          </h2>
          <p className={`mt-3 text-base font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            Upload CAD drawings (DXF, DWG, PDF) or describe dimensions, materials, and batch quantities for prompt engineering review.
          </p>
        </div>

        {/* Form Container */}
        <div className={`max-w-4xl mx-auto p-6 sm:p-10 rounded-sm relative border-2 ${
          isLight ? 'bg-slate-50 border-slate-300 shadow-xl' : 'bg-[#121212] border-white/15 shadow-2xl'
        }`}>
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr" />
          <div className="cad-corner-bl" />
          <div className="cad-corner-br" />

          {isSubmitted ? (
            /* Submission Confirmation State */
            <div className="py-12 px-4 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#E30613]/20 border-2 border-[#E30613] text-[#E30613] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                  ENQUIRY GENERATED
                </span>
                <h3 className={`text-2xl sm:text-3xl font-black font-display uppercase ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  Thank You, {formData.fullName}!
                </h3>
                <p className={`text-sm max-w-lg mx-auto ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Your specification has been recorded with reference code{' '}
                  <strong className="text-[#E30613] font-mono font-bold">{enquiryRef}</strong>.
                </p>
              </div>

              {/* Direct Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-3 text-xs font-bold w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>FORWARD TO WHATSAPP (+91 80191 15556)</span>
                </a>

                <button
                  onClick={handleCopySummary}
                  className={`px-6 py-3 text-xs font-mono font-bold uppercase border rounded-sm flex items-center justify-center gap-2 transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                      : 'bg-black hover:bg-white/10 text-white border-white/20'
                  }`}
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-[#E30613]" /> : <Copy className="w-4 h-4 text-[#E30613]" />}
                  <span>{copiedSummary ? 'COPIED TO CLIPBOARD' : 'COPY SUMMARY'}</span>
                </button>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-slate-500 hover:text-[#E30613] underline"
                >
                  Submit another specification enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Full Name / Contact Person <span className="text-[#E30613]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full px-4 py-2.5 rounded-sm border text-sm focus:outline-none focus:border-[#E30613] ${
                      isLight
                        ? 'bg-white border-slate-300 text-black placeholder-slate-400'
                        : 'bg-[#181818] border-white/15 text-white placeholder-slate-600'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-[#E30613] font-mono mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Company / Firm Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Precision Fabrication Works"
                    className={`w-full px-4 py-2.5 rounded-sm border text-sm focus:outline-none focus:border-[#E30613] ${
                      isLight
                        ? 'bg-white border-slate-300 text-black placeholder-slate-400'
                        : 'bg-[#181818] border-white/15 text-white placeholder-slate-600'
                    }`}
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Phone Number <span className="text-[#E30613]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-sm border text-sm font-mono focus:outline-none focus:border-[#E30613] ${
                      isLight
                        ? 'bg-white border-slate-300 text-black placeholder-slate-400'
                        : 'bg-[#181818] border-white/15 text-white placeholder-slate-600'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-[#E30613] font-mono mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@domain.com"
                    className={`w-full px-4 py-2.5 rounded-sm border text-sm focus:outline-none focus:border-[#E30613] ${
                      isLight
                        ? 'bg-white border-slate-300 text-black placeholder-slate-400'
                        : 'bg-[#181818] border-white/15 text-white placeholder-slate-600'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-[#E30613] font-mono mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 3: Service & Material */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Required Service
                  </label>
                  <select
                    value={formData.requirementType}
                    onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-sm border text-sm focus:outline-none focus:border-[#E30613] ${
                      isLight
                        ? 'bg-white border-slate-300 text-black'
                        : 'bg-[#181818] border-white/15 text-white'
                    }`}
                  >
                    <option value="Laser Cutting">01 — Laser Cutting</option>
                    <option value="CNC Bending">02 — CNC Bending</option>
                    <option value="Custom Fabrication">03 — Custom Fabrication</option>
                    <option value="Design to Production">04 — Design to Production</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Material Alloy
                  </label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-sm border text-sm focus:outline-none focus:border-[#E30613] ${
                      isLight
                        ? 'bg-white border-slate-300 text-black'
                        : 'bg-[#181818] border-white/15 text-white'
                    }`}
                  >
                    <option value="Mild Steel (MS)">Mild Steel (MS)</option>
                    <option value="Stainless Steel (SS)">Stainless Steel (SS 304/316)</option>
                    <option value="Aluminium (ALU)">Aluminium (ALU)</option>
                    <option value="Galvanized Iron (GI)">Galvanized Iron (GI)</option>
                    <option value="Brass">Brass</option>
                    <option value="Copper">Copper</option>
                    <option value="Other / Client Supplied Material">Other / Client Supplied Material</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Quantity & Preferred Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Sheet Thickness / Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 3mm thickness, 50 units"
                    className={`w-full px-4 py-2.5 rounded-sm border text-sm focus:outline-none focus:border-[#E30613] ${
                      isLight
                        ? 'bg-white border-slate-300 text-black placeholder-slate-400'
                        : 'bg-[#181818] border-white/15 text-white placeholder-slate-600'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Preferred Contact Mode
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['phone', 'whatsapp', 'email'] as const).map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContact: method })}
                        className={`py-2 px-2 text-xs font-mono uppercase rounded-sm border transition-all text-center ${
                          formData.preferredContact === method
                            ? 'bg-[#E30613] text-white border-[#E30613] font-bold'
                            : isLight
                              ? 'bg-slate-200 border-slate-300 text-slate-700 hover:text-black'
                              : 'bg-black border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  Project Description / Specifications <span className="text-[#E30613]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detail part dimensions, hole diameters, bend angles, finish requirements, or assembly scope..."
                  className={`w-full px-4 py-2.5 rounded-sm border text-sm focus:outline-none focus:border-[#E30613] ${
                    isLight
                      ? 'bg-white border-slate-300 text-black placeholder-slate-400'
                      : 'bg-[#181818] border-white/15 text-white placeholder-slate-600'
                  }`}
                />
                {errors.description && <p className="text-xs text-[#E30613] font-mono mt-1">{errors.description}</p>}
              </div>

              {/* Drawing File Dropzone */}
              <div>
                <label className={`block text-xs font-mono uppercase mb-1.5 font-bold ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  Upload CAD Drawing / PDF Specification (Optional)
                </label>
                
                {selectedFile ? (
                  <div className={`flex items-center justify-between p-3 rounded-sm border text-xs font-mono ${
                    isLight ? 'bg-white border-[#E30613]' : 'bg-black border-[#E30613]'
                  }`}>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#E30613]" />
                      <span className={`font-bold ${isLight ? 'text-black' : 'text-white'}`}>{selectedFile.name}</span>
                      <span className="text-slate-400">({selectedFile.size})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedFile(null)}
                      className="p-1 text-slate-400 hover:text-[#E30613]"
                      title="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-sm cursor-pointer transition-all ${
                    isLight
                      ? 'bg-white border-slate-300 hover:border-[#E30613]'
                      : 'border-white/15 hover:border-[#E30613] bg-black/60 hover:bg-black'
                  }`}>
                    <Upload className="w-6 h-6 text-slate-400 mb-2" />
                    <span className={`text-xs font-bold uppercase ${isLight ? 'text-black' : 'text-white'}`}>
                      Upload CAD drawing (DXF, DWG, STEP) or PDF
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 mt-0.5">
                      Client-side inspected · Max 25MB
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.dwg,.dxf,.step,.stp,.png,.jpg,.jpeg"
                      onChange={handleFileChange}
                    />
                  </label>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] font-mono text-slate-400 max-w-sm">
                  Commercial inquiries are reviewed directly by the workshop engineering team at Autonagar, Guntur.
                </p>

                <button
                  type="submit"
                  className="btn-secondary px-8 py-3.5 text-xs font-bold w-full sm:w-auto shadow-xl"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>SUBMIT ENQUIRY</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
