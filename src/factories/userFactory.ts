// src/factories/userFactory.ts
import { environment } from '../config/environment.js';
import type { TestUser, UserOverrides } from '../types/user.types.js';

export function createUser(overrides: UserOverrides = {}): TestUser {
    return {
        username: 'standard_user',
        password: environment.defaultPassword,
        role: 'customer',
        ...overrides
    };
}