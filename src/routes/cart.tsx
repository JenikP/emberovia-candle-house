import { createFileRoute, Link } from "@tanstack/react-router";
import { getProduct, formatAUD } from "@/config/products";
import { QtySelector, meta } from "@/components/site";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => meta("Your Cart", "Review items in your EMBEROVIA demo cart."),
  component: Page,
});

function Page() {
  const cart = useCart();
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 md:px-8">
      <h1 className="text-5xl">Your cart</h1>
      <p className="mt-2 text-sm text-muted-foreground">Demo cart — saved only in this browser. Ordering is not yet enabled.</p>
      {!cart.ready ? (
        <div className="mt-10 space-y-4" aria-busy="true" aria-label="Loading cart">{[0, 1].map((i) => <div key={i} className="h-24 animate-pulse bg-muted" />)}</div>
      ) : cart.lines.length === 0 ? (
        <div className="mt-10 border bg-card p-12 text-center">
          <p className="font-display text-2xl">Your cart is empty</p>
          <p className="mt-2 text-sm text-muted-foreground">Discover our signature candle range.</p>
          <Link to="/candles" className="btn-primary mt-6">Shop candles</Link>
        </div>
      ) : (
        <>
          <ul className="mt-10 divide-y border-y">
            {cart.lines.map((l) => {
              const p = getProduct(l.slug)!;
              return (
                <li key={l.slug} className="flex flex-wrap items-center justify-between gap-4 py-5">
                  <div><Link to="/product/$slug" params={{ slug: p.slug }} className="font-display text-2xl">{p.name}</Link><p className="text-sm text-muted-foreground">{formatAUD(p.price)} each</p></div>
                  <div className="flex items-center gap-5">
                    <QtySelector value={l.qty} onChange={(n) => cart.setQty(l.slug, n)} label={p.name} />
                    <span className="w-24 text-right">{formatAUD(p.price * l.qty)}</span>
                    <button onClick={() => cart.remove(l.slug)} className="text-xs underline" aria-label={`Remove ${p.name}`}>Remove</button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="ml-auto mt-8 max-w-sm space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatAUD(cart.subtotal)}</span></div>
            <div className="flex justify-between text-muted-foreground"><span>Shipping / pickup</span><span className="text-right">Calculated at checkout when rates are available</span></div>
            <div className="flex justify-between border-t pt-2 text-lg"><span>Indicative subtotal</span><span>{formatAUD(cart.subtotal)}</span></div>
            <p className="text-xs text-muted-foreground">Prices in AUD; suggested and not final.</p>
            <Link to="/checkout" className="btn-primary mt-4 w-full">Enter delivery details</Link>
          </div>
        </>
      )}
    </div>
  );
}
