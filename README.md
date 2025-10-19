# Modern Walk - E-Commerce Clothing Store

A modern e-commerce platform for clothing built with Next.js 15, featuring product browsing, filtering, sorting, and shopping cart functionality.

## Setting Up and Running the App

Follow these steps to run the **Modern Walk** application from a local folder:

### 1. Clone the Project from GitHub

Clone the repository from GitHub:

```bash
git clone https://github.com/isurulak/modernwalk-next.git
```

Navigate to the project folder:

```bash
cd modernwalk-next
```

### 2. Install Dependencies
Install all required packages using npm:

```bash
npm install
```

### 3. Development Server
Start the app in development mode with Turbopack for fast refresh:

```bash
npm run dev
```

- Open your browser at [http://localhost:3000](http://localhost:3000)
- Any code changes will automatically reload the app.

### 4. Build and Production Mode
Build the app for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### 5. Linting
Check the code for linting errors:

```bash
npm run lint
```

---

## Notes

- **Built with**: Next.js 15, React 19, TypeScript, Tailwind CSS v4, Zustand, React Query, and shadcn/ui components.
- **Ensure** Node.js >= 20 and npm >= 9 are installed.
- **API**: Product data fetched from [Fake Store API](https://fakestoreapi.com)

---

## Features Implemented

The application includes all features from the assignment guidelines, providing a complete e-commerce shopping experience across multiple pages:

### Home Page
- **Hero Section** - Welcoming banner with call-to-action
  - Complex responsive layout with edge-to-edge image placement
  - Custom CSS calculations for perfect alignment across all screen sizes
- **Category Section** - Three category tiles (New Arrivals, Women's Clothing, Men's Clothing)
  - Clicking a category navigates to Shop page with filter applied
- **Flash Sales Section** - Displays 8 products alternating between Men's and Women's categories
  - Pattern: Men → Women → Men → Women (as per guidelines)

### Shop Page
- **Category Filtering** - Filter products by category via URL parameters
  - Category tiles link to filtered shop views
  - URL updates to enable sharing/bookmarking specific filters
- **Sorting Options** (as per guidelines):
  - Most Popular (by rating count)
  - Best Rating (by rating score)
  - Recent (by product ID)
  - Price: Low to High
  - Price: High to Low
- **Product Grid** - Responsive grid displaying product cards
- **Add to Cart** - Each product card has an "Add to Cart" button

### Product Detail Page
- **Dynamic Routing** - `/product/[id]` for each product
- **Product Gallery** - Image display with product information
- **Size Selection** (Required) - User must select size (S, M, L, XL) before adding to cart
  - Shows error message if size not selected
- **Quantity Control** - Increment/decrement quantity selector
- **Add to Cart** - Adds product with selected size and quantity to cart
- **Product Information** - Title, price, rating, description

### Shopping Cart
- **Cart Counter** - Header displays total number of items in cart
- **Cart Page** - Lists all cart items with:
  - Product image, name, size, price
  - Quantity controls (increment/decrement)
  - Remove button (visible on hover)
- **Order Summary** - Shows:
  - Subtotal
  - Tax (10%)
  - Shipping ($5 flat rate)
  - Grand Total
- **Local Storage Persistence** - Cart data persists across browser sessions

---

## Tech Stack and Rationale

For this **prototype e-commerce platform**, the tech stack was chosen to demonstrate a **scalable design system approach** as required by the assignment, while keeping the implementation practical for a prototype scope:

### Next.js 15 (App Router)
Provides routing and supports SSR/SSG, improving performance and SEO. The App Router enables modern React features and improved developer experience.

### TypeScript
Ensures type safety, reducing runtime errors and improving code maintainability. Essential for demonstrating production-ready code patterns.

### Tailwind CSS v4
- Utility-first CSS framework for rapid UI development
- Highly customizable with design tokens (colors, spacing, typography)
- Better performance with v4's new engine
- Perfect for building design systems with consistent styling
- Chosen over CSS-in-JS for better SSR support and performance

### Design System (Atomic Design)
A key requirement of the assignment was implementing  **reusable components**. The atomic design methodology provides:
- **Atoms** - Basic building blocks (Button, Typography, Input)
- **Molecules** - Composite components (ProductCard, CategoryCard)
- **Organisms** - Complex UI sections (Navbar, Footer, ProductGallery)
- **Scalability** - Easy to maintain and extend as the project grows
- **Consistency** - Unified design language across all pages

### Zustand (State Management)
- Lightweight state management for cart functionality
- Simpler than Redux for prototype scope
- Built-in persistence middleware for localStorage
- Demonstrates proper state management patterns

### React Query (@tanstack/react-query)
- Powerful data fetching and caching library
- Handles loading states, error states, and cache invalidation
- Reduces boilerplate compared to manual fetch with useState/useEffect
- Shows best practices for API integration

### shadcn/ui
- Collection of re-usable components built with Radix UI primitives
- Full control over styling (not a component library)
- Copy-paste approach allows customization
- Accessibility built-in
- Works seamlessly with Tailwind CSS and design system approach

### Native Fetch API
Preferred over Axios for better integration with Next.js features like SSR/SSG and lighter bundle size.

---

## Project Architecture and Best Practices Followed

### Design System (Atomic Design)

Implemented in `src/designSystem/` as a pure presentation layer with no business logic.

**Atoms** → Button, Typography, Input, Image, Icon, Link, Section, Select

**Molecules** → ProductCard, CategoryCard, IconButton, SectionTitle, Rating, QuantitySelector, SizeSelector, CartCard

**Organisms** → Navbar, Footer, ProductGallery, OrderSummary, PageTitle, BreadcrumbSection

**Flow:**
```
Atoms → Molecules → Organisms → Features → Pages
```

### Feature-Based Architecture

Features are self-contained modules with their own components, hooks, and services.

**Example:** `features/shop/` contains:
- `components/ShopPage/`
- `hooks/useShopProducts.ts`

**Example:** `features/product/` contains:
- `components/ProductPage/`
- `hooks/useProductDetail.ts`

**Example:** `features/home/` contains:
- `components/HeroSection/`, `CategorySection/`, `FlashSalesSection/`
- `hooks/useFlashSales.ts`

This modularity ensures new features can be added without affecting existing code.

**Note:** Next.js `app/` folders are only used for Next.js-specific routing. All feature logic lives in `features/` directory.

### Core Layer

Cross-cutting concerns live in `core/` rather than a "shared" folder:

**Examples:**
- `core/services/productService.ts` - Product API service layer
- `core/store/cartStore.ts` - Zustand cart store
- `core/types/product.ts` - Shared TypeScript types
- `lib/apiClient.ts` - Base API client for Fake Store API
- `lib/providers.tsx` - React Query provider setup

### API Flow

**Architecture:**
```
Component → Hook → Service → API Client → Backend
```

**Example Flow:**
1. **Component** - `ShopPage` displays products
2. **Hook** - `useShopProducts()` manages data fetching with React Query
3. **Service** - `productService.getProductsByCategory()` handles business logic
4. **API Client** - `apiClient<T>()` makes HTTP requests
5. **Backend** - Fake Store API returns product data

**Benefits:**
- **Single source of truth** for API calls
- **Consistent error handling** across the app
- **Easy to add logging/monitoring** at the API client level
- **Testable** - each layer can be tested independently

---

## Implementation Highlights

### Hero Section - Complex Responsive Layout

The Hero section required careful attention to achieve the Figma design, particularly for the image placement that extends to the screen edge. The implementation approach:

1. **Container Structure**
   - Outer container expands to full viewport width
   - Left and right padding applied for content alignment
   - Two-column grid layout for content and image sections

2. **Edge-to-Edge Image Placement**
   - Next.js `Image` component wrapped in an absolutely positioned container
   - Container positioned relative to its parent column
   - Fixed height applied to match Figma design specifications
   - Width calculated dynamically using CSS `calc()` function:
     ```
     width = (viewport width / 2) - (column gap / 2) - (scrollbar offset)
     ```

3. **Responsive Design**
   - Custom calculations ensure the image aligns perfectly with the screen edge
   - Layout remains stable across all desktop viewport sizes
   - No UI breaking even at extreme screen widths

This approach demonstrates careful consideration of layout challenges and CSS precision to match the design specifications exactly.

---

## AI Usage

After two days of developing the prototype, I realized that using AI tools was allowed as the assignment expected to demonstrate our actual skills. I initially missed this guideline as it was at the bottom of the PDF, and typically AI usage is accepted for take-home assessments. However, when I realized the situation, it was not practical to start from scratch again, although this was completely my oversight.

### How AI Was Used

My AI usage was not a blind reliance on generated code. Instead, I used Claude Code strategically for:

- **Scaffolding repetitive work** - Creating consistent file structures and boilerplate code
- **Architecture setup** - Generating empty component skeletons following my defined architecture patterns
- **Speed optimization** - Accelerating development of standard implementations
- **Non-core components** - Implementing components not strictly mentioned in the assessment (e.g., Breadcrumb component, Footer links) while instructing the AI to follow my established patterns

### What AI Didn't Do

The following aspects demonstrate my architectural knowledge and decision-making:

- **All architectural decisions** - Design system structure, feature-based organization, API flow patterns
- **Complex implementations** - Hero section layout calculations, responsive design solutions
- **Component composition** - How atoms, molecules, and organisms interact and combine
- **Core feature logic** - Product filtering/sorting implementation, cart state management

The implementation showcases solutions that require deeper architectural understanding beyond what someone could achieve without in-depth knowledge of scalable frontend architecture patterns.

---

## Project Structure

```
modernwalk-next/
├── public/                      # Static assets (images)
├── src/
│   ├── app/                     # Next.js App Router (routing only)
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Home page
│   │   ├── shop/               # Shop page route
│   │   ├── product/[id]/       # Product detail route
│   │   └── cart/               # Cart page route
│   ├── designSystem/            # Atomic design components
│   │   ├── atoms/              # Button, Typography, Input, etc.
│   │   ├── molecules/          # ProductCard, CategoryCard, etc.
│   │   ├── organisms/          # Navbar, Footer, etc.
│   │   ├── primitives/         # shadcn/ui base components
│   │   └── tokens/             # Design tokens (colors, spacing)
│   ├── features/               # Feature-based modules
│   │   ├── home/               # Home page feature
│   │   ├── shop/               # Shop page feature
│   │   ├── product/            # Product detail feature
│   │   └── cart/               # Cart feature
│   ├── core/                   # Cross-cutting concerns
│   │   ├── services/           # API services
│   │   ├── store/              # Zustand stores
│   │   └── types/              # Shared TypeScript types
│   └── lib/                    # Utilities and providers
│       ├── apiClient.ts        # Base API client
│       ├── providers.tsx       # React Query provider
│       └── utils.ts            # Utility functions
├── package.json
└── README.md
```

---

## Note

You might notice some spacing issues in the implementation in some parts of the application since the time was not enough to make some parts perfect. However, those are easily fixable since the foundation of the layouts are well architectured and will not need any structural change in the elements.

---


**Repository**: https://github.com/isurulak/modernwalk-next
