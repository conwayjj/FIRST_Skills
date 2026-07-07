// That ONE Team — Website UI Kit :: Support / Join CTA + email signup
function TotSupport() {
  const { Card, Button, Input, SectionHeading } = window.ThatONETeamDesignSystem_a6a028;
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background: 'var(--surface-alt)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <Card padding="lg" accent>
          <SectionHeading eyebrow="Join One of Our Teams" title="Want to know more? Where do I start?" />
          <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, margin: '14px 0 22px' }}>
            Explore and be inspired through STEAM — science, technology, engineering, arts, and math. Drop your email and we'll be in touch.
          </p>
          {sent ? (
            <div style={{ padding: '16px 18px', background: 'var(--brand-soft)', color: 'var(--brand-strong)', borderRadius: 'var(--radius-md)', fontWeight: 600, fontFamily: 'var(--font-heading)', letterSpacing: '.02em' }}>
              ✓ Thanks! We'll reach out to info@thatoneteam.org shortly.
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              <div style={{ flex: 1 }}>
                <Input label="Email" id="join-email" type="email" placeholder="you@example.com" />
              </div>
              <Button size="md" onClick={() => setSent(true)}>Join List</Button>
            </div>
          )}
        </Card>

        <Card padding="lg">
          <SectionHeading eyebrow="Would You Like to Support Us?" title="Your gift builds Our Next Engineers" />
          <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, margin: '14px 0 22px' }}>
            Donations are tax deductible and directly fund our K-12 teams, robots, and outreach.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="dark" size="lg">Donate via PayPal</Button>
            <Button variant="secondary" size="lg">More Ways to Help</Button>
          </div>
          <div style={{ marginTop: 20, fontSize: 13, color: 'var(--text-muted)' }}>
            That STEAM Space · 3516-A Plainfield Ave NE, Grand Rapids, MI 49525 · 616.929.0686
          </div>
        </Card>
      </div>
    </section>
  );
}
window.TotSupport = TotSupport;
