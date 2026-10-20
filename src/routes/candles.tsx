import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/config/products";
import { PageHero, meta } from "@/components/site";
import { Catalogue } from "@/components/catalogue";

export const Route = createFileRoute("/candles")({
  head: () => meta("Luxury Jar Candles", "Handmade 220g luxury candles — Velvet Ember, Ivory Bloom, Moon Veil and Golden Aura. Made in Melbourne."),
  component: () => (
    <>
      <PageHero eyebrow="Signature range" title="Luxury Jar Candles">Four fragrance compositions, hand-poured into 220g jars in Melbourne. Looking for shaped decorative candles? See our separate Sculptural Candles range. Prices shown are indicative only.</PageHero>
      <Catalogue base={products.filter((p) => p.category === "candle")} filters={false} />
    </>
  ),
});
