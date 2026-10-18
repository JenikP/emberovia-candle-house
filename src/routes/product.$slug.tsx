import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, formatAUD } from "@/config/products";
import { ProductVisual, QtySelector, StatusBadge } from "@/components/site";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProduct(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Product unavailable | EMBEROVIA" }, { name: "robots", content: "noindex" }] };
    const t = `${p.name} | EMBEROVIA`;
    return { meta: [{ title: t }, { name: "description", content: p.description }, { property: "og:title", content: t }, { property: "og:description", content: p.description }, { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useLoaderData();
  const p = getProduct(slug)!;
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const cart = useCart();
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-8 md:py-20">
      <ProductVisual p={p} large />
      <div>
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <Link to={p.category === "hamper" ? "/diwali-hampers" : p.category === "sculptural" ? "/sculptural-candles" : "/candles"}>{p.category === "hamper" ? "Diwali Hampers" : p.category === "sculptural" ? "Sculptural Candles" : "Luxury Candles"}</Link> / {p.name}
        </nav>
        <div className="mt-4"><StatusBadge p={p} /></div>
        <h1 className="mt-3 text-5xl">{p.name}</h1>
        <p className="mt-1 text-muted-foreground">{p.tagline}</p>
        <p className="mt-4 text-2xl">{p.price > 0 ? formatAUD(p.price) : "Price to be confirmed"} {p.price > 0 && <span className="text-sm text-muted-foreground">AUD · suggested, not final</span>}</p>
        <p className="mt-6 leading-relaxed">{p.description}</p>
        {p.notes && (
          <dl className="mt-6 grid grid-cols-3 border-y py-4 text-center">
            {(["top", "heart", "base"] as const).map((k) => <div key={k}><dt className="eyebrow">{k} note</dt><dd className="mt-1 font-display text-xl">{p.notes![k]}</dd></div>)}
          </dl>
        )}
        {p.size && <p className="mt-4 text-sm">Size: {p.size}. Burn time to be confirmed after testing.</p>}
        {p.includes && (<><h2 className="mt-6 text-2xl">Includes</h2><ul className="mt-2 space-y-1 text-sm">{p.includes.map((i) => <li key={i}>— {i}</li>)}</ul></>)}

        {p.orderable ? (
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-4">
              <QtySelector value={qty} onChange={(n) => setQty(Math.max(1, Math.min(10, n)))} label={p.name} />
              <button className="btn-primary" onClick={() => { cart.add(p.slug, qty); setAdded(true); }}>Add to demo cart</button>
            </div>
            <p className="mt-3 text-sm" aria-live="polite">{added && <>Added. <Link to="/cart" className="underline">View cart</Link></>}</p>
            <p className="mt-2 text-xs text-muted-foreground">Demo item — not yet available for purchase.</p>
          </div>
        ) : (
          <div className="mt-8 border border-gold bg-card p-5">
            <p className="font-medium">Coming soon — enquire to register interest</p>
            <p className="mt-2 text-sm text-muted-foreground">{p.category === "hamper" ? "This hamper cannot be ordered yet, pending final contents, supplier food safety and compliance confirmation." : "This design is still being developed and is not available for purchase yet."}</p>
            <Link to="/contact" className="btn-primary mt-4">Enquire</Link>
          </div>
        )}

        {p.compliance && (
          <details className="mt-8 border-t pt-4 text-sm">
            <summary className="cursor-pointer font-medium">Food information (to be confirmed)</summary>
            <dl className="mt-3 space-y-2">
              {Object.entries(p.compliance).map(([k, v]) => <div key={k}><dt className="capitalize text-muted-foreground">{k.replace(/([A-Z])/g, " $1")}</dt><dd>{v}</dd></div>)}
            </dl>
          </details>
        )}
        <p className="mt-6 text-xs text-muted-foreground">Image shown is an illustration, not a photograph of the product. See <Link to="/candle-safety" className="underline">candle safety</Link>.</p>
      </div>
    </div>
  );
}
