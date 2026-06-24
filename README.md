# Mint Wise

Mint Wise is a clean, simple, light-themed, and mobile-ready personal finance tracker built with React 19 and Tailwind CSS v4. It features a responsive mobile web-app viewport, dynamic dashboard stats, and sorting filters.

## Key Features

- **Mobile Web-App Viewport:** Designed mobile-first. Takes up the full height/width on mobile devices, and displays inside a centered mock card container on desktop screens.
- **Income & Expense Tracking:** Tag entries as income or expenses. Income items show up with a green `+` tag, while expenses show up with a `-` tag.
- **Net Balance Metrics:** A dashboard showing Net Balance (Income - Expense), Total Income, and Total Expenses.
- **Monthly Budget Limits:** Set a spending limit directly inline. A color-coded progress bar adjusts from green to orange to pulsing red as you approach your budget.
- **Wallet Allocation Distribution:** View the percentage of expenses allocated to Cash, Bank, Credit Card, and Savings accounts.
- **Inline Sort & Search:** Sort entries by Date (Newest/Oldest) or Amount (Highest/Lowest) and search descriptions instantly.
- **Custom Transaction Dates:** Date selectors let you add or edit transactions for past or future dates.
- **Slide-up Bottom Sheets:** Dialog boxes slide up smoothly from the bottom on mobile screens, and center as modal cards on desktop viewports.

## Tech Stack

- **Framework:** React 19
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** React Icons (Tabler, FontAwesome, Feather, Material Design)
- **Routing:** React Router v7

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Dev Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

