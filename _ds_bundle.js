/* @ds-bundle: {"format":3,"namespace":"MatterDesignSystem_964dcb","components":[],"sourceHashes":{"biz-cards/cards.jsx":"c35318c315ad","biz-cards/design-canvas.jsx":"3b0e985041dd","biz-cards/onyx.jsx":"58962ade5ac7","biz-cards/tweaks-panel.jsx":"82c387552588","image-slot.js":"9309434cb09c","ui_kits/matter/components/Site.jsx":"757a1a6e096f","ui_kits/wastematters/components/WastePanels.jsx":"a5e2179118fc","ui_kits/wastematters/components/WasteShell.jsx":"47d80cf22191","ui_kits/watermatters/components/WaterPanels.jsx":"3182a710509d","ui_kits/watermatters/components/WaterShell.jsx":"8fe04f57aaeb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MatterDesignSystem_964dcb = window.MatterDesignSystem_964dcb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// biz-cards/cards.jsx
try { (() => {
// Matter business card variations for Sustainability Business Live 2026
// Standard 85×55 mm — rendered at 660×427 px (~7.76 px/mm) for canvas display

const CARD_W = 660;
const CARD_H = 427; // 85:55 aspect

const PEOPLE = {
  len: {
    name: "Len Luxford",
    role: "Director",
    phone: "+61 411 810 411",
    email: "len@matter.city",
    web1: "matter.city",
    web2: "zeroloop.live"
  },
  ciaran: {
    name: "Ciaran O\u2019Reilly",
    role: "IoT Applications Manager",
    phone: "+61 414 077 507",
    email: "ciaran@matter.city",
    web1: "wastematters.co",
    web2: "zeroloop.live"
  }
};

// Brand tokens (local copies so component is self-contained)
const C = {
  ink: "#0E1A1F",
  graphite: "#2B3339",
  slate: "#53565A",
  steel: "#7A8189",
  mist: "#C3C9CE",
  cloud: "#E6E9EC",
  paper: "#F4F5F6",
  canvas: "#FAFAF8",
  white: "#FFFFFF",
  lightGreen: "#43B02A",
  lightGreenSoft: "#5FB944",
  darkGreen: "#205C40",
  darkGreenDeep: "#133826",
  orange: "#F19E21",
  pale: "#EDF7E9"
};
const FONT_SANS = '"Poppins", system-ui, sans-serif';
const FONT_MONO = '"IBM Plex Mono", ui-monospace, monospace';

// ---------- shared bits ----------
function MatterWordmark({
  width = 110,
  color = "currentColor",
  dotColor
}) {
  // simplified inline SVG of MATTER wordmark + dot, traced from brand SVG
  const dot = dotColor || color;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 671 137",
    width: width,
    height: width * 137 / 671,
    "aria-label": "Matter"
  }, /*#__PURE__*/React.createElement("g", {
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,30.8h36.2v12.6c9.87-9.47,20.93-14.2,33.2-14.2,15.2,0,26.8,6.4,34.8,19.2,8.13-12.93,19.73-19.4,34.8-19.4,4.8,0,9.33.7,13.6,2.1,4.27,1.4,7.93,3.6,11,6.6,3.07,3,5.5,6.9,7.3,11.7s2.7,10.6,2.7,17.4v66.6h-36.2v-50.6c0-5.2-.37-9.47-1.1-12.8-.73-3.33-1.8-5.93-3.2-7.8-1.4-1.87-3.03-3.13-4.9-3.8-1.87-.67-3.87-1-6-1-11.6,0-17.4,8.47-17.4,25.4v50.6h-36.2v-50.6c0-5.2-.33-9.5-1-12.9-.67-3.4-1.63-6.1-2.9-8.1-1.27-2-2.9-3.37-4.9-4.1-2-.73-4.33-1.1-7-1.1-2.27,0-4.4.33-6.4,1-2,.67-3.77,1.97-5.3,3.9-1.53,1.93-2.73,4.6-3.6,8-.87,3.4-1.3,7.83-1.3,13.3v50.6H0V30.8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M266.64,30.8h36.4v102.6h-36.4v-11.4c-7.73,9.73-18.2,14.6-31.4,14.6-7.47,0-14.34-1.37-20.6-4.1-6.27-2.73-11.73-6.57-16.4-11.5-4.67-4.93-8.3-10.73-10.9-17.4-2.6-6.67-3.9-13.93-3.9-21.8,0-7.33,1.27-14.3,3.8-20.9,2.53-6.6,6.06-12.37,10.6-17.3,4.53-4.93,9.93-8.83,16.2-11.7,6.27-2.87,13.2-4.3,20.8-4.3,12.8,0,23.4,4.47,31.8,13.4v-10.2ZM221.04,81.8c0,3.33.6,6.43,1.8,9.3,1.2,2.87,2.83,5.37,4.9,7.5,2.06,2.13,4.53,3.8,7.4,5,2.87,1.2,5.97,1.8,9.3,1.8s6.23-.6,9.1-1.8c2.87-1.2,5.33-2.87,7.4-5,2.07-2.13,3.73-4.6,5-7.4,1.27-2.8,1.9-5.8,1.9-9s-.63-6.23-1.9-9.1c-1.27-2.87-2.93-5.37-5-7.5-2.07-2.13-4.54-3.8-7.4-5-2.87-1.2-5.9-1.8-9.1-1.8s-6.43.6-9.3,1.8c-2.87,1.2-5.33,2.87-7.4,5-2.07,2.13-3.7,4.57-4.9,7.3-1.2,2.73-1.8,5.7-1.8,8.9Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M360.01,61v72.4h-36.2V61h-12v-30.2h12V0h36.2v30.8h20.6v30.2h-20.6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M426.87,61v72.4h-36.2V61h-12v-30.2h12V0h36.2v30.8h20.6v30.2h-20.6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M484.41,88.2c0,15.6,7.33,23.4,22,23.4,7.87,0,13.8-3.2,17.8-9.6h35c-7.07,23.47-24.73,35.2-53,35.2-8.67,0-16.6-1.3-23.8-3.9-7.2-2.6-13.37-6.3-18.5-11.1-5.13-4.8-9.1-10.53-11.9-17.2-2.8-6.67-4.2-14.13-4.2-22.4s1.33-16.23,4-23.1c2.66-6.87,6.46-12.7,11.4-17.5,4.93-4.8,10.9-8.5,17.9-11.1s14.9-3.9,23.7-3.9,16.46,1.3,23.4,3.9c6.93,2.6,12.8,6.37,17.6,11.3,4.8,4.93,8.46,10.97,11,18.1,2.53,7.13,3.8,15.17,3.8,24.1v3.8h-76.2ZM526.81,67.2c-1.2-5.07-3.67-9.13-7.4-12.2-3.73-3.07-8.27-4.6-13.6-4.6-5.6,0-10.17,1.47-13.7,4.4-3.53,2.93-5.77,7.07-6.7,12.4h41.4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M571.39,30.8h36.2v16.8c3.87-6.13,8.6-10.83,14.2-14.1,5.6-3.27,12.13-4.9,19.6-4.9h3.1c1.13,0,2.43.13,3.9.4v34.6c-4.8-2.4-10-3.6-15.6-3.6-8.4,0-14.7,2.5-18.9,7.5-4.2,5-6.3,12.3-6.3,21.9v44h-36.2V30.8Z"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "654.5",
    cy: "119",
    r: "16.5",
    fill: dot
  }));
}

