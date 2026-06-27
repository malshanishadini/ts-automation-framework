// src/index.ts
import type { Product } from './types/product.types.js';
import { lockedUser, standardUser } from './test-data/users.js';
import { createUser } from './factories/userFactory.js';
import { createProduct } from './factories/productFactory.js';
import { printUserScenario, printProductSummary} from './utils/printUtils.js';


const adminUser = createUser({
    username: 'admin_user',
    role: 'admin'
});

const defaultUser = createUser({});

const users = [standardUser, lockedUser, adminUser, defaultUser];

for (const user of users) {
    printUserScenario(user);
}


const products: Product[] = [
    createProduct(),
    createProduct({ id: 'product-002', name: 'Sauce Labs Bike Light', price: 9.99, category: 'bike-light' }),
    createProduct({ id: 'product-003', name: 'Sauce Labs Bolt T-Shirt', price: 15.99, category: 't-shirt' })
];

for (const product of products) {
    printProductSummary(product);
}
