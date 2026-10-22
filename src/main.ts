import "./style.css"; 
import { flowers } from "./data";
import { orderOnWhatsApp } from "./whatsapp";
import type { Flower } from "./types";

function createCard(flower: Flower): string {
  return `
    <article class="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <!-- Görsel alanı (emoji) -->
      <div class="flex h-40 items-center justify-center bg-rose-100 text-7xl">
        ${flower.emoji}
      </div>

      <div class="flex flex-1 flex-col p-5">
        <h3 class="text-lg font-semibold">${flower.name}</h3>
        <p class="mt-1 text-sm text-gray-500">${flower.description}</p>

        <!-- mt-auto: fiyat ve buton hep kartın altında hizalı kalsın -->
        <p class="mt-auto pt-4 text-2xl font-bold text-rose-600">${flower.price} ₺</p>

        <!-- data-id: hangi ürüne tıklandığını anlamak için -->
        <button
          type="button"
          data-id="${flower.id}"
          class="order-btn mt-3 rounded-lg bg-green-600 px-4 py-2.5 font-medium text-white transition hover:bg-green-700 active:scale-95"
        >
          💬 WhatsApp ile Sipariş Et
        </button>
      </div>
    </article>
  `;
}

const grid = document.querySelector<HTMLElement>("#flower-grid");
if (!grid) {
  throw new Error("#flower-grid elemanı index.html içinde bulunamadı.");
}

grid.innerHTML = flowers.map(createCard).join("");

grid.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  const button = target.closest<HTMLButtonElement>(".order-btn");
  if (!button) return; 

  const id = Number(button.dataset.id);

  const flower = flowers.find((f) => f.id === id);

  if (flower) {
    orderOnWhatsApp(flower);
  }
});