import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Intro from './components/sections/Intro';
import Welcome from './components/sections/Welcome';
import ProjectKeurMassar from './components/sections/ProjectKeurMassar';
import ProjectTouba from './components/sections/ProjectTouba';
import ProjectMboro from './components/sections/ProjectMboro';
import Modelling from './components/sections/Modelling';
import Plans2D from './components/sections/Plans2D';
import Contact from './components/sections/Contact';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.slide-section');

    // Vertical scroll snapping and animations
    sections.forEach((section: any) => {
      gsap.fromTo(
        section.querySelectorAll('.reveal-content'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Handle smooth scrolling for the whole page if desired
    // For now, let's keep it simple with standard scroll but snapped sections
  }, []);

  const scrollTo = (id: string) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: `#${id}`,
      ease: 'power4.inOut',
    });
  };

  return (
    <div ref={containerRef} className="bg-background min-h-screen">
      {/* Navigation Overlay */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex gap-6 px-8 py-3 bg-accent/5 backdrop-blur-md border border-accent/20 rounded-full">
        {[
          { label: 'Intro', id: 'intro' },
          { label: 'Projets', id: 'keur-massar' },
          { label: 'Technique', id: 'modelling' },
          { label: 'Contact', id: 'contact' },
        ].map((item) => (
          <button
            key={item.id}
            className="nav-link font-syne text-[10px] tracking-[0.2em] uppercase"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div id="intro" className="slide-section">
        <Intro />
      </div>

      <div id="welcome" className="slide-section">
        <Welcome />
      </div>

      <div id="keur-massar" className="slide-section">
        <ProjectKeurMassar />
      </div>

      <div id="touba" className="slide-section">
        <ProjectTouba />
      </div>

      <div id="mboro" className="slide-section">
        <ProjectMboro />
      </div>

      <div id="modelling" className="slide-section">
        <Modelling />
      </div>

      <div id="plans" className="slide-section border-t border-accent/5">
        <Plans2D />
      </div>

      <div id="contact" className="slide-section">
        <Contact />
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/0 via-accent to-accent/0" />
      </div>
    </div>
  );
}

export default App;
