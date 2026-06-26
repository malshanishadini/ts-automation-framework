// src/types/user.types.ts
export interface TestUser {
    username: string;
    password: string;
    role: 'customer' | 'admin' | 'blocked';
}

export type UserOverrides = Partial<TestUser>;