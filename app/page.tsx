import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Hobbies from "@/components/hobbies"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import LoadingScreen from "@/components/loading-screen"
import { DynamicComponents } from "@/components/client-components"

// Add structured data for SEO
export const generateMetadata = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vikhyat Agrawal",
    url: "https://vikhyat-agrawal.vercel.app",
    jobTitle: "Web Developer & AI Enthusiast",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description: "Web Developer, AI Enthusiast, and Problem Solver based in Jaipur, India",
    sameAs: ["https://github.com/", "https://linkedin.com/", "https://t.me/"],
    knowsAbout: ["Web Development", "AI", "Machine Learning", "React", "Next.js", "Python"],
  }

  return {
    other: {
      "script:ld+json": JSON.stringify(structuredData),
    },
  }
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b0f1a] text-white overflow-hidden">
      <LoadingScreen />
      <DynamicComponents />
      <div className="container mx-auto px-4 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  )
}
