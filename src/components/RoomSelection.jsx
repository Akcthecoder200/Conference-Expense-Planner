import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Roomdetails } from "../utils";

function RoomSelection({
  selectedRooms,
  setSelectedRooms,
  roomCounts,
  setRoomCounts,
}) {
  // console.log(selectedRoom);

  const calculateTotal = (selectedRooms) => {
    let total = 0;
    for (const room of selectedRooms) {
      const count = room.count || 0;
      total += parseInt(room.Roomdetail.Roomcost) * count;
    }
    // console.log(total);
    return total;
  };

  return (
    <div>
      <h1 className="text-2xl  font-bold text-center my-4 ">
        Venue Room Selection
      </h1>

      <div className="grid grid-cols-4">
        {Roomdetails.map((Roomdetail) => {
          return (
            <RoomCard
              key={Roomdetail.Roomtype}
              Roomdetail={Roomdetail}
              roomnum={roomCounts[Roomdetail.Roomtype] || 0}
              setRoomCounts={setRoomCounts}
              setSelectedRooms={setSelectedRooms}
            />
          );
        })}
      </div>
      <div className="text-center text-xl font-semibold bg-gray-100 py-3 rounded-md">
        Total Cost: ${calculateTotal(selectedRooms)}
      </div>
    </div>
  );
}

export default RoomSelection;