// generic card frame
function CardFrame({
  children,
  bg = C.white,
  border,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: CARD_W,
      height: CARD_H,
      background: bg,
      borderRadius: 4,
      overflow: "hidden",
      boxShadow: "0 1px 2px rgba(14,26,31,.06), 0 12px 32px -16px rgba(14,26,31,.18)",
      border: border || "1px solid rgba(14,26,31,.06)",
      fontFamily: FONT_SANS,
      color: C.ink,
      ...style
    }
  }, children);
}
const PAD = 36;

// ---------- VARIATION 1 — ARCHITECT ----------
function CardA_Front({
  p
}) {
  return /*#__PURE__*/React.createElement(CardFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 6,
      background: C.lightGreen
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: `${PAD}px ${PAD}px ${PAD}px ${PAD + 4}px`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(MatterWordmark, {
    width: 104,
    color: C.darkGreen,
    dotColor: C.lightGreen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9,
      color: C.steel,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      textAlign: "right",
      lineHeight: 1.4
    }
  }, "Waste & stormwater", /*#__PURE__*/React.createElement("br", null), "intelligence")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: C.ink,
      marginBottom: 6
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 11,
      fontWeight: 500,
      color: C.lightGreen,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.cloud,
      margin: "20px 0 18px",
      width: 64
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11.5,
      color: C.graphite,
      lineHeight: 1.7,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", null, p.phone), /*#__PURE__*/React.createElement("div", null, p.web1), /*#__PURE__*/React.createElement("div", null, p.email), /*#__PURE__*/React.createElement("div", null, p.web2)))));
}
function CardA_Back() {
  return /*#__PURE__*/React.createElement(CardFrame, {
    bg: C.darkGreen,
    border: "none"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.13
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "gridA",
    width: "22",
    height: "22",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "1.1",
    fill: C.lightGreen
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#gridA)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: PAD,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9,
      color: C.lightGreen,
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "Sustainability Business Live \xB7 Melbourne 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(MatterWordmark, {
    width: 260,
    color: C.white,
    dotColor: C.lightGreen
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 14,
      fontWeight: 500,
      color: C.white,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      maxWidth: 280
    }
  }, "Real-time sensing", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.lightGreen
    }
  }, "+ AI for waste & water.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9.5,
      color: "rgba(255,255,255,0.6)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      textAlign: "right"
    }
  }, "matter.city", /*#__PURE__*/React.createElement("br", null), "wastematters.co", /*#__PURE__*/React.createElement("br", null), "zeroloop.live"))));
}

