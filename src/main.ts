import "./style.css";
import { flowers, categories } from "./data";
import { buildContactUrl, orderOnWhatsApp } from "./whatsapp";
import type { Category, Flower } from "./types";

type Filter = Category | "Tümü";
const filters: Filter[] = ["Tümü", ...categories];

const cardColors: Record<Category, string> = {
  Buket: "from-rose-100 to-rose-200",
  Aranjman: "from-amber-100 to-orange-200",
  Orkide: "from-fuchsia-100 to-purple-200",
  Saksı: "from-emerald-100 to-green-200",
};

function getEl(selector: string): HTMLElement {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) throw new Error(`${selector} bulunamadı`);
  return el;
}

const grid = getEl("#flower-grid");
const filterBar = getEl("#filters");

function createCard(f: Flower): string {
  const badge = f.badge
    ? `<span class="absolute left-3 top-3 rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white">${f.badge}</span>`
    : "";
  return `
    <article class="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div class="relative flex h-44 items-center justify-center bg-linear-to-br ${cardColors[f.category]} text-7xl">
        ${badge}${f.emoji}
      </div>
      <div class="flex flex-1 flex-col p-5">
        <p class="text-xs font-semibold uppercase tracking-wide text-rose-500">${f.category}</p>
        <h3 class="mt-1 text-lg font-semibold">${f.name}</h3>
        <p class="mt-1 text-sm text-gray-500">${f.description}</p>
        <p class="mt-auto pt-4 text-2xl font-bold text-rose-600">${f.price} ₺</p>
        <button type="button" data-id="${f.id}"
          class="order-btn mt-3 rounded-lg bg-green-600 px-4 py-2.5 font-medium text-white transition hover:bg-green-700 active:scale-95">
          💬 WhatsApp ile Sipariş Et
        </button>
      </div>
    </article>`;
}

function renderFilters(active: Filter): void {
  filterBar.innerHTML = filters
    .map((f) => {
      const style = f === active ? "bg-rose-600 text-white" : "bg-white text-gray-600 hover:bg-rose-100";
      return `<button type="button" data-filter="${f}" class="filter-btn rounded-full px-5 py-2 text-sm font-medium shadow-sm transition ${style}">${f}</button>`;
    })
    .join("");
}

function renderGrid(active: Filter): void {
  const list = active === "Tümü" ? flowers : flowers.filter((f) => f.category === active);
  grid.innerHTML = list.map(createCard).join("");
}

filterBar.addEventListener("click", (e: MouseEvent) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".filter-btn");
  if (!btn) return;
  const active = btn.dataset.filter as Filter;
  renderFilters(active);
  renderGrid(active);
});

grid.addEventListener("click", (e: MouseEvent) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".order-btn");
  if (!btn) return;
  const flower = flowers.find((f) => f.id === Number(btn.dataset.id));
  if (flower) orderOnWhatsApp(flower);
});
document.querySelectorAll<HTMLAnchorElement>("a[data-wa]").forEach((a) => {
  a.href = buildContactUrl(a.dataset.wa ?? "Merhaba, bilgi almak istiyorum.");
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});

renderFilters("Tümü");
renderGrid("Tümü");