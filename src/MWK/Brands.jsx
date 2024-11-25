import { Link } from "react-router-dom";
import './Brands.css';

function BrandsPage() {
  return (
    <>
      <div className="header1"></div>

      <div className="header2">
        <div className="navbar">
          <Link to="/" className="logo">HyperStep</Link>

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
      <div className="Logo_box"> 
        <div className="Logo_boxes"></div>
        <div className="Logo_boxes"></div>
        <div className="Logo_boxes"></div>
        <div className="Logo_boxes"></div>
        <div className="Logo_boxes"></div>
        <div className="Logo_boxes"></div>
      </div>
      <div className="big-box-container">
  <div className="big-box">
    <div className="box-content">
      <p className="brand-text">Nike</p>
      <Link to="/nike"> {/* Link to Nike page */}
        <button className="shop-now-btn">SHOP NOW</button>
      </Link>
    </div>
  </div>
  <div className="big-box">
    <div className="box-content">
      <p className="brand-text">Adidas</p>
      <Link to="/adidas"> {/* Link to internal Adidas page */}
        <button className="shop-now-btn">SHOP NOW</button>
      </Link>
    </div>
  </div>
</div>

<div className="big-box-container">
  <div className="big-box">
    <div className="box-content">
      <p className="brand-text">Puma</p>
      <Link to="/puma"> {/* Link to Puma page */}
        <button className="shop-now-btn">SHOP NOW</button>
      </Link>
    </div>
  </div>
  <div className="big-box">
    <div className="box-content">
      <p className="brand-text">Anta</p>
      <Link to="/anta"> {/* Link to Anta page */}
        <button className="shop-now-btn">SHOP NOW</button>
      </Link>
    </div>
  </div>
</div>

<div className="big-box-container">
  <div className="big-box">
    <div className="box-content">
      <p className="brand-text">New Balance</p>
      <Link to="/new-balance"> {/* Link to New Balance page */}
        <button className="shop-now-btn">SHOP NOW</button>
      </Link>
    </div>
  </div>
  <div className="big-box">
    <div className="box-content">
      <p className="brand-text">Under Armour</p>
      <Link to="/under-armour"> {/* Link to Under Armour page */}
        <button className="shop-now-btn">SHOP NOW</button>
      </Link>
    </div>
  </div>
</div>

      <footer className="footer">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>+9277019076</p>
          <p>HyperStep@gmail.com</p>
          <p>HyperStep on Facebook</p>
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

export default BrandsPage;
