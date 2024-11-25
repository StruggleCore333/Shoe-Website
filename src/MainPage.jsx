import { Link } from "react-router-dom";
import './MainPage.css';

function MainPage() {
  return (
    <>
      <div className="header1"></div>
      
      <div className="header2">
        <div className="navbar">
          <div className="logo">HyperStep</div>

          <nav>
            <ul>
            <li><Link to="/men">Men</Link></li>
              <li><Link to="/women">Women</Link></li>
              <li><Link to="/kids">Kids</Link></li>
              <li><Link to="/brands">Brands</Link></li>
              <li><Link to="/sales">Sales</Link></li>
            </ul>
          </nav>

          <div className="icons">
            <input type="text" placeholder="Search" />
            <span className="icon">&#x2764;</span>
            <span className="icon">&#128722;</span>
            <span className="inventory">INVENTORY</span>
          </div>
        </div>
      </div>       

      <div className="subtext">
        <p>MAKE THINGS MORE HYPE | ENJOY 12.12 SALE</p>
        <a href="#">SHOP NOW</a>
      </div>
      <div className='box1'>
        <div className='inBox1-1'></div>
        <div className='inBox1-2'></div>
        <div className='inBox1-3'></div>
      </div>
      <div className='sports'>
        <h1>Shop By Sports</h1>
        <div className='box2'>
            <div className='inBox2'><button className='btn'>Football</button></div>
            <div className='inBox2'><button className='btn'>Basketball</button></div>
            <div className='inBox2'><button className='btn'>Badminton</button></div>
            <div className='inBox2'><button className='btn'>Running</button></div>
        </div>
      </div>
      <div className='promo1'>
        <h1>MAKE IT ALL HAPPEN</h1>
        <p>Kick it all and step them out</p>
        <button>SHOP NOW</button>
      </div>
      <div className='featured'>
      <h1>Featured</h1>
      <div className='box3'>
        <div className='inBox3'>
            <div className='innerBox3'>
            <button className='btn'>Shop</button>
            </div>
        </div>
        <div className='inBox3'>
            <div className='innerBox3'>
            <button className='btn'>Shop</button>
            </div>
        </div>
        <div className='inBox3'>
            <div className='innerBox3'>
            <button className='btn'>Shop</button>
            </div>
        </div>
        </div>
      </div>
      <div className='seller'>
      <h1>Best Seller</h1>
        <div className='box4'>
        </div>
      </div>
      <div className='promo2'>
        <h1>RUN, KEEP IT MOVING ATHLETIC WEAR</h1>
        <h1>AT HYPER STEP | 2024</h1>
      </div>
      <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>+9277019076</p>
        <p>HyperStep@gmail.com</p>
        <p>HyperStep in Facebook</p>
      </div>
      <div className="footer-section">
        <h3>Sports</h3>
        <p>Basketball</p>
        <p>Football</p>
        <p>Running</p>
        <p>GYM & Training</p>
        <p>Tennis</p>
        <p>Golf</p>
        <p>Cycling</p>
      </div>
      <div className="footer-section">
        <h3>Collections</h3>
        <p>NIKE</p>
        <p>Adidas</p>
        <p>Puma</p>
        <p>Anta</p>
        <p>New Balance</p>
        <p>Under Armor</p>
      </div>
      <div className="footer-section">
        <h3>Branches</h3>
        <p>Mandaue City</p>
        <p>Cebu City</p>
        <p>Lapu-Lapu City</p>
        <p>Talisay City</p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
    </>
  );
}

export default MainPage;
