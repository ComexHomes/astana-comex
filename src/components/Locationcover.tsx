"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LocationCover() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [showIframe, setShowIframe] = React.useState(false);
  const iframeRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowIframe(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div data-aos="fade-up" className="location-cover" ref={iframeRef}>
      {showIframe && (
        <iframe
          src="https://g.co/kgs/BgEAVL9"
          width="100%"
          height="600"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Astana Residence Map Location"
          aria-label="Map showing location of Astana Residence in Ngara, Nairobi"
        ></iframe>
      )}
    </div>
  );
}
