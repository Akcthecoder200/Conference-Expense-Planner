import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import AddonCard from "./AddonCard";
import { addonDetails } from "../utils";

function AddonSelection({
  selectedAddons,
  setSelectedAddons,
  addonCounts,
  setAddonCounts,
}) {
  const handleAddonChange = (addon, count) => {
    setAddonCounts((prev) => ({
      ...prev,
      [addon.Devicetype]: count,
    }));
    setSelectedAddons((prevSelectedAddons) => {
      const existingIndex = prevSelectedAddons.findIndex(
        (a) => a.addon.Devicetype === addon.Devicetype
      );

      if (count === 0) {
        // Remove addon if count is 0
        return prevSelectedAddons.filter(
          (a) => a.addon.Devicetype !== addon.Devicetype
        );
      }

      if (existingIndex !== -1) {
        // Update existing addon
        const updated = [...prevSelectedAddons];
        updated[existingIndex] = { addon, count };
        return updated;
      }

      // Add new addon
      return [...prevSelectedAddons, { addon, count }];
    });
  };
  // console.log(selectedAddons);
  const calculateTotal = (selectedAddons) => {
    let total = 0;
    for (const addons of selectedAddons) {
      const count = addons.count || 0;
      total += parseInt(addons.addon.Devicecost) * count;
    }
    return total;
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl  font-bold text-center my-4 ">
          Add-ons Selection
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4 py-6">
        {addonDetails.map((addon) => (
          <AddonCard
            addon={addon}
            deviceNum={addonCounts[addon.Devicetype] || 0}
            onDeviceChange={handleAddonChange}
          />
        ))}
      </div>

      <div className="text-center text-xl font-semibold bg-gray-100 py-3 rounded-md mt-4">
        Total Cost: ${calculateTotal(selectedAddons)}
      </div>
    </div>
  );
}

export default AddonSelection;
