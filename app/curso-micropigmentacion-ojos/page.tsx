import type { Metadata } from 'next';
import styles from '../curso-efecto-polvo/page.module.css';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Curso de Micropigmentación de Ojos Online | Aprende PMU Venezuela',
  description:
    'Curso online de micropigmentación de ojos con 6 módulos, 32 clases, más de 5 horas Full HD, Infraliner, Eyeliner, Smoke Eyes, Fantasy Colors, prácticas y modelo real. Precio especial Venezuela: 105 USDT.',
};

const learningPath = [
  ['01', 'Introducción y anatomía', 'Comprende la técnica, la anatomía del área ocular y las bases necesarias para trabajar con mayor criterio y seguridad.'],
  ['02', 'Diseño, duración y cuidados', 'Aprende a planificar el diseño, orientar expectativas, explicar cuidados y reconocer contraindicaciones antes del procedimiento.'],
  ['03', 'Agujas, equipos y grosores', 'Analiza configuraciones, niveles de grosor y herramientas para adaptar el resultado a cada objetivo estético.'],
  ['04', 'Infraliner y Eyeliner', 'Trabaja líneas sutiles y definidas entendiendo ubicación, estructura, continuidad y acabado.'],
  ['05', 'Smoke Eyes y Fantasy Colors', 'Explora técnicas de sombreado y color para ampliar tus posibilidades dentro de la micropigmentación de ojos.'],
  ['06', 'Maniobras, práctica y modelo real', 'Entrena angulaciones y movimientos en papel y piel sintética antes de observar el procedimiento completo en modelo real.'],
];

const included = [
  '6 módulos de formación',
  '32 clases organizadas paso a paso',
  'Más de 5 horas de video en Full HD',
  'Infraliner, Eyeliner, Smoke Eyes y Fantasy Colors',
  'Prácticas en papel',
  'Prácticas en piel sintética',
  'Procedimiento completo en modelo real',
  'Acceso ilimitado al curso',
  '6 meses de soporte privado por WhatsApp',
  'Guías, recursos y plantillas descargables',
  'Certificado de finalización y aprobación',
];

const whatsappMessage =
  'Hola, estoy en Venezuela 🇻🇪 y quiero inscribirme en el Curso de Micropigmentación de Ojos por 105 USDT. Quiero recibir la información y los datos para realizar el pago.';

const buyUrl = whatsappUrl(whatsappMessage, {
  source: 'landing_curso_ojos',
  medium: 'whatsapp',
  campaign: 'curso_ojos_venezuela',
});

