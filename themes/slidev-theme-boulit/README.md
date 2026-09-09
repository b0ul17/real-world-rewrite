# slidev-theme-boulit

An ice-light, high-contrast Slidev theme for story-driven technical conference talks.

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

- `cover` — left-aligned title slide with room for a large decorative mark
- `section` — centered chapter divider
- `statement` — large, centered takeaway
- `fact` — oversized metric
- `quote` — conference-style quotation

Slidev's built-in layouts such as `default`, `center`, `two-cols`, `image-left`, and `image-right` remain available.

## Components

```md
<BoulitBadge>TypeScript</BoulitBadge>
<BoulitBadge tone="danger">Risk</BoulitBadge>

<BoulitMetric value="1.5" label="years" />

<BoulitCallout>
  Put the sentence the audience should remember here.
</BoulitCallout>
```

## Theme tokens

Override the palette in a presentation-level `style.css`:

```css
:root {
  --boulit-accent: #f05a24;
  --boulit-accent-strong: #b83b05;
  --boulit-accent-soft: rgba(240, 90, 36, 0.13);
  --boulit-amber: #ff8a00;
  --boulit-danger: #d73737;
  --boulit-surface: #f2f6f7;
  --boulit-panel: rgba(255, 255, 255, 0.68);
  --boulit-panel-strong: rgba(255, 255, 255, 0.9);
  --boulit-line: rgba(45, 38, 35, 0.16);
  --boulit-muted: #716964;
}
```

## Development

From the theme directory, run the example deck against the local package:

```bash
npx slidev example.md
```

## License

MIT
