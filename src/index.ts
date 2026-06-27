// src/index.ts
import type { Product } from './types/product.types.js';
import type { Order } from './types/order.types.js';
import { lockedUser, standardUser } from './test-data/users.js';
import { createUser } from './factories/userFactory.js';
import { createProduct } from './factories/productFactory.js';
import { createOrder } from './factories/orderFactory.js';
import { printUserScenario, printProductSummary, printOrderSummary} from './utils/printUtils.js';


const adminUser = createUser({
    username: 'admin_user',
    role: 'admin'
});

const defaultUser = createUser({});

const users = [standardUser, lockedUser, adminUser, defaultUser];

for (const user of users) {
    printUserScenario(user);
}
console.log("\n");


const products: Product[] = [
    createProduct(),
    createProduct({ id: 'product-002', name: 'Sauce Labs Bike Light', price: 9.99, category: 'bike-light' }),
    createProduct({ id: 'product-003', name: 'Sauce Labs Bolt T-Shirt', price: 15.99, category: 't-shirt' })
];

for (const product of products) {
    printProductSummary(product);
}
console.log("\n");

const backpack = createProduct();
const bikeLight = createProduct({ id: 'product-002', name: 'Bike Light', price: 9.99, category: 'bike-light' });
const tshirt = createProduct({ id: 'product-003', name: 'T-Shirt', price: 15.99, category: 't-shirt' });

const orders: Order[] = [
    createOrder(),
    createOrder({ id: 'order-002', user: 'Standard User2', products: [backpack], totalPrice: 9.99, status: 'Shipped' }),
    createOrder({ id: 'order-003', user: 'Standard User3', products: [backpack, tshirt], totalPrice: 45.98, status: 'Delivered' })
];

for (const order of orders) {
    printOrderSummary(order);
    console.log("\n");
}


