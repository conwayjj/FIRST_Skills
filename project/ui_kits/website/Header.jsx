// That ONE Team — Website UI Kit :: Top bar + primary navigation
// Recreation of the site header (utility bar with socials + main nav).
function TotHeader() {
  const [open, setOpen] = React.useState(null);
  const nav = [
    { label: 'Home', href: '#' },
    { label: 'About', children: ['FAQs', 'Resources', '2026 Season'] },
    { label: 'Join A Team (K-12)', children: ['FLL Explore K-3', 'FLL Challenge 4-6', 'FTC 7-8', 'FRC 9-12'] },
    { label: 'Off-Season Event', href: '#' },
    { label: 'Summer Camp', href: '#' },
    { label: 'Sponsors', href: '#' },
    { label: 'Donate', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];
  const Social = ({ children, label }) => (
    <a href="#" aria-label={label} style={{
      width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 'var(--radius-sm)', color: 'var(--tot-white)', background: 'rgba(255,255,255,0.14)',
    }}>{children}</a>
  );
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, fontFamily: 'var(--font-body)' }}>
      {/* Utility bar */}
      <div style={{ background: 'var(--grey-900)', color: 'var(--grey-300)', fontSize: 13 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '8px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ color: 'var(--blue-300)', fontWeight: 500 }}>Join Our Email List</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#" style={{ color: 'var(--grey-300)' }}>info@thatoneteam.org</a>
            <div style={{ display: 'flex', gap: 8 }}>
              <Social label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8c0-.6.4-1 1-1z"/></svg></Social>
              <Social label="X"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7 8 8 12h-6l-5-7-5 7H0l8-11L0 2h6l4 6 5-6z"/></svg></Social>
              <Social label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2"/></svg></Social>
            </div>
          </div>
        </div>
      </div>
      {/* Logo + nav bar */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          {/* Official square logo */}
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img src={(window.__resources && window.__resources.logoSquare) || "../../assets/logo-square.png"} alt="That ONE Team" style={{ height: 46, width: 46, borderRadius: 4, display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.04em', fontSize: 15, color: 'var(--text-strong)' }}>Our Next Engineers</span>
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {nav.map((item, i) => (
              <div key={i} style={{ position: 'relative' }}
                   onMouseEnter={() => item.children && setOpen(i)}
                   onMouseLeave={() => setOpen(null)}>
                <a href={item.href || '#'} style={{
                  display: 'inline-block', padding: '10px 12px', fontSize: 14, fontWeight: 500,
                  color: item.label === 'Donate' ? 'var(--tot-blue)' : 'var(--text-body)',
                  textDecoration: 'none', borderRadius: 'var(--radius-sm)',
                  fontWeight: item.label === 'Donate' ? 700 : 500,
                }}>{item.label}{item.children ? ' ▾' : ''}</a>
                {item.children && open === i && (
                  <div style={{ position: 'absolute', top: '100%', left: 0, minWidth: 200, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: 6, zIndex: 200 }}>
                    {item.children.map((c, j) => (
                      <a key={j} href="#" style={{ display: 'block', padding: '9px 12px', fontSize: 13, color: 'var(--text-body)', textDecoration: 'none', borderRadius: 'var(--radius-sm)' }}
                         onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--brand-soft)'; e.currentTarget.style.color = 'var(--brand-strong)'; }}
                         onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-body)'; }}>{c}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
window.TotHeader = TotHeader;
