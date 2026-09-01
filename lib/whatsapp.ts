import { siteConfig } from '@/data/siteConfig';
export type UTM = {source?:string;medium?:string;campaign?:string;content?:string};
export function whatsappUrl(message:string, _utm?:UTM) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
