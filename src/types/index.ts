export interface Category {
  id: number;
  name: string;
}

export interface Activity {
  category: string;
  name: string;
  calories: number;
}