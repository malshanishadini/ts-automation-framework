// src/index.ts
import { lockedUser, standardUser } from './test-data/users.js';
import { createUser } from './factories/userFactory.js';
import { printUserScenario } from './utils/printUtils.js';

const adminUser = createUser({
    username: 'admin_user',
    role: 'admin'
});

const defaultUser = createUser({});

const users = [standardUser, lockedUser, adminUser, defaultUser];

for (const user of users) {
    printUserScenario(user);
}
