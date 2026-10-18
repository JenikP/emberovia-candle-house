import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/config/products";
import { PageHero, meta } from "@/components/site";
import { Catalogue } from "@/components/catalogue";

export const Route = createFileRoute("/gifts")({
  head: () => meta("Gifts", "Luxury candle gifts and seasonal hampers for every celebration, from EMBEROVIA in Melbourne."),
  component: () => (
    <>
      <PageHero eyebrow="For every occasion" title="Gifts">Candles and hampers for celebrations, thank-yous and quiet moments.</PageHero>
      <Catalogue base={products} />
    </>
  ),
});
