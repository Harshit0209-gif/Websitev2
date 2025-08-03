"use client"

import { ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import "./hero-section.css"
import Link from "next/link" // Import Link

export function HeroSection() {
  const badge = useScrollAnimation(0.1, 0)
  const title = useScrollAnimation(0.1, 200)
  const description = useScrollAnimation(0.1, 400)
  const highlights = useScrollAnimation(0.1, 600)
  const buttons = useScrollAnimation(0.1, 800)
  const image = useScrollAnimation(0.1, 300)
  const floatingCard1 = useScrollAnimation(0.1, 1000)
  const floatingCard2 = useScrollAnimation(0.1, 1200)

  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg-grid"></div>
      <div className="hero-bg-circle hero-bg-circle-1"></div>
      <div className="hero-bg-circle hero-bg-circle-2"></div>

      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-left">
            <div className="hero-text">
              <div
                ref={badge.ref}
                className={`hero-badge animate-on-scroll ${badge.isVisible ? "animate-fade-scale" : ""}`}
              >
                <Sparkles size={16} />
                <span>Innovation Meets Excellence</span>
              </div>

              <h1
                ref={title.ref}
                className={`hero-title animate-on-scroll ${title.isVisible ? "animate-fade-up" : ""}`}
              >
                Transform Your
                <span className="hero-title-gradient"> Digital Future</span>
              </h1>

              <p
                ref={description.ref}
                className={`hero-description animate-on-scroll ${description.isVisible ? "animate-fade-up" : ""}`}
              >
                We deliver cutting-edge technology solutions that drive growth, enhance efficiency, and create
                exceptional user experiences. From web development to AI integration, we're your trusted partner in
                digital transformation.
              </p>
            </div>

            {/* Service Highlights */}
            <div
              ref={highlights.ref}
              className={`hero-highlights animate-on-scroll ${highlights.isVisible ? "animate-fade-left" : ""}`}
            >
              <div className="hero-highlight">
                <div className="hero-highlight-icon hero-highlight-icon-purple">
                  <Zap size={16} />
                </div>
                <span>Custom Software Development</span>
              </div>
              <div className="hero-highlight">
                <div className="hero-highlight-icon hero-highlight-icon-pink">
                  <Target size={16} />
                </div>
                <span>AI & Machine Learning</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              ref={buttons.ref}
              className={`hero-buttons animate-on-scroll ${buttons.isVisible ? "animate-fade-up" : ""}`}
            >
              <Link href="/#contact" className="btn btn-primary">
                {" "}
                {/* Updated Link */}
                Get Started
                <ArrowRight size={16} style={{ marginLeft: "8px" }} />
              </Link>
              <Link href="/#projects" className="btn btn-outline">
                {" "}
                {/* Updated Link */}
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hero-right">
            <div
              ref={image.ref}
              className={`hero-image animate-on-scroll ${image.isVisible ? "animate-fade-scale" : ""}`}
            >
              <img src="/hero.jpeg" alt="Modern Technology Workspace" />
              <div className="hero-image-overlay"></div>
            </div>

            {/* Floating Cards */}
            <div
              ref={floatingCard1.ref}
              className={`hero-floating-card hero-floating-card-1 animate-on-scroll ${
                floatingCard1.isVisible ? "animate-fade-scale" : ""
              }`}
            >
              <div className="hero-floating-content">
                <div className="hero-status-dot"></div>
                <span>99.9% Uptime</span>
              </div>
            </div>

            <div
              ref={floatingCard2.ref}
              className={`hero-floating-card hero-floating-card-2 animate-on-scroll ${
                floatingCard2.isVisible ? "animate-fade-scale" : ""
              }`}
            >
              <div className="hero-floating-content">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
