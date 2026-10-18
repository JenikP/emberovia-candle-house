import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/config/products";
import { PageHero, meta } from "@/components/site";
import { Catalogue } from "@/components/catalogue";

export const Route = createFileRoute("/candles")({
  head: () => meta("Luxury Candles", "Handmade 220g luxury candles — Velvet Ember, Ivory Bloom, Moon Veil and Golden Aura. Made in Melbourne."),
  component: () => (
    <>
      <PageHero eyebrow="Signature range" title="Luxury Candles">Four fragrance compositions, hand-poured in Melbourne. Range and prices are proposed and shown for preview.</PageHero>
      <Catalogue base={products.filter((p) => p.category === "candle")} filters={false} />
    </>
  ),
});
