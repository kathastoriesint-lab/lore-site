/* @ds-bundle: {"format":3,"namespace":"LoreDesignSystem_022f97","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/core/Avatar.jsx"},{"name":"Pulse","sourcePath":"components/core/Badge.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"NewPill","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Tag","sourcePath":"components/core/Chip.jsx"},{"name":"Post","sourcePath":"components/feed/Post.jsx"},{"name":"StoryDrop","sourcePath":"components/feed/StoryDrop.jsx"},{"name":"ChoiceCard","sourcePath":"components/live/ChoiceCard.jsx"},{"name":"ReactionBubble","sourcePath":"components/live/ReactionBubble.jsx"},{"name":"SituationHeader","sourcePath":"components/live/SituationHeader.jsx"},{"name":"NarrationButton","sourcePath":"components/live/SituationHeader.jsx"},{"name":"Meter","sourcePath":"components/meters/Meter.jsx"},{"name":"MeterHUD","sourcePath":"components/meters/MeterHUD.jsx"},{"name":"WorldCard","sourcePath":"components/worlds/WorldCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"4309b2c2907a","components/core/Badge.jsx":"a1ecf1d3c3ca","components/core/Button.jsx":"0267cffeaa9a","components/core/Chip.jsx":"650a80c3a414","components/feed/Post.jsx":"fbc8b0af0c0a","components/feed/StoryDrop.jsx":"86876cb5878c","components/live/ChoiceCard.jsx":"af7a5f936505","components/live/ReactionBubble.jsx":"51f0b55cab12","components/live/SituationHeader.jsx":"6402f064e534","components/meters/Meter.jsx":"3d195aa26cf0","components/meters/MeterHUD.jsx":"5504b66c52fb","components/worlds/WorldCard.jsx":"936315178296","ui_kits/lore-app/Chrome.jsx":"54f8f031d2fc","ui_kits/lore-app/FeedScreen.jsx":"065375b15922","ui_kits/lore-app/LiveScreen.jsx":"ae14d53128a8","ui_kits/lore-app/ProfileScreen.jsx":"303f8120cd56","ui_kits/lore-app/WorldsScreen.jsx":"4eef1abbf45e","ui_kits/lore-app/data.js":"74e314895952"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LoreDesignSystem_022f97 = window.LoreDesignSystem_022f97 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lore Avatar — circular character/player avatar.
 * Pass `src` for a photo, or `initial` + `color` for the character-tinted fallback.
 * `ring` wraps it in the warm story gradient (unseen story state).
 */
function Avatar({
  src,
  initial = '?',
  color = '#333',
  size = 40,
  ring = false,
  seen = false,
  borderColor,
  style,
  onClick,
  ...rest
}) {
  const fontSize = Math.round(size * 0.4);
  const inner = /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--r-full)',
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      background: src ? `center/cover no-repeat url(${src})` : color,
      color: '#fff',
      fontFamily: 'var(--sans)',
      fontWeight: 800,
      fontSize,
      lineHeight: 1,
      border: borderColor ? `2px solid ${borderColor}` : undefined,
      cursor: onClick ? 'pointer' : undefined,
      overflow: 'hidden',
      ...(!ring ? style : null)
    }
  }, ring ? {} : rest), !src && initial);
  if (!ring) return inner;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size + 6,
      height: size + 6,
      borderRadius: 'var(--r-full)',
      padding: 2.5,
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto',
      background: seen ? '#333' : 'linear-gradient(45deg,#ff2d78,#ff8a3d,#ffd24d)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--r-full)',
      border: '2.5px solid var(--bg)',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center',
      background: src ? `center/cover no-repeat url(${src})` : color,
      color: '#fff',
      fontWeight: 800,
      fontSize
    }
  }, !src && initial));
}

/**
 * Overlapping avatar stack — used in world-card footers and cast strips.
 * Pass `items`: [{ src?, initial?, color? }]. `size` controls each chip.
 */
function AvatarStack({
  items = [],
  size = 24,
  borderColor = 'var(--surf)',
  max = 5
}) {
  const shown = items.slice(0, max);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, shown.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -7
    }
  }, /*#__PURE__*/React.createElement(Avatar, _extends({}, it, {
    size: size,
    borderColor: borderColor
  })))));
}
Object.assign(__ds_scope, { Avatar, AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulse — the live signal dot with an expanding ring.
 * Red by default (LIVE); pass `color` for world-specific (e.g. gold for cricket).
 */
function Pulse({
  color = '#ff3b3b',
  size = 7,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      position: 'relative',
      flex: '0 0 auto',
      display: 'inline-block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -3,
      borderRadius: '50%',
      background: color,
      opacity: 0.5,
      animation: 'lore-pulse 1.6s ease-out infinite'
    }
  }));
}

/**
 * Badge — a status pill. `live` shows a pulse; otherwise a glass capsule
 * (LIVE · SEASON 1, COMING SOON, "your move", NEW). Sits over hero cards.
 */
