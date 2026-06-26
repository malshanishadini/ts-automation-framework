// src/test-data/users.ts
import type { TestUser } from '../types/user.types.js';
import { environment } from '../config/environment.js';

export const standardUser: TestUser = {
    username: 'standard_user',
    password: environment.defaultPassword,
    role: 'customer'
};
export const lockedUser: TestUser = {
    username: 'locked_out_user',
    password: environment.defaultPassword,
    role: 'blocked'
};