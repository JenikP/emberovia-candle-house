import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, meta } from "@/components/site";

export const Route = createFileRoute("/candle-safety")({
  head: () => meta("Candle Safety", "General candle care and safety guidance for enjoying EMBEROVIA candles."),
  component: () => (
    <>
      <PageHero eyebrow="Care" title="Candle Safety" />
      <Prose>
        <ul>
          <li>Never leave a burning candle unattended.</li>
          <li>Keep away from children, pets, curtains and anything flammable.</li>
          <li>Burn on a stable, heat-resistant surface, away from draughts.</li>
          <li>Trim the wick to about 5mm before each lighting.</li>
          <li>Stop use when around 1cm of wax remains.</li>
          <li>Extinguish fully before leaving the room or going to sleep.</li>
        </ul>
        <p className="text-sm text-muted-foreground">General guidance only. Product-specific warnings and burn guidance will be added once testing is complete.</p>
      </Prose>
    </>
  ),
});
