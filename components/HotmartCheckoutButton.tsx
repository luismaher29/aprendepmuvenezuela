'use client';

import Script from 'next/script';

export default function HotmartCheckoutButton({
  href,
  label,
  className = '',
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const checkoutHref = href.includes('?') ? `${href}&checkoutMode=2` : `${href}?checkoutMode=2`;

  return (
    <>
      <Script
        src="https://static.hotmart.com/checkout/widget.min.js"
        strategy="afterInteractive"
      />
      <a
        href={checkoutHref}
        className={`hotmart-fb hotmart__button-checkout ${className}`}
        data-event="click_hotmart_pack_trazos"
      >
        {label}
      </a>
    </>
  );
}
