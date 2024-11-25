import { Link } from 'react-router-dom';
import './Adidas.css';

function AdidasPage() {

  const shoes = [
    { name: 'Adidas Ultraboost 24', price: '₱9,500', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas NMD_R1', price: '₱8,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Solarboost 5', price: '₱10,200', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas X9000L4', price: '₱8,500', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Supernova 2', price: '₱7,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas EQT Support 93/17', price: '₱10,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Stan Smith', price: '₱6,500', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas ZX 2K Boost', price: '₱8,800', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Gazelle', price: '₱7,200', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Superstar', price: '₱6,700', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Pureboost DPR', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Alphaedge 4D', price: '₱12,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Pureboost', price: '₱8,200', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas NMD_XR1', price: '₱9,500', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Adizero Boston 11', price: '₱10,800', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Torsion X', price: '₱11,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas ClimaCool', price: '₱7,500', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Iniki Runner', price: '₱8,400', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas AlphaBounce', price: '₱8,600', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Nite Jogger', price: '₱8,200', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Campus', price: '₱7,000', image: 'https://via.placeholder.com/150' },
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

      <div className="Adidas">
        <h1>ADIDAS</h1>
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
          <p>ADIDAS</p>
          <p>Nike</p>
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

export default AdidasPage;
