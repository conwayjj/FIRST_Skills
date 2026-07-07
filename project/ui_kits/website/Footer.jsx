// That ONE Team — Website UI Kit :: Footer
function TotFooter() {
  const Social = ({ children, label }) => (
    <a href="#" aria-label={label} style={{
      width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 'var(--radius-sm)', color: 'var(--tot-white)', background: 'rgba(255,255,255,0.12)',
    }}>{children}</a>
  );
  return (
    <footer style={{ background: 'var(--grey-900)', color: 'var(--grey-300)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40 }}>
        <div>
          <img src={(window.__resources && window.__resources.logoWide) || "../../assets/logo-wide.png"} alt="That ONE Team — Our Next Engineers" style={{ height: 60, marginBottom: 16, display: 'block' }} />
          <p style={{ fontStyle: 'italic', color: 'var(--grey-400)', margin: '0 0 18px' }}>Playing the Water Game Since 2013</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Social label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8c0-.6.4-1 1-1z"/></svg></Social>
            <Social label="X"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7 8 8 12h-6l-5-7-5 7H0l8-11L0 2h6l4 6 5-6z"/></svg></Social>
            <Social label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2"/></svg></Social>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue-300)', marginBottom: 14 }}>That STEAM Space</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0 }}>3516-A Plainfield Ave NE<br/>Grand Rapids, MI 49525<br/>P — 616.929.0686<br/>info@thatoneteam.org</p>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue-300)', marginBottom: 14 }}>Explore</div>
          {['2026 Season', 'Join a Team', 'Sponsors', 'Donate', 'Contact Us'].map((l, i) => (
            <a key={i} href="#" style={{ display: 'block', fontSize: 14, color: 'var(--grey-300)', textDecoration: 'none', padding: '4px 0' }}>{l}</a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '18px 24px', textAlign: 'center', fontSize: 12, color: 'var(--grey-500)' }}>
        Copyright 2025 · That ONE Team &amp; Paradise Teams · Proud Representatives of FIRST® (For the Inspiration and Recognition of Science and Technology)
      </div>
    </footer>
  );
}
window.TotFooter = TotFooter;
