// src/factories/productFactory.ts
import type { Product } from '../types/product.types.js';
type ProductOverrides = Partial<Product>;
export function createProduct(overrides: ProductOverrides = {}): Product {
    return {
        id: 'product-001',
        name: 'Sauce Labs Backpack',
        price: 29.99,
        category: 'backpack',
        ...overrides
    };
}