import { siteConfig } from '@/data/siteConfig';
export type UTM = {source?:string;medium?:string;campaign?:string;content?:string};
export function whatsappUrl(message:string, utm?:UTM) {
  const tracking = utm ? `\n\nReferencia: ${Object.entries(utm).filter(([,v])=>v).map(([k,v])=>`utm_${k}=${v}`).join('&')}` : '';
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message + tracking)}`;
}
