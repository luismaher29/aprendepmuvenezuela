export type ConversionEvent = 'view_courses'|'click_course'|'click_whatsapp'|'select_payment_usdt'|'select_payment_ves'|'lead_whatsapp';
export function track(event:ConversionEvent, data:Record<string,string|number|undefined>={}) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('apm:conversion',{detail:{event,...data}}));
  (window as typeof window & {dataLayer?:unknown[]}).dataLayer?.push({event,...data});
}
