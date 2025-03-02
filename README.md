# Lafia Super Admin

## Introduction

This is a repo containing Lafia's  super administrative applications. It includes robust and intuitive dashboards built with Next.js, TypeScript, and modern web technologies to effectively manage various aspects of the Lafia healthcare system.

## What's inside?

### Apps

- `admin`: The Lafia Admin Application for managing subscriptions, products, staff, and system settings
- `staff`: The Lafia Staff Portal for healthcare staff operations
- `@lafiacore/ui`: A shared React component library used by both applications
- `@repo/eslint-config`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: Shared TypeScript configurations

### Key Features

- payment Management: Create, view, update, and manage product subscriptions
- Product Management: Handle integrations with OpenMRS, OpenELIS, and Odoo
- Organisational Management: Manage admin and staff roles, permissions, and details
- Settings Management: Configure application settings and preferences



### Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **UI Components**: [Carbon Design System for React](https://react.carbondesignsystem.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: yarn
- **Monorepo Tools**: Turborepo

## Getting Started

### Prerequisites

- Node.js 18.x or later
- yarn 4.x or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/LafiaEMR/lafiacore-esm-super.git
cd lafiacore-esm-super
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:
   Create `.env.local` files in each app directory and configure the necessary variables:

```plaintext
# apps/admin/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# apps/staff/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Development

To develop all apps and packages:

```bash
yarn dev
```

The applications will be available at:

- http://localhost:3000


To develop  app:

```bash
yarn run dev
```


### Build

To build app:

```bash
yarn build
```

## Project Structure

```plaintext
.
├── app
├── packages
├── package.json
```


## Contributing

To contribute:

1. Clone the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## Useful Links

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Carbon Design System](https://www.carbondesignsystem.com/)
