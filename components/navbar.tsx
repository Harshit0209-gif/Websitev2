"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import "./navbar.css"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ["Services", "Industries", "Careers", "About", "Contact"]

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo and Company Name */}
          <div className="navbar-logo">
            <div className="logo-icon">
              <img src="/favicon.png" alt="GoLicit Logo" className="logo-image" />
            </div>
            <span className="company-name">GoLicit Services</span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {menuItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="navbar-link">
                {item}
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
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
