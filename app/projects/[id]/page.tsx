"use client"

import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle, Star, Clock, Users, Code, Target, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProjectNavbar } from "@/components/project-navbar"
import { ProjectFooter } from "@/components/project-footer"
import "./project-detail.css"
import { useState, useEffect } from "react"

const projectDetails = {
  "school-management-system": {
    title: "School Management System",
    subtitle: "Complete Educational Institution Management Platform",
    description:
      "A comprehensive school management system designed to streamline educational operations, enhance communication between stakeholders, and improve overall institutional efficiency. This platform serves as a centralized hub for managing all aspects of educational institutions.",
    image: "/placeholder.svg?height=500&width=800&text=School+Management+Dashboard",
    category: "Education Technology",
    status: "Live Project",
    duration: "6 months",
    teamSize: "5 developers",
    client: "Greenwood High School",
    technologies: ["Next.js", "MongoDB", "Figma", "Node.js", "Tailwind CSS", "Socket.io", "JWT", "Stripe API"],
    features: [
      {
        title: "Student Enrollment & Profile Management",
        description:
          "Complete student information system with enrollment tracking, academic history, and personal details management.",
        image: "/placeholder.svg?height=300&width=500&text=Student+Profile+Management",
      },
      {
        title: "Attendance Tracking System",
        description:
          "Digital attendance management with real-time tracking, automated reports, and parent notifications.",
        image: "/placeholder.svg?height=300&width=500&text=Attendance+Tracking",
      },
      {
        title: "Grade & Report Card Management",
        description: "Comprehensive grading system with automated report card generation and progress tracking.",
        image: "/placeholder.svg?height=300&width=500&text=Grade+Management",
      },
      {
        title: "Parent-Teacher Communication Portal",
        description:
          "Integrated messaging system enabling seamless communication between parents, teachers, and administrators.",
        image: "/placeholder.svg?height=300&width=500&text=Communication+Portal",
      },
      {
        title: "Fee Management & Payment Gateway",
        description: "Complete fee management system with online payment integration and automated billing.",
        image: "/placeholder.svg?height=300&width=500&text=Fee+Management",
      },
      {
        title: "Timetable & Schedule Management",
        description: "Dynamic timetable creation and management with conflict detection and resource allocation.",
        image: "/placeholder.svg?height=300&width=500&text=Timetable+Management",
      },
    ],
    testimonials: [
      {
        text: "The school management system has revolutionized our operations. We've seen a 40% improvement in administrative efficiency and parents love the real-time updates. The system is intuitive and has significantly reduced our paperwork.",
        author: "Dr. Sarah Johnson",
        position: "Principal, Greenwood High School",
        rating: 5,
      },
      {
        text: "This platform has made communication between teachers and parents seamless. The automated report generation saves us hours of work every week. Highly recommended!",
        author: "Michael Thompson",
        position: "IT Administrator, Greenwood High School",
        rating: 5,
      },
      {
        text: "As a parent, I love being able to track my child's progress in real-time. The mobile app is user-friendly and keeps me informed about everything happening at school.",
        author: "Jennifer Davis",
        position: "Parent",
        rating: 5,
      },
    ],
  },
  "hospital-management-system": {
    title: "Hospital Management System",
    subtitle: "Comprehensive Healthcare Management Solution",
    description:
      "An integrated hospital management system that streamlines patient care, optimizes resource allocation, and enhances operational efficiency across all departments. Built with healthcare professionals in mind.",
    image: "/placeholder.svg?height=500&width=800&text=Hospital+Management+Dashboard",
    category: "Healthcare Technology",
    status: "Live Project",
    duration: "8 months",
    teamSize: "7 developers",
    client: "City General Hospital",
    technologies: ["React", "PostgreSQL", "Express.js", "Socket.io", "Material-UI", "Redis", "Docker", "AWS"],
    features: [
      {
        title: "Patient Registration & Medical Records",
        description: "Comprehensive patient information system with medical history, allergies, and treatment records.",
        image: "/placeholder.svg?height=300&width=500&text=Patient+Records",
      },
      {
        title: "Appointment Scheduling System",
        description: "Advanced scheduling with doctor availability, patient preferences, and automated reminders.",
        image: "/placeholder.svg?height=300&width=500&text=Appointment+Scheduling",
      },
      {
        title: "Electronic Health Records (EHR)",
        description: "Digital health records with secure access, sharing capabilities, and compliance features.",
        image: "/placeholder.svg?height=300&width=500&text=Electronic+Health+Records",
      },
      {
        title: "Billing & Insurance Management",
        description: "Automated billing system with insurance claim processing and payment tracking.",
        image: "/placeholder.svg?height=300&width=500&text=Billing+Management",
      },
    ],
    testimonials: [
      {
        text: "This system has transformed our hospital operations. Patient wait times reduced by 35% and our staff efficiency has improved significantly. The integration with our existing systems was seamless.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, City General Hospital",
        rating: 5,
      },
      {
        text: "The automated billing and insurance processing has saved us countless hours. The system is reliable and our staff loves how intuitive it is to use.",
        author: "Sarah Williams",
        position: "Hospital Administrator, City General Hospital",
        rating: 5,
      },
      {
        text: "As a nurse, I appreciate how easy it is to access patient records and update information in real-time. It has made our workflow much more efficient.",
        author: "Maria Rodriguez",
        position: "Head Nurse, City General Hospital",
        rating: 5,
      },
    ],
  },
  "legal-sector-solution": {
    title: "Legal Sector Solution",
    subtitle: "Advanced Case Management System",
    description: "Comprehensive legal practice management software designed for law firms and legal professionals.",
    image: "/placeholder.svg?height=500&width=800&text=Legal+Management+System",
    category: "Legal Technology",
    status: "Live Project",
    duration: "7 months",
    teamSize: "6 developers",
    client: "Johnson & Associates Law Firm",
    technologies: ["Vue.js", "MySQL", "Laravel", "PDF.js", "Bootstrap", "Elasticsearch"],
    features: [
      {
        title: "Case Management System",
        description: "Complete case tracking with deadlines, documents, and client communication history.",
        image: "/placeholder.svg?height=300&width=500&text=Case+Management",
      },
      {
        title: "Document Management",
        description: "Secure document storage and sharing with version control and access permissions.",
        image: "/placeholder.svg?height=300&width=500&text=Document+Management",
      },
      {
        title: "Client Portal",
        description: "Dedicated client portal for case updates, document sharing, and communication.",
        image: "/placeholder.svg?height=300&width=500&text=Client+Portal",
      },
      {
        title: "Billing & Time Tracking",
        description: "Automated time tracking and billing system with detailed reporting capabilities.",
        image: "/placeholder.svg?height=300&width=500&text=Billing+System",
      },
    ],
    testimonials: [
      {
        text: "Our legal practice has become much more organized and efficient with this system. Case management is now streamlined and our clients are happier with the transparency.",
        author: "John Johnson",
        position: "Senior Partner, Johnson & Associates",
        rating: 5,
      },
      {
        text: "The document management feature has been a game-changer. We can now easily track all case documents and share them securely with clients.",
        author: "Emily Carter",
        position: "Associate Lawyer, Johnson & Associates",
        rating: 5,
      },
    ],
  },
}