function Badge({
  children,
  live = false,
  color,
  glass = true,
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--sans)',
      fontSize: 9,
      fontWeight: 800,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: color || '#fff',
      padding: '5px 9px',
      borderRadius: 'var(--r-pill)',
      background: glass ? 'rgba(0,0,0,.45)' : 'var(--accent)',
      backdropFilter: glass ? 'blur(6px)' : undefined,
      border: glass ? `1px solid ${color ? color + '44' : 'rgba(255,255,255,.14)'}` : 'none',
      ...style
    }
  }, rest), live && /*#__PURE__*/React.createElement(Pulse, {
    color: color || '#ff3b3b'
  }), icon, children);
}

/**
 * NewPill — the tiny solid-accent "NEW" tag inside posts.
 */
function NewPill({
  children = 'NEW'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--accent)',
      color: '#fff',
      fontSize: 8,
      fontWeight: 800,
      padding: '3px 6px',
      borderRadius: 'var(--r-xs)',
      letterSpacing: '.04em',
      fontFamily: 'var(--sans)'
    }
  }, children);
}
Object.assign(__ds_scope, { Pulse, Badge, NewPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lore Button — the one interactive surface.
 * Primary = accent pink fill with glow (CTAs). Secondary = subtle fill.
 * Ghost = text only. Full-width by default (thumb-reachable mobile CTAs).
 */
function Button({
  children,
  variant = 'primary',
  size = 'lg',
  fullWidth = true,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    lg: {
      height: 54,
      fontSize: 16,
      padding: '0 26px',
      radius: 'var(--r-md)'
    },
    md: {
      height: 46,
      fontSize: 14,
      padding: '0 20px',
      radius: 'var(--r-md)'
    },
    sm: {
      height: 38,
      fontSize: 13,
      padding: '0 16px',
      radius: 'var(--r-sm)'
    },
    pill: {
      height: 48,
      fontSize: 13,
      padding: '0 22px',
      radius: 'var(--r-pill)'
    }
  };
  const s = sizes[size] || sizes.lg;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--action-on)',
      boxShadow: 'var(--sh-cta)'
    },
    secondary: {
      background: 'rgba(255,255,255,.08)',
      color: 'var(--ink)',
      border: '1px solid var(--line)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink2)'
    },
    light: {
      background: '#fff',
      color: '#000'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : 'auto',
      minHeight: 44,
      height: s.height,
      padding: s.padding,
      borderRadius: s.radius,
      fontFamily: 'var(--sans)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--t-press), opacity var(--t-ui)',
      WebkitTapHighlightColor: 'transparent',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a quick-reply / filter pill. Subtle by default; `selected` gives it
 * the accent outline. Used in DM quick-replies and comment options.
 */
function Chip({
  children,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      flex: '0 0 auto',
      fontFamily: 'var(--sans)',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--ink)',
      background: selected ? 'rgba(255,45,120,.16)' : 'rgba(255,255,255,.07)',
      border: `1px solid ${selected ? 'var(--accent)' : 'var(--line)'}`,
      padding: '8px 14px',
      borderRadius: 'var(--r-pill)',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: 'background var(--t-press)',
      ...style
    }
  }, rest), children);
}

/**
 * Tag — a non-interactive descriptor (character role, niche). Inline italic-free
 * label; used in pickers and profile strips.
 */
function Tag({
  children,
  color = 'var(--ink2)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 11,
      fontWeight: 600,
      color,
      letterSpacing: '.02em',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Chip, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feed/Post.jsx
try { (() => {
function Dots() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "#fff",
    style: {
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "2"
  }));
}
function Heart({
  filled
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: filled ? 'var(--accent)' : 'none',
    stroke: filled ? 'var(--accent)' : '#fff',
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
}
function Comment() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
}
function Share() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 2L11 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2l-7 20-4-9-9-4 20-7z"
  }));
}
const charBg = color => `linear-gradient(to bottom, ${color}bb 0%, ${color}66 55%, #0a0a18 100%)`;

/**
 * Post — the core Instagram-style unit. Header (avatar + handle + time),
 * a square hero (image OR a caption-over-character-colour card), action row,
 * like count, caption, and optional threaded reactions.
 *
 * Variant `your-move` (new player post) gets the accent top border + tint;
 * `house-reaction` reads as an NPC subposting you.
 */
