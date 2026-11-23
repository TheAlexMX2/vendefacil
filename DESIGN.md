---
name: VendeFácil
description: Online store builder for independent Mexican merchants launching mobile-ready storefronts for $99 MXN/month with 0% platform commission.
colors:
  forest-teal: "#156563"
  forest-teal-deep: "#104E4D"
  forest-teal-soft: "#EEF6F5"
  forest-teal-border: "#D6ECEA"
  teal-highlight: "#5CC4BF"
  teal-emblem: "#2D9B97"
  warm-stone-ground: "#F6F4F1"
  pure-white: "#FFFFFF"
  warm-alabaster: "#FAF9F7"
  warm-sand-section: "#F3F1ED"
  warm-paper-subtle: "#EFECE6"
  warm-sand-muted: "#E6E2DA"
  stone-hairline: "#E6E4DF"
  stone-border-strong: "#D5D1C9"
  input-border: "#DCD9D2"
  charcoal-ink: "#14151A"
  ink-secondary: "#4B4B52"
  ink-ui-body: "#3F3F46"
  ink-muted: "#6E6D74"
  footer-ink-light: "#D4D2CC"
  footer-ink-muted: "#A8A6A0"
  device-bezel: "#16171C"
typography:
  display:
    fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "2.8125rem"
    fontWeight: 700
    lineHeight: 1.11
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Figtree, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  device-screen: "28px"
  device-frame: "34px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
  section: "80px"
  section-lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.forest-teal}"
    textColor: "{colors.pure-white}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-primary-hover:
    backgroundColor: "{colors.forest-teal-deep}"
  button-secondary:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.charcoal-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  button-secondary-active:
    backgroundColor: "{colors.forest-teal}"
    textColor: "{colors.pure-white}"
  step-tab:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 10px"
  step-tab-active:
    backgroundColor: "{colors.forest-teal-soft}"
    textColor: "{colors.charcoal-ink}"
  card-builder:
    backgroundColor: "{colors.pure-white}"
    rounded: "{rounded.xl}"
    width: "604px"
  card-pricing:
    backgroundColor: "{colors.pure-white}"
    rounded: "{rounded.xl}"
    padding: "40px"
  input-field:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.charcoal-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  phone-mockup:
    backgroundColor: "{colors.device-bezel}"
    rounded: "{rounded.device-frame}"
    padding: "7px"
    width: "258px"
  nav-bar:
    backgroundColor: "{colors.warm-stone-ground}"
    textColor: "{colors.charcoal-ink}"
    height: "60px"
  modal-dialog:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.xl}"
    padding: "32px"
  toast-banner:
    backgroundColor: "{colors.charcoal-ink}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
---

# Design System: VendeFácil

## Overview

**Creative North Star: "The Grounded Commerce Workbench"**

VendeFácil's visual system translates the *Estándar E-Commerce Moderno* direction (`seed:41262e3186daad91`, approved decision comp `.impeccable/mocks/decision/canon.png`) into a calm, tangible storefront workbench built for independent Mexican makers and micro-merchants. Rather than asking visitors to read marketing claims first, the system treats the interactive editor and live mobile storefront as the primary proof above the fold—grounding digital commerce in tactile warm-stone paper tones, crisp 1px borders, and straightforward Mexican Spanish copy.

While the direction brief initially sketched cooler stone-slate defaults (`#FAFAF9` / `#111827` / `#0F766E`), the shipped build intentionally anchors on a warmer paper ground (`#F6F4F1`), deeper charcoal ink (`#14151A`), and rich forest teal (`#156563`) paired with self-hosted `Figtree` variable typography. Depth is earned structurally through surface alternation and hairline rules, reserving soft charcoal-tinted elevation strictly for the interactive builder card, handheld smartphone frame, toast banner, and modal dialogs.

The system enforces a clear visual rejection of generic AI-SaaS tropes: zero purple or violet gradients, zero neon glow halos, zero dark-mode glassmorphism cards, zero eyebrows or kickers above headings, and zero fabricated merchant counts or fake customer testimonials. Illustrative storefront presets use real studio photography labeled transparently as live interactive demos (`Ejemplos interactivos de muestra`).

