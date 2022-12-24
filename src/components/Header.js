function Header(params) {
  return (
    <header className="header">
      <a className="header_link" href="/">
        <img src="/svg/logo.svg" />
        <h2>Erina</h2>
      </a>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Shop</a>
        <a href="#">Page</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
      <div className="header_buttons">
        <a href="#">
          <img src="/svg/search_icon.svg" alt="search-icon" />
        </a>
        <a href="#">
          <img src="/svg/person_icon.svg" alt="person-icon" />
        </a>
        <a href="#">
          <img src="/svg/cart_icon.svg" alt="cart-icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
