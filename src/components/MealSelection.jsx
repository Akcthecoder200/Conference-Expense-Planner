import React from "react";
import { mealDetails } from "../utils";

function MealSelection({
  setPeopleCount,
  setSelectednMeals,
  peopleCount,
  selectedMeals,
}) {
  const calculateTotal = () => {
    let total = 0;
    selectedMeals.map((meal) => {
      total += meal.cost;
    });
    return total * peopleCount;
  };
  const handlecheckboxchange = (meal) => {
    setSelectednMeals((prev) => {
      if (prev.includes(meal)) {
        return prev.filter((m) => m != meal);
      } else {
        return [...prev, meal];
      }
    });
  };
  console.log("selectedMeals:", selectedMeals);
  return (
    <div>
      <h1 className="text-2xl  font-bold text-center my-4 ">Meal Selection</h1>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Number of People */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Number of People:
          </label>
          <input
            type="number"
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
          />
        </div>

        {/* Meal Selection */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {mealDetails.map((meal) => (
            <div key={meal.type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedMeals.includes(meal)}
                onChange={() => handlecheckboxchange(meal)}
                className="h-5 w-5 text-blue-600"
              />
              <div>
                <label className="block font-medium capitalize">
                  {meal.type.replace(/([A-Z])/g, " $1")}
                </label>
                <p className="text-gray-600">${meal.cost}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Cost */}
        <div className="text-center bg-gray-100 py-3 rounded-lg text-xl font-semibold">
          Total Cost: ${calculateTotal()}
        </div>
      </div>
    </div>
  );
}

export default MealSelection;
