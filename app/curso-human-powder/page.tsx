import type { Metadata } from 'next';
import styles from '../curso-efecto-polvo/page.module.css';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Curso Human Powder Online | Aprende PMU Venezuela',
  description:
    'Curso avanzado Human Powder con 7 módulos, 38 clases, más de 5 horas Full HD, degradados, puntillismo, parámetros, maniobras, 4 modelos de cejas y modelo real. Precio especial Venezuela: 120 USDT.',
};

const learningPath = [
  ['01', 'Introducción a Human Powder', 'Comprende la lógica de esta especialización avanzada y cómo llevar la técnica efecto polvo a un nivel más artístico y controlado.'],
  ['02', 'Escala tonal, degradados y puntillismo', 'Trabaja niveles de saturación, transiciones y lectura tonal para construir cejas con mayor profundidad visual.'],
  ['03', 'Ejercicios prácticos', 'Entrena control, ritmo y precisión antes de integrar efectos completos sobre una ceja.'],
  ['04', 'Parámetros de equipos y agujas', 'Aprende a relacionar configuración, aguja y respuesta visual con el efecto que deseas conseguir.'],
  ['05', 'Velocidad, rendimiento y maniobras', 'Analiza cómo cambia el resultado al modificar velocidad, recorrido y tipo de maniobra.'],
  ['06', 'Sombras, saturaciones y luz', 'Construye volumen mediante contraste, zonas de mayor saturación, espacios de luz y transiciones controladas.'],
  ['07', 'Piel sintética, 4 efectos y modelo real', 'Aplica lo aprendido en distintos modelos de cejas y observa la integración completa de la técnica en un procedimiento real.'],
];

const included = [
  '7 módulos de especialización',
  '38 clases organizadas por progresión',
  'Más de 5 horas de video en Full HD',
  'Escala tonal, degradados y puntillismo',
  'Parámetros de equipos y agujas',
  'Velocidades, maniobras y rendimiento',
  'Sombras, saturaciones y puntos de luz',
  'Prácticas en piel sintética',
  '4 modelos de cejas y sus efectos',
  'Procedimiento en modelo real',
  'Acceso ilimitado al curso',
  '6 meses de soporte privado por WhatsApp',
  'Material descargable y certificado',
];

const whatsappMessage =
  'Hola, estoy en Venezuela 🇻🇪 y quiero inscribirme en el Curso Human Powder por 120 USDT. Quiero recibir la información y los datos para realizar el pago.';

const buyUrl = whatsappUrl(whatsappMessage, {
  source: 'landing_curso_human_powder',
  medium: 'whatsapp',
  campaign: 'curso_human_powder_venezuela',
});

