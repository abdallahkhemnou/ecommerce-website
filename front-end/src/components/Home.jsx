import Header from "./Header";
function Home() {
  return (
    <>
      <Header />
      <div className="py-10">
        <div className="md:w-110 flex-col justify-start md:px-17 md:py-20 flex gap-3 w-full px-6 py-10">
        <p className="text-[#ff4d2e] text-sm font-semibold">PREMIUM SELECTION</p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white [text-shadow:0_0_25px_rgba(255,255,255,0.35)]">Drive Something Extraordinary</h1>
        <p className="text-white/50 text-sm">Curated performance and luxury vehicles, fully inspected and ready for the road. Find your next car today.</p>
        <button className="self-start border rounded-full bg-[#ff4d2e] py-2 px-5 hover:bg-[#ff4d2e]/80 text-sm cursor-pointer">View Our Cars</button>
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
      </div>
      
    </>
  )
};
export default Home;