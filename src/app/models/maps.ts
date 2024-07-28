export interface DinningMap {
  id: number;
  name: string;
  tables: Array<Table>;
}

interface Table {
  id: number;
  position: number;
  products: Array<MenuItem>;
  diners: number;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  ingredients: Array<Ingredient>;
}

interface Ingredient {
  id: number;
  name: string;
}
