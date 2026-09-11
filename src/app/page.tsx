import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { ExperienceEducation } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal threshold={0.1}>
        <TechMarquee />
      </Reveal>

      <Reveal threshold={0.1} delay={50}>
        <About />
      </Reveal>

      <Reveal threshold={0.08} delay={50}>
        <Skills />
      </Reveal>

      <Reveal threshold={0.06} delay={50}>
        <Projects />
      </Reveal>

      <Reveal threshold={0.08} delay={50}>
        <ExperienceEducation />
      </Reveal>

      <Reveal threshold={0.08} delay={50}>
        <Contact />
      </Reveal>
    </>
  );
}
