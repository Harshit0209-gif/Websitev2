"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import "./project-navbar.css"

export function ProjectNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <nav className="project-navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <div className="logo-icon">
              <img src="/favicon.png" alt="GoLicit Logo" className="logo-image" />
            </div>
            <span className="company-name">GoLicit Services</span>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="navbar-link">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-toggle">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
