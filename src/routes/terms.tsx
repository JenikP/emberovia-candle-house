import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Placeholder, Prose, meta } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms & Conditions", "Terms and conditions for the EMBEROVIA store."),
  component: () => (
    <>
      <PageHero eyebrow="Information" title="Terms & Conditions" />
      <Prose>
        <p>This website is currently a preview. Products, descriptions, images and prices are illustrative and may change. No orders can be placed and no contract of sale is formed through this site at this time.</p>
        <p>All prices are shown in Australian dollars (AUD).</p>
        <p><Placeholder>[Full terms of sale, payment, and PayID verification terms to be provided — legal review recommended]</Placeholder></p>
      </Prose>
    </>
  ),
});