function WhatsAppButton({ label, className }: { label: string; className?: string }) {
  return (
    <a className={className || styles.primaryButton} href={buyUrl} target="_blank" rel="noreferrer" data-event="click_whatsapp_curso_ojos">
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

export default function CursoMicropigmentacionOjosVenezuela() {
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
          <p className={styles.eyebrow}><span>VE</span> FORMACIÓN ONLINE · OJOS</p>
          <h1>Domina la micropigmentación de ojos con <em>precisión, diseño y control técnico.</em></h1>
          <p className={styles.lead}>
            Una formación completa para aprender desde anatomía y diseño hasta Infraliner, Eyeliner, Smoke Eyes, Fantasy Colors, maniobras y procedimientos reales.
          </p>
          <div className={styles.heroFacts}>
            <span>6 módulos</span><span>32 clases</span><span>+5 horas Full HD</span><span>6 meses de soporte</span>
          </div>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#programa">Ver el programa ↓</a>
            <WhatsAppButton label="Consultar por WhatsApp" className={styles.secondaryButton} />
          </div>
          <p className={styles.heroMeta}>100% online · Acceso ilimitado · Disponible desde Venezuela</p>
        </div>

        <div className={styles.heroVisual}>
          <div
            className={styles.heroImage}
            role="img"
            aria-label="Curso profesional de micropigmentación de ojos de Aprende PMU"
            style={{ backgroundImage: "linear-gradient(180deg,#211c1905,#211c1948),url('/courses/micropigmentacion-ojos.jpg')", backgroundPosition: 'center' }}
          />
          <div className={styles.priceCard}>
            <small>VALOR REGULAR</small>
            <del>US$130</del>
            <span>BENEFICIO VENEZUELA</span>
            <strong>105 <i>USDT</i></strong>
          </div>
        </div>
      </section>

      <section className={styles.trustStrip}>
        {['Infraliner + Eyeliner', 'Smoke Eyes', 'Práctica progresiva', 'Modelo real + soporte'].map((item) => <span key={item}>✦ {item}</span>)}
      </section>

      <section className={styles.problem} id="aprendizaje">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>PRECISIÓN EN UNA ZONA DE ALTA EXIGENCIA</p>
            <h2>La micropigmentación de ojos requiere algo más que saber hacer una línea.</h2>
          </div>
          <p>El resultado depende de diseño, anatomía, equipo, grosor, angulación y maniobra. La formación organiza esas variables para que puedas trabajar con mayor control.</p>
        </div>
        <div className={styles.problemGrid}>
          <article><b>01</b><h3>Diseñar antes de ejecutar</h3><p>La línea debe responder al ojo, al objetivo y al resultado estético que buscas construir.</p></article>
          <article><b>02</b><h3>Controlar grosor y dirección</h3><p>Pequeñas variaciones cambian por completo la lectura del resultado final.</p></article>
          <article><b>03</b><h3>Dominar la maniobra</h3><p>La precisión se entrena con práctica progresiva antes de trabajar sobre modelo real.</p></article>
        </div>
      </section>

      <section className={styles.method}>
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>MÉTODO VERÓNICA PMU</p>
          <h2>De la anatomía y el diseño al procedimiento completo.</h2>
          <p>La metodología integra fundamentos, selección de herramientas, angulaciones, maniobras, práctica y observación de casos reales.</p>
        </div>
        <ol>
          <li><b>01</b><span>Comprendes <strong>anatomía y técnica</strong></span></li>
          <li><b>02</b><span>Diseñas <strong>la estructura visual</strong></span></li>
          <li><b>03</b><span>Seleccionas <strong>equipos y agujas</strong></span></li>
          <li><b>04</b><span>Controlas <strong>grosor y angulación</strong></span></li>
          <li><b>05</b><span>Practicas <strong>maniobras progresivamente</strong></span></li>
          <li><b>06</b><span>Integras todo en <strong>modelo real</strong></span></li>
        </ol>
      </section>

      <section className={styles.program} id="programa">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>EL PROGRAMA</p>
            <h2>6 módulos y 32 clases para construir la técnica con seguridad.</h2>
          </div>
          <p>El recorrido cubre desde los fundamentos hasta distintas técnicas de línea y sombreado, práctica progresiva y modelo real.</p>
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
          <p className={styles.eyebrow}>TÉCNICAS QUE APRENDERÁS</p>
          <h2>Diferentes efectos para diferentes objetivos estéticos.</h2>
          <p>Aprenderás a diferenciar estructuras, grosores y acabados para que no todos los procedimientos terminen viéndose iguales.</p>
        </div>
        <div className={styles.practiceSteps}>
          {['Infraliner', 'Eyeliner', 'Smoke Eyes', 'Fantasy Colors', 'Práctica sintética', 'Modelo real'].map((step, index) => (
            <div key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></div>
          ))}
        </div>
      </section>

      <section className={styles.included}>
        <div className={styles.includedIntro}>
          <p className={`${styles.eyebrow} ${styles.light}`}>TU INSCRIPCIÓN INCLUYE</p>
          <h2>Contenido completo, material descargable y acompañamiento.</h2>
          <p>Accede desde cualquier dispositivo y repite las clases cuando lo necesites durante tu proceso de aprendizaje.</p>
        </div>
        <div className={styles.includedGrid}>
          {included.map((item) => <div key={item}><span>✓</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className={styles.audience}>
        <div className={styles.forYou}>
          <span>✓</span><h2>Esta formación es para ti si…</h2>
          <ul>
            <li>Quieres comenzar en micropigmentación de ojos sin conocimientos previos.</li>
            <li>Ya trabajas en belleza o PMU y quieres incorporar este servicio.</li>
            <li>Quieres aprender líneas finas, definidas y efectos sombreados.</li>
            <li>Buscas comprender equipos, agujas, grosores y maniobras.</li>
            <li>Quieres estudiar a tu ritmo con soporte durante 6 meses.</li>
          </ul>
        </div>
        <div className={styles.notForYou}>
          <span>—</span><h2>No es para ti si…</h2>
          <ul>
            <li>Buscas trabajar sobre modelo real sin practicar previamente.</li>
            <li>No deseas estudiar anatomía, diseño o seguridad.</li>
            <li>Solo quieres memorizar una línea sin comprender la técnica.</li>
            <li>Buscas resultados profesionales sin desarrollar precisión manual.</li>
          </ul>
        </div>
      </section>

      <section className={styles.teacher}>
        <div
          className={styles.teacherPhoto}
          role="img"
          aria-label="Verónica Montaño, educadora en micropigmentación"
          style={{ backgroundImage: "linear-gradient(180deg,#0000,#211c1932),url('/courses/micropigmentacion-ojos.jpg')", backgroundPosition: 'center' }}
        />
        <div>
          <p className={styles.eyebrow}>TU INSTRUCTORA</p>
          <h2>Aprende junto a Verónica Montaño.</h2>
          <p>Soy profesional y educadora en micropigmentación con más de 17 años de experiencia. Mi metodología combina fundamentos, práctica y criterio técnico para ayudarte a desarrollar precisión en una de las zonas más exigentes del PMU.</p>
          <div className={styles.teacherStats}><span><strong>17+</strong> años de experiencia</span><span><strong>PMU</strong> precisión + criterio</span></div>
        </div>
      </section>

      <section className={styles.checkout} id="inscripcion">
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>BENEFICIO VENEZUELA</p>
          <h2>Comienza tu formación en <em>micropigmentación de ojos.</em></h2>
          <p>Accede al programa completo con precio especial para Venezuela, acceso ilimitado y acompañamiento durante tu proceso.</p>
          <div className={styles.checkoutList}>
            <span>✓ 6 módulos · 32 clases</span><span>✓ Acceso ilimitado</span><span>✓ 6 meses de soporte</span><span>✓ Certificado</span>
          </div>
        </div>
        <aside className={styles.checkoutCard}>
          <small>VALOR REGULAR</small><del>US$130</del>
          <p>PRECIO ESPECIAL VENEZUELA</p>
          <strong>105 <i>USDT</i></strong>
          <span>Pago directo · Atención personal por WhatsApp</span>
          <WhatsAppButton label="Quiero inscribirme por 105 USDT" />
          <small className={styles.safe}>Te confirmamos los datos oficiales de pago directamente por WhatsApp.</small>
        </aside>
      </section>

      <section className={styles.faq}>
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
        <h2>Antes de inscribirte</h2>
        <div>
          <details><summary>¿Necesito experiencia previa?</summary><p>No. La formación también está dirigida a personas que desean comenzar en esta técnica.</p></details>
          <details><summary>¿El curso es 100% online?</summary><p>Sí. Las clases son grabadas y puedes acceder desde cualquier dispositivo.</p></details>
          <details><summary>¿Cuánto tiempo tengo acceso?</summary><p>El acceso al curso es ilimitado para que puedas repetir las clases cuando lo necesites.</p></details>
          <details><summary>¿Tendré acompañamiento?</summary><p>Sí. La inscripción incluye 6 meses de soporte privado por WhatsApp durante tu proceso de aprendizaje.</p></details>
          <details><summary>¿Qué técnicas incluye?</summary><p>Incluye Infraliner, Eyeliner, Smoke Eyes y Fantasy Colors, además de grosores, angulaciones y maniobras.</p></details>
          <details><summary>¿Incluye práctica y modelo real?</summary><p>Sí. El programa incorpora práctica en papel y piel sintética, además de procedimiento en modelo real.</p></details>
          <details><summary>¿Cómo me inscribo desde Venezuela?</summary><p>Pulsa el botón de WhatsApp. Nuestro equipo te confirma el precio especial de 105 USDT y te comparte los datos oficiales de pago.</p></details>
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
