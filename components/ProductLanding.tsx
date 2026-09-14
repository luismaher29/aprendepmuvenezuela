import { whatsappUrl } from '@/lib/whatsapp';
import styles from '@/app/curso-efecto-polvo/page.module.css';

export type ProductLandingConfig = {
  eyebrow: string;
  title: string;
  lead: string;
  facts: string[];
  image: string;
  imagePosition?: string;
  regularPrice?: string;
  venezuelaPrice?: string;
  priceLabel?: string;
  whatsappProduct: string;
  source: string;
  problemEyebrow: string;
  problemTitle: string;
  problemCopy: string;
  pillars: { title: string; copy: string }[];
  methodTitle: string;
  methodCopy: string;
  methodSteps: string[];
  programTitle: string;
  programCopy: string;
  modules: { title: string; copy: string }[];
  practiceEyebrow?: string;
  practiceTitle?: string;
  practiceCopy?: string;
  practiceSteps?: string[];
  included: string[];
  audienceFor: string[];
  audienceNot: string[];
  teacherCopy?: string;
  checkoutTitle: string;
  checkoutCopy: string;
  ctaLabel?: string;
  faq: { question: string; answer: string }[];
};

function WhatsAppButton({ config, label, className }: { config: ProductLandingConfig; label: string; className?: string }) {
  const price = config.venezuelaPrice ? ` por ${config.venezuelaPrice}` : '';
  const message = `Hola, estoy en Venezuela 🇻🇪 y quiero adquirir ${config.whatsappProduct}${price}. Quiero recibir la información y los datos para realizar el pago.`;
  const url = whatsappUrl(message, { source: config.source, medium: 'whatsapp', campaign: `${config.source}_venezuela` });
  return <a className={className || styles.primaryButton} href={url} target="_blank" rel="noreferrer" data-event={`click_whatsapp_${config.source}`}>{label} <span aria-hidden>↗</span></a>;
}

