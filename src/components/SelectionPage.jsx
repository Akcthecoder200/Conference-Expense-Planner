import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Layout from "./Layout";
import MealSelection from "./MealSelection";
import RoomSelection from "./RoomSelection";
import AddonSelection from "./AddonSelection";
import DetailPopup from "./DetailPopup";

function SelectionPage() {
  const [page, setPage] = useState("meals");
  const [peopleCount, setPeopleCount] = useState(0);
  const [selectedMeals, setSelectednMeals] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomCounts, setRoomCounts] = useState({});
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [addonCounts, setAddonCounts] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  console.log(selectedAddons);
  console.log(selectedMeals);
  console.log(selectedRooms);
  

  return (
    <div>
      {/* navbar */}
      <Layout setPage={setPage} setShowPopup={setShowPopup} />
      {page === "meals" && (
        <MealSelection
          setPeopleCount={setPeopleCount}
          setSelectednMeals={setSelectednMeals}
          peopleCount={peopleCount}
          selectedMeals={selectedMeals}
        />
      )}
      {page === "venues" && (
        <RoomSelection
          selectedRooms={selectedRooms}
          setSelectedRooms={setSelectedRooms}
          roomCounts={roomCounts}
          setRoomCounts={setRoomCounts}
        />
      )}
      {page === "add-ons" && (
        <AddonSelection
          selectedAddons={selectedAddons}
          setSelectedAddons={setSelectedAddons}
          addonCounts={addonCounts}
          setAddonCounts={setAddonCounts}
        />
      )}
      {showPopup && (
        <DetailPopup
          onClose={() => setShowPopup(false)}
          selectedMeals={selectedMeals}
          selectedRooms={selectedRooms}
          selectedAddons={selectedAddons}
          peopleCount={peopleCount}
        />
      )}
    </div>
  );
}

export default SelectionPage;
