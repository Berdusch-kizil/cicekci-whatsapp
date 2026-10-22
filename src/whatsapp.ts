import type { Flower } from "./types";

const WHATSAPP_NUMBER = "905XXXXXXXXX"; 

type OrderInfo = Pick<Flower, "name" | "price">;

export function buildContactUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppUrl({ name, price }: OrderInfo): string {
  return buildContactUrl(`Merhaba, "${name}" (${price} TL) siparişi vermek istiyorum.`);
}

export function orderOnWhatsApp(info: OrderInfo): void {
  window.open(buildWhatsAppUrl(info), "_blank", "noopener,noreferrer");
}