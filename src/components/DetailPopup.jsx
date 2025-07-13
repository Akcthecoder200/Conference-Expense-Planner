import React from "react";

function DetailPopup({
  onClose,
  selectedMeals,
  selectedRooms,
  selectedAddons,
  peopleCount,
}) {
  const allItems = [
    ...selectedRooms.map(({ Roomdetail, count }) => ({
      name: Roomdetail.Roomtype,
      unitCost: parseFloat(Roomdetail.Roomcost),
      quantity: count,
    })),
    ...selectedAddons.map(({ addon, count }) => ({
      name: addon.Devicetype,
      unitCost: parseFloat(addon.Devicecost),
      quantity: count,
    })),
    ...selectedMeals.map((meal) => ({
      name: meal.type,
      unitCost: parseFloat(meal.cost),
      quantity: peopleCount,
    })),
  ];

  const grandTotal = allItems.reduce((acc, item) => {
    const qty = typeof item.quantity === "number" ? item.quantity : parseInt(item.quantity);
    return acc + item.unitCost * qty;
  }, 0);

  const renderRow = (item, nameKey, costKey, quantity) => {
    const unitCost = parseFloat(item[costKey]);
    const quantityLabel = typeof quantity === "number" ? quantity : quantity;
    const total =
      typeof quantity === "number"
        ? `$${(unitCost * quantity).toFixed(2)}`
        : `$${(unitCost * parseInt(quantity)).toFixed(2)}`;

    return (
      <tr key={item[nameKey]}>
        <td className="border px-4 py-2">{item[nameKey]}</td>
        <td className="border px-4 py-2">${unitCost.toFixed(2)}</td>
        <td className="border px-4 py-2">{quantityLabel}</td>
        <td className="border px-4 py-2">{total}</td>
      </tr>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[800px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Selected Items Summary
        </h2>
        <h2 className="text-xl font-semibold mb-6 text-center">
          Total Cost For The Event: ${grandTotal.toFixed(2)}
        </h2>

        <table className="table-auto w-full border border-gray-300 text-left mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Unit Cost</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {/* Rooms */}
            {selectedRooms.map(({ Roomdetail, count }) =>
              renderRow(Roomdetail, "Roomtype", "Roomcost", count)
            )}

            {/* Addons */}
            {selectedAddons.map(({ addon, count }) =>
              renderRow(addon, "Devicetype", "Devicecost", count)
            )}

            {/* Meals */}
            {selectedMeals.map((meal) =>
              renderRow(meal, "type", "cost", peopleCount)
            )}
          </tbody>
        </table>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPopup;
