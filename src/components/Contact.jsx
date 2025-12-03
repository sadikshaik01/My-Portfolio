import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

// ✅ Updated GIF
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
        (error) => {
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

          <div className="contact-links">
            <a href="mailto:shaiksadik2968@gmail.com" target="_blank" rel="noreferrer">
              📧 shaiksadik2968@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/shaik-sadik-b23516328/"
              target="_blank"
              rel="noreferrer"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/sadikshaik01"
              target="_blank"
              rel="noreferrer"
            >
              🧠 GitHub
            </a>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Send Me a Message 💬</h2>

        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (Optional)"
            value={formData.phone}
            onChange={handleChange}
            pattern="\d{10}"
            maxLength="10"
            title="Please enter a valid 10-digit phone number"
          />

          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Project Type / Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-message"
          />
        </div>

        <div className="form-consent">
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />{" "}
            I agree to be contacted regarding my inquiry.
          </label>
        </div>

        <button type="submit" className="contact-btn" disabled={isSubmitting}>
          {isSubmitting ? "⏳ Sending..." : "🚀 Send Message"}
        </button>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        transition={Slide}
      />
    </section>
  );
}
