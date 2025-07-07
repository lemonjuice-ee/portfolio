import React, { useState } from "react";
import { Mail,Phone,MapPin} from "lucide-react";
import { Facebook, Linkedin, Github } from 'lucide-react';

// Triangle config
const triangles = [
  // Large
  { size: 100, stroke: "#7f1d1d", opacity: 0.9, duration: 35, delay: 0 },
  { size: 90, stroke: "#991b1b", opacity: 0.85, duration: 33, delay: 3 },
  { size: 95, stroke: "#b91c1c", opacity: 0.9, duration: 38, delay: 1 },
  { size: 85, stroke: "#991b1b", opacity: 0.8, duration: 36, delay: 7 },
  { size: 80, stroke: "#b91c1c", opacity: 0.75, duration: 34, delay: 5 },
  { size: 75, stroke: "#7f1d1d", opacity: 0.7, duration: 30, delay: 2 },
  { size: 95, stroke: "#b91c1c", opacity: 0.8, duration: 32, delay: 15 },
  { size: 90, stroke: "#991b1b", opacity: 0.9, duration: 39, delay: 9 },
  { size: 85, stroke: "#7f1d1d", opacity: 0.6, duration: 37, delay: 14 },
  { size: 100, stroke: "#991b1b", opacity: 0.9, duration: 40, delay: 19 },
  // Medium
  { size: 65, stroke: "#b91c1c", opacity: 0.65, duration: 35, delay: 4 },
  { size: 60, stroke: "#991b1b", opacity: 0.8, duration: 32, delay: 6 },
  { size: 55, stroke: "#7f1d1d", opacity: 0.7, duration: 30, delay: 8 },
  { size: 50, stroke: "#b91c1c", opacity: 0.6, duration: 33, delay: 10 },
  { size: 60, stroke: "#7f1d1d", opacity: 0.7, duration: 28, delay: 20 },
  { size: 45, stroke: "#991b1b", opacity: 0.7, duration: 29, delay: 16 },
  { size: 50, stroke: "#b91c1c", opacity: 0.7, duration: 27, delay: 18 },
  { size: 55, stroke: "#7f1d1d", opacity: 0.6, duration: 31, delay: 17 },
  { size: 40, stroke: "#991b1b", opacity: 0.8, duration: 30, delay: 21 },
  { size: 65, stroke: "#b91c1c", opacity: 0.7, duration: 33, delay: 22 },
  // Small
  { size: 30, stroke: "#991b1b", opacity: 0.6, duration: 27, delay: 11 },
  { size: 25, stroke: "#b91c1c", opacity: 0.5, duration: 28, delay: 12 },
  { size: 20, stroke: "#7f1d1d", opacity: 0.4, duration: 25, delay: 13 },
  { size: 15, stroke: "#991b1b", opacity: 0.45, duration: 26, delay: 14 },
  { size: 28, stroke: "#b91c1c", opacity: 0.5, duration: 29, delay: 15 },
  { size: 22, stroke: "#7f1d1d", opacity: 0.55, duration: 23, delay: 16 },
  { size: 26, stroke: "#b91c1c", opacity: 0.6, duration: 24, delay: 17 },
  { size: 18, stroke: "#991b1b", opacity: 0.5, duration: 26, delay: 18 },
  { size: 24, stroke: "#7f1d1d", opacity: 0.45, duration: 23, delay: 19 },
  { size: 12, stroke: "#b91c1c", opacity: 0.4, duration: 20, delay: 23 },
  { size: 14, stroke: "#991b1b", opacity: 0.4, duration: 21, delay: 24 },
  { size: 16, stroke: "#7f1d1d", opacity: 0.45, duration: 24, delay: 25 },
  { size: 28, stroke: "#b91c1c", opacity: 0.55, duration: 27, delay: 26 },
  { size: 20, stroke: "#991b1b", opacity: 0.5, duration: 22, delay: 27 },
  { size: 25, stroke: "#7f1d1d", opacity: 0.6, duration: 28, delay: 28 },
  { size: 19, stroke: "#b91c1c", opacity: 0.5, duration: 22, delay: 29 },
  { size: 15, stroke: "#991b1b", opacity: 0.45, duration: 23, delay: 30 },
  { size: 10, stroke: "#7f1d1d", opacity: 0.4, duration: 20, delay: 31 },
  { size: 22, stroke: "#b91c1c", opacity: 0.5, duration: 25, delay: 32 },
  { size: 27, stroke: "#991b1b", opacity: 0.55, duration: 29, delay: 33 },
];

// Safe random position generator (avoids 0vw/100vw overflow)
const randomPositions = Array.from({ length: 40 }, () => {
  const rand = () => {
    const min = 2;
    const max = 88;
    return [Math.random() * (max - min) + min, Math.random() * (max - min) + min];
  };
  return [rand(), rand(), rand()];
});