const relatedProjects = [
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    category: "Healthcare Technology",
    image: "/placeholder.svg?height=200&width=300&text=Hospital+System",
    description: "Comprehensive healthcare management solution for hospitals and clinics.",
  },
  {
    id: "legal-sector-solution",
    title: "Legal Sector Solution",
    category: "Legal Technology",
    image: "/placeholder.svg?height=200&width=300&text=Legal+System",
    description: "Advanced case management system for law firms and legal professionals.",
  },
  {
    id: "school-management-system",
    title: "School Management System",
    category: "Education Technology",
    image: "/placeholder.svg?height=200&width=300&text=School+System",
    description: "Complete educational institution management platform.",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id as keyof typeof projectDetails]

  if (!project) {
    notFound()
  }

  const otherProjects = relatedProjects.filter((p) => p.id !== params.id)

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Ensure testimonials exist and have length
  const testimonials = project.testimonials || []

  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [testimonials.length])

  const nextTestimonial = () => {
    if (testimonials.length > 1) {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (testimonials.length > 1) {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  // If no testimonials, don't render the section
  if (testimonials.length === 0) {
    return <div>No testimonials available</div>
  }

  return (
    <div className="project-detail-page">
      <ProjectNavbar />

      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="back-link">
            <Link href="/" className="back-button">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <div className="project-badges">
                <span className="category-badge">{project.category}</span>
                <span className="status-badge">
                  <div className="status-dot"></div>
                  {project.status}
                </span>
              </div>

              <div className="hero-info">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <div className="section-header">
            <h2>Project Overview</h2>
            <p>Key details and specifications</p>
          </div>

          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">
                <Clock size={32} />
              </div>
              <h3>Duration</h3>
              <p>{project.duration}</p>
            </div>

            <div className="overview-card">
              <div className="overview-icon">
                <Users size={32} />
              </div>
              <h3>Team Size</h3>
              <p>{project.teamSize}</p>
            </div>

            <div className="overview-card">
              <div className="overview-icon">
                <Code size={32} />
              </div>
              <h3>Technologies</h3>
              <p>{project.technologies.length} tools</p>
            </div>

            <div className="overview-card">
              <div className="overview-icon">
                <Target size={32} />
              </div>
              <h3>Client</h3>
              <p>{project.client}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="technologies-section">
        <div className="container">
          <div className="section-header">
            <h2>Technologies Used</h2>
            <p>Cutting-edge tools and frameworks that powered this project</p>
          </div>

          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <div key={index} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Screenshots */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>Detailed look at the core functionalities with visual examples</p>
          </div>

          <div className="features-list">
            {project.features.map((feature, index) => (
              <div key={index} className={`feature-item ${index % 2 === 1 ? "reverse" : ""}`}>
                <div className="feature-content">
                  <div className="feature-header">
                    <CheckCircle size={32} />
                    <h3>{feature.title}</h3>
                  </div>
                  <p>{feature.description}</p>
                </div>

                <div className="feature-image">
                  <div className="image-wrapper">
                    <img src={feature.image || "/placeholder.svg"} alt={feature.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-carousel">
            <div className="testimonial-content">
              <div className="stars">
                {[...Array(testimonials[currentTestimonial]?.rating || 5)].map((_, i) => (
                  <Star key={i} size={24} />
                ))}
              </div>

              <blockquote>"{testimonials[currentTestimonial]?.text}"</blockquote>

              <div className="testimonial-author">
                <p className="author-name">{testimonials[currentTestimonial]?.author}</p>
                <p className="author-position">{testimonials[currentTestimonial]?.position}</p>
              </div>
            </div>

            {/* Carousel Controls - Only show if more than 1 testimonial */}
            {testimonials.length > 1 && (
              <div className="carousel-controls">
                <button onClick={prevTestimonial} className="carousel-btn">
                  <ArrowLeft size={20} />
                </button>
                <div className="carousel-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`carousel-dot ${index === currentTestimonial ? "active" : ""}`}
                    />
                  ))}
                </div>
                <button onClick={nextTestimonial} className="carousel-btn">
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="related-projects">
        <div className="container">
          <div className="section-header">
            <h2>Other Projects</h2>
            <p>Explore more of our successful project implementations</p>
          </div>

          <div className="projects-grid">
            {otherProjects.map((relatedProject) => (
              <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="project-card">
                <div className="project-image">
                  <img src={relatedProject.image || "/placeholder.svg"} alt={relatedProject.title} />
                </div>
                <div className="project-content">
                  <div className="project-category">{relatedProject.category}</div>
                  <h3>{relatedProject.title}</h3>
                  <p>{relatedProject.description}</p>
                  <div className="project-link">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can build a custom solution tailored to your specific needs</p>
            <div className="cta-buttons">
              <Link href="/#contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link href="/#contact" className="btn btn-outline">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectFooter />
    </div>
  )
}
