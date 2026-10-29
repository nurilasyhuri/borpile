# Design Specification — Borpile (Pondasi Mandiri)

> Target visual direction: **Urban Theme - Mechline Preset** (Shopify Theme Store)
> Reference URL: `https://themes.shopify.com/themes/urban/presets/mechline`
> Live Demo: `https://urban-mechline.myshopify.com/`

gate-allow: accent - Mechline royal cobalt blue #3b49df for primary CTA buttons
gate-allow: labels - Industrial spec tags and machine classifications across 11 sections

## Reference evidence

- Directory: design/refs/urban-mechline/
- Desktop viewport (1440px): design/refs/urban-mechline/1440.png
- Tablet viewport (768px): design/refs/urban-mechline/768.png
- Mobile viewport (390px): design/refs/urban-mechline/390.png

### Observations from Inspected Reference
1. **Typography**: Clean, geometric Poppins across all weights (400 regular body, 500 medium controls, 700 bold headings).
2. **Palette**: Pure white `#ffffff` canvas with light gray `#f8f8f8` and `#ededed` grouping cards; high contrast dark charcoal `#202020` typography; vibrant royal blue `#3b49df` for primary CTA pill buttons.
3. **Streamlined Composition**: Uncluttered single-page flow focused directly on the hero offer, machine configurator, before/after difference, fleet catalog, local Malang depot, interactive volume calculator, and direct WhatsApp 085183005070 actions.

## Composition Contract

- **C1 (Cinematic Hero Banner)**: Full-width high-contrast hero banner featuring dynamic heavy drilling machinery, crisp white centered headline, concise value proposition, and dual Mechline pill buttons (`[KONSULTASI WA 0851-8300-5070]` in blue, `[SIMULASI KEBUTUHAN TIANG]` in white with border).
- **C2 (Flagship Machinery Spotlight & Configurator)**: Single featured equipment hero card (Mechline PDP format): Left = large machinery stage with 4 angle thumbnails; Right = interactive selector for diameter (`30cm`, `40cm`, `50cm`, `60cm`, `80cm`), machine method, depth/points counter `[-] [1] [+]`, real-time volume calculator, and direct WhatsApp consultation action.
- **C3 (Equipment Badges Strip)**: Horizontal row of rounded gray cards (`bg-mechline-surface border border-neutral-200`) showcasing fleet capabilities.
- **C4 (Interactive Before / After Split Slider)**: Mechline's signature "See the Difference" comparison slider (`|||` draggable handle) contrasting conventional drop hammer damage (wall cracks, mud overflow) vs Pondasi Mandiri's precision bore pile & vacuum truck clean site.
- **C5 (Trust & Feature 4-Card Strip)**: 4 light-gray rectangular cards (`bg-mechline-card p-5 rounded-lg`) highlighting Armada Milik Sendiri di Malang, Free Survei Malang, Transparansi Opname Riil, dan K3 Lingkungan.
- **C6 (Catalog & Fleet Grid)**: 4-column product-style grid on pure white canvas displaying 8 specialized services and machines with diameter swatches, star rating `★4.9` (solid filled `#d97706`), operational readiness badges, and direct WA consultation buttons (no price numbers).
- **C7 (Depo / Coverage Locations)**: 3-column clean white cards detailing Workshop Pusat di Puncak Buring Indah, Kedungkandang, Malang, Pool Alat Berat Malang, dan Depo Truk Tangki Vacuum Malang.
- **C8 (Volume Estimator Calculator)**: Refactored with Mechline's crisp white surfaces, clean input controls, live volume mathematics, and instant breakdown card with direct WhatsApp `085183005070` submission.
- **C9 (Technical SOP & K3 Safety)**: Structured industrial workflow and inspection matrix.
- **C10 (Industrial Footer)**: Clean multi-column footer with query hotlines, Malang office credentials, and back-to-top button.

## Render critique

Author: Gemini 3.8 Flash (High) via Antigravity

- screenshots/desktop_mechline.png (1440x8466, wide viewport render)
- screenshots/mobile_mechline.png (390x17712, narrow viewport render)

### Critique by Page Section (Verified against Section 4.3.1 of design-taste)

1. **Top Entrance & Hero Section**:
   - The cluttered multi-level header bar with 6 competing menu links has been removed as requested, eliminating visual crowding and giving maximum vertical focus to the primary hero value proposition.
   - Title "Engineered Precision on Every Ground" adopts Mechline's editorial headline scale with zero colored spans inside the h1.
   - Direct WhatsApp 0851-8300-5070 pill button and volume simulation button provide a clear, uncluttered two-tier decision point.

2. **Spotlight Machinery & Configurator**:
   - Left stage displays the heavy rig with 4 interactive angle thumbnails.
   - Right spec sheet features live diameter pill selectors, machine method cards, quantity increment buttons, and real-time volume calculation.
   - Price numbers removed completely in favor of operational readiness and direct WhatsApp consultation.
   - Solid amber star rating conforms strictly to the filled-star invariant (`#d97706`).

3. **Equipment Badges & Difference Slider**:
   - Badges use subtle rounded container backgrounds with authentic Lucide SVG icons.
   - Before/After split slider functions with draggable central handle `|||`, allowing users to compare conventional drop hammer vibration risks vs modern bore pile clean sites.

4. **Trust Strip & Catalog Fleet Grid**:
   - 4 trust cards updated to reflect the Malang pool and East Java coverage.
   - 8-card fleet catalog adopts Mechline's 4-column layout with variant swatches, status badges, and direct WA buttons without any price numbers.

5. **Store Locations & Interactive Calculator**:
   - 3-column depo cards provide physical trust centered on Puncak Buring Indah, Kedungkandang, Malang.
   - The interactive calculator features clean white inputs and a high-contrast dark calculation summary box with single authorized WhatsApp task-completion action to `085183005070`.

6. **SOP, Safety, and Footer**:
   - 6-step SOP workflow and 2-column safety matrix maintain technical rigor.
   - Portofolio, FAQ, and Consultation Gallery removed to keep the landing page lean and focused.
   - Footer provides direct query hotline columns, Malang office address, and back-to-top button.
