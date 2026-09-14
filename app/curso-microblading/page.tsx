import type { Metadata } from 'next';
import styles from '../curso-efecto-polvo/page.module.css';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Curso de Microblading Online | Aprende PMU Venezuela',
  description:
    'Curso online de Microblading con 7 módulos, 48 clases, más de 5 horas de video, prácticas en papel y piel sintética, modelos reales, acceso ilimitado y 6 meses de soporte. Precio especial Venezuela: 96 USDT.',
};

const learningPath = [
  ['01', 'Origen y fundamentos del Microblading', 'Comprende la base de la técnica, su lógica y el contexto necesario antes de comenzar a diseñar y ejecutar trazos.'],
  ['02', 'Materiales y aplicaciones', 'Conoce las herramientas principales, su función y cómo seleccionar materiales adecuados para una práctica segura y controlada.'],
  ['03', 'Visagismo y diseño de cejas', 'Aprende a construir forma, proporción y simetría antes de comenzar cualquier procedimiento pelo a pelo.'],
  ['04', 'Piel y colorimetría aplicada', 'Relaciona las características de la piel y el comportamiento del color con la selección del pigmento y la ejecución.'],
  ['05', 'Patrones básicos y avanzados', 'Desarrolla estructuras de trazos para distintas cejas, pasando de patrones iniciales a composiciones más completas.'],
  ['06', 'Práctica, protocolos y seguridad', 'Entrena en papel y piel sintética mientras integras higiene, bioseguridad, anestésicos, cuidados y prevención de malas prácticas.'],
  ['07', 'Modelos reales y técnicas complementarias', 'Observa procedimientos completos e integra Microshading, delineado, cuidados posteriores y criterio profesional dentro del servicio.'],
];

const included = [
  '7 módulos de formación',
  '48 clases organizadas paso a paso',
  'Más de 5 horas de video en Full HD',
  'Prácticas en papel',
  'Prácticas en piel sintética',
  'Procedimientos en modelos reales',
  'Acceso ilimitado al curso',
  '6 meses de soporte privado por WhatsApp',
  'Guías, recursos y plantillas descargables',
  'Certificado de finalización y aprobación',
];

const whatsappMessage =
  'Hola, estoy en Venezuela 🇻🇪 y quiero inscribirme en el Curso de Microblading por 96 USDT. Quiero recibir la información y los datos para realizar el pago.';

const buyUrl = whatsappUrl(whatsappMessage, {
  source: 'landing_curso_microblading',
  medium: 'whatsapp',
  campaign: 'curso_microblading_venezuela',
});

