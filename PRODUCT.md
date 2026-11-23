# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Independent entrepreneurs, makers, and micro-merchants in Mexico and Latin America (selling products such as specialty coffee, streetwear, handmade candles, crafts, food, or apparel via Instagram, TikTok, and WhatsApp) who want to launch a credible online storefront quickly on mobile or desktop without hiring a developer or paying platform sales commissions.

## Product Purpose

VendeFácil (`vendefacil.online`) is a micro-SaaS online store builder that lets merchants create and publish a mobile-ready storefront in minutes for a flat $99 MXN/month (Plan Lite), with direct Mercado Pago checkout and WhatsApp order alerts. Success on the landing page means a visitor tries the live store builder immediately, sees their own shop materialize on the phone preview, understands and trusts the transparent $99 MXN / 0% platform commission offer, and initiates publishing their store.

## Positioning

Zero-signup-friction live WYSIWYG store creation directly on the landing page—merchants type their brand name, optionally upload a logo, choose their store accent color, upload a product photo, and set a MXN price while watching a live `.vendefacil.online` storefront update instantaneously—paired with a single flat $99 MXN/month plan and 0% VendeFácil platform commissions (payments go straight to the merchant's Mercado Pago account).

## Operating Context

Merchants typically run their businesses from a smartphone or laptop between answering WhatsApp/Instagram DMs and preparing orders. Their buyers arrive predominantly on mobile devices from social media links (Instagram bio, TikTok, WhatsApp) and expect familiar Mexican payment options (Mercado Pago: cards, OXXO, bank transfer) and HTTPS security.

## Capabilities and Constraints

- Existing React 18 + Vite + Tailwind CSS v3 single-page web application (`src/App.jsx`, deployed on Vercel via `vercel.json`).
- Interactive live store builder supporting: brand name with automatic URL slug generation (`[slug].vendefacil.online`), optional local logo upload (`FileReader`), 6 store theme color options for the merchant's preview store, product name, drag-and-drop or file-picker product photo upload plus 1-click presets, MXN price input with quick shortcuts, and real-time smartphone storefront preview with a simulated Mercado Pago checkout action.
- Interactive modals: `PublishModal` (simulated checkout + account creation with password or Magic Link toggle) and `LoginModal`, plus toast feedback when loading an example into the editor.
- Plan Lite offer (fixed product truth): $99 MXN/month, cancel anytime with no forced contract, instant free `.vendefacil.online` subdomain (plus option to buy or connect a custom `.com` from the dashboard), catalog up to 10 products, optimized WebP/CDN image storage, direct Mercado Pago integration, 0% VendeFácil platform commissions, automatic WhatsApp order notifications, SSL HTTPS certificate, and a mobile/desktop-friendly dashboard.
- Language and locale: Mexican Spanish (`lang="es"`, MXN currency).

## Brand Commitments

- Brand name: **VendeFácil** (`vendefacil.online`).
- Product offer ($99 MXN/month Plan Lite, 0% platform commissions, Mercado Pago, WhatsApp alerts, up to 10 products) and the live interactive builder + smartphone preview functionality must be preserved.
- Visual identity (color palette, typography, logo mark, layout, and surface styling) is explicitly freed by the user for full redesign. The incumbent violet/Inter/slate-50 aesthetic is an anti-reference perceived as generic AI-generated SaaS; the user specifically requested a more organic, human, less AI-generated visual experience.
- Visual direction commitment (confirmed): **Estándar E-Commerce Moderno** (category standard executed straight at high craft, without irony or smuggled quirk; benchmark craft level assumed as Square/Clip, Shopify/Tiendanube, and Stripe/Mercado Pago after the benchmark-products prompt was left unanswered).

## Evidence on Hand

- Three illustrative demo stores (`Café Don Pedro`, `Aura Streetwear`, `Lumina Studio`) in `src/data/presets.js` using Unsplash stock photography. Confirmed by the user as illustrative interactive demos, not real customers: they must be labeled honestly as live interactive examples to load and test in the editor, never presented as real customer case studies.
- No verified real customer testimonials, merchant count metrics, press logos, or live uptime telemetry exist yet; do not fabricate social proof or unverified operational status badges.
- Support WhatsApp (`wa.me/525500000000`) and email (`hola@vendefacil.online`) in the footer are current placeholders (open decision for production replacement).
- No custom logo asset exists yet; a fresh brand mark may be created cleanly in SVG/code.

## Product Principles

- Prove before pitching: let merchants build and feel ownership of their own store before asking for registration or payment.
- Radical transparency: one clear price ($99 MXN/mes), 0% platform commission, honest demo labeling, no hidden upsells or fabricated social proof.
- Mobile-first buyer credibility: the live storefront preview must look trustworthy to a Mexican buyer opening a link from Instagram or WhatsApp.
- Everyday human commerce over generic tech templates: speak and present with tangible groundedness suited to independent Mexican makers and merchants.

## Accessibility & Inclusion

- Target WCAG AA contrast (>= 4.5:1 normal text, >= 3:1 large text and UI controls), full keyboard navigation and visible focus rings, proper accessible form labels and modal Escape/focus handling, and `prefers-reduced-motion` support.
