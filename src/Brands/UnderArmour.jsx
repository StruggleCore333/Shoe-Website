import { Link } from 'react-router-dom';
import './UnderArmour.css';

function UnderArmourPage() {

  const shoes = [
    { name: 'Under Armour Curry 11', price: '₱10,500', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour HOVR Phantom 3', price: '₱9,800', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour HOVR Sonic 5', price: '₱8,600', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Project Rock 5', price: '₱12,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Charged Impulse', price: '₱7,800', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Speedform', price: '₱9,200', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Flow Velociti Wind', price: '₱11,500', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Curry One', price: '₱10,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour HOVR Apex', price: '₱13,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Charged Bandit', price: '₱8,300', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Micro G Assert', price: '₱6,900', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Curry Flow 10', price: '₱14,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour HOVR Infinite 3', price: '₱10,800', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Charged Bandit 6', price: '₱7,400', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Stealth Runners', price: '₱8,200', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Speedform Europa', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Curry 7', price: '₱11,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Flow 2', price: '₱9,400', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <div className="header1"></div>

      <div className="header2">
        <div className="navbar">
        <Link to="/" className="logo">HyperStep</Link>

          <nav>
            <ul className="nav-links">
              <li><Link to="/men">Men</Link></li>
              <li><Link to="/women">Women</Link></li>
              <li><Link to="/kids">Kids</Link></li>
              <li><Link to="/brands">Brands</Link></li>
              <li><Link to="/sales">Sales</Link></li>
            </ul>
          </nav>

          <div className="icons">
            <input type="text" placeholder="Search" className="search-bar" />
            <span className="icon">&#x2764;</span> {/* Heart Icon */}
            <span className="icon">&#128722;</span> {/* Cart Icon */}
            <span className="inventory">INVENTORY</span>
          </div>
        </div>
      </div>

      <div className="subtext">
        <p>MAKE THINGS MORE HYPE | ENJOY 12.12 SALE</p>
        <a href="#" className="shop-now">SHOP NOW</a>
      </div>

      <div className="UnderArmour">
        <h1>UNDER ARMOUR</h1>
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
          <p>Under Armour</p>
          <p>Nike</p>
          <p>Adidas</p>
          <p>Puma</p>
          <p>New Balance</p>
          <p>Anta</p>
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

export default UnderArmourPage;
