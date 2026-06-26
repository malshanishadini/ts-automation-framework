// src/utils/printUtils.ts
import type { TestUser } from '../types/user.types.js';

export function printUserScenario(user: TestUser): void {
    console.log(`Testing login for ${user.username} as ${user.role}`);
}