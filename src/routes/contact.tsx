import { createFileRoute } from "@tanstack/react-router";
import { store } from "@/config/store";
import { PageHero, Placeholder, Prose, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact & Enquiries", "Get in touch with EMBEROVIA about candles, Diwali hampers and gifting enquiries."),
  component: () => (
    <>
      <PageHero eyebrow="Enquiries" title="Contact Us">Questions about our candles or registering interest in a hamper? We'd love to hear from you.</PageHero>
      <Prose>
        <p>Email: <Placeholder>{store.contactEmail}</Placeholder></p>
        <p>Instagram: <Placeholder>{store.instagram}</Placeholder></p>
        <p>Based in {store.city}. Pickup: <Placeholder>{store.fulfilment.pickup}</Placeholder></p>
        <p className="text-sm text-muted-foreground">An online enquiry form will be added once secure message handling is set up. Please don't send personal or payment details until official contact details are published.</p>
      </Prose>
    </>
  ),
});
