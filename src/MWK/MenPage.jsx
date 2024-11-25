import { Link } from 'react-router-dom';
import './Men.css';

function MenPage() {
  const shoes = [
    { name: 'Nike Air Zoom Pegasus 40', price: '₱7,500', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Ultraboost 22', price: '₱10,000', image: 'https://via.placeholder.com/150' },
    { name: 'Anta KT Light 5', price: '₱5,500', image: 'https://via.placeholder.com/150' },
    { name: 'Anta Shock the Game 5.0', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'Puma Deviate Nitro 2', price: '₱9,500', image: 'https://via.placeholder.com/150' },
    { name: 'Anta Flashfoam Running Shoes', price: '₱4,500', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour HOVR Machina 3', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance 990v5', price: '₱12,000', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance FuelCell Rebel v3', price: '₱9,500', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Metcon 8', price: '₱8,500', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour HOVR Phantom 3', price: '₱8,500', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Charged Assert 9', price: '₱3,500', image: 'https://via.placeholder.com/150' },
    { name: 'Reebok Nano X2', price: '₱7,000', image: 'https://via.placeholder.com/150' },
    { name: 'Saucony Endorphin Speed', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'ASICS Gel-Kayano 29', price: '₱11,000', image: 'https://via.placeholder.com/150' },
    { name: 'Hoka One One Clifton 8', price: '₱8,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas NMD_R1', price: '₱6,500', image: 'https://via.placeholder.com/150' },
    { name: 'Nike Revolution 6', price: '₱3,800', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Flow Velociti', price: '₱10,000', image: 'https://via.placeholder.com/150' },
    { name: 'Puma Velocity Nitro 2', price: '₱9,300', image: 'https://via.placeholder.com/150' },
    { name: 'ASICS Novablast 3', price: '₱7,200', image: 'https://via.placeholder.com/150' },
    { name: 'New Balance Fresh Foam X', price: '₱9,000', image: 'https://via.placeholder.com/150' },
    { name: 'Mizuno Wave Rider 26', price: '₱8,400', image: 'https://via.placeholder.com/150' },
    { name: 'Salomon Ultra Glide', price: '₱10,000', image: 'https://via.placeholder.com/150' },
    { name: 'Adidas Adizero SL', price: '₱8,000', image: 'https://via.placeholder.com/150' },
    { name: 'Nike ZoomX Invincible 3', price: '₱12,500', image: 'https://via.placeholder.com/150' },
    { name: 'ASICS Metaspeed Sky+', price: '₱15,000', image: 'https://via.placeholder.com/150' },
    { name: 'Under Armour Charged Bandit', price: '₱5,200', image: 'https://via.placeholder.com/150' },
    { name: 'Saucony Kinvara 13', price: '₱7,800', image: 'https://via.placeholder.com/150' },
    { name: 'Hoka Bondi 8', price: '₱9,700', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <div className="header1"></div>

      <div className="header2">
        <div className="navbar">
          <Link to="/" className="logo">HyperStep</Link> {/* Make the logo clickable and link to MainPage */}

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

      <div className="Men">
        <h1>MEN</h1>
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

export default MenPage;
