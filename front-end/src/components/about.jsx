import Header from './Header';
import Footer from './Footer';
import { Link, Mail, Phone, Download, Code2, Database, Wrench } from "lucide-react";
function About() {
  const skills = {
    "Front-end": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "Back-end": ["Node.js", "Express.js"],
    "Database": ["PostgreSQL"],
    "Tools": ["Git", "GitHub"],
  };

  const projects = [
    {
      title: "Full Authentication App",
      desc: "Complete signup / signin system with a full user flow.",
    },
    {
      title: "E-commerce Interface",
      desc: "Front-end for an online store, connected to a live back-end.",
    },
    {
      title: "Recipe Finder",
      desc: "Web interface to search recipes worldwide, connected to a back-end.",
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="px-6 md:px-16 pt-16 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10">
        <div className="max-w-xl">
          <p className="text-[#ff4d2e] text-xs font-semibold tracking-widest uppercase mb-3">About the developer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Abdallah Khemnou</h1>
          <p className="text-white/50 text-lg mt-2">Full-Stack Web Developer</p>
          <p className="text-white/60 text-sm leading-relaxed mt-5">
            CS graduate in Intelligent Information Systems Engineering (ISII), certified in front-end web development (BrainerX).
            I design and build responsive web apps end-to-end — front-end with React & Tailwind CSS, back-end with Node.js, Express.js and PostgreSQL.
            VELOCE is one of 11 projects I've published, built to showcase a complete, production-style e-commerce flow.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-[#ff4d2e] hover:bg-[#ff4d2e]/80 text-black font-semibold px-6 py-3 rounded-full text-sm transition"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="https://github.com/abdallahkhemnou"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/15 hover:border-white/30 text-white px-6 py-3 rounded-full text-sm transition"
            >
              <Link size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="w-full md:w-72 flex flex-col gap-4 px-5 py-5 border border-white/10 bg-white/5 rounded-2xl shrink-0">
          <p className="text-[#ff4d2e] text-xs font-semibold tracking-widest uppercase">Contact</p>
          <div className="flex items-center gap-3 text-sm">
            <Mail size={16} className="text-[#ff4d2e] shrink-0" />
            <span className="text-white/80 break-all">abdallahkhemnou@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone size={16} className="text-[#ff4d2e] shrink-0" />
            <span className="text-white/80">0557 58 96 95</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link size={16} className="text-[#ff4d2e] shrink-0" />
            <span className="text-white/80">github.com/abdallahkhemnou</span>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="px-6 md:px-16 py-14">
        <h2 className="text-2xl font-bold text-white mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4 px-5 py-5 border border-white/10 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-2">
                {category === "Front-end" && <Code2 size={16} className="text-[#ff4d2e]" />}
                {category === "Back-end" && <Code2 size={16} className="text-[#ff4d2e]" />}
                {category === "Database" && <Database size={16} className="text-[#ff4d2e]" />}
                {category === "Tools" && <Wrench size={16} className="text-[#ff4d2e]" />}
                <p className="text-white font-semibold text-sm">{category}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="px-6 md:px-16 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col gap-2 px-5 py-5 border border-white/10 bg-white/5 rounded-2xl hover:border-[#ff4d2e]/30 transition">
              <p className="text-white font-semibold text-sm">{p.title}</p>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/abdallahkhemnou"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-7 text-[#ff4d2e] text-sm font-medium hover:underline"
        >
          See all 11 projects on GitHub →
        </a>
      </div>

      <Footer />
    </>
  );
}

export default About;