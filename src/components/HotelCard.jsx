// src/data/hotels.js
import hotel1 from "../assets/hotel_1.jpg";
import hotel2 from "../assets/hotel_2.jpg";
import hotel3 from "../assets/hotel_3.jpg";
import hotel4 from "../assets/hotel_4.jpg";

const hotels = [
  {
    id: 1,
    name: "Royal Suites",
    rating: 4.8,
    pricePerNight: 120,         // بالعمله التي تستخدمها (مثلاً دولار)
    image: hotel1,
    location: "Cairo"
  },
  {
    id: 2,
    name: "Sea View Resort",
    rating: 4.6,
    pricePerNight: 95,
    image: hotel2,
    location: "Alexandria"
  },
  {
    id: 3,
    name: "Mountain Retreat",
    rating: 4.9,
    pricePerNight: 150,
    image: hotel3,
    location: "Aswan"
  },
  {
    id: 4,
    name: "City Center Hotel",
    rating: 4.2,
    pricePerNight: 80,
    image: hotel4,
    location: "Giza"
  }
];


export default function HotelList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {hotels.map((h) => (
        <div key={h.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={h.image} alt={h.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{h.name}</h3>
            <p className="text-sm text-gray-500">{h.location}</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <span className="font-medium">{h.rating.toFixed(1)}</span>
                <span className="text-xs text-gray-400">/ 5</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">From</div>
                <div className="text-lg font-bold">${h.pricePerNight}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
