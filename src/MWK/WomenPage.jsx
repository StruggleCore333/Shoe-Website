import { Link } from 'react-router-dom'; 
import './Women.css';

function WomenPage() {
  const shoes = [
    { name: 'Nike Air Zoom SuperRep 2', price: '₱6,800', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Ultraboost 22 Women', price: '₱10,500', image: 'https://via.placeholder.com/150' },
    { name: 'Puma Deviate Nitro Elite Women', price: '₱9,700', image: 'https://via.placeholder.com/150' },
    { name: 'ASICS Gel-Nimbus 25', price: '₱12,000', image: 'https://via.placeholder.com/150' },
    { name: 'Hoka One One Clifton 9 Women', price: '₱8,300', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance Fresh Foam Roav', price: '₱7,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Flow Velociti Wind', price: '₱9,500', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Adizero Boston 10', price: '₱10,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Free RN Flyknit 2023', price: '₱6,200', image: 'https://via.placeholder.com/150' },
    { name: 'ASICS Novablast 3 Women', price: '₱8,500', image: 'https://via.placeholder.com/150' },
    { name: 'Reebok Floatride Energy 4', price: '₱7,800', image: 'https://via.placeholder.com/150' },
    { name: 'Saucony Endorphin Shift 3', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Pegasus Trail 4', price: '₱8,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas SolarGlide 5 Women', price: '₱9,800', image: 'https://via.placeholder.com/150' },
    { name: 'Mizuno Wave Inspire 19', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Charged Pursuit 3', price: '₱4,500', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 1080v12 Women', price: '₱12,500', image: 'https://via.placeholder.com/150' },
    { name: 'Hoka Bondi X', price: '₱10,700', image: 'https://via.placeholder.com/150' },
    { name: 'Salomon Sense Ride 5', price: '₱11,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike React Infinity Run Flyknit 3', price: '₱9,200', image: 'https://via.placeholder.com/150' },
    { name: 'Brooks Glycerin 20 Women', price: '₱10,300', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Ultraboost Light Women', price: '₱11,000', image: 'https://via.placeholder.com/150' },
    { name: 'Puma Velocity Nitro 2 Women', price: '₱8,900', image: 'https://via.placeholder.com/150' },
    { name: 'ASICS Kayano Lite 3', price: '₱10,500', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Invincible Run Flyknit 3', price: '₱12,800', image: 'https://via.placeholder.com/150' },
    { name: 'Hoka Arahi 6 Women', price: '₱8,700', image: 'https://via.placeholder.com/150' },
    { name: 'Saucony Guide 16 Women', price: '₱8,200', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance Fresh Foam Beacon', price: '₱7,500', image: 'https://via.placeholder.com/150' },
    { name: 'Brooks Launch 9 Women', price: '₱7,000', image: 'https://via.placeholder.com/150' },
    { name: 'Salomon Predict 2 Women', price: '₱10,200', image: 'https://via.placeholder.com/150' },
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

      <div className="Women">
        <h1>WOMEN</h1>
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

export default WomenPage;
