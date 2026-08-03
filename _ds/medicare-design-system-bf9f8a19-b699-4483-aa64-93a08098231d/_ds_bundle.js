/* @ds-bundle: {"format":3,"namespace":"MediCareDesignSystem_bf9f8a","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"FilterChip","sourcePath":"components/display/FilterChip.jsx"},{"name":"StatusChip","sourcePath":"components/display/StatusChip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"f7b7427754d0","components/buttons/IconButton.jsx":"e0e269f4b90d","components/display/Avatar.jsx":"df1c5d46c4fe","components/display/Card.jsx":"a8015b4d2f5b","components/display/FilterChip.jsx":"030682bb4bbb","components/display/StatusChip.jsx":"80149e1e15e6","components/forms/Checkbox.jsx":"a5dd680a1bb6","components/forms/Input.jsx":"cbc49f8594d1","components/forms/Radio.jsx":"d03e52b38c93","ui_kits/clinician-portal/PatientDetail.jsx":"a90210cb9a99","ui_kits/clinician-portal/Roster.jsx":"c6bef3b0b21b","ui_kits/clinician-portal/Shell.jsx":"feeeacdc1a90"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MediCareDesignSystem_bf9f8a = window.MediCareDesignSystem_bf9f8a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: {
    minHeight: 36,
    padding: '8px 16px',
    fontSize: 13
  },
  medium: {
    minHeight: 44,
    padding: '10px 24px',
    fontSize: 15
  },
  large: {
    minHeight: 52,
    padding: '14px 32px',
    fontSize: 16
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1.5px solid transparent',
    hoverBg: 'var(--color-primary-hover)',
    activeBg: 'var(--color-primary-active)'
  },
  secondary: {
    background: 'var(--surface)',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--color-primary)',
    hoverBg: 'var(--surface-tint)',
    activeBg: 'var(--surface-tint-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1.5px solid transparent',
    hoverBg: 'var(--surface-tint)',
    activeBg: 'var(--surface-tint-strong)'
  },
  destructive: {
    background: 'var(--error)',
    color: 'var(--text-on-primary)',
    border: '1.5px solid transparent',
    hoverBg: 'var(--error-hover)',
    activeBg: 'var(--error-active)'
  }
};

/**
 * MediCare+ Button — primary clinical action control.
 * 44px min touch target (medium) for bedside tablet use.
 */
function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.medium;
  let background = v.background;
  if (!disabled && active) background = v.activeBg;else if (!disabled && hover) background = v.hoverBg;
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    minHeight: s.minHeight,
    padding: s.padding,
    borderRadius: 'var(--radius-md)',
    border: v.border,
    background,
    color: disabled ? 'var(--text-muted)' : v.color,
    width: fullWidth ? '100%' : 'auto',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 120ms ease, box-shadow 120ms ease',
    outline: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    ...(disabled ? {
      background: 'var(--surface-disabled)',
      borderColor: 'transparent'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: e => {
      e.target.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.target.style.boxShadow = 'none';
    },
    style: styles
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: 36,
  medium: 44,
  large: 52
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1.5px solid transparent',
    hoverBg: 'var(--color-primary-hover)',
    activeBg: 'var(--color-primary-active)'
  },
  secondary: {
    background: 'var(--surface)',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--color-primary)',
    hoverBg: 'var(--surface-tint)',
    activeBg: 'var(--surface-tint-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1.5px solid transparent',
    hoverBg: 'var(--surface-tint)',
    activeBg: 'var(--surface-tint-strong)'
  }
};

/**
 * MediCare+ IconButton — square icon-only control with accessible label.
 */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'medium',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const dim = SIZES[size] || SIZES.medium;
  let background = v.background;
  if (!disabled && active) background = v.activeBg;else if (!disabled && hover) background = v.hoverBg;
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-md)',
    border: v.border,
    background,
    color: disabled ? 'var(--text-muted)' : v.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 120ms ease',
    outline: 'none',
    padding: 0,
    ...(disabled ? {
      background: 'var(--surface-disabled)',
      borderColor: 'transparent'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: e => {
      e.target.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.target.style.boxShadow = 'none';
    },
    style: styles
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p[0] || '').join('').toUpperCase();
}

