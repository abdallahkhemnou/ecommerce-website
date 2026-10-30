import Header from "./Header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ShieldCheck, Truck, Star } from 'lucide-react';
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
function Home() {
  const [products, setProducts] = useState([]);
  const id_customer = localStorage.getItem('id_customer');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://veloce-backend-2nmq.onrender.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);
  function handleAddToCart(id_product) {
    if (!id_customer) {
      navigate('/sign-In');
      return;
    }
    axios.post('https://veloce-backend-2nmq.onrender.com/cart_items', { id_product, id_customer });
  }
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
              <button className="w-full mt-3 border rounded-full bg-[#ff4d2e] py-2 hover:bg-[#ff4d2e]/80 text-sm text-white cursor-pointer" onClick={() => handleAddToCart(car.id_product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row justify-around py-10 gap-5 px-6 md:px-30">
          <div className="flex flex-col gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
            <div className="w-10 h-10 flex items-center justify-center bg-[#ff4d2e]/10 rounded-lg">
              <ShieldCheck className="text-[#ff4d2e]" size={20} />
            </div>
            <h3 className="text-white font-semibold">Verified Quality</h3>
            <p className="text-white/50 text-sm">Every vehicle passes a multi-point inspection before it's listed.</p>
          </div>
          <div className="flex flex-col gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
            <div className="w-10 h-10 flex items-center justify-center bg-[#ff4d2e]/10 rounded-lg">
              <Truck className="text-[#ff4d2e]" size={20} />
            </div>
            <h3 className="text-white font-semibold">Nationwide Delivery</h3>
            <p className="text-white/50 text-sm">Get your car delivered straight to your door, anywhere.</p>
          </div>
          <div className="flex flex-col gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
            <div className="w-10 h-10 flex items-center justify-center bg-[#ff4d2e]/10 rounded-lg">
              <Star className="text-[#ff4d2e]" size={20} />
            </div>
            <h3 className="text-white font-semibold">Trusted by Buyers</h3>
            <p className="text-white/50 text-sm">Rated 4.9/5 across hundreds of completed sales.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};
export default Home;