// ---------- VARIATION 2 — TOPOGRAPHIC ----------
function TopoLines({
  stroke,
  opacity = 1,
  density = 8
}) {
  // contour-line pattern, big sweeping curves
  const paths = [];
  for (let i = 0; i < density; i++) {
    const y = -40 + i * 38;
    const amp = 28 + i % 3 * 6;
    paths.push(/*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M -40 ${y + 200} Q ${CARD_W * 0.25} ${y + 200 - amp}, ${CARD_W * 0.5} ${y + 200} T ${CARD_W + 40} ${y + 200}`,
      fill: "none",
      stroke: stroke,
      strokeWidth: "1",
      opacity: opacity
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      inset: 0
    }
  }, paths);
}
function CardB_Front({
  p
}) {
  return /*#__PURE__*/React.createElement(CardFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(TopoLines, {
    stroke: C.pale,
    density: 12
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: PAD,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(MatterWordmark, {
    width: 104,
    color: C.darkGreen,
    dotColor: C.orange
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: C.orange,
      marginTop: 6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 11,
      fontWeight: 500,
      color: C.darkGreen,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: "-0.025em",
      lineHeight: 0.95,
      color: C.ink
    }
  }, p.name.split(" ")[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 36,
      fontWeight: 300,
      letterSpacing: "-0.025em",
      lineHeight: 0.95,
      color: C.ink
    }
  }, p.name.split(" ").slice(1).join(" "))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 10.5,
      color: C.graphite,
      lineHeight: 1.85,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", null, p.phone), /*#__PURE__*/React.createElement("div", null, p.email), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      color: C.darkGreen
    }
  }, p.web1), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.darkGreen
    }
  }, p.web2)))));
}
function CardB_Back() {
  return /*#__PURE__*/React.createElement(CardFrame, {
    bg: C.lightGreen,
    border: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(135deg, ${C.lightGreen} 0%, ${C.darkGreen} 100%)`
    }
  }), /*#__PURE__*/React.createElement(TopoLines, {
    stroke: "rgba(255,255,255,0.22)",
    density: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: PAD,
      right: PAD,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: C.orange
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: PAD,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9.5,
      color: "rgba(255,255,255,0.7)",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      marginBottom: 18
    }
  }, "Automated workflows. Anywhere."), /*#__PURE__*/React.createElement(MatterWordmark, {
    width: 280,
    color: C.white,
    dotColor: C.orange
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 17,
      fontWeight: 500,
      color: C.white,
      letterSpacing: "-0.01em",
      marginTop: 22
    }
  }, "Waste & stormwater intelligence")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: PAD,
      bottom: PAD,
      fontFamily: FONT_MONO,
      fontSize: 9,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, "Melbourne \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: PAD,
      bottom: PAD,
      fontFamily: FONT_MONO,
      fontSize: 9,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, "matter.city"));
}

// ---------- VARIATION 3 — ONYX ----------
function CardC_Front({
  p
}) {
  return /*#__PURE__*/React.createElement(CardFrame, {
    bg: C.ink,
    border: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -120,
      bottom: -90,
      opacity: 0.06
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "500",
    height: "500",
    viewBox: "0 0 500 500"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "380",
    cy: "380",
    r: "60",
    fill: C.lightGreen
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: PAD,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(MatterWordmark, {
    width: 104,
    color: C.white,
    dotColor: C.lightGreen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9,
      color: C.lightGreen,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      textAlign: "right",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.5
    }
  }, "Card no."), /*#__PURE__*/React.createElement("div", null, p === PEOPLE.len ? "001" : "002", " / 002"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 38,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: C.white,
      marginBottom: 10
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 12,
      fontWeight: 500,
      color: C.lightGreenSoft,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginTop: 28,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: "rgba(255,255,255,0.78)",
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("div", null, p.phone), /*#__PURE__*/React.createElement("div", null, p.email)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: "rgba(255,255,255,0.78)",
      lineHeight: 1.8,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.lightGreen
    }
  }, p.web1), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.lightGreen
    }
  }, p.web2))))));
}
function CardC_Back() {
  return /*#__PURE__*/React.createElement(CardFrame, {
    bg: C.ink,
    border: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -220,
      bottom: -220,
      width: 540,
      height: 540,
      borderRadius: "50%",
      background: `radial-gradient(circle at 30% 30%, ${C.lightGreen} 0%, ${C.lightGreen} 60%, ${C.darkGreen} 100%)`
    }
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      left: -40,
      top: -40
    },
    width: "200",
    height: "200",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "80",
    fill: "none",
    stroke: C.lightGreen,
    strokeWidth: "1",
    opacity: "0.18"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "60",
    fill: "none",
    stroke: C.lightGreen,
    strokeWidth: "1",
    opacity: "0.22"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "40",
    fill: "none",
    stroke: C.lightGreen,
    strokeWidth: "1",
    opacity: "0.28"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: PAD,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 10,
      color: C.lightGreen,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "Sustainability Business Live \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: 44,
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 0.96,
      color: C.white
    }
  }, "Waste.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.lightGreen
    }
  }, "Water."), /*#__PURE__*/React.createElement("br", null), "Resolved.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9.5,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      lineHeight: 1.7
    }
  }, "matter.city", /*#__PURE__*/React.createElement("br", null), "wastematters.co \xB7 zeroloop.live"), /*#__PURE__*/React.createElement(MatterWordmark, {
    width: 84,
    color: C.white,
    dotColor: C.lightGreen
  }))));
}

// expose
Object.assign(window, {
  CARD_W,
  CARD_H,
  PEOPLE,
  CardA_Front,
  CardA_Back,
  CardB_Front,
  CardB_Back,
  CardC_Front,
  CardC_Back
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "biz-cards/cards.jsx", error: String((e && e.message) || e) }); }

// biz-cards/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "biz-cards/design-canvas.jsx", error: String((e && e.message) || e) }); }

// biz-cards/onyx.jsx
try { (() => {
// Onyx — refined. Front + 3 reverse variants, accent-color swappable.

const ONYX_CARD_W = 660;
const ONYX_CARD_H = 427;
const OC = {
  ink: "#0E1A1F",
  inkDeep: "#070d10",
  graphite: "#2B3339",
  slate: "#53565A",
  steel: "#7A8189",
  mist: "#C3C9CE",
  white: "#FFFFFF",
  lightGreen: "#43B02A",
  lightGreenSoft: "#5FB944",
  darkGreen: "#205C40",
  orange: "#F19E21",
  cyan: "#5EC8D9",
  pink: "#F25B8E"
};
const FS = '"Poppins", system-ui, sans-serif';
const FM = '"IBM Plex Mono", ui-monospace, monospace';
function OnyxWordmark({
  width = 110,
  color = "#fff",
  dotColor = "#43B02A"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 671 137",
    width: width,
    height: width * 137 / 671,
    "aria-label": "Matter"
  }, /*#__PURE__*/React.createElement("g", {
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,30.8h36.2v12.6c9.87-9.47,20.93-14.2,33.2-14.2,15.2,0,26.8,6.4,34.8,19.2,8.13-12.93,19.73-19.4,34.8-19.4,4.8,0,9.33.7,13.6,2.1,4.27,1.4,7.93,3.6,11,6.6,3.07,3,5.5,6.9,7.3,11.7s2.7,10.6,2.7,17.4v66.6h-36.2v-50.6c0-5.2-.37-9.47-1.1-12.8-.73-3.33-1.8-5.93-3.2-7.8-1.4-1.87-3.03-3.13-4.9-3.8-1.87-.67-3.87-1-6-1-11.6,0-17.4,8.47-17.4,25.4v50.6h-36.2v-50.6c0-5.2-.33-9.5-1-12.9-.67-3.4-1.63-6.1-2.9-8.1-1.27-2-2.9-3.37-4.9-4.1-2-.73-4.33-1.1-7-1.1-2.27,0-4.4.33-6.4,1-2,.67-3.77,1.97-5.3,3.9-1.53,1.93-2.73,4.6-3.6,8-.87,3.4-1.3,7.83-1.3,13.3v50.6H0V30.8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M266.64,30.8h36.4v102.6h-36.4v-11.4c-7.73,9.73-18.2,14.6-31.4,14.6-7.47,0-14.34-1.37-20.6-4.1-6.27-2.73-11.73-6.57-16.4-11.5-4.67-4.93-8.3-10.73-10.9-17.4-2.6-6.67-3.9-13.93-3.9-21.8,0-7.33,1.27-14.3,3.8-20.9,2.53-6.6,6.06-12.37,10.6-17.3,4.53-4.93,9.93-8.83,16.2-11.7,6.27-2.87,13.2-4.3,20.8-4.3,12.8,0,23.4,4.47,31.8,13.4v-10.2ZM221.04,81.8c0,3.33.6,6.43,1.8,9.3,1.2,2.87,2.83,5.37,4.9,7.5,2.06,2.13,4.53,3.8,7.4,5,2.87,1.2,5.97,1.8,9.3,1.8s6.23-.6,9.1-1.8c2.87-1.2,5.33-2.87,7.4-5,2.07-2.13,3.73-4.6,5-7.4,1.27-2.8,1.9-5.8,1.9-9s-.63-6.23-1.9-9.1c-1.27-2.87-2.93-5.37-5-7.5-2.07-2.13-4.54-3.8-7.4-5-2.87-1.2-5.9-1.8-9.1-1.8s-6.43.6-9.3,1.8c-2.87,1.2-5.33,2.87-7.4,5-2.07,2.13-3.7,4.57-4.9,7.3-1.2,2.73-1.8,5.7-1.8,8.9Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M360.01,61v72.4h-36.2V61h-12v-30.2h12V0h36.2v30.8h20.6v30.2h-20.6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M426.87,61v72.4h-36.2V61h-12v-30.2h12V0h36.2v30.8h20.6v30.2h-20.6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M484.41,88.2c0,15.6,7.33,23.4,22,23.4,7.87,0,13.8-3.2,17.8-9.6h35c-7.07,23.47-24.73,35.2-53,35.2-8.67,0-16.6-1.3-23.8-3.9-7.2-2.6-13.37-6.3-18.5-11.1-5.13-4.8-9.1-10.53-11.9-17.2-2.8-6.67-4.2-14.13-4.2-22.4s1.33-16.23,4-23.1c2.66-6.87,6.46-12.7,11.4-17.5,4.93-4.8,10.9-8.5,17.9-11.1s14.9-3.9,23.7-3.9,16.46,1.3,23.4,3.9c6.93,2.6,12.8,6.37,17.6,11.3,4.8,4.93,8.46,10.97,11,18.1,2.53,7.13,3.8,15.17,3.8,24.1v3.8h-76.2ZM526.81,67.2c-1.2-5.07-3.67-9.13-7.4-12.2-3.73-3.07-8.27-4.6-13.6-4.6-5.6,0-10.17,1.47-13.7,4.4-3.53,2.93-5.77,7.07-6.7,12.4h41.4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M571.39,30.8h36.2v16.8c3.87-6.13,8.6-10.83,14.2-14.1,5.6-3.27,12.13-4.9,19.6-4.9h3.1c1.13,0,2.43.13,3.9.4v34.6c-4.8-2.4-10-3.6-15.6-3.6-8.4,0-14.7,2.5-18.9,7.5-4.2,5-6.3,12.3-6.3,21.9v44h-36.2V30.8Z"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "654.5",
    cy: "119",
    r: "16.5",
    fill: dotColor
  }));
}
function OnyxFrame({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: ONYX_CARD_W,
      height: ONYX_CARD_H,
      background: OC.ink,
      borderRadius: 4,
      overflow: "hidden",
      boxShadow: "0 1px 2px rgba(14,26,31,.08), 0 24px 60px -24px rgba(14,26,31,.45)",
      fontFamily: FS,
      color: OC.white,
      ...style
    }
  }, children);
}

// — front
function OnyxFront({
  p,
  accent = OC.lightGreen
}) {
  return /*#__PURE__*/React.createElement(OnyxFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(180deg, rgba(255,255,255,0.025) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.18) 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -160,
      bottom: -160,
      width: 360,
      height: 360,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${accent}26 0%, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: 38,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(OnyxWordmark, {
    width: 108,
    color: OC.white,
    dotColor: accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 9,
      color: accent,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      textAlign: "right",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.4)"
    }
  }, "Card"), /*#__PURE__*/React.createElement("div", null, p === ONYX_PEOPLE.len ? "001" : "002", " / 002"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FS,
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: OC.white,
      marginBottom: 12
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FS,
      fontSize: 12,
      fontWeight: 500,
      color: accent,
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.1)",
      margin: "26px 0 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4px 32px",
      fontFamily: FM,
      fontSize: 11,
      color: "rgba(255,255,255,0.82)",
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", null, p.phone), /*#__PURE__*/React.createElement("div", {
    style: {
      color: accent
    }
  }, p.web1), /*#__PURE__*/React.createElement("div", null, p.email), /*#__PURE__*/React.createElement("div", {
    style: {
      color: accent
    }
  }, p.web2)))));
}

// — back A: statement + offset green orb
function OnyxBackStatement({
  accent = OC.lightGreen,
  statement = "default"
}) {
  const statements = {
    default: ["Every bin.", "Every lift.", "Resolved."],
    sensing: ["Sense", "every bin", "in real time."],
    intel: ["Waste", "intelligence", "for councils."]
  };
  const lines = statements[statement] || statements.default;
  return /*#__PURE__*/React.createElement(OnyxFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -240,
      bottom: -240,
      width: 560,
      height: 560,
      borderRadius: "50%",
      background: `radial-gradient(circle at 35% 35%, ${accent} 0%, ${accent} 55%, ${OC.darkGreen} 100%)`
    }
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      left: -36,
      top: -36
    },
    width: "220",
    height: "220",
    viewBox: "0 0 220 220"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "110",
    r: "90",
    fill: "none",
    stroke: accent,
    strokeWidth: "1",
    opacity: "0.15"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "110",
    r: "68",
    fill: "none",
    stroke: accent,
    strokeWidth: "1",
    opacity: "0.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "110",
    r: "46",
    fill: "none",
    stroke: accent,
    strokeWidth: "1",
    opacity: "0.28"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: 38,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 10,
      color: accent,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "Sustainability Business Live \xB7 Melbourne 2026"), /*#__PURE__*/React.createElement(OnyxWordmark, {
    width: 78,
    color: OC.white,
    dotColor: accent
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FS,
      fontSize: 50,
      fontWeight: 700,
      letterSpacing: "-0.035em",
      lineHeight: 0.95,
      color: OC.white
    }
  }, lines[0], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, lines[1]), /*#__PURE__*/React.createElement("br", null), lines[2])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6,
      background: "rgba(255,255,255,0.06)",
      border: `1px solid rgba(255,255,255,0.14)`,
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement(QRBlock, {
    size: 84,
    fg: OC.white,
    bg: "transparent"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 9,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.2em",
      textTransform: "uppercase"
    }
  }, "See it live"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 12,
      color: accent,
      letterSpacing: "0.04em"
    }
  }, "zeroloop.live \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 9.5,
      color: "rgba(255,255,255,0.45)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      lineHeight: 1.7,
      textAlign: "right"
    }
  }, "matter.city", /*#__PURE__*/React.createElement("br", null), "wastematters.co"))));
}

// — back B: centered massive wordmark + tagline (most institutional)
function OnyxBackMark({
  accent = OC.lightGreen
}) {
  return /*#__PURE__*/React.createElement(OnyxFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(ellipse at 50% 50%, rgba(67,176,42,0.10) 0%, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 38,
      left: 38,
      width: 56,
      height: 1,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 38,
      right: 38,
      width: 56,
      height: 1,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: 38,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 10,
      color: accent,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      marginBottom: 28
    }
  }, "Operational waste intelligence"), /*#__PURE__*/React.createElement(OnyxWordmark, {
    width: 320,
    color: OC.white,
    dotColor: accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FS,
      fontSize: 18,
      fontWeight: 400,
      color: "rgba(255,255,255,0.78)",
      letterSpacing: "-0.005em",
      marginTop: 26
    }
  }, "Know every bin. Every lift. Every time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38,
      bottom: 38,
      fontFamily: FM,
      fontSize: 9,
      color: "rgba(255,255,255,0.4)",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "Melbourne \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 38,
      top: 38,
      fontFamily: FM,
      fontSize: 9,
      color: "rgba(255,255,255,0.4)",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "matter.city"));
}

// — back C: QR + conversion-focused
function QRBlock({
  size = 116,
  fg = "#fff",
  bg = "transparent"
}) {
  // synthetic QR-shaped pattern (placeholder, not scannable). 25x25 grid.
  const N = 25;
  const cells = [];
  // deterministic pseudo pattern
  const seed = (x, y) => (x * 73856093 ^ y * 19349663) >>> 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      // finder squares
      const inFinder = x < 7 && y < 7 || x > N - 8 && y < 7 || x < 7 && y > N - 8;
      if (inFinder) continue;
      const v = seed(x, y) % 7 < 3;
      if (v) cells.push(/*#__PURE__*/React.createElement("rect", {
        key: `${x}-${y}`,
        x: x,
        y: y,
        width: "1",
        height: "1",
        fill: fg
      }));
    }
  }
  const finder = (cx, cy) => /*#__PURE__*/React.createElement("g", {
    key: `f${cx}-${cy}`
  }, /*#__PURE__*/React.createElement("rect", {
    x: cx,
    y: cy,
    width: "7",
    height: "7",
    fill: fg
  }), /*#__PURE__*/React.createElement("rect", {
    x: cx + 1,
    y: cy + 1,
    width: "5",
    height: "5",
    fill: bg === "transparent" ? OC.ink : bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: cx + 2,
    y: cy + 2,
    width: "3",
    height: "3",
    fill: fg
  }));
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${N} ${N}`,
    shapeRendering: "crispEdges",
    style: {
      display: "block"
    }
  }, bg !== "transparent" && /*#__PURE__*/React.createElement("rect", {
    width: N,
    height: N,
    fill: bg
  }), cells, finder(0, 0), finder(N - 7, 0), finder(0, N - 7));
}
function OnyxBackQR({
  accent = OC.lightGreen
}) {
  return /*#__PURE__*/React.createElement(OnyxFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(135deg, ${OC.ink} 0%, ${OC.inkDeep} 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -200,
      top: -200,
      width: 440,
      height: 440,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${accent}1a 0%, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: 38,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "stretch",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 10,
      color: accent,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      marginBottom: 22
    }
  }, "See it live \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FS,
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: "-0.025em",
      lineHeight: 1.02,
      color: OC.white,
      maxWidth: 280,
      marginBottom: 16
    }
  }, "Watch a bin fill", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, "in real time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FS,
      fontSize: 13,
      fontWeight: 400,
      color: "rgba(255,255,255,0.65)",
      letterSpacing: "-0.005em",
      maxWidth: 280,
      lineHeight: 1.45
    }
  }, "Live waste telemetry from Australian councils \u2014 no signup.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(OnyxWordmark, {
    width: 76,
    color: OC.white,
    dotColor: accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 22,
      background: "rgba(255,255,255,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 9,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "matter.city"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: "rgba(255,255,255,0.04)",
      border: `1px solid rgba(255,255,255,0.08)`,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement(QRBlock, {
    size: 140,
    fg: OC.white,
    bg: "transparent"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FM,
      fontSize: 10,
      color: accent,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, "zeroloop.live"))));
}
const ONYX_PEOPLE = {
  len: {
    name: "Len Luxford",
    role: "Director",
    phone: "+61 411 810 411",
    email: "len@matter.city",
    web1: "matter.city",
    web2: "zeroloop.live"
  },
  ciaran: {
    name: "Ciaran O\u2019Reilly",
    role: "IoT Applications Manager",
    phone: "+61 414 077 507",
    email: "ciaran@matter.city",
    web1: "wastematters.co",
    web2: "zeroloop.live"
  }
};
Object.assign(window, {
  ONYX_CARD_W,
  ONYX_CARD_H,
  ONYX_PEOPLE,
  OC,
  OnyxFront,
  OnyxBackStatement,
  OnyxBackMark,
  OnyxBackQR
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "biz-cards/onyx.jsx", error: String((e && e.message) || e) }); }

