import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/config/products";
import { PageHero, meta } from "@/components/site";
import { Catalogue } from "@/components/catalogue";

export const Route = createFileRoute("/sculptural-candles")({
  head: () => meta("Handcrafted Sculptural Candles", "Explore planned handmade modak, laddu, rose and Christmas sculptural candles from Emberovia Melbourne."),
  component: SculpturalCandles,
});

function SculpturalCandles() {
  return (
    <>
      <PageHero eyebrow="Handcrafted in Melbourne · Coming soon" title="Sculptural Candles">
        Beyond the jar: explore our planned modak, laddu, rose and seasonal Christmas-tree and Santa-inspired handmade candles. Designs, colours, fragrances, prices and availability are not final.
      </PageHero>
      <div className="mx-auto max-w-7xl px-4 pt-10 text-center text-sm text-muted-foreground">
        Concept illustrations only — not photographs of finished Emberovia products. These candles are decorative products, not food. Ordering is not yet available.
      </div>
      <Catalogue base={products.filter((p) => p.category === "sculptural")} filters={false} />
    </>
  );
}
