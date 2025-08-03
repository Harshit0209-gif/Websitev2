import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const serviceDetails = {
  "web-development": {
    title: "Web Development",
    subtitle: "Custom Web Applications & Websites",
    description:
      "We create modern, responsive, and high-performance web applications using the latest technologies and best practices.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Responsive Design",
      "Modern Frameworks",
      "SEO Optimization",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "Progressive Web Apps",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-featured online store with payment integration",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Corporate Website",
        description: "Professional business website with CMS",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "SaaS Dashboard",
        description: "Analytics dashboard for SaaS application",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile Applications",
    subtitle: "iOS & Android App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Native iOS & Android",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    projects: [
      {
        name: "Fitness Tracking App",
        description: "Health and fitness tracking with social features",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Food Delivery App",
        description: "On-demand food delivery platform",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Banking App",
        description: "Secure mobile banking application",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    subtitle: "Scalable Cloud Infrastructure",
    description:
      "Comprehensive cloud services that provide scalability, reliability, and cost-effectiveness for your business operations.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Cloud Migration",
      "Auto Scaling",
      "Load Balancing",
      "Disaster Recovery",
      "Cost Optimization",
      "24/7 Monitoring",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    projects: [
      {
        name: "Enterprise Migration",
        description: "Complete cloud migration for enterprise client",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Microservices Architecture",
        description: "Scalable microservices deployment",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Data Lake Solution",
        description: "Big data processing and analytics platform",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation Solutions",
    description:
      "Advanced AI and machine learning solutions that automate processes, provide insights, and enhance decision-making.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Automated Decision Making",
      "Custom AI Models",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    projects: [
      {
        name: "Chatbot Assistant",
        description: "AI-powered customer service chatbot",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Image Recognition System",
        description: "Computer vision for quality control",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Predictive Maintenance",
        description: "IoT-based predictive maintenance solution",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    subtitle: "Comprehensive Security Solutions",
    description:
      "Robust cybersecurity measures to protect your digital assets and ensure compliance with industry regulations.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Threat Detection",
      "Vulnerability Assessment",
      "Security Audits",
      "Compliance Management",
      "Incident Response",
      "Security Training",
    ],
    technologies: ["SIEM", "Firewall", "Encryption", "Multi-factor Auth", "Zero Trust"],
    projects: [
      {
        name: "Security Operations Center",
        description: "24/7 security monitoring and response",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Compliance Framework",
        description: "GDPR and SOC2 compliance implementation",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Penetration Testing",
        description: "Comprehensive security assessment",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "User-Centered Design Solutions",
    description: "Beautiful, intuitive, and user-friendly designs that enhance user experience and drive engagement.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems",
      "Accessibility Compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    projects: [
      {
        name: "Mobile App Redesign",
        description: "Complete UX overhaul for mobile application",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Design System",
        description: "Comprehensive design system for enterprise",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "E-commerce UX",
        description: "User experience optimization for online store",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = serviceDetails[params.id as keyof typeof serviceDetails]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-purple-100 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-purple-100 mb-6">{service.subtitle}</p>
              <p className="text-lg leading-relaxed">{service.description}</p>
            </div>
            <div className="relative">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features & Technologies */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recent Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-[0_20px_50px_rgba(215,174,239,0.4)] transition-all duration-300"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex items-center mt-4 text-purple-600">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Featured Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