// biz-cards/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "biz-cards/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/matter/components/Site.jsx
try { (() => {
/* global React */

function SiteNav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sn-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sn-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/matter-colour.png",
    alt: "Matter"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sn-links"
  }, /*#__PURE__*/React.createElement("a", null, "Platform"), /*#__PURE__*/React.createElement("a", null, "Waste"), /*#__PURE__*/React.createElement("a", null, "Water"), /*#__PURE__*/React.createElement("a", null, "Partners"), /*#__PURE__*/React.createElement("a", null, "About")), /*#__PURE__*/React.createElement("div", {
    className: "sn-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sn-ghost"
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    className: "sn-btn"
  }, "Get in touch"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-eyebrow"
  }, "Real-time sensing \xB7 AI \xB7 Infrastructure"), /*#__PURE__*/React.createElement("h1", {
    className: "h-title"
  }, "One intelligent platform. ", /*#__PURE__*/React.createElement("br", null), "Two specialised domains."), /*#__PURE__*/React.createElement("p", {
    className: "h-sub"
  }, "Matter builds the sensors, the AI and the operating systems that keep waste and water running \u2014 for councils, water authorities and the communities they serve."), /*#__PURE__*/React.createElement("div", {
    className: "h-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn-primary"
  }, "See the platform"), /*#__PURE__*/React.createElement("a", {
    className: "btn-ghost"
  }, "Read the 2025 paper \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "h-tiles"
  }, /*#__PURE__*/React.createElement("a", {
    className: "tile tile-waste"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-badge"
  }, "WasteMatters"), /*#__PURE__*/React.createElement("span", {
    className: "t-arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("h3", null, "Know every bin. Every lift. Every time."), /*#__PURE__*/React.createElement("p", null, "Fleet tracking, fill-level monitoring, proof of service and route optimisation for council and commercial operators."), /*#__PURE__*/React.createElement("div", {
    className: "t-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "12,800+"), /*#__PURE__*/React.createElement("span", null, "bins monitored")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "99.1%"), /*#__PURE__*/React.createElement("span", null, "SLA compliance")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u221218%"), /*#__PURE__*/React.createElement("span", null, "collection emissions")))), /*#__PURE__*/React.createElement("a", {
    className: "tile tile-water"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-badge"
  }, "WaterMatters"), /*#__PURE__*/React.createElement("span", {
    className: "t-arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("h3", null, "See the storm before it arrives."), /*#__PURE__*/React.createElement("p", null, "Radar sensing, predictive analytics and basin intelligence \u2014 giving flood managers hours, not minutes."), /*#__PURE__*/React.createElement("div", {
    className: "t-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "16 yr"), /*#__PURE__*/React.createElement("span", null, "SensAI battery")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "30 min"), /*#__PURE__*/React.createElement("span", null, "install time")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "87%"), /*#__PURE__*/React.createElement("span", null, "forecast confidence")))))));
}
function Capabilities() {
  const caps = [{
    eyebrow: 'Sense',
    title: 'Radar, GPS & fill-level hardware',
    body: 'Purpose-built devices that survive in drains, bins and basins. Internal blockage detection, four-way scanning, remote configuration.'
  }, {
    eyebrow: 'Predict',
    title: 'Domain-trained AI',
    body: 'Models built with CSIRO and council partners — trained on real Australian storm, flood and collection data, not generic corpora.'
  }, {
    eyebrow: 'Operate',
    title: 'ThinkOS & LiveFlow',
    body: 'Two operating systems, one account. Dispatch trucks. Issue flood warnings. Prove service. All from a browser.'
  }, {
    eyebrow: 'Care',
    title: 'M.Care — managed service',
    body: 'A dedicated Matter team watches your network so you can focus on the work. Alert management included.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "caps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "caps-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", null, "Infrastructure that sees, thinks and acts."), /*#__PURE__*/React.createElement("div", {
    className: "caps-grid"
  }, caps.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: "cap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cap-eyebrow"
  }, c.eyebrow), /*#__PURE__*/React.createElement("h4", null, c.title), /*#__PURE__*/React.createElement("p", null, c.body))))));
}
function Partners() {
  const names = ['CSIRO', 'City of Parramatta', 'Sydney Water', 'Hunter Water', 'Lane Cove Council', 'Blacktown City'];
  return /*#__PURE__*/React.createElement("section", {
    className: "partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "partners-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Working with"), /*#__PURE__*/React.createElement("div", {
    className: "partners-row"
  }, names.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "partner"
  }, n)))));
}
function BigCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bigcta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-inner"
  }, /*#__PURE__*/React.createElement("h2", null, "Automated workflows. Anywhere."), /*#__PURE__*/React.createElement("p", null, "Talk to the team about pilot programmes, integrations with your existing GIS and SCADA systems, or a site walk-through."), /*#__PURE__*/React.createElement("div", {
    className: "h-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn-primary"
  }, "Book a walk-through"), /*#__PURE__*/React.createElement("a", {
    className: "btn-ghost"
  }, "1300 265 140 \u2192"))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/matter-reversed.png",
    className: "sf-logo",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "sf-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Platform"), /*#__PURE__*/React.createElement("a", null, "ThinkOS"), /*#__PURE__*/React.createElement("a", null, "LiveFlow"), /*#__PURE__*/React.createElement("a", null, "SensAI"), /*#__PURE__*/React.createElement("a", null, "M.Care")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("a", null, "About"), /*#__PURE__*/React.createElement("a", null, "Careers"), /*#__PURE__*/React.createElement("a", null, "Partners"), /*#__PURE__*/React.createElement("a", null, "Press")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Contact"), /*#__PURE__*/React.createElement("a", null, "info@matter.city"), /*#__PURE__*/React.createElement("a", null, "1300 265 140"), /*#__PURE__*/React.createElement("a", null, "Sydney, NSW")))), /*#__PURE__*/React.createElement("div", {
    className: "sf-acknowledge"
  }, /*#__PURE__*/React.createElement("strong", null, "Acknowledgement of Country."), " Matter acknowledges the Traditional Custodians of the lands and waters on which we work, and pays respect to Elders past and present."), /*#__PURE__*/React.createElement("div", {
    className: "sf-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Matter Labs Pty Ltd."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Security"))));
}
window.SiteNav = SiteNav;
window.Hero = Hero;
window.Capabilities = Capabilities;
window.Partners = Partners;
window.BigCTA = BigCTA;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/matter/components/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wastematters/components/WastePanels.jsx
try { (() => {
/* global React */

function MetricCard({
  eyebrow,
  metric,
  unit,
  delta,
  trend,
  meta
}) {
  const trendClass = trend === 'up' ? 'up' : trend === 'down' ? 'down' : 'flat';
  const arrow = trend === 'up' ? '▲' : trend === 'down' ? '▼' : '▶';
  return /*#__PURE__*/React.createElement("div", {
    className: "metric-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mc-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "mc-metric"
  }, metric, unit && /*#__PURE__*/React.createElement("span", {
    className: "mc-unit"
  }, unit)), delta && /*#__PURE__*/React.createElement("div", {
    className: `mc-delta ${trendClass}`
  }, arrow, " ", delta), meta && /*#__PURE__*/React.createElement("div", {
    className: "mc-meta"
  }, meta));
}
function FleetMap() {
  // Stylised map placeholder — fake bin pins coloured by fill level
  const pins = [{
    x: 140,
    y: 110,
    fill: 95,
    label: '2417'
  }, {
    x: 230,
    y: 90,
    fill: 62
  }, {
    x: 310,
    y: 140,
    fill: 45
  }, {
    x: 190,
    y: 200,
    fill: 78
  }, {
    x: 380,
    y: 180,
    fill: 28
  }, {
    x: 460,
    y: 120,
    fill: 88
  }, {
    x: 420,
    y: 220,
    fill: 55
  }, {
    x: 260,
    y: 260,
    fill: 102,
    label: '2108 ⚠'
  }, {
    x: 520,
    y: 250,
    fill: 40
  }, {
    x: 110,
    y: 260,
    fill: 33
  }];
  const colorFor = f => f > 100 ? '#D64545' : f > 85 ? '#F19E21' : f > 60 ? '#84C96A' : '#43B02A';
  return /*#__PURE__*/React.createElement("div", {
    className: "fleetmap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Fleet this morning"), /*#__PURE__*/React.createElement("div", {
    className: "fm-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: "on"
  }, "Map"), /*#__PURE__*/React.createElement("button", null, "Routes"), /*#__PURE__*/React.createElement("button", null, "Satellite"))), /*#__PURE__*/React.createElement("div", {
    className: "fm-canvas"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 640 360",
    className: "fm-svg",
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 L 0 0 0 40",
    fill: "none",
    stroke: "#E6E9EC",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "640",
    height: "360",
    fill: "#F4F5F6"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "640",
    height: "360",
    fill: "url(#grid)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 200 Q 160 180 320 210 T 640 200",
    stroke: "#C3C9CE",
    strokeWidth: "10",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M320 0 Q 300 180 340 360",
    stroke: "#C3C9CE",
    strokeWidth: "8",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 80 L 640 100",
    stroke: "#C3C9CE",
    strokeWidth: "6",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 280 L 180 240 L 260 260 L 360 200 L 480 180 L 560 120",
    stroke: "#43B02A",
    strokeWidth: "3",
    fill: "none",
    strokeDasharray: "6 4"
  }), pins.map((p, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    transform: `translate(${p.x},${p.y})`
  }, /*#__PURE__*/React.createElement("circle", {
    r: "9",
    fill: colorFor(p.fill),
    stroke: "#fff",
    strokeWidth: "2"
  }), p.label && /*#__PURE__*/React.createElement("text", {
    x: "12",
    y: "4",
    fontSize: "10",
    fontFamily: "IBM Plex Mono, monospace",
    fill: "#0E1A1F"
  }, p.label))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(280,240)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-12",
    y: "-8",
    width: "24",
    height: "16",
    rx: "3",
    fill: "#205C40"
  }), /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "4",
    fontSize: "10",
    textAnchor: "middle",
    fill: "#fff",
    fontWeight: "600"
  }, "R14"))), /*#__PURE__*/React.createElement("div", {
    className: "fm-legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: '#43B02A'
    }
  }), "0\u201360%"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: '#84C96A'
    }
  }), "60\u201385%"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: '#F19E21'
    }
  }), "85\u2013100%"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: '#D64545'
    }
  }), "Overflow"))));
}
function AlertList({
  alerts,
  onResolve
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "alert-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Alerts ", /*#__PURE__*/React.createElement("span", {
    className: "al-count"
  }, alerts.filter(a => !a.resolved).length)), /*#__PURE__*/React.createElement("button", {
    className: "al-filter"
  }, "Filter")), /*#__PURE__*/React.createElement("div", {
    className: "al-items"
  }, alerts.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    className: `al-item sev-${a.sev} ${a.resolved ? 'resolved' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "al-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "al-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-title"
  }, a.title), /*#__PURE__*/React.createElement("div", {
    className: "al-meta"
  }, a.meta)), /*#__PURE__*/React.createElement("div", {
    className: "al-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "al-ts"
  }, a.ts), !a.resolved && /*#__PURE__*/React.createElement("button", {
    className: "al-resolve",
    onClick: () => onResolve(a.id)
  }, "Resolve"), a.resolved && /*#__PURE__*/React.createElement("span", {
    className: "al-done"
  }, "\u2713 resolved"))))));
}
function ProofTable() {
  const rows = [{
    time: '07:12',
    route: 'R14',
    bin: '2417',
    type: 'FOGO',
    sla: true,
    operator: 'J. Morgan'
  }, {
    time: '07:18',
    route: 'R14',
    bin: '2108',
    type: 'Recycling',
    sla: true,
    operator: 'J. Morgan'
  }, {
    time: '07:24',
    route: 'R09',
    bin: '1102',
    type: 'General',
    sla: true,
    operator: 'S. Patel'
  }, {
    time: '07:31',
    route: 'R09',
    bin: '1103',
    type: 'General',
    sla: false,
    operator: 'S. Patel'
  }, {
    time: '07:42',
    route: 'R14',
    bin: '2419',
    type: 'FOGO',
    sla: true,
    operator: 'J. Morgan'
  }, {
    time: '07:48',
    route: 'R14',
    bin: '2420',
    type: 'FOGO',
    sla: true,
    operator: 'J. Morgan'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Proof of service"), /*#__PURE__*/React.createElement("div", {
    className: "proof-actions"
  }, /*#__PURE__*/React.createElement("button", null, "Export CSV"), /*#__PURE__*/React.createElement("button", null, "Share report"))), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Time"), /*#__PURE__*/React.createElement("th", null, "Route"), /*#__PURE__*/React.createElement("th", null, "Bin"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "SLA"), /*#__PURE__*/React.createElement("th", null, "Operator"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "mono"
  }, r.time), /*#__PURE__*/React.createElement("td", null, r.route), /*#__PURE__*/React.createElement("td", {
    className: "mono"
  }, "#", r.bin), /*#__PURE__*/React.createElement("td", null, r.type), /*#__PURE__*/React.createElement("td", null, r.sla ? /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713 met") : /*#__PURE__*/React.createElement("span", {
    className: "miss"
  }, "\xD7 missed")), /*#__PURE__*/React.createElement("td", null, r.operator))))));
}
window.MetricCard = MetricCard;
window.FleetMap = FleetMap;
window.AlertList = AlertList;
window.ProofTable = ProofTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wastematters/components/WastePanels.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wastematters/components/WasteShell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState
} = React;
function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-left"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/matter-colour.png",
    className: "tb-logo",
    alt: "Matter"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tb-chip"
  }, "Waste")), /*#__PURE__*/React.createElement("div", {
    className: "tb-search"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search bins, routes, operators\u2026"
  }), /*#__PURE__*/React.createElement("span", {
    className: "kbd"
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    className: "tb-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tb-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  })), " Mon, 20 Apr"), /*#__PURE__*/React.createElement("button", {
    className: "tb-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tb-avatar"
  }, "JM")));
}
function SideNav({
  active,
  onNav
}) {
  const sections = [{
    label: 'Operations',
    items: [{
      id: 'fleet',
      icon: 'truck',
      name: 'Fleet'
    }, {
      id: 'routes',
      icon: 'route',
      name: 'Routes'
    }, {
      id: 'bins',
      icon: 'trash',
      name: 'Bins'
    }]
  }, {
    label: 'Proof',
    items: [{
      id: 'service',
      icon: 'scan',
      name: 'Service log'
    }, {
      id: 'sla',
      icon: 'shield',
      name: 'SLA reports'
    }]
  }, {
    label: 'Assets',
    items: [{
      id: 'inventory',
      icon: 'package',
      name: 'Inventory'
    }, {
      id: 'maint',
      icon: 'wrench',
      name: 'Maintenance'
    }]
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidenav"
  }, sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    className: "nav-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-label"
  }, s.label), s.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: `nav-item ${active === it.id ? 'active' : ''}`,
    onClick: () => onNav(it.id)
  }, /*#__PURE__*/React.createElement(IconGlyph, {
    name: it.icon
  }), it.name)))), /*#__PURE__*/React.createElement("div", {
    className: "nav-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-label"
  }, "Today"), /*#__PURE__*/React.createElement("div", {
    className: "nav-stat"
  }, /*#__PURE__*/React.createElement("span", null, "Routes running"), /*#__PURE__*/React.createElement("b", null, "14 / 16")), /*#__PURE__*/React.createElement("div", {
    className: "nav-stat"
  }, /*#__PURE__*/React.createElement("span", null, "Operators live"), /*#__PURE__*/React.createElement("b", null, "38"))));
}
function IconGlyph({
  name
}) {
  // Stroke 1.5, 18x18 — minimal inline versions styled like Lucide
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    truck: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M2 7h12v10H2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 10h4l3 3v4h-7"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "2"
    })),
    route: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "19",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.5 17.5C11 14 13 10 16.5 6.5"
    })),
    trash: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 6V4h8v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 6l1 14h12l1-14"
    })),
    scan: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 12h10"
    })),
    shield: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })),
    package: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M16 3l5 3v12l-9 5-9-5V6l5-3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.3 7L12 12l8.7-5M12 22V12"
    })),
    wrench: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M14.7 6.3a4 4 0 1 0 4 6.4l5 5 2-2-5-5a4 4 0 0 0-6-4.4z"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    className: "icon-glyph"
  }), paths[name] || paths.trash);
}
window.TopBar = TopBar;
window.SideNav = SideNav;
window.IconGlyph = IconGlyph;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wastematters/components/WasteShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/watermatters/components/WaterPanels.jsx
try { (() => {
/* global React */

function BasinCard({
  name,
  metric,
  unit,
  trend,
  sparkline,
  status
}) {
  const points = sparkline.map((v, i) => `${i / (sparkline.length - 1) * 100},${40 - v * 30}`).join(' ');
  const area = `0,40 ${points} 100,40`;
  return /*#__PURE__*/React.createElement("div", {
    className: `basin-card status-${status}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bc-name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "bc-status"
  }, status === 'rising' ? 'Rising' : status === 'stable' ? 'Stable' : 'Elevated')), /*#__PURE__*/React.createElement("span", {
    className: "bc-pill"
  }, trend)), /*#__PURE__*/React.createElement("div", {
    className: "bc-metric"
  }, metric, /*#__PURE__*/React.createElement("span", {
    className: "bc-unit"
  }, unit)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 40",
    className: "bc-spark",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: "var(--brand-primary)",
    opacity: "0.14"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: points,
    stroke: "var(--brand-primary)",
    strokeWidth: "1.4",
    fill: "none"
  })));
}
function ForecastChart() {
  // Observed (solid) to now, predicted (dashed) after; overflow band top
  // X: 0 -> 720 (12h window), Y: 0 (top) -> 220 (bottom)
  const now = 360;
  return /*#__PURE__*/React.createElement("div", {
    className: "forecast"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Storm window \u2014 next 12h"), /*#__PURE__*/React.createElement("p", null, "Rainfall forecast \xB7 river gauge \xB7 predicted overflow band")), /*#__PURE__*/React.createElement("div", {
    className: "fc-legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "o"
  }), "Observed"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "p"
  }), "Predicted"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "b"
  }), "Overflow band"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "r"
  }), "Rainfall"))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 720 260",
    className: "fc-svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "flow",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#3E8DD6",
    stopOpacity: "0.32"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#3E8DD6",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("pattern", {
    id: "rain",
    width: "10",
    height: "10",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "10",
    height: "10",
    fill: "#EAF3FC"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "360",
    y: "20",
    width: "360",
    height: "50",
    fill: "#F25B8E",
    opacity: "0.10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "360",
    y1: "70",
    x2: "720",
    y2: "70",
    stroke: "#F25B8E",
    strokeWidth: "1",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "708",
    y: "34",
    textAnchor: "end",
    fontSize: "10",
    fill: "#C93E6E",
    fontFamily: "Poppins",
    fontWeight: "600"
  }, "Overflow threshold 2.40m"), Array.from({
    length: 24
  }).map((_, i) => {
    const x = i * 30;
    const h = [10, 6, 8, 12, 20, 28, 36, 44, 38, 32, 26, 18, 14, 10, 6, 8, 12, 18, 22, 16, 12, 8, 6, 4][i];
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x + 4,
      y: 220 - h,
      width: "22",
      height: h,
      fill: "#CDE1F6"
    });
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,180 C60,175 120,168 180,160 S300,142 360,130 L360,230 L0,230 Z",
    fill: "url(#flow)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,180 C60,175 120,168 180,160 S300,142 360,130",
    stroke: "#175787",
    strokeWidth: "2.2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M360,130 C420,110 480,92 540,78 S660,58 720,50",
    stroke: "#3E8DD6",
    strokeWidth: "2.2",
    fill: "none",
    strokeDasharray: "6 4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: now,
    y1: "20",
    x2: now,
    y2: "230",
    stroke: "#7A8189",
    strokeDasharray: "3 3",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: now - 14,
    y: "18",
    width: "28",
    height: "14",
    fill: "#0E1A1F",
    rx: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: now,
    y: "28",
    textAnchor: "middle",
    fontSize: "9",
    fill: "#fff",
    fontFamily: "IBM Plex Mono",
    fontWeight: "600"
  }, "NOW"), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    x2: "720",
    y1: "230",
    y2: "230",
    stroke: "#C3C9CE",
    strokeWidth: "1"
  }), Array.from({
    length: 13
  }).map((_, i) => {
    const x = i * 60;
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: x,
      y: "250",
      fontSize: "10",
      fill: "#7A8189",
      fontFamily: "IBM Plex Mono",
      textAnchor: "middle"
    }, i === 6 ? 'now' : `${i < 6 ? '-' : '+'}${Math.abs(i - 6)}h`);
  })));
}
function IncidentList() {
  const items = [{
    name: 'Toongabbie drain — predicted blockage',
    conf: 82,
    eta: '2h 10m',
    sev: 'warn'
  }, {
    name: 'Parramatta River — gauge nearing overflow',
    conf: 67,
    eta: '4h 40m',
    sev: 'info'
  }, {
    name: 'Hunts Creek basin — sediment surge',
    conf: 54,
    eta: '6h 05m',
    sev: 'info'
  }, {
    name: 'SA-041 radar — low battery (16y lifecycle)',
    conf: 99,
    eta: 'device',
    sev: 'ok'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "incidents"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inc-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Predicted incidents"), /*#__PURE__*/React.createElement("span", {
    className: "inc-count"
  }, items.length, " open")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `inc-item sev-${it.sev}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "inc-name"
  }, it.name), /*#__PURE__*/React.createElement("div", {
    className: "inc-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inc-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: it.conf + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "inc-conf"
  }, it.conf, "%"), /*#__PURE__*/React.createElement("span", {
    className: "inc-eta"
  }, it.eta)))));
}
function SensorGrid() {
  const devs = [{
    id: 'SA-041',
    b: 94,
    last: '42s',
    ok: true
  }, {
    id: 'SA-042',
    b: 88,
    last: '1m',
    ok: true
  }, {
    id: 'SA-043',
    b: 72,
    last: '54s',
    ok: true
  }, {
    id: 'SA-044',
    b: 16,
    last: '3m',
    ok: false
  }, {
    id: 'SA-045',
    b: 91,
    last: '38s',
    ok: true
  }, {
    id: 'SA-046',
    b: 83,
    last: '1m',
    ok: true
  }, {
    id: 'SA-047',
    b: 0,
    last: '2h',
    ok: false
  }, {
    id: 'SA-048',
    b: 77,
    last: '49s',
    ok: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "sensors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sen-header"
  }, /*#__PURE__*/React.createElement("h3", null, "SensAI radar network"), /*#__PURE__*/React.createElement("div", {
    className: "sen-meta"
  }, "142 online \xB7 2 offline \xB7 avg battery 84%")), /*#__PURE__*/React.createElement("div", {
    className: "sen-grid"
  }, devs.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    className: `sen ${d.ok ? '' : 'offline'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "sen-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sen-id"
  }, d.id), /*#__PURE__*/React.createElement("span", {
    className: `sen-status ${d.ok ? 'ok' : 'err'}`
  }, d.ok ? 'online' : 'offline')), /*#__PURE__*/React.createElement("div", {
    className: "sen-bat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: d.b + '%',
      background: d.b < 20 ? '#D64545' : d.b < 50 ? '#F19E21' : '#3E8DD6'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "sen-foot"
  }, /*#__PURE__*/React.createElement("span", null, d.b, "%"), /*#__PURE__*/React.createElement("span", null, "last ", d.last))))));
}
window.BasinCard = BasinCard;
window.ForecastChart = ForecastChart;
window.IncidentList = IncidentList;
window.SensorGrid = SensorGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/watermatters/components/WaterPanels.jsx", error: String((e && e.message) || e) }); }

