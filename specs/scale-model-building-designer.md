# Scale Model Building Designer v1.0

## Overview

Create a new file `scale-model-building-designer.html` based on `5-sided-box-designer-v2.html` (v2.0) as the starting point per the guidance in `DESIGNER-PATTERNS.md`.

The tool generates laser-cut SVG files for scale model buildings — single or two-story rectangular buildings with configurable windows, doors, and a lift-off gabled roof. The user specifies the building in real-world feet at one of three standard modeling scales; the tool applies real architectural proportions and produces correctly-sized cut pieces.

Primary audience: wargamers (28mm/32mm tabletop terrain) and model railroaders (HO scale).

---

## What Stays the Same from the Base Tool

Carried forward unchanged from `5-sided-box-designer-v2.html`:

- React 18 + Babel + Tailwind stack (CDN-loaded, single HTML file)
- Units toggle (inches / millimeters) for **cut dimensions and material thickness** (not footprint — see below)
- Material thickness presets and custom input
- Material/bed size check with fit indicator
- SVG color guide panel
- All path generation primitives (`generatePiecePath`, `generateNotchPath`, `generateTabPositions`, `calculateTabCount`, etc.)
- SVG export format and color conventions (red cut lines, `stroke-width: 0.01`)
- Download button and filename pattern
- Google Analytics integration

---

## What's New in v1.0

### 1. Scale Selection

**Scale dropdown** with three presets:

| Scale | Ratio | Label |
|---|---|---|
| `28mm` | 1:56 | 28mm Heroic Wargaming |
| `32mm` | 1:50 | 32mm Wargaming |
| `HO` | 1:87 | HO Model Railroad |

Default: `28mm`.

All real-world dimensions below are divided by the scale ratio to produce cut dimensions. Example at 28mm (1:56): 10 ft real → 120 in / 56 = 2.143" cut.

### 2. Real-World Architectural Defaults (Internal Constants)

These are fixed in v1 — not user-adjustable. They convert to cut dimensions via the selected scale.

| Element | Real-World Dimension |
|---|---|
| Story height (floor-to-floor) | 10 ft |
| Exterior door | 6'8" × 3' (80" × 36") |
| Standard window | 3' × 4' (36" × 48") |
| Window sill height (floor to sill) | 3 ft |
| Minimum opening-to-opening gap | 6 in (structural realism) |
| Minimum opening-to-corner gap | 6 in |

### 3. Building Inputs

**Footprint** — entered in **real-world feet** (not cut inches):
- Width (ft): default 24, step 1, min 6
- Depth (ft): default 16, step 1, min 6

**Stories**: radio select, `1 Story` (default) or `2 Story`.

**Roof**:
- Pitch: dropdown with three presets — `30° (Shallow)`, `45° (Classic)` (default), `60° (Steep)`. No freeform angle input in v1.
- Ridge direction: radio select, `Along Width` (default) or `Along Depth`. Determines which pair of walls is gabled (triangular top) and which is eave-height (flat top).

