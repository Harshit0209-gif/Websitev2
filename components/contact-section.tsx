"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import "./contact-section.css"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const sectionTitle = useScrollAnimation(0.1, 0)
  const sectionDescription = useScrollAnimation(0.1, 200)
  const leftTitle = useScrollAnimation(0.1, 400)
  const leftDescription = useScrollAnimation(0.1, 600)
  const contactEmail = useScrollAnimation(0.1, 800)
  const contactPhone = useScrollAnimation(0.1, 1000)
  const contactAddress = useScrollAnimation(0.1, 1200)
  const contactForm = useScrollAnimation(0.1, 600)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitStatus("success")
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      {" "}
      {/* Added ID */}
      <div className="container-wide">
        {/* Section Header */}
        <div className="contact-header">
          <h2
            ref={sectionTitle.ref}
            className={`contact-title animate-on-scroll ${sectionTitle.isVisible ? "animate-fade-up" : ""}`}
          >
            Get In Touch
          </h2>
          <p
            ref={sectionDescription.ref}
            className={`contact-description animate-on-scroll ${sectionDescription.isVisible ? "animate-fade-up" : ""}`}
          >
            Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you
            achieve your goals.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div>
              <h3
                ref={leftTitle.ref}
                className={`contact-info-title animate-on-scroll ${leftTitle.isVisible ? "animate-fade-left" : ""}`}
              >
                Let's Start a Conversation
              </h3>
              <p
                ref={leftDescription.ref}
                className={`contact-info-description animate-on-scroll ${
                  leftDescription.isVisible ? "animate-fade-left" : ""
                }`}
              >
                We're here to help you bring your vision to life. Whether you have a specific project in mind or just
                want to explore possibilities, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <div
                ref={contactEmail.ref}
                className={`contact-detail animate-on-scroll ${contactEmail.isVisible ? "animate-fade-left" : ""}`}
              >
                <div className="contact-detail-icon contact-detail-icon-purple">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="contact-detail-title">Email Us</h4>
                  <p className="contact-detail-text">hello@golicit.com</p>
                </div>
              </div>

              <div
                ref={contactPhone.ref}
                className={`contact-detail animate-on-scroll ${contactPhone.isVisible ? "animate-fade-left" : ""}`}
              >
                <div className="contact-detail-icon contact-detail-icon-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="contact-detail-title">Call Us</h4>
                  <p className="contact-detail-text">6289203262</p> {/* Updated Phone Number */}
                </div>
              </div>

              <div
                ref={contactAddress.ref}
                className={`contact-detail animate-on-scroll ${contactAddress.isVisible ? "animate-fade-left" : ""}`}
              >
                <div className="contact-detail-icon contact-detail-icon-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="contact-detail-title">Visit Us</h4>
                  <div className="contact-detail-text">
                    <p>256, West Ghosh Para Road</p> {/* Updated Address */}
                    <p>Shyamnagar</p>
                    <p>West Bengal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={contactForm.ref}
            className={`contact-form-container animate-on-scroll ${contactForm.isVisible ? "animate-fade-right" : ""}`}
          >
            <form id="contact-form" action={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="form-submit-btn">
                {isSubmitting ? (
                  <div className="form-submit-loading">
                    <div className="loading-spinner"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="form-submit-content">
                    <Send size={20} />
                    Send Message
                  </div>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="form-message form-message-success">
                  <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="form-message form-message-error">
                  <p>Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
