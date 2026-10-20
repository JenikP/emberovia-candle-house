import { createFileRoute, Link } from "@tanstack/react-router";
import { formatAUD } from "@/config/products";
import { store } from "@/config/store";
import { meta } from "@/components/site";

export const Route = createFileRoute("/order-confirmation")({
  validateSearch: (s: Record<string, unknown>) => ({
    ref: typeof s["ref"] === "string" ? s["ref"].slice(0, 20) : "",
    total: typeof s["total"] === "string" ? s["total"] : "0",
    method: s["method"] === "shipping" ? "shipping" : "pickup",
  }),
  head: () => ({ ...meta("Demo Order Confirmation", "Preview of the EMBEROVIA PayID payment instructions."), }),
  component: Page,
});

function Page() {
  const { ref, total } = Route.useSearch();
  const amount = Number(total) || 0;
  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <p className="eyebrow">Demo only — no order placed</p>
      <h1 className="mt-2 text-5xl">Order confirmation (preview)</h1>
      <div className="mt-6 border border-destructive bg-card p-5 text-sm">
        <strong>Do not make a payment.</strong> This is a demonstration. No order has been created, and the business PayID has not been provided yet.
      </div>
      <dl className="mt-8 divide-y border-y text-sm">
        <div className="flex justify-between py-3"><dt>Status</dt><dd>Demo only — no order exists</dd></div>
        <div className="flex justify-between py-3"><dt>Order reference</dt><dd className="font-mono">{ref || "—"} <span className="text-xs text-muted-foreground">(demo, not unique)</span></dd></div>
        <div className="flex justify-between py-3"><dt>Illustrative subtotal (excl. delivery)</dt><dd>{formatAUD(amount)}</dd></div>
        <div className="flex justify-between gap-4 py-3"><dt>Pay to PayID</dt><dd className="text-right font-semibold">Not configured — do not transfer funds</dd></div>
      </dl>
      <h2 className="mt-10 text-3xl">How PayID payment will work</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
        <li>Open your banking app and choose “Pay to PayID”.</li>
        <li>Enter the business PayID shown on your real order confirmation (not yet available).</li>
        <li>Transfer the exact amount due.</li>
        <li>In the description, enter <strong>only your unique order reference</strong> so the payment can be matched.</li>
        <li>Your order stays “pending verification” until the owner confirms the funds in the business account. Clicking a button does not confirm payment.</li>
      </ol>
      <Link to="/" className="btn-primary mt-10">Back to home</Link>
    </div>
  );
}
