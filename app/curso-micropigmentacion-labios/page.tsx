import type { Metadata } from 'next';
import styles from '../curso-efecto-polvo/page.module.css';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Curso de Micropigmentación de Labios Online | Aprende PMU Venezuela',
  description:
    'Curso online de micropigmentación de labios con 17 módulos, más de 90 clases, práctica progresiva, modelos reales, soporte por 6 meses y acceso de por vida. Precio especial Venezuela: 200 USDT.',
};

const learningPath = [
  ['01', 'Fundamentos de micropigmentación de labios', 'Comprende la lógica del procedimiento, los objetivos estéticos y las bases necesarias antes de comenzar a trabajar color y técnica.'],
  ['02', 'Anatomía y fisiología de los labios', 'Estudia la estructura labial y su comportamiento para tomar decisiones más seguras y coherentes durante el procedimiento.'],
  ['03', 'Cuidados pre y post procedimiento', 'Aprende a preparar correctamente el servicio y a orientar los cuidados que acompañan el proceso de recuperación.'],
  ['04', 'Higienización y anestesia', 'Organiza el protocolo de preparación, higiene y colocación de anestesia dentro de una secuencia profesional de trabajo.'],
  ['05', 'Diseño y toma de medidas', 'Trabaja proporción, simetría y toma de medidas con hilo para construir una forma adaptada a cada labio.'],
  ['06', 'Equipos y configuración', 'Comprende cómo la máquina, el recorrido y la velocidad influyen en el comportamiento de la implantación.'],
  ['07', 'Agujas y velocidades', 'Analiza tipos de agujas, configuraciones y velocidades para seleccionar herramientas según el objetivo técnico.'],
  ['08', 'Visión artística del micropigmentador', 'Desarrolla lectura de forma, equilibrio, color y acabado para que la técnica responda a una intención estética.'],
  ['09', 'Tipos de línea', 'Aprende a diferenciar y construir líneas útiles para contornos, definición y transiciones dentro del diseño labial.'],
  ['10', 'Técnica Pixel', 'Entrena el depósito controlado mediante puntos para construir saturación de manera progresiva y uniforme.'],
  ['11', 'Técnica Acuarela', 'Trabaja acabados suaves y translúcidos mediante una construcción de color ligera y progresiva.'],
  ['12', 'Contorno y definición', 'Aprende a definir el borde sin crear resultados rígidos y a integrarlo visualmente con el resto del labio.'],
  ['13', 'Vaivén y Full Lips', 'Integra maniobras de relleno y saturación para construir resultados de mayor cobertura cuando el caso lo requiere.'],
  ['14', 'Sugar Lips y efectos', 'Explora recursos de textura y acabado para ampliar las posibilidades visuales dentro de la técnica.'],
  ['15', 'Prácticas en papel y piel sintética', 'Desarrolla coordinación, recorrido y control antes de trasladar la técnica a procedimientos reales.'],
  ['16', 'Neutralización de labios oscuros', 'Comprende cuándo neutralizar, cómo plantear la estrategia de color y por qué el proceso puede requerir varias sesiones.'],
  ['17', 'Procedimientos en modelo real', 'Observa la integración del diseño, color, maniobras y toma de decisiones dentro de procedimientos completos.'],
];

const included = [
  '17 módulos de formación',
  '+90 clases organizadas paso a paso',
  'Más de 5 horas de video en Full HD',
  'Prácticas en papel y piel sintética',
  'Procedimientos completos en modelo real',
  'Acceso de por vida al curso',
  '6 meses de soporte privado por WhatsApp',
  'Material descargable, recursos y plantillas',
  'Certificado al finalizar el programa',
  'Curso Labios Artísticos incluido como regalo',
];

const whatsappMessage =
  'Hola, estoy en Venezuela 🇻🇪 y quiero inscribirme en el Curso de Micropigmentación de Labios por 200 USDT. Quiero recibir la información y los datos para realizar el pago.';

const buyUrl = whatsappUrl(whatsappMessage, {
  source: 'landing_curso_labios',
  medium: 'whatsapp',
  campaign: 'curso_labios_venezuela',
});