/**
 * MediCare+ Avatar — patient/staff identity badge with optional status dot.
 */
function Avatar({
  name = '',
  src = '',
  size = 'md',
  status = null,
  // 'success' | 'warning' | 'error' | 'info'
  style = {},
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const statusColor = status ? `var(--${status})` : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: dim,
      height: dim,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-full)',
      background: src ? 'transparent' : 'var(--surface-tint-strong)',
      color: 'var(--color-primary-active)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: Math.round(dim * 0.36),
      overflow: 'hidden',
      border: '1px solid var(--border-default)'
    },
    "aria-label": name
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name)), statusColor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: Math.max(8, dim * 0.28),
      height: Math.max(8, dim * 0.28),
      borderRadius: 'var(--radius-full)',
      background: statusColor,
      border: '2px solid var(--surface)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MediCare+ Card — surface container for grouped clinical content.
 */
function Card({
  children,
  elevated = false,
  hoverable = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const baseShadow = elevated ? 'var(--shadow-medium)' : 'var(--shadow-subtle)';
  const shadow = hoverable && hover ? 'var(--shadow-medium)' : baseShadow;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: shadow,
      padding,
      transition: 'box-shadow 140ms ease',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MediCare+ FilterChip — toggleable pill for filtering lists and tables.
 */
function FilterChip({
  children,
  selected = false,
  onClick,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  let background = 'var(--surface-tint)';
  let color = 'var(--text-secondary)';
  let border = '1px solid var(--border-input)';
  if (selected) {
    background = 'var(--color-primary)';
    color = 'var(--text-on-primary)';
    border = '1px solid var(--color-primary)';
  } else if (hover && !disabled) {
    background = 'var(--surface-tint-strong)';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": selected,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background,
      color,
      border,
      borderRadius: 'var(--radius-full)',
      padding: '6px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1.3,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      transition: 'background 120ms ease',
      ...style
    }
  }, rest), selected && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 14,
      height: 14
    }
  }), children);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/display/StatusChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success)',
    border: 'var(--success-border)',
    icon: 'check-circle'
  },
  warning: {
    bg: 'var(--warning-bg)',
    fg: 'var(--warning)',
    border: 'var(--warning-border)',
    icon: 'alert-triangle'
  },
  error: {
    bg: 'var(--error-bg)',
    fg: 'var(--error)',
    border: 'var(--error-border)',
    icon: 'alert-octagon'
  },
  info: {
    bg: 'var(--info-bg)',
    fg: 'var(--info)',
    border: 'var(--info-border)',
    icon: 'info'
  }
};

/**
 * MediCare+ StatusChip — color-coded status that ALWAYS pairs color with text + icon.
 */
