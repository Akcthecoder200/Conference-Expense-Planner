import React from "react";

function AddonCard({ addon, deviceNum, onDeviceChange }) {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src="/images/black.webp"
            alt="Room"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Info Section */}
        <div className="p-4 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800">{addon.Devicetype}</h3>
          <p className="text-xl font-bold text-green-600 mt-2">${addon.Devicecost}</p>

          {/* Button Group */}
          <div className="flex items-center gap-4 mt-4">
            <button
              className="px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-lg font-semibold"
              onClick={() =>
                onDeviceChange(addon,deviceNum + 1)
              }
            >
              +
            </button>
            <h3>{deviceNum}</h3>
            <button
              className="px-4 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 text-lg font-semibold"
              onClick={() =>
                onDeviceChange(addon, Math.max(0, deviceNum - 1))
              }
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddonCard;