**Floor / Second Floor**:
- 1-story: checkbox "Include Floor" (default unchecked — buildings sit on the tabletop)
- 2-story: radio select for second-story floor — `None`, `Full Floor`, `Balcony Ring` (default `Balcony Ring`)
- If `Balcony Ring`: perimeter width in **cut inches** (default 1.0", range 0.5"–2.0"). Rationale: a miniature base is ~1" regardless of scale.

**Door clearance** (gap around floating door panel inside trim): default 0.03" (inches) / 0.75mm. Same pattern as lid clearance in base tool.

**Material thickness**: same presets as base tool (1/8", 3mm, etc.).

### 4. Per-Wall Configuration

Four walls: **Front**, **Back**, **Left**, **Right**. ("Front" and "Back" are the two walls of length = footprint width; "Left" and "Right" are length = footprint depth.)

For each wall, the user sets **per story**:

| Field | Options |
|---|---|
| Door | `None` / `Left` / `Center` / `Right` |
| Windows | `0` / `1` / `2` |

On a 2-story building, each wall has two independent configurations — one for the 1st story wall panel, one for the 2nd story wall panel.

UI: a grid of collapsible per-wall panels, each showing door + window controls per story.

### 5. Opening Layout Rules

Within a single wall panel:

1. Compute available wall length (cut inches) and subtract `2 × min-corner-gap` (at the chosen scale) to get the usable range.
2. If there's a door, place its center at `25% / 50% / 75%` of the usable range for `Left / Center / Right` respectively.
3. Place windows evenly in the remaining space, each with at least `min-opening-gap` from the door and from each other.
4. Window vertical position: bottom of window at `sill height` from the story's floor line.
5. Door vertical position: bottom of door at the story's floor line, top at door height.

### 6. Validation

On any input change, compute fit for every wall panel. Show a **warning banner** (yellow/orange, styled like existing warnings in base tool) listing any walls where the requested openings cannot fit with the minimum gaps. Example: *"Front wall (2nd story): requested door + 2 windows requires 14 ft, wall is 12 ft wide."*

The SVG download button remains enabled — user can still export, but the warning makes it clear the layout may be cramped.

### 7. Piece Generation

All generated piece dimensions are in **cut inches/mm** (scale-converted).

#### Wall Panels
- One panel per wall per story. 2-story = 8 wall panels total.
- Rectangular base, height = story height (cut).
- **Corners**: standard tab-and-notch. Front/back walls have notches on the left/right edges; left/right walls have tabs sticking out. Same pattern as 5-sided-box.
- **Gabled walls** (the two whose top forms a gable triangle): top edge has a triangular peak matching the roof pitch. For 2-story, only the 2nd-story panels of those walls are gabled.
- **Eave walls** (the two under the eaves): top edge is flat + angled slightly to match pitch so the roof slope sits flush. For 2-story, only the 2nd-story panels have the angled top.
- **Openings**: rectangular cutouts for doors and windows per the layout rules above.
- **Balcony slots** (2-story balcony mode only): horizontal slots on the interior face of the 2nd-story wall panels at the top of the 1st-story wall, receiving the balcony ring tabs.
- **Story-to-story joinery** (2-story): tabs on bottom of 2nd-story wall panels mate with notches on top of 1st-story wall panels. (No separating pillars in v1.)

#### Roof Panels
- Two rectangular panels (one per slope).
- Length = footprint dimension parallel to ridge.
- Width = slope run / cos(pitch).
- **Lift-off fit**: no tabs/notches engaging the walls. Roof simply rests on the angled tops of the gable walls and eave walls. Pitch match is what holds it in place.
- Ridge: two panels meet at the top; can be glued or left as a simple butt joint (user's choice, no cut feature needed in v1).

#### Floor / Balcony
- **Floor** (if enabled): single rectangular panel with notches on all four edges receiving wall tabs. Same pattern as base of 5-sided-box.
- **Full 2nd floor**: same as floor, but sized to interior and receives tabs from the 1st-story wall tops (interior-facing tabs).
- **Balcony ring**: rectangular frame piece. Outer dimensions = interior footprint (fits inside walls). Inner rectangular hole = outer minus `2 × balcony perimeter width` on each axis. Tabs on all four outer edges engage slots on the interior face of the wall panels.

#### Window Inserts (2-part)
- **Back pane**: rectangle sized to the wall opening (minus small fit clearance, e.g., 0.01"). Interior detail: cross mullion (simple + shape) cut through.
- **Front trim**: rectangle larger than opening by `trim margin` on all sides (default: scale-converted from 3" real-world, so trim reads correctly). Interior cutout matches the back pane. Glued to back pane sandwiching the wall.
- Count: one set per window across all walls.

#### Door Inserts (front trim + floating panel)
- **Front trim**: rectangle larger than opening by `trim margin` on all sides. Interior cutout matches door opening + `door clearance`. Glued to wall exterior.
- **Door panel**: rectangle sized to wall opening minus `2 × door clearance` on each axis. Decorative detail: simple 2-panel pattern cut as shallow engrave or light score lines (v1: two rectangles near top and bottom of the panel, cut lines only). Floats in the trim opening; user adds their own hinges.
- Count: one set per door across all walls.

### 8. Layout for Laser Bed

Group pieces for efficient cut:
1. **Row 1**: all wall panels, laid out left-to-right.
2. **Row 2**: roof panels, floor panels, balcony ring (if applicable).
3. **Row 3**: all window inserts (back panes + front trims paired).
4. **Row 4**: all door inserts (front trims + door panels paired).

Total bed width and height checked against the bed size input (existing feature from base tool). Warn if too large.

### 9. Preview Window — COPY FROM BASE TOOL, DO NOT REINVENT

**Hard rule (per `DESIGNER-PATTERNS.md`):** the preview window SVG structure, transforms, zoom control, and default zoom are **copied verbatim** from `5-sided-box-designer-v2.html`. No modifications to the proven pieces.

Carried over unchanged:
- Preview container styling and zoom slider UI
- **Default zoom: 0.5 (50%)**
- Viewbox calculation from bounding boxes
- Cross-layout transforms for the 4 walls + floor (back wall top, middle row with left/floor/right, front wall bottom)
- Center-point alignment rule (not edge alignment) for every piece
- Rotation pivots and post-rotation translates for side walls
- `sideW/2` centering for pieces with tabs (not `ext.depth/2`)
- All the transform patterns documented in `DESIGNER-PATTERNS.md` section "Preview Window Transform Patterns (COPY EXACTLY)"

New pieces added to the preview (below the 5-sided-box pattern, using the same alignment rule — no ad-hoc offsets):
- **Gable triangles**: shown above the two gable walls in their natural orientation
- **Roof slopes**: shown as a separate row below the unfolded walls, centered on the same vertical axis
- **Balcony ring** (if enabled): shown alongside the floor in the middle row
- **Window inserts** (back pane + front trim pairs): shown in a dedicated row below the roof row
- **Door inserts** (front trim + door panel pairs): shown in a dedicated row below the window inserts

For 2-story buildings, the entire layout repeats once per story, stacked vertically with a small gap.

**If during implementation a transform from the base tool doesn't look right for this tool, the default is to stop and ask — not to modify the transform.** The base transforms are validated.

### 10. SVG Output

Standard format (same as other tools):
- Red cut lines (`rgb(255,0,0)`, stroke-width 0.01)
- Viewbox in cut inches
- Width/height attributes in inches or mm per toggle
- Header comment with tool name and version

Filename pattern: `building-{scale}-{width}x{depth}ft-{stories}story.svg`

### 11. Tool Card Registration

Add entry to `tools-data.js`:

```javascript
{
  id: "scale-model-building",
  name: "Scale Model Building Designer",
  subtitle: "Wargaming terrain and train layout buildings",
  description: "Design laser-cut scale model buildings at 28mm, 32mm, or HO scale. Configure walls with windows and operable doors, lift-off gabled roofs, and optional wargaming-friendly balcony floors.",
  image: "img/scale-model-building.jpg",  // placeholder until photo available
  imageAlt: "Laser-cut scale model building for wargaming",
  link: "scale-model-building-designer.html",
  // color scheme TBD
  features: [
    "Three standard scales: 28mm / 32mm wargaming, HO railroad",
    "Real architectural proportions (10ft stories, 6'8\" doors)",
    "Per-wall door and window configuration",
    "Lift-off gabled roof for wargaming access",
    "2-story option with balcony floor for miniature placement"
  ],
  imageOverlay: "Design scale buildings in minutes →",
  fallbackEmoji: "🏠"
}
```

---

## What's NOT in v1 (Deferred to v2+)

- Picture windows and bay windows (distinct wall types, not a window count)
- Corner pillars with magnets (too complex to assemble, per user)
- Back trim on door interior (user confirmed skip)
- Multi-building composition / row houses
- Non-rectangular footprints (L-shapes, porches)
- Custom window/door styles beyond the default (library integration is v1.1+)
- Stairs, railings, decking
- Wall segment composition from 2/4/8/12/16-ft segments (all walls are single panels in v1)
- 3D-printable pillar or insert exports
- Decorative stamp/engrave patterns for siding
- Rescaling for non-supported scales (dollhouse, N scale, etc.) — users can rescale output SVG manually

---

## Testing Checklist

Before considering v1 complete:

- [ ] All three scales produce dimensionally correct output (spot-check: 10ft real at 28mm = 2.143" cut)
- [ ] 1-story and 2-story configurations both generate all pieces
- [ ] Validation warning appears when too many openings requested for wall length
- [ ] Tabs and notches align between mating pieces (standard 5-sided-box rules)
- [ ] Gable roof panels rest flush on angled wall tops at the specified pitch
- [ ] Balcony ring tabs engage slots in 2nd-story wall interior faces
- [ ] Window back pane fits the wall opening; front trim is visibly larger
- [ ] Door panel fits the trim opening with clearance (no bind, no slop)
- [ ] SVG opens correctly in Illustrator and Lightburn
- [ ] Unit toggle (in/mm) converts material thickness and cut dimensions; footprint stays in feet
- [ ] Filename reflects scale and dimensions
- [ ] Tool card appears on landing page and links correctly
- [ ] Physical test cut of a small building (e.g., 16×12 ft at HO) assembles without rework
