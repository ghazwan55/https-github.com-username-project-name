import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  useEffect(() => {
    const storedRooms = JSON.parse(localStorage.getItem("rooms")) || [];

    const foundRoom = storedRooms.find(
      (r) => r.id === Number(id)
    );

    setRoom(foundRoom || null);
  }, [id]);

  if (!room) {
    return (
      <div className="pt-40 text-center text-xl font-semibold">
        Room not found
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={room.image}
            alt={room.hotel}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{room.hotel}</h1>
            <p className="text-gray-500 mb-4">
              {room.roomType} Room
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold">
                ${room.priceNight}
              </span>
              <span className="text-sm text-gray-500">
                per night
              </span>
            </div>

            <span
              className={`inline-block px-4 py-1 rounded-full text-sm ${
                room.isAvailable
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {room.isAvailable ? "Available" : "Booked"}
            </span>

            <div className="mt-6 text-sm text-gray-400">
              <p>Created: {room.createdAt}</p>
              <p>Updated: {room.updatedAt}</p>
            </div>
          </div>

          {/* ACTION */}
          {!room.isAvailable && (
            <div className="mt-6 text-center text-red-600 font-semibold">
              This room is already booked
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
