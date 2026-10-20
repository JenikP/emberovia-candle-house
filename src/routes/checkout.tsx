import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { getProduct, formatAUD } from "@/config/products";
import { store } from "@/config/store";
import { meta } from "@/components/site";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => meta("Demo Checkout", "Preview Emberovia's customer details, delivery and CommBank PayID checkout."),
  component: Page,
});

// These inputs are deliberately client-only until secure order storage exists.
// Production delivery prices must come from approved rates / courier quotes.
function Page() {
  const cart = useCart();
  const navigate = useNavigate();
  const [method, setMethod] = useState<"pickup" | "shipping">("shipping");
  const [details, setDetails] = useState({
    name: "", email: "", phone: "", address: "", suburb: "", state: "VIC", postcode: "",
  });
  const [showReview, setShowReview] = useState(false);
  const update = (key: keyof typeof details, value: string) => {
    setDetails((current) => ({ ...current, [key]: value }));
    setShowReview(false);
  };
  const validPostcode = /^[0-9]{4}$/.test(details.postcode);
  const addressComplete = method === "pickup" || (
    details.address.trim().length > 2 && details.suburb.trim().length > 1 && validPostcode
  );
  const shippingQuoteReady = method === "pickup";
  const deliveryCharge = method === "pickup" ? 0 : null; // No guessed delivery rates.
  const grandTotal = deliveryCharge === null ? null : cart.subtotal + deliveryCharge;

  if (cart.ready && cart.lines.length === 0) {
    return <div className="px-4 py-24 text-center"><h1 className="text-4xl">Your cart is empty</h1><Link to="/candles" className="btn-primary mt-6">Explore jar candles</Link></div>;
  }

  const review = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!addressComplete) return;
    setShowReview(true);
  };
  const showDemo = () => {
    // No data is transmitted, stored or included in the URL.
    // Demo reference is not a genuine order or payment reference.
    navigate({ to: "/order-confirmation", search: {
      ref: "DEMO-PREVIEW", total: cart.subtotal.toFixed(2), method,
    } });
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[minmax(0,1fr)_360px] md:px-8">
      <div>
        <p className="eyebrow">Secure checkout planning · demonstration only</p>
        <h1 className="mt-2 text-5xl">Checkout</h1>
        <div className="mt-6 border border-gold bg-card p-5 text-sm leading-relaxed" role="status">
          <strong>Test mode — do not enter real personal information or make payments.</strong>
          {" "}This form demonstrates the future checkout. Nothing is submitted, stored or sent to Emberovia.
          Shipping rates and the CommBank business PayID have not been configured.
        </div>
        <form onSubmit={review} className="mt-8 space-y-9">
          <fieldset className="space-y-4">
            <legend className="font-display text-3xl">1. Customer contact</legend>
            <p className="text-sm text-muted-foreground">Use sample details while testing. Real contact collection requires secure order storage and a privacy notice.</p>
            <label className="block text-sm">Full name
              <input required autoComplete="off" value={details.name} onChange={(e) => update("name", e.target.value)}
                className="mt-2 w-full border bg-card p-3" placeholder="Sample Customer" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">Email
                <input type="email" required autoComplete="off" value={details.email} onChange={(e) => update("email", e.target.value)}
                  className="mt-2 w-full border bg-card p-3" placeholder="example@example.com" />
              </label>
              <label className="block text-sm">Phone number
                <input type="tel" required autoComplete="off" value={details.phone} onChange={(e) => update("phone", e.target.value)}
                  className="mt-2 w-full border bg-card p-3" placeholder="0400 000 000" />
              </label>
            </div>
          </fieldset>
          <fieldset className="space-y-4">
            <legend className="font-display text-3xl">2. Delivery method</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {(["pickup", "shipping"] as const).map((option) => (
                <label key={option} className="flex cursor-pointer items-start gap-3 border bg-card p-4">
                  <input type="radio" name="delivery-method" checked={method === option}
                    onChange={() => { setMethod(option); setShowReview(false); }} />
                  <span><strong>{option === "pickup" ? "Local pickup" : "Delivery"}</strong>
                    <small className="mt-1 block text-muted-foreground">
                      {option === "pickup" ? "Free · pickup address/hours to be confirmed" : "Rate calculated after shipping rules are configured"}
                    </small>
                  </span>
                </label>
              ))}
            </div>
            {method === "shipping" && (
              <div className="space-y-4 border bg-card p-5">
                <h2 className="font-display text-2xl">Delivery address</h2>
                <label className="block text-sm">Street address
                  <input required autoComplete="off" value={details.address} onChange={(e) => update("address", e.target.value)}
                    className="mt-2 w-full border bg-background p-3" placeholder="Street and house number" />
                </label>
                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="block text-sm">Suburb
                    <input required autoComplete="off" value={details.suburb} onChange={(e) => update("suburb", e.target.value)}
                      className="mt-2 w-full border bg-background p-3" />
                  </label>
                  <label className="block text-sm">State
                    <select value={details.state} onChange={(e) => update("state", e.target.value)} className="mt-2 w-full border bg-background p-3">
                      {["VIC", "NSW", "ACT", "QLD", "SA", "WA", "TAS", "NT"].map((state) => <option key={state}>{state}</option>)}
                    </select>
                  </label>
                  <label className="block text-sm">Postcode
                    <input required inputMode="numeric" maxLength={4} pattern="[0-9]{4}" autoComplete="off"
                      value={details.postcode} onChange={(e) => update("postcode", e.target.value)}
                      className="mt-2 w-full border bg-background p-3" placeholder="3000" />
                  </label>
                </div>
                {validPostcode && <p className="text-sm text-muted-foreground">
                  Delivery to {details.suburb || "your suburb"}, {details.state} {details.postcode}: rate pending configuration.
                </p>}
              </div>
            )}
          </fieldset>
          <section>
            <h2 className="font-display text-3xl">3. CommBank PayID</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Future checkout: confirm your order, receive a unique reference, then pay using PayID in your banking app.
              The transfer must be verified in the business bank account before the order is marked paid.
              Do not send a payment now. No PayID is active on this preview.
            </p>
          </section>
          <button type="submit" className="btn-primary w-full sm:w-auto">Review demo details</button>
        </form>
        {showReview && <section className="mt-8 border border-gold bg-card p-6" aria-live="polite">
          <h2 className="font-display text-2xl">Review · test only</h2>
          <p className="mt-2 text-sm">Customer: {details.name} · {details.email}</p>
          <p className="mt-1 text-sm">Method: {method === "pickup" ? "Local pickup" : "Delivery"}</p>
          {method === "shipping" && <p className="mt-1 text-sm">Destination: {details.suburb}, {details.state} {details.postcode}</p>}
          <p className="mt-3 font-medium">
            {shippingQuoteReady ? "Pickup is free." : "Delivery cost is not available until shipping rates are configured."}
          </p>
          <p className="mt-2 text-sm">No order can be submitted or paid from this preview.</p>
          <button type="button" className="btn-outline mt-5" onClick={showDemo}>View sample PayID instructions (no payment)</button>
        </section>}
      </div>
      <aside className="h-fit border bg-card p-6 md:sticky md:top-28">
        <h2 className="text-2xl">Order summary</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {cart.lines.map((line) => { const p = getProduct(line.slug)!; return (
            <li key={line.slug} className="flex justify-between gap-3">
              <span>{p.name} × {line.qty}</span><span>{formatAUD(p.price * line.qty)}</span>
            </li>
          ); })}
        </ul>
        <div className="mt-5 flex justify-between border-t pt-4"><span>Subtotal</span><span>{formatAUD(cart.subtotal)}</span></div>
        <div className="mt-3 flex justify-between gap-4 text-sm"><span>{method === "pickup" ? "Local pickup" : "Delivery"}</span>
          <span className="text-right">{deliveryCharge === null ? "Quote pending" : "Free"}</span></div>
        <div className="mt-4 flex justify-between border-t pt-4 font-medium">
          <span>{grandTotal === null ? "Final total" : "Demo total"}</span>
          <span>{grandTotal === null ? "Pending shipping" : formatAUD(grandTotal)}</span>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Indicative AUD prices. No payment can be made; no order is created.</p>
        <Link to="/cart" className="mt-4 inline-block text-sm underline">Edit cart</Link>
      </aside>
    </div>
  );
}
