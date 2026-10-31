import Header from "./Header";
import Footer from "./Footer";
import { Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const [cart, setCart] = useState([]);
  const id_customer = localStorage.getItem('id_customer');
  const navigate = useNavigate();
  useEffect(() => { 
    if (!id_customer) {
      navigate('/sign-In');
      return;
    }
    axios.get(`https://veloce-backend-2nmq.onrender.com/cart_items/${id_customer}`).then((response) => { 
      setCart(response.data);
    })
  }, []);
  function handleRemove(id_product) {
    axios.delete('https://veloce-backend-2nmq.onrender.com/cart_items', { data: { id_product, id_customer } })
    .then(() => {
      setCart(cart.filter((item) => item.id_product !== id_product));
    });
  };
  const total = cart.reduce((sum, car) => sum + Number(car.price), 0);
  return (
    <>
      <Header />
      <h1 className="px-6 md:px-16 mt-10 mb-2 text-4xl font-bold text-white">Your Cart</h1>
      <p className="px-6 md:px-20 text-white/50">{cart.length} items in your cart</p>
      <div className="flex flex-col md:flex-row gap-6 w-full px-6 md:px-16 py-8">
        <div className="flex flex-col gap-4 flex-1">
          {cart.map((car) => (
            <div key={car.id_product} className="flex flex-col gap-3 border border-white/10 rounded-2xl">
              <div className="flex justify-between relative">
                <div className="flex gap-2 nowrap">
                  <img src={car.image_url} alt={car.product_name} className="w-32 h-24 object-cover rounded-xl m-2"/>
                  <div className="flex flex-col justify-center">
                    <p className="text-white">{car.product_name}</p>
                    <p className="text-[#ff4d2e]">${Number(car.price).toFixed(2)}</p>
                  </div>
                </div>
                <Trash2 className="text-white/40 hover:text-[#ff4d2e] absolute right-6 top-1/2 -translate-y-1/2" size={20} onClick={() => handleRemove(car.id_product)}/>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-80 bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 h-fit">
          <p className="text-white font-semibold text-lg">Order Summary</p>
          <div className="flex justify-between text-sm">
            <p className="text-white/50">Subtotal</p>
            <p className="text-white">${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-white/50">Delivery</p>
            <p className="text-white">Free</p>
          </div>
          <div className="border-t border-white/10 pt-4 flex justify-between items-center">
            <p className="text-white font-semibold">Total</p>
            <p className="text-[#ff4d2e] text-xl font-bold">${total.toFixed(2)}</p>
          </div>
          <button className="w-full border rounded-full bg-[#ff4d2e] py-3 hover:bg-[#ff4d2e]/80 text-sm font-semibold text-white cursor-pointer" onClick={() => navigate('/check-out')}>Proceed to Checkout</button>
          <p className="text-white/50 text-sm text-center cursor-pointer hover:text-white" onClick={() => navigate('/')}>Continue Shopping</p>
        </div>
      </div>
      <Footer />
    </>
  )
};
export default Cart;