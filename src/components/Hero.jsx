import React from 'react'
import '../index.css'
import hotel_2 from "../assets/hotel_3.jpg";
function Hero() {
  return (
   <div className="relative flex flex-col items-center justify-center p-10 text-white
bg-no-repeat bg-cover bg-center h-[120vh]" style={{backgroundImage: `url(${hotel_2})`}}>
    <div className=" absolute inset-0 opacity-60 bg-neutral-950">
    </div>
   <div className=" relative z-10 pt-45">
<h2 className="text-orange-400 mb-4 text-4xl font-bold">Find your perfect stay.Anywhere</h2>
<p className="text-2xl mb-2">
    Discover top-rated hotels and excaluiv deals around the world
    .Book with ears and start your jurouny today
</p>
<button >Book now</button>
<div>
    <div className="bg-white/80 4px  text-black p-2 rounded-2xl shadow-xl w-full max-w-sm mx-auto mt-5">
 <h2 className="text-xl font-bold mb-4 text-center text-start">Book now</h2>
   <div className="mb-3">
            <label className="text-sm font-medium">Area</label>
            <input 
              type="text"
               list="areas"
              placeholder="ادخل المنطقة…"
              className="w-full p-1 border rounded-lg mt-1 
             focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-2xl focus:outline-none"
/>
          </div>
            <div className="flex gap-3 mb-4">
            <div className="flex-1">
              <label  for="checkout"className=" block text-sm font-medium"> Chick in</label>
              <input type="date"  id="checkout" name="checkout"  className="w-full p-1 border rounded-lg mt-1 focus:border-blue-500 focus:ring-blue-500" />
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium">Checkout</label>
              <input type="date" className="w-full p-1 border rounded-lg mt-1 " />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="flex-1">
              <label  for="checkout"className=" block text-sm font-medium"> Rooms</label>
              <input   type="text" id="checkout" name="checkout"  className="w-full p-1 border rounded-lg mt-1 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">Guests</label>
              <input   type="text" className="w-full p-1 border rounded-lg mt-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
            </div>
          </div>

<datalist id="areas">
  <option value="Cairo" />
  <option value="Alexandria" />
  <option value="Giza" />
  <option value="Luxor" />
  <option value="Aswan" />
</datalist>
<button >search Book</button>
       </div>
</div>


   </div>
    </div>
  )
}

export default Hero
