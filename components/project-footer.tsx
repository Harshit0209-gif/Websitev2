"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import "./project-footer.css"

export function ProjectFooter() {
  return (
    <footer className="project-footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <div className="footer-logo-icon">
              <img src="/favicon.png" alt="GoLicit Logo" className="logo-image" />
              </div>
              <span className="footer-logo-text">GoLicit Services</span>
            </div>
            <p className="footer-description">
              Transforming businesses with innovative technology solutions. We specialize in custom software
              development, web applications, and digital transformation services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <div className="links-list">
              <Link href="/">Home</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#about">About</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <div className="contact-list">
              <div className="contact-item">
                <Mail size={20} />
                <a href="mailto:support@golicit.in">support@golicit.in</a>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <a href="tel:6289203262">6289203262</a>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <div className="address">
                  <p>256, West Ghosh Para Road</p>
                  <p>Shyamnagar, West Bengal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GoLicit Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
