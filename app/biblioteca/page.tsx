import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { whatsappUrl } from '@/lib/whatsapp';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Biblioteca Profesional de Cejas | Aprende PMU Venezuela',
  description:
    'Manual de diseño, pigmentología, efecto polvo, microblading y Hairstroke con precio especial para Venezuela y pago directo en USDT.',
};

const Arrow = () => <span aria-hidden>↗</span>;

const products = [
  {
    index: '01',
    kicker: 'DISEÑO',
    title: 'Diseño Profesional de Cejas',
    copy: 'Estructura, proporciones y criterio para construir diseños más conscientes antes de comenzar un procedimiento.',
    tone: 'light',
  },
  {
    index: '02',
    kicker: 'COLOR',
    title: 'Colorimetría & Pigmentología',
    copy: 'Piel, subtonos, pigmentos, neutralización y correcciones para comprender mejor el comportamiento del color.',
    tone: 'dark',
  },
  {
    index: '03',
    kicker: 'POWDER',
    title: 'Efecto Polvo: Técnica y Maestría',
    copy: '192 páginas sobre saturación, degradados, maniobra, parámetros técnicos, piel, cicatrización y errores frecuentes.',
    tone: 'sand',
  },
  {
    index: '04',
    kicker: 'MICROBLADING',
    title: 'Guía Práctica de Trazos',
    copy: '122 páginas de ejercicios progresivos para trabajar coordinación, precisión, fluidez y construcción de patrones.',
    tone: 'petrol',
  },
  {
    index: '05',
    kicker: 'HAIRSTROKE',
    title: 'Manual Maestro de Trazos Hairstroke',
    copy: 'Una guía para desarrollar trazos pelo a pelo con máquina y ampliar el control sobre estructura y patrones.',
    tone: 'gold',
  },
] as const;

const faq = [
  ['¿Los materiales son físicos?', 'No. Todos los productos incluidos son digitales y están pensados para estudio, consulta y práctica personal.'],
  ['¿Cómo pago desde Venezuela?', 'El precio especial de esta página aplica mediante pago directo en USDT. Nuestro equipo te confirma los datos y verifica el pago por WhatsApp.'],
  ['¿Los manuales sustituyen un curso?', 'No. Son materiales profesionales de estudio y práctica. Complementan la formación, pero no sustituyen clases, demostraciones, acompañamiento ni práctica supervisada.'],
  ['¿Incluyen certificado?', 'No. Esta oferta corresponde a una biblioteca de manuales y herramientas digitales, no a un programa de certificación.'],
  ['¿Puedo compartir los archivos?', 'No. El acceso es personal y los materiales están protegidos por derechos de autor.'],
];

function WhatsAppButton({ label, pack, className = '' }: { label: string; pack: string; className?: string }) {
  const message = `Hola, estoy en Venezuela 🇻🇪 y quiero adquirir ${pack}. Quiero pagar en USDT y confirmar el proceso de acceso.`;
  return (
    <a
      className={`${styles.button} ${className}`}
      href={whatsappUrl(message, { source: 'biblioteca_venezuela', medium: 'whatsapp', campaign: 'biblioteca', content: pack })}
      target="_blank"
      rel="noreferrer"
    >
      {label} <Arrow />
    </a>
  );
}

