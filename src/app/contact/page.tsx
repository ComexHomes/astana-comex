// src/pages/contact.tsx or app/contact/page.tsx depending on your routing setup

import React from "react";

// Components
import MapArea from "@/components/MapArea";

// SEO & Metadata
import Head from "next/head";
import ContactArea from "@/components/Contactarea";
import LocationCover from "@/components/Locationcover";
import ContactsBanner from "@/components/Contactsbanner";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Astana Residence</title>
        <meta
          name="description"
          content="Get in touch with Astana Residence for inquiries about our premium studio and one-bedroom apartments in Ngara, Nairobi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Contact Us | Astana Residence" />
        <meta
          property="og:description"
          content="Get in touch with Astana Residence for inquiries about our premium studio and one-bedroom apartments in Ngara, Nairobi."
        />
        <meta
          property="og:url"
          content="https://www.astanarezidence.ke/contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <ContactsBanner />
      <ContactArea />
      {/* <MapArea /> */}
      <LocationCover />
    </>
  );
};

export default ContactPage;