**Key Characteristics:**
- Warm stone-paper canvas (`#F6F4F1`) alternating cleanly with pure white (`#FFFFFF`) and warm sand (`#F3F1ED`) bands
- Single disciplined forest-teal action accent (`#156563`) reserved for conversion CTAs, active step/selection states, and focus signals
- Self-hosted `Figtree` sans-serif across every scale with `tabular-nums` locking all MXN prices and step indices
- Side-by-side live workbench pairing a 4-step editor card (`604px`) with a live dark-bezel smartphone preview (`258px`) in the opening viewport
- Honest interactive demo labeling and zero synthetic social-proof claims

## Colors

Warm stone-paper surfaces anchor high-contrast charcoal typography and a single, authoritative forest-teal action accent.

### Primary
- **Forest Teal** (`forest-teal`): Primary brand action fill (`--accent`) used exclusively for conversion CTAs (`Crear mi tienda`, `Publicar esta tienda por $99 MXN/mes`, `Comenzar ahora por $99 MXN`), active step indicators, the `Disponible` subdomain indicator, check icons, browser text selection, input carets, and `:focus-visible` outlines.
- **Deep Forest Teal** (`forest-teal-deep`): Hover darken state (`--accent-hover`) for all solid primary buttons and inline teal links (`Probar ahora en el editor`), plus readable foreground ink inside soft-teal magic-link notices.
- **Mint-Teal Tint** (`forest-teal-soft`): Subtle pale-teal wash (`--accent-soft`) for drag-over photo dropzones, modal success icon wells, password-reset confirmations, and the active step-rail tab surface (`#EEF5F4` variant in the builder rail).
- **Teal Notice Border** (`forest-teal-border`): Crisp 1px perimeter border framing `forest-teal-soft` confirmation containers and info alerts inside modals.
- **Dark-Surface Teal** (`teal-highlight`): High-visibility light teal used only for check and WhatsApp icons sitting on `#14151A` dark surfaces (toast notifications and footer support link).
- **Emblem Teal** (`teal-emblem`): Diagonal accent slash inside the VendeFácil `V` vector emblem and browser favicon.

### Neutral
- **Warm Stone Ground** (`warm-stone-ground`): Primary page body background (`--bg-ground`), translucent sticky header backdrop (`95%` opacity with blur), opening hero ground, and store examples section backdrop.
- **Pure White** (`pure-white`): Elevated workbench surface (`--bg-surface`), `HowItWorks` band, unified `Pricing` card, modal dialogs, text/price inputs, and secondary outlined buttons.
- **Warm Alabaster** (`warm-alabaster`): Recessed sub-panels including the builder left step rail, the `Pricing` left tier column, and modal summary/URL boxes.
- **Warm Sand Section** (`warm-sand-section`): Full-bleed background for the `Pricing` section, custom scrollbar track, subtle icon-button hover states, and thumbnail fallback containers.
- **Warm Paper Subtle** (`warm-paper-subtle`): Internal hairline divider inside the mobile storefront preview header (`--bg-subtle`).
- **Warm Sand Muted** (`warm-sand-muted`): Placeholder frame background behind 4:3 photography in `StoreExamples`.
- **Stone Hairline** (`stone-hairline`): Primary structural 1px border (`--border-subtle`) dividing sections, cards, header bottom edge, and modal headers.
- **Strong Stone Border** (`stone-border-strong`): Higher-contrast 1px border for secondary outlined buttons, dashed logo/photo upload boxes, builder brand underline at rest, and numbered step badges.
- **Input Stroke** (`input-border`): 1px resting perimeter stroke for boxed text and numeric MXN inputs.
- **Charcoal Ink** (`charcoal-ink`): Primary text ink (`--ink-primary`), dark footer background, toast background, header emblem badge, and active color-swatch outer ring.
- **Slate Secondary Ink** (`ink-secondary`): Section lead paragraphs, step explanations, modal descriptions, and feature copy (`--ink-secondary`).
- **UI Label Charcoal** (`ink-ui-body`): Desktop navigation links, hero subtitle, and builder form field labels.
- **Muted Stone Ink** (`ink-muted`): Metadata captions, `MXN` currency suffix, uppercase checklist headers, leading input icons, and encryption notices (`--ink-muted`).
- **Footer Light Ink** (`footer-ink-light`) & **Footer Muted Ink** (`footer-ink-muted`): Legible warm-gray inks on `#14151A` footer surfaces.
- **Device Bezel** (`device-bezel`): Hardware frame and dynamic notch housing the live mobile storefront preview (edged by `#2D2F38`).

