import './assets/css/App.scss';

function App() {
  return (
    <div>
      <header className='header'>
        <a className='header_link' href='/'>
          <img src='/svg/logo.svg' />
          <h2>Erina</h2>
        </a>
        <nav>
          <span>Home</span>
          <span>About</span>
          <span>Shop</span>
          <span>Page</span>
          <span>Blog</span>
          <span>Contact</span>
        </nav>
        <div className='header_buttons'>
          <a href='#'>
            <img src='/svg/search_icon.svg' alt='search-icon'/>
          </a>
          <a href='#'>
            <img src='/svg/person_icon.svg' alt='person-icon'/>
          </a>
          <a href='#'>
            <img src='/svg/cart_icon.svg' alt='cart-icon'/>
          </a>

        </div>
      </header>
      <div className='content'>
          <div className='container'>
            Content is here!
          </div>
          
      </div>
      <main className='main container'>
        <div>
          <h3>Latest arrival</h3>
          <h4>Showing our latest arrival on this summer</h4>
          <div className='items_table'>

            <div className='item'>
              <div className='item_img'>
                <img src='/products/1.jpg' alt='prod'/>
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>

            <div className='item'>
              <div className='item_img'>
                <img src='/products/2.jpg' alt='prod'/>
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>

            <div className='item'>
              <div className='item_img'>
                <img src='/products/2.jpg' alt='prod'/>
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>

            <div className='item'>
              <div className='item_img'>
                <img src='/products/2.jpg' alt='prod'/>
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>

            <div className='item'>
              <div className='item_img'>
                <img src='/products/2.jpg' alt='prod'/>
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>
          </div>
        </div>
      </main>

      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
