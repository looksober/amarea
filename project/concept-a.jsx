// concept-a.jsx — Aesthetic / Lifestyle concept. Two layout variations.
// ConceptA({ variation: 1|2, device: 'desktop'|'mobile' })

function ConceptA({ variation, device }) {
  const m = device === 'mobile';
  const pad = m ? 24 : 56;
  const col = { display: 'flex', flexDirection: 'column' };

  // ---- shared section renderers -------------------------------------------
  const Manifesto = (tag) => (
    <Sec pad={m ? 28 : 80} tag={tag} bg="#f4f4f2">
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', ...col, gap: 18, alignItems: 'center' }}>
        <Eyebrow>The anti-cliché manifesto</Eyebrow>
        <H size={m ? 26 : 40}>No nonna. No farmhouse. No checkered tablecloth.</H>
        <Sub size={m ? 15 : 18} style={{ maxWidth: 600 }}>
          Great olive oil doesn't belong in a dusty cellar. It belongs on your counter, in your
          fourth-floor walk-up, next to the espresso machine you researched for three weeks.
        </Sub>
        <Lines n={2} align="center" width={m ? '100%' : 480} />
      </div>
    </Sec>
  );

  const Gallery = (tag) => (
    <Sec pad={pad} tag={tag}>
      <Eyebrow style={{ marginBottom: 18 }}>Built for the everyday</Eyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 18 : 20 }}>
        {[['Monday, 21:14', 'Weeknight pasta, zero ceremony'],
          ['Sunday, 10:30', 'Brunch with the people you like'],
          ['Anytime', 'Finishing drizzle, no occasion needed']].map(([cap, sub], i) => (
          <div key={i} style={{ ...col, gap: 10 }}>
            <ImgBox label={`use-case photo · ${cap}`} height={m ? 200 : 230} />
            <div style={{ fontFamily: WF.sans, fontWeight: 700, fontSize: 14 }}>{sub}</div>
          </div>
        ))}
      </div>
    </Sec>
  );

  const Quality = (tag) => (
    <Sec pad={pad} tag={tag} bg="#1c1c1c">
      <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 22 : 40, alignItems: m ? 'stretch' : 'center' }}>
        <div style={{ flex: m ? 'none' : '0 0 38%' }}>
          <Eyebrow style={{ color: 'rgba(255,255,255,.55)' }}>What's actually inside</Eyebrow>
          <H size={m ? 22 : 30} style={{ color: '#fff', marginTop: 12 }}>Looks like design. Tastes like oil should.</H>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,.15)' }}>
          {[['100%', 'cold-extracted EVOO'], ['< 0.3%', 'acidity'], ['First', 'press, single origin'], ['0', 'additives, ever'], ['Tin', 'blocks 100% light'], ['Swiss', 'bottled, Batch 01']].map(([big, small], i) => (
            <div key={i} style={{ background: '#1c1c1c', padding: m ? 14 : 18, ...col, gap: 6 }}>
              <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: m ? 20 : 24, color: '#fff' }}>{big}</div>
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
        <Eyebrow>Batch #01 · Limited Swiss run</Eyebrow>
        <H size={m ? 28 : 44}>Elevate the one shelf you look at every day.</H>
        <Sub size={m ? 15 : 17} style={{ maxWidth: 500 }}>
          We're bottling the first batch this autumn. Reserve a tin before your favourite shelf spot is taken.
        </Sub>
        <EmailCapture cta="Reserve a tin" stacked={m} width={440} />
        <div style={{ fontFamily: WF.mono, fontSize: 11, color: WF.ink40 }}>No spam. One email when Batch 01 ships.</div>
      </div>
    </Sec>
  );

  // ---- VARIATION 1: image-led hero, classic top-to-bottom flow -------------
  if (variation === 1) {
    const Hero = (
      <Sec divider={false} pad={0} tag="① HERO">
        <Nav compact={m} />
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 0 : 0 }}>
          <div style={{ flex: m ? 'none' : '0 0 46%', padding: pad, ...col, gap: 20, justifyContent: 'center' }}>
            <Eyebrow>Olive oil, restyled · Zürich</Eyebrow>
            <H size={m ? 34 : 52}>Your counter deserves better than a greasy bottle.</H>
            <Sub size={m ? 15 : 18}>The first EVOO you'll actually leave out on display. Sealed in a sleek tin, not hidden in the cupboard.</Sub>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <CTA size={m ? 14 : 16}>Reserve Batch #01</CTA>
              <CTA solid={false} size={m ? 14 : 16}>See it in a kitchen</CTA>
            </div>
            <Note>Hero CTA scrolls to the single email capture at the close — one conversion point, low friction.</Note>
          </div>
          <div style={{ flex: 1, minHeight: m ? 280 : 460, padding: m ? `0 ${pad}px ${pad}px` : 0 }}>
            <ImgBox label="HERO: Amarea tin on a sleek Swiss kitchen island, hard side light" height={m ? 280 : 520} style={{ borderLeft: m ? undefined : `1px solid ${WF.line}`, border: m ? `1px solid ${WF.line}` : undefined }} />
          </div>
        </div>
      </Sec>
    );
    return (
      <div className="wf" style={{ width: '100%' }}>
        {Hero}
        {Manifesto('② MANIFESTO')}
        {Gallery('③ GALLERY')}
        {Quality('④ QUALITY ANCHOR')}
        {Closing('⑤ CLOSING CTA')}
      </div>
    );
  }

  // ---- VARIATION 2: manifesto-first, persistent sticky email bar -----------
  const HeroManifesto = (
    <Sec divider={false} pad={0} tag="① STATEMENT HERO">
      <StickyBar>
        <div style={{ fontFamily: WF.sans, fontWeight: 800, letterSpacing: '.14em', fontSize: 14 }}>AMAREA</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flex: m ? 1 : '0 0 auto', justifyContent: 'flex-end' }}>
          {!m && <div className="wf-input" style={{ width: 200, height: 38, display: 'flex', alignItems: 'center', padding: '0 12px' }}>you@email.com</div>}
          <CTA size={12} style={{ padding: '10px 16px' }}>{m ? 'Join list' : 'Reserve a tin'}</CTA>
        </div>
      </StickyBar>
      <div style={{ padding: m ? 28 : 80, ...col, gap: 22, alignItems: 'center', textAlign: 'center' }}>
        <Eyebrow>The anti-cliché manifesto</Eyebrow>
        <H size={m ? 32 : 58} style={{ maxWidth: 880 }}>Olive oil grew up. It moved to the city.</H>
        <Sub size={m ? 15 : 19} style={{ maxWidth: 560 }}>
          No farmhouse fantasy. No nonna stock photo. Just exceptional oil in a tin good enough to leave on the counter.
        </Sub>
        <div style={{ width: m ? '70%' : 280, marginTop: 6 }}>
          <ImgBox label="product thumbnail · the tin, straight-on" height={m ? 200 : 240} />
        </div>
        <Note style={{ maxWidth: 460 }}>CTA strategy: persistent sticky bar (email + button) stays in view through the whole scroll, repeated at close.</Note>
      </div>
    </Sec>
  );
  const CanShowcase = (
    <Sec pad={0} tag="② PRODUCT SHOWCASE">
      <div style={{ position: 'relative' }}>
        <ImgBox label="FULL-BLEED: tin in-hand against concrete / city-apartment light" height={m ? 320 : 480} dark />
        <div style={{ position: 'absolute', left: m ? 20 : 56, bottom: m ? 20 : 56, maxWidth: 420 }}>
          <H size={m ? 24 : 38} style={{ color: '#fff' }}>Designed to be seen.</H>
          <Sub size={m ? 14 : 16} style={{ color: 'rgba(255,255,255,.8)', marginTop: 10 }}>Matte tin, no shouty label. The opposite of the supermarket shelf.</Sub>
        </div>
      </div>
    </Sec>
  );
  return (
    <div className="wf" style={{ width: '100%' }}>
      {HeroManifesto}
      {CanShowcase}
      {Gallery('③ GALLERY')}
      {Quality('④ QUALITY ANCHOR')}
      {Closing('⑤ CLOSING CTA (repeat)')}
    </div>
  );
}

window.ConceptA = ConceptA;
