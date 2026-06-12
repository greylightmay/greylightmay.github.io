// tools-data.js
// Tool card data for GreyLightning landing page
// To add a new tool, append a new object to the END of this array.
// The list is reversed at the bottom so the newest tools appear first on the page.

const toolsData = [
  {
    id: "living-hinge",
    name: "Living Hinge Designer",
    subtitle: "Flexible patterns that actually work",
    description: "Generate reliable living hinge patterns with proper kerf spacing. Tested settings for CO2 and diode lasers. Perfect for curved panels, bendable boxes, and sculptural projects.",
    image: "img/living-hinge-flat.jpg",
    imageAlt: "Curved living hinge pattern in wood",
    link: "living-hinge-designer.html",
    videoId: "kBOiYGWKti8",
    videoTitle: "Living Hinge Designer",
    colorScheme: {
      gradient: "linear-gradient(135deg, #eab308 0%, #a16207 100%)",
      background: "#713f12",
      featureBox: "#fefce8",
      featureTitle: "#713f12",
      featureText: "#854d0e",
      subtitleText: "#fef08a",
      buttonGradient: "linear-gradient(135deg, #ca8a04 0%, #854d0e 100%)"
    },
    features: [
      "Standard kerf brick pattern (tested & proven)",
      "CO2 and Diode laser presets",
      "Customizable dimensions & spacing",
      "Real-time preview with zoom"
    ],
    imageOverlay: "Perfect hinges every time →",
    fallbackEmoji: "🔓"
  },
  {
    id: "candle-shade",
    name: "Candle Shade Designer",
    subtitle: "Decorative lamp shades with living hinges",
    description: "Create flexible candle shades with living hinges and decorative cutout motifs. Perfect for LED candles and ambient lighting.",
    image: "img/candle-shades-lit.png",
    imageAlt: "Lit candle shades with bat and pumpkin motifs",
    link: "candle-shade-designer.html",
    videoId: "X97rBVJDnj8",
    videoTitle: "Candle Shade Designer",
    colorScheme: {
      gradient: "linear-gradient(135deg, #f59e0b 0%, #92400e 100%)",
      background: "#78350f",
      featureBox: "#fffbeb",
      featureTitle: "#78350f",
      featureText: "#92400e",
      subtitleText: "#fde68a",
      buttonGradient: "linear-gradient(135deg, #d97706 0%, #92400e 100%)"
    },
    features: [
      "Living hinge pattern for wrapping",
      "6 decorative motifs (or blank for your own)",
      "Fastener pieces included",
      "Adaptive grid based on dimensions"
    ],
    imageOverlay: "Create stunning decorative shades →",
    fallbackEmoji: "🕯️"
  },
  {
    id: "box-designer",
    name: "5-Sided Box Designer",
    subtitle: "Custom boxes with optional fitted lid",
    description: "Create custom laser-cut boxes with easy-to-assemble tab-and-notch joinery. Add an optional fitted lid with adjustable clearance for a perfect fit. Great for organizers, gift boxes, displays, and storage solutions.",
    image: "img/labubu-vanity.jpg",
    imageAlt: "Laser-cut vanity box with tab-and-notch joinery",
    link: "5-sided-box-designer-v2.html",
    videoId: "uhBEGo6jVJw",
    videoTitle: "5 Sided Box Designer",
    colorScheme: {
      gradient: "linear-gradient(135deg, #92400e 0%, #451a03 100%)",
      background: "#1c1917",
      featureBox: "#fffbeb",
      featureTitle: "#451a03",
      featureText: "#78350f",
      subtitleText: "#fcd34d",
      buttonGradient: "linear-gradient(135deg, #78350f 0%, #451a03 100%)"
    },
    features: [
      "Optional fitted lid with adjustable clearance",
      "Interior or exterior dimension modes",
      "Material thickness presets (1/8\", 1/4\", metric)",
      "Custom filenames and material size checker"
    ],
    imageOverlay: "Build custom boxes in seconds →",
    fallbackEmoji: "📦"
  },
  {
    id: "divider-designer",
    name: "Divider Designer",
    subtitle: "Custom interlocking dividers for organizing boxes",
    description: "Create custom standalone laser-cut dividers with interlocking joints. Perfect for dividing up space in boxes or drawers.",
    image: "img/wingspan-insert.jpg",
    imageAlt: "Laser-cut dividers for custom box inserts",
    link: "divider-designer.html",
    videoId: "9c71lOW8Zwk",
    videoTitle: "Divider Designer",
    colorScheme: {
      gradient: "linear-gradient(135deg, #ea580c 0%, #7c2d12 100%)",
      background: "#431407",
      featureBox: "#fff7ed",
      featureTitle: "#7c2d12",
      featureText: "#9a3412",
      subtitleText: "#fed7aa",
      buttonGradient: "linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)"
    },
    features: [
      "Cross-lap joinery - interlocks without glue",
      "Flexible compartment sizing (set minimums or auto-distribute)",
      "Perfect for game box inserts and drawer organizers",
      "Material thickness presets (1/8\", 1/4\", metric)",
      "Material and bed size checker"
    ],
    imageOverlay: "Build custom dividers in seconds →",
    fallbackEmoji: "📦"
  },
  {
    id: "card-box",
    name: "Card Box Designer",
    subtitle: "Card storage boxes with integrated dividers",
    description: "Create custom card storage boxes with fixed dividers and flexible movable dividers. Perfect for organizing playing cards, trading cards, and game components.",
    image: "img/card-box.jpg",
    imageAlt: "Laser-cut card storage box with dividers",
    link: "card-box-designer.html",
    videoId: "c6c1s7iRd8s",
    videoTitle: "Card Box Designer",
    colorScheme: {
      gradient: "linear-gradient(135deg, #8a7060 0%, #4a3a30 100%)",
      background: "#1f1815",
      featureBox: "#f5efe9",
      featureTitle: "#4a3a30",
      featureText: "#6b5648",
      subtitleText: "#d6c5b3",
      buttonGradient: "linear-gradient(135deg, #6b5648 0%, #4a3a30 100%)"
    },
    features: [
      "Inside-out design - specify number and width of columns",
      "Fixed dividers with slots for flexible dividers",
      "3 flexible divider templates with ID tabs",
      "Standard tab-and-notch box construction"
    ],
    imageOverlay: "Organize your cards perfectly →",
    fallbackEmoji: "🃏"
  },
  {
    id: "display-shelf",
    name: "Display Shelf Designer",
    subtitle: "Custom display shelves for miniatures and collectibles",
    description: "Create custom laser-cut display shelves with adjustable shelf spacing. Choose between open risers or enclosed shelving with tab-and-slot construction.",
    image: "img/display-shelf.png",
    imageAlt: "Laser-cut display shelf with miniatures",
    link: "display-shelf-designer.html",
    videoId: "XRzJhi8uWMY",
    videoTitle: "Display Shelf Designer",
    colorScheme: {
      gradient: "linear-gradient(135deg, #a16207 0%, #422006 100%)",
      background: "#1c1917",
      featureBox: "#fefce8",
      featureTitle: "#422006",
      featureText: "#713f12",
      subtitleText: "#fde68a",
      buttonGradient: "linear-gradient(135deg, #854d0e 0%, #422006 100%)"
    },
    features: [
      "Two modes: Open Riser or Enclosed Shelf",
      "Even or custom shelf spacing per tier",
      "Interior or exterior dimension modes",
      "Standard tab-and-slot construction"
    ],
    imageOverlay: "Design custom display shelves →",
    fallbackEmoji: "🗄️"
  },
  {
    id: "scale-model-building",
    name: "Scale Model Building Designer",
    subtitle: "Wargaming terrain and model railroad buildings",
    description: "Design laser-cut scale-model buildings at six popular scales: 28mm, 32mm, and 15mm wargaming; OO British railway; HO American railroad; and N scale (which doubles as 10mm wargaming). Configure each wall independently with doors and windows, add a lift-off gabled roof with attic windows, and include a wargaming-friendly balcony floor — all proportioned from real architectural dimensions.",
    image: "img/scale-model-building-village.png",
    imageAlt: "Five laser-cut scale-model buildings at different scales arranged as a village",
    link: "scale-model-building-designer.html",
    videoId: "yAXQilTn09A",
    videoTitle: "Scale Model Building Designer",
    colorScheme: {
      gradient: "linear-gradient(135deg, #78716c 0%, #44403c 100%)",
      background: "#1c1917",
      featureBox: "#fafaf9",
      featureTitle: "#1c1917",
      featureText: "#44403c",
      subtitleText: "#d6d3d1",
      buttonGradient: "linear-gradient(135deg, #57534e 0%, #44403c 100%)"
    },
    features: [
      "Six scales: 28mm / 32mm / 15mm wargaming, OO / HO / N railroad",
      "Real-world feet input — real architectural proportions",
      "Per-wall doors, windows, and Victorian gable attic windows",
      "Lift-off gabled roof with overhang and ridge cap",
      "Optional ground floor + 2-story balcony ring for wargaming",
      "Material thickness presets for 1/16\", 1/8\", 1/4\" and metric"
    ],
    imageOverlay: "Build scale-model buildings →",
    fallbackEmoji: "🏠"
  }
];

// Reverse so the newest tools (appended at the bottom of the array above) display first.
toolsData.reverse();