export default function ProductLanding({ config }: { config: ProductLandingConfig }) {
  return <main className={styles.page} id="top">
    <header className={styles.nav}>
      <a href="/" className={styles.brand} aria-label="Volver a Aprende PMU Venezuela"><span>APRENDE</span><strong>PMU</strong></a>
      <nav><a href="#aprendizaje">Qué aprenderás</a><a href="#programa">Contenido</a><a href="#inscripcion">Adquirir</a></nav>
      <WhatsAppButton config={config} label="Consultar" className={styles.navButton}/>
    </header>

    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span>VE</span> {config.eyebrow}</p>
        <h1>{config.title}</h1>
        <p className={styles.lead}>{config.lead}</p>
        <div className={styles.heroFacts}>{config.facts.map(item=><span key={item}>{item}</span>)}</div>
        <div className={styles.actions}><a className={styles.primaryButton} href="#programa">Ver contenido ↓</a><WhatsAppButton config={config} label="Consultar por WhatsApp" className={styles.secondaryButton}/></div>
        <p className={styles.heroMeta}>Acceso digital · Aprende a tu ritmo · Atención Venezuela</p>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.heroImage} role="img" aria-label={config.whatsappProduct} style={{backgroundImage:`linear-gradient(180deg,#211c1905,#211c1948),url('${config.image}')`,backgroundPosition:config.imagePosition || 'center'}}/>
        {(config.regularPrice || config.venezuelaPrice) && <div className={styles.priceCard}>
          {config.regularPrice && <><small>VALOR DE REFERENCIA</small><del>{config.regularPrice}</del></>}
          {config.venezuelaPrice && <><span>{config.priceLabel || 'PRECIO VENEZUELA'}</span><strong>{config.venezuelaPrice}</strong></>}
        </div>}
      </div>
    </section>

    <section className={styles.trustStrip}>{config.facts.map(item=><span key={item}>✦ {item}</span>)}</section>

    <section className={styles.problem} id="aprendizaje">
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>{config.problemEyebrow}</p><h2>{config.problemTitle}</h2></div><p>{config.problemCopy}</p></div>
      <div className={styles.problemGrid}>{config.pillars.map((item,i)=><article key={item.title}><b>{String(i+1).padStart(2,'0')}</b><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
    </section>

    <section className={styles.method}>
      <div><p className={`${styles.eyebrow} ${styles.light}`}>MÉTODO VERÓNICA PMU</p><h2>{config.methodTitle}</h2><p>{config.methodCopy}</p></div>
      <ol>{config.methodSteps.map((step,i)=><li key={step}><b>{String(i+1).padStart(2,'0')}</b><span>{step}</span></li>)}</ol>
    </section>

    <section className={styles.program} id="programa">
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>CONTENIDO</p><h2>{config.programTitle}</h2></div><p>{config.programCopy}</p></div>
      <div className={styles.moduleGrid}>{config.modules.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}</div>
    </section>

    {config.practiceSteps && <section className={styles.practice}><div><p className={styles.eyebrow}>{config.practiceEyebrow || 'PRÁCTICA Y APLICACIÓN'}</p><h2>{config.practiceTitle}</h2><p>{config.practiceCopy}</p></div><div className={styles.practiceSteps}>{config.practiceSteps.map((step,i)=><div key={step}><b>{String(i+1).padStart(2,'0')}</b><span>{step}</span></div>)}</div></section>}

    <section className={styles.included}><div className={styles.includedIntro}><p className={`${styles.eyebrow} ${styles.light}`}>INCLUYE</p><h2>Todo lo necesario para estudiar y aplicar el contenido con mayor criterio.</h2><p>El material queda disponible para que puedas avanzar a tu ritmo y volver a consultar los conceptos cuando lo necesites.</p></div><div className={styles.includedGrid}>{config.included.map(item=><div key={item}><span>✓</span><p>{item}</p></div>)}</div></section>

    <section className={styles.audience}>
      <div className={styles.forYou}><span>✓</span><h2>Es para ti si…</h2><ul>{config.audienceFor.map(item=><li key={item}>{item}</li>)}</ul></div>
      <div className={styles.notForYou}><span>—</span><h2>No es para ti si…</h2><ul>{config.audienceNot.map(item=><li key={item}>{item}</li>)}</ul></div>
    </section>

    <section className={styles.teacher}><div className={styles.teacherPhoto} role="img" aria-label="Verónica Montaño" style={{backgroundImage:`linear-gradient(180deg,#0000,#211c1932),url('${config.image}')`,backgroundPosition:config.imagePosition || 'center'}}/><div><p className={styles.eyebrow}>TU INSTRUCTORA</p><h2>Aprende junto a Verónica Montaño.</h2><p>{config.teacherCopy || 'Profesional y educadora en micropigmentación con más de 17 años de experiencia. Su metodología combina fundamentos, práctica y criterio profesional para ayudarte a comprender el porqué detrás de cada decisión.'}</p><div className={styles.teacherStats}><span><strong>17+</strong> años de experiencia</span><span><strong>PMU</strong> arte + técnica</span></div></div></section>

    <section className={styles.checkout} id="inscripcion"><div><p className={`${styles.eyebrow} ${styles.light}`}>APRENDE PMU · VENEZUELA</p><h2>{config.checkoutTitle}</h2><p>{config.checkoutCopy}</p><div className={styles.checkoutList}>{config.included.slice(0,4).map(item=><span key={item}>✓ {item}</span>)}</div></div><aside className={styles.checkoutCard}>{config.regularPrice && <><small>VALOR DE REFERENCIA</small><del>{config.regularPrice}</del></>}{config.venezuelaPrice && <><p>{config.priceLabel || 'PRECIO VENEZUELA'}</p><strong>{config.venezuelaPrice}</strong></>}<span>Atención personal por WhatsApp</span><WhatsAppButton config={config} label={config.ctaLabel || 'Quiero adquirirlo'}/><small className={styles.safe}>Te confirmamos directamente el proceso de pago y acceso.</small></aside></section>

    <section className={styles.faq}><p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p><h2>Antes de comenzar</h2><div>{config.faq.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>

    <footer className={styles.footer}><a href="/" className={styles.brand}><span>APRENDE</span><strong>PMU</strong></a><p>Formación profesional en micropigmentación · Venezuela</p><WhatsAppButton config={config} label="WhatsApp" className={styles.inlineLink}/></footer>
  </main>;
}