Note on merchant preview swatches: the six store-theme color swatches in `src/data/presets.js` (`#156563`, `#1C2434`, `#147A5C`, `#E8E2D8`, `#3B627E`, `#6B4B3A`) apply exclusively inside `PhoneMockup` to style the merchant's live preview store, with `#147A5C` also serving as the simulated checkout confirmation fill (`Pedido de prueba listo`). Minor un-tokenized neutral variants (`#52525B`, `#78716C`, `#9A9891`, `#FAFAF9`) remain in isolated classes in the first build and should consolidate back to the canonical tokens above on future passes.

### Named Rules
**The Single-Accent Discipline Rule.** Forest teal (`#156563`) is reserved exclusively for primary conversion CTAs, active step or selection states, inline action links, and system focus/caret signals—never decorative backgrounds or competing secondary hues.
**The Warm Stone Separation Rule.** Adjacent bands alternate deliberately across `#F6F4F1`, `#FFFFFF`, and `#F3F1ED` bounded by 1px `#E6E4DF` hairlines so sections separate clearly without cool-gray sterility or heavy shadows.

## Typography

**Display Font:** Figtree (self-hosted variable WOFF2, weights 400–800, fallback: `system-ui, -apple-system, 'Segoe UI', sans-serif`)
**Body Font:** Figtree (self-hosted variable WOFF2, weights 400–800, fallback: `system-ui, -apple-system, 'Segoe UI', sans-serif`)

**Character:** Geometric warmth meets crisp Mexican-Spanish legibility—tight negative tracking on bold headings gives commercial authority, while open apertures and tabular numerals keep MXN pricing scannable at every size. Numeric precision is handled uniformly by `Figtree` with `.tabular-nums`.

### Hierarchy
- **Display** (`700`, `26px` mobile / `40px` sm / `45px` lg, `1.11` line-height, `-0.025em` tracking, `text-wrap: balance`): Hero opening statement (`Tu tienda en línea lista para vender. Sin código, sin comisiones.`), centered above the live builder.
- **Headline** (`700`, `30px` mobile / `36px` sm+, `1.14`–`1.15` line-height, `-0.025em` tracking): Major section headings (`HowItWorks`, `Pricing`, `StoreExamples`), alongside the standalone Plan Lite price figure `$99` (`700`, `52px`, `1.0` line-height, `-0.03em` tracking, `tabular-nums`).
- **Title** (`700`, `18px`–`22px`, `1.25` line-height, `-0.015em` / `-0.01em` tracking): Card, step, and modal headings (`Plan Lite`, `Iniciar sesión`, `Publicar "..."`, editable brand name input at `20px`, and step/example card `h3` titles at `18px`).
- **Body** (`400`–`500`, `14px`–`16px` standard prose with `18.5px` hero subtitle, `1.5`–`1.625` line-height): Section leads (`16px`, constrained to `max-w-[580px]`–`620px` ~65ch measure), step descriptions (`14.5px`), navigation links (`14px`), and modal/footer copy (`13.5px`–`14px`).
- **Label** (`500`–`600`, `11px`–`13.5px`, `1.35` line-height): Form field labels (`12px`–`12.5px`), live subdomain confirmation (`12px`), footer column headers and pricing list headers (`12px` uppercase with `0.06em` letter-spacing), and TrustBar micro-copy (`13.5px`).

### Named Rules
**The Tabular MXN Rule.** Every currency value (`$99`, `$280 MXN`), step badge (`1`–`4`), and cart counter applies `font-variant-numeric: tabular-nums` so typing into live price inputs never causes layout jitter.
**The Kicker-Free Heading Rule.** Hero and section headings (`h1`, `h2`, `h3`) carry their own hierarchy directly—never place uppercase eyebrow or kicker labels above a heading.

## Layout

VendeFácil uses a centered editorial-workbench layout constrained by three intentional container widths over full-bleed warm-stone and white bands:

