import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Truck } from "lucide-react";
import { useState, useEffect } from 'react';
import axios from 'axios';
function CheckOut() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const id_customer = localStorage.getItem('id_customer');
  const total = cart.reduce((sum, car) => sum + Number(car.price), 0);
  const [message, setMessage] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:3000/check-out/${id_customer}`).then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="px-6 md:px-16 pt-10">
        <h1 className="text-3xl font-bold text-white">Checkout</h1>
        <p className="text-white/50 text-sm mt-1">Review your order before placing it</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full px-6 md:px-16 py-8">
        <div className="flex flex-col gap-4 flex-1">

          <div className="flex flex-col gap-3 px-5 py-5 border border-white/10 bg-white/5 rounded-2xl w-full">
            <p className="text-[#ff4d2e] text-xs font-semibold tracking-widest uppercase">Your details</p>
            <div className="flex justify-between text-sm">
              <p className="text-white/50">Name</p>
              <p className="text-white">{cart[0]?.full_name}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-white/50">Email</p>
              <p className="text-white">{cart[0]?.email}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-5 py-5 border border-white/10 bg-white/5 rounded-2xl w-full">
            <p className="text-[#ff4d2e] text-xs font-semibold tracking-widest uppercase">Your items</p>
            {cart.map((item, index) => (
              <div
                key={item.id_product}
                className={`flex justify-between items-center gap-3 ${index !== 0 ? "border-t border-white/10 pt-4" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <img src={item.image_url} alt={item.product_name} className="w-18 h-14 object-cover rounded-lg" />
                  <p className="text-white font-medium text-sm">{item.product_name}</p>
                </div>
                <p className="text-[#ff4d2e] text-sm font-medium">${Number(item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center px-5 py-4 border border-white/10 bg-white/5 rounded-2xl w-full gap-3">
            <Truck size={18} className="text-[#ff4d2e]" />
            <p className="text-white/70 text-sm">Free nationwide delivery on every order</p>
          </div>

        </div>

        <div className="w-full md:w-80 h-fit flex flex-col gap-3 px-5 py-5 border border-white/10 bg-white/5 rounded-2xl">
          <h2 className="text-white text-lg font-semibold">Order Summary</h2>
          <div className="flex justify-between text-sm">
            <p className="text-white/50">Subtotal</p>
            <p className="text-white">${total}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-white/50">Delivery</p>
            <p className="text-white">Free</p>
          </div>
          <div className="border-t border-white/10 pt-3 flex justify-between items-center">
            <p className="text-white font-semibold">Total</p>
            <p className="text-[#ff4d2e] text-xl font-bold">${total}</p>
          </div>
          <button className="w-full bg-[#ff4d2e] hover:bg-[#ff4d2e]/80 text-black font-semibold py-3 rounded-full cursor-pointer mt-1" onClick={() => {setMessage(true)}}>
            Place order
          </button>
          {message && <p className="text-red-500 text-sm px-11">Order placed successfully! 🎉</p>}
          <p
            className="text-center text-white/50 text-sm cursor-pointer hover:text-white"
            onClick={() => navigate('/cart')}
          >
            Back to cart
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
};
export default CheckOut;