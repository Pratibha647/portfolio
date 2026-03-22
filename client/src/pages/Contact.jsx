import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "maanupratibha@gmail.com", href: "mailto:maanupratibha@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 7858995744", href: "tel:7858995744" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "linkedin.com/in/pratibha-banerjee11", href: "https://www.linkedin.com/in/pratibha-banerjee11/" },
    { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "github.com/Pratibha647", href: "https://github.com/Pratibha647" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      if (response.data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: response.data.message || 'Something went wrong' });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Give a graceful error if backend isn't awake
      setStatus({ type: 'error', message: 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 animate-fade-in pb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
          Let's Connect
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Feel free to reach out for opportunities or collaborations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.href} 
                target={info.href.startsWith('http') ? "_blank" : "_self"} 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group hover:bg-slate-800/30 p-4 rounded-xl transition-colors border border-transparent hover:border-slate-800"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 shadow-lg">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">{info.label}</h4>
                  <p className="text-lg text-white font-medium group-hover:text-blue-400 transition-colors">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 mb-8 lg:mb-0">
            <a 
              href="https://wa.me/917858995744?text=Hi%20Pratibha%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Connect on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-slate-800/40 border border-slate-700/60 p-8 md:p-10 rounded-3xl shadow-2xl relative">
          <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
          
          {status.message && (
             <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
                {status.type === 'success' && <CheckCircle2 className="w-6 h-6 flex-shrink-0" />}
                <p className="font-medium pt-0.5">{status.message}</p>
             </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows="5" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                placeholder="Hi John! I'd like to talk about..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-4 font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
