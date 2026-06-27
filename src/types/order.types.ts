// src/types/order.types.ts

import type { Product } from "./product.types.js";

export interface Order {
    id: string;
    user: string;
    products: Product[];
    totalPrice: number;
    status: 'Processing' | 'Shipped' | 'Delivered';
}