function Post({
  handle = 'username',
  meta = 'Creator House · just now',
  avatarSrc,
  avatarInitial = 'U',
  avatarColor = '#1a1a2e',
  imageUrl,
  caption,
  overlayText,
  fullCaption,
  likes = '0',
  reactions = [],
  variant = 'default',
  liked = false,
  onLike,
  isNew = false,
  yourMove = false,
  style
}) {
  const accentNew = isNew || yourMove;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line)',
      fontFamily: 'var(--sans)',
      ...(accentNew ? {
        borderTop: '2px solid rgba(255,45,120,.3)',
        background: 'rgba(255,45,120,.04)'
      } : null),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    initial: avatarInitial,
    color: avatarColor,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, handle, yourMove && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "your move"), variant === 'house-reaction' && /*#__PURE__*/React.createElement(__ds_scope.NewPill, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: accentNew ? 'var(--accent)' : 'var(--ink3)'
    }
  }, meta)), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 44,
      height: 44,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Dots, null))), /*#__PURE__*/React.createElement("div", {
    className: "lore-grain",
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      background: imageUrl ? `linear-gradient(to bottom, rgba(0,0,0,.05) 0%, rgba(0,0,0,.12) 52%, rgba(0,0,0,.62) 100%), center/cover url(${imageUrl})` : charBg(avatarColor)
    }
  }, !imageUrl && overlayText && /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      zIndex: 2,
      fontFamily: 'var(--serif)',
      fontSize: 16,
      fontStyle: 'italic',
      color: 'rgba(255,255,255,.92)',
      padding: '14px 16px',
      textAlign: 'left',
      width: '100%',
      textShadow: '0 1px 8px rgba(0,0,0,.7)'
    }
  }, overlayText)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '2px 6px 6px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLike,
    style: {
      minWidth: 44,
      minHeight: 44,
      display: 'grid',
      placeItems: 'center',
      cursor: onLike ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement(Heart, {
    filled: liked
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      minWidth: 44,
      minHeight: 44,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Comment, null)), /*#__PURE__*/React.createElement("button", {
    style: {
      minWidth: 44,
      minHeight: 44,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Share, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      padding: '0 14px'
    }
  }, likes, " likes"), (fullCaption || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      padding: '5px 14px 2px'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600,
      marginRight: 5
    }
  }, handle), fullCaption || caption), reactions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 14px 4px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, reactions.map((rx, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.78)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, rx.handle), " ", rx.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink3)',
      padding: '2px 14px 12px'
    }
  }, meta.split('·').pop().trim().toUpperCase()));
}
Object.assign(__ds_scope, { Post });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feed/Post.jsx", error: String((e && e.message) || e) }); }

// components/feed/StoryDrop.jsx
try { (() => {
/**
 * StoryDrop — the bold, can't-miss card that launches the next situation.
 * Full-bleed cover (image or world gradient), a day/slot badge, a serif teaser
 * title, a short hook, and a light "Play the story" CTA. The primary action on
 * the feed.
 */
function StoryDrop({
  badge = 'STORY DROP · DAY 1',
  badgeColor,
  title = 'Pehla Kadam',
  teaser = 'Villa ka gate khulta hai. Tumhare paas ek chance hai — pehla impression...',
  cover = 'linear-gradient(135deg,#ff2d78,#7a1140)',
  imageUrl,
  cta = 'Play the story',
  onPlay,
  style
}) {
  const bg = imageUrl ? `linear-gradient(to bottom, rgba(0,0,0,.25) 0%, rgba(0,0,0,.65) 100%), center/cover url(${imageUrl})` : cover;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onPlay,
    className: "lore-grain",
    style: {
      position: 'relative',
      cursor: onPlay ? 'pointer' : 'default',
      borderBottom: '1px solid var(--line)',
      fontFamily: 'var(--sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '.9 / 1',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 18,
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    live: true,
    color: badgeColor
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.05,
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.85)',
      lineHeight: 1.4,
      marginTop: 7,
      maxWidth: '92%'
    }
  }, teaser), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onPlay && onPlay();
    },
    style: {
      alignSelf: 'flex-start',
      marginTop: 14,
      background: '#fff',
      color: '#000',
      fontWeight: 700,
      fontSize: 13,
      padding: '13px 20px',
      borderRadius: 'var(--r-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      minHeight: 44,
      cursor: 'pointer',
      fontFamily: 'var(--sans)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "#000"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "5,3 19,12 5,21"
  })), cta))));
}
Object.assign(__ds_scope, { StoryDrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feed/StoryDrop.jsx", error: String((e && e.message) || e) }); }

// components/live/ChoiceCard.jsx
try { (() => {
/**
 * ChoiceCard — a tappable decision option in Live. Glassy frosted card with a
 * bold title + one-line framing. Does NOT show meter deltas before choosing
 * (weigh the fiction, not the numbers). After choosing, the chosen card glows
 * (accent) and the others dim; a "X% chose this" line can appear.
 */
function ChoiceCard({
  title,
  subtitle,
  chosen = false,
  dimmed = false,
  socialProof,
  disabled = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      width: '100%',
      textAlign: 'left',
      borderRadius: 'var(--r-lg)',
      padding: '14px 16px',
      background: chosen ? 'rgba(255,45,120,.16)' : 'rgba(255,255,255,.10)',
      backdropFilter: 'blur(14px)',
      border: `1px solid ${chosen ? 'var(--accent)' : 'rgba(255,255,255,.2)'}`,
      cursor: disabled ? 'default' : 'pointer',
      opacity: dimmed ? 0.5 : 1,
      transition: 'transform var(--t-press), background var(--t-ui), border-color var(--t-ui)',
      fontFamily: 'var(--sans)',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: '#fff'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: 11,
      color: 'rgba(255,255,255,.55)',
      marginTop: 3
    }
  }, subtitle)), chosen && socialProof && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.5)',
      textAlign: 'center',
      marginTop: 4,
      fontFamily: 'var(--sans)'
    }
  }, socialProof));
}
Object.assign(__ds_scope, { ChoiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/live/ChoiceCard.jsx", error: String((e && e.message) || e) }); }

// components/live/ReactionBubble.jsx
try { (() => {
/**
 * ReactionBubble — an NPC's line of pressure/advice, set in their character
 * colour. Avatar + name + a tinted chat bubble (color-mixed from --cc, never
 * hardcoded). Used in Live before/after a decision and inline on the feed.
 */
function ReactionBubble({
  name,
  text,
  color = '#8a1840',
  avatarSrc,
  avatarInitial,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      fontFamily: 'var(--sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    initial: avatarInitial || (name ? name[0] : '?'),
    color: color,
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, name && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 4,
      color: 'var(--ink)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontStyle: 'italic',
      lineHeight: 1.4,
      padding: '10px 12px',
      borderRadius: 'var(--r-md)',
      borderTopLeftRadius: 4,
      color: 'var(--ink)',
      background: `color-mix(in srgb, ${color} 20%, transparent)`
    }
  }, text)));
}
Object.assign(__ds_scope, { ReactionBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/live/ReactionBubble.jsx", error: String((e && e.message) || e) }); }

// components/live/SituationHeader.jsx
try { (() => {
/**
 * SituationHeader — the top of a Live scene. A small day/slot eyebrow, the serif
 * title, and the second-person Hinglish body set as readable prose. Leaves room
 * for an optional narration (play) button at top-right.
 */
function SituationHeader({
  tag = '⚡ DAY 1 · MORNING',
  title,
  paragraphs = [],
  narrationButton,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px 8px',
      position: 'relative',
      fontFamily: 'var(--sans)',
      ...style
    }
  }, narrationButton && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      right: 16,
      zIndex: 5
    }
  }, narrationButton), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: '.08em',
      color: 'var(--ink3)',
      paddingRight: 50,
      textTransform: 'uppercase'
    }
  }, tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.2,
      marginTop: 8,
      paddingRight: 52,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,.82)',
      lineHeight: 1.6,
      marginTop: 12
    }
  }, paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 10px'
    }
  }, p))));
}

