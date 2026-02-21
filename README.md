# 🛒 FreshCart - Modern E-commerce Platform

FreshCart is a feature-rich, high-performance e-commerce application built with **Next.js 15+**, **React 19**, and **TanStack Query**. It provides a seamless shopping experience with real-time data synchronization, robust state management, and a premium UI/UX.

---

## ✨ Key Features

- **🔐 Secure Authentication**:
  - Login & Registration with JWT.
  - Multi-step **Forget Password** flow (Email -> Code Verification -> New Password).
  - Client-side auth state with **Zustand**.
- **🛍️ Product Discovery**:
  - Dynamic product listings and detailed views.
  - Categorized browsing and brand filtering.
- **🛒 Shopping Cart & Wishlist**:
  - Real-time cart updates and persistence.
  - Seamless wishlist management.
  - Powered by **TanStack Query** for zero-latency UI feel.
- **📦 Checkout Flow**:
  - Streamlined checkout process with order summary.
- **📱 Premium Responsive Design**:
  - Fully responsive UI built with **Tailwind CSS v4**.
  - Glassmorphism effects and smooth micro-animations.
- **🛡️ Route Protection**:
  - Global middleware for secure route management.
  - Automatic redirects for unauthenticated users.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Core**: [React 19](https://react.dev/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sahermohamed979/ecommerce.git
   cd ecommerce
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

- `src/app/`: Next.js App Router folders and layouts.
- `src/featuers/`: Feature-sliced architecture (Cart, Wishlist, Auth, Products, etc.).
- `src/components/`: Shared UI components (Navbar, Footer, etc.).
- `src/hooks/`: Custom React hooks for shared logic.
- `src/providers/`: Context providers (QueryClient, Auth).
- `src/utils/`: Helper functions and shared utilities.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by [Saher Mohamed](https://github.com/sahermohamed979)
