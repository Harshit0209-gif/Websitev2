"use client"

import { Search, FileText, Code2, TestTube, Rocket } from "lucide-react"
import { useScrollAnimation, useMultipleScrollAnimations } from "@/hooks/use-scroll-animation"
import "./development-process-section.css" // Import the new CSS file

const processSteps = [
  {
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a comprehensive project roadmap.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Documentation",
    description: "Preparation of technical and functional specifications for transparency and planning.",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Development",
    description: "Our expert team builds your solution using cutting-edge technologies.",
    icon: Code2,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing ensures high quality and reliable performance.",
    icon: TestTube,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Deployment & Support",
    description: "We handle deployment and provide ongoing maintenance and support.",
    icon: Rocket,
    color: "from-red-500 to-pink-500",
  },
]

// Helper function to map color strings to actual CSS gradient classes
const getColorGradientClass = (colorString: string) => {
  switch (colorString) {
    case "from-blue-500 to-cyan-500":
      return "gradient-blue-cyan"
    case "from-green-500 to-emerald-500":
      return "gradient-green-emerald"
    case "from-purple-500 to-violet-500":
      return "gradient-purple-violet"
    case "from-orange-500 to-red-500":
      return "gradient-orange-red"
    case "from-red-500 to-pink-500":
      return "gradient-pink-rose"
    default:
      return "gradient-purple-pink" // Default to the main theme gradient
  }
}

export function DevelopmentProcessSection() {
  const sectionTitle = useScrollAnimation(0.1, 0)
  const sectionDescription = useScrollAnimation(0.1, 200)
  const { setRef: setStepRef, visibleItems: visibleSteps } = useMultipleScrollAnimations(processSteps.length, 400, 300)
  const bottomCTA = useScrollAnimation(0.1, 2000)

  return (
    <section className="development-process-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 ref={sectionTitle.ref} className={`animate-on-scroll ${sectionTitle.isVisible ? "animate-fade-up" : ""}`}>
            Our Development Process
          </h2>
          <p
            ref={sectionDescription.ref}
            className={`animate-on-scroll ${sectionDescription.isVisible ? "animate-fade-up" : ""}`}
          >
            A streamlined approach to delivering exceptional results
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-steps-container">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0 // 0, 2, 4... are even (left side in default flex-row)
            const gradientClass = getColorGradientClass(step.color)

            return (
              <div
                key={index}
                ref={setStepRef(index)}
                className={`process-step-item animate-on-scroll ${isEven ? "" : "reverse"} ${visibleSteps[index] ? "is-visible" : ""}`}
              >
                {/* Content Card */}
                <div className="process-card-wrapper">
                  <div className="process-card-header">
                    <div className="process-step-number">{index + 1}</div>
                    <h3 className="process-card-title">{step.title}</h3>
                  </div>
                  <p className="process-card-description">{step.description}</p>
                </div>

                {/* Icon Circle */}
                <div className={`process-icon-circle ${gradientClass}`}>
                  <IconComponent size={40} />
                </div>

                {/* Spacer for alignment - only needed for desktop layout */}
                <div className="process-spacer"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="process-bottom-cta">
          <div
            ref={bottomCTA.ref}
            className={`process-cta-content animate-on-scroll ${bottomCTA.isVisible ? "animate-fade-scale" : ""}`}
          >
            <span>Ready to start your project journey?</span>
          </div>
        </div>
      </div>
    </section>
  )
}