- **Header Container (`1240px` max width):** Sticky single-row navigation (`60px` desktop height, `56px` mobile) with `20px` (`px-5`) to `32px` (`sm:px-8`) horizontal padding, anchoring the brand mark left and links/CTA right.
- **Hero Workbench (`1140px` max width outer, `890px` inner pair):** Compact top/bottom rhythm (`pt-4 pb-6` mobile, `sm:pt-6 sm:pb-8` desktop) ensures the balanced `h1`, subtitle, paired `StoreBuilderCard` (`604px` on `lg:`) + `PhoneMockup` (`260px` slot, `24px` gap), and the 4-item `TrustBar` (`890px` max width, 2-col mobile / horizontal flex `md:`) all fit cleanly inside the initial `1376x768` desktop fold.
- **Below-the-Fold Editorial Sections (`1040px` max width):** Generous `80px` (`py-20`) to `96px` (`lg:py-24`) vertical breathing room across three asymmetric or balanced grids:
  - `HowItWorks`: 12-column split (`lg:col-span-5` intro sticky-aligned to `lg:col-span-7` divided numbered list, `gap-12 lg:gap-16`).
  - `Pricing`: Single unified 12-column bordered card (`lg:col-span-5` left tier summary in `#FAF9F7` + `lg:col-span-7` feature checklist in `#FFFFFF`).
  - `StoreExamples`: 3-column grid (`grid-cols-1 md:grid-cols-3 gap-8`) on `#F6F4F1` ground.
  - `Footer`: 12-column grid (`lg:col-span-4` brand + `lg:col-span-2` product + `lg:col-span-3` legal + `lg:col-span-3` Spanish WhatsApp/email contact) on `#14151A`.

Responsive breakpoints follow Tailwind's defaults (`sm: 640px`, `md: 768px`, `lg: 1024px`). Below `640px`, the builder's `168px` vertical left step rail collapses into a compact 4-column horizontal tab bar at the top of the card (`grid-cols-4`), and the phone preview stacks vertically centered beneath the builder card.

## Elevation & Depth

This system uses a **hybrid flat-hairline and grounded ambient-shadow model**. Full-bleed sections, `HowItWorks` rows, `Pricing`, and `StoreExamples` sit completely flat against alternating grounds (`#F6F4F1`, `#FFFFFF`, `#F3F1ED`), separated by `1px` stone hairlines (`#E6E4DF`). Soft, charcoal-tinted ambient shadows are reserved exclusively to separate interactive focal anchors (the live workbench, hardware phone frame, modal dialogs, and status toast) from the page plane.

### Shadow Vocabulary
- **Builder Workbench (`shadow-builder`)** (`box-shadow: 0 18px 42px -18px rgba(20, 21, 26, 0.12), 0 2px 6px rgba(20, 21, 26, 0.04)`): Applied solely to `#creador` (`StoreBuilderCard`) to give tactile lift to the primary interactive canvas.
- **Device Mockup (`shadow-phone`)** (`box-shadow: 0 24px 48px -16px rgba(20, 21, 26, 0.24), 0 4px 12px rgba(20, 21, 26, 0.08)`): Grounds the `PhoneMockup` dark-bezel preview as a dimensional mobile device beside the editor.
- **Modal & Toast (`shadow-modal`)** (`box-shadow: 0 28px 60px -20px rgba(20, 21, 26, 0.26), 0 4px 16px rgba(20, 21, 26, 0.08)`): Elevates `PublishModal`, `LoginModal`, footer legal dialogs, and the fixed bottom-right toast banner above `#14151A/55`–`60` `backdrop-blur-sm` overlays.

### Named Rules
**The Hairline-First Rule.** Content sections, pricing modules, and example cards rely on 1px `#E6E4DF` borders and surface alternation rather than drop shadows—avoid stacking shadowed cards inside shadowed containers.
**The Grounded Shadow Rule.** Every elevated shadow derives from low-opacity warm charcoal (`rgba(20, 21, 26, ...)`) with negative spread—never colored glow halos or zero-blur offset blocks.

## Shapes

VendeFácil's form language favors **soft, pragmatic corner radii paired with fine 1px structural borders** rather than razor-sharp edges or pill-everything aesthetics:

- **Interactive Controls (`8px` / `md`):** Primary buttons, secondary buttons, boxed inputs, dashed upload dropzones, preset thumbnails, header brand emblem, and step rail tabs share an `8px` corner radius (`rounded-lg`), creating a tight unified control rhythm.
- **Media & Utility Containers (`12px` / `lg`):** Example 4:3 photo frames, modal summary panels, and the toast notification step up to `12px` (`rounded-xl`).
- **Workbench & Dialog Shells (`16px` / `xl`):** `StoreBuilderCard`, the unified `Pricing` card, and modal dialogs anchor on `16px` (`rounded-2xl`) bounded by `1px` `#E6E4DF` borders.
- **Circular Indicators (`9999px` / `full`):** The 4 step numbers, 6 store theme swatches (`25px`), phone top pill notch (`70x14px`), and live cart counter badge use full circles/pills.
- **Device Hardware (`34px` / `28px`):** `PhoneMockup` pairs a `34px` outer dark bezel (`7px` padding) with a `28px` concentric inner viewport screen.
- **Brand Mark:** A custom geometric SVG `V` monogram inside an `8px`-rounded `#14151A` square (`32x32px` in header; inverted `#FFFFFF` `28x28px` `6px`-rounded square in footer) with white/charcoal stroke and a diagonal `#2D9B97` / `#156563` accent cut.

