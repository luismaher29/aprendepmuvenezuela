import type { Metadata } from 'next';
import HotmartCheckoutButton from '@/components/HotmartCheckoutButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Pack de Trazos Microblading + Hairstroke | Aprende PMU',
  description:
    'Dos manuales digitales de práctica para entrenar trazos de Microblading y Hairstroke: más de 282 páginas de ejercicios, patrones, conexiones y estructuras.',
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
  ['¿Cómo se realiza la compra?', 'El botón de compra abre el checkout seguro de Hotmart con el precio y las opciones de pago vigentes para tu país.'],
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
          <div className={styles.facts}><span>+282 páginas</span><span>2 manuales</span><span>100% digital</span><span>Práctica progresiva</span></div>
          <div className={styles.actions}>
            <a className={styles.primary} href="#adquirir">Quiero el pack ↓</a>
            <a className={styles.secondary} href="#manuales">Ver qué incluye</a>
          </div>
          <p className={styles.microcopy}>Acceso digital · Compra segura mediante Hotmart · Uso personal</p>
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
          <div className={styles.packBadge}><small>PACK DE PRÁCTICA</small><strong>2 manuales</strong><span>+282 páginas</span></div>
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
            ['+282','páginas entre ambos manuales'],['02','sistemas de trazos complementarios'],['100%','material digital'],['∞','veces para volver a practicar']
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
          <h2>Entrena Microblading y Hairstroke dentro de una misma progresión.</h2>
          <p>Adquiere los dos manuales en un solo pack. El checkout de Hotmart mostrará el precio vigente y las opciones de pago disponibles para tu país.</p>
          <div className={styles.checkoutTags}><span>✓ Guía Microblading · 122 páginas</span><span>✓ Manual Hairstroke · +160 páginas</span><span>✓ Acceso digital</span><span>✓ Compra segura</span></div>
        </div>
        <aside className={styles.checkoutCard}>
          <small>INCLUYE</small>
          <strong>2</strong>
          <h3>manuales profesionales</h3>
          <p>Más de 282 páginas para entrenar trazos, conexiones, patrones y estructuras completas.</p>
          <HotmartCheckoutButton href={checkoutUrl} label="Adquirir el pack ahora" className={styles.hotmartButton}/>
          <a className={styles.directLink} href={checkoutUrl} target="_blank" rel="noreferrer">Abrir checkout en una nueva pestaña ↗</a>
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
        <a href="#adquirir">Adquirir pack ↑</a>
      </footer>
    </main>
  );
}