function WhatsAppButton({ label, className }: { label: string; className?: string }) {
  return (
    <a className={className || styles.primaryButton} href={buyUrl} target="_blank" rel="noreferrer" data-event="click_whatsapp_curso_microblading">
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

export default function CursoMicrobladingVenezuela() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.nav}>
        <a href="/" className={styles.brand} aria-label="Volver a Aprende PMU Venezuela">
          <span>APRENDE</span><strong>PMU</strong>
        </a>
        <nav>
          <a href="#aprendizaje">Qué aprenderás</a>
          <a href="#programa">Programa</a>
          <a href="#inscripcion">Inscripción</a>
        </nav>
        <WhatsAppButton label="Inscribirme" className={styles.navButton} />
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span>VE</span> FORMACIÓN ONLINE · MICROBLADING</p>
          <h1>Aprende Microblading desde la base y construye <em>cejas pelo a pelo con criterio profesional.</em></h1>
          <p className={styles.lead}>
            Una formación completa para aprender diseño, piel, color, patrones, práctica, higiene y procedimientos reales de forma progresiva.
          </p>
          <div className={styles.heroFacts}>
            <span>7 módulos</span><span>48 clases</span><span>+5 horas Full HD</span><span>6 meses de soporte</span>
          </div>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#programa">Ver el programa ↓</a>
            <WhatsAppButton label="Consultar por WhatsApp" className={styles.secondaryButton} />
          </div>
          <p className={styles.heroMeta}>100% online · Sin conocimientos previos · Acceso ilimitado</p>
        </div>

        <div className={styles.heroVisual}>
          <div
            className={styles.heroImage}
            role="img"
            aria-label="Curso profesional de Microblading de Aprende PMU"
            style={{ backgroundImage: "linear-gradient(180deg,#211c1905,#211c1948),url('/courses/microblading.jpg')", backgroundPosition: 'center' }}
          />
          <div className={styles.priceCard}>
            <small>VALOR REGULAR</small>
            <del>US$120</del>
            <span>BENEFICIO VENEZUELA</span>
            <strong>96 <i>USDT</i></strong>
          </div>
        </div>
      </section>

      <section className={styles.trustStrip}>
        {['Apto para comenzar', 'Papel + piel sintética', 'Modelos reales', 'Soporte 6 meses'].map((item) => <span key={item}>✦ {item}</span>)}
      </section>

      <section className={styles.problem} id="aprendizaje">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>BASES SÓLIDAS ANTES DEL PROCEDIMIENTO</p>
            <h2>Microblading no es solo aprender a hacer trazos.</h2>
          </div>
          <p>El resultado depende de diseño, piel, color, patrón, profundidad, higiene y práctica. El curso organiza esas piezas para que puedas avanzar con una base profesional.</p>
        </div>
        <div className={styles.problemGrid}>
          <article><b>01</b><h3>Diseñar antes de ejecutar</h3><p>Una ceja pelo a pelo necesita proporción y estructura antes del primer trazo.</p></article>
          <article><b>02</b><h3>Entender la piel</h3><p>La respuesta del tejido condiciona cómo se implanta, cicatriza y se conserva el resultado.</p></article>
          <article><b>03</b><h3>Practicar con método</h3><p>El control se desarrolla primero en papel y piel sintética antes de llegar al modelo real.</p></article>
        </div>
      </section>

      <section className={styles.method}>
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>MÉTODO VERÓNICA PMU</p>
          <h2>De la teoría a la ejecución, paso a paso.</h2>
          <p>La metodología integra fundamentos, diseño, colorimetría, patrones, entrenamiento práctico y observación de procedimientos reales.</p>
        </div>
        <ol>
          <li><b>01</b><span>Comprendes <strong>la técnica y materiales</strong></span></li>
          <li><b>02</b><span>Diseñas <strong>la estructura de la ceja</strong></span></li>
          <li><b>03</b><span>Estudias <strong>piel y color</strong></span></li>
          <li><b>04</b><span>Construyes <strong>patrones de trazos</strong></span></li>
          <li><b>05</b><span>Practicas <strong>papel y piel sintética</strong></span></li>
          <li><b>06</b><span>Integras todo en <strong>modelos reales</strong></span></li>
        </ol>
      </section>

      <section className={styles.program} id="programa">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>EL PROGRAMA</p>
            <h2>7 módulos y 48 clases para construir la técnica desde cero.</h2>
          </div>
          <p>El recorrido cubre desde fundamentos y materiales hasta procedimientos reales, técnicas complementarias, cuidados y prevención de errores.</p>
        </div>
        <div className={styles.moduleGrid}>
          {learningPath.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.practice}>
        <div>
          <p className={styles.eyebrow}>PRÁCTICA PROGRESIVA</p>
          <h2>La mano se entrena antes de trabajar sobre una persona.</h2>
          <p>El curso incluye ejercicios para desarrollar dirección, continuidad y estructura de los trazos antes de observar y ejecutar procedimientos completos.</p>
        </div>
        <div className={styles.practiceSteps}>
          {['Diseño', 'Papel', 'Patrones básicos', 'Patrones avanzados', 'Piel sintética', 'Modelo real'].map((step, index) => (
            <div key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></div>
          ))}
        </div>
      </section>

      <section className={styles.included}>
        <div className={styles.includedIntro}>
          <p className={`${styles.eyebrow} ${styles.light}`}>TU INSCRIPCIÓN INCLUYE</p>
          <h2>Una formación que puedes repetir y consultar a tu ritmo.</h2>
          <p>Accede desde cualquier dispositivo, descarga el material de apoyo y cuenta con soporte privado durante los primeros 6 meses.</p>
        </div>
        <div className={styles.includedGrid}>
          {included.map((item) => <div key={item}><span>✓</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className={styles.audience}>
        <div className={styles.forYou}>
          <span>✓</span><h2>Esta formación es para ti si…</h2>
          <ul>
            <li>Quieres comenzar en Microblading sin conocimientos previos.</li>
            <li>Trabajas en belleza o estética y quieres incorporar un nuevo servicio.</li>
            <li>Quieres mejorar diseño, patrones y criterio técnico.</li>
            <li>Buscas aprender higiene, cuidados y prevención de malas prácticas.</li>
            <li>Prefieres estudiar a tu ritmo con acceso ilimitado.</li>
          </ul>
        </div>
        <div className={styles.notForYou}>
          <span>—</span><h2>No es para ti si…</h2>
          <ul>
            <li>Buscas hacer procedimientos sin practicar previamente.</li>
            <li>No deseas estudiar diseño, piel o seguridad.</li>
            <li>Solo quieres copiar un patrón sin comprenderlo.</li>
            <li>Buscas resultados rápidos sin desarrollar control manual.</li>
          </ul>
        </div>
      </section>

      <section className={styles.teacher}>
        <div
          className={styles.teacherPhoto}
          role="img"
          aria-label="Verónica Montaño, educadora en micropigmentación"
          style={{ backgroundImage: "linear-gradient(180deg,#0000,#211c1932),url('/courses/microblading.jpg')", backgroundPosition: 'center' }}
        />
        <div>
          <p className={styles.eyebrow}>TU INSTRUCTORA</p>
          <h2>Aprende junto a Verónica Montaño.</h2>
          <p>Soy profesional y educadora en micropigmentación con más de 17 años de experiencia. Mi enfoque combina enseñanza práctica, diseño, observación y fundamentos técnicos para que puedas construir una base sólida desde el inicio.</p>
          <div className={styles.teacherStats}><span><strong>17+</strong> años de experiencia</span><span><strong>PMU</strong> técnica + criterio</span></div>
        </div>
      </section>

      <section className={styles.checkout} id="inscripcion">
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>BENEFICIO VENEZUELA</p>
          <h2>Comienza tu formación en <em>Microblading.</em></h2>
          <p>Accede al programa completo con precio especial para Venezuela, acceso ilimitado y acompañamiento durante tu proceso de aprendizaje.</p>
          <div className={styles.checkoutList}>
            <span>✓ 7 módulos · 48 clases</span><span>✓ Acceso ilimitado</span><span>✓ 6 meses de soporte</span><span>✓ Certificado</span>
          </div>
        </div>
        <aside className={styles.checkoutCard}>
          <small>VALOR REGULAR</small><del>US$120</del>
          <p>PRECIO ESPECIAL VENEZUELA</p>
          <strong>96 <i>USDT</i></strong>
          <span>Pago directo · Atención personal por WhatsApp</span>
          <WhatsAppButton label="Quiero inscribirme por 96 USDT" />
          <small className={styles.safe}>Te confirmamos los datos oficiales de pago directamente por WhatsApp.</small>
        </aside>
      </section>

      <section className={styles.faq}>
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
        <h2>Antes de inscribirte</h2>
        <div>
          <details><summary>¿Necesito experiencia previa?</summary><p>No. El curso está dirigido también a personas que quieren comenzar desde cero.</p></details>
          <details><summary>¿El curso es 100% online?</summary><p>Sí. Puedes acceder desde cualquier dispositivo y organizar tu horario de estudio.</p></details>
          <details><summary>¿Cuánto tiempo tengo acceso?</summary><p>El programa tiene acceso ilimitado para que puedas repetir las clases cuando lo necesites.</p></details>
          <details><summary>¿Tendré acompañamiento?</summary><p>Sí. La inscripción incluye 6 meses de soporte privado por WhatsApp durante tu proceso de aprendizaje.</p></details>
          <details><summary>¿Incluye prácticas y modelos reales?</summary><p>Sí. El programa incorpora práctica en papel y piel sintética, además de procedimientos en modelos reales.</p></details>
          <details><summary>¿Recibo certificado?</summary><p>Sí. Al finalizar puedes obtener tu certificado de finalización y aprobación del programa.</p></details>
          <details><summary>¿Cómo me inscribo desde Venezuela?</summary><p>Pulsa el botón de WhatsApp. Nuestro equipo te confirma el precio especial de 96 USDT y te comparte los datos oficiales de pago.</p></details>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="/" className={styles.brand}><span>APRENDE</span><strong>PMU</strong></a>
        <p>Formación profesional en micropigmentación · Venezuela</p>
        <a href={buyUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a>
      </footer>
    </main>
  );
}
