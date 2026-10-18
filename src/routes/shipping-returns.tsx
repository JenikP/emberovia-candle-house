import { createFileRoute } from "@tanstack/react-router";
import { store } from "@/config/store";
import { PageHero, Placeholder, Prose, meta } from "@/components/site";

export const Route = createFileRoute("/shipping-returns")({
  head: () => meta("Shipping & Returns", "Shipping, pickup and returns information for EMBEROVIA orders."),
  component: () => (
    <>
      <PageHero eyebrow="Information" title="Shipping & Returns" />
      <Prose>
        <h2>Shipping</h2>
        <p>Rates and zones: <Placeholder>{store.fulfilment.shipping}</Placeholder></p>
        <p>Dispatch: <Placeholder>{store.fulfilment.dispatch}</Placeholder></p>
        <h2>Local pickup</h2>
        <p><Placeholder>{store.fulfilment.pickup}</Placeholder></p>
        <h2>Returns</h2>
        <p>Your rights under the Australian Consumer Law are not affected. If an item arrives damaged or faulty, contact us promptly. <Placeholder>[Full returns policy to be provided]</Placeholder></p>
        <p>For hygiene and food safety reasons, food items in hampers cannot be returned unless faulty. <Placeholder>[To be confirmed]</Placeholder></p>
      </Prose>
    </>
  ),
});