## Components

### Buttons
Decisive, flat solid-fill primary buttons paired with crisp hairline-bordered secondary actions.
- **Shape:** Gently rounded rectangle (`8px` radius).
- **Primary:** Forest teal `#156563` fill with `#FFFFFF` semibold (`600`) text (`py-2 px-4` at `14px` in Header; `py-2.5 px-4` at `13.5px` on `#publicar-cta`; `py-3 px-5` at `14px` in modals; `py-3.5 px-5` at `15px` in Pricing).
- **Hover / Focus:** Transitions over `200ms` (`cubic-bezier(0.16, 1, 0.3, 1)`) to deep forest teal `#104E4D`, with subtle `active:scale-[0.99]` tactile feedback on `#publicar-cta` and `2px` `#156563` `:focus-visible` outline (`outline-offset: 2px`).
- **Secondary / Ghost:** Pure white `#FFFFFF` fill with `1px` `#D5D1C9` border (`13px` semibold `#14151A` text, `py-2.5 px-3.5` in `StoreExamples`), darkening border to `#14151A` on hover and switching to solid `#156563` white-text confirmation when active (`Cargado en el editor`). Modal secondary copy buttons use `6px` radius (`px-2.5 py-1`).

### Store Builder Card & Step Rail
The core interactive workbench uniting a recessed 4-step navigator with a compact live storefront form.
- **Shape:** Unified split container (`16px` radius, `1px` `#E6E4DF` border, `shadow-builder`, `604px` width on desktop).
- **Step Rail:** Recessed `#FAF9F7` left sidebar (`168px` width, `1px` `#ECEAE4` right border; collapses to a 4-column top strip below `640px`). Active step highlights with `#EEF5F4` background, `#14151A` semibold text, and a `#156563` circular numeric badge; idle tabs stay transparent with `#E5E3DD` circular badges.
- **Controls:** Bottom-bordered `20px` bold editable brand title (`border-b border-[#D5D1C9]`) over live `[slug].vendefacil.online · Disponible` status; dashed `1px` `#D5D1C9` logo uploader (`76x48px`) beside 6 circular `25px` store theme swatches (active swatch wears `ring-2 ring-offset-2 ring-[#14151A]` and inner checkmark); dashed `46px`-tall photo dropzone alongside four `42x46px` preset buttons (`2px` `#156563` active border).

### Inputs / Fields
Clean, high-legibility white text and currency inputs anchored by subtle stone strokes.
- **Style:** `#FFFFFF` fill, `1px` `#DCD9D2` border, `8px` radius, `13.5px`–`14px` `#14151A` text (`tabular-nums` font feature and `$` / `MXN` inline adornments for price fields; `pl-9` for `16px` `#6E6D74` leading icons in modals).
- **Focus:** Shifts border to `#156563` with a soft `2px` `#156563/15` focus ring and `#156563` caret.
- **Disabled / Processing:** Submit triggers reduce opacity to `70%` (`disabled:opacity-70`) while displaying clear Spanish action status (`Conectando con Mercado Pago...`, `Entrando...`).

### Cards / Containers
Flat, hairline-bounded editorial modules and uncluttered media-first example blocks.
- **Corner Style:** `16px` radius on the unified `Pricing` card; `12px` radius on `StoreExamples` 4:3 photography containers (example articles themselves remain frameless below the image).
- **Background:** `#FFFFFF` (`Pricing` checklist column) paired with `#FAF9F7` (`Pricing` left tier column and modal summary blocks); `#E6E2DA` placeholder behind example photography.
- **Shadow Strategy:** Completely flat (`box-shadow: none`), separated via `1px` `#E6E4DF` hairlines.
- **Internal Padding:** `32px` mobile / `40px` `sm:` (`p-8 sm:p-10`) inside `Pricing`; `14px`–`16px` (`p-3.5`–`p-4`) inside modal summary sub-boxes.

