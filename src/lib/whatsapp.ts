/** 
 * Utility to generate WhatsApp redirect URLs for product inquiries.
 * Seller: +94719200093
 */

export const SELLER_WHATSAPP = "94719200093";

interface WhatsAppMessageOptions {
  productName: string;
  price: string;
}

export function generateWhatsAppUrl({ productName, price }: WhatsAppMessageOptions): string {
  const message = `Dear Exclusive Ceylon Team,\n\nI am interested in purchasing the "${productName}" priced at ${price}.\n\nCould you please provide further details on the availability and the procedure for payment and delivery?\n\nThank you.`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${SELLER_WHATSAPP}?text=${encodedMessage}`;
}

export function openWhatsAppInquiry(options: WhatsAppMessageOptions) {
  const url = generateWhatsAppUrl(options);
  window.open(url, "_blank", "noopener,noreferrer");
}
