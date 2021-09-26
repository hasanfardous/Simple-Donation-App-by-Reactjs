import handsUp from '../../images/hands-up.png';
import './Header.css';

function Header() {
  return (
    <div className="header-wrapper">
        <img src={handsUp}/>
        <h1>Your Help Is Needed!
          <span>Donate</span> 
          Donate Now!</h1>
    </div>
  );
}

export default Header;
