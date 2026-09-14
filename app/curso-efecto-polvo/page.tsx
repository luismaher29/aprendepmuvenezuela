import type { Metadata } from 'next';
import styles from './page.module.css';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Curso de Cejas Efecto Polvo Online | Aprende PMU Venezuela',
  description:
    'Curso online de cejas efecto polvo con 14 módulos, prácticas progresivas, procedimientos en modelos reales, acceso de por vida y acompañamiento. Precio especial Venezuela: 120 USDT.',
};

const learningPath = [
  ['01', 'Fundamentos de la técnica', 'Comprende qué construye un efecto polvo limpio, equilibrado y profesional antes de comenzar a ejecutar movimientos.'],
  ['02', 'Piel aplicada a micropigmentación', 'Estudia estructura, comportamiento y diferencias de la piel para tomar mejores decisiones durante el procedimiento.'],
  ['03', 'Profundidad y cicatrización', 'Relaciona implantación, respuesta cutánea y proceso de cicatrización para trabajar con mayor criterio.'],
  ['04', 'Diseño y estructura de cejas', 'Analiza forma, proporción y lectura visual antes de comenzar la saturación.'],
  ['05', 'Máquinas y configuración', 'Aprende a interpretar equipos actuales y a configurar la máquina de acuerdo con el objetivo técnico.'],
  ['06', 'Agujas y cartuchos', 'Compara configuraciones y comprende cómo la elección de aguja modifica el comportamiento del punto y la saturación.'],
  ['07', 'Control de la mano', 'Desarrolla posición, coordinación, presión, recorrido y estabilidad antes de trabajar sobre una persona.'],
  ['08', 'Maniobras de sombreado', 'Entrena movimientos, ritmo y construcción progresiva del pigmento para evitar bloques compactos.'],
  ['09', 'Degradados y transiciones', 'Construye niveles de saturación, puntos de luz y transiciones suaves dentro de la ceja.'],
  ['10', 'Prácticas iniciales', 'Trabaja ejercicios progresivos en papel, lápiz y superficies de entrenamiento para desarrollar memoria muscular.'],
  ['11', 'Práctica con máquina', 'Traslada el control a máquina y piel sintética antes de avanzar hacia superficies más complejas.'],
  ['12', 'Construcción completa de cejas', 'Integra diseño, dirección, saturación, inicios, cuerpo y cola dentro de una ejecución completa.'],
  ['13', 'Procedimientos en modelos reales', 'Observa procedimientos completos explicados paso a paso y las decisiones que cambian según cada caso.'],
  ['14', 'Tipos de piel y correcciones', 'Analiza piel normal, grasa y gruesa, además de criterios para abordar procedimientos anteriores.'],
];

const included = [
  '14 módulos de formación',
  '+90 lecciones organizadas paso a paso',
  'Prácticas progresivas antes de modelo real',
  'Procedimientos completos en modelos reales',
  'Acceso de por vida al curso',
  '6 meses de acompañamiento para estudiantes',
  'Actualizaciones incluidas',
  'Certificado de participación',
];

const whatsappMessage =
  'Hola, estoy en Venezuela 🇻🇪 y quiero inscribirme en el Curso de Cejas Efecto Polvo por 120 USDT. Quiero recibir la información y los datos para realizar el pago.';

const buyUrl = whatsappUrl(whatsappMessage, {
  source: 'landing_curso_efecto_polvo',
  medium: 'whatsapp',
  campaign: 'curso_efecto_polvo_venezuela',
});

