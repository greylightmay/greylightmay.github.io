# 5-Sided Box Designer v2.0 - With Optional Lid

## Overview

Create a new file `5-sided-box-designer-v2.html` based on the existing `5-sided-box-designer.html` (v1.0.1), adding an optional fitted lid using the lid system already built and proven in `card-box-designer.html`.

The lid is itself a 5-sided box (4 walls + top panel) that fits over the open top of the base box. The lid's interior dimensions are derived from the base box's exterior dimensions plus a per-side clearance gap, so the lid slides on and off smoothly.

---

## What Stays the Same from v1.0.1

Everything in the current 5-sided box designer carries forward unchanged:

- React 18 + Babel + Tailwind stack (CDN-loaded, single HTML file)
- Dimension mode toggle (interior / exterior)
- Units toggle (inches / millimeters)
- Box dimension inputs (width, depth, height) with unit-aware steps
- Material thickness presets and custom input
- Material/bed size check with fit indicator
- SVG color guide panel
- All path generation functions (`generatePiecePath`, `generateNotchPath`, `generateGeneralizedPath`, `generateMixedPath`, `generateTabPositions`, `calculateTabCount`)
- Box SVG generation and layout (2-row: back+front / left+right+bottom)
- Box unfolded preview with zoom control
- Box download button and filename pattern
- Google Analytics integration

---

## What's New in v2.0

### 1. Lid Settings UI Section

Add a new settings panel between "Material Size Check" and "SVG Color Guide", styled like the existing settings panels (`bg-gray-50 p-6 rounded-lg`).

**Controls:**

| Control | Type | Default | Notes |
|---------|------|---------|-------|
| Include Lid | Checkbox | Unchecked | Toggles all lid controls, preview, and download button |
| Lid Wall Height | Number input | 1 inch | Step: 0.125" (inches) or 1mm (metric). Must be > 0 |
| Fit Clearance | Number input | 0.03 inches | Step: 0.005" (inches) or 0.1mm (metric). Must be >= 0 |

Helper text under Fit Clearance: "Gap per side between lid and box (0.03" typical for snug fit)"

When "Include Lid" is unchecked, the height and clearance inputs are hidden.

### 2. New State Variables

```
includeLid          boolean     false
lidHeight           number      1         (stored in inches)
lidClearance        number      0.03      (stored in inches)
lidHeightInput      string      '1'       (display value)
lidClearanceInput   string      '0.03'    (display value)
lidZoomLevel        number      0.5       (lid preview zoom)
```

These follow the same pattern as existing state: internal values stored in inches, input display values as strings, converted on unit change via the existing `useEffect`.

### 3. Lid Dimension Calculations

The lid wraps around the outside of the base box. Dimensions are derived from the base box's **exterior** dimensions (from the existing `calculateExterior()` function):

```
lidInteriorWidth  = boxExteriorWidth  + (2 * lidClearance)
lidInteriorDepth  = boxExteriorDepth  + (2 * lidClearance)
lidExteriorWidth  = lidInteriorWidth  + (2 * materialThickness)
lidExteriorDepth  = lidInteriorDepth  + (2 * materialThickness)
lidExteriorHeight = lidHeight + materialThickness
```

The lid's top panel is `lidExteriorWidth x lidExteriorDepth`. The four walls are `lidHeight` tall (the material thickness is accounted for by the tab joints to the top panel).

### 4. Lid SVG Generation

Create a `generateLidSVG()` callback, ported from the card box designer's implementation (lines 634-859). The lid consists of 5 pieces:

**Piece definitions:**

| Piece | Body Width | Body Height | Top Edge | Bottom Edge | Left Edge | Right Edge |
|-------|-----------|-------------|----------|-------------|-----------|------------|
| Front wall | lidExteriorWidth | lidHeight | Plain (open bottom of lid) | Tabs inward (into top panel) | Notches (receive side wall tabs) | Notches (receive side wall tabs) |
| Back wall | lidExteriorWidth | lidHeight | Plain (open bottom of lid) | Tabs inward (into top panel) | Notches (receive side wall tabs) | Notches (receive side wall tabs) |
| Left wall | lidInteriorDepth | lidHeight | Plain (open bottom of lid) | Tabs inward (into top panel) | Tabs outward (into front wall notches) | Tabs outward (into back wall notches) |
| Right wall | lidInteriorDepth | lidHeight | Plain (open bottom of lid) | Tabs inward (into top panel) | Tabs outward (into front wall notches) | Tabs outward (into back wall notches) |
| Top panel | lidExteriorWidth | lidExteriorDepth | Notches (receive front/back tabs) | Notches (receive front/back tabs) | Notches (receive side wall tabs) | Notches (receive side wall tabs) |

**Note on "top" vs "bottom":** The lid's open end faces down (toward the box). In the SVG flat layout, "top edge" of a wall piece = the open/plain edge, "bottom edge" = the edge that connects to the top panel via tabs.

