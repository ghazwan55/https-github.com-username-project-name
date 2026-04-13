import allroom1 from "../src/assets/allrooms_1.jpg";
import allroom2 from "../src/assets/allrooms_2.jpg";
import allroom3 from "../src/assets/allrooms_3.jpg";
const roomsData = [
  {
    id: 1,
    hotel: "Royal Hotel",
    image:allroom1 ,
    roomType: "Single",
    priceNight: 180,
    isAvailable: true,
    createdAt: "2023-10-01",
    updatedAt: "2023-10-15",
  },
  {
    id: 2,
    hotel: "Sea View Hotel",
    image: allroom2,
    roomType: "Double",
    priceNight: 80,
    isAvailable: false,
    createdAt: "2023-09-20",
    updatedAt: "2023-10-10",
  },
  {
    id: 3,
    hotel: "Mountain Resort",
    image: allroom3,
    roomType: "Suite",
    priceNight: 120,
    isAvailable: true,
    createdAt: "2023-08-25",
    updatedAt: "2023-10-12",
  },
];

export default roomsData;
