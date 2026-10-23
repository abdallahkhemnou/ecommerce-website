import Header from "./Header";
import { useState, useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/products').then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="py-10">
        <div className="md:w-110 flex-col justify-start md:px-17 md:py-20 flex gap-3 w-full px-6 py-10">
          <p className="text-[#ff4d2e] text-sm font-semibold">PREMIUM SELECTION</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white [text-shadow:0_0_25px_rgba(255,255,255,0.35)]">Drive Something Extraordinary</h1>
          <p className="text-white/50 text-sm">Curated performance and luxury vehicles, fully inspected and ready for the road. Find your next car today.</p>
          <a href="#vehicles" className=" inline-block self-start border rounded-full bg-[#ff4d2e] py-2 px-5 hover:bg-[#ff4d2e]/80 text-sm cursor-pointer">View Our Cars</a>
        </div>
        <div className=" border-b border-white/10 flex items-center justify-around w-full py-5 text-white">
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold text-white">4.9★</h4>
            <p>Average Rating</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold text-white">9</h4>
            <p>Brands availble</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold text-white">24h</h4>
            <p>Support Response</p>
          </div>
        </div>
        <div className="flex flex-col py-10 px-6 md:px-17" id="vehicles">
          <h1 className="text-2xl font-bold text-white">Our Vehicles</h1>
          <p className="text-white/50">Every car currently available in our showroom</p>
        </div>
        <div className="flex gap-6 flex-row flex-wrap px-6 md:px-30">
          {products.map((car) => (
            <div key={car.id_product} className="flex flex-col w-full sm:w-64 cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-3 transition duration-300 hover:-translate-y-2 hover:border-[#ff4d2e]/50 hover:bg-white/10">
              <img src={car.image_url} alt={car.product_name} className="w-full h-48 object-cover rounded-xl" />
              <div className="flex flex-col justify-between mt-2">
                <p className="text-white font-semibold">{car.product_name}</p>
                <p className="text-[#ff4d2e]">${Number(car.price).toFixed(2)}</p>
              </div>
              <p className="text-white/50 text-sm mt-1">{car.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
};
export default Home;