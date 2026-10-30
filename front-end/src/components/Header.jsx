import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='w-full border-b border-white/10 '>
      <div className='py-5 px-6 md:px-16 flex items-center justify-between w-full '>
        <h1 className='text-3xl font-bold text-white'>VELOCE</h1>
        <div className='hidden md:flex items-center justify-around gap-10 text-white'>
          <p className='cursor-pointer' onClick={() => navigate('/')}>Home</p>
          <div className='flex items-center gap-1 cursor-pointer'>
            <ShoppingCart className="text-white" size={14} />
            <p onClick={() => navigate('/cart')}>cart</p>
          </div>
          <p className='cursor-pointer' onClick={() => navigate('/about')}>about</p>
        </div>
        <button className="hidden md:block border rounded-full bg-[#ff4d2e] py-1 px-3 hover:bg-[#ff4d2e]/80 text-sm cursor-pointer" onClick={() => navigate('/sign-In')}>
          sign in
        </button>
        <button className='md:hidden text-white cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center gap-5 pb-6 text-white'>
          <p className='cursor-pointer' onClick={() => { navigate('/'); setMenuOpen(false); }}>Home</p>
          <div className='flex items-center gap-1 cursor-pointer' onClick={() => { navigate('/cart'); setMenuOpen(false); }}>
            <ShoppingCart className="text-white" size={14} />
            <p>cart</p>
          </div>
          <p className='cursor-pointer' onClick={() => { navigate('/about'); setMenuOpen(false); }}>about</p>
          <button className="border rounded-full bg-[#ff4d2e] py-1 px-3 hover:bg-[#ff4d2e]/80 text-sm cursor-pointer" onClick={() => { navigate('/sign-In'); setMenuOpen(false); }}>sign in</button>
        </div>
      )}
    </div>
  );
}
export default Header;