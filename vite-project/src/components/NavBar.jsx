
function NavBar() {
    return (
        <nav className="bg-fuchsia-100 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Logo</div>
                <ul className="flex space-x-6">
                    <li><a href="#home" className="hover:bg-indigo-200 px-3 py-1 rounded transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:bg-indigo-200 px-3 py-1 rounded transition-colors">About</a></li>
                    <li><a href="#services" className="hover:bg-indigo-200 px-3 py-1 rounded transition-colors">Services</a></li>
                    <li><a href="#contact" className="hover:bg-indigo-200 px-3 py-1 rounded transition-colors">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default NavBar;
  