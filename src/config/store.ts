// Store-wide settings — owner-editable. Replace placeholders before launch.

export const store = {
  name: "EMBEROVIA",
  tagline: "Where Every Flame Tells a Story",
  city: "Melbourne, Australia",
  /** When false, checkout is a labelled DEMO only and no orders are submitted. */
  orderingEnabled: false,
  payId: "[BUSINESS PAYID TO BE PROVIDED]",
  payIdConfigured: false,
  contactEmail: "[CONTACT EMAIL TO BE PROVIDED]",
  instagram: "[INSTAGRAM HANDLE TO BE PROVIDED]",
  fulfilment: {
    pickup: "[PICKUP LOCATION / HOURS TO BE PROVIDED]",
    shipping: "[SHIPPING RATES & ZONES TO BE PROVIDED]",
    dispatch: "[DISPATCH TIMEFRAME TO BE PROVIDED]",
  },
};

/** Current campaign — swap these values after Diwali (e.g. Christmas) without redesign. */
export const campaign = {
  key: "diwali",
  eyebrow: "Current campaign · Diwali",
  title: "Celebrate Diwali with the Gift of Light",
  copy: "Discover handcrafted luxury candles and thoughtfully curated gift hampers designed to make every celebration unforgettable",
  primaryCta: { label: "Shop Diwali Hampers", to: "/diwali-hampers" as const },
  secondaryCta: { label: "Explore Luxury Jar Candles", to: "/candles" as const },
  navLabel: "Diwali Hampers",
};
