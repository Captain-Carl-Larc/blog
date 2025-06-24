function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1 className="text-3xl font-bold text-gray-800">My Blog</h1>
      </div>
      <ul className="flex">
        <li className="mr-6">
          <a href="/" className="text-blue-500 hover:text-blue-700">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a href="/about" className="text-blue-500 hover:text-blue-700">
            About
          </a>
        </li>
        <li className="mr-6">
          <a href="/contact" className="text-blue-500 hover:text-blue-700">
            Contact
          </a>
        </li>
        <li className="mr-6">
          <a href="/blog" className="text-blue-500 hover:text-blue-700">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
