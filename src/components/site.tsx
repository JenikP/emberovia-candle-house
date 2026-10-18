import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, ShoppingBag, X, Minus, Plus } from "lucide-react";
import { campaign, store } from "@/config/store";
import { formatAUD, type Product } from "@/config/products";
import { useCart } from "@/lib/cart";

export function Flame({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden="true" fill="none">
      <path d="M12 1C14 8 20 11 20 19a8 8 0 0 1-16 0c0-5 3-7 4-11 1 3 2 4 3.5 5C12 9 11 5 12 1Z" fill="currentColor" opacity=".9" />
      <path d="M12 16c1.2 2.2 3 3.2 3 5.5a3 3 0 0 1-6 0c0-1.8 1.5-3 3-5.5Z" fill="var(--ivory)" opacity=".7" />
    </svg>
  );
}

/** Editable text wordmark — replace with final logo artwork later. */
export function Wordmark({ light = false }: { light?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);
  if (!imageFailed) {
    return <img src="/emberovia/logo-2-original.png" onError={() => setImageFailed(true)}
      alt="EMBEROVIA Luxury Candles" className="h-12 w-auto max-w-[195px] object-contain" />;
  }
  return (
    <span className={`inline-flex items-center gap-2 ${light ? "text-ivory" : "text-espresso"}`}>
      <Flame className="h-5 w-4 text-gold" />
      <span className="font-display text-2xl tracking-[0.22em]">EMBEROVIA</span>
    </span>
  );
}

