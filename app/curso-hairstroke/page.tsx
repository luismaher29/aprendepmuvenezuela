import type { Metadata } from 'next';
import styles from '../curso-efecto-polvo/page.module.css';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Curso Hairstroke Online | Aprende PMU Venezuela',
  description:
    'Curso online de Hairstroke para aprender cejas pelo a pelo con máquina, diseño hiperrealista, análisis de piel, agujas, cicatrización, práctica en piel sintética y modelo real. Precio especial Venezuela: 200 USDT.',
};

const learningPath = [
  ['01', 'Introducción a la técnica', 'Comprende qué distingue al Hairstroke de otras técnicas de cejas y cómo se construye un resultado pelo a pelo con máquina.'],
  ['02', 'Análisis de cejas naturales', 'Aprende a observar nacimiento, dirección, densidad y comportamiento del vello antes de diseñar una estructura artificial.'],
  ['03', 'Tipos de piel', 'Relaciona las características de la piel con la implantación, la definición del trazo y la elección de estrategia.'],
  ['04', 'Cicatrización', 'Comprende las fases de cicatrización y qué cambios esperar durante la evolución del procedimiento.'],
  ['05', 'Máquinas y agujas', 'Selecciona configuraciones adecuadas para trabajar trazos finos, controlados y coherentes con el objetivo de la técnica.'],
  ['06', 'Color y tonos seguros', 'Aprende a elegir tonos que acompañen el pelo natural y el comportamiento esperado del pigmento.'],
  ['07', 'Diseño hiperrealista', 'Construye patrones con espina central y organiza los trazos para lograr estructura, ritmo y naturalidad.'],
  ['08', 'Cejas descendentes y asiáticas', 'Analiza casos con características particulares y adapta el diseño en lugar de aplicar un patrón rígido.'],
  ['09', 'Práctica progresiva', 'Entrena primero en papel y piel sintética para desarrollar memoria muscular, dirección y control antes de trabajar sobre modelo real.'],
  ['10', 'Procedimiento en modelo real', 'Observa la integración del análisis, diseño, color, herramientas y ejecución dentro de un caso completo.'],
];

const included = [
  'Clases grabadas para estudiar a tu ritmo',
  'Teoría aplicada al Hairstroke',
  'Prácticas en papel',
  'Prácticas en piel sintética',
  'Demostración en modelo real',
  'Acceso de por vida al curso',
  '6 meses de asesoría en grupo exclusivo',
  'Corrección de prácticas y resolución de dudas',
  'Material de apoyo durante la formación',
  'Certificado al finalizar el programa',
];

const whatsappMessage =
  'Hola, estoy en Venezuela 🇻🇪 y quiero inscribirme en el Curso de Hairstroke por 200 USDT. Quiero recibir la información y los datos para realizar el pago.';

const buyUrl = whatsappUrl(whatsappMessage, {
  source: 'landing_curso_hairstroke',
  medium: 'whatsapp',
  campaign: 'curso_hairstroke_venezuela',
});

