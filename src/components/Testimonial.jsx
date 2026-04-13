import React from "react";
import testimonal1 from "../assets/testimonial_1.jpg";
import testimonal2 from "../assets/testimonial_2.png";
import testimonal3 from "../assets/testimonial_3.jpg";


import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    text: "Amazing experience! The hotel was clean, the staff was friendly, and the view was breathtaking.",
    image: testimonal1,
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    text: "Excellent service and comfortable rooms. I highly recommend it!",
    image: testimonal2,
    rating: 4,
  },
  {
    id: 3,
    name: "Ahmed Ali",
    text: "Great value for the price. The breakfast was delicious and the location perfect.",
    image: testimonal3,
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{t.name}</h3>

            <p className="text-gray-600 mt-2 text-sm">{t.text}</p>

            <div className="flex justify-center mt-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
