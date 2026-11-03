import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AREAS, FACTS, FAQS, SITE, PHONE, WHATSAPP } from "@/data/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = AREAS.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/apartments/${a.slug}` },
    openGraph: { title: a.title, description: a.description, url: `${SITE}/apartments/${a.slug}`, images: ["/001.jpg"] },
  };
}

const wrap: React.CSSProperties = { maxWidth: 1100, margin: "0 auto", padding: "32px 16px" };
const btn: React.CSSProperties = { display: "inline-block", padding: "12px 20px", borderRadius: 6, fontWeight: 600, marginRight: 10, marginTop: 10 };

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = AREAS.find((x) => x.slug === slug);
  if (!a) notFound();
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Astana Residence", item: SITE },
        { "@type": "ListItem", position: 2, name: a.h1, item: `${SITE}/apartments/${a.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <div style={{ paddingTop: 110 }}>
      {ld.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <section style={wrap}>
        <h1 style={{ fontSize: "clamp(26px, 6vw, 36px)", fontWeight: 700, lineHeight: 1.2 }}>{a.h1}</h1>
        <p style={{ fontSize: 18, marginTop: 12, maxWidth: 820 }}>{a.intro}</p>
        <ul style={{ margin: "14px 0 0 20px", listStyle: "disc", lineHeight: 1.9 }}>
          {a.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div style={{ marginTop: 10 }}>
          <a href={`${WHATSAPP}?text=${encodeURIComponent("Hi, I am interested in Astana Residence, Ngara")}`} target="_blank" rel="noopener" style={{ ...btn, background: "#25D366", color: "#fff" }}>
            WhatsApp us
          </a>
          <a href={`tel:${PHONE}`} style={{ ...btn, border: "2px solid #222", color: "#222" }}>
            Call {PHONE}
          </a>
          <Link href="/residences" style={{ ...btn, background: "#111", color: "#fff" }}>
            See the residences
          </Link>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32 }}>Units and prices</h2>
        <table style={{ width: "100%", maxWidth: 720, borderCollapse: "collapse", marginTop: 10 }}>
          <thead>
            <tr style={{ background: "#f3f4f6", textAlign: "left" }}>
              <th style={{ padding: 8 }}>Unit</th>
              <th style={{ padding: 8 }}>Size</th>
              <th style={{ padding: 8 }}>Price from</th>
              <th style={{ padding: 8 }}>Expected rent</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: 8 }}>Studio</td>
              <td style={{ padding: 8 }}>{FACTS.studio.size}</td>
              <td style={{ padding: 8 }}>{FACTS.studio.price}</td>
              <td style={{ padding: 8 }}>{FACTS.studio.rent}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: 8 }}>One bedroom</td>
              <td style={{ padding: 8 }}>{FACTS.oneBed.size}</td>
              <td style={{ padding: 8 }}>{FACTS.oneBed.price}</td>
              <td style={{ padding: 8 }}>{FACTS.oneBed.rent}</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: 10 }}>Payment plan: {FACTS.paymentPlan}. Payments accepted in {FACTS.currencies}.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32 }}>Amenities</h2>
        <p style={{ marginTop: 8 }}>{FACTS.amenities.join(" · ")}</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32 }}>Location</h2>
        <p style={{ marginTop: 8 }}>Astana Residence is in {FACTS.location}. <Link href="/location">See the location</Link>.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32 }}>Frequently asked questions</h2>
        {FAQS.map((f) => (
          <div key={f.q} style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
            <h3 style={{ fontWeight: 600 }}>{f.q}</h3>
            <p style={{ marginTop: 4 }}>{f.a}</p>
          </div>
        ))}

        <p style={{ marginTop: 24 }}>
          More:{" "}
          {AREAS.filter((x) => x.slug !== a.slug).map((x, i) => (
            <span key={x.slug}>
              {i > 0 && " · "}
              <Link href={`/apartments/${x.slug}`}>{x.h1}</Link>
            </span>
          ))}
        </p>
        <p style={{ marginTop: 12 }}>
          Astana Residence is sold by <a href="https://www.comexhomes.ke/">Comex Homes</a>, developers of Balozi Suites, The Reveal and Nyayo View Suites. Looking for land? See{" "}
          <a href="https://www.lukenyaridge.com/">Lukenya Ridge plots on Mombasa Road</a>.
        </p>
      </section>
    </div>
  );
}
