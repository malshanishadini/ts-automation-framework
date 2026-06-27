// src/utils/printUtils.ts
import type { TestUser } from '../types/user.types.js';
import type { Product } from '../types/product.types.js';
import type { Order } from '../types/order.types.js';

export function printUserScenario(user: TestUser): void {
    console.log(`Testing login for ${user.username} as ${user.role}`);
}

export function printProductSummary(product: Product): void {
    console.log(`${product.name} costs ${product.price}`);
}

export function printOrderSummary(order: Order): void {
    console.log(`Order ${order.id} for ${order.user}:`);
    order.products.forEach(printProductSummary);
    console.log(`Total: $${order.totalPrice}`);
}


