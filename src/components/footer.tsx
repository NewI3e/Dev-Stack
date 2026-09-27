function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white ">
      <div className="mx-auto grid max-w-356.25 grid-cols-4 gap-12 px-5 py-11">

        
        <div className="col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded bg-fuchsia-500 text-[9px] font-bold text-white">DS
            </span>

            <span className="text-[15px] font-bold text-gray-900">Dev Stack</span>
          </div>

          <p className="mt-3 max-w-70 text-[11px] leading-relaxed text-gray-400">Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="mt-4 flex gap-4">
            <a href="#"className="text-[10px] text-gray-700 hover:text-gray-900">GitHub</a>

            <a href="#"className="text-[10px] text-gray-700 hover:text-gray-900">Twitter
            </a>

            <a href="#"className="text-[10px] text-gray-700 hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

        
        <div className="flex flex-col gap-2.5">
          <h3 className="mb-1 text-[10px] font-bold text-gray-900">PRODUCT</h3>

          <a href="#" className="text-[10px] text-gray-500 hover:text-gray-900">Home</a>

          <a href="#" className="text-[10px] text-gray-500 hover:text-gray-900">Technologies</a>

          <a href="#" className="text-[10px] text-gray-500 hover:text-gray-900">Projects</a>
        </div>

        
        <div className="flex flex-col gap-2.5">
          <h3 className="mb-1 text-[10px] font-bold text-gray-900">COMPANY</h3>

          <a href="#" className="text-[10px] text-gray-500 hover:text-gray-900">About</a>

          <a href="#" className="text-[10px] text-gray-500 hover:text-gray-900">Contact</a>

          <a href="#" className="text-[10px] text-gray-500 hover:text-gray-900">Careers</a>
        </div>

        
        <div className="flex flex-col gap-2.5">
          <h3 className="mb-1 text-[10px] font-bold text-gray-900">LEGAL</h3>

          <a href="#" className="text-[10px] text-gray-500 hover:text-gray-900">Privacy Policy</a>

          <a href="#" className="text-[10px] text-gray-500 hover:text-gray-900">Terms of Service</a>
        </div>
      </div>

      
      <div className="mx-auto flex max-w-356.25 items-center justify-between border-t border-gray-100 px-5 py-5">
        <p className="text-[9px] text-gray-400">© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="#" className="text-[9px] text-gray-400 hover:text-gray-700">Privacy</a>

          <a href="#" className="text-[9px] text-gray-400 hover:text-gray-700">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;