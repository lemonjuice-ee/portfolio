import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Facebook, Linkedin, Github } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mwpbjzrv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('Network error. Please check your connection.');
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <header className="bg-brand-darktop shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold text-brand-lightbg">
            &lt;fritz<span className="text-brand-red">.yu</span>&gt;
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-brand-lightbg text-sm font-medium">
            <nav className="flex gap-4 lg:gap-6">
              <a href="#home" className="hover:text-brand-accent transition font-semibold">Home</a>
              <a href="#projects" className="hover:text-brand-accent transition font-semibold">Projects</a>
            </nav>
            <button
              onClick={() => setShowModal(true)}
              className="ml-4 px-4 py-2 bg-brand-darktop border-white border-2 text-white rounded-xl hover:bg-brand-dark hover:text-brand-red hover:border-brand-red transition text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              Let’s Talk!
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-brand-darktop px-4 pb-6 shadow-md">
            <nav className="flex flex-col gap-4 text-brand-lightbg text-sm font-medium">
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
              <button
                onClick={() => setShowModal(true)}
                className="ml-4 px-4 py-2 bg-brand-darktop border-white border-2 text-white rounded-xl hover:bg-brand-dark hover:text-brand-red hover:border-brand-red transition text-sm font-semibold"
              >
                Let’s Talk!
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* MODAL: Now available regardless of mobile/desktop */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative p-8 rounded-lg max-w-xl w-full shadow-lg bg-brand-darktop z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 blur-3xl animate-blob z-0 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 blur-3xl animate-blob animation-delay-2000 z-0 pointer-events-none" />

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold z-10"
            >
              &times;
            </button>

            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6 text-brand-lightbg text-center">Contact Information</h2>

              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="flex-shrink-0">
                  <img src="/profilepicnobg.png" alt="Profile" className="w-28 h-28 rounded-full object-cover transform scale-110 shadow-lg" />
                </div>
                <div className="text-left">
                  <div className="mb-4 flex items-center text-brand-lightbg">
                    <Mail className="w-5 h-5 mr-3" />
                    <span className="text-gray-300">fritzyu.business@gmail.com</span>
                  </div>
                  <div className="mb-4 flex items-center text-brand-lightbg">
                    <Phone className="w-5 h-5 mr-3" />
                    <span className="text-gray-300">0999-563-9461</span>
                  </div>
                  <div className="flex items-center text-brand-lightbg">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span className="text-gray-300">Quezon City, Philippines</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-8 mt-4">
                <a href="https://www.linkedin.com/in/fy0911/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform transform hover:scale-125 duration-100" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
                <a href="https://github.com/lemonjuice-ee" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform transform hover:scale-125 duration-100" aria-label="GitHub"><Github className="w-6 h-6" /></a>
                <a href="https://www.facebook.com/lemonju11ce/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform transform hover:scale-125 duration-100" aria-label="Facebook"><Facebook className="w-6 h-6" /></a>
              </div>

              <div className="text-brand-lightbg text-center mb-3 mt-5">
                <span className="text-gray-100 text-lg">Send a Message</span>
              </div>

              {!formSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded-lg bg-brand-dark text-white" value={formData.name} onChange={handleChange} />
                  <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded-lg bg-brand-dark text-white" value={formData.email} onChange={handleChange} />
                  <textarea name="message" placeholder="Your Message" required rows="4" className="w-full px-4 py-2 rounded-lg bg-brand-dark text-white" value={formData.message} onChange={handleChange} />
                  <div className="flex justify-end">
                    <button type="submit" className="bg-black text-white border border-gray-600 px-6 py-2 rounded hover:bg-gray-600 hover:text-white transition duration-200" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-green-400 font-medium text-center mt-4">Thank you! Your message has been sent. 💌</div>
              )}
            </div>
          </div>

          <style jsx>{`
            @keyframes blob {
              0%, 100% {
                transform: translate(0px, 0px) scale(1);
                border-radius: 50%;
              }
              33% {
                transform: translate(20px, -10px) scale(1.1);
                border-radius: 60% 40% 30% 70%;
              }
              66% {
                transform: translate(-15px, 20px) scale(0.95);
                border-radius: 40% 60% 70% 30%;
              }
            }
            .animate-blob {
              animation: blob 8s infinite ease-in-out;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Header;
