import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Pack de Trazos Microblading + Hairstroke | Aprende PMU',
  description:
    'Más de 282 páginas de práctica para entrenar trazos de Microblading y Hairstroke. Dos manuales digitales por US$29.99.',
  alternates: {
    canonical: '/pack-trazos',
  },
  openGraph: {
    title: 'Pack de Trazos Microblading + Hairstroke',
    description:
      '2 manuales · +282 páginas · Microblading + Hairstroke · US$29.99 · Ahorras US$17.',
    url: '/pack-trazos',
    siteName: 'Aprende PMU',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pack de Trazos Microblading + Hairstroke',
    description:
      '2 manuales · +282 páginas · Microblading + Hairstroke · US$29.99 · Ahorras US$17.',
  },
};

const checkoutUrl = 'https://pay.hotmart.com/S107207226X';

const microblading = [
  '122 páginas de ejercicios prácticos',
  'Trazos básicos y avanzados',
  'Coordinación, precisión y simetría',
  'Curvas, direcciones y conexiones',
  'Construcción progresiva de patrones',
  'Prácticas para mejorar memoria muscular',
];

const hairstroke = [
  'Más de 160 páginas de entrenamiento',
  'Trazos básicos, curvaturas e inclinaciones',
  'Variaciones de dirección y trazos en S',
  'Conexiones tipo Y, abiertas y posteriores',
  'Estructuras completas de cejas',
  'Patrones repetitivos para control y fluidez',
];

const faq = [
  ['¿Los dos manuales son digitales?', 'Sí. Recibes acceso a dos materiales digitales para estudiar, consultar y practicar desde tus dispositivos compatibles.'],
  ['¿Sirven si estoy comenzando?', 'Sí. Los ejercicios avanzan de forma progresiva, pero también son útiles para profesionales que quieren reforzar limpieza, control y naturalidad.'],
  ['¿Sustituyen un curso completo?', 'No. Son manuales de práctica y consulta. Complementan la formación técnica, las demostraciones y el acompañamiento profesional.'],
  ['¿Cuántas páginas incluye el pack?', 'La Guía Práctica de Microblading incluye 122 páginas y el Manual Maestro Hairstroke más de 160 páginas: en conjunto, más de 282 páginas de práctica.'],
  ['¿Cuál es el precio del pack?', 'El pack tiene un precio especial de US$29.99. Comprados por separado, ambos manuales tienen un valor conjunto de US$47, por lo que ahorras US$17.'],
  ['¿Cómo se realiza la compra?', 'El botón de compra abre el checkout seguro de Hotmart con las opciones de pago disponibles para tu país.'],
] as const;

