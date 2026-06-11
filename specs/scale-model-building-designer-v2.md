# Scale Model Building Designer v2.0 — Ruined Walls

## Overview

v2.0 adds **algorithmically generated ruined walls** for wargaming terrain to the existing
Scale Model Building Designer (v1.1.0). Each generated ruin is unique: jagged collapsed
tops, blown-out corners, breached walls, and skeleton walls where only structure remains.
A seeded random generator makes every variant reproducible — the preview, the bed-size
check, and the downloaded SVG always show the same building, and a favorite ruin can be
re-created from its seed number.

All v1.1 behavior is preserved: an **Intact** building must produce output identical to v1.1.

## Decisions (validated with user, June 11 2026)

1. Damage amount: three presets — Light / Medium / Heavy (no slider).
2. Balcony ring only generated if all four walls survive at the slot line; otherwise
   auto-disabled with a warning.
3. Window/door trim and door panels only generated for openings that survive fully intact.
4. No roof on a ruin by default. Roof available (via checkbox) only when both gable walls
   are style Intact. Collapsed/partial roof slabs deferred to a later version.
5. Version number: **v2.0.0**.
6. Ruins are a **wargaming-scale feature only**: available at 32mm (1:50), 28mm (1:56),
   and 15mm (1:100). Hidden on display-only scales (OO/HO/N), same gating as the balcony.
7. **Adaptive tab width** (new general rule, applied to ruin corner joinery): edge segments
   shorter than 1.25" use 0.25" tabs instead of the standard 0.5".

## The corner-first rule (structural keystone)

Ruin generation starts at the **four building corners**, not the walls:

1. Each of the 4 corners gets one shared "surviving height" — the minimum of what the two
   adjacent walls' styles want there. Minimum surviving corner height: **0.5"** stub.
2. Each wall's jagged break profile runs between its two corner heights.
3. Corner tabs/notches are **re-spaced across the surviving corner height** (not filtered
   from full-height positions). Because both walls of a corner use the same height and the
   same tab math, mating pairs always align, and every standing corner gets at least one
   locking tab — critical because the floor is optional and usually absent.
4. An intact wall next to a ruined corner keeps its full rectangular silhouette, but its
   corner-edge joinery only occupies the shared surviving height (straight edge above).

The gable-notch rule is unchanged: gable walls notched (body = exterior), eave walls
tabbed (body = interior); ridge direction flips the assignment.

## Ruin styles (per wall)

| Style | Effect |
|---|---|
| Intact | v1.1 wall, unchanged. |
| Collapsed top | Jagged break profile across the top; gable peak removed; both corners lowered within a damage-level band; mid-wall sags lower than the corners. |
| Blown corner | One corner (seeded pick) driven down toward the minimum stub; profile climbs jaggedly to a mostly-intact opposite corner. |
| Breached | Outline intact (including gable peak); a large irregular hole punched through the wall, absorbing any openings it touches. |

> **Skeleton style: cut from v2.0** (user decision, June 11 2026). The clean rectangular
> bays read as giant windows, not battle damage. Would need jagged/charred bay edges and
> a real visual rethink to earn its place — deferred indefinitely.

Damage level (Light/Medium/Heavy) scales the parameter bands inside each style
(corner-height ranges, sag depth, breach size).

## Determinism

- `ruinSeed` integer in state; mulberry32 PRNG; per-wall sub-seeds derived from seed + wall index.
- UI: seed shown in an editable field + "Re-roll ruins" button.
- Filename gains `-ruined-s{seed}` when the building is ruined.
- No `Math.random()` anywhere — preview, bed check, and download must agree.

## Laser-cuttability rules

- Break profiles are random walks **quantized to a masonry course grid** (~8" real-world
  course height, ~1–2.5 ft run lengths), clamped to a minimum segment of **0.04" (~1mm)**.
- Rectilinear steps only (90° corners; optional 45° later) — no acute slivers.
- Minimum web between any break/hole edge and any other cut: `max(0.08", materialThickness)`.
- Every wall keeps a continuous solid bottom strip — `max(3 × materialThickness, 0.3")` —
  so no wall ever comes off the laser in two pieces and the building sits flat with no floor.
- Minimum surviving corner stub: 0.5". Tab width: 0.5" standard, 0.25" when the joinery
  segment is under 1.25".

## Interaction with openings

For each opening vs the break profile:
- **Fully below the break with ≥ min-web above** → survives intact (mullioned panes, trim generated).
- **Break touches it or the web above is too thin** → the whole opening is absorbed: profile
  dips down to the opening's bottom across its width (a broken-window bite in the
  silhouette); no cut paths, no trim.
- **Fully inside the removed region** → dropped.

Doors absorbed by a break leave the door-base strip intact (same materialThickness strip
as v1.1). Gable windows are dropped (with a warning) on walls whose style removes the peak.

## Roof / floor / balcony

- Roof: generated for intact buildings exactly as v1.1. For ruined buildings, omitted unless
  both gable walls are Intact **and** the user checks "Include roof". A note explains why
  the option is unavailable otherwise.
- Floor: unchanged. The bottom strip and bottom-tab distribution (across exterior) are
  never modified by ruins.
- Balcony: kept only when every wall still has material at the slot line (intact style, or a
  break/breach that stays clear of the slot band with min-web). Otherwise auto-disabled + warning.

## Architecture

- `computeRuinPlan(seed, styles, damageLevel, geometry)` — pure, memoized; outputs corner
  heights, per-wall break profiles (body coordinates), breach/skeleton hole paths, and the
  surviving-opening sets. Consumed by both SVG generation and the preview.
- `generateWallPanelPath` gains: a `{ type: 'ruin', profile }` top-edge variant, per-edge
  joinery heights (`leftJoinH`/`rightJoinH`), and adaptive tab width. Flat/gable paths and
  all other primitives untouched.
- The near-duplicate wall-assembly code in `generateSVG` and the preview is extracted into
  one shared `buildWallPieces()`; the preview's validated cross-layout transforms are
  **not modified** (center-point alignment rule).

## Testing checklist

- [ ] Intact building output identical to v1.1 (all scales, both ridge directions, 1/2 story)
- [ ] Config matrix: 3 wargaming scales × 1/2 stories × both ridges × 5 styles × 3 damage
      levels × several seeds — paths closed, no segment < 0.04", no NaN coordinates
- [ ] Corner heights equal on both walls of every corner; mating tab/notch positions identical
- [ ] Every standing corner has ≥ 1 tab; tabs ≤ 0.5" and ≥ 0.25"; bottom strip continuous
- [ ] Absorbed openings produce no trim pieces; surviving openings still get trim
- [ ] Balcony auto-disable fires when a wall breaks below the slot line
- [ ] Roof omitted unless both gables intact + checkbox on
- [ ] Re-roll changes silhouette; same seed reproduces identical SVG
- [ ] Ruins hidden on OO/HO/N scales
- [ ] Physical test cut: 28mm heavy-damage building assembles; corner stubs and ¼" tabs hold