function WhatsAppButton({ label, className }: { label: string; className?: string }) {
  return (
    <a className={className || styles.primaryButton} href={buyUrl} target="_blank" rel="noreferrer" data-event="click_whatsapp_curso_hairstroke">
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

export default function CursoHairstrokeVenezuela() {
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
          <p className={styles.eyebrow}><span>VE</span> FORMACIÓN ONLINE · HAIRSTROKE</p>
          <h1>Aprende a construir cejas pelo a pelo con máquina y <em>criterio hiperrealista.</em></h1>
          <p className={styles.lead}>
            Una formación para comprender piel, dirección del vello, diseño, herramientas y ejecución de trazos antes de integrar todo en procedimientos reales.
          </p>
          <div className={styles.heroFacts}>
            <span>Técnica avanzada</span><span>Papel + piel sintética</span><span>Modelo real</span><span>Acceso de por vida</span>
          </div>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#programa">Ver el programa ↓</a>
            <WhatsAppButton label="Consultar por WhatsApp" className={styles.secondaryButton} />
          </div>
          <p className={styles.heroMeta}>100% online · Estudia a tu ritmo · 6 meses de acompañamiento</p>
        </div>

        <div className={styles.heroVisual}>
          <div
            className={styles.heroImage}
            role="img"
            aria-label="Curso profesional de Hairstroke de Aprende PMU"
            style={{ backgroundImage: "linear-gradient(180deg,#211c1905,#211c1948),url('/courses/hairstroke.jpg')", backgroundPosition: 'center 40%' }}
          />
          <div className={styles.priceCard}>
            <small>PRECIO INTERNACIONAL</small>
            <del>US$250</del>
            <span>BENEFICIO VENEZUELA</span>
            <strong>200 <i>USDT</i></strong>
          </div>
        </div>
      </section>

      <section className={styles.trustStrip}>
        {['Cejas pelo a pelo con máquina', 'Diseño hiperrealista', 'Práctica progresiva', 'Acompañamiento 6 meses'].map((item) => <span key={item}>✦ {item}</span>)}
      </section>

      <section className={styles.problem} id="aprendizaje">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>NATURALIDAD CON ESTRUCTURA</p>
            <h2>Un buen Hairstroke no consiste en dibujar líneas al azar.</h2>
          </div>
          <p>La naturalidad aparece cuando comprendes cómo nace el pelo, cómo se organiza, qué permite cada piel y cómo construir un patrón que se adapte a la persona.</p>
        </div>
        <div className={styles.problemGrid}>
          <article><b>01</b><h3>Leer antes de dibujar</h3><p>La ceja natural es la referencia para decidir dirección, densidad y estructura del patrón.</p></article>
          <article><b>02</b><h3>Adaptar a la piel</h3><p>No todas las pieles responden igual. La técnica debe cambiar cuando cambia el tejido.</p></article>
          <article><b>03</b><h3>Construir, no copiar</h3><p>Un patrón hiperrealista necesita lógica visual, espina, transiciones y coherencia entre trazos.</p></article>
        </div>
      </section>

      <section className={styles.method}>
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>MÉTODO VERÓNICA PMU</p>
          <h2>Del análisis del pelo natural al procedimiento completo.</h2>
          <p>La metodología avanza desde la observación y el diseño hasta el entrenamiento manual y la aplicación sobre modelo real.</p>
        </div>
        <ol>
          <li><b>01</b><span>Observas <strong>la ceja natural</strong></span></li>
          <li><b>02</b><span>Comprendes <strong>piel y cicatrización</strong></span></li>
          <li><b>03</b><span>Seleccionas <strong>máquina, aguja y color</strong></span></li>
          <li><b>04</b><span>Diseñas <strong>patrones hiperrealistas</strong></span></li>
          <li><b>05</b><span>Practicas <strong>papel y piel sintética</strong></span></li>
          <li><b>06</b><span>Integras todo en <strong>modelo real</strong></span></li>
        </ol>
      </section>

      <section className={styles.program} id="programa">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>RUTA DE APRENDIZAJE</p>
            <h2>Una progresión pensada para desarrollar trazos con intención.</h2>
          </div>
          <p>El programa conecta fundamentos, observación, herramientas, diseño y práctica para que no dependas de copiar patrones sin comprenderlos.</p>
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
          <h2>La precisión se construye antes de llegar al modelo real.</h2>
          <p>Entrenarás dirección, ritmo, longitud, unión y continuidad de los trazos mediante una secuencia que te permita desarrollar memoria muscular.</p>
        </div>
        <div className={styles.practiceSteps}>
          {['Observación', 'Papel', 'Construcción de patrón', 'Piel sintética', 'Corrección', 'Modelo real'].map((step, index) => (
            <div key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></div>
          ))}
        </div>
      </section>

      <section className={styles.included}>
        <div className={styles.includedIntro}>
          <p className={`${styles.eyebrow} ${styles.light}`}>TU INSCRIPCIÓN INCLUYE</p>
          <h2>Estudia, practica y recibe correcciones durante tu proceso.</h2>
          <p>Las clases quedan disponibles para ti de forma permanente y durante los primeros 6 meses podrás enviar prácticas y resolver dudas en el grupo exclusivo de alumnos.</p>
        </div>
        <div className={styles.includedGrid}>
          {included.map((item) => <div key={item}><span>✓</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className={styles.audience}>
        <div className={styles.forYou}>
          <span>✓</span><h2>Esta formación es para ti si…</h2>
          <ul>
            <li>Ya conoces micropigmentación y quieres incorporar una técnica pelo a pelo con máquina.</li>
            <li>Quieres lograr resultados más naturales y personalizados.</li>
            <li>Buscas comprender cómo adaptar patrones a diferentes cejas y tipos de piel.</li>
            <li>Quieres desarrollar mejor control y dirección de los trazos.</li>
            <li>Deseas aprender con clases grabadas y avanzar a tu propio ritmo.</li>
          </ul>
        </div>
        <div className={styles.notForYou}>
          <span>—</span><h2>No es para ti si…</h2>
          <ul>
            <li>Buscas copiar un patrón sin estudiar la estructura de la ceja.</li>
            <li>No deseas practicar antes de trabajar sobre una persona.</li>
            <li>Buscas una técnica rápida sin desarrollar control manual.</li>
            <li>No quieres adaptar el diseño a cada caso individual.</li>
          </ul>
        </div>
      </section>

      <section className={styles.teacher}>
        <div
          className={styles.teacherPhoto}
          role="img"
          aria-label="Verónica Montaño, educadora en micropigmentación"
          style={{ backgroundImage: "linear-gradient(180deg,#0000,#211c1932),url('/courses/hairstroke.jpg')", backgroundPosition: 'center 40%' }}
        />
        <div>
          <p className={styles.eyebrow}>TU INSTRUCTORA</p>
          <h2>Aprende junto a Verónica Montaño.</h2>
          <p>Soy profesional y educadora en micropigmentación con más de 17 años de experiencia. Mi metodología une observación, dibujo, práctica y criterio técnico para que los trazos no sean una fórmula memorizada, sino una herramienta que puedas adaptar.</p>
          <div className={styles.teacherStats}><span><strong>17+</strong> años de experiencia</span><span><strong>PMU</strong> arte + técnica</span></div>
        </div>
      </section>

      <section className={styles.checkout} id="inscripcion">
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>BENEFICIO VENEZUELA</p>
          <h2>Especialízate en <em>Hairstroke.</em></h2>
          <p>Accede a la formación completa con precio especial para Venezuela y acompañamiento durante tu etapa de práctica.</p>
          <div className={styles.checkoutList}>
            <span>✓ Formación online</span><span>✓ Acceso de por vida</span><span>✓ 6 meses de asesoría</span><span>✓ Modelo real</span>
          </div>
        </div>
        <aside className={styles.checkoutCard}>
          <small>PRECIO INTERNACIONAL</small><del>US$250</del>
          <p>PRECIO ESPECIAL VENEZUELA</p>
          <strong>200 <i>USDT</i></strong>
          <span>Pago directo · Atención personal por WhatsApp</span>
          <WhatsAppButton label="Quiero inscribirme por 200 USDT" />
          <small className={styles.safe}>Te confirmamos los datos oficiales de pago directamente por WhatsApp.</small>
        </aside>
      </section>

      <section className={styles.faq}>
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
        <h2>Antes de inscribirte</h2>
        <div>
          <details><summary>¿El curso es 100% online?</summary><p>Sí. Las clases son grabadas y puedes estudiar desde cualquier lugar y a tu propio ritmo.</p></details>
          <details><summary>¿Cuánto tiempo tengo acceso?</summary><p>El acceso al curso es de por vida para que puedas repetir las clases y volver a estudiar el contenido cuando lo necesites.</p></details>
          <details><summary>¿Cómo funciona el acompañamiento?</summary><p>Durante 6 meses tendrás acceso al grupo exclusivo de alumnos para enviar prácticas, recibir correcciones y aclarar dudas relacionadas con las clases.</p></details>
          <details><summary>¿Hay práctica en piel sintética?</summary><p>Sí. La metodología incluye práctica previa en papel y piel sintética antes de observar la integración completa en modelo real.</p></details>
          <details><summary>¿Incluye procedimiento en modelo real?</summary><p>Sí. El programa incluye demostración del procedimiento para observar cómo se integran diseño, selección de herramientas y ejecución.</p></details>
          <details><summary>¿Cómo me inscribo desde Venezuela?</summary><p>Pulsa el botón de WhatsApp. Nuestro equipo te confirma el precio especial de 200 USDT y te comparte los datos oficiales de pago disponibles.</p></details>
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