export default function BibliotecaPage() {
  return (
    <>
      <header className={styles.nav}>
        <a className={styles.brand} href="/">
          <span>APRENDE</span>
          <strong>PMU</strong>
        </a>
        <nav>
          <a href="#biblioteca">Biblioteca</a>
          <a href="#packs">Packs</a>
          <a href="#pago">Cómo pagar</a>
          <a href="#faq">Preguntas frecuentes</a>
        </nav>
        <WhatsAppButton label="Adquirir" pack="la Biblioteca Profesional de Cejas" className={styles.navButton} />
      </header>

      <main>
        <section className={styles.hero} id="top">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span>VE</span> APRENDE PMU · VENEZUELA</p>
            <h1>Tu biblioteca profesional de <em>cejas.</em></h1>
            <p className={styles.lead}>
              Cinco áreas clave de la micropigmentación reunidas en una colección para estudiar, practicar y consultar a tu ritmo.
            </p>
            <div className={styles.heroTopics}>Diseño · Pigmentología · Efecto Polvo · Microblading · Hairstroke</div>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.primary}`} href="#packs">Ver los packs ↓</a>
              <WhatsAppButton label="Consultar por WhatsApp" pack="la Biblioteca Profesional de Cejas" className={styles.secondary} />
            </div>
            <p className={styles.meta}>Precio especial Venezuela <i /> Pago directo <i /> USDT</p>
          </div>

          <div className={styles.stack} aria-label="Colección de manuales Aprende PMU">
            {products.map((product, i) => (
              <article key={product.title} className={`${styles.book} ${styles[product.tone]}`} style={{ '--i': i } as CSSProperties}>
                <small>APRENDE PMU</small>
                <span>{product.index}</span>
                <div>
                  <b>{product.kicker}</b>
                  <strong>{product.title}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.trustLine}>
          <span>✦ Material profesional</span>
          <span>✦ Acceso digital</span>
          <span>✦ Precio especial Venezuela</span>
        </div>

        <section className={styles.intro} id="biblioteca">
          <div>
            <p className={styles.eyebrow}>MÁS QUE EBOOKS</p>
            <h2>Construye una biblioteca a la que puedas volver una y otra vez.</h2>
          </div>
          <p>
            En micropigmentación no basta con memorizar pasos. Necesitas comprender diseño, piel, color, saturación y trazos. Esta colección reúne materiales que cubren esas áreas desde una mirada técnica, práctica y profesional.
          </p>
        </section>

        <section className={styles.catalog}>
          {products.map((product) => (
            <article key={product.title}>
              <div className={styles.catalogIndex}>{product.index}</div>
              <div>
                <p>{product.kicker}</p>
                <h3>{product.title}</h3>
                <span>{product.copy}</span>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.bonus}>
          <div>
            <p className={styles.eyebrow}>BONUS ESPECIAL</p>
            <h2>Aprende la técnica.<br/><em>Y aprende a convertirla en negocio.</em></h2>
          </div>
          <div className={styles.bonusCard}>
            <span>🎁 BONUS</span>
            <h3>Kit Negocio PMU desde Cero</h3>
            <p>Herramientas para organizar tu oferta, definir mejor tus servicios, pensar en tu cliente y comenzar a construir una estrategia comercial.</p>
          </div>
        </section>

        <section className={styles.packs} id="packs">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>ELIGE TU BIBLIOTECA</p>
              <h2>Dos formas de comenzar.</h2>
            </div>
            <p>El Pack Esencial cubre los fundamentos principales. La Biblioteca PRO añade Microblading y Hairstroke por solo 14 USDT adicionales.</p>
          </div>

          <div className={styles.packGrid}>
            <article className={styles.packEssential}>
              <small>PACK ESENCIAL</small>
              <h3>Los fundamentos que más pueden transformar tu trabajo.</h3>
              <ul>
                <li>Diseño Profesional de Cejas</li>
                <li>Colorimetría & Pigmentología</li>
                <li>MicroPro Colorimetría</li>
                <li>Efecto Polvo: Técnica y Maestría</li>
                <li>🎁 Kit Negocio PMU desde Cero</li>
              </ul>
              <div className={styles.price}><span>VENEZUELA</span><strong>25</strong><b>USDT</b></div>
              <WhatsAppButton label="Quiero el Pack Esencial" pack="el Pack Esencial de la Biblioteca PMU por 25 USDT" className={styles.packButtonLight} />
            </article>

            <article className={styles.packPro}>
              <div className={styles.recommended}>MÁS COMPLETA</div>
              <small>BIBLIOTECA PROFESIONAL PRO</small>
              <h3>Toda la colección profesional de cejas.</h3>
              <ul>
                <li>Diseño Profesional de Cejas</li>
                <li>Colorimetría & Pigmentología</li>
                <li>MicroPro Colorimetría</li>
                <li>Efecto Polvo: Técnica y Maestría</li>
                <li>Guía Práctica de Microblading</li>
                <li>Manual Maestro Hairstroke</li>
                <li>🎁 Kit Negocio PMU desde Cero</li>
              </ul>
              <p className={styles.value}>Valor individual superior a US$100</p>
              <div className={styles.price}><span>PRECIO ESPECIAL BINANCE</span><strong>39</strong><b>USDT</b></div>
              <WhatsAppButton label="Quiero toda la Biblioteca" pack="la Biblioteca Profesional PRO por 39 USDT" className={styles.packButtonDark} />
            </article>
          </div>
        </section>

        <section className={styles.payment} id="pago">
          <div>
            <p className={`${styles.eyebrow} ${styles.light}`}>PAGO DIRECTO</p>
            <h2>Desde Venezuela, el proceso es simple.</h2>
          </div>
          <div className={styles.steps}>
            {[
              ['01', 'Elige tu pack', 'Selecciona Esencial o Biblioteca PRO.'],
              ['02', 'Escríbenos', 'Te atendemos directamente por WhatsApp.'],
              ['03', 'Paga en USDT', 'Te confirmamos los datos de pago directo.'],
              ['04', 'Recibe tu acceso', 'Verificamos el pago y te enviamos las instrucciones.'],
            ].map(([n, title, copy]) => (
              <article key={n}><b>{n}</b><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <p className={styles.security}>◉ Nunca te pediremos contraseñas, claves privadas ni códigos de acceso de tus cuentas.</p>
        </section>

        <section className={styles.statement}>
          <p className={styles.eyebrow}>UNA INVERSIÓN EN CONOCIMIENTO</p>
          <h2>Diseño. Color. Powder.<br/>Microblading. <em>Hairstroke.</em></h2>
          <p>Una colección para consultar cada vez que quieras reforzar un concepto, practicar o estudiar con mayor criterio.</p>
        </section>

        <section className={styles.faq} id="faq">
          <div>
            <p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p>
            <h2>Antes de adquirir tu biblioteca.</h2>
          </div>
          <div>
            {faq.map(([question, answer], i) => (
              <details key={question} open={i === 0}>
                <summary>{question}<span>＋</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.final}>
          <p className={`${styles.eyebrow} ${styles.light}`}>APRENDE PMU · VENEZUELA</p>
          <h2>Tu biblioteca profesional<br/><em>puede comenzar hoy.</em></h2>
          <p>5 manuales profesionales + herramientas complementarias + bonus de negocio.</p>
          <div className={styles.actionsCenter}>
            <WhatsAppButton label="Quiero la Biblioteca PRO · 39 USDT" pack="la Biblioteca Profesional PRO por 39 USDT" className={styles.finalButton} />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <a className={styles.brand} href="/"><span>APRENDE</span><strong>PMU</strong></a>
          <p>Formación profesional en micropigmentación.</p>
        </div>
        <div><a href="/">Inicio Venezuela</a><a href="#packs">Biblioteca</a><a href="#faq">Preguntas frecuentes</a></div>
        <p>© {new Date().getFullYear()} Aprende PMU</p>
      </footer>
    </>
  );
}
