export type BrandItems = {
  brandName: string;
  categories: Category[];
  items: Item[];
};

export type Category = {
  id: string; 
  code: string;
  name: string;
};

export type Item = { 
  id: string; 
  code: string; 
  name: string;
  src: string; 
  brand: string,
  category: Category;
};

export type Brand = {
  id: string;
  code: string;
  name: string;
  src: string;
  categories?: Category[];
};