/**
 * NarrationButton — round play/pause control for read-aloud VO. Paused shows a
 * pink play on a dark disc; playing flips to a solid-accent pause.
 */
function NarrationButton({
  playing = false,
  onClick,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    "aria-label": playing ? 'Pause narration' : 'Play narration',
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: `1px solid ${playing ? 'var(--accent)' : 'rgba(255,45,120,.35)'}`,
      background: playing ? 'var(--accent)' : 'rgba(255,255,255,.06)',
      color: playing ? '#fff' : 'var(--accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--t-ui), border-color var(--t-ui), transform var(--t-press)'
    }
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "5",
    width: "4",
    height: "14",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "5",
    width: "4",
    height: "14",
    rx: "1"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "6,4 20,12 6,20"
  })));
}
Object.assign(__ds_scope, { SituationHeader, NarrationButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/live/SituationHeader.jsx", error: String((e && e.message) || e) }); }

// components/meters/Meter.jsx
try { (() => {
const METER_COLORS = {
  fame: 'var(--fame)',
  heat: 'var(--heat)',
  trust: 'var(--trust)',
  image: 'var(--trust)'
};

/**
 * Meter — a single labelled value + slim progress bar in its colour.
 * The atom of the HUD. `kind` picks the colour; `value` is 0–100.
 * Meter colours live ONLY inside meters — never as decoration elsewhere.
 */
function Meter({
  label,
  value = 0,
  kind = 'fame',
  color,
  style
}) {
  const c = color || METER_COLORS[kind] || 'var(--fame)';
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 800,
      letterSpacing: '.06em',
      color: c,
      fontFamily: 'var(--sans)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      color: c,
      fontVariantNumeric: 'tabular-nums',
      fontFamily: 'var(--sans)'
    }
  }, Math.round(pct))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 3,
      background: 'rgba(255,255,255,.07)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      display: 'block',
      height: '100%',
      borderRadius: 3,
      background: c,
      width: `${pct}%`,
      transition: 'width var(--t-bar) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/meters/Meter.jsx", error: String((e && e.message) || e) }); }

// components/meters/MeterHUD.jsx
try { (() => {
function followersStr(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
}

/**
 * MeterHUD — the persistent spine pinned at the top of every in-world screen.
 * Top tier: avatar + @handle + world·day line, follower count on the right.
 * Bottom tier: three meters. Same component, same values, everywhere — Feed,
 * Live, Profile. Consistency is the rule: no divergent "profile stats".
 */
function MeterHUD({
  handle = '@you',
  worldLine = 'Creator House · Day 1 of 10',
  followers = 48200,
  avatarSrc,
  avatarInitial = 'Y',
  avatarColor = 'var(--accent)',
  meters = [{
    label: 'FAME',
    value: 62,
    kind: 'fame'
  }, {
    label: 'HEAT',
    value: 48,
    kind: 'heat'
  }, {
    label: 'TRUST',
    value: 71,
    kind: 'trust'
  }],
  right,
  hideHeader = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--scrim-strong)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)',
      padding: '10px 16px',
      position: 'relative',
      zIndex: 4,
      flexShrink: 0,
      fontFamily: 'var(--sans)',
      ...style
    }
  }, !hideHeader && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    initial: avatarInitial,
    color: avatarColor,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: '#fff',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, handle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink3)',
      marginTop: 1
    }
  }, worldLine)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: '#fff',
      lineHeight: 1.2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, followersStr(followers)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink3)'
    }
  }, "followers")), right && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      marginLeft: 4
    }
  }, right)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: hideHeader ? 0 : 10
    }
  }, meters.map(m => /*#__PURE__*/React.createElement(__ds_scope.Meter, {
    key: m.label,
    label: m.label,
    value: m.value,
    kind: m.kind
  }))));
}
Object.assign(__ds_scope, { MeterHUD });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/meters/MeterHUD.jsx", error: String((e && e.message) || e) }); }

