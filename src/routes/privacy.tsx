import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Placeholder, Prose, meta } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy Policy", "How EMBEROVIA handles your personal information."),
  component: () => (
    <>
      <PageHero eyebrow="Information" title="Privacy Policy" />
      <Prose>
        <p>This preview store does not collect personal information. Your demo cart is stored only in your own browser and can be cleared at any time.</p>
        <p>Before ordering opens, this policy will describe what information we collect (such as name, contact and delivery details), why, how it is stored securely and your rights under the Australian Privacy Principles.</p>
        <p><Placeholder>[Full privacy policy to be provided — legal review recommended]</Placeholder></p>
      </Prose>
    </>
  ),
});
