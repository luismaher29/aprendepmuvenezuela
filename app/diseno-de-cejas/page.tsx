import type { Metadata } from 'next';
import styles from './page.module.css';

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

export default function DisenoDeCejasVenezuela() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.nav}>
        <a href="/" className={styles.brand} aria-label="Aprende PMU Venezuela">
          <span>APRENDE</span>
          <strong>PMU</strong>
        </a>
        <a className={styles.navCta} href="#comprar">Comprar por 9.99 USDT</a>
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
          <a className={styles.primaryButton} href="#comprar">Quiero mi guía ↓</a>
          <p className={styles.meta}>100% digital · Pago por Binance · Entrega por correo</p>
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
          <p className={styles.eyebrow}>COMPRA DIRECTA · VENEZUELA</p>
          <h2>Tu guía por <em>9.99 USDT.</em></h2>
          <p>
            No necesitas escribirnos por WhatsApp. Realiza tu pago por Binance y completa el formulario con el mismo correo donde deseas recibir la guía.
          </p>

          <div className={styles.steps}>
            <div><b>01</b><span>Escanea el QR y realiza el pago de <strong>9.99 USDT</strong> por Binance.</span></div>
            <div><b>02</b><span>Guarda el ID de la transacción o una captura del comprobante.</span></div>
            <div><b>03</b><span>Completa el formulario con tu nombre y correo.</span></div>
            <div><b>04</b><span>Después de verificar el pago, recibirás la guía por email.</span></div>
          </div>

          <div className={styles.binanceBox}>
            <div className={styles.qrReal}>
              <img src="/diseno-cejas/binance-qr.svg" alt="Código QR oficial de Binance Pay de Aprende PMU" />
            </div>
            <div>
              <small>BINANCE PAY</small>
              <strong>9.99 USDT</strong>
              <p>Usuario Binance: <b>luisher29</b></p>
              <p>Escanea el QR desde la app de Binance y verifica que el destinatario coincida antes de confirmar.</p>
            </div>
          </div>
        </div>

        <form
          className={styles.form}
          action="https://formsubmit.co/aprendepmu@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_subject" value="Nueva compra · Guía Diseño de Cejas Venezuela · 9.99 USDT" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://aprendepmuvenezuela.com/diseno-de-cejas/gracias" />
          <input type="hidden" name="Producto" value="Guía Profesional de Diseño de Cejas" />
          <input type="hidden" name="Precio" value="9.99 USDT" />

          <p className={styles.formEyebrow}>CONFIRMA TU COMPRA</p>
          <h3>¿Dónde te enviamos la guía?</h3>

          <label>
            Nombre y apellido
            <input name="Nombre" type="text" placeholder="Tu nombre completo" required />
          </label>

          <label>
            Correo electrónico
            <input name="Email" type="email" placeholder="tucorreo@ejemplo.com" required />
          </label>

          <label>
            Confirma tu correo
            <input name="Confirmacion_email" type="email" placeholder="Repite tu correo" required />
          </label>

          <label>
            ID / TxID de Binance
            <input name="Binance_TxID" type="text" placeholder="Pega aquí el ID de la transacción" required />
          </label>

          <label>
            Comprobante de pago <span>(opcional)</span>
            <input name="Comprobante" type="file" accept="image/*,.pdf" />
          </label>

          <label className={styles.checkbox}>
            <input type="checkbox" required />
            <span>Confirmo que el correo ingresado es correcto y será utilizado para recibir mi producto digital.</span>
          </label>

          <button type="submit">Enviar datos y confirmar compra →</button>
          <p className={styles.formNote}>La guía se envía por correo después de verificar el pago. No compartas contraseñas, códigos 2FA ni claves privadas.</p>
        </form>
      </section>

      <section className={styles.faq}>
        <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
        <h2>Antes de comprar</h2>
        <div>
          <details><summary>¿La guía es física?</summary><p>No. Es un producto 100% digital y se entrega por correo electrónico.</p></details>
          <details><summary>¿Necesito ser micropigmentadora?</summary><p>No. También es útil si trabajas con diseño tradicional, henna, laminado o estás comenzando en el mundo de las cejas.</p></details>
          <details><summary>¿Cómo se realiza el pago?</summary><p>La oferta Venezuela de 9.99 USDT se paga directamente por Binance usando el QR oficial publicado en esta página.</p></details>
          <details><summary>¿Cuándo recibo la guía?</summary><p>Después de verificar el pago, la enviamos al correo que registraste en el formulario.</p></details>
          <details><summary>¿Puedo compartirla con otra persona?</summary><p>No. La compra es para uso personal. El contenido está protegido por derechos de autor.</p></details>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="/" className={styles.brand}><span>APRENDE</span><strong>PMU</strong></a>
        <p>Formación profesional en micropigmentación · Venezuela</p>
        <a href="mailto:aprendepmu@gmail.com">aprendepmu@gmail.com</a>
      </footer>
    </main>
  );
}
