# slidev-theme-boulit

A warm-paper, high-contrast Slidev theme for story-driven technical conference talks. Charcoal typography, vivid-orange accents, a subtle square grid, quiet cards, and a fine editorial rule keep the focus on the story.

The theme is intentionally light-only, including code blocks and diagrams. Layouts target Slidev's default 16:9 canvas and scale with the presentation.

The top rule shows presentation progress: its orange fill is the slide number divided by the total number of slides, reaching 100% on the final slide. It updates automatically when navigating forward or backward, independently of click reveals, and uses each slide's own number in previews and exports.

## Use locally

Add the theme package to a Slidev project:

```json
{
  "devDependencies": {
    "slidev-theme-boulit": "file:../path/to/slidev-theme-boulit"
  }
}
```

Then select it in `slides.md`:

```md
---
theme: boulit
---
```

## Publish and reuse

The package follows Slidev's `slidev-theme-*` naming and metadata conventions. After publishing it to npm, install it with:

```bash
npm install --save-dev slidev-theme-boulit
```

## Layouts

- `cover` — wide, left-aligned title with subtle concentric rings and an optional `.cover-mark`
- `section` — centered chapter divider on a soft accent wash
- `statement` — large, centered takeaway with a quiet accent gradient
- `fact` — oversized metric
- `quote` — conference-style quotation

Slidev's built-in layouts such as `default`, `center`, `two-cols`, `image-left`, and `image-right` remain available.

The `two-cols` layout vertically aligns both columns and places the right-hand content on a bordered panel. Set `layoutClass: gap-12` in the slide frontmatter to separate the columns. Cover slides also accept a `background` image with a palette-aware overlay for legibility.

## Components

```md
<BoulitBadge>TypeScript</BoulitBadge>
<BoulitBadge tone="neutral">In progress</BoulitBadge>
<BoulitBadge tone="danger">Risk</BoulitBadge>

<BoulitMetric value="1.5" label="years" />

<BoulitCallout>
  Put the sentence the audience should remember here.
</BoulitCallout>

<BoulitCallout tone="danger">
  Make the risk explicit.
</BoulitCallout>
```

The `.metric-row` and `.takeaway` utilities share the same styling as their component counterparts. Existing talk utilities, including `.pressure-grid`, `.foundation-flow`, `.track`, and `.lesson-grid`, remain available.

## Theme tokens

Override the palette in a presentation-level `style.css`:

```css
:root {
  --boulit-accent: #f45100;
  --boulit-accent-strong: #bd3c00;
  --boulit-accent-soft: #fff0e5;
  --boulit-amber: #ad640c;
  --boulit-danger: #b33443;
  --boulit-danger-soft: #faecee;
  --boulit-surface: #f8f7f4;
  --boulit-panel: #fdfcfb;
  --boulit-panel-strong: #ffffff;
  --boulit-ink: #242b30;
  --boulit-line: #deddd7;
  --boulit-grid-line: #f0efeb;
  --boulit-muted: #626761;
  --boulit-radius: 0.85rem;
}
```

Typography and elevation can also be customized with `--boulit-font-sans`, `--boulit-font-mono`, and `--boulit-shadow`. The existing `--andreas-*` aliases are retained for compatibility. When changing the palette, keep text colors readable against both the surface and soft accent colors.

The background grid uses 2.5rem squares across layouts, behind slide content. Set `--boulit-grid-line: transparent` to hide it. The default grid color maintains the orange palette's contrast even at line intersections.

The orange palette separates emphasis from readable small text:

- `--boulit-accent` is the vivid orange for large headings, metrics, diagram borders, and progress. It provides at least 3:1 contrast against the default light surfaces and the peach progress track.
- `--boulit-accent-strong` is the text orange for links, badges, eyebrows, and small numbers. It provides at least 4.5:1 contrast against the default light surfaces.
- `.accent` uses the text-safe shade by default, switching to vivid orange in `h1`, `h2`, and the theme's large statement, timeline, and closing utilities.

Keep vivid-orange text at least 24px regular or approximately 19px bold. Use the stronger shade for smaller text; these contrast guarantees apply to the default palette, not arbitrary background images or custom colors.

Mermaid uses a matching palette in `setup/mermaid.ts`. To customize diagram colors in a consuming presentation, use Slidev's `setup/mermaid.ts` hook; CSS tokens do not configure Mermaid's generated SVG theme. Explicit Mermaid node styles are preserved.

## Development

From the theme directory, run the example deck against the local package:

```bash
npx slidev example.md
```

From this repository's root, `npm run theme:dev` opens the component and layout showcase. `npm run dev` opens the full talk.

## License

MIT
