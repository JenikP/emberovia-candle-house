# Emberovia Candle House

Build a polished, fully responsive, multi-page storefront MVP for EMBEROVIA, a Melbourne handmade luxury candle and seasonal gift hamper brand. IMPORTANT: one coherent build pass, minimise Lovable credit use, avoid follow-up agent tasks, third-party paid services, and unnecessary integrations. Do not publish/deploy publicly. Deliver working navigable preview, clean code and accessible mobile-first UI.

BRAND: EMBEROVIA — "Where Every Flame Tells a Story." Luxury fragrance-house aesthetic. Palette espresso #332A25, gold #B68A50, champagne #D7C2A5, ivory #F6F0E6, mocha #785B4F. Elegant serif display and clean sans body. Use high-quality legally usable imagery or well-designed placeholders (do not misrepresent stock photos as actual products). Existing logo is not attached; create refined editable text wordmark with subtle flame symbol to replace with final logo later. Currency AUD; Australian English.

SITE: Home, Diwali Hampers, Luxury Candles, Gifts, Our Story, Contact, Cart, Checkout and Order Confirmation, plus basic Shipping/Returns, Privacy, Terms, Candle Safety information. Sticky responsive navigation, footer, great SEO metadata, accessibility, empty and loading states. Homepage CURRENT CAMPAIGN prominently Diwali: hero "Celebrate Diwali with the Gift of Light", supporting copy "Discover handcrafted luxury candles and thoughtfully curated gift hampers designed to make every celebration unforgettable", CTAs Shop Diwali Hampers / Explore Luxury Candles, two featured hampers, signature candle range, handmade story and gifting. Seasonal content should be easy to replace after Diwali without redesign.

PRODUCTS (all illustrative/editable, clearly marked suggested and not final): Classic Diwali Hamper $69: 2 handmade candles, assorted Indian sweets from external sweet-shop supplier, greeting card, ivory-gold packaging. Royal Diwali Hamper $149: candles, assorted dry fruits, Indian sweets sourced from sweet shop, decorative battery LED diya, personalised greeting card, premium box. NO fireworks. Four 220g proposed candles: Velvet Ember rose/oud/saffron $39.95; Ivory Bloom vanilla/peony/amber $39.95; Moon Veil jasmine/musk/sandalwood $42.95; Golden Aura bergamot/coconut/cedar $39.95. Product cards, filters/categories, detailed pages, quantity selectors, cart with totals. No false verified burn times, certifications, inventory, reviews, or delivery promises. Hampers must be clearly marked 'Coming soon / Enquire' and disabled for actual checkout pending supplier food safety, ingredients, allergens, dates, labelling, storage, local council compliance. Allow editing those fields later. Candle items likewise clearly demo until operational readiness.

PAYMENT FLOW: plan manual PayID only, NO Stripe/PayPal. Business PayID is UNKNOWN: prominently display configurable placeholder [BUSINESS PAYID TO BE PROVIDED], never suggest a transfer to the placeholder. Customer order references unique when working persistence is implemented; transfer description must be their unique order reference, not simply "what they want." Show amount due, payment instructions, pending verification; only owner may mark paid after inspecting actual bank transfer. No automatic proof of payment based on customer click. SECURITY: DO NOT claim checkout is operational if orders cannot be securely persisted. For initial free-plan MVP implement fully interactive client-side demo/cart and labelled DEMO checkout only; no collection or persistence of real personal contact/address data, no production order submissions until authenticated backend order storage, admin access control, real PayID and fulfilment details are configured. Prefer zero backend setup in initial pass to minimise credits; a tasteful banner 'Preview store — ordering not yet enabled'. Do not create public unauthenticated admin edit controls or fake admin auth. Keep product data in straightforward configuration file for owner to update. Add editable shipping/pickup placeholders, not fabricated shipping prices.

Provide polished full website now, with all pages and working client-side catalogue/cart interactions. In completion report explicitly state what's implemented, any demos/placeholders and launch blockers. Do not initiate additional autonomous modification passes and do not deploy/publish.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://emberovia-candle-house.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/def226de-a070-4484-8e7d-371e71ca83d2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