### Navigation
Single-row translucent sticky bar balancing immediate brand recognition with low visual noise.
- **Style:** Full-width sticky bar (`h-14 sm:h-[60px]`, `#F6F4F1/95` with `backdrop-blur-sm` and `1px` `#E6E4DF` bottom hairline).
- **Links & States:** `14px` medium `#3F3F46` anchor links (`Cómo funciona`, `Precios`, `Ejemplos`) transitioning to `#14151A` on hover, `Iniciar sesión` action link in `#14151A` shifting to `#156563`, and solid `#156563` `Crear mi tienda` CTA button (`8px` radius).
- **Mobile Treatment:** Under `768px`, swaps desktop links for a compact outlined `Acceder` button and a `Menu`/`X` toggle opening a `#FAFAF9` vertical drawer with full-width primary CTA.

### Live Smartphone Preview (Signature Component)
A realistic, self-contained handheld storefront mockup reflecting every builder edit instantaneously.
- **Frame:** `248px` (`258px` `sm:`) `#16171C` outer bezel (`34px` radius, `7px` padding, `1px` `#2D2F38` rim, `shadow-phone`) wrapping an `overflow-hidden` `#FFFFFF` screen (`28px` radius) and centered `70x14px` dynamic pill notch.
- **Storefront Anatomy:** `12px` bold brand bar with optional uploaded logo + search/shopping-bag icons and dynamic theme-colored cart badge; `126px` darkened hero banner (`bg-black/55`) centering the live brand title in `16px` semibold white; 2-column square product grid (`8px` radius, `#ECEAE4` hairline) with `tabular-nums` MXN pricing; full-width simulated Mercado Pago checkout button inheriting the selected store theme swatch and transitioning over `300ms` to `#147A5C` (`Pedido de prueba listo`).

### Modals & Toast Feedback
Protected-focus confirmation flows and ephemeral status confirmation.
- **Modal Dialogs:** Centered `#FFFFFF` containers (`16px` radius, `1px` `#E6E4DF` border, `shadow-modal`, `p-6 sm:p-8`, `max-w-md`–`lg`) over a `#14151A/55`–`60` `backdrop-blur-sm` scrim, supporting Escape-key dismissal and backdrop click close (`PublishModal`, `LoginModal`, footer legal modals).
- **Toast Banner:** Fixed bottom-right (`bottom-6 right-6`) `#14151A` pill (`12px` radius, `px-4 py-3`, `shadow-modal`, `1px` `white/10` border) with a `16px` `#5CC4BF` checkmark and `13px` `#FFFFFF` status message when loading demo stores.

## Do's and Don'ts

### Do:
- **Do** keep the primary interactive builder (`#creador`) and live `PhoneMockup` preview paired side-by-side above the fold so merchants experience the `$99 MXN/mes` product before scrolling.
- **Do** apply `font-variant-numeric: tabular-nums` to all MXN currency amounts, step badges, and live cart counters.
- **Do** label sample storefronts (`Café Don Pedro`, `Aura Moda`, `Lumina Studio`) explicitly as interactive live demos (`Ejemplos interactivos de muestra`), retaining clear local photography provenance (`assets/plates/`, `assets/stores/`).
- **Do** preserve `::selection`, `caret-color`, `:focus-visible` (`2px solid #156563`), modal Escape/backdrop handlers, and global `@media (prefers-reduced-motion: reduce)` overrides.
- **Do** reserve forest teal (`#156563`) strictly for primary conversion actions, active states, action links, and system focus cues.

### Don't:
- **Don't** introduce purple/violet gradients, glowing neon halos, dark-mode glassmorphism, or hard neobrutalist offset shadows—they violate the *Estándar E-Commerce Moderno* identity.
- **Don't** place uppercase eyebrow or kicker labels above hero or section headings.
- **Don't** fabricate merchant counts, testimonials, uptime claims, or press logos; present only verified `$99 MXN/mes` Plan Lite facts and honest interactive examples.
- **Don't** apply `JetBrains Mono` or decorative monospace typography to UI labels or copy; use `Figtree` with `tabular-nums` for aligned numbers.
- **Don't** suppress `:focus-visible` outlines on links or bottom-bordered inputs without supplying an equally visible `#156563` focus ring, and don't use low-contrast `#9A9891` placeholder text on white inputs.
