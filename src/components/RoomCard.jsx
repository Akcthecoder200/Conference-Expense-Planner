import React from "react";

function RoomCard({ Roomdetail, roomnum, setRoomCounts, setSelectedRooms }) {
  const handleRoomChange = (Roomdetail, count) => {
    setRoomCounts((prev) => ({
      ...prev,
      [Roomdetail.Roomtype]: count,
    }));
    setSelectedRooms((prevSelectedRooms) => {
      const existingIndex = prevSelectedRooms.findIndex(
        (r) => r.Roomdetail.Roomtype === Roomdetail.Roomtype
      );
      if (count === 0) {
        return prevSelectedRooms.filter(
          (r) => r.Roomdetail.Roomtype !== Roomdetail.Roomtype
        );
      }
      if (existingIndex !== -1) {
        const updated = [...prevSelectedRooms];
        updated[existingIndex] = { Roomdetail, count };
        return updated;
      }
      return [...prevSelectedRooms, { Roomdetail, count }];
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src="/images/hotelroom.jpg"
            alt="Room"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Info Section */}
        <div className="p-4 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {Roomdetail.Roomtype}
          </h3>
          <h4 className="text-sm text-gray-600">
            (Capacity: {Roomdetail.Roomcapacity})
          </h4>
          <p className="text-xl font-bold text-green-600 mt-2">
            ${Roomdetail.Roomcost}
          </p>

          {/* Button Group */}
          <div className="flex items-center gap-4 mt-4">
            <button
              className="px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-lg font-semibold"
              onClick={() => handleRoomChange(Roomdetail, roomnum + 1)}
            >
              +
            </button>
            <h3>{roomnum}</h3>
            <button
              className="px-4 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 text-lg font-semibold"
              onClick={() =>
                handleRoomChange(Roomdetail, Math.max(0, roomnum - 1))
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

export default RoomCard;
