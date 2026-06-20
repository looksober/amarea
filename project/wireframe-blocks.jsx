// wireframe-blocks.jsx — mid-fi greyscale wireframe primitives for Amarea.
// All components exported to window at the bottom for cross-script use.

const WF = {
  ink:    '#1c1c1c',
  ink70:  '#5c5c5c',
  ink40:  '#9a9a9a',
  bar:    '#cfcfcf',
  barLt:  '#e0e0e0',
  fill:   '#eaeaea',
  fillLn: '#d6d6d6',
  line:   '#d9d9d9',
  paper:  '#ffffff',
  sans:   '"Helvetica Neue", Helvetica, Arial, sans-serif',
  mono:   'ui-monospace, "SF Mono", "Roboto Mono", Menlo, monospace',
};

// One-time CSS for stripe placeholders, focus rings, annotation pins.
if (typeof document !== 'undefined' && !document.getElementById('wf-styles')) {
  const s = document.createElement('style');
  s.id = 'wf-styles';
  s.textContent = `
    .wf *{box-sizing:border-box}
    .wf-stripe{
      background-image:repeating-linear-gradient(135deg,
        ${WF.fillLn} 0, ${WF.fillLn} 1px, ${WF.fill} 1px, ${WF.fill} 9px);
    }
    .wf-input{
      border:1px solid ${WF.line}; background:#fafafa; color:${WF.ink40};
      font-family:${WF.mono}; font-size:12px;
    }
    .wf-cta{ font-family:${WF.sans}; font-weight:700; letter-spacing:.01em;
      cursor:default; white-space:nowrap; }
  `;
  document.head.appendChild(s);
}

// ── Image / media placeholder: diagonal stripes + mono caption ──────────────
function ImgBox({ label, height = 200, style = {}, dark = false }) {
  return (
    <div
      className={dark ? '' : 'wf-stripe'}
      style={{
        height, width: '100%', position: 'relative',
        border: `1px solid ${WF.line}`,
        background: dark ? '#222' : undefined,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        ...style,
      }}>
      {/* corner crossing lines to read clearly as "image" */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: dark ? .25 : .5 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={dark ? '#fff' : WF.fillLn} strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={dark ? '#fff' : WF.fillLn} strokeWidth="1" />
      </svg>
      <span style={{
        position: 'relative', fontFamily: WF.mono, fontSize: 11,
        color: dark ? 'rgba(255,255,255,.85)' : WF.ink70,
        background: dark ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.85)',
        padding: '4px 8px', textAlign: 'center', maxWidth: '80%', lineHeight: 1.4,
      }}>{label}</span>
    </div>
  );
}

// ── Text line bars (for body copy we don't spell out) ───────────────────────
function Lines({ n = 3, width = '100%', gap = 8, color = WF.bar, h = 7, last = '60%', align = 'left' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, width, alignItems: align === 'center' ? 'center' : 'stretch' }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{
          height: h, borderRadius: h, background: color,
          width: i === n - 1 ? last : (align === 'center' ? `${70 + (i % 3) * 8}%` : '100%'),
        }} />
      ))}
    </div>
  );
}

// ── Typographic bits (real copy, wireframe weight) ──────────────────────────
function Eyebrow({ children, style = {} }) {
  return <div style={{ fontFamily: WF.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: WF.ink40, ...style }}>{children}</div>;
}
function H({ children, size = 34, style = {} }) {
  return <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: size, lineHeight: 1.04, letterSpacing: '-0.02em', color: WF.ink, textWrap: 'balance', ...style }}>{children}</div>;
}
function Sub({ children, size = 15, style = {} }) {
  return <div style={{ fontFamily: WF.sans, fontWeight: 400, fontSize: size, lineHeight: 1.5, color: WF.ink70, textWrap: 'pretty', ...style }}>{children}</div>;
}

// ── CTA button ──────────────────────────────────────────────────────────────
function CTA({ children, solid = true, size = 14, style = {} }) {
  return (
    <span className="wf-cta" style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size, padding: size > 14 ? '16px 26px' : '13px 20px',
      background: solid ? WF.ink : 'transparent',
      color: solid ? '#fff' : WF.ink,
      border: `1.5px solid ${WF.ink}`, ...style,
    }}>{children}</span>
  );
}

