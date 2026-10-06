/* @ds-bundle: {"format":4,"namespace":"PampangaSBestDesignSystem_bd03b6","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"FeatureCard","sourcePath":"components/core/FeatureCard.jsx"},{"name":"Footer","sourcePath":"components/core/Footer.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Navbar","sourcePath":"components/core/Navbar.jsx"},{"name":"NewsCard","sourcePath":"components/core/NewsCard.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"RecipeCard","sourcePath":"components/core/RecipeCard.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StoreCard","sourcePath":"components/core/StoreCard.jsx"},{"name":"TimelineItem","sourcePath":"components/core/TimelineItem.jsx"}],"sourceHashes":{"components/core/Button.jsx":"0a79a3156bd0","components/core/Eyebrow.jsx":"db9594dc3246","components/core/FeatureCard.jsx":"5e011dfdfe8c","components/core/Footer.jsx":"6a31d8506e19","components/core/Icon.jsx":"3066fe46e1ae","components/core/IconButton.jsx":"f56817291c2c","components/core/Input.jsx":"cd9e0f67a9d3","components/core/Navbar.jsx":"d9ac48933edf","components/core/NewsCard.jsx":"f2a9d1e3aa24","components/core/ProductCard.jsx":"47b3fcfd5090","components/core/RecipeCard.jsx":"720d0afaab47","components/core/SectionHeading.jsx":"d7b03838ae34","components/core/StoreCard.jsx":"938ad804eca3","components/core/TimelineItem.jsx":"0203f20432f6","ui_kits/website/Pages.jsx":"343028340cd7","ui_kits/website/Sections.jsx":"5c021daa9697","ui_kits/website/data.js":"19f65dec6bf2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PampangaSBestDesignSystem_bd03b6 = window.PampangaSBestDesignSystem_bd03b6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Eyebrow.jsx
try { (() => {
/** Small caps section label above headlines. inverse=true on green. */
function Eyebrow({
  children,
  inverse,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-eyebrow)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Lucide wrapper. Host page loads https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js; falls back to an empty box of the same size. */
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth = 1.75,
  style
}) {
  const L = typeof window !== 'undefined' && window.lucide;
  const pascal = name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  const def = L && L.icons && (L.icons[pascal] || L.icons[name]);
  const box = {
    width: size,
    height: size,
    display: 'inline-block',
    flexShrink: 0,
    verticalAlign: 'middle',
    ...style
  };
  if (!def) return /*#__PURE__*/React.createElement("span", {
    style: box,
    "aria-hidden": "true"
  });
  const children = Array.isArray(def) ? Array.isArray(def[2]) ? def[2] : def : def.children || [];
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: box,
    "aria-hidden": "true"
  }, children.filter(Array.isArray).map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
