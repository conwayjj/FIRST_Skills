// That ONE Team — Website UI Kit :: Programs (K-12 team tiles)
function TotPrograms() {
  const { Card, Badge, Button, SectionHeading } = window.ThatONETeamDesignSystem_a6a028;
  const programs = [
    { band: 'Grades K-3', name: 'FIRST® LEGO® League Explore', body: 'Introduces science, technology, engineering, and math to children with a yearly themed challenge — a LEGO model and a Show Me Poster.' },
    { band: 'Grades 4-6', name: 'FIRST® LEGO® League Challenge', body: 'Friendly competition at its heart: teams research, problem-solve, code, and build a LEGO robot to navigate the missions of a robot game.' },
    { band: 'Grades 7-8', name: 'FIRST® Tech Challenge', body: 'Students learn to think like engineers — designing, building, and coding robots to compete in an alliance format using Java-based programming.' },
    { band: 'Grades 9-12', name: 'FIRST® Robotics Competition', body: 'Under strict rules and limited time, build an industrial-sized robot to play a difficult field game in alliance with other teams.' },
  ];
  return (
    <section style={{ background: 'var(--surface)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ maxWidth: 720, marginBottom: 40 }}>
          <SectionHeading eyebrow="Join A Team · K-12" title="Explore and be inspired through STEAM" intro="Our teams are made up of students from grades K-12, and compete as part of FIRST®. Registration starts in late May for the 2026-2027 season." />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {programs.map((p, i) => (
            <Card key={i} accent={i === 3} interactive padding="lg" style={{ display: 'flex', flexDirection: 'column' }}>
              <Badge variant={i === 3 ? 'brand' : 'soft'}>{p.band}</Badge>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, margin: '14px 0 10px', lineHeight: 1.2 }}>{p.name}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '0 0 18px', flex: 1 }}>{p.body}</p>
              <Button size="sm" variant={i === 3 ? 'primary' : 'secondary'}>Learn More</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.TotPrograms = TotPrograms;
