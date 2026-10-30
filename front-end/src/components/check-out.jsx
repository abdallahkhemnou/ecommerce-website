import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Truck } from "lucide-react";

function CheckOut() {
  const navigate = useNavigate();

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
              <p className="text-white"></p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-white/50">Email</p>
              <p className="text-white"></p>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-5 py-5 border border-white/10 bg-white/5 rounded-2xl w-full">
            <p className="text-[#ff4d2e] text-xs font-semibold tracking-widest uppercase">Your items</p>
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-4">
                <img src="" alt="" className="w-16 h-12 object-cover rounded-lg" />
                <p className="text-white font-medium text-sm"></p>
              </div>
              <p className="text-[#ff4d2e] text-sm font-medium"></p>
            </div>
          </div>

          <div className="flex items-center px-5 py-4 border border-white/10 bg-white/5 rounded-2xl w-full gap-3">
            <Truck size={18} className="text-[#ff4d2e]" />
            <p className="text-white/70 text-sm">Free nationwide delivery on every order</p>
          </div>

        </div>

        <div className="w-full md:w-80  h-fit flex flex-col gap-5 px-5 py-5 border border-white/10 bg-white/5 rounded-2xl">
          <h2 className="text-white text-lg font-semibold">Order Summary</h2>
          <div className="flex justify-between text-sm">
            <p className="text-white/50">Subtotal</p>
            <p className="text-white"></p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-white/50">Delivery</p>
            <p className="text-white">Free</p>
          </div>
          <div className="border-t border-white/10 pt-3 flex justify-between items-center">
            <p className="text-white font-semibold">Total</p>
            <p className="text-[#ff4d2e] text-xl font-bold"></p>
          </div>
          <button className="w-full bg-[#ff4d2e] hover:bg-[#ff4d2e]/80 text-black font-semibold py-3 rounded-full cursor-pointer mt-1">
            Place order
          </button>
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