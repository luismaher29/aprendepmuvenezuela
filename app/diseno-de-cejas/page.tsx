import type { Metadata } from 'next';
import styles from './page.module.css';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Guía Profesional de Diseño de Cejas | Venezuela · Aprende PMU',
  description:
    'Más de 190 páginas sobre diseño profesional de cejas, visagismo, proporción, asimetrías, correcciones, práctica y henna. Precio especial Venezuela: 9.99 USDT.',
};

const benefits = [
  'Visagismo y análisis facial',
  'Proporción y estructura de la ceja',
  'Cejas asimétricas y correcciones visuales',
  'Párpados caídos y particularidades del rostro',
  'Alopecias y situaciones reales de diseño',
  'Tipos de colas y cómo corregirlas',
  'Plantillas y rostros para practicar',
  'Capítulo especial de cejas semipermanentes con henna',
];

const whatsappMessage =
  'Hola, estoy en Venezuela 🇻🇪 y quiero adquirir la Guía Profesional de Diseño de Cejas por 9.99 USDT. Quiero recibir los datos para realizar el pago por Binance.';

const buyUrl = whatsappUrl(whatsappMessage, {
  source: 'landing_diseno_cejas',
  medium: 'whatsapp',
  campaign: 'guia_999_venezuela',
});

function WhatsAppButton({ className, label }: { className?: string; label: string }) {
  return (
    <a
      className={className || styles.whatsappButton}
      href={buyUrl}
      target="_blank"
      rel="noreferrer"
      data-event="click_whatsapp_diseno_cejas"
    >
      <span aria-hidden>●</span> {label} ↗
    </a>
  );
}