/** variant: primary | outline | inverse | inverse-outline | link. size: sm | md */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  children,
  disabled,
  style,
  onClick,
  href
}) {
  const [hov, setHov] = useState(false);
  const [act, setAct] = useState(false);
  const pad = size === 'sm' ? '9px 16px' : '12px 22px';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: pad,
    borderRadius: 'var(--radius-sm)',
    font: 'var(--type-nav)',
    letterSpacing: 'var(--tracking-nav)',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1.5px solid transparent',
    transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)',
    textDecoration: 'none',
    opacity: disabled ? .5 : 1,
    whiteSpace: 'nowrap',
    lineHeight: 1
  };
  const v = {
    primary: {
      background: act ? 'var(--color-primary-active)' : hov ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: '#fff'
    },
    outline: {
      background: hov ? 'var(--surface-tint)' : 'transparent',
      color: 'var(--pb-green-900)',
      borderColor: 'var(--pb-green-900)'
    },
    inverse: {
      background: hov ? 'var(--pb-cream-100)' : '#fff',
      color: 'var(--pb-green-900)'
    },
    'inverse-outline': {
      background: hov ? 'rgba(255,255,255,.12)' : 'transparent',
      color: '#fff',
      borderColor: hov ? '#fff' : 'var(--border-on-inverse)'
    },
    link: {
      background: 'transparent',
      color: hov ? 'var(--link-hover)' : 'var(--link)',
      padding: 0,
      borderRadius: 0,
      textDecoration: hov ? 'underline' : 'none'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setAct(false);
    },
    onMouseDown: () => setAct(true),
    onMouseUp: () => setAct(false),
    style: {
      ...base,
      ...v,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 14
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureCard.jsx
try { (() => {
/** Horizontal card: green circle icon left, serif title + body + link right. Used for Business Opportunities. */
function FeatureCard({
  icon,
  title,
  body,
  cta,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 24,
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--color-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, body), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: onClick,
    style: {
      marginTop: 4,
      fontSize: 11
    }
  }, cta)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Footer.jsx
try { (() => {
const ASSETS = typeof window !== 'undefined' && window.PB_ASSET_BASE || 'assets/';
const LOGO = ASSETS + 'logo-modern-on-green.png';
const COLS = {
  'Quick links': ['Our Story', 'Products', 'Recipes', 'Where to Buy', 'Business Opportunities', 'News & Stories', 'Contact'],
  'Customer support': ['FAQs', 'Store Locator', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'],
  'Business': ['Become a Dealer', 'Become a Distributor']
};
/** Green-950 footer: logo + tagline + socials, three link columns, contact column, copyright. */
function Footer({
  columns = COLS,
  address = '#1 Pampanga’s Best Drive, San Fernando, Pampanga, Philippines 2000',
  phone = '+63 (45) 455 0012',
  email = 'info@pampangasbest.com',
  year = 2026,
  style
}) {
  const link = {
    font: 'var(--type-body-sm)',
    color: 'rgba(255,255,255,.82)',
    textDecoration: 'none'
  };
  const head = {
    font: 'var(--type-eyebrow)',
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: '#fff',
    marginBottom: 14
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pb-green-900)',
      color: '#fff',
      padding: '48px var(--container-pad) 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1.3fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Pampanga\u2019s Best",
    style: {
      height: 68,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1.5 var(--font-sans)',
      color: '#fff'
    }
  }, "The Taste of Home.", /*#__PURE__*/React.createElement("br", null), "Since 1967."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['facebook', 'instagram', 'youtube', 'music'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: '#fff',
      color: 'var(--pb-green-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: n,
    size: 15,
    strokeWidth: 2
  }))))), Object.entries(columns).map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: link
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Contact us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['map-pin', address], ['phone', phone], ['mail', email]].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      ...link
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: i,
    size: 15,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '36px auto 0',
      paddingTop: 18,
      borderTop: '1px solid rgba(255,255,255,.14)',
      textAlign: 'center',
      font: '500 11px/1 var(--font-sans)',
      color: 'rgba(255,255,255,.65)'
    }
  }, "\xA9 ", year, " Pampanga\u2019s Best. All Rights Reserved."));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Footer.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const {
  useState
} = React;
/** Round icon-only button. variant: primary (green fill) | ghost (transparent, for nav on green) | light (white fill) */
function IconButton({
  icon,
  variant = 'primary',
  size = 40,
  label,
  onClick,
  style
}) {
  const [hov, setHov] = useState(false);
  const v = {
    primary: {
      background: hov ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: '#fff'
    },
    ghost: {
      background: hov ? 'rgba(255,255,255,.12)' : 'transparent',
      color: '#fff'
    },
    light: {
      background: hov ? 'var(--pb-cream-100)' : '#fff',
      color: 'var(--pb-green-900)',
      boxShadow: 'var(--shadow-card)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background var(--duration-base) var(--ease-out)',
      ...v,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * .45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
const {
  useState
} = React;
/** Text input, 40px tall, 4px radius. icon renders trailing; buttonLabel renders an attached primary button (newsletter). */
function Input({
  placeholder,
  value,
  onChange,
  icon,
  buttonLabel,
  onSubmit,
  type = 'text',
  style
}) {
  const [focus, setFocus] = useState(false);
  const field = {
    flex: 1,
    height: 40,
    padding: '0 12px',
    border: '1px solid ' + (focus ? 'var(--pb-green-500)' : 'var(--border-subtle)'),
    borderRadius: 'var(--radius-sm)',
    font: 'var(--type-body-sm)',
    color: 'var(--text-body)',
    background: '#fff',
    outline: 0,
    boxShadow: focus ? 'var(--focus-ring)' : 'none',
    minWidth: 120,
    width: '100%'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'stretch',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...field,
      paddingRight: icon ? 36 : 12
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--pb-green-900)",
    style: {
      position: 'absolute',
      right: 12,
      top: 12
    }
  })), buttonLabel && /*#__PURE__*/React.createElement("button", {
    onClick: onSubmit,
    style: {
      height: 40,
      padding: '0 16px',
      border: 0,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-primary)',
      color: '#fff',
      font: 'var(--type-nav)',
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Navbar.jsx
try { (() => {
const {
  useState
} = React;
const ASSETS = typeof window !== 'undefined' && window.PB_ASSET_BASE || 'assets/';
const LOGO = ASSETS + 'logo-modern-on-green.png';
/** Fixed-height green header: logo, caps nav with gold active underline, search, Shop Online. */
function Navbar({
  items = ['Home', 'Our Story', 'Products', 'Recipes', 'Where to Buy', 'Business Opportunities', 'News & Stories', 'Contact'],
  dropdowns = ['Products', 'Business Opportunities'],
  active = 'Home',
  onNavigate,
  onShop,
  style
}) {
  const [hov, setHov] = useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--nav-height)',
      background: 'var(--surface-inverse)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--container-pad)',
      gap: 20,
      minWidth: 1240,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Pampanga\u2019s Best",
    style: {
      height: 54,
      cursor: 'pointer'
    },
    onClick: () => onNavigate && onNavigate('Home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 18,
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it);
      },
      onMouseEnter: () => setHov(it),
      onMouseLeave: () => setHov(null),
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding: '8px 0',
        font: 'var(--type-nav)',
        letterSpacing: 'var(--tracking-nav)',
        textTransform: 'uppercase',
        color: on ? 'var(--pb-gold-500)' : hov === it ? '#fff' : 'rgba(255,255,255,.88)',
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      }
    }, it, dropdowns.includes(it) && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 12
    }), on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        background: 'var(--pb-gold-500)'
      }
    }));
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    style: {
      marginLeft: 8,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse-outline",
    size: "sm",
    iconRight: "shopping-cart",
    onClick: onShop,
    style: {
      borderColor: '#fff'
    }
  }, "Shop online"));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/core/NewsCard.jsx
