# Conference Expense Planner

## Short Description

Conference Expense Planner is a modern web application designed to help users efficiently plan and manage expenses for conferences or events. It allows users to select meals, venue rooms, and add-ons, providing a real-time calculation of total costs and a seamless, interactive experience.

---

## Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Package Management:** npm

---

## Features

- **Meal Selection:** Choose from a variety of meal options for your event attendees.
- **Venue Room Selection:** Select and manage different types of rooms with capacity and cost details.
- **Add-on Selection:** Add extra services or devices (e.g., projectors, microphones) with quantity controls.
- **Real-time Cost Calculation:** Instantly see the total cost update as you make selections.
- **Responsive UI:** Clean, modern, and mobile-friendly interface.
- **Popup Summary:** View a detailed summary of all selected options before finalizing.

---

## Installation Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/conference-expense-planner.git
   cd conference-expense-planner
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

---

## Usage Instructions

- **Select Meals:** Navigate to the meals tab and choose meal options for your attendees.
- **Select Venue Rooms:** Go to the venue tab, select room types, and adjust quantities as needed.
- **Add Add-ons:** In the add-ons tab, pick extra devices or services and set their quantities.
- **View Summary:** Click the summary popup to review all selections and the total cost.
- **Switch Tabs:** Your selections persist as you navigate between tabs.

---

## Project Structure

```
Conference Expense Planner/
├── public/
│   └── images/           # Static images for UI
├── src/
│   ├── components/       # React components (MealSelection, RoomSelection, AddonSelection, etc.)
│   ├── assets/           # Static assets (e.g., SVGs)
│   ├── utils.js          # Utility functions and data
│   ├── App.jsx           # Main app entry
│   ├── main.jsx          # React DOM entry point
│   └── index.css         # Global styles (Tailwind)
├── index.html            # HTML template
├── package.json          # Project metadata and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## Contributors

- [Arvind Kumar]

---

## License

MIT

> _Feel free to customize this README with your project details, screenshots, and deployment information!_
