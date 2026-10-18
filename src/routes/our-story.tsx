import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, meta } from "@/components/site";

export const Route = createFileRoute("/our-story")({
  head: () => meta("Our Story", "The story behind EMBEROVIA — handmade luxury candles poured in small batches in Melbourne."),
  component: () => (
    <>
      <PageHero eyebrow="Our story" title="Where Every Flame Tells a Story" />
      <Prose>
        <p className="font-display text-2xl italic">EMBEROVIA began with a simple belief: that light, shared, makes every moment more meaningful.</p>
        <p>From a small studio in Melbourne, each candle is blended, hand-poured and finished in small batches. Our fragrances draw on rich traditions — rose and saffron, jasmine and sandalwood — reimagined with a modern, fragrance-house sensibility.</p>
        <p>Our seasonal hampers bring together candles and thoughtfully chosen treats, so celebrations like Diwali can be shared with the people you love.</p>
        <p className="text-sm text-muted-foreground">[Founder story to be provided by the owner.]</p>
      </Prose>
    </>
  ),
});
