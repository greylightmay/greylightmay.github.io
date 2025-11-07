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
    fallbackEmoji: "📐"
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
    subtitle: "Custom organizer boxes with tab-and-notch joints",
    description: "Create custom laser-cut boxes with easy-to-assemble tab-and-notch joinery. Perfect for organizers, displays, and storage solutions.",
    image: "img/labubu-vanity.jpg",
    imageAlt: "Laser-cut vanity box with tab-and-notch joinery",
    link: "5-sided-box-designer.html",
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
      "Interior or exterior dimension modes",
      "Adaptive tab spacing (scales with size)",
      "Material thickness presets (1/8\", 1/4\", metric)",
      "Material and bed size checker"
    ],
    imageOverlay: "Build custom boxes in seconds →",
    fallbackEmoji: "📦"
  }
];