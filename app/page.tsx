const stanzas = [
  [
    "వేకువ అంచులపై వొదిగిన వసంత వెలుగు",
    "వేప చెట్ల వాసనగా వీచిన జ్ఞాపకాల మేఘం",
    "నిన్నటి మాటల ముత్యాలు నినదించిన తీరంలో",
    "నిర్మల సరస్సై నవ్య గాలికి గీతమై నా హృదయం"
  ],
  [
    "బంగారు రేఖలతో బుట్టిన బిందెల సూర్యోదయం",
    "నెల్లి మబ్బుల నుంచి నూలుపోగుల విరుపు",
    "గుమ్మడికాయ తొక్కలా గోధుమ వాడి మాది",
    "నిన్ను జ్ఞాపకంలో నిలిపే నిశ్శబ్ద నాదం"
  ],
  [
    "వెలుగు నీడల మధ్య విరచిన ప్రకాశ స్వరాలు",
    "ముల్లెటి వాను చినుకుల మత్తులో మిగిలిన గాథ",
    "పత్రంపై పెదవి టపాసే ప్రతీ అక్షర ముద్దు",
    "నువ్వు నేనూ కలిసిన నవ వసంత సన్నివేశం"
  ],
  [
    "తరిమిన తరంగాల గరిష్ట చప్పుడు స్మృతిలో",
    "మోగే మృదంగమై మ్రోగిన మనసు తంత్రులు",
    "రేగడి ఎడారిలో రేవంతి రాగమై నువ్వు",
    "పొద్దు పొడిచే వేళ పరిమళం పూయించే సూచన"
  ]
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative isolate overflow-hidden">
        <div className="gradient" aria-hidden="true" />
        <section className="wrapper">
          <header className="headline">
            <p className="badge">రాగ రేఖలు</p>
            <h1>తెలుగు తంతులలో నడిచే నిశ్శబ్ద గీతం</h1>
            <p className="lede">
              ప్రకృతి స్వరాలతో మిళితమైన, జ్ఞాపకాల పొదుల్లో సేద తీరే ఒక
              తాజా పద్య కవిత.
            </p>
          </header>
          <article className="poem">
            {stanzas.map((lines, stanzaIdx) => (
              <section className="stanza" key={stanzaIdx}>
                {lines.map((line, lineIdx) => (
                  <p key={lineIdx}>{line}</p>
                ))}
              </section>
            ))}
          </article>
          <footer className="footnote">
            <p>
              — సాయం సమయంలో విరబూసే గాలి, చెట్ల లోదుస్తుల మెలకువ, మనసు
              పలికే పలకరింపు.
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}
