// That ONE Team — Website UI Kit :: Facts About FIRST (stat strip on dark)
function TotFacts() {
  const { StatCard, SectionHeading } = window.ThatONETeamDesignSystem_a6a028;
  const stats = [
    { value: '785K+', label: 'students participated in the 2023-2024 season' },
    { value: '28', label: 'countries with FIRST® teams' },
    { value: '81%', label: 'of FIRST® alumni declare majors in STEM' },
    { value: '83%', label: 'have confidence to take leadership roles in school' },
  ];
  return (
    <section style={{ background: 'var(--tot-blue)', color: 'var(--tot-white)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>Facts About FIRST®</div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.4rem)', margin: '0 0 40px', maxWidth: '20ch' }}>Inspiring young people to create innovative solutions through robotics.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ borderTop: '3px solid rgba(255,255,255,0.4)', paddingTop: 18 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.2rem,4vw,3.2rem)', lineHeight: 1, letterSpacing: '.02em' }}>{s.value}</div>
              <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,0.88)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.TotFacts = TotFacts;
