
import offer1 from "../assets/offer_1.jpg";
import offer2 from "../assets/offer_2.jpg";
import offer3 from "../assets/offer_3.jpg";
import offer4 from "../assets/offer_4.jpg";
import React, { useState } from "react";
 const offers = [
  {
    id: 1,
    title: "Weekend Special Discount",
    description: "Get a huge discount on weekend stays with free breakfast.",
    price: 120,
    off: "25%",
    expiryDate: "2025-02-10",
    image: offer1,
  },
  {
    id: 2,
    title: "Couple Romantic Package",
    description: "Perfect package for couples including spa & candle dinner.",
    price: 200,
    off: "35%",
    expiryDate: "2025-03-01",
    image: offer2,
  },
  {
    id: 3,
    title: "Family Holiday Deal",
    description: "Big rooms + free kids meals + pool access for all family.",
    price: 150,
    off: "15%",
    expiryDate: "2025-02-20",
    image: offer3,
  },
   {
    id: 4,
    title: "Family Holiday Deal",
    description: "Big rooms + free kids meals + pool access for all family.",
    price: 150,
    off: "20%",
    expiryDate: "2025-02-20",
    image: offer4,
  }
];

export default function OffersSection() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <section className="py-10 px-4 md:px-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Special Offers</h2>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="relative">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-sm rounded-full">
                {offer.off} OFF
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold">{offer.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{offer.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Starting from</p>
                  <p className="text-xl font-bold text-blue-600">${offer.price}</p>
                </div>

                <div className="text-right text-sm text-gray-500">
                  <p>Expires:</p>
                  <p className="font-medium">{offer.expiryDate}</p>
                </div>
              </div>

              {/* View Offer Button */}
              <button
                onClick={() => setSelectedOffer(offer)}
                className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition"
              >
                View Offer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {selectedOffer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 relative animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedOffer(null)}
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={selectedOffer.image}
              alt={selectedOffer.name}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-bold mt-4">{selectedOffer.title}</h2>

            <p className="text-gray-600 mt-2">{selectedOffer.description}</p>

            <div className="mt-4 flex justify-between items-center">
              <p className="text-xl font-bold text-blue-600">${selectedOffer.price}</p>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full">
                {selectedOffer.off} OFF
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              Expiry: {selectedOffer.expiryDate}
            </p>

            <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
}