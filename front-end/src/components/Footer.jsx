function Footer() {
  return (
    <div className="w-full border-t border-white/10 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-17 py-8 text-sm text-white/50">
        <p>© 2026 VELOCE Motors. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <p className="cursor-pointer hover:text-white">Privacy</p>
          <p className="cursor-pointer hover:text-white">Terms</p>
          <p className="cursor-pointer hover:text-white">Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;