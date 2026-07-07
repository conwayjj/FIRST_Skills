// That ONE Team — Website UI Kit :: Hero
// The homepage banner: award headline + photo. Photo is a placeholder slot
// (brand rule: full-robot, sharp, non-blurry, subject facing camera).
function TotHero() {
  const { Button, Badge } = window.ThatONETeamDesignSystem_a6a028;
  return (
    <section style={{ background: 'var(--grey-900)', color: 'var(--tot-white)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            <Badge variant="brand">Impact Award</Badge>
            <Badge variant="outline" style={{ color: 'var(--blue-300)', borderColor: 'var(--blue-400)' }}>Event Winner</Badge>
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(2.4rem,4.4vw,3.4rem)', lineHeight: 1.08, margin: '0 0 18px', letterSpacing: '.01em' }}>
            Double Blue Banners<br/>at Muskegon
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--grey-300)', maxWidth: '46ch', margin: '0 0 28px' }}>
            We had the pleasure of competing at the Muskegon District Event in Alliance 3 and won the event — plus the Impact Award, the most prestigious honor in FIRST®.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg">Learn More About Our 2026 Season</Button>
            <Button variant="ghost" size="lg" style={{ color: 'var(--tot-white)' }}>Meet the Team</Button>
          </div>
        </div>
        <PhotoSlot label="Full-robot competition photo" ratio="4 / 3" />
      </div>
    </section>
  );
}

// Reusable image placeholder honoring the brand's photography rules.
function PhotoSlot({ label, ratio = '16 / 9', style = {} }) {
  return (
    <div style={{
      aspectRatio: ratio, borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--blue-700), var(--blue-900))',
      border: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 10, color: 'rgba(255,255,255,0.72)',
      textAlign: 'center', padding: 20, ...style,
    }}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '.06em', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: 11, opacity: .7 }}>Sharp · full robot · subject facing camera</div>
    </div>
  );
}
window.TotHero = TotHero;
window.PhotoSlot = PhotoSlot;