function WhatsAppButton({ label, className }: { label: string; className?: string }) {
  return (
    <a className={className || styles.primaryButton} href={buyUrl} target="_blank" rel="noreferrer" data-event="click_whatsapp_curso_labios">
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

export default function CursoMicropigmentacionLabiosVenezuela() {
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
          <p className={styles.eyebrow}><span>VE</span> FORMACIÓN ONLINE · LABIOS</p>
          <h1>Domina la micropigmentación de labios con <em>técnica, color y criterio profesional.</em></h1>
          <p className={styles.lead}>
            Una formación completa para aprender desde anatomía, diseño y herramientas hasta técnicas de implantación, neutralización y procedimientos en modelos reales.
          </p>
          <div className={styles.heroFacts}>
            <span>17 módulos</span><span>+90 clases</span><span>Acceso de por vida</span><span>6 meses de soporte</span>
          </div>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#programa">Ver el programa ↓</a>
            <WhatsAppButton label="Consultar por WhatsApp" className={styles.secondaryButton} />
          </div>
          <p className={styles.heroMeta}>100% online · Estudia a tu ritmo · Disponible desde Venezuela</p>
        </div>

        <div className={styles.heroVisual}>
          <div
            className={styles.heroImage}
            role="img"
            aria-label="Curso profesional de micropigmentación de labios de Aprende PMU"
            style={{ backgroundImage: "linear-gradient(180deg,#211c1905,#211c1948),url('/courses/micropigmentacion-labios.jpg')", backgroundPosition: 'center' }}
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
        {['Formación 100% online', 'Acceso de por vida', '17 módulos · +90 clases', 'Modelo real + soporte'].map((item) => <span key={item}>✦ {item}</span>)}
      </section>

      <section className={styles.problem} id="aprendizaje">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>MÁS QUE RELLENAR UN LABIO</p>
            <h2>Color, piel, diseño y técnica tienen que trabajar juntos.</h2>
          </div>
          <p>La micropigmentación de labios exige comprender qué estás haciendo antes de saturar. El objetivo es que puedas leer el caso y elegir una estrategia, no repetir una receta.</p>
        </div>
        <div className={styles.problemGrid}>
          <article><b>01</b><h3>Diseño sin rigidez</h3><p>Aprende a trabajar forma y simetría respetando la anatomía natural del labio.</p></article>
          <article><b>02</b><h3>Color con intención</h3><p>Relaciona técnica, cobertura y comportamiento del pigmento con el resultado que buscas.</p></article>
          <article><b>03</b><h3>Neutralizar con criterio</h3><p>Comprende cuándo un labio oscuro necesita neutralización antes de perseguir el tono final.</p></article>
        </div>
      </section>

      <section className={styles.method}>
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>MÉTODO VERÓNICA PMU</p>
          <h2>Construye una técnica completa desde la base.</h2>
          <p>La formación combina fundamentos, diseño, selección de herramientas, entrenamiento progresivo, diferentes efectos y observación de procedimientos reales.</p>
        </div>
        <ol>
          <li><b>01</b><span>Comprendes <strong>el labio y su anatomía</strong></span></li>
          <li><b>02</b><span>Diseñas <strong>forma y proporción</strong></span></li>
          <li><b>03</b><span>Configuras <strong>máquina y agujas</strong></span></li>
          <li><b>04</b><span>Entrenas <strong>maniobras y control</strong></span></li>
          <li><b>05</b><span>Aprendes <strong>técnicas y efectos</strong></span></li>
          <li><b>06</b><span>Integras todo en <strong>modelos reales</strong></span></li>
        </ol>
      </section>

      <section className={styles.program} id="programa">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>EL PROGRAMA</p>
            <h2>17 módulos para entender y ejecutar la técnica.</h2>
          </div>
          <p>Desde los fundamentos y la anatomía hasta neutralización y procedimientos reales. El recorrido está diseñado para avanzar de forma progresiva.</p>
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
          <h2>Un solo curso, diferentes maneras de construir el resultado.</h2>
          <p>Aprenderás a reconocer qué recurso técnico tiene sentido según el acabado que buscas, evitando trabajar todos los labios de la misma manera.</p>
        </div>
        <div className={styles.practiceSteps}>
          {['Pixel', 'Acuarela', 'Contorno', 'Vaivén', 'Full Lips', 'Sugar Lips', 'Neutralización'].map((step, index) => (
            <div key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></div>
          ))}
        </div>
      </section>

      <section className={styles.included}>
        <div className={styles.includedIntro}>
          <p className={`${styles.eyebrow} ${styles.light}`}>TU INSCRIPCIÓN INCLUYE</p>
          <h2>Formación, práctica y acompañamiento.</h2>
          <p>Accede al contenido a tu ritmo y vuelve a consultar las clases tantas veces como lo necesites.</p>
        </div>
        <div className={styles.includedGrid}>
          {included.map((item) => <div key={item}><span>✓</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className={styles.audience}>
        <div className={styles.forYou}>
          <span>✓</span><h2>Esta formación es para ti si…</h2>
          <ul>
            <li>Quieres comenzar en micropigmentación de labios sin conocimientos previos.</li>
            <li>Ya trabajas en belleza o estética y deseas ampliar tus servicios.</li>
            <li>Quieres comprender diferentes técnicas en lugar de aprender una sola receta.</li>
            <li>Buscas incorporar neutralización y trabajo sobre distintos casos.</li>
            <li>Quieres estudiar a tu ritmo con acompañamiento durante el proceso.</li>
          </ul>
        </div>
        <div className={styles.notForYou}>
          <span>—</span><h2>No es para ti si…</h2>
          <ul>
            <li>Buscas resultados profesionales sin dedicar tiempo a practicar.</li>
            <li>Solo quieres memorizar movimientos sin comprender el procedimiento.</li>
            <li>No deseas estudiar fundamentos, anatomía o diseño.</li>
            <li>Buscas una promesa rápida sin desarrollar destreza técnica.</li>
          </ul>
        </div>
      </section>

      <section className={styles.teacher}>
        <div
          className={styles.teacherPhoto}
          role="img"
          aria-label="Verónica Montaño, educadora en micropigmentación"
          style={{ backgroundImage: "linear-gradient(180deg,#0000,#211c1932),url('/courses/micropigmentacion-labios.jpg')", backgroundPosition: 'center' }}
        />
        <div>
          <p className={styles.eyebrow}>TU INSTRUCTORA</p>
          <h2>Aprende junto a Verónica Montaño.</h2>
          <p>Soy profesional y educadora en micropigmentación con más de 17 años de experiencia. Mi metodología combina práctica, fundamentos, observación y criterio técnico para que puedas entender por qué tomas cada decisión durante un procedimiento.</p>
          <div className={styles.teacherStats}><span><strong>17+</strong> años de experiencia</span><span><strong>PMU</strong> técnica + criterio</span></div>
        </div>
      </section>

      <section className={styles.checkout} id="inscripcion">
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>BENEFICIO VENEZUELA</p>
          <h2>Comienza tu formación en <em>micropigmentación de labios.</em></h2>
          <p>Obtén el curso completo con el beneficio de inscripción directa para Venezuela y recibe además el curso de Labios Artísticos como regalo.</p>
          <div className={styles.checkoutList}>
            <span>✓ Curso completo de Labios</span><span>✓ Acceso de por vida</span><span>✓ 6 meses de soporte</span><span>✓ Labios Artísticos de regalo</span>
          </div>
        </div>
        <aside className={styles.checkoutCard}>
          <small>PRECIO INTERNACIONAL</small><del>US$250</del>
          <p>PRECIO ESPECIAL VENEZUELA</p>
          <strong>200 <i>USDT</i></strong>
          <span>Incluye Curso Labios Artísticos · Valor USD 50</span>
          <WhatsAppButton label="Quiero inscribirme por 200 USDT" />
          <small className={styles.safe}>Te confirmamos los datos oficiales de pago directamente por WhatsApp.</small>
        </aside>
      </section>

      <section className={styles.faq}>
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
        <h2>Antes de inscribirte</h2>
        <div>
          <details><summary>¿El curso es 100% online?</summary><p>Sí. Las clases son grabadas y puedes estudiar desde cualquier lugar y organizar tu propio horario.</p></details>
          <details><summary>¿Necesito experiencia previa?</summary><p>No. La formación está planteada para personas que desean comenzar y también para profesionales que quieren actualizar o ampliar su técnica.</p></details>
          <details><summary>¿Cuánto tiempo tengo acceso?</summary><p>El acceso al contenido del curso es de por vida para que puedas repetir las clases y volver a consultarlas cuando lo necesites.</p></details>
          <details><summary>¿Tendré acompañamiento?</summary><p>Sí. La inscripción incluye 6 meses de soporte privado para acompañarte durante tu proceso de aprendizaje.</p></details>
          <details><summary>¿Incluye neutralización de labios oscuros?</summary><p>Sí. El programa incluye neutralización y criterios para comprender cuándo debe realizarse antes de trabajar el color final.</p></details>
          <details><summary>¿Qué curso recibo de regalo?</summary><p>La oferta actual incluye el curso de Labios Artísticos, valorado en USD 50, sin costo adicional.</p></details>
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
