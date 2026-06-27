// src/types/product.types.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'backpack' | 'bike-light' | 't-shirt';
}