// components/worlds/WorldCard.jsx
try { (() => {
/**
 * WorldCard — a large, full-bleed entry card on the Worlds screen. Gradient or
 * image cover with a status badge, serif world name, one-line teaser, then a
 * footer row of cast avatars + meta. LIVE worlds are dominant; locked worlds
 * dim with a COMING SOON badge.
 */
function WorldCard({
  name = 'Creator House',
  teaser = '6 creators. Ek villa. 10 din.',
  cover = 'linear-gradient(135deg,#ff2d78,#7a1140)',
  imageUrl,
  status = 'LIVE · SEASON 1',
  statusColor,
  live = true,
  locked = false,
  coverHeight = 210,
  cast = [],
  meta = '6 creators · 1.2M following',
  ringColor = 'rgba(255,45,120,.35)',
  onClick,
  style
}) {
  const bg = imageUrl ? `center/cover url(${imageUrl})` : cover;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--surf)',
      textAlign: 'left',
      width: '100%',
      border: 'none',
      cursor: onClick ? 'pointer' : 'default',
      padding: 0,
      opacity: locked ? 0.72 : 1,
      boxShadow: locked ? 'none' : `0 0 0 1.5px ${ringColor}, 0 12px 40px ${ringColor.replace(/[\d.]+\)$/, '.18)')}`,
      fontFamily: 'var(--sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lore-grain",
    style: {
      height: coverHeight,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 16,
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg,rgba(0,0,0,.62) 0%,rgba(0,0,0,.12) 45%,rgba(0,0,0,0) 75%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    live: live && !locked,
    color: statusColor,
    icon: locked ? /*#__PURE__*/React.createElement(LockIcon, {
      color: statusColor
    }) : null
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: locked ? 22 : 26,
      lineHeight: 1.05,
      color: '#fff',
      textShadow: '0 2px 20px rgba(0,0,0,.6)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,.86)',
      marginTop: 5,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, teaser))), !locked && (cast.length > 0 || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surf)',
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AvatarStack, {
    items: cast,
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink2)'
    }
  }, meta)));
}
function LockIcon({
  color = '#fff'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "10",
    height: "10",
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "11",
    width: "14",
    height: "9",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  }));
}
Object.assign(__ds_scope, { WorldCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/worlds/WorldCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lore-app/Chrome.jsx
try { (() => {
// Lore app UI kit — shared chrome: iOS status bar, phone frame, bottom tab bar.
// Plain presentational helpers shared across the kit screens.
const {
  useState,
  useEffect,
  useRef
} = React;
function StatusBar({
  dark = true
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px 0 26px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--sans)',
      fontWeight: 700,
      fontSize: 15,
      color: c,
      letterSpacing: '.02em'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "11",
    viewBox: "0 0 17 11",
    fill: c
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "5",
    width: "3",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2.5",
    width: "3",
    height: "8.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "11",
    rx: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.2a11 11 0 0 1 14 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.6 6.9a7 7 0 0 1 8.8 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.1 9.5a3 3 0 0 1 3.8 0"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "25",
    height: "12",
    viewBox: "0 0 25 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "20",
    height: "10",
    rx: "2.6",
    stroke: c,
    strokeOpacity: ".45"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.6",
    y: "2.6",
    width: "14.5",
    height: "6.8",
    rx: "1.3",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22.4",
    y: "4",
    width: "1.6",
    height: "4",
    rx: "1",
    fill: c,
    fillOpacity: ".45"
  }))));
}
const TAB_ICONS = {
  home: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5L12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V21h14V9.5"
  })),
  messages: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  })),
  live: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 2L4.5 13.5H11L9 22l9-12h-6.5L13 2z"
  })),
  profile: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 3.6-7 8-7s8 3 8 7"
  }))
};
function TabBar({
  active = 'live',
  onTab
}) {
  const tabs = [{
    id: 'home',
    label: 'Feed',
    icon: 'home'
  }, {
    id: 'messages',
    label: 'Messages',
    icon: 'messages'
  }, {
    id: 'live',
    label: 'Live',
    icon: 'live'
  }, {
    id: 'profile',
    label: 'Profile',
    icon: 'profile'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 64px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(8,8,15,.95)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255,255,255,.07)',
      position: 'relative',
      zIndex: 6
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onTab && onTab(t.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        color: on ? 'var(--accent)' : 'var(--ink3)',
        paddingTop: 2,
        minHeight: 44
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 23,
        height: 23,
        display: 'block'
      }
    }, TAB_ICONS[t.icon]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 500,
        fontFamily: 'var(--sans)'
      }
    }, t.label));
  }));
}

// Phone frame — fixed 390x844 device with rounded bezel + accent glow.
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 'var(--r-phone)',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--bg)',
      boxShadow: 'var(--sh-phone)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children);
}