const nav = [
  { to: "/diwali-hampers", label: campaign.navLabel },
  { to: "/candles", label: "Jar Candles" },
  { to: "/sculptural-candles", label: "Sculptural Candles" },
  { to: "/gifts", label: "Gifts" },
  { to: "/our-story", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-espresso px-4 py-2 text-center text-[0.7rem] tracking-[0.2em] uppercase text-champagne" role="status">
        Preview store — ordering not yet enabled
      </div>
      <div className="border-b bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
          <Link to="/" aria-label="EMBEROVIA home"><Wordmark /></Link>
          <nav className="hidden gap-8 lg:flex" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-xs uppercase tracking-[0.18em] hover:text-gold" activeProps={{ className: "text-gold" }}>{n.label}</Link>
            ))}
          </nav>
          <Link to="/cart" className="relative" aria-label={`Cart, ${count} items`}>
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] text-espresso">{count}</span>}
          </Link>
        </div>
        {open && (
          <nav className="border-t px-4 pb-4 lg:hidden" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b py-3 text-sm uppercase tracking-[0.18em]">{n.label}</Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  const cols = [
    { h: "Shop", l: [["/diwali-hampers", "Diwali Hampers"], ["/candles", "Jar Candles"], ["/sculptural-candles", "Sculptural Candles"], ["/gifts", "Gifts"]] },
    { h: "House", l: [["/our-story", "Our Story"], ["/contact", "Contact"], ["/candle-safety", "Candle Safety"]] },
    { h: "Information", l: [["/shipping-returns", "Shipping & Returns"], ["/privacy", "Privacy"], ["/terms", "Terms"]] },
  ] as const;
  return (
    <footer className="bg-espresso text-champagne">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div>
          <Wordmark light />
          <p className="mt-4 font-display text-lg italic">{store.tagline}</p>
          <p className="mt-2 text-sm opacity-80">Handmade in {store.city}</p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h2 className="eyebrow mb-4">{c.h}</h2>
            <ul className="space-y-2 text-sm">
              {c.l.map(([to, label]) => <li key={to}><Link to={to} className="hover:text-ivory">{label}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-mocha px-4 py-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} EMBEROVIA · Preview store — all products and prices illustrative · Prices in AUD
      </div>
    </footer>
  );
}

const toneBg: Record<Product["tone"], string> = {
  rose: "from-mocha to-espresso",
  ivory: "from-ivory to-champagne",
  moon: "from-champagne to-mocha",
  gold: "from-champagne to-gold",
  hamper: "from-ivory to-champagne",
  royal: "from-mocha to-espresso",
};

/** Concept imagery from the owner's Emberovia Sites export, with the original Lovable visual as fallback. */
const productImageFiles: Record<string, string> = {
  "classic-diwali-hamper": "classic-v2.webp",
  "royal-diwali-hamper": "royal-v2.webp",
  "velvet-ember": "candle0-v2.webp",
  "ivory-bloom": "candle1-v2.webp",
  "moon-veil": "candle2.webp",
  "golden-aura": "candle3-v2.webp",
  "modak-sculptural-candle": "sculpture0.webp",
  "laddu-sculptural-candle": "sculpture1.webp",
  "rose-sculptural-candle": "sculpture2.webp",
  "christmas-sculptural-candles": "sculpture3.webp",
};
export function ProductVisual({ p, large = false }: { p: Product; large?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);
  const filename = productImageFiles[p.slug];
  const dark = p.tone === "rose" || p.tone === "royal";
  return (
    <div className={`relative grid aspect-[4/5] place-items-center overflow-hidden bg-gradient-to-b ${toneBg[p.tone]}`}>
      {filename && !imageFailed ? (
        <img src={`/emberovia/${filename}`} alt={`Illustrative concept for ${p.name}, not a photograph of current stock`}
          onError={() => setImageFailed(true)} loading={large ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="relative flex flex-col items-center gap-4 text-center">
          <Flame className={`${large ? "h-24 w-16" : "h-16 w-12"} animate-flicker text-gold`} />
          <span className={`max-w-44 font-display text-lg leading-tight ${dark ? "text-champagne" : "text-espresso"}`}>{p.name}</span>
        </div>
      )}
      <span className="absolute bottom-2 left-2 right-2 bg-espresso/80 px-2 py-1 text-[0.62rem] text-ivory">
        Concept image only — actual product and contents may vary
      </span>
    </div>
  );
}

export function StatusBadge({ p }: { p: Product }) {
  return (
    <span className="inline-block bg-espresso px-2 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-champagne">
      {p.status === "coming-soon" ? "Coming soon · Enquire" : "Demo · Suggested price"}
    </span>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group">
      <Link to="/product/$slug" params={{ slug: p.slug }} className="block">
        <div className="relative transition-transform duration-500 group-hover:-translate-y-1"><ProductVisual p={p} /><div className="absolute left-3 top-3"><StatusBadge p={p} /></div></div>
        <h3 className="mt-4 text-2xl">{p.name}</h3>
        <p className="text-sm text-muted-foreground">{p.tagline}</p>
        <p className="mt-1 text-sm">{p.price > 0 ? formatAUD(p.price) : "Price to be confirmed"} {p.price > 0 && <span className="text-xs text-muted-foreground">(suggested)</span>}</p>
      </Link>
    </article>
  );
}

export function QtySelector({ value, onChange, label }: { value: number; onChange: (n: number) => void; label: string }) {
  return (
    <div className="inline-flex items-center border" role="group" aria-label={`Quantity for ${label}`}>
      <button className="p-2.5 disabled:opacity-40" onClick={() => onChange(value - 1)} disabled={value <= 1} aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
      <span className="w-8 text-center text-sm" aria-live="polite">{value}</span>
      <button className="p-2.5 disabled:opacity-40" onClick={() => onChange(value + 1)} disabled={value >= 10} aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
    </div>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-ember px-4 py-20 text-center text-ivory md:py-28">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h1>
      {children && <div className="mx-auto mt-5 max-w-2xl text-champagne">{children}</div>}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl space-y-5 px-4 py-16 leading-relaxed [&_h2]:mt-10 [&_h2]:text-3xl [&_li]:ml-5 [&_li]:list-disc">{children}</div>;
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <mark className="bg-champagne/60 px-1 text-espresso">{children}</mark>;
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | EMBEROVIA` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | EMBEROVIA` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
