import { Link } from 'react-router-dom';
import './Kids.css';

function KidsPage() {

  const shoes = [
    { name: 'Nike Team Hustle D 10 Kids', price: '₱4,200', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Tensaur Run 2.0 Kids', price: '₱3,500', image: 'https://via.placeholder.com/150' },
    { name: 'Puma Future Rider Play On Kids', price: '₱4,800', image: 'https://via.placeholder.com/150' },
    { name: 'ASICS Contend 7 GS', price: '₱3,900', image: 'https://via.placeholder.com/150' },
    { name: 'Hoka One One Speedgoat 5 Kids', price: '₱6,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Assert 9 Kids', price: '₱4,000', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance Fresh Foam Arishi Kids', price: '₱3,700', image: 'https://via.placeholder.com/150' },
    { name: 'Reebok Zig Dynamica Kids', price: '₱4,300', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas FortaRun Kids', price: '₱3,800', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Flex Runner 2 Kids', price: '₱3,600', image: 'https://via.placeholder.com/150' },
    { name: 'Puma Enzo 2 Kids', price: '₱4,500', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour BGS Pursuit 2 AC', price: '₱3,200', image: 'https://via.placeholder.com/150' },
    { name: 'Saucony Cohesion 15 Kids', price: '₱3,900', image: 'https://via.placeholder.com/150' },
    { name: 'ASICS Gel-Venture 8 GS', price: '₱5,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Revolution 6 Kids', price: '₱3,500', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Lite Racer 2.0 Kids', price: '₱3,600', image: 'https://via.placeholder.com/150' },
    { name: 'Puma RS-Z Kids', price: '₱4,200', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 574 Core Kids', price: '₱4,800', image: 'https://via.placeholder.com/150' },
    { name: 'Brooks Launch 9 Kids', price: '₱4,000', image: 'https://via.placeholder.com/150' },
    { name: 'Hoka Bondi 8 Kids', price: '₱5,300', image: 'https://via.placeholder.com/150' },
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

      <div className="Kids">
        <h1>KIDS</h1>
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
    </div>
  );
}

export default KidsPage;
