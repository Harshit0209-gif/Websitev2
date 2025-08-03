"use client"

import { Code, Server, Cloud, Zap } from "lucide-react"
import { useScrollAnimation, useMultipleScrollAnimations } from "@/hooks/use-scroll-animation"
import "./tech-stack-section.css"

const techStacks = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "blue-cyan",
    technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "green-emerald",
    technologies: ["Node.js", "Python", "Java", "Go", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    color: "purple-violet",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Serverless"],
  },
  {
    title: "Emerging Tech",
    icon: Zap,
    color: "orange-red",
    technologies: ["AI/ML", "Blockchain", "IoT", "Edge Computing", "Big Data", "AR/VR"],
  },
]

export function TechStackSection() {
  const sectionTitle = useScrollAnimation(0.1, 0)
  const sectionDescription = useScrollAnimation(0.1, 200)
  const { setRef: setCardRef, visibleItems: visibleCards } = useMultipleScrollAnimations(techStacks.length, 400, 200)
  const bottomCTA = useScrollAnimation(0.1, 1000)

  return (
    <section className="tech-stack-section">
      <div className="container">
        {/* Section Header */}
        <div className="tech-stack-header">
          <h2
            ref={sectionTitle.ref}
            className={`tech-stack-title animate-on-scroll ${sectionTitle.isVisible ? "animate-fade-up" : ""}`}
          >
            Our Technology Stack
          </h2>
          <p
            ref={sectionDescription.ref}
            className={`tech-stack-description animate-on-scroll ${
              sectionDescription.isVisible ? "animate-fade-up" : ""
            }`}
          >
            We leverage cutting-edge technologies and industry best practices to deliver robust, scalable, and
            future-ready solutions.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="tech-stack-grid">
          {techStacks.map((stack, index) => {
            const IconComponent = stack.icon
            return (
              <div
                key={index}
                ref={setCardRef(index)}
                className={`tech-stack-card animate-on-scroll ${visibleCards[index] ? "animate-fade-scale" : ""}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icon and Title */}
                <div className="tech-stack-header-content">
                  <div className={`tech-stack-icon gradient-${stack.color}`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="tech-stack-card-title">{stack.title}</h3>
                </div>

                {/* Technologies List */}
                <div className="tech-stack-list">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-stack-item">
                      <div className={`tech-stack-dot gradient-${stack.color}`}></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="tech-stack-cta">
          <div
            ref={bottomCTA.ref}
            className={`tech-stack-cta-content animate-on-scroll ${bottomCTA.isVisible ? "animate-fade-scale" : ""}`}
          >
            <span>Ready to build something amazing together?</span>
          </div>
        </div>
      </div>
    </section>
  )
}
