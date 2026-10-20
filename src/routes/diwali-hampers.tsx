import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/config/products";
import { PageHero, ProductCard, meta } from "@/components/site";

export const Route = createFileRoute("/diwali-hampers")({
  head: () => meta("Diwali Gift Hampers", "Curated Diwali gift hampers with handmade candles and Indian sweets — coming soon from EMBEROVIA, Melbourne."),
  component: Page,
});

function Page() {
  const list = products.filter((p) => p.seasonal === "diwali");
  return (
    <>
      <PageHero eyebrow="Diwali collection" title="Diwali Hampers">
        Thoughtfully curated hampers to share the festival of lights. Hampers are coming soon and cannot be ordered yet. Prices shown are indicative only.
      </PageHero>
      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="mb-10 border border-gold bg-card p-5 text-sm leading-relaxed">
          <strong>Coming soon — not yet orderable.</strong> Hampers are not yet available to order while supplier food safety, ingredients, allergens, best-before dates, labelling, storage and local council compliance are finalised. Hampers contain no fireworks; the Royal hamper's diya is a flame-free battery LED decoration.
        </div>
        <div className="grid gap-10 sm:grid-cols-2">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      </section>
    </>
  );
}
