import { ShoppingCart } from 'lucide-react';
function Header() {
  return (
    <div className='py-5 px-16 flex items-center justify-around w-full gap-105 border-b border-white/10'>
      <h1 className='text-3xl font-bold text-white'>VELOCE</h1> 
      <div className='flex items-center justify-around gap-10 text-white'>
        <p>Home</p>
        <div className='flex items-center gap-1'>
          <ShoppingCart className="text-white" size={14} />
          <p>cart</p>
        </div>
        <p>about</p>
      </div>
      <button className="border rounded-full bg-[#ff4d2e] py-1 px-3 hover:bg-[#ff4d2e]/80 text-sm">sign in</button>
    </div>
  )
};
export default Header;