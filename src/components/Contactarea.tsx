"use client"; // Required if using Next.js App Router

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Result from "./Result"; // Ensure this component is updated accordingly

// interface FormValues {
//   firstName: string;
//   secondName: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
// }

function ContactArea() {
  const [result, setResult] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_prk4agt", // Replace with your actual service ID
        "template_92qp9di", // Replace with your template ID
        e.target as HTMLFormElement,
        "wyL9szuhcFXTO7PpM4yk0" // Replace with your user ID
      )
      .then((response) => {
        console.log("Success:", response.text);
        setResult(true);
      })
      .catch((error) => {
        console.error("Error:", error.text);
      });

    e.currentTarget.reset(); // Reset form after submission
  };

  return (
    <div className="contact-area">
      <div className="contact-form-area">
        <div className="contact-form-heading">
          <h1>Contact Us</h1>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <div className="top-form">
            <div className="input-carrier">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="Enter your first name"
              />
            </div>

            <div className="input-carrier">
              <label htmlFor="secondName">Last Name</label>
              <input
                type="text"
                name="secondName"
                required
                placeholder="Enter your last name"
              />
            </div>

            <div className="input-carrier">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                title="Email"
              />
            </div>

            <div className="input-carrier">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                title="Phone Number"
              />
            </div>
          </div>

          <div className="input-carrier">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Enter the subject"
              title="Subject"
            />
          </div>

          <div className="input-carrier">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="message"
              required
              title="Message"
              placeholder="Enter your message"
            />
          </div>

          <div className="btn-area">
            <button type="submit" className="btn-light">
              Submit
            </button>
          </div>

          <div className="result">{result && <Result />}</div>
        </form>

        <div className="more-text">
          <p style={{ fontSize: "16px", color: "#fff" }}>
            Astana Residence does not share or exchange this information with
            anyone. All information will be kept confidential.
          </p>
        </div>
      </div>

      <div className="contact-logo-area">
        <Image
          src="/001.jpg"
          alt="Astana Residence contact image"
          width={400}
          height={400}
          className="contact-image-logo-area"
        />

        <Image
          src="/logo.png"
          alt="Astana Residence logo"
          width={150}
          height={100}
          className="contact-logo-image-logo-area"
        />

        <div className="socials-container">
          <h3>Follow Us</h3>
          <Link
            href="https://facebook.com/comexhomes.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook className="social-icon" />
          </Link>

          <Link
            href="https://instagram.com/comexhomes.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className="social-icon" />
          </Link>

          <Link
            href="https://twitter.com/comexhomes_ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter className="social-icon" />
          </Link>

          <Link
            href="https://linkedin.com/company/comex-homes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="social-icon" />
          </Link>

          <Link
            href="https://youtube.com/@comexhomeske"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube className="social-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactArea;
