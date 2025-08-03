"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import "./footer.css"

export function Footer() {
  const logo = useScrollAnimation(0.1, 0)
  const description = useScrollAnimation(0.1, 200)
  const contactTitle = useScrollAnimation(0.1, 400)
  const contactItems = useScrollAnimation(0.1, 600)
  const quickLinksTitle = useScrollAnimation(0.1, 800)
  const quickLinks = useScrollAnimation(0.1, 1000)
  const copyright = useScrollAnimation(0.1, 1200)

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container-wide">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-company">
              <div
                ref={logo.ref}
                className={`footer-logo animate-on-scroll ${logo.isVisible ? "animate-fade-up" : ""}`}
              >
                <div className="footer-logo-icon">
              <img src="/favicon.png" alt="GoLicit Logo" className="logo-image" />
                </div>
                <span className="footer-logo-text">GoLicit Services</span>
              </div>

              <p
                ref={description.ref}
                className={`footer-description animate-on-scroll ${description.isVisible ? "animate-fade-up" : ""}`}
              >
                Transforming Operations with Intelligent Cloud Solutions. Delivering advanced Learning Management
                Systems, Hospital & Diagnostic Center Management, and Lawyer Management Platforms — all powered by our
                scalable SaaS and PaaS-based cloud architecture. Empowering institutions with streamlined, secure, and
                future-ready ERP solutions.
              </p>
            </div>

            {/* Contact & Quick Links Container */}
            <div className="footer-links-container">
              {/* Contact Information */}
              <div className="footer-contact">
                <h3
                  ref={contactTitle.ref}
                  className={`footer-section-title animate-on-scroll ${contactTitle.isVisible ? "animate-fade-up" : ""}`}
                >
                  Contact
                </h3>
                <div
                  ref={contactItems.ref}
                  className={`footer-contact-items animate-on-scroll ${contactItems.isVisible ? "animate-fade-up" : ""}`}
                >
                  <div className="footer-contact-item">
                    <Mail size={20} />
                    <a href="mailto:support@golicit.in">support@golicit.in</a>
                  </div>

                  <div className="footer-contact-item">
                    <Phone size={20} />
                    <a href="tel:6289203262">6289203262</a>
                  </div>

                  <div className="footer-contact-item">
                    <MapPin size={20} />
                    <div className="footer-address">
                      <p>256, West Ghosh Para Road</p>
                      <p>Shyamnagar</p>
                      <p>West Bengal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-quick-links">
                <h3
                  ref={quickLinksTitle.ref}
                  className={`footer-section-title animate-on-scroll ${
                    quickLinksTitle.isVisible ? "animate-fade-up" : ""
                  }`}
                >
                  Quick Links
                </h3>
                <div
                  ref={quickLinks.ref}
                  className={`footer-links animate-on-scroll ${quickLinks.isVisible ? "animate-fade-up" : ""}`}
                >
                  <Link href="/about">About Us</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/careers">Careers</Link>
                  <Link href="/privacy">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="container-wide">
          <div
            ref={copyright.ref}
            className={`footer-copyright-content animate-on-scroll ${copyright.isVisible ? "animate-fade-up" : ""}`}
          >
            <p className="footer-copyright-text">© {new Date().getFullYear()} Golicit. All rights reserved.</p>
            <div className="footer-copyright-links">
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
