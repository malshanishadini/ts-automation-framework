// src/utils/printUtils.ts
import type { TestUser } from '../types/user.types.js';
import type { Product } from '../types/product.types.js';

export function printUserScenario(user: TestUser): void {
    console.log(`Testing login for ${user.username} as ${user.role}`);
}

export function printProductSummary(product: Product): void {
    console.log(`${product.name} costs ${product.price}`);
}
