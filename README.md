# 🚀 Holberton School - Web React Development

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Webpack](https://img.shields.io/badge/Webpack-5.88.2-brightgreen.svg)](https://webpack.js.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.27.0-purple.svg)](https://eslint.org/)
[![Jest](https://img.shields.io/badge/Jest-29.7.0-red.svg)](https://jestjs.io/)

> 🎓 **Holberton School Project** - Advanced TypeScript and React learning for modern web development

## 📋 Table of Contents

- [📖 Description](#-description)
- [🏗️ Project Structure](#️-project-structure)
- [🛠️ Technologies](#️-technologies)
- [📚 TypeScript Projects](#-typescript-projects)
- [⚙️ Installation and Configuration](#️-installation-and-configuration)
- [🚀 Usage](#-usage)
- [📝 Available Scripts](#-available-scripts)
- [🧪 Testing](#-testing)
- [👥 Contributing](#-contributing)

## 📖 Description

This repository contains a series of TypeScript projects designed to master advanced concepts of modern web development. Each task explores specific aspects of TypeScript, from basics to complex architectures with namespaces and declaration merging.

### 🎯 Learning Objectives

- ✅ Mastery of **TypeScript interfaces** and their extension
- ✅ Implementation of **classes** and **inheritance**
- ✅ Usage of **advanced types** (union, literal, guards)
- ✅ Architecture with **namespaces** and **modules**
- ✅ **Declaration merging** for extensibility
- ✅ Professional **Webpack** and **ESLint** configuration

## 🏗️ Project Structure

```
holbertonschool-web_react/
├── 📄 README.md                     # This file
└── 📁 TypeScript/                   # TypeScript projects
    ├── 📁 task_0/                   # Basic configuration
    ├── 📁 task_1/                   # Interfaces and classes
    ├── 📁 task_2/                   # Advanced types and employees
    ├── 📁 task_3/                   # Ambient types and declarations
    ├── 📁 task_4/                   # Namespaces and subjects
    └── 📁 task_5/                   # Brand nominal typing
```

## 🛠️ Technologies

### Frontend & Build Tools
- **TypeScript** `4.9.5` - Main language with static typing
- **Webpack** `5.88.2` - Bundler and development server
- **HTML Webpack Plugin** `5.5.3` - Automatic HTML generation
- **Clean Webpack Plugin** `4.0.0` - Build cleanup

### Code Quality
- **ESLint** `9.27.0` - Linting and code standards
- **@typescript-eslint** `8.33.0` - TypeScript-specific rules
- **Prettier** - Automatic code formatting

### Testing
- **Jest** `29.7.0` - Testing framework
- **ts-jest** `29.1.1` - TypeScript support for Jest

### Development Tools
- **ts-loader** `9.4.4` - TypeScript compilation for Webpack
- **fork-ts-checker-webpack-plugin** `9.0.0` - Parallel type checking
- **webpack-dev-server** `4.15.1` - Development server with hot reload

## 📚 TypeScript Projects

### 🔧 Task 0 - Basic Configuration
**Files:** `task_0/`
```typescript
// Initial Webpack + TypeScript + ESLint configuration
// Entry point for development environment
```

**Features:**
- Complete Webpack configuration
- ESLint with TypeScript rules
- Development server
- Source maps for debugging

---

### 👤 Task 1 - Interfaces and Extensions
**Files:** `task_1/js/main.ts`
```typescript
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
```

**Concepts covered:**
- 🔹 **TypeScript interfaces** with optional properties
- 🔹 **Interface extension** with `extends`
- 🔹 **Index signatures** for dynamic properties
- 🔹 **Typed functions** with interfaces
- 🔹 **Classes** with typed constructors

---

### 🏢 Task 2 - Advanced Types and Employees
**Files:** `task_2/js/main.ts`
```typescript
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  // ...
}

function createEmployee(salary: number | string): Director | Teacher {
  return salary >= 500 || typeof salary === 'string' 
    ? new Director() 
    : new Teacher();
}
```

**Concepts covered:**
- 🔹 **Interfaces** to define contracts
- 🔹 **Classes** implementing interfaces
- 🔹 **Union types** (`number | string`)
- 🔹 **Type guards** and type predicates
- 🔹 **String literal types** for specific values

---

### 🌐 Task 3 - Ambient Types and Declarations
**Files:** `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`
```typescript
// interface.ts
export type RowID = number;
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// crud.d.ts
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
```

**Concepts covered:**
- 🔹 **Ambient types** with `.d.ts` files
- 🔹 **Modules** and exports/imports
- 🔹 **Type aliases** with `type`
- 🔹 **Triple slash directives** (`/// <reference path="..." />`)
- 🔹 **Declarations** for JavaScript libraries

---

### 🎓 Task 4 - Namespaces and Modular Architecture
**Files:** `task_4/js/subjects/`
```typescript
// Teacher.ts
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}

// Cpp.ts
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number; // Declaration merging
  }
  
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    
    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC > 0 
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }
  }
}
```

**Architecture:**
```
task_4/js/subjects/
├── Teacher.ts      # Base interface
├── Subject.ts      # Base class
├── Cpp.ts         # C++ specialization
├── React.ts       # React specialization
└── Java.ts        # Java specialization
```

**Concepts covered:**
- 🔹 **Namespaces** for code organization
- 🔹 **Declaration merging** to extend interfaces
- 🔹 **Class inheritance** with `extends`
- 🔹 **Modular architecture** by subjects
- 🔹 **Triple slash references** between files

---

### 💎 Task 5 - Brand Nominal Typing
**Files:** `task_5/js/main.ts`
```typescript
interface MajorCredits {
  credits: number;
}

interface MinorCredits {
  credits: number;
}

export function sumMajorCredits(
  subject1: MajorCredits, 
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  };
}
```

**Concepts covered:**
- 🔹 **Brand nominal typing** to distinguish similar types
- 🔹 **Enhanced type safety**
- 🔹 **Pure functions** with specific types
- 🔹 **Interfaces** to create distinct types

## ⚙️ Installation and Configuration

### Prerequisites
```bash
# Node.js (version 16+ recommended)
node --version  # v16.x.x or higher

# npm or yarn
npm --version   # 8.x.x or higher
```

### Installation
```bash
# Clone the repository
git clone https://github.com/holbertonschool/holbertonschool-web_react.git
cd holbertonschool-web_react/TypeScript

# Install dependencies for each task
cd task_0 && npm install
cd ../task_1 && npm install
cd ../task_2 && npm install
cd ../task_3 && npm install
cd ../task_4 && npm install
cd ../task_5 && npm install
```

### ESLint Configuration (task_2 example)
```javascript
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
```

### Configuration TypeScript
```json
{
  "compilerOptions": {
    "target": "ES5",
    "lib": ["ES6", "DOM"],
    "allowJs": true,
    "checkJs": true,
    "declaration": true,
    "sourceMap": true,
    "outDir": "./dist",
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

## 🚀 Usage

### Development with Hot Reload
```bash
# In any task directory
cd task_X
npm run start-dev
# Automatically opens http://localhost:8080
```

### Production Build
```bash
# Optimized compilation
npm run build
# Generates files in ./dist/
```

### Code Verification
```bash
# Linting
npx eslint js/*.ts

# TypeScript compilation
npx tsc --noEmit
```

## 📝 Available Scripts

| Script | Description | Command |
|--------|-------------|----------|
| **🚀 start-dev** | Development server | `npm run start-dev` |
| **🏗️ build** | Production build | `npm run build` |
| **🧪 test** | Run Jest tests | `npm run test` |
| **🔍 lint** | ESLint verification | `npx eslint js/*.ts` |
| **📊 type-check** | TypeScript verification | `npx tsc --noEmit` |

## 🧪 Testing

### Running tests
```bash
# Unit tests with Jest
npm run test

# Tests with coverage
npm run test -- --coverage

# Watch mode
npm run test -- --watch
```

### Structure des tests
```typescript
// Exemple de test pour task_1
describe('Teacher Interface', () => {
  test('should create teacher with required properties', () => {
    const teacher: Teacher = {
      firstName: 'John',
      lastName: 'Doe',
      fullTimeEmployee: true,
      location: 'London'
    };
    
    expect(teacher.firstName).toBe('John');
    expect(teacher.fullTimeEmployee).toBe(true);
  });
});
```

## 🔧 Configuration Webpack

### Configuration de base (toutes les tâches)
```javascript
module.exports = {
  mode: "development",
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: { transpileOnly: true }
    }]
  },
  
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    open: true,
    port: 8080,
  },
  
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "TypeScript Learning" })
  ]
};
```

## 🚀 Exemples d'Utilisation

### Task 1 - Création d'un Teacher
```typescript
const teacher: Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: 'London',
  contract: false, // Propriété dynamique
};

console.log(printTeacher('Guillaume', 'Salva')); // "G. Salva"
```

### Task 2 - Factory Pattern avec Types
```typescript
const director = createEmployee(1000);    // Director
const teacher = createEmployee(200);      // Teacher

console.log(executeWork(director));       // "Getting to director tasks"
console.log(executeWork(teacher));        // "Getting to work"
```

### Task 4 - Architecture Namespace
```typescript
// Utilisation des classes de sujets
const cpp = new Subjects.Cpp();
const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 5
};

cpp.setTeacher(teacher);
console.log(cpp.getRequirements());       // "Here is the list of requirements for Cpp"
console.log(cpp.getAvailableTeacher());   // "Available Teacher: John"
```

## 🎯 Bonnes Pratiques Appliquées

### 📋 Code Style
- ✅ **Indentation:** 2 espaces (ESLint)
- ✅ **Quotes:** Simple quotes pour strings
- ✅ **Semicolons:** Obligatoires
- ✅ **Trailing commas:** Dans les objets multi-lignes
- ✅ **Type annotations:** Explicites quand nécessaire

### 🏗️ Architecture
- ✅ **Separation of concerns:** Un fichier par responsabilité
- ✅ **Namespaces:** Pour l'organisation modulaire
- ✅ **Interfaces:** Pour définir des contrats clairs
- ✅ **Type guards:** Pour la validation runtime

### 🔒 Type Safety
- ✅ **Strict mode:** `noImplicitAny`, `strictNullChecks`
- ✅ **Declaration merging:** Pour l'extensibilité
- ✅ **Union types:** Pour la flexibilité contrôlée
- ✅ **Brand types:** Pour éviter les erreurs de types similaires

## 📈 Progression d'Apprentissage

| Task | Niveau | Concepts | Difficulté |
|------|--------|----------|------------|
| **Task 0** | 🟢 Débutant | Configuration | ⭐ |
| **Task 1** | 🟢 Débutant | Interfaces, Classes | ⭐⭐ |
| **Task 2** | 🟡 Intermédiaire | Types avancés, Guards | ⭐⭐⭐ |
| **Task 3** | 🟡 Intermédiaire | Modules, Types ambiants | ⭐⭐⭐ |
| **Task 4** | 🔴 Avancé | Namespaces, Declaration merging | ⭐⭐⭐⭐ |
| **Task 5** | 🔴 Avancé | Brand nominal typing | ⭐⭐⭐⭐ |

## 🐛 Résolution de Problèmes

### Erreurs Communes

#### ❌ "Cannot find name 'Teacher'"
```bash
# Solution: Ajouter les références
/// <reference path="Teacher.ts" />
```

#### ❌ "Property 'teacher' does not exist"
```bash
# Solution: Export des classes dans namespaces
export class Subject { ... }
```

#### ❌ Erreurs de build Webpack
```bash
# Nettoyer et réinstaller
rm -rf node_modules dist
npm install
npm run build
```

## 👥 Contribution

### Structure des commits
```bash
# Format recommandé
git commit -m "feat(task_X): implement feature description"
git commit -m "fix(task_X): resolve issue description" 
git commit -m "docs: update README with examples"
```

### Standards de code
1. **ESLint** doit passer sans erreurs
2. **TypeScript** compilation sans erreurs
3. **Tests** doivent passer (quand présents)
4. **Documentation** mise à jour si nécessaire

---

## 📞 Support

### Ressources utiles
- 📚 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- 🛠️ [Webpack Documentation](https://webpack.js.org/concepts/)
- 🎯 [ESLint TypeScript Rules](https://typescript-eslint.io/rules/)
- 🧪 [Jest Testing Framework](https://jestjs.io/docs/getting-started)

### Contact
- 📧 **École:** Holberton School
- 🌐 **Projet:** Web React Development
- 📅 **Année:** 2025

---

<div align="center">

**🎓 Holberton School Educational Project - TypeScript & React Development**

*Progressive learning of advanced modern web development concepts*

[![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![Holberton School](https://img.shields.io/badge/School-Holberton-red.svg)](https://www.holbertonschool.com/)

</div>