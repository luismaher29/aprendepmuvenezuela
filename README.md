# Aprende PMU Venezuela

Landing page independiente, preparada para GitHub y Vercel. No requiere cuenta de ChatGPT, claves secretas, base de datos ni variables de entorno.

## Publicar con GitHub y Vercel

1. Crea un repositorio vacío en GitHub.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. En Vercel, selecciona **Add New → Project** e importa el repositorio.
4. Vercel detectará **Next.js** automáticamente. Conserva los valores predeterminados y pulsa **Deploy**.

Importante: el repositorio debe contener `package-lock.json` y no debe contener `pnpm-lock.yaml` ni `pnpm-workspace.yaml`. El archivo `vercel.json` incluido obliga a Vercel a instalar con `npm ci` para evitar que elija otro gestor por error.

## Trabajar localmente

Se recomienda Node.js 22 o superior.

```bash
npm install
npm run dev
```

Para comprobar la versión de producción:

```bash
npm run build
npm start
```

## Dónde actualizar el contenido

- Cursos y precios: `data/courses.ts`
- Masterclasses y ebooks: `data/resources.ts`
- WhatsApp, métricas y datos generales: `data/siteConfig.ts`
- Testimonios: `data/testimonials.ts`
- Preguntas frecuentes: `data/faq.ts`
- Imágenes: `public/courses` y `public/instructor`

El botón de compra abre directamente el WhatsApp oficial configurado en `data/siteConfig.ts`.

## Estadísticas de visitas

Vercel Web Analytics ya está integrado mediante el paquete oficial `@vercel/analytics`. Después de subir esta versión a GitHub y de que Vercel termine el nuevo despliegue, visita la página publicada y navega por ella. Los primeros datos suelen aparecer en **Analytics** poco después de recibir visitas reales. Los bloqueadores de publicidad pueden impedir que una visita concreta sea contabilizada.
