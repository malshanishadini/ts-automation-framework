# TypeScript Automation Framework

A modern TypeScript automation framework demonstrating clean architecture, strong typing, modular design, and modern Node.js ESM (ECMAScript Modules) configuration.

This project was created to learn TypeScript fundamentals and automation framework design patterns used in real-world QA and software development projects.

---

## Project Structure

```text
src/
├── config/
│   └── environment.ts
├── factories/
│   └── userFactory.ts
├── test-data/
│   └── users.ts
├── types/
│   └── user.types.ts
├── utils/
│   └── printUtils.ts
└── index.ts

package.json
tsconfig.json
```

---

## Technologies Used

- TypeScript
- Node.js
- ESM (ECMAScript Modules)
- tsx
- npm

---

## Features

- Strong TypeScript typing
- Factory Pattern implementation
- Test data management
- Utility functions
- Environment configuration
- Modular project structure
- Modern ESM support

---

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Install Dependencies

```bash
npm install
```

### Run in Development Mode

```bash
npm run dev
```

### Type Check

```bash
npm run typecheck
```

### Build Project

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

### Clean Build Files

```bash
npm run clean
```

---

## Available Scripts

| Script | Description |
|----------|-------------|
| `npm run dev` | Run TypeScript application using tsx |
| `npm run typecheck` | Check TypeScript compilation errors |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled JavaScript from dist folder |
| `npm run clean` | Remove build output |

---

## Example Output

```text
Testing login for standard_user as customer
Testing login for locked_out_user as blocked
Testing login for admin_user as admin
```

---

## Learning Objectives

This project demonstrates:

- TypeScript Interfaces
- Type Aliases
- Utility Types (`Partial<T>`)
- Factory Pattern
- Module Imports/Exports
- ESM and NodeNext Configuration
- Clean Project Organization

---

## Future Enhancements

- Playwright Integration
- API Testing Support
- Logging Framework
- Reporting Dashboard
- CI/CD Pipeline
- GitHub Actions

---

## Author

Malsha Nishadini

Learning and building modern TypeScript automation frameworks.
