# Aprende PMU Venezuela

Landing page independiente, preparada para GitHub y Vercel. No requiere cuenta de ChatGPT, claves secretas, base de datos ni variables de entorno.

## Publicar con GitHub y Vercel

1. Crea un repositorio vacío en GitHub.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. En Vercel, selecciona **Add New → Project** e importa el repositorio.
4. Vercel detectará **Next.js** automáticamente. Conserva los valores predeterminados y pulsa **Deploy**.

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
