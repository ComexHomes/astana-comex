// Plain text summary for AI assistants (llmstxt.org).
import { AREAS, FACTS, FAQS, SITE, PHONE } from "@/data/seo";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# Astana Residence",
    "",
    `> New studio and one bedroom apartments in ${FACTS.location}. Developed by ${FACTS.developer}, sold and managed by ${FACTS.salesPartner} (https://www.comexhomes.ke).`,
    "",
    `- Studio: ${FACTS.studio.size}, from ${FACTS.studio.price}, expected rent ${FACTS.studio.rent}`,
    `- One bedroom: ${FACTS.oneBed.size}, from ${FACTS.oneBed.price}, expected rent ${FACTS.oneBed.rent}`,
    `- Expected yield: ${FACTS.yield}`,
    `- Payment plan: ${FACTS.paymentPlan}. Payments in ${FACTS.currencies}.`,
    `- Amenities: ${FACTS.amenities.join(", ")}`,
    `- Contact: ${PHONE} (call or WhatsApp), info@comexhomes.ke`,
    "",
    "## Pages",
    `- [Residences](${SITE}/residences)`,
    `- [Investor's guide](${SITE}/investorsguide)`,
    `- [Location](${SITE}/location)`,
    ...AREAS.map((a) => `- [${a.h1}](${SITE}/apartments/${a.slug}): ${a.description}`),
    "",
    "## FAQ",
    ...FAQS.map((f) => `- ${f.q} ${f.a}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
