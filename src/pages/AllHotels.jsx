import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import roomsData from "../AllRooms";


export default function AllHotels() {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState(roomsData);
  const [filters, setFilters] = useState({
    type: "All",
    maxPrice: 200,
  });

  const [showBooking, setShowBooking] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
useEffect(() => {
  const storedRooms = localStorage.getItem("rooms");

  if (storedRooms) {
    setRooms(JSON.parse(storedRooms));
  } else {
    setRooms(roomsData);
    localStorage.setItem("rooms", JSON.stringify(roomsData));
  }
}, []);
const handleBooking = (room) => {
  // تحديث حالة الغرف
  const updatedRooms = rooms.map((r) =>
    r.id === room.id
      ? { ...r, isAvailable: false, updatedAt: new Date().toISOString().split("T")[0] }
      : r
  );

  setRooms(updatedRooms);
  localStorage.setItem("rooms", JSON.stringify(updatedRooms));

  // إضافة الحجز
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push({
    bookingId: Date.now(),
    roomId: room.id,
    hotel: room.hotel,
    roomType: room.roomType,
    priceNight: room.priceNight,
    bookingDate: new Date().toLocaleString(),
  });
  localStorage.setItem("bookings", JSON.stringify(bookings));
};


  const filteredRooms = rooms.filter((room) => {
    const matchType = filters.type === "All" || room.roomType === filters.type;
    const matchPrice = room.priceNight <= filters.maxPrice;
    return matchType && matchPrice;
  });

  return (
    <div className="flex p-6 gap-6 pt-32">

      {/* FILTER SECTION */}
      <div className="w-1/4 bg-white shadow-lg rounded-xl p-5 h-fit">
        <h2 className="text-xl font-semibold mb-4">Filter Rooms</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">Room Type</label>
          <select
            className="w-full border p-2 rounded-lg"
            value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
          >
            <option>All</option>
            <option>Single</option>
            <option>Double</option>
            <option>Suite</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Max Price: ${filters.maxPrice}
          </label>
          <input
            type="range"
            min="20"
            max="200"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: Number(e.target.value) })
            }
            className="w-full"
          />
        </div>
        <button
  onClick={() => {
    // إعادة الغرف لحالتها الأصلية
    setRooms(roomsData);
    localStorage.setItem("rooms", JSON.stringify(roomsData));

    // مسح الحجوزات
    localStorage.removeItem("bookings");
    alert("Data has been reset!");
  }}
  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
>
  Reset Data
</button>

      </div>

      {/* ROOMS LIST */}
      <div className="w-3/4">
        <h1 className="text-3xl font-bold mb-6">Hotel Rooms</h1>

        <div className="flex flex-col gap-6">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="
                flex bg-white rounded-xl overflow-hidden h-40
                shadow-md transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* IMAGE */}
              <div className="overflow-hidden h-full w-40">
                <img
                  src={room.image}
                  alt={room.hotel}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-xl font-semibold">{room.hotel}</h3>
                  <p className="text-gray-500">{room.roomType} Room</p>
                </div>

                <div className="flex justify-between items-center gap-3">
                  <span className="text-xl font-bold">
                    ${room.priceNight}
                  </span>

                  <div className="flex gap-2">
                    {room.isAvailable ? (
                      <button
                        onClick={() => {
                          setSelectedRoom(room);
                          setShowBooking(true);
                        }}
                        className="
                          border border-green-600 text-green-600
                          px-3 py-1 rounded-lg text-sm
                          hover:bg-green-600 hover:text-white
                          transition
                        "
                      >
                        Book Now
                      </button>
                    ) : (
                      <span className="text-red-600 font-medium text-sm">
                        Booked
                      </span>
                    )}

                    <button
                      onClick={() => navigate(`/rooms/${room.id}`)}
                      className="
                        border border-black px-3 py-1 rounded-lg text-sm
                        hover:bg-black hover:text-white transition
                      "
                    >
                      View Details
                    </button>
                  </div>
                </div>

                <div className="text-xs text-gray-400">
                  Created: {room.createdAt} — Updated: {room.updatedAt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOOKING MODAL */}
      {showBooking && selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowBooking(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 z-10">
            <h2 className="text-2xl font-bold mb-2">Confirm Booking</h2>

            <p className="text-gray-500 mb-4">
              {selectedRoom.hotel} — {selectedRoom.roomType} Room
            </p>

            <img
              src={selectedRoom.image}
              alt={selectedRoom.hotel}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">
                ${selectedRoom.priceNight} / night
              </span>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                Available
              </span>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowBooking(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
              >
                Cancel
              </button>
<button
  onClick={() => {
    handleBooking(selectedRoom); // نمرر الغرفة المحددة مباشرة
    setShowBooking(false);
  }}
  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
>
  Confirm Booking
</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
