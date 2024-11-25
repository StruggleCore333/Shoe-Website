import { Link } from "react-router-dom";
import './Nike.css';

function NikePage() {

  const shoes = [
    { name: 'Nike Air Zoom Pegasus 40', price: '₱7,500', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air Max 270', price: '₱9,200', image: 'https://via.placeholder.com/150' },
    { name: 'Nike ZoomX Vaporfly NEXT%', price: '₱12,800', image: 'https://via.placeholder.com/150' },
    { name: 'Nike React Infinity Run Flyknit 3', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Revolution 6', price: '₱3,800', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Free RN 5.0', price: '₱6,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air Zoom Alphafly NEXT%', price: '₱13,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Wildhorse 7', price: '₱7,800', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air Force 1', price: '₱6,500', image: 'https://via.placeholder.com/150' },
    { name: 'Nike ZoomX Invincible Run Flyknit 3', price: '₱12,500', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Metcon 8', price: '₱8,500', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air Zoom Terra Kiger 8', price: '₱9,200', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air Max 97', price: '₱10,500', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Dunk Low', price: '₱8,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike SB Dunk Low', price: '₱9,300', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air Force 1 Low', price: '₱7,200', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Blazer Low', price: '₱6,800', image: 'https://via.placeholder.com/150' },
    { name: 'Nike React Element 55', price: '₱7,700', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air Zoom Pegasus 39', price: '₱8,200', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air Zoom Freak 5', price: '₱11,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Air VaporMax 2021', price: '₱14,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Zoom Freak 4', price: '₱10,200', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
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
        <a href="#" className="shop-now">SHOP NOW</a>
      </div>

      <div className="Nike">
        <h1>NIKE</h1>
      </div>

      <div className="shoes-grid">
        {shoes.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            <div className="shoe-image">
              <img src={shoe.image} alt={shoe.name} />
            </div>
            <div className="shoe-info">
              <h3>{shoe.name}</h3>
              <p>{shoe.price}</p>
            </div>
          </div>
        ))}
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
    </div>
  );
}

export default NikePage;
