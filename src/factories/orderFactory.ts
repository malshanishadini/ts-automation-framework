// src/factories/orderFactory.ts
import type { Order } from '../types/order.types.js';
import { createProduct } from '../factories/productFactory.js';
type OrderOverrides = Partial<Order>;
export function createOrder(overrides: OrderOverrides = {}): Order {
    return {
        id: 'order-001',
        user: "Standard User1",
        products: [createProduct({ name: "Sauce Labs Backpack" }), createProduct({ name: "Sauce Labs Bike Light" })],
        totalPrice: 29.99,
        status: 'Processing',
        ...overrides
    };
}