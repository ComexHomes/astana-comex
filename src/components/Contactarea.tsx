"use client"; // Required if using Next.js App Router

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImFacebook } from "react-icons/im";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// interface FormValues {
//   firstName: string;
//   secondName: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
// }

function ContactArea() {


  return (
    <div className="contact-area">
      <div className="contact-form-area">
        <div className="contact-form-heading">
          <h1>Contact Us</h1>
        </div>

        <div style={{ width: "100%" }}>
          {/* Website Enquiry form in Zoho Forms (info@comexhomes.ke). Every submission is emailed to info@comexhomes.ke. */}
          <iframe
            title="Website Enquiry"
            aria-label="Website Enquiry"
            src="https://forms.zohopublic.com/balozi/form/WebsiteEnquiry/formperma/lMJLwfCsL2F8murEt4IYFdRYU6FWs7a6Xe9Ai3gVfw8?Website=https%3A%2F%2Fwww.astanaresidence.com"
            style={{ width: "100%", height: "900px", border: "none", background: "#fff", borderRadius: 8 }}
          />
        </div>

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
