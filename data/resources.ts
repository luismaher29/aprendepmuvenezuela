export type Resource = {type:'Masterclass'|'Ebook';name:string;slug:string;description:string;price:number;internationalPrice:number;infoUrl?:string;note?:string};

export const masterclasses:Resource[] = [
  {type:'Masterclass',name:'Trazos de Hairstroke en Látex',slug:'trazos-hairstroke-latex',description:'Entrenamiento especializado para comprender y practicar la construcción de trazos Hairstroke sobre látex.',price:49,internationalPrice:49,infoUrl:'/masterclass-trazos-hairstroke'},
  {type:'Masterclass',name:'Maniobras Maestras',slug:'maniobras-maestras',description:'Clase especializada para fortalecer maniobras, control y criterio técnico en procedimientos PMU.',price:49,internationalPrice:49,infoUrl:'/masterclass-maniobras-maestras'},
  {type:'Masterclass',name:'Neutralización de Labios Oscuros',slug:'neutralizacion-labios-oscuros',description:'Formación enfocada en el análisis y abordaje profesional de labios oscuros.',price:75,internationalPrice:75,infoUrl:'/masterclass-labios-oscuros'},
];

export const ebooks:Resource[] = [
  {type:'Ebook',name:'Colorimetría y Pigmentología en Cejas',slug:'ebook-colorimetria',description:'Guía educativa para comprender color, pigmentos y decisiones aplicadas a cejas.',price:27,internationalPrice:37,infoUrl:'/guia-pigmentologia',note:'Estudiantes del curso de Pigmentología: beneficio especial sujeto a verificación.'},
  {type:'Ebook',name:'Manual Maestro de Trazos Hairstroke',slug:'manual-trazos-hairstroke',description:'Manual con más de 160 páginas dedicado a la construcción y práctica de trazos Hairstroke.',price:27,internationalPrice:37,infoUrl:'/manual-trazos-hairstroke',note:'Precio de lanzamiento.'},
  {type:'Ebook',name:'Guía Profesional de Diseño de Cejas',slug:'guia-diseno-cejas',description:'Más de 190 páginas sobre diseño de cejas, alopecia, henna y fundamentos profesionales.',price:19.99,internationalPrice:19.99,infoUrl:'/diseno-de-cejas'},
  {type:'Ebook',name:'Guía Práctica de Trazos en Microblading',slug:'guia-trazos-microblading',description:'Recurso práctico para entrenar trazos y fortalecer la ejecución del Microblading.',price:19.99,internationalPrice:19.99,infoUrl:'/guia-trazos-microblading'},
  {type:'Ebook',name:'Efecto Polvo · Técnica y Maestría',slug:'ebook-efecto-polvo',description:'Guía enfocada en los fundamentos, la práctica y el perfeccionamiento del efecto polvo.',price:19.99,internationalPrice:27,infoUrl:'/ebook-efecto-polvo',note:'Consulta por WhatsApp las condiciones vigentes.'},
];
