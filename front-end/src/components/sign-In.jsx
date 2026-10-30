import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post('https://veloce-backend-2nmq.onrender.com/signin', { email, password });
      const { id_customer,} = response.data;
      localStorage.setItem('id_customer',( id_customer));
      navigate('/');
    } catch (error) {
      setError('Invalid email or password !');
    }
  }
  return (
    <>
      <Header />
      <div className="flex items-center justify-center px-6 py-16 relative">
        <img src="/car-bj.jpg" className="absolute w-full h-full object-cover blur-sm" />
        <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 relative">
          <div>
            <p className="text-[#ff4d2e] text-xs font-bold tracking-widest uppercase mb-2">Members Only</p>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome back</h1>
            <p className="text-white/50 text-sm">Sign in to continue to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-white text-sm">Email</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-[#ff4d2e]"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white text-sm">Password</label>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 pr-11 text-white placeholder-white/30 text-sm outline-none focus:border-[#ff4d2e]"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" className="w-full bg-[#ff4d2e] hover:bg-[#ff4d2e]/80 text-black font-semibold py-3 rounded-full cursor-pointer">
              Sign in
            </button>
          </form>

          <p className="text-center text-white/50 text-sm">
            Don't have an account? <span className="text-[#ff4d2e] cursor-pointer" onClick={() => navigate('/sign-up')}>Sign up</span>
          </p>

        </div>
      </div>
      <Footer />
    </>
  )
}
export default SignIn;