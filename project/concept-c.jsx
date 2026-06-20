// concept-c.jsx — Value / "Everyday Premium" concept. Two layout variations.
// ConceptC({ variation: 1|2, device: 'desktop'|'mobile' })

function ConceptC({ variation, device }) {
  const m = device === 'mobile';
  const pad = m ? 24 : 56;
  const col = { display: 'flex', flexDirection: 'column' };

  // ---- shared section renderers -------------------------------------------
  // Contrast: the elitist deli bottle vs. Amarea everyday premium
  const Contrast = (tag) => (
    <Sec pad={pad} tag={tag} bg="#f4f4f2">
      <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 26px', ...col, gap: 12, alignItems: 'center' }}>
        <Eyebrow>Deconstructing the snideness</Eyebrow>
        <H size={m ? 24 : 36}>The CHF 35 trophy bottle vs. the tin you actually use.</H>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 16 : 24, alignItems: 'stretch' }}>
        {[{
          t: 'The elitist deli bottle', dim: true,
          price: 'CHF 35', unit: '/ bottle',
          pts: ['Saved “for special occasions”', 'Used twice a year', 'Half of it oxidises before it’s gone'],
        }, {
          t: 'Amarea', dim: false,
          price: 'CHF ~18', unit: '/ tin · everyday',
          pts: ['Same cold-extracted quality', 'Poured generously, guilt-free', 'Finished fresh, refilled often'],
        }].map((c, i) => (
          <div key={i} style={{ border: `1px solid ${WF.line}`, background: c.dim ? '#efefee' : WF.paper, padding: m ? 20 : 28, ...col, gap: 16, opacity: c.dim ? .82 : 1 }}>
            <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: 16 }}>{c.t}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: m ? 30 : 40, color: WF.ink, textDecoration: c.dim ? 'line-through' : 'none', textDecorationThickness: '2px' }}>{c.price}</span>
              <span style={{ fontFamily: WF.mono, fontSize: 12, color: WF.ink40 }}>{c.unit}</span>
            </div>
            <div style={{ ...col, gap: 9 }}>
              {c.pts.map((p, j) => (
                <div key={j} style={{ display: 'flex', gap: 8, fontFamily: WF.sans, fontSize: 13.5, color: c.dim ? WF.ink70 : WF.ink }}>
                  <span style={{ color: WF.ink40 }}>{c.dim ? '✕' : '✓'}</span>{p}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );

  // Functional utility roadmap — the can's physical benefits
  const Utility = (tag) => (
    <Sec pad={pad} tag={tag}>
      <div style={{ ...col, gap: 6, marginBottom: 22 }}>
        <Eyebrow>Functional utility</Eyebrow>
        <H size={m ? 22 : 32}>Engineered for the way you actually cook.</H>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,1fr)', gap: m ? 14 : 18 }}>
        {[['Drip-free spout', 'Clean pour, no greasy ring on the shelf'],
          ['Featherlight tin', 'A fraction of a glass bottle’s weight'],
          ['Drop-proof', 'Bounces. Doesn’t shatter on tile'],
          ['One-hand pour', 'Balanced for mid-cook, no funnel needed']].map(([t, s], i) => (
          <div key={i} style={{ ...col, gap: 12 }}>
            <ImgBox label={`icon · ${t.toLowerCase()}`} height={m ? 100 : 120} />
            <div style={{ fontFamily: WF.sans, fontWeight: 700, fontSize: 14 }}>{t}</div>
            <Sub size={12.5}>{s}</Sub>
          </div>
        ))}
      </div>
    </Sec>
  );

  // Ethical & recyclable credentials — aluminium circularity vs glass
  const Recyclable = (tag) => (
    <Sec pad={pad} tag={tag} bg="#1c1c1c">
      <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 22 : 44, alignItems: m ? 'stretch' : 'center' }}>
        <div style={{ flex: m ? 'none' : '0 0 42%' }}>
          <Eyebrow style={{ color: 'rgba(255,255,255,.55)' }}>Ethical & recyclable</Eyebrow>
          <H size={m ? 22 : 32} style={{ color: '#fff', marginTop: 12 }}>Aluminium goes round forever. Glass mostly goes heavy.</H>
          <Sub size={m ? 14 : 16} style={{ color: 'rgba(255,255,255,.7)', marginTop: 14 }}>
            Switzerland recycles aluminium at one of the highest rates in Europe — and it loses nothing on the way round.
          </Sub>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.15)' }}>
          {[['∞', 'recyclable, no quality loss'], ['~91%', 'Swiss aluminium recycling rate'], ['−60%', 'shipping weight vs glass'], ['100%', 'tin recyclable in kerbside']].map(([big, small], i) => (
            <div key={i} style={{ background: '#1c1c1c', padding: m ? 16 : 22, ...col, gap: 6 }}>
              <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: m ? 24 : 30, color: '#fff' }}>{big}</div>
              <div style={{ fontFamily: WF.mono, fontSize: 11, color: 'rgba(255,255,255,.6)', lineHeight: 1.3 }}>{small}</div>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );

  const Closing = (tag) => (
    <Sec pad={m ? 28 : 80} tag={tag}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', ...col, gap: 20, alignItems: 'center' }}>
        <Eyebrow>Value-driven close · Batch #01</Eyebrow>
        <H size={m ? 26 : 42}>Bring the <span style={{ fontStyle: 'italic', fontWeight: 700 }}>vita lenta</span> into your Tuesday night dinner.</H>
        <Sub size={m ? 15 : 17} style={{ maxWidth: 500 }}>Everyday premium, priced to actually pour. Get early access to the first Swiss batch.</Sub>
        <EmailCapture cta="Get early access" stacked={m} width={440} />
        <div style={{ fontFamily: WF.mono, fontSize: 11, color: WF.ink40 }}>Launch pricing locked for the list. No spam.</div>
      </div>
    </Sec>
  );

  // ---- VARIATION 1: pour-led hero, classic flow ----------------------------
  if (variation === 1) {
    const Hero = (
      <Sec divider={false} pad={0} tag="① HERO">
        <Nav compact={m} />
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row' }}>
          <div style={{ flex: m ? 'none' : '0 0 46%', padding: pad, ...col, gap: 20, justifyContent: 'center' }}>
            <Eyebrow>Everyday premium EVOO · Swiss launch</Eyebrow>
            <H size={m ? 32 : 50}>Premium oil isn’t a luxury. It’s an everyday staple.</H>
            <Sub size={m ? 15 : 18}>Cold-extracted, generous-pour olive oil priced for Tuesday nights — not just dinner parties.</Sub>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <CTA size={m ? 14 : 16}>Join the launch list</CTA>
              <CTA solid={false} size={m ? 14 : 16}>See the price ↓</CTA>
            </div>
            <Note>CTA strategy: hero button → single value-driven form at the close. Lead with the everyday-staple promise.</Note>
          </div>
          <div style={{ flex: 1, minHeight: m ? 280 : 460 }}>
            <ImgBox label="HERO: oil poured generously over a simple bowl of weeknight pasta, motion" height={m ? 280 : 520} style={{ borderLeft: m ? undefined : `1px solid ${WF.line}` }} />
          </div>
        </div>
      </Sec>
    );
    return (
      <div className="wf" style={{ width: '100%' }}>
        {Hero}
        {Contrast('② CONTRAST: DELI vs AMAREA')}
        {Utility('③ FUNCTIONAL UTILITY')}
        {Recyclable('④ RECYCLABLE CREDENTIALS')}
        {Closing('⑤ VALUE-DRIVEN CLOSE')}
      </div>
    );
  }

  // ---- VARIATION 2: value-comparison first, inline hero capture ------------
  const HeroValue = (
    <Sec divider={false} pad={0} tag="① VALUE HERO">
      <Nav compact={m} />
      <div style={{ padding: m ? 28 : 64, ...col, gap: 22, alignItems: 'center', textAlign: 'center', borderBottom: `1px solid ${WF.line}` }}>
        <Eyebrow>Everyday premium EVOO · Swiss launch</Eyebrow>
        <H size={m ? 30 : 50} style={{ maxWidth: 820 }}>CHF 35 for oil you use twice a year? Hard pass.</H>
        <Sub size={m ? 15 : 18} style={{ maxWidth: 560 }}>Same cold-extracted quality the delis gatekeep — at a price you’ll happily pour every night.</Sub>
        <EmailCapture cta="Join the launch list" stacked={m} width={460} />
        <Note style={{ maxWidth: 480 }}>CTA strategy: lead with the price contrast, capture email in the hero (above the fold), repeat at close.</Note>
      </div>
    </Sec>
  );
  const PourBand = (
    <Sec pad={0} tag="② POUR SHOT">
      <div style={{ position: 'relative' }}>
        <ImgBox label="FULL-BLEED: generous pour over weeknight pasta, warm everyday kitchen" height={m ? 300 : 440} dark />
        <div style={{ position: 'absolute', left: m ? 20 : 56, bottom: m ? 20 : 56, maxWidth: 440 }}>
          <H size={m ? 22 : 34} style={{ color: '#fff' }}>Pour like you mean it.</H>
          <Sub size={m ? 14 : 16} style={{ color: 'rgba(255,255,255,.8)', marginTop: 10 }}>No rationing the good stuff. That’s the whole point.</Sub>
        </div>
      </div>
    </Sec>
  );
  return (
    <div className="wf" style={{ width: '100%' }}>
      {HeroValue}
      {Contrast('③ CONTRAST: DELI vs AMAREA')}
      {PourBand}
      {Utility('④ FUNCTIONAL UTILITY')}
      {Recyclable('⑤ RECYCLABLE CREDENTIALS')}
      {Closing('⑥ VALUE-DRIVEN CLOSE (repeat)')}
    </div>
  );
}

window.ConceptC = ConceptC;