export default function DisenoDeCejasVenezuela() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.nav}>
        <a href="/" className={styles.brand} aria-label="Aprende PMU Venezuela">
          <span>APRENDE</span>
          <strong>PMU</strong>
        </a>
        <WhatsAppButton className={styles.navCta} label="Comprar por WhatsApp" />
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span>VE</span> OFERTA ESPECIAL VENEZUELA</p>
          <h1>Diseña cejas con <em>criterio profesional.</em></h1>
          <p className={styles.lead}>
            Una guía digital de más de <strong>190 páginas</strong> para comprender el rostro,
            trabajar proporciones, corregir asimetrías y tomar mejores decisiones antes de aplicar cualquier técnica.
          </p>
          <div className={styles.priceRow}>
            <div>
              <small>ANTES</small>
              <del>US$19.99</del>
            </div>
            <div className={styles.today}>
              <small>PRECIO VENEZUELA</small>
              <strong>9.99 <i>USDT</i></strong>
            </div>
          </div>
          <WhatsAppButton label="Quiero mi guía por 9.99 USDT" />
          <p className={styles.meta}>100% digital · Atención por WhatsApp · Pago por Binance · Entrega por correo</p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.coverWrap}>
            <img src="/biblioteca/diseno-cejas.webp" alt="Portada Guía Profesional de Diseño de Cejas" />
            <span>+190 PÁGINAS</span>
          </div>
          <div className={styles.heroBadge}>Incluye capítulo de <strong>HENNA</strong></div>
        </div>
      </section>

      <section className={styles.statement}>
        <p className={styles.eyebrow}>TODO COMIENZA CON EL DISEÑO</p>
        <h2>Una buena ceja empieza mucho antes del procedimiento.</h2>
        <p>
          No importa si trabajas con henna, diseño tradicional, laminado, microblading o micropigmentación:
          entender la estructura del rostro te permite dejar de improvisar y comenzar a diseñar con intención.
        </p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>DENTRO DE LA GUÍA</p>
            <h2>Más que medidas: aprende a tomar decisiones.</h2>
          </div>
          <p>
            Casos reales, fundamentos, errores frecuentes y material práctico reunido para que puedas volver a consultarlo cada vez que lo necesites.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((item, index) => (
            <article key={item}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.hennaSection}>
        <div>
          <p className={`${styles.eyebrow} ${styles.light}`}>BONUS ESPECIAL</p>
          <h2>¿Trabajas con <em>henna?</em></h2>
          <p>
            La guía incluye un capítulo dedicado a las cejas semipermanentes para que puedas aplicar el diseño profesional a un servicio accesible y de alta rotación.
          </p>
          <ul>
            <li>Integra diseño y aplicación.</li>
            <li>Mejora la estructura visual antes del pigmento.</li>
            <li>Amplía tus servicios y comienza a monetizar lo aprendido.</li>
          </ul>
        </div>
        <div className={styles.hennaCard}>
          <small>IDEAL PARA</small>
          <strong>Brow Artists</strong>
          <span>Henna · Diseño · Laminado · PMU</span>
        </div>
      </section>

      <section className={styles.checkoutSection} id="comprar">
        <div className={styles.checkoutIntro}>
          <p className={styles.eyebrow}>COMPRA ACOMPAÑADA · VENEZUELA</p>
          <h2>Tu guía por <em>9.99 USDT.</em></h2>
          <p>
            Antes de pagar, conversa con nuestro equipo por WhatsApp. Te confirmamos la oferta, compartimos los datos oficiales de Binance y te acompañamos hasta que recibas tu guía.
          </p>

          <div className={styles.steps}>
            <div><b>01</b><span>Pulsa el botón y escríbenos directamente por <strong>WhatsApp</strong>.</span></div>
            <div><b>02</b><span>Te confirmamos el precio de <strong>9.99 USDT</strong> y te enviamos los datos oficiales para pagar por Binance.</span></div>
            <div><b>03</b><span>Nos envías por WhatsApp el comprobante, tu nombre y el correo donde quieres recibir la guía.</span></div>
            <div><b>04</b><span>Verificamos el pago y enviamos la guía digital a tu correo electrónico.</span></div>
          </div>
        </div>

        <aside className={styles.whatsappCard}>
          <span className={styles.chatMark} aria-hidden>WA</span>
          <p className={styles.formEyebrow}>ATENCIÓN PERSONAL</p>
          <h3>Habla con una persona antes de pagar.</h3>
          <p className={styles.cardLead}>
            Queremos que compres con tranquilidad. Nuestro equipo te atenderá por WhatsApp, resolverá tus dudas y te dará los datos de pago de forma directa.
          </p>
          <div className={styles.trustList}>
            <span>✓ Precio Venezuela confirmado: <strong>9.99 USDT</strong></span>
            <span>✓ Datos oficiales de Binance enviados por el equipo</span>
            <span>✓ Puedes enviar el comprobante por el mismo chat</span>
            <span>✓ Nombre y correo se toman directamente por WhatsApp</span>
            <span>✓ La guía llega a tu correo después de verificar el pago</span>
          </div>
          <WhatsAppButton label="Hablar con Aprende PMU" />
          <small className={styles.securityNote}>Nunca te pediremos contraseñas, códigos 2FA ni claves privadas de Binance.</small>
        </aside>
      </section>

      <section className={styles.finalCta}>
        <p className={`${styles.eyebrow} ${styles.light}`}>PRECIO ESPECIAL VENEZUELA</p>
        <h2>Más de 190 páginas.<br/><em>Solo 9.99 USDT.</em></h2>
        <p>Escríbenos por WhatsApp y una persona de nuestro equipo te ayudará a completar tu compra.</p>
        <WhatsAppButton label="Quiero adquirir la guía" />
      </section>

      <section className={styles.faq}>
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
        <h2>Antes de comprar</h2>
        <div>
          <details><summary>¿La guía es física?</summary><p>No. Es un producto 100% digital y se entrega por correo electrónico.</p></details>
          <details><summary>¿Necesito ser micropigmentadora?</summary><p>No. También es útil si trabajas con diseño tradicional, henna, laminado o estás comenzando en el mundo de las cejas.</p></details>
          <details><summary>¿Cómo se realiza el pago?</summary><p>Escríbenos por WhatsApp. Nuestro equipo te confirma la oferta de 9.99 USDT y te envía directamente los datos oficiales para realizar el pago por Binance.</p></details>
          <details><summary>¿Qué datos debo enviar?</summary><p>Después de pagar, puedes enviarnos por el mismo WhatsApp el comprobante, tu nombre y el correo electrónico donde deseas recibir la guía.</p></details>
          <details><summary>¿Cuándo recibo la guía?</summary><p>Después de verificar el pago, enviamos la guía digital al correo que nos indiques por WhatsApp.</p></details>
          <details><summary>¿Puedo compartirla con otra persona?</summary><p>No. La compra es para uso personal. El contenido está protegido por derechos de autor.</p></details>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="/" className={styles.brand}><span>APRENDE</span><strong>PMU</strong></a>
        <p>Formación profesional en micropigmentación · Venezuela</p>
        <WhatsAppButton className={styles.footerLink} label="WhatsApp" />
      </footer>
    </main>
  );
}
