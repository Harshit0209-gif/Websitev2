"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, GraduationCap, Heart, Scale, Code, Smartphone, Cloud } from "lucide-react"
import { useScrollAnimation, useMultipleScrollAnimations } from "@/hooks/use-scroll-animation"
import "./services-section.css"
import Link from "next/link" // Import Link

const projects = [
  {
    id: "school-management-system",
    title: "School Management System",
    description:
      "Complete educational institution management platform with student enrollment, attendance tracking, grade management, and parent communication portal.",
    icon: GraduationCap,
    image: "/placeholder.svg?height=300&width=500&text=School+Management+Dashboard",
    technologies: ["Next.js", "MongoDB", "Figma", "Node.js", "Tailwind CSS"],
    category: "Education Technology",
    status: "Live Project",
    color: "blue-cyan",
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    description:
      "Comprehensive healthcare management solution with patient records, appointment scheduling, billing, and medical inventory management.",
    icon: Heart,
    image: "/placeholder.svg?height=300&width=500&text=Hospital+Management+Dashboard",
    technologies: ["React", "PostgreSQL", "Express.js", "Socket.io", "Material-UI"],
    category: "Healthcare Technology",
    status: "Live Project",
    color: "green-emerald",
  },
  {
    id: "legal-sector-solution",
    title: "Legal Sector Solution",
    description:
      "Advanced case management system for law firms with client management, document handling, court scheduling, and billing automation.",
    icon: Scale,
    image: "/placeholder.svg?height=300&width=500&text=Legal+Management+Dashboard",
    technologies: ["Vue.js", "MySQL", "Laravel", "PDF.js", "Bootstrap"],
    category: "Legal Technology",
    status: "Live Project",
    color: "purple-violet",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Tailored enterprise solutions including CRM systems, inventory management, and workflow automation tools for various industries.",
    icon: Code,
    image: "/placeholder.svg?height=300&width=500&text=Custom+Software+Solutions",
    technologies: ["React", "Python", "Django", "Redis", "Docker"],
    category: "Enterprise Solutions",
    status: "Multiple Projects",
    color: "orange-red",
  },
  {
    id: "web-mobile-development",
    title: "Web & Mobile App Development",
    description:
      "Cross-platform applications with responsive web interfaces and native mobile experiences for iOS and Android platforms.",
    icon: Smartphone,
    image: "/placeholder.svg?height=300&width=500&text=Mobile+App+Development",
    technologies: ["React Native", "Flutter", "Firebase", "TypeScript", "Expo"],
    category: "Mobile & Web Development",
    status: "Ongoing Projects",
    color: "red-pink",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, microservices architecture, and DevOps solutions with automated deployment and monitoring.",
    icon: Cloud,
    image: "/placeholder.svg?height=300&width=500&text=Cloud+Infrastructure",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    category: "Cloud & DevOps",
    status: "Infrastructure Services",
    color: "pink-rose",
  },
]

export function ServicesSection() {
  const router = useRouter()
  const sectionTitle = useScrollAnimation(0.1, 0)
  const sectionDescription = useScrollAnimation(0.1, 200)
  const { setRef: setCardRef, visibleItems: visibleCards } = useMultipleScrollAnimations(projects.length, 400, 150)

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`)
  }

  return (
    <section id="projects" className="services-section">
      {" "}
      {/* Added ID */}
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <h2
            ref={sectionTitle.ref}
            className={`services-title animate-on-scroll ${sectionTitle.isVisible ? "animate-fade-up" : ""}`}
          >
            Our Project Portfolio
          </h2>
          <p
            ref={sectionDescription.ref}
            className={`services-description animate-on-scroll ${
              sectionDescription.isVisible ? "animate-fade-up" : ""
            }`}
          >
            Explore our successful projects and see how we've transformed businesses across different industries with
            cutting-edge technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="services-grid">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                ref={setCardRef(index)}
                onClick={() => handleProjectClick(project.id)}
                className={`service-card animate-on-scroll ${visibleCards[index] ? "animate-fade-scale" : ""}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Status Badge */}
                <div className="project-status-badge">
                  <span className="status-dot"></span>
                  {project.status}
                </div>

                {/* Image Section */}
                <div className="service-card-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className={`service-card-overlay gradient-${project.color}`}></div>
                  <div className="service-card-icon-wrapper">
                    <div className={`service-card-icon gradient-${project.color}`}>
                      <IconComponent size={24} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="service-card-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="service-card-title">{project.title}</h3>
                  <p className="service-card-description">{project.description}</p>

                  {/* Technologies Used */}
                  <div className="project-technologies">
                    <h4 className="tech-title">Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-tag tech-tag-more">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="service-card-link">
                    <span>View Project Details</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <div className="services-cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how we can build a custom solution for your business needs.</p>
            <Link href="/#contact" className="btn btn-primary">
              {" "}
              {/* Updated Link */}
              Get Started Today
              <ArrowRight size={20} style={{ marginLeft: "8px" }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