// Generic top app-bar with the Lore mark.
function LoreMark({
  size = 24
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: size,
    height: size,
    fill: "none",
    style: {
      filter: 'drop-shadow(0 0 8px rgba(255,45,120,.5))'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "lkm",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#ff2d78"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".55",
    stopColor: "#ff8a3d"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#ffd24d"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "13.5",
    stroke: "url(#lkm)",
    strokeWidth: "3",
    strokeDasharray: "58 12",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "6.4",
    stroke: "#ff2d78",
    strokeWidth: "2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "1.9",
    fill: "#ffd24d"
  }));
}
Object.assign(window, {
  StatusBar,
  TabBar,
  PhoneFrame,
  LoreMark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lore-app/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lore-app/FeedScreen.jsx
try { (() => {
// Lore app UI kit — Feed screen (consequence surface).
const {
  MeterHUD: FeedHUD,
  Post
} = window.LoreDesignSystem_022f97;
const {
  LORE_CAST: FEED_CAST,
  LORE_SEED_FEED
} = window.LORE_DATA;
function FeedScreen({
  meters,
  followers,
  playerPost,
  liked,
  onLike
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FeedHUD, {
    handle: "@you",
    worldLine: "Creator House \xB7 Day 1 of 10",
    followers: followers,
    avatarInitial: "Y",
    avatarColor: "var(--accent)",
    meters: [{
      label: 'FAME',
      value: meters.fame,
      kind: 'fame'
    }, {
      label: 'HEAT',
      value: meters.heat,
      kind: 'heat'
    }, {
      label: 'TRUST',
      value: meters.trust,
      kind: 'trust'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, playerPost && /*#__PURE__*/React.createElement(Post, {
    yourMove: true,
    handle: "you",
    meta: "Creator House \xB7 just now",
    avatarColor: "var(--accent)",
    overlayText: playerPost.overlayText,
    fullCaption: playerPost.caption,
    likes: playerPost.likes,
    liked: liked,
    onLike: onLike,
    reactions: playerPost.reactions.map(r => ({
      handle: r.fan ? r.who : FEED_CAST[r.who] ? FEED_CAST[r.who].handle : r.who,
      text: r.text
    }))
  }), LORE_SEED_FEED.map((p, i) => {
    const ch = FEED_CAST[p.who];
    return /*#__PURE__*/React.createElement(Post, {
      key: i,
      handle: ch.handle,
      meta: p.meta,
      avatarSrc: ch.src,
      avatarColor: ch.color,
      imageUrl: p.imageUrl,
      fullCaption: p.caption,
      likes: p.likes,
      reactions: p.reactions.map(r => ({
        handle: r.fan ? r.who : FEED_CAST[r.who] ? FEED_CAST[r.who].handle : r.who,
        text: r.text
      }))
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  })));
}
window.FeedScreen = FeedScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lore-app/FeedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lore-app/LiveScreen.jsx
try { (() => {
// Lore app UI kit — Live (situation + decision) screen.
const {
  MeterHUD,
  SituationHeader,
  NarrationButton,
  ReactionBubble,
  ChoiceCard
} = window.LoreDesignSystem_022f97;
const {
  LORE_CAST,
  LORE_SITUATION
} = window.LORE_DATA;
function LiveScreen({
  meters,
  followers,
  chosen,
  onChoose,
  narrating,
  onToggleNarration
}) {
  const sit = LORE_SITUATION;
  const pressureChar = LORE_CAST[sit.pressure.who];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeterHUD, {
    handle: "@you",
    worldLine: "Creator House \xB7 Day 1 of 10",
    followers: followers,
    avatarInitial: "Y",
    avatarColor: "var(--accent)",
    meters: [{
      label: 'FAME',
      value: meters.fame,
      kind: 'fame'
    }, {
      label: 'HEAT',
      value: meters.heat,
      kind: 'heat'
    }, {
      label: 'TRUST',
      value: meters.trust,
      kind: 'trust'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lore-grain",
    style: {
      height: 200,
      position: 'relative',
      background: 'linear-gradient(to bottom, rgba(8,8,15,0) 30%, rgba(8,8,15,.85) 100%), center/cover url(assets/scenes/seed-villa.png)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -60,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(SituationHeader, {
    tag: sit.tag,
    title: sit.title,
    paragraphs: sit.paragraphs,
    narrationButton: /*#__PURE__*/React.createElement(NarrationButton, {
      playing: narrating,
      onClick: onToggleNarration
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 8px'
    }
  }, /*#__PURE__*/React.createElement(ReactionBubble, {
    name: pressureChar.name,
    color: pressureChar.color,
    avatarSrc: pressureChar.src,
    text: sit.pressure.text
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 14
    }
  }, "Kya karoge?"), sit.choices.map(c => /*#__PURE__*/React.createElement(ChoiceCard, {
    key: c.id,
    title: c.title,
    subtitle: c.subtitle,
    chosen: chosen === c.id,
    dimmed: chosen && chosen !== c.id,
    socialProof: c.proof,
    disabled: !!chosen,
    onClick: () => onChoose(c)
  })), chosen && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 12.5,
      color: 'var(--ink2)',
      textAlign: 'center',
      padding: '10px 6px 4px',
      lineHeight: 1.5
    }
  }, "Choice locked. The house is reacting \u2014 check your ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)'
    }
  }, "Feed"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  })));
}
window.LiveScreen = LiveScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lore-app/LiveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lore-app/ProfileScreen.jsx
try { (() => {
// Lore app UI kit — Profile screen.
const {
  MeterHUD: ProfHUD,
  Avatar: ProfAvatar,
  Meter: ProfMeter,
  Tag: ProfTag,
  Button: ProfButton
} = window.LoreDesignSystem_022f97;
function ProfileScreen({
  meters,
  followers
}) {
  const fmt = n => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : '' + n;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lore-grain",
    style: {
      height: 132,
      position: 'relative',
      background: 'linear-gradient(135deg,#ff2d78,#7a1140)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg,var(--bg) 2%,rgba(8,8,15,.2) 60%,transparent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px',
      marginTop: -42,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '50%',
      width: 88,
      height: 88,
      border: '3px solid var(--bg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ProfAvatar, {
    initial: "Y",
    color: "var(--accent)",
    size: 82
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 24,
      color: '#fff'
    }
  }, "You"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 13,
      color: 'var(--ink3)'
    }
  }, "@you \xB7 Creator House")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120
    }
  }, /*#__PURE__*/React.createElement(ProfButton, {
    size: "sm",
    variant: "secondary"
  }, "Edit profile"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 16
    }
  }, [['Followers', fmt(followers)], ['Following', '312'], ['Day', '1 / 10']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontWeight: 800,
      fontSize: 18,
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 12,
      color: 'var(--ink3)'
    }
  }, l)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 13.5,
      color: 'rgba(255,255,255,.82)',
      lineHeight: 1.55,
      marginTop: 16
    }
  }, "Day 1 in the villa. Building my story, ek choice at a time. \uD83E\uDD0D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(ProfTag, {
    color: "var(--accent)"
  }, "Main character energy"), /*#__PURE__*/React.createElement(ProfTag, null, "Lifestyle \xB7 24")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      background: 'var(--surf)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink3)',
      marginBottom: 14
    }
  }, "Season standing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ProfMeter, {
    label: "FAME",
    value: meters.fame,
    kind: "fame"
  }), /*#__PURE__*/React.createElement(ProfMeter, {
    label: "HEAT",
    value: meters.heat,
    kind: "heat"
  }), /*#__PURE__*/React.createElement(ProfMeter, {
    label: "TRUST",
    value: meters.trust,
    kind: "trust"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink3)',
      margin: '20px 0 12px'
    }
  }, "Story so far"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 4,
      paddingBottom: 24
    }
  }, ['seed-ria', 'seed-villa', 'seed-kabir', 'scene-terrace-night', 'seed-ananya', 'scene-challenge'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "lore-grain",
    style: {
      aspectRatio: '1',
      borderRadius: 6,
      background: `center/cover url(assets/scenes/${s}.png)`,
      position: 'relative'
    }
  }))))));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lore-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lore-app/WorldsScreen.jsx
