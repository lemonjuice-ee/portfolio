import React from "react";
import { GraduationCap, MapPin} from "lucide-react";

const Profile = () => {
  return (
<section
  id="profile"
  className="relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0f0f0f] text-brand-lightbg py-24 px-72 md:px-20 lg:px-96 z-10"
>
  {/* Animated Background Circles */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 animate-pulse-slow blur-3xl z-0"></div>
  <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] rounded-full bg-brand-lightbg/10 animate-pulse-slower blur-2xl z-0"></div>


  {/* Section Title */}
  <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center ">
    The Developer
  </h2>

  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Profile Image */}
    <div className="aspect-square rounded-full overflow-hidden border-4 border-white/20 shadow-lg mx-40">
      <img
        src="/profilepic.png" // Replace with your image path
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Info */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Fritz Adrian Yu</h1>
      <p className="text-lg text-brand-lightbg/70 mb-2 mr-40">
        A passionate front-end developer and designer with a focus on clean, responsive interfaces and user-friendly experiences. I enjoy turning ideas into real-world solutions through code, with attention to design, performance, and accessibility.
      </p>
       <p className="flex items-center text-md text-brand-lightbg/70 mr-40 mb-2">
  <GraduationCap className="h-8 w-8 mr-2 text-brand-lightbg" />
 <span className="text-brand-lightbg mr-2">STI College Fairview</span>  Bachelor of Science in Information Technology
</p>
<p className="flex items-center text-md text-brand-lightbg mb-10 mr-40">
  <MapPin className="h-8 w-8 mr-2 text-brand-lightbg" />
Quezon City, Philippines
</p>
      <a
  href="/Yu Resume 2025.pdf"
  download
className="bg-white/10 text-sm text-brand-lightbg px-3 py-2 rounded-md border border-white/20 transition-shadow hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"

>
  Download Resume
</a>
    </div>
  </div>
<div className="mt-16 text-center mx-40">
  <h3 className="text-2xl font-semibold mb-12">Tools</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
    {/* Frameworks & Libraries */}
    <div>
      <h4 className="text-xl font-bold mb-4 ">Development</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <img src="logo192.png" alt="React" className="h-10 w-auto" />
          <span className="text-base">React</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/nextlogo.webp" alt="Next.js" className="h-10 w-auto" />
          <span className="text-base">Next.js</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/tailwindlogo.png" alt="Tailwind CSS" className="h-5 w-auto mr-2" />
          <span className="text-base">Tailwind CSS</span>
        </div>
           <div className="flex items-center gap-2">
          <img src="/jslogo.png" alt="JavaScript" className="h-10 w-auto" />
          <span className="text-base">JavaScript</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/htmllogo.png" alt="HTML" className="h-10 w-auto" />
          <span className="text-base">HTML</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/csslogo.png" alt="CSS" className="h-10 w-auto" />
          <span className="text-base">CSS</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/strapilogo.png" alt="Strapi" className="h-10 w-auto" />
          <span className="text-base">Strapi</span>
        </div>
      </div>
    </div>

    {/* Languages */}
    <div>
      <h4 className="text-xl font-bold mb-4 ">Design</h4>
      <div className="grid grid-cols-2 gap-4">
         <div className="flex items-center gap-2">
          <img src="/figmalogo.png" alt="figma" className="h-10 w-auto" />
          <span className="text-base">Figma</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/canvalogo.png" alt="canva" className="h-10 w-auto" />
          <span className="text-base">Canva</span>
        </div>
          <div className="flex items-center gap-2">
          <img src="/ailogo.png" alt="ai" className="h-10 w-auto" />
          <span className="text-base">Illustrator</span>
        </div>
      </div>
    </div>
  </div>
</div>

</section>


  );
};

export default Profile;