function WhatsAppButton({ label, className }: { label: string; className?: string }) {
  return (
    <a className={className || styles.primaryButton} href={buyUrl} target="_blank" rel="noreferrer">
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

export default function CursoEfectoPolvoVenezuela() {
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
          <p className={styles.eyebrow}><span>VE</span> FORMACIÓN ONLINE · CEJAS</p>
          <h1>Domina las cejas efecto polvo con <em>técnica, ciencia y criterio profesional.</em></h1>
          <p className={styles.lead}>
            Una formación completa para comprender la piel, desarrollar control con la máquina y construir degradados profesionales antes de avanzar hacia procedimientos en modelos reales.
          </p>
          <div className={styles.heroFacts}>
            <span>14 módulos</span><span>+90 lecciones</span><span>Acceso de por vida</span><span>6 meses de acompañamiento</span>
          </div>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#programa">Ver el programa ↓</a>
            <WhatsAppButton label="Consultar por WhatsApp" className={styles.secondaryButton} />
          </div>
          <p className={styles.heroMeta}>100% online · Estudia a tu ritmo · Disponible desde Venezuela</p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImage} role="img" aria-label="Curso profesional de cejas efecto polvo de Aprende PMU" />
          <div className={styles.priceCard}>
            <small>PRECIO INTERNACIONAL</small>
            <del>US$150</del>
            <span>BENEFICIO VENEZUELA</span>
            <strong>120 <i>USDT</i></strong>
          </div>
        </div>
      </section>

      <section className={styles.trustStrip}>
        {['Formación 100% online', 'Acceso de por vida', 'Práctica progresiva', 'Modelos reales'].map((item) => <span key={item}>✦ {item}</span>)}
      </section>

      <section className={styles.problem} id="aprendizaje">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>COMPRENDER CAMBIA LA PRÁCTICA</p>
            <h2>Aprender una técnica no debería significar trabajar a ciegas.</h2>
          </div>
          <p>El objetivo no es memorizar una receta, sino comprender por qué funciona cada decisión y cómo adaptarla cuando cambia la piel, el equipo o el caso.</p>
        </div>
        <div className={styles.problemGrid}>
          <article><b>01</b><h3>Copiar sin comprender</h3><p>Un movimiento memorizado no basta cuando las condiciones del procedimiento cambian.</p></article>
          <article><b>02</b><h3>Trabajar por intuición</h3><p>La piel, la profundidad y la cicatrización necesitan fundamentos, no únicamente experiencia empírica.</p></article>
          <article><b>03</b><h3>Saltar la práctica</h3><p>La destreza se construye antes del modelo real mediante entrenamiento progresivo y memoria muscular.</p></article>
        </div>
      </section>

      <section className={styles.method}>
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>MÉTODO VERÓNICA PMU</p>
          <h2>Mucho más que aprender a sombrear una ceja.</h2>
          <p>La formación integra conocimiento técnico, piel, selección de herramientas, entrenamiento de la mano y observación de procedimientos reales.</p>
        </div>
        <ol>
          <li><b>01</b><span>Comprendes <strong>la técnica</strong></span></li>
          <li><b>02</b><span>Estudias <strong>la piel</strong></span></li>
          <li><b>03</b><span>Configuras <strong>tus herramientas</strong></span></li>
          <li><b>04</b><span>Desarrollas <strong>memoria muscular</strong></span></li>
          <li><b>05</b><span>Practicas <strong>progresivamente</strong></span></li>
          <li><b>06</b><span>Observas <strong>casos reales</strong></span></li>
        </ol>
      </section>

      <section className={styles.program} id="programa">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>EL PROGRAMA</p>
            <h2>14 módulos para construir una habilidad completa.</h2>
          </div>
          <p>El recorrido avanza desde los fundamentos hasta la ejecución práctica para que cada etapa tenga una base antes de pasar a la siguiente.</p>
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
          <h2>No pasarás directamente de la teoría a una persona.</h2>
          <p>Antes de trabajar sobre un modelo real desarrollarás posición, coordinación, recorrido, presión y control a través de una secuencia de entrenamiento progresiva.</p>
        </div>
        <div className={styles.practiceSteps}>
          {['Papel', 'Lápiz', 'Globo', 'Máquina', 'Piel sintética', 'Maniquí', 'Modelo real'].map((step, index) => (
            <div key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></div>
          ))}
        </div>
      </section>

      <section className={styles.included}>
        <div className={styles.includedIntro}>
          <p className={`${styles.eyebrow} ${styles.light}`}>TU INSCRIPCIÓN INCLUYE</p>
          <h2>Una formación para estudiar, practicar y volver a consultar.</h2>
          <p>Accede a las clases desde móvil, tableta u ordenador y repítelas cada vez que lo necesites.</p>
        </div>
        <div className={styles.includedGrid}>
          {included.map((item) => <div key={item}><span>✓</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className={styles.audience}>
        <div className={styles.forYou}>
          <span>✓</span><h2>Esta formación es para ti si…</h2>
          <ul>
            <li>Deseas comenzar en micropigmentación de cejas.</li>
            <li>Ya realizas procedimientos y quieres comprender mejor la técnica.</li>
            <li>Quieres trabajar con mayor seguridad distintos tipos de piel.</li>
            <li>Buscas desarrollar mayor control con la máquina.</li>
            <li>Quieres actualizar tus conocimientos de agujas y equipos.</li>
          </ul>
        </div>
        <div className={styles.notForYou}>
          <span>—</span><h2>No es para ti si…</h2>
          <ul>
            <li>Buscas resultados profesionales sin practicar.</li>
            <li>Solo quieres copiar una configuración sin comprenderla.</li>
            <li>No estás dispuesta a desarrollar destreza progresivamente.</li>
            <li>Buscas una promesa rápida sin fundamentos.</li>
          </ul>
        </div>
      </section>

      <section className={styles.teacher}>
        <div className={styles.teacherPhoto} role="img" aria-label="Verónica Montaño, educadora en micropigmentación" />
        <div>
          <p className={styles.eyebrow}>TU INSTRUCTORA</p>
          <h2>Aprende junto a Verónica Montaño.</h2>
          <p>Soy profesional y educadora en micropigmentación con más de 17 años de experiencia. Mi metodología combina experiencia práctica, fundamentos de la piel, observación y entrenamiento progresivo para que comprendas el porqué de cada decisión técnica.</p>
          <div className={styles.teacherStats}><span><strong>17+</strong> años de experiencia</span><span><strong>PMU</strong> técnica + criterio</span></div>
        </div>
      </section>

      <section className={styles.checkout} id="inscripcion">
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>BENEFICIO VENEZUELA</p>
          <h2>Comienza tu formación en <em>cejas efecto polvo.</em></h2>
          <p>Recibe la misma formación profesional de Aprende PMU con una opción de inscripción directa para Venezuela.</p>
          <div className={styles.checkoutList}>
            <span>✓ Formación completa</span><span>✓ Acceso de por vida</span><span>✓ 6 meses de acompañamiento</span><span>✓ Certificado y actualizaciones</span>
          </div>
        </div>
        <aside className={styles.checkoutCard}>
          <small>PRECIO INTERNACIONAL</small><del>US$150</del>
          <p>PRECIO ESPECIAL VENEZUELA</p>
          <strong>120 <i>USDT</i></strong>
          <span>Pago directo · Atención personal por WhatsApp</span>
          <WhatsAppButton label="Quiero inscribirme por 120 USDT" />
          <small className={styles.safe}>Te confirmamos los datos oficiales de pago directamente por WhatsApp.</small>
        </aside>
      </section>

      <section className={styles.faq}>
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
        <h2>Antes de inscribirte</h2>
        <div>
          <details><summary>¿El curso es 100% online?</summary><p>Sí. Las clases son grabadas y puedes estudiar desde cualquier lugar y a tu propio ritmo.</p></details>
          <details><summary>¿Cuánto tiempo tengo acceso?</summary><p>El acceso al contenido del curso es de por vida, incluyendo las actualizaciones incorporadas a la formación.</p></details>
          <details><summary>¿Necesito experiencia previa?</summary><p>No necesariamente. La formación está organizada progresivamente desde fundamentos hasta procedimientos completos.</p></details>
          <details><summary>¿Tendré acompañamiento?</summary><p>Sí. La oferta actual incluye 6 meses de acompañamiento para estudiantes para resolver dudas relacionadas con la formación.</p></details>
          <details><summary>¿Cómo me inscribo desde Venezuela?</summary><p>Pulsa el botón de WhatsApp. Nuestro equipo te confirma la inscripción y te comparte los datos oficiales de pago disponibles.</p></details>
          <details><summary>¿El curso incluye certificado?</summary><p>Sí. La formación incluye certificado de participación.</p></details>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="/" className={styles.brand}><span>APRENDE</span><strong>PMU</strong></a>
        <p>Formación profesional en micropigmentación · Venezuela</p>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