function WhatsAppButton({ label, className }: { label: string; className?: string }) {
  return (
    <a className={className || styles.primaryButton} href={buyUrl} target="_blank" rel="noreferrer" data-event="click_whatsapp_curso_human_powder">
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

export default function CursoHumanPowderVenezuela() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.nav}>
        <a href="/" className={styles.brand} aria-label="Volver a Aprende PMU Venezuela"><span>APRENDE</span><strong>PMU</strong></a>
        <nav><a href="#aprendizaje">Qué aprenderás</a><a href="#programa">Programa</a><a href="#inscripcion">Inscripción</a></nav>
        <WhatsAppButton label="Inscribirme" className={styles.navButton} />
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span>VE</span> ESPECIALIZACIÓN AVANZADA · CEJAS</p>
          <h1>Lleva el efecto polvo a un nivel superior con <em>Human Powder.</em></h1>
          <p className={styles.lead}>Una especialización para profesionales que ya dominan la técnica base y quieren perfeccionar degradados, puntillismo, saturación, luz, maniobras y efectos avanzados.</p>
          <div className={styles.heroFacts}><span>7 módulos</span><span>38 clases</span><span>+5 horas Full HD</span><span>Nivel avanzado</span></div>
          <div className={styles.actions}><a className={styles.primaryButton} href="#programa">Ver el programa ↓</a><WhatsAppButton label="Consultar por WhatsApp" className={styles.secondaryButton} /></div>
          <p className={styles.heroMeta}>100% online · Acceso ilimitado · Requiere dominio previo de efecto polvo</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImage} role="img" aria-label="Curso avanzado Human Powder de Aprende PMU" style={{ backgroundImage: "linear-gradient(180deg,#211c1905,#211c1948),url('/courses/human-powder.webp')", backgroundPosition: 'center' }} />
          <div className={styles.priceCard}><small>VALOR REGULAR</small><del>US$150</del><span>BENEFICIO VENEZUELA</span><strong>120 <i>USDT</i></strong></div>
        </div>
      </section>

      <section className={styles.trustStrip}>{['Nivel avanzado', '4 efectos de cejas', 'Piel sintética + modelo real', 'Soporte 6 meses'].map((item) => <span key={item}>✦ {item}</span>)}</section>

      <section className={styles.problem} id="aprendizaje">
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>DE EJECUTAR A INTERPRETAR</p><h2>El nivel avanzado empieza cuando dejas de repetir una sola ceja.</h2></div>
          <p>Human Powder profundiza en cómo controlar la saturación, la luz, el degradado y la maniobra para construir distintos efectos según el resultado que quieres lograr.</p>
        </div>
        <div className={styles.problemGrid}>
          <article><b>01</b><h3>Leer la saturación</h3><p>Comprender cuánto pigmento necesita cada zona permite construir profundidad sin convertir la ceja en un bloque.</p></article>
          <article><b>02</b><h3>Controlar la transición</h3><p>El degradado no depende de una fórmula única, sino de ritmo, recorrido, velocidad y repetición.</p></article>
          <article><b>03</b><h3>Crear efectos distintos</h3><p>Una misma técnica puede producir resultados diferentes cuando entiendes luz, sombra y distribución del color.</p></article>
        </div>
      </section>

      <section className={styles.method}>
        <div><p className={`${styles.eyebrow} ${styles.light}`}>MÉTODO VERÓNICA PMU</p><h2>Del control técnico a la interpretación artística.</h2><p>La metodología combina fundamentos visuales con parámetros de máquina y práctica progresiva para que puedas tomar decisiones, no solo repetir movimientos.</p></div>
        <ol>
          <li><b>01</b><span>Analizas <strong>escala tonal y degradado</strong></span></li>
          <li><b>02</b><span>Comprendes <strong>puntillismo y saturación</strong></span></li>
          <li><b>03</b><span>Ajustas <strong>equipo, aguja y velocidad</strong></span></li>
          <li><b>04</b><span>Dominas <strong>maniobras y recorridos</strong></span></li>
          <li><b>05</b><span>Construyes <strong>luz, sombra y volumen</strong></span></li>
          <li><b>06</b><span>Aplicas <strong>distintos efectos</strong></span></li>
        </ol>
      </section>

      <section className={styles.program} id="programa">
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>EL PROGRAMA</p><h2>7 módulos y 38 clases para perfeccionar tu efecto polvo.</h2></div>
          <p>El curso profundiza en los elementos que separan una ejecución básica de una técnica avanzada: control tonal, parámetros, maniobras, luz y construcción por efectos.</p>
        </div>
        <div className={styles.moduleGrid}>{learningPath.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className={styles.practice}>
        <div><p className={styles.eyebrow}>4 MODELOS · 4 EFECTOS</p><h2>No todas las cejas deben verse iguales.</h2><p>La formación utiliza cuatro modelos de cejas para estudiar cómo cambia el resultado cuando modificas zonas de saturación, transiciones, luz y definición.</p></div>
        <div className={styles.practiceSteps}>{['Escala tonal', 'Degradado', 'Puntillismo', 'Luz y sombra', '4 efectos', 'Modelo real'].map((step, index) => <div key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></div>)}</div>
      </section>

      <section className={styles.included}>
        <div className={styles.includedIntro}><p className={`${styles.eyebrow} ${styles.light}`}>TU INSCRIPCIÓN INCLUYE</p><h2>Una especialización completa para seguir elevando tu técnica.</h2><p>Accede al contenido cuando quieras, repite las clases y utiliza el soporte durante 6 meses para resolver dudas dentro de tu proceso.</p></div>
        <div className={styles.includedGrid}>{included.map((item) => <div key={item}><span>✓</span><p>{item}</p></div>)}</div>
      </section>

      <section className={styles.audience}>
        <div className={styles.forYou}><span>✓</span><h2>Esta formación es para ti si…</h2><ul><li>Ya realizaste un curso de cejas efecto polvo.</li><li>Manejas la técnica y quieres alcanzar un nivel más avanzado.</li><li>Quieres mejorar degradados, saturación y puntos de luz.</li><li>Buscas dominar diferentes maniobras y efectos.</li><li>Quieres comprender mejor cómo responden equipo, aguja y velocidad.</li></ul></div>
        <div className={styles.notForYou}><span>—</span><h2>No es para ti si…</h2><ul><li>Nunca has realizado formación básica en efecto polvo.</li><li>Aún no manejas la técnica base.</li><li>Buscas comenzar desde cero en micropigmentación de cejas.</li><li>No deseas practicar ni revisar parámetros técnicos.</li></ul></div>
      </section>

      <section className={styles.teacher}>
        <div className={styles.teacherPhoto} role="img" aria-label="Verónica Montaño, educadora en micropigmentación" style={{ backgroundImage: "linear-gradient(180deg,#0000,#211c1932),url('/courses/human-powder.webp')", backgroundPosition: 'center' }} />
        <div><p className={styles.eyebrow}>TU INSTRUCTORA</p><h2>Aprende junto a Verónica Montaño.</h2><p>Soy profesional y educadora en micropigmentación con más de 17 años de experiencia. En Human Powder el objetivo es ayudarte a pasar de repetir una técnica a comprender cómo modificarla con intención artística y criterio profesional.</p><div className={styles.teacherStats}><span><strong>17+</strong> años de experiencia</span><span><strong>PMU</strong> arte + técnica</span></div></div>
      </section>

      <section className={styles.checkout} id="inscripcion">
        <div><p className={`${styles.eyebrow} ${styles.light}`}>BENEFICIO VENEZUELA</p><h2>Eleva tu técnica con <em>Human Powder.</em></h2><p>Accede a la especialización avanzada con precio especial para Venezuela y acompañamiento durante tu proceso.</p><div className={styles.checkoutList}><span>✓ 7 módulos · 38 clases</span><span>✓ Acceso ilimitado</span><span>✓ 6 meses de soporte</span><span>✓ Certificado</span></div></div>
        <aside className={styles.checkoutCard}><small>VALOR REGULAR</small><del>US$150</del><p>PRECIO ESPECIAL VENEZUELA</p><strong>120 <i>USDT</i></strong><span>Pago directo · Atención personal por WhatsApp</span><WhatsAppButton label="Quiero inscribirme por 120 USDT" /><small className={styles.safe}>Te confirmamos los datos oficiales de pago directamente por WhatsApp.</small></aside>
      </section>

      <section className={styles.faq}>
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p><h2>Antes de inscribirte</h2>
        <div>
          <details><summary>¿Es un curso para principiantes?</summary><p>No. Human Powder es una formación avanzada para profesionales que ya realizaron formación básica o intermedia de cejas efecto polvo y manejan la técnica.</p></details>
          <details><summary>¿Cuánto contenido incluye?</summary><p>Incluye 7 módulos, 38 clases y más de 5 horas de video Full HD.</p></details>
          <details><summary>¿Cuánto tiempo tengo acceso?</summary><p>El acceso es ilimitado para que puedas repetir las clases cuando lo necesites.</p></details>
          <details><summary>¿Incluye prácticas?</summary><p>Sí. Incluye ejercicios y prácticas en piel sintética, además de cuatro modelos de cejas con distintos efectos.</p></details>
          <details><summary>¿Incluye modelo real?</summary><p>Sí. El programa incluye un procedimiento en modelo real para observar la integración completa de la técnica.</p></details>
          <details><summary>¿Tendré acompañamiento?</summary><p>Sí. La inscripción incluye 6 meses de soporte privado por WhatsApp.</p></details>
          <details><summary>¿Cómo me inscribo desde Venezuela?</summary><p>Pulsa el botón de WhatsApp. Nuestro equipo te confirma el precio especial de 120 USDT y te comparte los datos oficiales de pago.</p></details>
        </div>
      </section>

      <footer className={styles.footer}><a href="/" className={styles.brand}><span>APRENDE</span><strong>PMU</strong></a><p>Formación profesional en micropigmentación · Venezuela</p><a href={buyUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a></footer>
    </main>
  );
}
