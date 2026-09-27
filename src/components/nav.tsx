import Logo from "../assets/logo-text.png"


function Navbar() {
  return (
    <nav className="w-full h-16 border-b border-gray-200 bg-white">
      <div className="max-w-356.25 h-full mx-auto px-8 flex items-center justify-between">

       
        <div className="flex items-center">
          <img src={Logo}alt="DevStack"className="w-28.75 h-auto"/>
        </div>

       
        <div className="flex items-center gap-7 text-[12px]">
          <a href="#" className="text-pink-600 font-medium">Home</a>

          <a href="#" className="text-gray-700 hover:text-pink-600 transition">Technologies</a>

          <a href="#" className="text-gray-700 hover:text-pink-600 transition">Projects</a>

          <a href="#" className="text-gray-700 hover:text-pink-600 transition">About</a>

          <a href="#" className="text-gray-700 hover:text-pink-600 transition">Contact</a>
        </div>

        
        <div className="flex items-center gap-5">
          <button className="text-[12px] text-gray-700 hover:text-pink-600 transition">Sign In</button>

          <button className="px-5 py-2 rounded-full bg-linear-to-r from-orange-500 to-pink-500 text-white text-[12px] font-medium hover:opacity-90 transition">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;