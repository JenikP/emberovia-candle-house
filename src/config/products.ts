// EMBEROVIA product catalogue — owner-editable configuration.
// ALL products, prices and descriptions are ILLUSTRATIVE / SUGGESTED, not final.
// Fields marked "TO BE CONFIRMED" must be completed before launch.

export type Category = "hamper" | "candle" | "sculptural";

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
      "A thoughtful festive gifting concept: two handcrafted candles, traditional Indian sweets and simple, elegant gift presentation. The final sweet selection, packaging and candle designs are still being planned.",
    includes: [
      "2 handmade candles",
      "Traditional Indian sweets, such as kaju katli (supplier and selection to be confirmed)",
      "Greeting card",
      "Elegant gift packaging (final design to be confirmed)",
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
      "A generous Diwali gifting concept with handmade luxury candles, traditional Indian sweets, assorted dry fruits and a decorative LED diya. Final contents and presentation are being planned.",
    includes: [
      "Handmade luxury candles",
      "Premium dry fruits (selection to be confirmed)",
      "Traditional Indian mithai sourced from a sweet shop (selection to be confirmed)",
      "Decorative battery LED diya (flame-free)",
      "Personalised greeting card",
      "Premium gift packaging (final design to be confirmed)",
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
    description: "Velvet Ember is a proposed luxury jar candle with rose, oud and saffron notes. The fragrance blend, specifications and price are subject to confirmation."
    notes: { top: "Saffron", heart: "Rose", base: "Oud" },
    size: "220g (proposed)",
    tone: "rose",
    orderable: false,
    status: "coming-soon",
    featured: true,
  },
  {
    slug: "ivory-bloom",
    name: "Ivory Bloom",
    category: "candle",
    price: 39.95,
    tagline: "Vanilla · Peony · Amber",
    description: "Ivory Bloom is a proposed luxury jar candle with vanilla, peony and amber notes. The fragrance blend, specifications and price are subject to confirmation."
    notes: { top: "Peony", heart: "Vanilla", base: "Amber" },
    size: "220g (proposed)",
    tone: "ivory",
    orderable: false,
    status: "coming-soon",
    featured: true,
  },
  {
    slug: "moon-veil",
    name: "Moon Veil",
    category: "candle",
    price: 42.95,
    tagline: "Jasmine · Musk · Sandalwood",
    description: "Moon Veil is a proposed luxury jar candle with jasmine, musk and sandalwood notes. The fragrance blend, specifications and price are subject to confirmation."
    notes: { top: "Jasmine", heart: "Musk", base: "Sandalwood" },
    size: "220g (proposed)",
    tone: "moon",
    orderable: false,
    status: "coming-soon",
    featured: true,
  },
  {
    slug: "golden-aura",
    name: "Golden Aura",
    category: "candle",
    price: 39.95,
    tagline: "Bergamot · Coconut · Cedar",
    description: "Golden Aura is a proposed luxury jar candle with bergamot, coconut and cedar notes. The fragrance blend, specifications and price are subject to confirmation."
    notes: { top: "Bergamot", heart: "Coconut", base: "Cedar" },
    size: "220g (proposed)",
    tone: "gold",
    orderable: false,
    status: "coming-soon",
    featured: true,
  },
  {
    slug: "modak-sculptural-candle",
    name: "Modak Sculptural Candle",
    category: "sculptural",
    price: 0,
    tagline: "A festive hand-moulded keepsake",
    description: "A planned handcrafted modak-shaped decorative wax candle for gifting and Diwali celebrations. Not edible. Final colour, fragrance, size and price are being developed.",
    tone: "gold",
    orderable: false,
    status: "coming-soon",
  },
  {
    slug: "laddu-sculptural-candle",
    name: "Laddu Sculptural Candle",
    category: "sculptural",
    price: 0,
    tagline: "Inspired by festive Indian sweets",
    description: "A proposed laddu-shaped decorative candle, handmade in small batches. This is a decorative wax candle, not food. Final details to be confirmed.",
    tone: "ivory",
    orderable: false,
    status: "coming-soon",
  },
  {
    slug: "rose-sculptural-candle",
    name: "Rose Sculptural Candle",
    category: "sculptural",
    price: 0,
    tagline: "Petal-shaped handmade artistry",
    description: "A planned handcrafted rose-shaped decorative wax candle for year-round gifting. Colour, fragrance, size and price are still being finalised.",
    tone: "rose",
    orderable: false,
    status: "coming-soon",
  },
  {
    slug: "christmas-sculptural-candles",
    name: "Christmas Tree Candle",
    category: "sculptural",
    price: 0,
    tagline: "A festive sculptural keepsake",
    description: "A planned hand-moulded Christmas-tree decorative wax candle. Final colour, fragrance, size and price are still being developed.",
    tone: "moon",
    orderable: false,
    status: "coming-soon",
  },
  {
    slug: "santa-claus-candle",
    name: "Santa Claus Candle",
    category: "sculptural",
    price: 0,
    tagline: "Seasonal candle artistry",
    description: "A planned handcrafted Santa Claus-shaped decorative wax candle. This is a concept, not currently available for purchase. Final design, fragrance, size and price are to be confirmed.",
    tone: "rose",
    orderable: false,
    status: "coming-soon",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const formatAUD = (n: number) =>
  new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(n);
