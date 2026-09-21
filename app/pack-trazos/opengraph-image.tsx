import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pack de Trazos Microblading + Hairstroke · Aprende PMU';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#F4EDE4',
          color: '#211C19',
          padding: '64px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '62%', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 22, fontWeight: 700, letterSpacing: 2 }}>
            <span>APRENDE</span><span style={{ fontFamily: 'Georgia, serif', fontSize: 34 }}>PMU</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 20, letterSpacing: 3, fontWeight: 800, color: '#8B3F5B', marginBottom: 18 }}>
              PACK DIGITAL DE TRAZOS
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 66, lineHeight: 1.02, maxWidth: 710 }}>
              Microblading + Hairstroke
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.35, color: '#6D5D54', marginTop: 22, maxWidth: 700 }}>
              2 manuales · +282 páginas de práctica
            </div>
          </div>

          <div style={{ display: 'flex', gap: 22, alignItems: 'end' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 18, color: '#74655C' }}>Valor por separado US$47</span>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: 62, color: '#8B3F5B' }}>US$29.99</span>
            </div>
            <div style={{ background: '#183A45', color: '#fff', padding: '14px 22px', borderRadius: 999, fontSize: 22, fontWeight: 700 }}>
              Ahorras US$17
            </div>
          </div>
        </div>

        <div style={{ width: '38%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', width: 260, height: 390, borderRadius: 24, background: '#fff', border: '1px solid #D9C9BC', transform: 'rotate(-8deg) translate(-55px, 35px)', boxShadow: '0 28px 60px rgba(33,28,25,.14)', padding: 26, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#8B3F5B' }}>MICROBLADING</div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 40, lineHeight: 1.05 }}>Guía práctica de trazos</div>
            <div style={{ fontSize: 20, color: '#74655C' }}>122 páginas</div>
          </div>
          <div style={{ position: 'absolute', width: 260, height: 390, borderRadius: 24, background: '#183A45', color: '#fff', transform: 'rotate(7deg) translate(72px, -25px)', boxShadow: '0 28px 60px rgba(33,28,25,.18)', padding: 26, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#E6D9D1' }}>HAIRSTROKE</div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 40, lineHeight: 1.05 }}>Manual maestro de trazos</div>
            <div style={{ fontSize: 20, color: '#E6D9D1' }}>+160 páginas</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
