// Single source of truth for Astana Residence SEO and AI search (GEO) content.
export const SITE = "https://www.astanaresidence.com";
export const PHONE = "+254709501501";
export const WHATSAPP = "https://wa.me/254709501501";

export const FACTS = {
  name: "Astana Residence",
  area: "Ngara, Nairobi",
  developer: "Kolobot Holdings Limited",
  salesPartner: "Comex Homes",
  architect: "Salcohm Studios Limited",
  studio: { size: "291 sqft", price: "KES 3,510,000", priceNum: 3510000, rent: "KES 29,000 a month" },
  oneBed: { size: "452 sqft", price: "KES 5,460,000", priceNum: 5460000, rent: "KES 45,000 a month" },
  yield: "about 10% expected gross rental yield",
  paymentPlan: "25% deposit, balance in quarterly instalments during construction; early full payment may qualify for a discount",
  currencies: "Kenya shillings or US dollars",
  location:
    "Ngara, within walking distance of Nairobi CBD, the National Museum and Thika Superhighway, about two minutes from the Nairobi Expressway",
  amenities: [
    "Swimming pool",
    "High speed lifts",
    "CCTV surveillance",
    "Manned security",
    "Visitors reception",
    "Backup generator",
    "Borehole water supply",
    "Fully fitted gym",
    "Coffee lounge",
    "Business centre",
    "Rooftop residents lounge",
  ],
};

export type Area = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  points: string[];
};

