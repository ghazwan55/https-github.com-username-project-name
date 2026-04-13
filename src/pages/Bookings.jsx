import React, { useEffect, useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pt-50">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Hotel</th>
                <th className="p-3 text-left">Room Type</th>
                <th className="p-3 text-left">Price / Night</th>
                <th className="p-3 text-left">Booking Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking.bookingId}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">
                    {booking.hotel}
                  </td>
                  <td className="p-3">{booking.roomType}</td>
                  <td className="p-3">
                    ${booking.priceNight}
                  </td>
                  <td className="p-3 text-sm text-gray-500">
                    {booking.bookingDate}
                  </td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
                      Booked
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
