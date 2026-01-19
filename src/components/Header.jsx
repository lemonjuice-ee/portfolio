import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Facebook, Linkedin, Github, Home, Folder, Instagram, } from 'lucide-react';

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
      <header className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-6 px-6 py-3 bg-black/70 backdrop-blur-xl rounded-full shadow-lg border border-white/10 ">
          <h1 className="text-sm sm:text-base font-bold text-brand-lightbg whitespace-nowrap">
            &lt;fritz<span className="text-brand-red">.yu</span>&gt;
          </h1>

          {/* Desktop Nav */}
<div className="hidden md:flex items-center gap-4 text-brand-lightbg text-sm font-medium">
  {/* NAV ICONS */}
<nav className="flex items-center gap-2">

  {/* Scroll to top */}
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault(); // Prevent any default jump
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
    aria-label="Home"
    className="relative group p-2 rounded-full hover:bg-white/10 transition"
  >
    <Home className="w-6 h-6 text-brand-lightbg" strokeWidth={2.5} />

    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black/80 text-white backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
      Home
    </span>
  </button>

  {/* Scroll to Projects section */}
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const projects = document.getElementById('projects');
      projects?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }}
    aria-label="Projects"
    className="relative group p-2 rounded-full hover:bg-white/10 transition"
  >
    <Folder className="w-6 h-6 text-brand-lightbg" strokeWidth={2.5} />

    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black/80 text-white backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
      Projects
    </span>
  </button>
</nav>


  {/* DIVIDER */}
  <span className="h-5 w-px bg-white/20" />

  {/* SOCIAL ICONS */}
  <div className="flex items-center gap-2">
    <a
      href="https://www.instagram.com/lemonjuice.designs"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="relative group p-2 rounded-full hover:bg-white/10 hover:scale-110 transition-all"
    >
      <Instagram className="w-6 h-6 text-brand-lightbg" strokeWidth={2.5} />

      <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black/80 text-white backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
        Instagram
      </span>
    </a>

    <a
      href="https://www.tiktok.com/@lemonjuice.designs"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="relative group p-2 rounded-full hover:bg-white/10 hover:scale-110 transition-all"
    >
      <img
        src="https://icons.iconarchive.com/icons/simpleicons-team/simple/512/tiktok-icon.png"
        alt=""
        className="w-5 h-5 invert"
      />

      <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black/80 text-white backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
        TikTok
      </span>
    </a>
  </div>

  {/* DIVIDER */}
  <span className="h-5 w-px bg-white/20" />

  {/* CTA */}
  <button
    onClick={() => setShowModal(true)}
    className="relative group px-4 py-2 text-xs font-semibold rounded-full bg-brand-darktop border border-white/30 hover:bg-brand-dark transition"
  >
    Let’s Talk!

    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black/80 text-white backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
      Contact
    </span>
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
