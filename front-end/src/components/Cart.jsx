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
      navigate('/signin');
      return;
    }
    axios.get(`http://localhost:3000/cart_items/${id_customer}`).then((response) => { 
      setCart(response.data);
    })
  }, []);
  function handleRemove(id_product) {
    axios.delete('http://localhost:3000/cart_items', { data: { id_product, id_customer } })
    .then(() => {
      setCart(cart.filter((item) => item.id_product !== id_product));
    });
  };
  return (
    <>
      <Header />
      <h1 className=" px-6 md:px-16 mt-10 mb-2 text-4xl font-bold text-white">Your Cart</h1>
      <p className=" px-6 md:px-20 text-white/50">items in your cart</p>
      <div className="flex justify-around gap-6 w-full md:px-16 py-8">
        {cart.map((car) => (
          <div key={car.id_product} className="flex flex-col gap-3 border border-white/10 rounded-2xl">
            <div className="flex justify-between">
              <div className="flex gap-2 nowrap">
                <img src={car.image_url} alt={car.product_name}/>
                <div className="flex flex-col py-2">
                  <p>{car.product_name}</p>
                  <p className="text-[#ff4d2e]">${Number(car.price).toFixed(2)}</p>
                </div>
              </div>
              <Trash2 className="text-white/40 hover:text-[#ff4d2e]" size={20} onClick={() => handleRemove(car.id_product)}/>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
};
export default Cart;