// Searches people around Ngara and central Nairobi make, each answered by Astana Residence.
export const AREAS: Area[] = [
  {
    slug: "apartments-for-sale-in-ngara",
    h1: "Apartments for Sale in Ngara, Nairobi",
    title: "Apartments for Sale in Ngara: Studios from KES 3.51M",
    description:
      "Studio (KES 3.51M) and one bedroom (KES 5.46M) apartments for sale in Ngara, Nairobi at Astana Residence. About 10% expected rental yield, pool, gym and rooftop lounge.",
    intro:
      "Astana Residence is a new block of studio and one bedroom apartments in Ngara, within walking distance of the CBD. Studios are 291 sqft from KES 3.51M and one bedrooms 452 sqft from KES 5.46M.",
    points: [
      "Studios from KES 3,510,000, expected rent KES 29,000 a month",
      "One bedrooms from KES 5,460,000, expected rent KES 45,000 a month",
      "25% deposit, balance in quarterly instalments during construction",
      "Sold by Comex Homes, who also manage tenants and rent after handover",
    ],
  },
  {
    slug: "apartments-for-sale-near-nairobi-cbd",
    h1: "Apartments for Sale Near Nairobi CBD",
    title: "Apartments for Sale Near Nairobi CBD | Walk to Town from Ngara",
    description:
      "Own a studio or one bedroom a short walk from Nairobi CBD. Astana Residence, Ngara: studios from KES 3.51M, close to the National Museum, Thika Superhighway and the Expressway.",
    intro:
      "If you want to live or invest within walking distance of town, Ngara is one of the closest residential areas to Nairobi CBD. Astana Residence puts you there, with the Nairobi Expressway about two minutes away.",
    points: [
      "Walking distance to Nairobi CBD and the National Museum",
      "Quick access to Thika Superhighway and the Nairobi Expressway",
      "Studios from KES 3.51M and one bedrooms from KES 5.46M",
      "Tenants want to live close to work, which keeps demand for small units high",
    ],
  },
  {
    slug: "student-and-young-professional-apartments-nairobi",
    h1: "Apartments for Students and Young Professionals in Nairobi",
    title: "Buy to Let Studios for Students and Young Professionals in Nairobi",
    description:
      "Invest in a Ngara studio that rents to students and young professionals near Nairobi CBD and the University of Nairobi. KES 3.51M, about 10% expected yield, managed by Comex Homes.",
    intro:
      "Ngara sits close to the CBD and the University of Nairobi, so studios and one bedrooms here suit students, interns and young professionals. Astana Residence was designed for exactly these tenants, with a gym, coffee lounge, business centre and rooftop lounge.",
    points: [
      "Close to Nairobi CBD and the University of Nairobi",
      "Expected rent KES 29,000 a month on a KES 3.51M studio",
      "Business centre and coffee lounge for remote work and study",
      "Comex Homes finds tenants and collects rent for owners",
    ],
  },
  {
    slug: "apartments-near-thika-road-and-expressway",
    h1: "Apartments Near Thika Road and the Nairobi Expressway",
    title: "Apartments for Sale Near Thika Road and the Nairobi Expressway",
    description:
      "Astana Residence in Ngara is close to Thika Superhighway and about two minutes from the Nairobi Expressway. Studios from KES 3.51M, one bedrooms from KES 5.46M.",
    intro:
      "Ngara links straight onto Thika Superhighway and is about two minutes from the Nairobi Expressway, so tenants can reach the CBD, Westlands, Upper Hill and JKIA quickly.",
    points: [
      "Close to Thika Superhighway",
      "About two minutes from the Nairobi Expressway",
      "Pool, gym, rooftop residents lounge, CCTV and manned security",
      "Studios from KES 3.51M",
    ],
  },
  {
    slug: "apartments-near-parklands-and-pangani",
    h1: "Apartments Near Parklands and Pangani",
    title: "Apartments for Sale Near Parklands and Pangani | Astana Residence, Ngara",
    description:
      "Looking around Parklands, Pangani or Ngara? Astana Residence offers studios from KES 3.51M and one bedrooms from KES 5.46M in Ngara, between the CBD and these neighbourhoods.",
    intro:
      "Ngara sits between the CBD, Parklands and Pangani, giving tenants easy access to all three. Astana Residence offers new build studios and one bedrooms with resort style amenities at entry level prices.",
    points: [
      "Between Nairobi CBD, Parklands and Pangani",
      "New build with pool, gym and rooftop lounge",
      "Studios from KES 3.51M, one bedrooms from KES 5.46M",
      "Payment in Kenya shillings or US dollars",
    ],
  },
  {
    slug: "buy-apartment-in-nairobi-from-abroad",
    h1: "Buy an Apartment in Nairobi from Abroad",
    title: "Buy an Apartment in Nairobi from the Diaspora | Pay in USD",
    description:
      "Kenyans abroad can buy an Astana Residence studio or one bedroom remotely: 3D virtual tour, video viewings, payment in USD or KES, and tenant management by Comex Homes.",
    intro:
      "You do not need to fly home to buy at Astana Residence. Take the 3D virtual tour, book a live video viewing on WhatsApp, have your own Kenyan advocate review the agreement, and pay in US dollars or Kenya shillings.",
    points: [
      "3D virtual tour on this website and live video viewings",
      "Pay in US dollars or Kenya shillings by bank transfer",
      "25% deposit, balance in quarterly instalments during construction",
      "Comex Homes finds tenants and collects rent after handover",
    ],
  },
];

export const FAQS = [
  { q: "Where is Astana Residence?", a: `Astana Residence is in ${FACTS.location}.` },
  { q: "How much is a studio at Astana Residence?", a: "Studios are 291 sqft from KES 3,510,000 and one bedrooms are 452 sqft from KES 5,460,000." },
  { q: "What rent can I expect at Astana Residence?", a: "Expected rent is about KES 29,000 a month for a studio and KES 45,000 for a one bedroom, an expected gross yield of about 10%." },
  { q: "What is the payment plan?", a: "25% deposit, with the balance in quarterly instalments during construction. Early full payment may qualify for a discount. Payments are accepted in Kenya shillings or US dollars." },
  { q: "Who sells and manages Astana Residence?", a: "Astana Residence is developed by Kolobot Holdings Limited and sold by Comex Homes, who also manage tenants and rent collection for owners." },
  { q: "What amenities does Astana Residence have?", a: FACTS.amenities.join(", ") + "." },
];