// ui_kits/watermatters/components/WaterShell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-left"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/matter-water-colour.png",
    className: "tb-logo",
    alt: "Matter Water"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tb-chip"
  }, "Water"), /*#__PURE__*/React.createElement("span", {
    className: "tb-product"
  }, "LiveFlow")), /*#__PURE__*/React.createElement("div", {
    className: "tb-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tb-select"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v8M4.93 10.93l5.66 5.66M19.07 10.93l-5.66 5.66M2 18h20"
  })), "Parramatta Basin \u2014 Upper", /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tb-window"
  }, /*#__PURE__*/React.createElement("span", null, "Forecast window"), /*#__PURE__*/React.createElement("button", null, "1h"), /*#__PURE__*/React.createElement("button", {
    className: "on"
  }, "6h"), /*#__PURE__*/React.createElement("button", null, "24h"), /*#__PURE__*/React.createElement("button", null, "7d"))), /*#__PURE__*/React.createElement("div", {
    className: "tb-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-conf"
  }, /*#__PURE__*/React.createElement("span", null, "Confidence"), /*#__PURE__*/React.createElement("b", null, "87%")), /*#__PURE__*/React.createElement("button", {
    className: "tb-btn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tb-avatar"
  }, "RK")));
}
function SideNav({
  active,
  onNav
}) {
  const sections = [{
    label: 'Live',
    items: [{
      id: 'liveflow',
      icon: 'activity',
      name: 'LiveFlow'
    }, {
      id: 'basins',
      icon: 'waves',
      name: 'Basins'
    }, {
      id: 'sensors',
      icon: 'radar',
      name: 'SensAI devices'
    }]
  }, {
    label: 'Predict',
    items: [{
      id: 'forecasts',
      icon: 'cloud',
      name: 'Forecasts'
    }, {
      id: 'stormpilot',
      icon: 'zap',
      name: 'StormPilot'
    }, {
      id: 'twin',
      icon: 'orbit',
      name: 'Twin'
    }]
  }, {
    label: 'Care',
    items: [{
      id: 'mcare',
      icon: 'heart',
      name: 'M.Care'
    }, {
      id: 'reports',
      icon: 'file',
      name: 'Reports'
    }]
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidenav"
  }, sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    className: "nav-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-label"
  }, s.label), s.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: `nav-item ${active === it.id ? 'active' : ''}`,
    onClick: () => onNav(it.id)
  }, /*#__PURE__*/React.createElement(IconGlyph, {
    name: it.icon
  }), it.name)))), /*#__PURE__*/React.createElement("div", {
    className: "nav-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-label"
  }, "Network"), /*#__PURE__*/React.createElement("div", {
    className: "nav-stat"
  }, /*#__PURE__*/React.createElement("span", null, "SensAI online"), /*#__PURE__*/React.createElement("b", null, "142 / 144")), /*#__PURE__*/React.createElement("div", {
    className: "nav-stat"
  }, /*#__PURE__*/React.createElement("span", null, "Basins watched"), /*#__PURE__*/React.createElement("b", null, "18"))));
}
function IconGlyph({
  name
}) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    activity: /*#__PURE__*/React.createElement("path", {
      d: "M3 12h4l3-9 4 18 3-9h4"
    }),
    waves: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"
    })),
    radar: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 12l6-3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.5"
    })),
    cloud: /*#__PURE__*/React.createElement("path", {
      d: "M18 10h-1.3A6 6 0 0 0 7 11h-.5a4 4 0 0 0 0 8H18a4 4 0 0 0 0-8z"
    }),
    zap: /*#__PURE__*/React.createElement("path", {
      d: "M13 2 3 14h7l-1 8 10-12h-7l1-8z"
    }),
    orbit: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12c0 4-4 7-9 7s-9-3-9-7 4-7 9-7"
    })),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"
    }),
    file: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 2v6h6"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    className: "icon-glyph"
  }), paths[name] || paths.activity);
}
window.TopBar = TopBar;
window.SideNav = SideNav;
window.WaterIconGlyph = IconGlyph;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/watermatters/components/WaterShell.jsx", error: String((e && e.message) || e) }); }

})();
