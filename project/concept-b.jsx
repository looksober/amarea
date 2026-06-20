// concept-b.jsx — Rational / Educational concept. Two layout variations.
// ConceptB({ variation: 1|2, device: 'desktop'|'mobile' })

function ConceptB({ variation, device }) {
  const m = device === 'mobile';
  const pad = m ? 24 : 56;
  const col = { display: 'flex', flexDirection: 'column' };

  // ---- shared section renderers -------------------------------------------
  const Paradox = (tag) => (
    <Sec pad={pad} tag={tag} bg="#f4f4f2">
      <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 26px', ...col, gap: 12, alignItems: 'center' }}>
        <Eyebrow>The glass vs. aluminium paradox</Eyebrow>
        <H size={m ? 24 : 36}>Clear bottles look honest. They're quietly ruining your oil.</H>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 16 : 24 }}>
        {[{
          t: 'Supermarket glass', bad: true,
          pts: ['Light passes straight through', 'UV oxidises polyphenols', 'Flavour + nutrients fade on the shelf'],
          img: 'diagram · light rays entering clear bottle',
        }, {
          t: 'Amarea tin', bad: false,
          pts: ['Blocks 100% of light', 'Oil stays as fresh as press day', 'Antioxidants intact to last drop'],
          img: 'diagram · light blocked by aluminium tin',
        }].map((c, i) => (
          <div key={i} style={{ border: `1px solid ${WF.line}`, background: WF.paper, padding: m ? 18 : 24, ...col, gap: 14 }}>
            <ImgBox label={c.img} height={m ? 150 : 180} dark={!c.bad} />
            <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: 17, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: WF.mono, fontSize: 13, color: c.bad ? WF.ink40 : WF.ink }}>{c.bad ? '✕' : '✓'}</span>{c.t}
            </div>
            <div style={{ ...col, gap: 9 }}>
              {c.pts.map((p, j) => (
                <div key={j} style={{ display: 'flex', gap: 8, fontFamily: WF.sans, fontSize: 13.5, color: c.bad ? WF.ink70 : WF.ink, opacity: c.bad ? .7 : 1 }}>
                  <span style={{ color: WF.ink40 }}>—</span>{p}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );

  const Scorecard = (tag, lead = false) => (
    <Sec pad={pad} tag={tag} bg={lead ? '#1c1c1c' : WF.paper}>
      <div style={{ ...col, gap: 6, marginBottom: 22 }}>
        <Eyebrow style={{ color: lead ? 'rgba(255,255,255,.55)' : WF.ink40 }}>The transparency scorecard</Eyebrow>
        <H size={m ? 22 : 32} style={{ color: lead ? '#fff' : WF.ink }}>{lead ? 'The numbers, before the pitch.' : 'Every number we can prove.'}</H>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,1fr)', gap: 1, background: lead ? 'rgba(255,255,255,.15)' : WF.line, border: `1px solid ${lead ? 'rgba(255,255,255,.15)' : WF.line}` }}>
        {[['Cold-extracted', '< 27°C, mechanical only'], ['0.28%', 'free acidity'], ['High', 'polyphenol focus'], ['Single estate', 'one origin, traceable'], ['Nov 2025', 'harvest date'], ['90 days', 'press → tin'], ['100%', 'light blocked'], ['Batch 01', '6,000 tins']].map(([big, small], i) => (
          <div key={i} style={{ background: lead ? '#1c1c1c' : WF.paper, padding: m ? 14 : 18, ...col, gap: 6 }}>
            <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: m ? 18 : 22, color: lead ? '#fff' : WF.ink }}>{big}</div>
            <div style={{ fontFamily: WF.mono, fontSize: 11, color: lead ? 'rgba(255,255,255,.55)' : WF.ink40, lineHeight: 1.3 }}>{small}</div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: WF.mono, fontSize: 11, color: lead ? 'rgba(255,255,255,.45)' : WF.ink40, marginTop: 12 }}>↳ lab sheet + mill receipts linked, no jargon wall.</div>
    </Sec>
  );

  const Assurance = (tag) => (
    <Sec pad={pad} tag={tag}>
      <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 20 : 40, alignItems: 'center' }}>
        <div style={{ flex: m ? 'none' : '0 0 46%', width: m ? '100%' : undefined }}>
          <ImgBox label="origin photo / map · the grove + the people who press it" height={m ? 200 : 280} />
        </div>
        <div style={{ flex: 1, ...col, gap: 16 }}>
          <Eyebrow>Peer-to-peer assurance</Eyebrow>
          <H size={m ? 22 : 32}>We don't have a sommelier badge. We have receipts.</H>
          <Sub size={m ? 15 : 17}>
            No tasting-note theatre. Here's the grove, the mill, the harvest week and the lab sheet — so you
            can judge the oil the same way we did.
          </Sub>
          <Lines n={2} width={m ? '100%' : 440} />
        </div>
      </div>
    </Sec>
  );

  const Waitlist = (label) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: m ? 6 : 10, flexWrap: 'wrap', justifyContent: 'center' }}>
      {['You join', 'Harvest Nov', 'Bottled', 'Shipped'].map((s, i, arr) => (
        <React.Fragment key={i}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 16, height: 16, borderRadius: 16, border: `1.5px solid ${i === 0 ? WF.ink : WF.ink40}`, background: i === 0 ? WF.ink : 'transparent' }} />
            <span style={{ fontFamily: WF.mono, fontSize: 11, color: i === 0 ? WF.ink : WF.ink40, letterSpacing: '.04em' }}>{s}</span>
          </div>
          {i < arr.length - 1 && <span style={{ color: WF.ink40 }}>·····</span>}
        </React.Fragment>
      ))}
    </div>
  );

  const Closing = (tag) => (
    <Sec pad={m ? 28 : 80} tag={tag}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', ...col, gap: 20, alignItems: 'center' }}>
        <Eyebrow>Rational close</Eyebrow>
        <H size={m ? 26 : 42}>Stop cooking with oil that's been oxidising since spring.</H>
        <Sub size={m ? 15 : 17} style={{ maxWidth: 500 }}>Join the list for the fresh Swiss launch. You'll get one update at each step — no marketing drip.</Sub>
        <EmailCapture cta="Join the waitlist" stacked={m} width={440} />
        <div style={{ marginTop: 6 }}>{Waitlist()}</div>
      </div>
    </Sec>
  );

  // ---- VARIATION 1: paradox-led, technical hero ----------------------------
  if (variation === 1) {
    const Hero = (
      <Sec divider={false} pad={0} tag="① TECHNICAL HERO">
        <Nav compact={m} />
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row' }}>
          <div style={{ flex: m ? 'none' : '0 0 48%', padding: pad, ...col, gap: 20, justifyContent: 'center' }}>
            <Eyebrow>Cold-extracted EVOO · Swiss launch</Eyebrow>
            <H size={m ? 32 : 50}>100% lightproof. 0% snobbery.</H>
            <Sub size={m ? 15 : 18}>The tin that keeps olive oil tasting like the day it was pressed — and skips the tasting-note theatre.</Sub>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <CTA size={m ? 14 : 16}>Secure your allocation</CTA>
              <CTA solid={false} size={m ? 14 : 16}>Why tin →</CTA>
            </div>
            <Note>CTA strategy: rational hero button + one email capture at the close, with a waitlist sequence indicator.</Note>
          </div>
          <div style={{ flex: 1, minHeight: m ? 300 : 460 }}>
            <ImgBox label="HERO: exploded / technical tin cutting through darkness, single light beam" height={m ? 300 : 520} dark style={{ borderLeft: m ? undefined : `1px solid ${WF.line}` }} />
          </div>
        </div>
      </Sec>
    );
    return (
      <div className="wf" style={{ width: '100%' }}>
        {Hero}
        {Paradox('② GLASS vs ALUMINIUM')}
        {Scorecard('③ TRANSPARENCY SCORECARD')}
        {Assurance('④ PEER ASSURANCE')}
        {Closing('⑤ RATIONAL CLOSE')}
      </div>
    );
  }

  // ---- VARIATION 2: proof-forward, scorecard leads, inline hero capture ----
  const HeroCompact = (
    <Sec divider={false} pad={0} tag="① COMPACT HERO">
      <Nav compact={m} />
      <div style={{ padding: m ? 28 : 64, ...col, gap: 18, alignItems: 'center', textAlign: 'center', borderBottom: `1px solid ${WF.line}` }}>
        <Eyebrow>Cold-extracted EVOO · Swiss launch</Eyebrow>
        <H size={m ? 30 : 48} style={{ maxWidth: 760 }}>Stop cooking with oxidised oil.</H>
        <Sub size={m ? 15 : 18} style={{ maxWidth: 540 }}>Most supermarket EVOO degraded on a bright shelf months ago. Ours ships fresh, in a fully lightproof tin.</Sub>
        <EmailCapture cta="Get on the list" stacked={m} width={460} />
        <Note style={{ maxWidth: 480 }}>CTA strategy: email capture sits in the hero (above the fold) and repeats at the close — lead with proof, capture early.</Note>
      </div>
    </Sec>
  );
  return (
    <div className="wf" style={{ width: '100%' }}>
      {HeroCompact}
      {Scorecard('② SCORECARD (leads)', true)}
      {Paradox('③ GLASS vs ALUMINIUM')}
      {Assurance('④ PEER ASSURANCE')}
      {Closing('⑤ RATIONAL CLOSE (repeat)')}
    </div>
  );
}

window.ConceptB = ConceptB;
