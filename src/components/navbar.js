function Navbar() {
  return (
    <div className="navbar">
      <h1 className="title">Math Magicians</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-items"><a href="./Welcome">Home</a></li>
          <li className="nav-items item-line"><a href="./Calculator">Calculator</a></li>
          <li className="nav-items item-line"><a href="./Quote">Quote</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