try { (() => {
// Lore app UI kit — Login + Worlds screens.
const {
  Button,
  WorldCard
} = window.LoreDesignSystem_022f97;
function LoginScreen({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 50% 0%, #2a0a2a 0%, #120816 38%, #08080F 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "lore-grain",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 30px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'lore-spin 16s linear infinite',
      transformOrigin: 'center'
    }
  }, /*#__PURE__*/React.createElement(LoreMark, {
    size: 68
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 52,
      color: '#fff',
      marginTop: 18,
      lineHeight: 1
    }
  }, "Lore"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--ink2)',
      marginTop: 10
    }
  }, "Live your story."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 14,
      color: 'var(--ink3)',
      lineHeight: 1.6,
      marginTop: 14,
      maxWidth: 280
    }
  }, "Step into a living world. Make the choices. Watch everyone react.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '0 22px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onEnter,
    iconRight: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17
      }
    }, "\u2192")
  }, "Enter the world"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    onClick: onEnter
  }, "I already have an account")));
}
function WorldsScreen({
  onOpenWorld,
  onTab
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 16px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(LoreMark, {
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 24,
      color: '#fff'
    }
  }, "Worlds"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--surf)',
      border: '1px solid var(--line)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "var(--ink2)",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 3.6-7 8-7s8 3 8 7"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink3)'
    }
  }, "Live now"), /*#__PURE__*/React.createElement(WorldCard, {
    name: "Creator House",
    teaser: "6 creators. Ek villa. 10 din.",
    status: "LIVE \xB7 SEASON 1",
    cover: "linear-gradient(135deg,#ff2d78,#7a1140)",
    imageUrl: "assets/scenes/seed-villa.png",
    coverHeight: 230,
    cast: [{
      src: 'assets/avatars/ria.png'
    }, {
      src: 'assets/avatars/kabir.png'
    }, {
      src: 'assets/avatars/ananya.png'
    }, {
      src: 'assets/avatars/dev.png'
    }, {
      src: 'assets/avatars/zoya.png'
    }],
    meta: "6 creators \xB7 1.2M following",
    onClick: onOpenWorld
  }), /*#__PURE__*/React.createElement(WorldCard, {
    name: "Indian Dressing Room",
    teaser: "Debut series. Wankhede. Pressure.",
    status: "LIVE \xB7 SEASON 1",
    cover: "linear-gradient(135deg,#003087,#001540)",
    imageUrl: "assets/scenes/cricket-dressing-room.png",
    statusColor: "#FFB020",
    ringColor: "rgba(0,48,135,.55)",
    coverHeight: 200,
    cast: [{
      src: 'assets/avatars/hardik.png'
    }, {
      src: 'assets/avatars/rohit.png'
    }, {
      src: 'assets/avatars/bumrah.png'
    }, {
      src: 'assets/avatars/surya.png'
    }],
    meta: "11 players \xB7 8.4M following"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink3)',
      marginTop: 4
    }
  }, "Coming soon"), /*#__PURE__*/React.createElement(WorldCard, {
    name: "College Hostel",
    teaser: "Coming soon",
    status: "COMING SOON",
    locked: true,
    statusColor: "#2a9a6a",
    coverHeight: 150,
    cover: "linear-gradient(135deg,#1a5a3a,#0a2a1a)"
  })));
}
Object.assign(window, {
  LoginScreen,
  WorldsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lore-app/WorldsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lore-app/data.js
try { (() => {
// Lore app UI kit — shared fake game data (characters, situation, posts).
(function () {
  const LORE_CAST = {
    ria: {
      name: 'Ria',
      handle: 'riaofficial',
      color: '#c41060',
      src: 'assets/avatars/ria.png'
    },
    kabir: {
      name: 'Kabir',
      handle: 'kabir.raw',
      color: '#2a6f8f',
      src: 'assets/avatars/kabir.png'
    },
    ananya: {
      name: 'Ananya',
      handle: 'ananya.k',
      color: '#a02858',
      src: 'assets/avatars/ananya.png'
    },
    dev: {
      name: 'Dev',
      handle: 'devplays',
      color: '#7a3a9a',
      src: 'assets/avatars/dev.png'
    },
    zoya: {
      name: 'Zoya',
      handle: 'zoyazone',
      color: '#b03060',
      src: 'assets/avatars/zoya.png'
    }
  };
  const LORE_SITUATION = {
    tag: '⚡ DAY 1 · MORNING',
    title: 'Pehla Kadam',
    paragraphs: ['Villa ka gate khulta hai. Camera tumhare chehre pe. Andar paanch creators already settled hain — aur sab tumhe dekh rahe hain.', 'Tumhare paas ek chance hai. Pehla impression. Kya karoge?'],
    pressure: {
      who: 'kabir',
      text: 'Yaar entry toh maast honi chahiye. Sab yaad rakhein aise aao. 🔥'
    },
    choices: [{
      id: 'A',
      title: 'Loud entry — sabka dhyaan kheencho',
      subtitle: 'Confident, noisy, unforgettable.',
      proof: '63% chose this',
      post: {
        overlayText: 'Naye ghar mein entry maar di. Yaad rakhna. 🤍',
        caption: 'Din 1 aur already main character energy. Watch closely. 🔥',
        likes: '18,420',
        deltas: {
          fame: +6,
          heat: +4,
          trust: -2
        },
        reactions: [{
          who: 'ria',
          text: 'Bold. Let\'s see if you can keep it up.'
        }, {
          who: 'creator.tea',
          text: 'not them entering like they own the villa 💀',
          fan: true
        }]
      }
    }, {
      id: 'B',
      title: 'Quiet entry — observe first',
      subtitle: 'Let the house come to you.',
      proof: '37% chose this',
      post: {
        overlayText: 'Sab shor machaa rahe the. Main bas dekh rahi thi. 🤍',
        caption: 'Pehle suno, phir bolo. Day 1 done quietly.',
        likes: '9,140',
        deltas: {
          fame: +2,
          heat: -1,
          trust: +5
        },
        reactions: [{
          who: 'ananya',
          text: 'Smart. The quiet ones are dangerous.'
        }, {
          who: 'housewatch_india',
          text: 'a strategist has entered the chat 👀',
          fan: true
        }]
      }
    }]
  };

  // Seed feed shown before the player acts.
  const LORE_SEED_FEED = [{
    who: 'ria',
    meta: 'Creator House · 6h ago',
    imageUrl: 'assets/scenes/seed-ria.png',
    likes: '84,291',
    caption: 'Stress? Main stress ko content mein convert karti hoon. 🤍',
    reactions: [{
      who: 'creator.tea',
      text: 'she ate. no crumbs.',
      fan: true
    }]
  }, {
    who: 'kabir',
    meta: 'Creator House · 9h ago',
    imageUrl: 'assets/scenes/seed-kabir.png',
    likes: '52,108',
    caption: 'Villa ka sabse chill banda. Allegedly. 😎',
    reactions: [{
      who: 'zoya',
      text: 'allegedly is doing a LOT of work here'
    }]
  }];
  window.LORE_DATA = {
    LORE_CAST,
    LORE_SITUATION,
    LORE_SEED_FEED
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lore-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Pulse = __ds_scope.Pulse;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.NewPill = __ds_scope.NewPill;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Post = __ds_scope.Post;

__ds_ns.StoryDrop = __ds_scope.StoryDrop;

__ds_ns.ChoiceCard = __ds_scope.ChoiceCard;

__ds_ns.ReactionBubble = __ds_scope.ReactionBubble;

__ds_ns.SituationHeader = __ds_scope.SituationHeader;

__ds_ns.NarrationButton = __ds_scope.NarrationButton;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.MeterHUD = __ds_scope.MeterHUD;

__ds_ns.WorldCard = __ds_scope.WorldCard;

})();
