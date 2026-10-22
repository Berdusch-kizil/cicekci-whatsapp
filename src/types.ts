export type Category = "Buket" | "Aranjman" | "Orkide" | "Saksı";

export interface Flower {
  id: number;
  name: string;
  price: number;
  emoji: string;
  description: string;
  category: Category; 
  badge?: string; 
}