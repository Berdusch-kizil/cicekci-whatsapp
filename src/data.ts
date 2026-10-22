import type { Category, Flower } from "./types";

export const categories: Category[] = ["Buket", "Aranjman", "Orkide", "Saksı"];

export const flowers: Flower[] = [
  { id: 1, name: "Kırmızı Gül Buketi", price: 450, emoji: "🌹", category: "Buket", badge: "Çok Satan", description: "11 adet taze kırmızı gül, özel ambalajla." },
  { id: 2, name: "Papatya Demeti", price: 250, emoji: "🌼", category: "Buket", description: "Neşe veren, taze papatya demeti." },
  { id: 3, name: "Lale Buketi", price: 320, emoji: "🌷", category: "Buket", badge: "Mevsimlik", description: "Renkli lalelerden hazırlanan bahar buketi." },
  { id: 4, name: "Beyaz Lilyum Aranjmanı", price: 380, emoji: "💐", category: "Aranjman", description: "Zarif beyaz lilyumlardan aranjman." },
  { id: 5, name: "Karışık Mevsim Aranjmanı", price: 520, emoji: "🌸", category: "Aranjman", description: "Mevsimin en taze çiçekleriyle hazırlanır." },
  { id: 6, name: "Pembe Orkide", price: 650, emoji: "🌺", category: "Orkide", badge: "Yeni", description: "Saksıda, uzun ömürlü pembe orkide." },
  { id: 7, name: "Beyaz Orkide", price: 700, emoji: "🪷", category: "Orkide", description: "Şık seramik saksıda beyaz orkide." },
  { id: 8, name: "Sukulent Saksı", price: 180, emoji: "🌵", category: "Saksı", description: "Bakımı kolay, mini sukulent." },
];