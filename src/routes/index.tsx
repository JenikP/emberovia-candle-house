import { createFileRoute, Link } from "@tanstack/react-router";
import { campaign } from "@/config/store";
import { products } from "@/config/products";
import { Flame, ProductCard, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ ...meta("Handmade Luxury Candles & Diwali Hampers, Melbourne", "Celebrate Diwali with the gift of light — handcrafted luxury candles and curated gift hampers from Melbourne."), links: [{ rel: "preload", as: "image", href: "/royal-v2.webp" }] }),
  component: Index,
});

function Index() {
  const hampers = products.filter((p) => p.seasonal === campaign.key && p.featured);
  const candles = products.filter((p) => p.category === "candle");
  const sculptural = products.filter((p) => p.category === "sculptural");
  return (
    <>
      <section className="relative overflow-hidden bg-ember px-4 py-24 text-center text-ivory md:py-36">
        <img src="/hero.webp" alt="" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-85" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-ember/35" />
        <div className="relative">
        <Flame className="mx-auto h-16 w-12 animate-flicker text-gold" />
        <p className="eyebrow mt-6">{campaign.eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-5xl leading-tight md:text-7xl">{campaign.title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-champagne md:text-lg">{campaign.copy}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to={campaign.primaryCta.to} className="btn-gold">{campaign.primaryCta.label}</Link>
          <Link to={campaign.secondaryCta.to} className="btn-outline text-ivory">{campaign.secondaryCta.label}</Link>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32" aria-labelledby="featured-hampers-title">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Featured Diwali hampers</p>
          <h2 id="featured-hampers-title" className="mt-4 text-4xl md:text-6xl">The Art of Festive Gifting</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">Two thoughtfully curated ways to share warmth, light and celebration.</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl items-start gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
          {hampers.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="bg-muted px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center"><p className="eyebrow">Signature range</p><h2 className="mt-3 text-4xl md:text-5xl">Luxury Jar Candles</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Hand-poured 220g jar candles with layered fragrance notes. Prices shown are indicative only.</p></div>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">{candles.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <div className="mt-10 text-center"><Link to="/candles" className="btn-outline">Explore Luxury Jar Candles</Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center">
          <p className="eyebrow">A separate range · Beyond the jar · Coming soon</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Handcrafted Sculptural Candles</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Modak, laddu and rose-shaped candles, plus Christmas-tree and Santa-inspired seasonal designs. All are planned creations, not yet available to order.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">{sculptural.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
        <div className="mt-10 text-center"><Link to="/sculptural-candles" className="btn-outline">Explore sculptural candles</Link></div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
        <div className="relative aspect-square overflow-hidden bg-ember"><img src="/signature.webp" alt="Hand-poured EMBEROVIA candle (illustrative concept)" loading="lazy" decoding="async" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover" /></div>
        <div>
          <p className="eyebrow">Handmade in Melbourne</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Poured by hand, slowly</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">Every EMBEROVIA candle is made in small batches in Melbourne — blended, poured and finished by hand, with fragrance compositions inspired by the world's great perfume houses.</p>
          <Link to="/our-story" className="btn-outline mt-8">Read our story</Link>
        </div>
      </section>

      <section className="bg-espresso px-4 py-20 text-center text-ivory">
        <p className="eyebrow">The art of gifting</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-4xl md:text-5xl">A gift that glows long after it's given</h2>
        <p className="mx-auto mt-5 max-w-xl text-champagne">From festive celebrations to quiet thank-yous, discover gifts wrapped with care.</p>
        <Link to="/gifts" className="btn-gold mt-8">Explore gifts</Link>
      </section>
    </>
  );
}
