// tools-data.js
// Tool card data for GreyLightning landing page
// To add a new tool, add a new object to this array

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
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      background: "#1e3a8a",
      featureBox: "#eff6ff",
      featureTitle: "#1e3a8a",
      featureText: "#1e40af",
      subtitleText: "#bfdbfe",
      buttonGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
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
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
      background: "#292524",
      featureBox: "#fffbeb",
      featureTitle: "#78350f",
      featureText: "#92400e",
      subtitleText: "#fed7aa",
      buttonGradient: "linear-gradient(135deg, #d97706 0%, #ea580c 100%)"
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
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      background: "#065f46",
      featureBox: "#ecfdf5",
      featureTitle: "#065f46",
      featureText: "#047857",
      subtitleText: "#d1fae5",
      buttonGradient: "linear-gradient(135deg, #059669 0%, #047857 100%)"
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
      gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
      background: "#115e59",
      featureBox: "#f0fdfa",
      featureTitle: "#115e59",
      featureText: "#0f766e",
      subtitleText: "#ccfbf1",
      buttonGradient: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)"
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
      gradient: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
      background: "#881337",
      featureBox: "#fff1f2",
      featureTitle: "#881337",
      featureText: "#be123c",
      subtitleText: "#fecdd3",
      buttonGradient: "linear-gradient(135deg, #be123c 0%, #9f1239 100%)"
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
      gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
      background: "#312e81",
      featureBox: "#eef2ff",
      featureTitle: "#312e81",
      featureText: "#4338ca",
      subtitleText: "#c7d2fe",
      buttonGradient: "linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)"
    },
    features: [
      "Two modes: Open Riser or Enclosed Shelf",
      "Even or custom shelf spacing per tier",
      "Interior or exterior dimension modes",
      "Standard tab-and-slot construction"
    ],
    imageOverlay: "Design custom display shelves →",
    fallbackEmoji: "🗄️"
  }
];
