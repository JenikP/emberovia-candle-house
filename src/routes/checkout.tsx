import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, formatAUD } from "@/config/products";
import { store } from "@/config/store";
import { meta } from "@/components/site";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => meta("Demo Checkout", "Preview of the EMBEROVIA PayID checkout flow. Ordering is not yet enabled."),
  component: Page,
});

function Page() {
  const cart = useCart();
  const nav = useNavigate();
  const [method, setMethod] = useState<"pickup" | "shipping">("pickup");
  if (cart.ready && cart.lines.length === 0)
    return <div className="px-4 py-24 text-center"><h1 className="text-4xl">Nothing to check out</h1><Link to="/candles" className="btn-primary mt-6">Shop candles</Link></div>;

  const demoOrder = () => {
    // DEMO reference only — not guaranteed unique, not stored anywhere.
    const ref = `DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    nav({ to: "/order-confirmation", search: { ref, total: cart.subtotal.toFixed(2), method } });
  };

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 md:grid-cols-[1fr_340px] md:px-8">
      <div>
        <p className="eyebrow">Demo checkout</p>
        <h1 className="mt-2 text-5xl">Checkout</h1>
        <div className="mt-6 border border-gold bg-card p-5 text-sm leading-relaxed">
          <strong>Ordering is not yet enabled.</strong> This is a demonstration of the planned flow. No personal details are collected, no order is submitted, and no payment should be made.
        </div>
        <fieldset className="mt-8">
          <legend className="font-display text-2xl">Fulfilment</legend>
          {(["pickup", "shipping"] as const).map((m) => (
            <label key={m} className="mt-3 flex cursor-pointer gap-3 border bg-card p-4">
              <input type="radio" name="method" checked={method === m} onChange={() => setMethod(m)} />
              <span><span className="block font-medium capitalize">{m === "pickup" ? "Local pickup" : "Shipping"}</span><span className="text-sm text-muted-foreground">{m === "pickup" ? store.fulfilment.pickup : store.fulfilment.shipping}</span></span>
            </label>
          ))}
        </fieldset>
        <section className="mt-8">
          <h2 className="text-2xl">Contact & delivery details</h2>
          <p className="mt-2 text-sm text-muted-foreground">Disabled in preview. Contact and address fields will be enabled only once secure order storage is in place.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl">Payment — PayID bank transfer</h2>
          <p className="mt-2 text-sm text-muted-foreground">Payment will be by manual PayID transfer only. After placing an order you'll receive a unique order reference to use as the transfer description. Orders remain pending until the owner verifies the transfer in the business bank account.</p>
        </section>
        <button onClick={demoOrder} className="btn-primary mt-8 w-full sm:w-auto">Preview demo confirmation</button>
      </div>
      <aside className="h-fit border bg-card p-6">
        <h2 className="text-2xl">Summary</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {cart.lines.map((l) => { const p = getProduct(l.slug)!; return <li key={l.slug} className="flex justify-between"><span>{p.name} × {l.qty}</span><span>{formatAUD(p.price * l.qty)}</span></li>; })}
        </ul>
        <div className="mt-4 flex justify-between border-t pt-3"><span>Subtotal</span><span>{formatAUD(cart.subtotal)}</span></div>
        <p className="mt-2 text-xs text-muted-foreground">Delivery: to be confirmed. AUD, suggested prices.</p>
      </aside>
    </div>
  );
}
