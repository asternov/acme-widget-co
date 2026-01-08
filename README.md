# 🛒 Acme Widget Co — Basket Proof of Concept

This project is a proof of concept for a simple sales basket system built with **TypeScript** and **React**.

It demonstrates clean separation of business logic and UI, flexible pricing rules, delivery calculation, and promotional offers.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **npm 9+**

Check versions:
```bash
node -v
npm -v
```

---

### Installation

```bash
npm install
```

---

### Run the application

```bash
npm run dev
```

After startup, open in browser:

```
http://localhost:5173
```

---

## 🧩 Implemented Functionality

### Products
| Code | Name | Price |
|-----|------|-------|
| R01 | Red Widget | $32.95 |
| G01 | Green Widget | $24.95 |
| B01 | Blue Widget | $7.95 |

---

### Basket Features
- Add products to basket
- Remove products from basket (one item at a time)
- Display quantity of each product
- Automatic recalculation on every change

---

### Special Offer
- **Buy one Red Widget, get the second at 50% off**
- Discount is applied automatically
- Supports multiple pairs (e.g. 4 red widgets → 2 discounts)

---

### Delivery Rules
| Basket Total (after discount) | Delivery Cost |
|-------------------------------|---------------|
| Under $50 | $4.95 |
| $50 – $89.99 | $2.95 |
| $90 or more | Free |

---

### Price Calculation Order
1. Calculate subtotal
2. Apply discounts
3. Calculate delivery cost
4. Return final total

---

## 🧪 Example Baskets (Verified)

| Products | Total |
|--------|-------|
| B01, G01 | $37.85 |
| R01, R01 | $54.37 |
| R01, G01 | $60.85 |
| B01, B01, R01, R01, R01 | $98.27 |

---

## 🧠 Architecture Overview

```
src/
├── core/
│   ├── Basket.ts
│   ├── products.ts
│   ├── delivery.ts
│   └── offers.ts
├── App.tsx
└── main.tsx
```

### Key Principles
- Business logic is independent from UI
- Easy to add new offers or delivery rules
- Readable, maintainable TypeScript
- Minimal but functional UI

---

## 🔧 Possible Extensions
- Unit tests (Jest / Vitest)
- Multiple simultaneous offers
- Persistent basket (localStorage)
- Backend / API version
- Improved UI styling

---

## 📄 Notes
This project is intended as a technical proof of concept, not a production-ready checkout system.