export default function PackTrazosPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a href="/" className={styles.brand}><span>APRENDE</span><strong>PMU</strong></a>
        <nav><a href="#manuales">Los manuales</a><a href="#entrenamiento">Entrenamiento</a><a href="#faq">Preguntas</a></nav>
        <a className={styles.navCta} href="#adquirir">Ver pack</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>PACK DIGITAL · ENTRENAMIENTO DE TRAZOS</p>
          <h1>Dos técnicas.<br/><em>Una sola rutina de práctica.</em></h1>
          <p className={styles.lead}>Une la precisión del Microblading con la fluidez del Hairstroke y entrena la mano con una progresión diseñada para pasar de trazos aislados a estructuras completas.</p>
          <div className={styles.facts}><span>+282 páginas</span><span>2 manuales</span><span>US$29.99 el pack</span><span>Ahorras US$17</span></div>
          <div className={styles.actions}>
            <a className={styles.primary} href={checkoutUrl} target="_blank" rel="noopener noreferrer">Quiero el pack por US$29.99 ↗</a>
            <a className={styles.secondary} href="#manuales">Ver qué incluye</a>
          </div>
          <p className={styles.microcopy}>Valor por separado: US$47 · Precio pack: US$29.99 · Compra segura mediante Hotmart</p>
        </div>

        <div className={styles.books} aria-label="Pack de manuales Microblading y Hairstroke">
          <div className={`${styles.book} ${styles.bookMicro}`}>
            <div className={styles.bookCover} style={{backgroundImage:"url('https://static.wixstatic.com/media/9c2f3e_c5b7b893e93a470ba54b693f74fe292d~mv2.jpg/v1/fill/w_461%2Ch_461%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Gu%C3%ADa%20Pr%C3%A1ctica%20de%20Trazos%20en%20Microblading%20%282%29.jpg')"}}/>
            <span>MICROBLADING</span>
          </div>
          <div className={`${styles.book} ${styles.bookHair}`}>
            <div className={styles.bookCover} style={{backgroundImage:"url('/biblioteca/hairstroke.webp')"}}/>
            <span>HAIRSTROKE</span>
          </div>
          <div className={styles.packBadge}><small>VALOR POR SEPARADO · US$47</small><strong>US$29.99</strong><span>Ahorras US$17</span></div>
        </div>
      </section>

      <section className={styles.strip}>
        <span>✦ Control de mano</span><span>✦ Dirección</span><span>✦ Conexiones</span><span>✦ Patrones completos</span>
      </section>

      <section className={styles.intro} id="manuales">
        <div><p className={styles.eyebrow}>MICROBLADING + HAIRSTROKE</p><h2>No son dos manuales repetidos. Son dos maneras de entrenar el mismo lenguaje visual.</h2></div>
        <p>El objetivo del pack es que puedas trabajar precisión, ritmo, dirección, conexión y lectura de la ceja desde dos técnicas distintas. Practicas la lógica del pelo y la estructura, no solo líneas sueltas.</p>
      </section>

      <section className={styles.manualGrid}>
        <article>
          <div className={styles.number}>01</div>
          <p className={styles.kicker}>GUÍA PRÁCTICA DE TRAZOS</p>
          <h3>Microblading</h3>
          <p className={styles.manualLead}>122 páginas para entrenar coordinación, precisión, simetría y construcción progresiva de patrones.</p>
          <ul>{microblading.map(item => <li key={item}>{item}</li>)}</ul>
          <a href="/guia-trazos-microblading">Conocer el manual individual ↗</a>
        </article>
        <article>
          <div className={styles.number}>02</div>
          <p className={styles.kicker}>MANUAL MAESTRO DE TRAZOS</p>
          <h3>Hairstroke</h3>
          <p className={styles.manualLead}>Más de 160 páginas para desarrollar control, fluidez, conexiones y estructuras de pelo a pelo con máquina.</p>
          <ul>{hairstroke.map(item => <li key={item}>{item}</li>)}</ul>
          <a href="/manual-trazos-hairstroke">Conocer el manual individual ↗</a>
        </article>
      </section>

      <section className={styles.training} id="entrenamiento">
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>ENTRENAMIENTO CON INTENCIÓN</p>
          <h2>La naturalidad se construye antes de tocar una piel real.</h2>
          <p>Los dos manuales están pensados para repetir con propósito: observar, dibujar, conectar, corregir y volver a ejecutar hasta que la estructura deje de sentirse forzada.</p>
        </div>
        <ol>
          {['Controlas líneas y curvas','Trabajas inclinaciones y direcciones','Aprendes a conectar trazos','Construyes secuencias y patrones','Integras estructuras completas','Repites hasta ganar fluidez'].map((step, i)=><li key={step}><b>{String(i+1).padStart(2,'0')}</b><span>{step}</span></li>)}
        </ol>
      </section>

      <section className={styles.value}>
        <div><p className={styles.eyebrow}>QUÉ OBTIENES</p><h2>Una biblioteca de práctica enfocada exclusivamente en trazos.</h2></div>
        <div className={styles.valueGrid}>
          {[
            ['+282','páginas entre ambos manuales'],['US$47','valor comprándolos por separado'],['US$29.99','precio especial del pack'],['US$17','de ahorro al llevar ambos']
          ].map(([big,copy])=><article key={copy}><strong>{big}</strong><p>{copy}</p></article>)}
        </div>
      </section>

      <section className={styles.audience}>
        <div><span>✓</span><h2>Este pack es para ti si…</h2><ul><li>Estudias Microblading, Hairstroke o ambas técnicas.</li><li>Sientes que tus trazos aún se ven rígidos o poco naturales.</li><li>Quieres mejorar control de mano y memoria muscular.</li><li>Necesitas ejercicios estructurados para practicar de forma constante.</li></ul></div>
        <div><span>—</span><h2>No es un atajo si…</h2><ul><li>Esperas mejorar sin repetir ejercicios.</li><li>Buscas sustituir una formación completa en técnica y piel.</li><li>No quieres dedicar tiempo a práctica manual frecuente.</li></ul></div>
      </section>

      <section className={styles.checkout} id="adquirir">
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>PACK DE TRAZOS · APRENDE PMU</p>
          <h2>Dos manuales. Más de 282 páginas. Un precio especial de US$29.99.</h2>
          <p>Comprándolos por separado pagarías US$47. Con este pack obtienes ambos por US$29.99 y ahorras US$17.</p>
          <div className={styles.checkoutTags}><span>✓ Guía Microblading · 122 páginas</span><span>✓ Manual Hairstroke · +160 páginas</span><span>✓ Ahorras US$17</span><span>✓ Compra segura</span></div>
        </div>
        <aside className={styles.checkoutCard}>
          <small>VALOR POR SEPARADO · US$47</small>
          <strong>US$29.99</strong>
          <h3>precio especial del pack</h3>
          <p>Te llevas los dos manuales profesionales y ahorras US$17 frente a comprarlos individualmente.</p>
          <a className={styles.hotmartButton} href={checkoutUrl} target="_blank" rel="noopener noreferrer">Adquirir el pack por US$29.99 ↗</a>
          <small className={styles.safe}>Pago procesado de forma segura por Hotmart.</small>
        </aside>
      </section>

      <section className={styles.faq} id="faq">
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
        <h2>Antes de comenzar tu práctica.</h2>
        <div>{faq.map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div>
      </section>

      <footer className={styles.footer}>
        <a href="/" className={styles.brand}><span>APRENDE</span><strong>PMU</strong></a>
        <p>Formación profesional en micropigmentación.</p>
        <a href="#adquirir">Adquirir pack · US$29.99 ↑</a>
      </footer>
    </main>
  );
}
