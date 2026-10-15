# Assignment-07: Personal Expense Tracker

A simple, responsive **Personal Expense Tracker** web application built using **React** and **Vite** for Full Stack Development Assignment 7.

## Features
- **Expense Summary:** Real-time calculation of Total Expenses (in ₹) using `reduce()` and total count.
- **Add Expense Form:** Add expenses with Name, Amount, and Category (Food, Travel, Shopping, Education, Other) with validation.
- **Expense List:** Responsive table rendering expenses using `map()` and deletion using `filter()`.
- **Pure CSS:** Clean, modern light theme with responsive mobile design without external UI libraries.

## Project Structure
```text
Assignment-07/
├── expense-tracker/
│   ├── src/
│   │   ├── App.jsx        # Main Expense Tracker Component
│   │   ├── App.css        # Responsive styling and modern UI
│   │   ├── index.css      # Base CSS resets
│   │   └── main.jsx       # React application entry point
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
