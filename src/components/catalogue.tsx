import { useState } from "react";
import { products, type Product } from "@/config/products";
import { ProductCard } from "@/components/site";

type Filter = "all" | "candle" | "hamper";
type Sort = "featured" | "low" | "high";

export function Catalogue({ base, filters = true }: { base: Product[]; filters?: boolean }) {
  const [f, setF] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("featured");
  let list = base.filter((p) => f === "all" || p.category === f);
  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        {filters ? (
          <div className="flex gap-2" role="group" aria-label="Filter by category">
            {(["all", "candle", "hamper"] as Filter[]).map((k) => (
              <button key={k} aria-pressed={f === k} onClick={() => setF(k)} className={`px-4 py-2 text-xs uppercase tracking-[0.18em] ${f === k ? "bg-espresso text-ivory" : "border"}`}>
                {k === "all" ? "All" : k === "candle" ? "Candles" : "Hampers"}
              </button>
            ))}
          </div>
        ) : <p className="text-sm text-muted-foreground">{list.length} items</p>}
        <label className="text-xs uppercase tracking-[0.18em]">Sort{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="ml-2 border bg-card px-2 py-1.5 normal-case tracking-normal">
            <option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option>
          </select>
        </label>
      </div>
      {list.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">No products match this filter yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      )}
    </section>
  );
}

export const all = products;