function StatusChip({
  children,
  tone = 'info',
  showIcon = true,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-sm)',
      padding: '4px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), showIcon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon,
    style: {
      width: 13,
      height: 13
    }
  }), children);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MediCare+ Checkbox — 20px box, 44px touch target, clinical accuracy.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const on = checked || indeterminate;
  const box = {
    position: 'relative',
    width: 20,
    height: 20,
    flex: 'none',
    borderRadius: 'var(--radius-sm)',
    border: `1.5px solid ${on ? 'var(--color-primary)' : hover && !disabled ? 'var(--color-primary)' : 'var(--border-input)'}`,
    background: on ? 'var(--color-primary)' : hover && !disabled ? 'var(--surface-tint)' : 'var(--surface)',
    boxShadow: focus ? 'var(--ring-focus)' : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 120ms ease, border-color 120ms ease'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: 44,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: box
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ref: el => {
      if (el) el.indeterminate = indeterminate;
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 2,
      background: 'var(--white)',
      borderRadius: 1
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7.5 L5.5 10.5 L11.5 3.5",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MediCare+ Input — labelled text field with persistent label, helper/error text.
 * Labels are always visible (never placeholder-as-label).
 */
function Input({
  label,
  value,
  onChange,
  placeholder = '',
  helperText = '',
  error = '',
  required = false,
  disabled = false,
  type = 'text',
  mono = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const hasError = !!error;
  const inputStyles = {
    width: '100%',
    height: 44,
    padding: '10px 14px',
    fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
    fontSize: 16,
    color: 'var(--text-primary)',
    background: disabled ? 'var(--surface-disabled)' : 'var(--surface)',
    border: `1.5px solid ${hasError ? 'var(--error)' : focus ? 'var(--color-primary)' : 'var(--border-input)'}`,
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? hasError ? 'var(--ring-error)' : 'var(--ring-focus)' : 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    transition: 'border-color 120ms ease, box-shadow 120ms ease'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginBottom: 6
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--error)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": hasError,
    "aria-required": required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyles
  }, rest)), (helperText || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: hasError ? 'var(--error)' : 'var(--text-secondary)'
    }
  }, hasError && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "alert-triangle",
    style: {
      width: 14,
      height: 14
    }
  }), error || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MediCare+ Radio — 20px circle, 44px touch target.
 */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const circle = {
    position: 'relative',
    width: 20,
    height: 20,
    flex: 'none',
    borderRadius: 'var(--radius-full)',
    border: `1.5px solid ${checked ? 'var(--color-primary)' : hover && !disabled ? 'var(--color-primary)' : 'var(--border-input)'}`,
    background: hover && !disabled && !checked ? 'var(--surface-tint)' : 'var(--surface)',
    boxShadow: focus ? 'var(--ring-focus)' : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color 120ms ease, background 120ms ease'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: 44,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: circle
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-primary)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinician-portal/PatientDetail.jsx
try { (() => {
// MediCare+ Clinician Portal — Patient detail
const {
  Card,
  StatusChip,
  Avatar,
  Button,
  Checkbox
} = window.MediCareDesignSystem_bf9f8a;
function Vital({
  label,
  value,
  unit,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 24,
      color: tone ? `var(--${tone})` : 'var(--ink-900)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, unit)));
}
function SectionTitle({
  icon,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18,
      color: 'var(--color-primary)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--ink-900)'
    }
  }, children)), right);
}
const MEDS = [{
  name: 'Metformin',
  dose: '500 mg',
  route: 'PO',
  freq: 'BID',
  code: 'NDC 0071-0155-23'
}, {
  name: 'Lisinopril',
  dose: '10 mg',
  route: 'PO',
  freq: 'Daily',
  code: 'NDC 0093-1036-01'
}, {
  name: 'Atorvastatin',
  dose: '20 mg',
  route: 'PO',
  freq: 'QHS',
  code: 'NDC 0071-0157-23'
}];
function PatientDetail({
  patient,
  onBack
}) {
  const p = patient;
  const [acks, setAcks] = React.useState({});
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      alignSelf: 'flex-start',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), " Back to roster"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: "lg",
    status: p.status
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--ink-900)'
    }
  }, p.name), /*#__PURE__*/React.createElement(StatusChip, {
    tone: p.status
  }, p.statusLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, p.mrn), /*#__PURE__*/React.createElement("span", null, p.age, " yrs \xB7 ", p.sex === 'F' ? 'Female' : 'Male'), /*#__PURE__*/React.createElement("span", null, "Room ", p.room), /*#__PURE__*/React.createElement("span", null, p.dx)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "file-text",
      style: {
        width: 15,
        height: 15
      }
    })
  }, "Notes"), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus",
      style: {
        width: 15,
        height: 15
      }
    })
  }, "New order")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "activity"
  }, "Latest Vitals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Vital, {
    label: "Heart rate",
    value: "78",
    unit: "bpm"
  }), /*#__PURE__*/React.createElement(Vital, {
    label: "Blood pressure",
    value: "128/82",
    unit: "mmHg"
  }), /*#__PURE__*/React.createElement(Vital, {
    label: "Temp",
    value: "37.0",
    unit: "\xB0C"
  }), /*#__PURE__*/React.createElement(Vital, {
    label: "SpO\u2082",
    value: "94",
    unit: "%",
    tone: p.status === 'error' ? 'error' : null
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "shield-alert"
  }, "Allergies & Alerts"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    tone: "error"
  }, "Penicillin"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Anaphylaxis")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    tone: "warning"
  }, "Latex"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Contact dermatitis"))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "pill",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Tap to acknowledge administration")
  }, "Active Medications")), /*#__PURE__*/React.createElement("div", null, MEDS.map((m, i) => /*#__PURE__*/React.createElement("label", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 24px',
      borderTop: '1px solid var(--border-default)',
      cursor: 'pointer',
      minHeight: 48
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: !!acks[i],
    onChange: e => setAcks(s => ({
      ...s,
      [i]: e.target.checked
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink-900)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, m.code)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, m.dose), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, m.route), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, m.freq))))));
}
Object.assign(window, {
  PatientDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinician-portal/PatientDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinician-portal/Roster.jsx
try { (() => {
// MediCare+ Clinician Portal — Patient roster / dashboard
const {
  Card,
  StatusChip,
  FilterChip,
  Avatar,
  Button
} = window.MediCareDesignSystem_bf9f8a;
const PATIENTS = [{
  id: 1,
  name: 'Maria Gonzalez',
  mrn: 'MRN-4827-019',
  room: '312',
  age: 64,
  sex: 'F',
  unit: 'icu',
  dx: 'Type 2 Diabetes',
  status: 'success',
  statusLabel: 'Stable',
  updated: '09:42'
}, {
  id: 2,
  name: 'James Okafor',
  mrn: 'MRN-4830-552',
  room: '208',
  age: 71,
  sex: 'M',
  unit: 'er',
  dx: 'Acute MI',
  status: 'error',
  statusLabel: 'Critical',
  updated: '09:51'
}, {
  id: 3,
  name: 'Lena Petrov',
  mrn: 'MRN-4811-007',
  room: '415',
  age: 39,
  sex: 'F',
  unit: 'recovery',
  dx: 'Post-op Cholecystectomy',
  status: 'success',
  statusLabel: 'Stable',
  updated: '08:30'
}, {
  id: 4,
  name: 'David Chen',
  mrn: 'MRN-4828-340',
  room: '301',
  age: 56,
  sex: 'M',
  unit: 'icu',
  dx: 'Sepsis',
  status: 'warning',
  statusLabel: 'Needs review',
  updated: '09:38'
}, {
  id: 5,
  name: 'Aisha Rahman',
  mrn: 'MRN-4835-118',
  room: '110',
  age: 28,
  sex: 'F',
  unit: 'er',
  dx: 'Asthma exacerbation',
  status: 'warning',
  statusLabel: 'Needs review',
  updated: '09:55'
}, {
  id: 6,
  name: 'Robert Hayes',
  mrn: 'MRN-4809-771',
  room: '420',
  age: 82,
  sex: 'M',
  unit: 'recovery',
  dx: 'Hip replacement',
  status: 'success',
  statusLabel: 'Stable',
  updated: '07:12'
}];
function Stat({
  icon,
  label,
  value,
  tone
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      flex: 'none',
      background: `var(--${tone}-bg)`,
      color: `var(--${tone})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--ink-900)',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, label))));
}
const COLS = ['Patient', 'MRN', 'Room', 'Primary Dx', 'Status', 'Updated', ''];
function Roster({
  onOpenPatient
}) {
  const [filter, setFilter] = React.useState('all');
  const filtered = PATIENTS.filter(p => filter === 'all' || p.unit === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "users",
    label: "Assigned patients",
    value: "18",
    tone: "info"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "alert-octagon",
    label: "Critical",
    value: "2",
    tone: "error"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "alert-triangle",
    label: "Needs review",
    value: "5",
    tone: "warning"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "check-circle",
    label: "Stable",
    value: "11",
    tone: "success"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 20px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, [['all', 'All'], ['icu', 'ICU'], ['er', 'ER'], ['recovery', 'Recovery']].map(([k, l]) => /*#__PURE__*/React.createElement(FilterChip, {
    key: k,
    selected: filter === k,
    onClick: () => setFilter(k)
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "user-plus",
      style: {
        width: 15,
        height: 15
      }
    })
  }, "Admit patient")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, COLS.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: 'left',
      padding: '12px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-page)'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.id,
    onClick: () => onOpenPatient(p),
    style: {
      cursor: 'pointer',
      transition: 'background 100ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-tint)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: td()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: "sm",
    status: p.status
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink-900)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, p.age, " \xB7 ", p.sex)))), /*#__PURE__*/React.createElement("td", {
    style: td(true)
  }, p.mrn), /*#__PURE__*/React.createElement("td", {
    style: td()
  }, p.room), /*#__PURE__*/React.createElement("td", {
    style: td()
  }, p.dx), /*#__PURE__*/React.createElement("td", {
    style: td()
  }, /*#__PURE__*/React.createElement(StatusChip, {
    tone: p.status
  }, p.statusLabel)), /*#__PURE__*/React.createElement("td", {
    style: td(true)
  }, p.updated), /*#__PURE__*/React.createElement("td", {
    style: td()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-muted)'
    }
  }))))))));
}
function td(mono) {
  return {
    padding: '14px 20px',
    borderBottom: '1px solid var(--border-default)',
    fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
    fontSize: mono ? 13 : 15,
    color: mono ? 'var(--text-secondary)' : 'var(--ink-900)',
    verticalAlign: 'middle'
  };
}
Object.assign(window, {
  Roster,
  PATIENTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinician-portal/Roster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clinician-portal/Shell.jsx
try { (() => {
// MediCare+ Clinician Portal — App shell (sidebar + topbar)
const {
  Avatar,
  IconButton
} = window.MediCareDesignSystem_bf9f8a;
const NAV = [{
  id: 'dashboard',
  icon: 'layout-dashboard',
  label: 'Dashboard'
}, {
  id: 'patients',
  icon: 'users',
  label: 'Patients'
}, {
  id: 'schedule',
  icon: 'calendar-days',
  label: 'Schedule'
}, {
  id: 'orders',
  icon: 'clipboard-list',
  label: 'Orders'
}, {
  id: 'labs',
  icon: 'flask-conical',
  label: 'Lab Results'
}, {
  id: 'messages',
  icon: 'message-square',
  label: 'Messages'
}];
function Sidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: 'none',
      background: 'var(--surface)',
      borderRight: '1px solid var(--border-default)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 12px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    style: {
      width: 22,
      height: 22,
      strokeWidth: 2.5
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 800,
      fontSize: 19,
      color: 'var(--ink-900)'
    }
  }, "MediCare", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "+"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 12px',
        minHeight: 44,
        border: 'none',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        background: on ? 'var(--surface-tint-strong)' : 'transparent',
        color: on ? 'var(--color-primary-active)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: on ? 700 : 500,
        textAlign: 'left',
        width: '100%',
        transition: 'background 120ms ease'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--surface-tint)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": n.icon,
      style: {
        width: 20,
        height: 20
      }
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Alan Reyes",
    status: "success"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink-900)'
    }
  }, "Dr. Alan Reyes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Internal Medicine"))));
}
function Topbar({
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 72,
      flex: 'none',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--ink-900)',
      lineHeight: 1.2
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 44,
      padding: '0 14px',
      background: 'var(--surface-page)',
      border: '1.5px solid var(--border-input)',
      borderRadius: 'var(--radius-md)',
      width: 280
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search patients, MRN\u2026",
    style: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink-900)'
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "bell"
    }),
    label: "Notifications",
    variant: "secondary"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "settings"
    }),
    label: "Settings",
    variant: "secondary"
  })));
}
function Shell({
  active,
  onNavigate,
  title,
  subtitle,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: title,
    subtitle: subtitle
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 28
    }
  }, children)));
}
Object.assign(window, {
  Shell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clinician-portal/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

})();