// Generate keyframes per triangle
const generateKeyframes = () => {
  return randomPositions
    .map(([start, mid, end], i) => `@keyframes floatMove${i} {
      0% { transform: translate(${start[0]}vw, ${start[1]}vh) rotate(0deg); }
      50% { transform: translate(${mid[0]}vw, ${mid[1]}vh) rotate(180deg); }
      100% { transform: translate(${end[0]}vw, ${end[1]}vh) rotate(360deg); }
    }`)
    .join("\n");
};



const Hero = () => {
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


  return (
    <section
      id="home"
      className="bg-brand-darktop text-brand-lightbg min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden"
    >
      {/* Animated Triangles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {triangles.map(({ size, stroke, opacity, duration, delay }, i) => (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            style={{
              opacity,
              position: "absolute",
              top: 0,
              left: 0,
              transform: `translate(${randomPositions[i][0][0]}vw, ${randomPositions[i][0][1]}vh) rotate(0deg)`,
              animationName: `floatMove${i}`,
              animationDuration: `${duration}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationDelay: `-${delay}s`,
              transformOrigin: "50% 50%",
            }}
          >
            <polygon points="12 2 22 20 2 20" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <div className="text-center max-w-xl md:max-w-2xl animate-fade-in z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm Fritz<span className="text-brand-accent"> Yu</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-brand-lightbg mb-6 relative inline-block border-r-4 border-brand-lightbg animate-typewriter w-full max-w-xs sm:max-w-md md:max-w-2xl">
          <span className="font-semibold">Design</span> and{" "}
          <span className="font-semibold">Develop</span> the interface your users deserve.
        </p>

        <div>
          <button
            onClick={() => setShowModal(true)}
            className="text-base md:text-lg inline-block bg-brand-accent hover:bg-brand-red text-white px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
{/* Modal */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
    <div className="relative p-8 rounded-lg max-w-xl w-full shadow-lg bg-brand-darktop z-10 overflow-hidden">
      {/* Blob Backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 blur-3xl animate-blob z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 blur-3xl animate-blob animation-delay-2000 z-0 pointer-events-none" />

      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold z-10"
      >
        &times;
      </button>

      {/* Modal Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-6 text-brand-lightbg text-center">Contact Information</h2>

        {/* Image & Info */}
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

        {/* Contact Form */}

        {/* Social Media Icons */}
<div className="flex justify-center gap-8 mt-4">
  
  <a
    href="https://www.linkedin.com/in/fy0911/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-transform transform hover:scale-125 duration-100"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-6 h-6" />
  </a>
  
  <a
    href="https://github.com/lemonjuice-ee"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-transform transform hover:scale-125 duration-100"
    aria-label="GitHub"
  >
    <Github className="w-6 h-6" />
  </a>

  <a
    href="https://www.facebook.com/lemonju11ce/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-transform transform hover:scale-125 duration-100"
    aria-label="Facebook"
  >
    <Facebook className="w-6 h-6" />
  </a>
</div>
 

        <div className="text-brand-lightbg text-center mb-3 mt-5">
              <span className="text-gray-100 text-lg">Send a Message</span>
            </div>
        {!formSuccess ? (
<form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full px-4 py-2 rounded-lg bg-brand-dark text-white"
    value={formData.name}
    onChange={handleChange}
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full px-4 py-2 rounded-lg bg-brand-dark text-white"
    value={formData.email}
    onChange={handleChange}
  />
  <textarea
    name="message"
    placeholder="Your Message"
    required
    rows="4"
    className="w-full px-4 py-2 rounded-lg bg-brand-dark text-white"
    value={formData.message}
    onChange={handleChange}
  />

  {/* Button aligned to the right */}
  <div className="flex justify-end">
    <button
      type="submit"
      className="bg-black text-white border border-gray-600 px-6 py-2 rounded hover:bg-gray-600 hover:text-white transition duration-200"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
  </div>
</form>
        ) : (
          <div className="text-green-400 font-medium text-center mt-4">
            Thank you! Your message has been sent. 💌
          </div>
        )}
      </div>
    </div>

    {/* Blob Animations */}
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




      {/* Typewriter animation styles */}
      <style jsx>{`
        @keyframes typewriter {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
        .animate-typewriter {
          white-space: nowrap;
          overflow: hidden;
          animation: typewriter 3s steps(30, end) 1s 1 normal both,
                     blink 0.8s step-end infinite;
        }
        @media (max-width: 640px) {
          .animate-typewriter {
            font-size: 1rem;
            max-width: 90vw;
          }
        }
      `}</style>

      {/* Triangle keyframes */}
      <style jsx>{generateKeyframes()}</style>
    </section>
  );
};

export default Hero;