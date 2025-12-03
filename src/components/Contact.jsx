import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

import profilePic from "/character-gifs/contact.gif";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("🎉 Message sent successfully!", {
            className: "toon-toast-success",
            icon: "🚀",
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
            consent: false,
          });
        },
        () => {
          toast.error("😢 Oops! Message could not be sent.", {
            className: "toon-toast-error",
            icon: "💥",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  /* ==== SVG ICONS ==== */
  const GmailIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 
        22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 
      4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.8v2.1h.1c.5-.9 
      1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.8V24h-4v-8.1c0-1.9 
      0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24h-4V8z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2 
      c-3.2.7-3.87-1.39-3.87-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 
      1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56 
      -2.56-.29-5.26-1.28-5.26-5.72 0-1.27.46-2.31 
      1.21-3.13-.12-.3-.53-1.52.11-3.17 0 0 .99-.32 3.24 
      1.2A11.2 11.2 0 0 1 12 6.16c1 .01 2.01.14 2.95.42 
      2.25-1.52 3.24-1.2 3.24-1.2.64 1.65.23 2.87.11 
      3.17.75.82 1.21 1.86 1.21 3.13 0 4.45-2.7 
      5.43-5.28 5.72.42.36.8 1.1.8 2.22v3.29c0 
      .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
    </svg>
  );

  return (
    <section className="contact-container">
      <div className="contact-hero">
        <div className="contact-left">
          <img src={profilePic} alt="Shaik Sadik friendly animated character" className="contact-img" />
        </div>

        <div className="contact-right">
          <h1 className="contact-title">
            Contact <span className="toon-text">Me</span>
          </h1>
          <p className="contact-intro">
            Let’s connect and bring your ideas to life — the SlayerCore way! ✨
          </p>

          {/* === UPDATED CONTACT ICONS === */}
          <div className="contact-links">
            <a href="mailto:shaiksadik2968@gmail.com" target="_blank">
              <GmailIcon /> Gmail
            </a>

            <a href="https://www.linkedin.com/in/shaik-sadik-b23516328/" target="_blank">
              <LinkedInIcon /> LinkedIn
            </a>

            <a href="https://github.com/sadikshaik01" target="_blank">
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === FORM === */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Send Me a Message 💬</h2>

        <div className="form-grid">
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />

          <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />

          <input type="tel" name="phone" placeholder="Phone (Optional)" value={formData.phone} onChange={handleChange} pattern="\d{10}" maxLength="10" />

          <input type="text" name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange} />

          <input type="text" name="subject" placeholder="Project Type / Subject" required value={formData.subject} onChange={handleChange} />

          <input type="text" name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} className="form-message" />
        </div>

        <div className="form-consent">
          <label>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />  
            I agree to be contacted regarding my inquiry.
          </label>
        </div>

        <button type="submit" className="contact-btn" disabled={isSubmitting}>
          {isSubmitting ? "⏳ Sending..." : "🚀 Send Message"}
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar transition={Slide} />
    </section>
  );
}