// ── Email capture row ───────────────────────────────────────────────────────
function EmailCapture({ cta = 'Join the list', placeholder = 'you@email.com', stacked = false, width = 420 }) {
  return (
    <div style={{ display: 'flex', flexDirection: stacked ? 'column' : 'row', gap: 8, width: stacked ? '100%' : width, maxWidth: '100%' }}>
      <div className="wf-input" style={{ flex: 1, height: 48, display: 'flex', alignItems: 'center', padding: '0 14px' }}>{placeholder}</div>
      <CTA style={{ height: 48, flex: stacked ? 'none' : '0 0 auto' }}>{cta}</CTA>
    </div>
  );
}

// ── Section wrapper with optional hairline + step tag ───────────────────────
function Sec({ children, pad = 40, divider = true, tag, bg = WF.paper, style = {} }) {
  return (
    <section style={{ position: 'relative', padding: pad, background: bg, borderTop: divider ? `1px solid ${WF.line}` : 'none', ...style }}>
      {tag && (
        <div style={{ position: 'absolute', top: 8, left: 8, fontFamily: WF.mono, fontSize: 10, color: WF.ink40, letterSpacing: '.1em' }}>{tag}</div>
      )}
      {children}
    </section>
  );
}

// ── Device chrome wrappers (so desktop vs mobile reads instantly) ───────────
function Browser({ children, w }) {
  return (
    <div className="wf" style={{ width: w, background: WF.paper, fontFamily: WF.sans }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', borderBottom: `1px solid ${WF.line}`, background: '#f6f6f6' }}>
        {['#d8d8d8', '#d8d8d8', '#d8d8d8'].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: 10, background: c }} />)}
        <div style={{ marginLeft: 10, flex: 1, height: 22, borderRadius: 6, background: '#ececec', display: 'flex', alignItems: 'center', padding: '0 10px', fontFamily: WF.mono, fontSize: 11, color: WF.ink40 }}>amarea.ch</div>
      </div>
      {children}
    </div>
  );
}
function Phone({ children, w = 390 }) {
  return (
    <div className="wf" style={{ width: w, background: WF.paper, fontFamily: WF.sans }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 22px 4px', fontFamily: WF.mono, fontSize: 11, color: WF.ink }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span style={{ fontSize: 9 }}>▮▮▮</span><span style={{ fontSize: 9 }}>◗</span>
        </div>
      </div>
      {children}
    </div>
  );
}

// ── Sticky-bar mock (for CTA-placement variants) ────────────────────────────
function StickyBar({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 24px', borderBottom: `1px solid ${WF.line}`, background: '#fafafa', position: 'relative' }}>
      {children}
    </div>
  );
}

// ── Top logo/nav bar ────────────────────────────────────────────────────────
function Nav({ compact = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: compact ? '14px 20px' : '20px 40px' }}>
      <div style={{ fontFamily: WF.sans, fontWeight: 800, letterSpacing: '.14em', fontSize: 15 }}>AMAREA</div>
      {!compact && (
        <div style={{ display: 'flex', gap: 22, fontFamily: WF.mono, fontSize: 11, color: WF.ink70, letterSpacing: '.06em' }}>
          <span>THE OIL</span><span>WHY TIN</span><span>BATCH 01</span>
        </div>
      )}
      <CTA solid={false} size={12} style={{ padding: '8px 14px' }}>Get on the list</CTA>
    </div>
  );
}

// ── Annotation callout (explains the variation's intent) ────────────────────
function Note({ children, style = {} }) {
  return (
    <div style={{
      display: 'flex', gap: 8, alignItems: 'flex-start',
      fontFamily: WF.mono, fontSize: 11, lineHeight: 1.45, color: '#7a5a2a',
      background: '#fdf6e3', border: '1px dashed #e3cf9b', padding: '8px 11px', ...style,
    }}>
      <span style={{ fontWeight: 700 }}>↳</span>
      <span>{children}</span>
    </div>
  );
}

Object.assign(window, {
  WF, ImgBox, Lines, Eyebrow, H, Sub, CTA, EmailCapture, Sec, Browser, Phone, StickyBar, Nav, Note,
});
