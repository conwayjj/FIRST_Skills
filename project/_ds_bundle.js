/* @ds-bundle: {"format":4,"namespace":"ThatONETeamDesignSystem_a6a028","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/content/Card.jsx":"0205a479a911","components/content/SectionHeading.jsx":"5b4943629505","components/content/StatCard.jsx":"2e5d55c40aad","components/core/Badge.jsx":"1a3b5b39a8b2","components/core/Button.jsx":"162737f95957","components/core/IconButton.jsx":"a56351e165a7","components/forms/Input.jsx":"6189d7069197","ui_kits/website/Facts.jsx":"e1d86b1f9733","ui_kits/website/Footer.jsx":"dfc8ae8675b2","ui_kits/website/Header.jsx":"bff97d309be9","ui_kits/website/Hero.jsx":"ca946c74cffd","ui_kits/website/Programs.jsx":"bd2adce6e055","ui_kits/website/Support.jsx":"d6276249862e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ThatONETeamDesignSystem_a6a028 = window.ThatONETeamDesignSystem_a6a028 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * That ONE Team — Card
 * General content surface. Clean white card, soft neutral shadow, optional
 * top accent rule in Team Blue. No colored glows.
 */
function Card({
  accent = false,
  padding = 'md',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const pads = {
    sm: '16px',
    md: '24px',
    lg: '32px'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border)',
      borderTop: accent ? '4px solid var(--tot-blue)' : '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
      padding: pads[padding],
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * That ONE Team — SectionHeading
 * Eyebrow + title + optional intro. The recurring section opener across the
 * site (uppercase blue eyebrow, squared heading).
 */
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '13px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--tot-blue)',
      marginBottom: '10px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      lineHeight: 1.12,
      letterSpacing: '0.01em',
      color: onDark ? 'var(--tot-white)' : 'var(--text-strong)',
      margin: 0,
      textWrap: 'balance'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '14px',
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      lineHeight: 1.6,
      color: onDark ? 'var(--grey-300)' : 'var(--text-muted)',
      maxWidth: '62ch',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * That ONE Team — StatCard
 * A single big number + label, used for the "Facts About FIRST" stat strip.
 * Big display figure in Team Blue, squared label beneath.
 */
function StatCard({
  value,
  label,
  align = 'left',
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
      lineHeight: 1,
      letterSpacing: '0.02em',
      color: onDark ? 'var(--blue-400)' : 'var(--tot-blue)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      lineHeight: 1.4,
      color: onDark ? 'var(--grey-300)' : 'var(--text-muted)',
      maxWidth: '22ch',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * That ONE Team — Badge
 * Compact status / award pill. Used for competition awards ("Impact Award"),
 * program grade bands ("Grades 9-12"), season labels, etc.
 */
function Badge({
  variant = 'brand',
  size = 'md',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '2px 8px',
      fontSize: '10px'
    },
    md: {
      padding: '4px 12px',
      fontSize: '12px'
    },
    lg: {
      padding: '6px 16px',
      fontSize: '13px'
    }
  };
  const variants = {
    brand: {
      background: 'var(--tot-blue)',
      color: 'var(--tot-white)',
      border: '1px solid var(--tot-blue)'
    },
    soft: {
      background: 'var(--brand-soft)',
      color: 'var(--brand-strong)',
      border: '1px solid var(--blue-200)'
    },
    neutral: {
      background: 'var(--grey-100)',
      color: 'var(--grey-800)',
      border: '1px solid var(--grey-200)'
    },
    dark: {
      background: 'var(--grey-900)',
      color: 'var(--tot-white)',
      border: '1px solid var(--grey-900)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--tot-blue)',
      border: '1px solid var(--tot-blue)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * That ONE Team — Button
 * Brand-forward action. Blue primary, outline secondary, quiet ghost.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '15px',
      gap: '8px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '17px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--tot-blue)',
      color: 'var(--brand-ink)',
      border: '2px solid var(--tot-blue)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--tot-blue)',
      border: '2px solid var(--tot-blue)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid transparent'
    },
    dark: {
      background: 'var(--grey-900)',
      color: 'var(--tot-white)',
      border: '2px solid var(--grey-900)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      textDecoration: 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur) var(--ease-standard)',
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * That ONE Team — IconButton
 * Square icon-only control. Used for social links, nav toggles, close buttons.
 * Pass an SVG / icon element as children.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  style = {},
  children,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size];
  const variants = {
    solid: {
      background: 'var(--tot-blue)',
      color: 'var(--tot-white)',
      border: '2px solid var(--tot-blue)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--tot-blue)',
      border: '2px solid var(--tot-blue)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--grey-700)',
      border: '2px solid transparent'
    },
    dark: {
      background: 'var(--grey-900)',
      color: 'var(--tot-white)',
      border: '2px solid var(--grey-900)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'filter var(--dur) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = 'brightness(0.9)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * That ONE Team — Input
 * Text field for email signup, contact forms, donations. Squared, 2px border
 * that turns Team Blue on focus.
 */
function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 12px',
      fontSize: '14px'
    },
    md: {
      padding: '12px 14px',
      fontSize: '15px'
    },
    lg: {
      padding: '15px 16px',
      fontSize: '16px'
    }
  };
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--tot-blue)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '12px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-strong)',
      background: 'var(--surface)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focused && !error ? '0 0 0 3px var(--blue-100)' : 'none',
      transition: 'border-color var(--dur) var(--ease-standard), box-shadow var(--dur) var(--ease-standard)',
      ...sizes[size],
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Facts.jsx
try { (() => {
// That ONE Team — Website UI Kit :: Facts About FIRST (stat strip on dark)
function TotFacts() {
  const {
    StatCard,
    SectionHeading
  } = window.ThatONETeamDesignSystem_a6a028;
  const stats = [{
    value: '785K+',
    label: 'students participated in the 2023-2024 season'
  }, {
    value: '28',
    label: 'countries with FIRST® teams'
  }, {
    value: '81%',
    label: 'of FIRST® alumni declare majors in STEM'
  }, {
    value: '83%',
    label: 'have confidence to take leadership roles in school'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--tot-blue)',
      color: 'var(--tot-white)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.85)',
      marginBottom: 8
    }
  }, "Facts About FIRST\xAE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'clamp(1.8rem,3vw,2.4rem)',
      margin: '0 0 40px',
      maxWidth: '20ch'
    }
  }, "Inspiring young people to create innovative solutions through robotics."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '3px solid rgba(255,255,255,0.4)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2.2rem,4vw,3.2rem)',
      lineHeight: 1,
      letterSpacing: '.02em'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 14,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,0.88)'
    }
  }, s.label))))));
}
window.TotFacts = TotFacts;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Facts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// That ONE Team — Website UI Kit :: Footer
function TotFooter() {
  const Social = ({
    children,
    label
  }) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": label,
    style: {
      width: 40,
      height: 40,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--tot-white)',
      background: 'rgba(255,255,255,0.12)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--grey-900)',
      color: 'var(--grey-300)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 24px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWide || "../../assets/logo-wide.png",
    alt: "That ONE Team \u2014 Our Next Engineers",
    style: {
      height: 60,
      marginBottom: 16,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      color: 'var(--grey-400)',
      margin: '0 0 18px'
    }
  }, "Playing the Water Game Since 2013"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Social, {
    label: "Facebook"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8c0-.6.4-1 1-1z"
  }))), /*#__PURE__*/React.createElement(Social, {
    label: "X"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2h3l-7 8 8 12h-6l-5-7-5 7H0l8-11L0 2h6l4 6 5-6z"
  }))), /*#__PURE__*/React.createElement(Social, {
    label: "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.2"
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 14
    }
  }, "That STEAM Space"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      margin: 0
    }
  }, "3516-A Plainfield Ave NE", /*#__PURE__*/React.createElement("br", null), "Grand Rapids, MI 49525", /*#__PURE__*/React.createElement("br", null), "P \u2014 616.929.0686", /*#__PURE__*/React.createElement("br", null), "info@thatoneteam.org")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 14
    }
  }, "Explore"), ['2026 Season', 'Join a Team', 'Sponsors', 'Donate', 'Contact Us'].map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--grey-300)',
      textDecoration: 'none',
      padding: '4px 0'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '18px 24px',
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--grey-500)'
    }
  }, "Copyright 2025 \xB7 That ONE Team & Paradise Teams \xB7 Proud Representatives of FIRST\xAE (For the Inspiration and Recognition of Science and Technology)"));
}
window.TotFooter = TotFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// That ONE Team — Website UI Kit :: Top bar + primary navigation
// Recreation of the site header (utility bar with socials + main nav).
function TotHeader() {
  const [open, setOpen] = React.useState(null);
  const nav = [{
    label: 'Home',
    href: '#'
  }, {
    label: 'About',
    children: ['FAQs', 'Resources', '2026 Season']
  }, {
    label: 'Join A Team (K-12)',
    children: ['FLL Explore K-3', 'FLL Challenge 4-6', 'FTC 7-8', 'FRC 9-12']
  }, {
    label: 'Off-Season Event',
    href: '#'
  }, {
    label: 'Summer Camp',
    href: '#'
  }, {
    label: 'Sponsors',
    href: '#'
  }, {
    label: 'Donate',
    href: '#'
  }, {
    label: 'Contact Us',
    href: '#'
  }];
  const Social = ({
    children,
    label
  }) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": label,
    style: {
      width: 30,
      height: 30,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--tot-white)',
      background: 'rgba(255,255,255,0.14)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grey-900)',
      color: 'var(--grey-300)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '8px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--blue-300)',
      fontWeight: 500
    }
  }, "Join Our Email List"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--grey-300)'
    }
  }, "info@thatoneteam.org"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Social, {
    label: "Facebook"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8c0-.6.4-1 1-1z"
  }))), /*#__PURE__*/React.createElement(Social, {
    label: "X"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2h3l-7 8 8 12h-6l-5-7-5 7H0l8-11L0 2h6l4 6 5-6z"
  }))), /*#__PURE__*/React.createElement(Social, {
    label: "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.2"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoSquare || "../../assets/logo-square.png",
    alt: "That ONE Team",
    style: {
      height: 46,
      width: 46,
      borderRadius: 4,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, "Our Next Engineers")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, nav.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => item.children && setOpen(i),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    style: {
      display: 'inline-block',
      padding: '10px 12px',
      fontSize: 14,
      fontWeight: 500,
      color: item.label === 'Donate' ? 'var(--tot-blue)' : 'var(--text-body)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)',
      fontWeight: item.label === 'Donate' ? 700 : 500
    }
  }, item.label, item.children ? ' ▾' : ''), item.children && open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      minWidth: 200,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      zIndex: 200
    }
  }, item.children.map((c, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: "#",
    style: {
      display: 'block',
      padding: '9px 12px',
      fontSize: 13,
      color: 'var(--text-body)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--brand-soft)';
      e.currentTarget.style.color = 'var(--brand-strong)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-body)';
    }
  }, c)))))))));
}
window.TotHeader = TotHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// That ONE Team — Website UI Kit :: Hero
// The homepage banner: award headline + photo. Photo is a placeholder slot
// (brand rule: full-robot, sharp, non-blurry, subject facing camera).
function TotHero() {
  const {
    Button,
    Badge
  } = window.ThatONETeamDesignSystem_a6a028;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grey-900)',
      color: 'var(--tot-white)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 24px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, "Impact Award"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    style: {
      color: 'var(--blue-300)',
      borderColor: 'var(--blue-400)'
    }
  }, "Event Winner")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem,4.4vw,3.4rem)',
      lineHeight: 1.08,
      margin: '0 0 18px',
      letterSpacing: '.01em'
    }
  }, "Double Blue Banners", /*#__PURE__*/React.createElement("br", null), "at Muskegon"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--grey-300)',
      maxWidth: '46ch',
      margin: '0 0 28px'
    }
  }, "We had the pleasure of competing at the Muskegon District Event in Alliance 3 and won the event \u2014 plus the Impact Award, the most prestigious honor in FIRST\xAE."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Learn More About Our 2026 Season"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: 'var(--tot-white)'
    }
  }, "Meet the Team"))), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Full-robot competition photo",
    ratio: "4 / 3"
  })));
}

