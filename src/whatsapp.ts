import type { Flower } from "./types";

const WHATSAPP_NUMBER = "905XXXXXXXXX";

type OrderInfo = Pick<Flower, "name" | "price">;

export function buildWhatsAppUrl({ name, price }: OrderInfo): string {
 
  const message = `Merhaba, "${name}" (${price} TL) siparişi vermek istiyorum.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderOnWhatsApp(info: OrderInfo): void {
  window.open(buildWhatsAppUrl(info), "_blank", "noopener,noreferrer");
}