try { (() => {
const {
  useState
} = React;
/** News tile: image, bold title, small caps date. badge renders a green corner label ("NEW PRODUCT"). */
function NewsCard({
  image,
  title,
  date,
  badge,
  onClick,
  style
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: hov ? 'var(--shadow-card-hover)' : 'none',
      transform: hov ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1',
      background: 'url(' + image + ') center/cover'
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 8,
      top: 8,
      background: 'var(--color-primary)',
      color: '#fff',
      font: '700 9px/1.2 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '4px 6px',
      borderRadius: 'var(--radius-xs)'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13px/1.3 var(--font-sans)',
      color: 'var(--pb-ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 9px/1 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, date)));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
const {
  useState
} = React;
/** Product tile: bordered white card, square image, name + one-line description. meta renders a small size line (e.g. "220g | 450g"). */
function ProductCard({
  image,
  name,
  description,
  meta,
  onClick,
  style
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      transform: hov ? 'translateY(-2px)' : 'none',
      boxShadow: hov ? 'var(--shadow-card-hover)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      background: 'var(--pb-cream-50) url(' + image + ') center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--pb-ink-900)'
    }
  }, name), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/RecipeCard.jsx
try { (() => {
const {
  useState
} = React;
/** Recipe tile: shadowed white card, 4:3 image, centered bold title. */
function RecipeCard({
  image,
  title,
  onClick,
  style
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: hov ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hov ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      background: 'url(' + image + ') center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 12px 14px',
      textAlign: 'center',
      font: '700 13px/1.3 var(--font-sans)',
      color: 'var(--pb-ink-900)'
    }
  }, title));
}
Object.assign(__ds_scope, { RecipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RecipeCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Eyebrow + serif headline (+ optional body). align: left | center. level: display | h2 | h3. leaves=true adds the leaf ornaments (centered product heading). */
function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  level = 'h2',
  inverse,
  leaves,
  style,
  children
}) {
  const font = {
    display: 'var(--type-display)',
    h2: 'var(--type-h2)',
    h3: 'var(--type-h3)'
  }[level];
  const color = inverse ? 'var(--text-on-inverse)' : 'var(--text-heading)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    inverse: inverse
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font,
      letterSpacing: 'var(--tracking-display)',
      color,
      display: leaves ? 'flex' : 'block',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      gap: 14,
      textWrap: 'pretty'
    }
  }, leaves && /*#__PURE__*/React.createElement("img", {
    src: LEAF,
    alt: "",
    style: {
      height: 26,
      transform: 'scaleX(-1)'
    }
  }), /*#__PURE__*/React.createElement("span", null, title), leaves && /*#__PURE__*/React.createElement("img", {
    src: LEAF,
    alt: "",
    style: {
      height: 26
    }
  })), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-body)',
      maxWidth: 420
    }
  }, body), children);
}
const ASSETS = typeof window !== 'undefined' && window.PB_ASSET_BASE || 'assets/';
const LEAF = ASSETS + 'imagery/leaf-motif-right.png';
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StoreCard.jsx
try { (() => {
/** Floating store result card: photo left, name, address, directions link. */
function StoreCard({
  image,
  name,
  address,
  onDirections,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-float)',
      padding: 12,
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 'var(--radius-md)',
      flexShrink: 0,
      background: 'url(' + image + ') center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--pb-ink-900)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, address), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: onDirections,
    style: {
      fontSize: 11,
      marginTop: 2
    }
  }, "Get directions")));
}
Object.assign(__ds_scope, { StoreCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StoreCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TimelineItem.jsx
try { (() => {
/** One stop on the horizontal history timeline: dot on a line, serif year, small body. Place several in a flex row with no gap. */
function TimelineItem({
  year,
  body,
  first,
  last,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      paddingTop: 22,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 5,
      left: first ? '50%' : 0,
      right: last ? '50%' : 0,
      height: 1.5,
      background: 'var(--pb-green-900)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      marginLeft: -6,
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--pb-green-900)',
      border: '2px solid var(--surface-band)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px/1.2 var(--font-serif-display)',
      color: 'var(--text-heading)'
    }
  }, year), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      maxWidth: 160
    }
  }, body));
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS2 = window.PampangaSBestDesignSystem_bd03b6;
const {
  Button: Btn,
  Input: Inp,
  SectionHeading: SH,
  ProductCard: PC,
  RecipeCard: RC,
  NewsCard: NC,
  FeatureCard: FC,
  StoreCard: SC,
  Icon: Ic,
  Eyebrow: Eb
} = DS2;
const D = window.PB;
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Story, {
    go: go
  }), /*#__PURE__*/React.createElement(Products, {
    go: go
  }), /*#__PURE__*/React.createElement(Recipes, {
    go: go
  }), /*#__PURE__*/React.createElement(WhereToBuy, {
    go: go
  }), /*#__PURE__*/React.createElement(Business, {
    go: go
  }), /*#__PURE__*/React.createElement(News, {
    go: go
  }));
}
function ProductsPage({
  go
}) {
  const [cat, setCat] = React.useState('Tocino');
  const items = cat === 'Tocino' ? D.tocinoRange : D.products.filter(p => p.category === cat);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Our Products",
    title: "Products",
    body: "Eleven core products, one original recipe philosophy: quality meat, honest flavor, made in Pampanga.",
    image: D.I + 'ref-hero-breakfast.png'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      gap: 4,
      overflowX: 'auto'
    }
  }, D.categories.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      padding: '18px 14px',
      border: 0,
      borderBottom: '2px solid ' + (c === cat ? 'var(--pb-gold-500)' : 'transparent'),
      background: 'transparent',
      font: 'var(--type-nav)',
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      color: c === cat ? 'var(--pb-green-900)' : 'var(--text-muted)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, c)))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-page)",
    leaf: true
  }, items.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, items.map(p => /*#__PURE__*/React.createElement(PC, {
    key: p.name,
    image: p.image,
    name: p.name,
    meta: p.meta,
    description: p.description
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 0',
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "Product photos for ", cat, " were not in the supplied materials \u2014 placeholder left intentionally empty."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1.5',
      background: 'url(' + D.I + 'banner-tocino-samgyupsal.png) center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px 0 8px'
    }
  }, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Best with a twist?",
    title: "Tocino Samgy Na!",
    body: "Turn the original into a Korean-style grill night. Get the recipe and everything you need."
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => go('Recipes'),
    style: {
      marginTop: 8
    }
  }, "See more"))))));
}
function RecipesPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Recipes",
    title: "Cook. Share. Enjoy!",
    body: "Easy and delicious recipes for every occasion, made better with Pampanga\u2019s Best.",
    image: D.I + 'header-recipes-couple.png'
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-page)",
    leaf: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, D.recipes.map(r => /*#__PURE__*/React.createElement(RC, _extends({
    key: r.title
  }, r))))));
}
function LocationsPage({
  go
}) {
  const [region, setRegion] = React.useState('Outlets');
  const list = D.stores.filter(s => s.region === region);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Where to buy",
    title: "Locations",
    body: "Company outlets, dealers, and supermarkets nationwide. Saan ka man, bring the Best with you.",
    image: D.I + 'ref-history-store.png'
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-page)",
    leaf: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      padding: '16px 0',
      display: 'flex',
      flexDirection: 'column'
    }
  }, D.regions.map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRegion(r),
    style: {
      textAlign: 'left',
      padding: '14px 24px',
      border: 0,
      background: r === region ? 'var(--surface-card)' : 'transparent',
      color: r === region ? 'var(--pb-green-900)' : '#fff',
      font: '600 14px/1 var(--font-sans)',
      cursor: 'pointer'
    }
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      alignContent: 'start',
      minHeight: 320
    }
  }, list.length ? list.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--link)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, s.address), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "phone",
    size: 13
  }), s.phone))) : /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "Store list for ", region, " was not in the supplied materials."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Store finder",
    title: "Find a store near you",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      position: 'relative',
      height: 380,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '2px solid var(--pb-green-900)',
      background: 'url(' + D.I + 'map-clean.png) center/cover'
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    placeholder: "Enter City, Province or ZIP Code",
    icon: "search",
    style: {
      position: 'absolute',
      left: 20,
      top: 20,
      width: 320
    }
  }), /*#__PURE__*/React.createElement(SC, {
    image: D.I + 'ref-history-store.png',
    name: "Pampanga\u2019s Best \u2013 Main Building Outlet",
    address: "Jose Abad Santos Avenue, Dolores, San Fernando",
    style: {
      position: 'absolute',
      right: 24,
      bottom: 24,
      width: 400
    }
  })))));
}
function StoryPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Our Story",
    title: "The Legacy",
    body: "The FIRST and ORIGINAL Tocino Maker in the World.",
    image: D.I + 'legacy-family-photo.png'
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-card)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Since 1967",
    title: "A family kitchen in San Fernando",
    body: "What began in a small family kitchen as the first and original tocino has grown into a tradition shared in homes across the nation \u2014 bringing warmth, heritage, and the taste of true Filipino comfort. Pampanga\u2019s Best, Inc. is owned and operated by the Hizon family and manufactures eleven core products."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1.3',
      borderRadius: 'var(--radius-md)',
      background: 'url(' + D.I + 'legacy-family-photo.png) center/cover',
      boxShadow: 'var(--shadow-card)'
    }
  }))), /*#__PURE__*/React.createElement(Story, {
    go: go
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "What families say",
    title: "Loved in Filipino homes",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 32
    }
  }, D.testimonials.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      background: 'var(--surface-band)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 17px/1.45 var(--font-serif-display)',
      color: 'var(--text-heading)',
      fontStyle: 'italic'
    }
  }, "\u201C", t.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, t.name))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-inverse)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1.5',
      borderRadius: 'var(--radius-md)',
      background: 'url(' + D.I + 'factory-team.png) center/cover'
    }
  }), /*#__PURE__*/React.createElement(SH, {
    inverse: true,
    eyebrow: "Careers",
    title: "Be part of us",
    body: "We are hiring passionate individuals who strive to uplift others and bring out the best in every person they serve."
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "inverse",
    size: "sm",
    style: {
      marginTop: 8
    }
  }, "Apply now")))));
}
function BusinessPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Grow with us",
    title: "Business Opportunities",
    body: "Join our network of successful dealers and distributors.",
    image: D.I + 'banner-tocino-range.png'
  }), /*#__PURE__*/React.createElement(Business, {
    go: go
  }));
}
function NewsPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "News & Stories",
    title: "Latest Updates",
    body: "Press releases, BESTSerye, and stories from our communities.",
    image: D.I + 'factory-team.png'
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-page)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, D.news.map(n => /*#__PURE__*/React.createElement(NC, _extends({
    key: n.title
  }, n))))));
}
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const f = {
    height: 40,
    padding: '0 12px',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-sm)',
    font: 'var(--type-body-sm)',
    width: '100%',
    boxSizing: 'border-box',
    background: '#fff'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Contact",
    title: "Get in touch",
    body: "Need assistance? Our Customer Relations Officer is available Monday to Saturday, 8AM\u20138PM.",
    image: D.I + 'ref-history-store.png'
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-page)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, [['phone', 'Smart (0919) 080-3815 / Globe (0917) 815-2544'], ['mail', 'marketing@pampangasbest.com'], ['map-pin', 'Jose Abad Santos Avenue, Dolores, City of San Fernando, Pampanga']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--surface-inverse)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: i,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      paddingTop: 10
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-heading)'
    }
  }, "Salamat! We\u2019ll get back to you shortly.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: f,
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement("input", {
    style: f,
    placeholder: "Email address"
  })), /*#__PURE__*/React.createElement("input", {
    style: f,
    placeholder: "Subject"
  }), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...f,
      height: 120,
      padding: 12,
      resize: 'vertical'
    },
    placeholder: "How can we help?"
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => setSent(true),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Send message"))))));
}
Object.assign(window, {
  HomePage,
  ProductsPage,
  RecipesPage,
  LocationsPage,
  StoryPage,
  BusinessPage,
  NewsPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.PampangaSBestDesignSystem_bd03b6;
const {
  Button,
  IconButton,
  Input,
  Eyebrow,
  SectionHeading,
  ProductCard,
  RecipeCard,
  NewsCard,
  FeatureCard,
  TimelineItem,
  StoreCard,
  Icon
} = DS;
const PB = window.PB;
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--container-pad)'
};
function Section({
  bg = 'var(--surface-card)',
  leaf,
  children,
  style,
  pad = 'var(--section-pad-y)'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      position: 'relative',
      overflow: 'hidden',
      padding: pad + ' 0',
      ...style
    }
  }, leaf && /*#__PURE__*/React.createElement("img", {
    src: PB.I + 'leaf-motif.png',
    alt: "",
    style: {
      position: 'absolute',
      left: -30,
      top: -20,
      height: 220,
      opacity: .45,
      pointerEvents: 'none'
    }
  }), leaf && /*#__PURE__*/React.createElement("img", {
    src: PB.I + 'leaf-motif-right.png',
    alt: "",
    style: {
      position: 'absolute',
      right: -30,
      bottom: -30,
      height: 220,
      opacity: .45,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative'
    }
  }, children));
}
function Dots({
  n,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center'
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onChange(i),
    "aria-label": 'Slide ' + (i + 1),
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      background: i === active ? 'var(--pb-green-900)' : 'var(--pb-green-200)'
    }
  })));
}
function Hero({
  go
}) {
  const [slide, setSlide] = React.useState(0);
  const slides = [{
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Bringing the", /*#__PURE__*/React.createElement("br", null), "Taste of Home", /*#__PURE__*/React.createElement("br", null), "to Every Filipino", /*#__PURE__*/React.createElement("br", null), "Family"),
    body: 'Authentic Filipino goodness crafted with quality, tradition, and love since 1967.',
    image: PB.I + 'ref-hero-breakfast.png'
  }, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Una at", /*#__PURE__*/React.createElement("br", null), "Original"),
    body: 'The first and original tocino maker in the world. Sweet, savory, and made the Pampanga way.',
    image: PB.I + 'tocino-plate-clean.png'
  }, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Best-Sarap,", /*#__PURE__*/React.createElement("br", null), "Delivered"),
    body: 'Order your Pampanga’s Best favorites online and get them at your doorstep.',
    image: PB.I + 'banner-tocino-range.png'
  }];
  const s = slides[slide];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PB.I + 'leaf-motif.png',
    alt: "",
    style: {
      position: 'absolute',
      left: -40,
      top: 20,
      height: 260,
      opacity: .5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      alignItems: 'center',
      gap: 32,
      position: 'relative',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      maxWidth: 340
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('Products')
  }, "Explore our products"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('Where to Buy')
  }, "Find a store"))), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      margin: '0 -40px 0 0',
      minHeight: 560,
      background: 'url(' + s.image + ') center/cover',
      borderRadius: '0 0 0 12px',
      transition: 'background var(--duration-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 18
    }
  }, /*#__PURE__*/React.createElement(Dots, {
    n: slides.length,
    active: slide,
    onChange: setSlide
  })));
}
function Story({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-band)",
    leaf: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2.1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Story",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "A Taste That", /*#__PURE__*/React.createElement("br", null), "Started in Pampanga"),
    body: "From a small family business to a trusted Filipino food brand, Pampanga\u2019s Best has been bringing delicious Filipino favorites to families for generations."
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => go('Our Story'),
    style: {
      marginTop: 8
    }
  }, "Discover our story")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12
    }
  }, PB.history.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.year,
    style: {
      aspectRatio: '1.35',
      borderRadius: 'var(--radius-md)',
      background: 'url(' + h.image + ') center/cover'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: 26
    }
  }, PB.history.map((h, i) => /*#__PURE__*/React.createElement(TimelineItem, {
    key: h.year,
    year: h.year,
    body: h.body,
    first: i === 0,
    last: i === PB.history.length - 1
  }))))));
}
function Products({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Products",
    title: "Your Filipino Favorites",
    align: "center",
    leaves: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, PB.products.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.name
  }, p, {
    onClick: () => go('Products')
  })))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-right",
    label: "Next",
    size: 36,
    style: {
      position: 'absolute',
      right: -18,
      top: '38%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('Products')
  }, "View all products")));
}
function Recipes({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-band)",
    leaf: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "Made better with", /*#__PURE__*/React.createElement("br", null), "Pampanga\u2019s Best"),
    title: "Cook. Share. Enjoy!",
    body: "Easy and delicious recipes for every occasion."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: () => go('Recipes'),
    style: {
      marginTop: 6
    }
  }, "Explore all recipes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 14
    }
  }, PB.recipes.slice(0, 5).map(r => /*#__PURE__*/React.createElement(RecipeCard, _extends({
    key: r.title
  }, r, {
    onClick: () => go('Recipes')
  }))))));
}
function WhereToBuy({
  go
}) {
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '34fr 66fr',
      background: 'var(--surface-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 40px',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    inverse: true,
    eyebrow: "Where to buy",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Find Pampanga\u2019s Best", /*#__PURE__*/React.createElement("br", null), "Near You"),
    body: "Available in leading stores and supermarkets nationwide."
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Enter City, Province or ZIP Code",
    icon: "search",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      maxWidth: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 6
    }
  }, ['Stores', 'Distributors', 'Dealers', 'International'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      font: '600 11px/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-outline",
    size: "sm",
    onClick: () => go('Where to Buy'),
    style: {
      alignSelf: 'flex-start',
      marginTop: 6,
      borderColor: '#fff'
    }
  }, "View all locations")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 380,
      background: 'url(' + PB.I + 'map-clean.png) center/cover'
    }
  }, /*#__PURE__*/React.createElement(StoreCard, {
    image: PB.I + 'ref-history-store.png',
    name: "Pampanga\u2019s Best \u2013 San Fernando",
    address: "San Fernando, Pampanga, Philippines",
    style: {
      position: 'absolute',
      right: 40,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 380
    }
  })));
}
function Business({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-band)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2.3fr',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Grow with us",
    title: "Business Opportunities",
    body: "Join our network of successful dealers and distributors."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "handshake",
    title: "Become a Dealer",
    body: "Start your business and bring Pampanga\u2019s Best products to your community.",
    cta: "Learn more",
    onClick: () => go('Business Opportunities')
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "globe",
    title: "Become a Distributor",
    body: "Grow your business with our wide range of quality products and support.",
    cta: "Become a distributor",
    onClick: () => go('Business Opportunities')
  }))));
}
function News({
  go
}) {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2.2fr 1.1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "News & Stories",
    title: "Latest Updates"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: () => go('News & Stories'),
    style: {
      marginTop: 6
    }
  }, "View all news")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, PB.news.map(n => /*#__PURE__*/React.createElement(NewsCard, _extends({
    key: n.title
  }, n, {
    onClick: () => go('News & Stories')
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-band)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Stay in the know",
    title: "Subscribe to our Newsletter",
    level: "h3",
    body: "Get recipes, product updates, promotions and stories straight to your inbox."
  }), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--pb-green-800)',
      fontWeight: 600
    }
  }, "Thanks! You\u2019re on the list.") : /*#__PURE__*/React.createElement(Input, {
    placeholder: "Your email address",
    buttonLabel: "Subscribe",
    value: email,
    onChange: e => setEmail(e.target.value),
    onSubmit: () => email && setDone(true)
  }))));
}
function PageHeader({
  eyebrow,
  title,
  body,
  image
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 300,
      display: 'flex',
      alignItems: 'center',
      background: 'url(' + image + ') center/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-green-tint)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    inverse: true,
    eyebrow: eyebrow,
    title: title,
    body: body,
    level: "display"
  })));
}
Object.assign(window, {
  Section,
  Hero,
  Story,
  Products,
  Recipes,
  WhereToBuy,
  Business,
  News,
  PageHeader,
  Dots,
  wrap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
const I = '../../assets/imagery/';
window.PB = {
  I,
  nav: ['Home', 'Our Story', 'Products', 'Recipes', 'Where to Buy', 'Business Opportunities', 'News & Stories', 'Contact'],
  products: [{
    name: 'Tocino',
    description: 'Sweet and savory taste that Filipinos love.',
    image: I + 'ref-product-tocino.png',
    category: 'Tocino'
  }, {
    name: 'Longaniza',
    description: 'Flavorful and garlicky Filipino classic.',
    image: I + 'ref-product-longaniza.png',
    category: 'Longaniza'
  }, {
    name: 'Hotdog',
    description: 'Juicy, tasty and perfect for any meal.',
    image: I + 'ref-product-hotdog.png',
    category: 'Hotdogs'
  }, {
    name: 'Ham',
    description: 'Quality ham made for family celebrations.',
    image: I + 'ref-product-ham.png',
    category: 'Hams'
  }, {
    name: 'Bacon',
    description: 'Smoky, savory and perfectly cured.',
    image: I + 'ref-product-bacon.png',
    category: 'Bacon'
  }, {
    name: 'Sausages',
    description: 'Great for breakfast, lunch or dinner.',
    image: I + 'ref-product-sausages.png',
    category: 'Sausages'
  }],
  tocinoRange: [{
    name: 'Original Tocino',
    meta: '220g | 450g',
    image: I + 'product-original-tocino.png'
  }, {
    name: 'Chicken Tocino',
    meta: '220g | 450g',
    image: I + 'product-chicken-tocino.png'
  }, {
    name: 'Tenderlicious Tocino',
    meta: '220g | 450g',
    image: I + 'product-tenderlicious-tocino.png'
  }, {
    name: 'Fatless Tocino',
    meta: '220g | 450g',
    image: I + 'product-fatless-tocino.png'
  }, {
    name: 'Carabeef Tocino',
    meta: '220g | 450g',
    image: I + 'product-carabeef-tocino.png'
  }],
  categories: ['Tocino', 'Longaniza', 'Hotdogs', 'Sausages', 'Hams', 'Bacon', 'Tapa', 'Burger Patties', 'Corned Beef', 'Embotido', 'Barbecue', 'Chicken Pops'],
  recipes: [{
    title: 'Tocino Fried Rice',
    image: I + 'ref-recipe-tocino-fried-rice.png'
  }, {
    title: 'Longaniza Pasta',
    image: I + 'ref-recipe-longaniza-pasta.png'
  }, {
    title: 'Tocino Breakfast Bowl',
    image: I + 'ref-recipe-tocino-breakfast-bowl.png'
  }, {
    title: 'Longaniza Pizza',
    image: I + 'ref-recipe-longaniza-pizza.png'
  }, {
    title: 'Ham & Cheese Sandwich',
    image: I + 'ref-recipe-ham-cheese-sandwich.png'
  }, {
    title: 'Caesar Salad ala Chick N’ Pops',
    image: I + 'recipe-caesar-salad.png'
  }, {
    title: 'Hungarian Truffle Pasta',
    image: I + 'recipe-truffle-pasta.png'
  }, {
    title: 'Loaf Ham Clubhouse',
    image: I + 'recipe-ham-clubhouse.png'
  }],
  history: [{
    year: '1967',
    body: 'Founded with a passion for good food and family.',
    image: I + 'ref-history-1967.png'
  }, {
    year: '1970s–80s',
    body: 'A growing favorite in Filipino homes across the country.',
    image: I + 'ref-history-truck.png'
  }, {
    year: '1990s–2000s',
    body: 'Expanding our reach with more products and better quality.',
    image: I + 'ref-history-plant.png'
  }, {
    year: 'Today',
    body: 'Bringing Filipino food closer to families worldwide.',
    image: I + 'ref-history-store.png'
  }],
  news: [{
    title: 'Pampanga’s Best Cheesy Hotdog Now Available!',
    date: 'May 15, 2024',
    badge: 'New product',
    image: I + 'ref-product-hotdog.png'
  }, {
    title: 'Spreading Goodness in Our Communities',
    date: 'May 10, 2024',
    image: I + 'factory-team.png'
  }, {
    title: '5 Ways to Enjoy Tocino at Home',
    date: 'May 5, 2024',
    image: I + 'tocino-plate-clean.png'
  }],
  stores: [{
    region: 'Outlets',
    name: 'Pampanga’s Best – Bestland Outlet',
    address: 'McArthur Hwy, nearby by Holidayland restaurant, San Fernando, Pampanga',
    phone: '0977-8376-048'
  }, {
    region: 'Outlets',
    name: 'Pampanga’s Best – Jollibest Outlet',
    address: 'Jose Abad Santos Avenue, City of San Fernando, Pampanga',
    phone: '0977-8376-048'
  }, {
    region: 'Outlets',
    name: 'Pampanga’s Best – Main Building Outlet',
    address: 'Jose Abad Santos Avenue, Dolores, City of San Fernando, Pampanga',
    phone: '0977-8376-048'
  }, {
    region: 'Metro Manila',
    name: 'Pampanga’s Best – Kamuning Outlet',
    address: 'Kamuning Rd, Diliman, Quezon City, Metro Manila',
    phone: '0977-8376-048'
  }],
  regions: ['Outlets', 'North Luzon', 'Central Luzon', 'Metro Manila', 'Calabarzon', 'Bicol Region'],
  testimonials: [{
    quote: 'The Best talaga ang Pampanga’s BEST products. My kids’ favorite is Pampanga’s Best Tocino kaya dapat palagi kaming may stock sa ref nito.',
    name: 'Diana Marcelo'
  }, {
    quote: 'Tikman ang sarap ng TUNAY at ORIHINAL na tocinong Pampanga, hatid sa inyo ng Pampanga’s BEST!',
    name: 'Kelven Clarin'
  }, {
    quote: 'Don’t settle for less, always choose the best — PAMPANGA’S BEST!',
    name: 'Anna Katrina Aniciete'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.RecipeCard = __ds_scope.RecipeCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StoreCard = __ds_scope.StoreCard;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

})();
