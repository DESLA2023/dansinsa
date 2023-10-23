export interface IClothes {
  id: number;
  name: string;
  brand: string;
  category: ClothesCategory;
  tags: string[];
  size: ClothesSize;
  price: number;
  image: string;
  vtonImage: string | null;
  description: string;
}

export enum ClothesCategory {
  TSHIRT = 'T-shirt',
  SHIRT = 'Shirt',
  PANTS = 'Pants',
  SHOES = 'Shoes',
  ACCESSORIES = 'Accessories',
}

export enum ClothesSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}