// Reusable image placeholder honoring the brand's photography rules.
function PhotoSlot({
  label,
  ratio = '16 / 9',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--blue-700), var(--blue-900))',
      border: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      color: 'rgba(255,255,255,0.72)',
      textAlign: 'center',
      padding: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .7
    }
  }, "Sharp \xB7 full robot \xB7 subject facing camera"));
}
window.TotHero = TotHero;
window.PhotoSlot = PhotoSlot;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
// That ONE Team — Website UI Kit :: Programs (K-12 team tiles)
function TotPrograms() {
  const {
    Card,
    Badge,
    Button,
    SectionHeading
  } = window.ThatONETeamDesignSystem_a6a028;
  const programs = [{
    band: 'Grades K-3',
    name: 'FIRST® LEGO® League Explore',
    body: 'Introduces science, technology, engineering, and math to children with a yearly themed challenge — a LEGO model and a Show Me Poster.'
  }, {
    band: 'Grades 4-6',
    name: 'FIRST® LEGO® League Challenge',
    body: 'Friendly competition at its heart: teams research, problem-solve, code, and build a LEGO robot to navigate the missions of a robot game.'
  }, {
    band: 'Grades 7-8',
    name: 'FIRST® Tech Challenge',
    body: 'Students learn to think like engineers — designing, building, and coding robots to compete in an alliance format using Java-based programming.'
  }, {
    band: 'Grades 9-12',
    name: 'FIRST® Robotics Competition',
    body: 'Under strict rules and limited time, build an industrial-sized robot to play a difficult field game in alliance with other teams.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Join A Team \xB7 K-12",
    title: "Explore and be inspired through STEAM",
    intro: "Our teams are made up of students from grades K-12, and compete as part of FIRST\xAE. Registration starts in late May for the 2026-2027 season."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, programs.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    accent: i === 3,
    interactive: true,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: i === 3 ? 'brand' : 'soft'
  }, p.band), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      margin: '14px 0 10px',
      lineHeight: 1.2
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: '0 0 18px',
      flex: 1
    }
  }, p.body), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: i === 3 ? 'primary' : 'secondary'
  }, "Learn More"))))));
}
window.TotPrograms = TotPrograms;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Support.jsx
try { (() => {
// That ONE Team — Website UI Kit :: Support / Join CTA + email signup
function TotSupport() {
  const {
    Card,
    Button,
    Input,
    SectionHeading
  } = window.ThatONETeamDesignSystem_a6a028;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-alt)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    accent: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Join One of Our Teams",
    title: "Want to know more? Where do I start?"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: '14px 0 22px'
    }
  }, "Explore and be inspired through STEAM \u2014 science, technology, engineering, arts, and math. Drop your email and we'll be in touch."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      background: 'var(--brand-soft)',
      color: 'var(--brand-strong)',
      borderRadius: 'var(--radius-md)',
      fontWeight: 600,
      fontFamily: 'var(--font-heading)',
      letterSpacing: '.02em'
    }
  }, "\u2713 Thanks! We'll reach out to info@thatoneteam.org shortly.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    id: "join-email",
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: () => setSent(true)
  }, "Join List"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Would You Like to Support Us?",
    title: "Your gift builds Our Next Engineers"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: '14px 0 22px'
    }
  }, "Donations are tax deductible and directly fund our K-12 teams, robots, and outreach."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg"
  }, "Donate via PayPal"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "More Ways to Help")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "That STEAM Space \xB7 3516-A Plainfield Ave NE, Grand Rapids, MI 49525 \xB7 616.929.0686"))));
}
window.TotSupport = TotSupport;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Support.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

})();
