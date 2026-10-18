// EMBEROVIA product catalogue — owner-editable configuration.
// ALL products, prices and descriptions are ILLUSTRATIVE / SUGGESTED, not final.
// Fields marked "TO BE CONFIRMED" must be completed before launch.

export type Category = "hamper" | "candle";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number; // AUD, suggested
  tagline: string;
  description: string;
  includes?: string[];
  notes?: { top: string; heart: string; base: string };
  size?: string;
  tone: "rose" | "ivory" | "moon" | "gold" | "hamper" | "royal";
  /** false = cannot be added to cart (enquiry only) */
  orderable: boolean;
  status: "demo" | "coming-soon";
  seasonal?: string; // e.g. "diwali"
  featured?: boolean;
  /** Food compliance fields for hampers — owner to complete before sale. */
  compliance?: {
    supplier: string;
    ingredients: string;
    allergens: string;
    bestBefore: string;
    storage: string;
    labelling: string;
    councilApproval: string;
  };
}

const TBC = "TO BE CONFIRMED";
const hamperCompliance = {
  supplier: `${TBC} — external Indian sweet-shop supplier`,
  ingredients: TBC,
  allergens: `${TBC} — may contain milk, nuts, gluten, sesame (to be verified with supplier)`,
  bestBefore: TBC,
  storage: TBC,
  labelling: TBC,
  councilApproval: `${TBC} — local council / food safety compliance pending`,
};

export const products: Product[] = [
  {
    slug: "classic-diwali-hamper",
    name: "Classic Diwali Hamper",
    category: "hamper",
    price: 69,
    tagline: "A warm, thoughtful gift of light",
    description:
      "A graceful introduction to the festival of lights — two handmade candles paired with assorted Indian sweets, wrapped in our ivory-and-gold packaging.",
    includes: [
      "2 handmade candles",
      "Assorted Indian sweets (from an external sweet-shop supplier)",
      "Greeting card",
      "Ivory-gold gift packaging",
    ],
    tone: "hamper",
    orderable: false,
    status: "coming-soon",
    seasonal: "diwali",
    featured: true,
    compliance: hamperCompliance,
  },
  {
    slug: "royal-diwali-hamper",
    name: "Royal Diwali Hamper",
    category: "hamper",
    price: 149,
    tagline: "Our most generous celebration",
    description:
      "A lavish keepsake for those dearest to you — candles, dry fruits, sweets and a decorative battery-operated LED diya, presented in a premium box.",
    includes: [
      "Handmade luxury candles",
      "Assorted dry fruits",
      "Indian sweets sourced from a sweet shop",
      "Decorative battery LED diya (flame-free)",
      "Personalised greeting card",
      "Premium gift box",
    ],
    tone: "royal",
    orderable: false,
    status: "coming-soon",
    seasonal: "diwali",
    featured: true,
    compliance: hamperCompliance,
  },
  {
    slug: "velvet-ember",
    name: "Velvet Ember",
    category: "candle",
    price: 39.95,
    tagline: "Rose · Oud · Saffron",
    description: "A deep, opulent blend of damask rose warmed by oud and a thread of saffron.",
    notes: { top: "Saffron", heart: "Rose", base: "Oud" },
    size: "220g (proposed)",
    tone: "rose",
    orderable: true,
    status: "demo",
    featured: true,
  },
  {
    slug: "ivory-bloom",
    name: "Ivory Bloom",
    category: "candle",
    price: 39.95,
    tagline: "Vanilla · Peony · Amber",
    description: "Soft peony petals over creamy vanilla and a glowing amber base.",
    notes: { top: "Peony", heart: "Vanilla", base: "Amber" },
    size: "220g (proposed)",
    tone: "ivory",
    orderable: true,
    status: "demo",
    featured: true,
  },
  {
    slug: "moon-veil",
    name: "Moon Veil",
    category: "candle",
    price: 42.95,
    tagline: "Jasmine · Musk · Sandalwood",
    description: "Night-blooming jasmine drifting over soft musk and creamy sandalwood.",
    notes: { top: "Jasmine", heart: "Musk", base: "Sandalwood" },
    size: "220g (proposed)",
    tone: "moon",
    orderable: true,
    status: "demo",
    featured: true,
  },
  {
    slug: "golden-aura",
    name: "Golden Aura",
    category: "candle",
    price: 39.95,
    tagline: "Bergamot · Coconut · Cedar",
    description: "Bright bergamot and smooth coconut grounded by dry cedarwood.",
    notes: { top: "Bergamot", heart: "Coconut", base: "Cedar" },
    size: "220g (proposed)",
    tone: "gold",
    orderable: true,
    status: "demo",
    featured: true,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const formatAUD = (n: number) =>
  new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(n);