**SVG layout (same 2-row pattern as the box):**
```
Row 1:  [Front Wall]  [Back Wall]
Row 2:  [Left Wall]  [Top Panel]  [Right Wall]
```

Spacing between pieces: 0.25 inches (matching box layout).

**SVG output details:**
- Same XML header and SVG structure as box SVG
- Comment: `<!-- Generated by 5-Sided Box Designer v2.0 - Lid - https://greylightmay.com -->`
- Cut line class: `.cut-line { stroke: rgb(255,0,0); stroke-width: 0.01; fill: none; }`
- Dimensions in selected units (inches or mm)
- Lid SVG is a **separate file** from the box SVG

**Path generation:** The lid pieces use dedicated path generation functions (ported from card box designer lines 646-798):
- `generateLidFrontBack(width, height)` - front/back walls with plain top, tabs on bottom, notches on sides
- `generateLidSide(width, height)` - side walls with plain top, tabs on bottom, tabs on sides
- `generateLidTop(width, depth, sideWallWidth)` - top panel with notches on all 4 edges

These are self-contained functions within `generateLidSVG()`, matching the card box designer's approach. They use the same 0.5" tab width and `materialThickness` tab depth as the box.

### 5. Lid Download

Add a "Download Lid SVG" button, shown only when `includeLid` is true. Styled with purple to visually distinguish from the blue box download button (`bg-purple-600 hover:bg-purple-700`).

**Filename pattern:** `5-sided-box-lid-{dimensionMode}-{W}x{D}x{lidHeight}{unit}.svg`

Example: `5-sided-box-lid-interior-6.000x4.000x1.000in.svg`

Analytics event: `download_svg` with `tool_name: '5_sided_box_designer_lid'`

### 6. Lid Unfolded Preview

Add a second preview section below the existing box preview, shown only when `includeLid` is true.

**Header row:** "Lid Construction (Unfolded)" label on the left, zoom dropdown on the right.

**Zoom levels:** 25%, 50% (default), 100%, 150%, 200%

**Preview visualization:** An SVG showing the lid pieces arranged in an unfolded cross pattern (same as the box preview):

```
         [Back Wall]
[Left]   [Top Panel]   [Right]
         [Front Wall]
```

- Back wall at top, rotated/positioned so its tab edge touches the top panel's top edge
- Left wall on the left, rotated -90 degrees
- Top panel centered in the middle
- Right wall on the right, rotated +90 degrees
- Front wall at bottom, rotated 180 degrees

**Styling:**
- Lid pieces use a distinct purple color scheme to differentiate from the box preview:
  - Stroke: `#7c3aed` (purple)
  - Fill: `#e9d5ff` (light purple)
- Each piece labeled: "Back", "Left", "Top", "Right", "Front"
- Container: `border border-gray-300`, `maxHeight: 400px`, `overflow: auto`

**Preview path generation:** The preview uses local copies of the lid path generation functions (matching the card box designer pattern). This keeps preview rendering self-contained.

### 7. Updated Summary / Calculated Dimensions

When the lid is enabled, add lid dimensions to the existing "Calculated Dimensions" area in the Box Dimensions panel:

```
Lid exterior: {W} x {D} x {H} {units}
Lid pieces: 5 (4 walls + top)
```

### 8. Updated Bed Size Check

When the lid is enabled, include lid pieces in the bed fit check. The largest piece could now be the lid's top panel (`lidExteriorWidth x lidExteriorDepth`) which is always slightly larger than the box bottom. Check all pieces (box + lid) and report the actual largest.

### 9. Updated Header

- Title: "5-Sided Box Designer" (unchanged)
- Subtitle: "Create laser-cut boxes with tab-and-notch joinery" (unchanged)
- Version: "v2.0"

### 10. Assembly Notes

Add a lid assembly note below the existing assembly notes when the lid is enabled:

```
Lid Assembly:
- Lid walls sit inside the top panel (tabs interlock)
- Lid slides over the top of the box
- Clearance of {X}" per side allows smooth fit
```

---

## File Structure

**New file:** `5-sided-box-designer-v2.html`

The original `5-sided-box-designer.html` remains untouched. The new file is a complete standalone copy with the lid additions integrated.

---

## Unit Handling

All lid values follow the existing pattern:
- Internal storage: inches
- Conversion on input: `convertToInches(displayValue)`
- Conversion on display: `convertFromInches(internalValue)`
- Format: 3 decimal places for inches, 1 decimal place for mm
- Unit change effect updates all lid display inputs

---

## What This Spec Does NOT Include

- No dividers or internal partitions (that's the card box designer's domain)
- No flexible dividers or slot systems
- No DXF export (matches v1.0.1 which is SVG-only)
- No filename text input (the filename is auto-generated from dimensions, matching v1.0.1)
- No changes to the existing box generation logic
