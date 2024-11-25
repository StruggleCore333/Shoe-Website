import { Link } from 'react-router-dom';
import './NewBalance.css';

function NewBalancePage() {

  const shoes = [
    { name: 'New Balance 990v5', price: '₱10,500', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance Fresh Foam 1080v11', price: '₱9,200', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance FuelCell Rebel v3', price: '₱8,800', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 5740', price: '₱7,900', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 860v12', price: '₱9,600', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 327', price: '₱8,300', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance Fresh Foam Hierro v7', price: '₱12,000', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 997H', price: '₱7,500', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance FuelCell Prism v2', price: '₱9,400', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 1080v10', price: '₱10,200', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 650', price: '₱6,800', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance Minimus 10v1', price: '₱6,000', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance Fresh Foam Tempo', price: '₱8,700', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 574 Classic', price: '₱7,300', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 991', price: '₱11,500', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 990v4', price: '₱10,000', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 1300', price: '₱9,800', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 847v4', price: '₱9,200', image: 'https://via.placeholder.com/150' },
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

      <div className="NewBalance">
        <h1>NEW BALANCE</h1>
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
          <p>New Balance</p>
          <p>Under Armour</p>
          <p>Nike</p>
          <p>Puma</p>
          <p>Adidas</p>
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

export default NewBalancePage;
