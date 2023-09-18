import './welcomePage.css';

const WelcomePage = () => {

  return (
    <div id="welcome-container" className="welcome-container">
      <img
        id="welcome-image"
        src="./logo192.png"
        alt="Welcome to Crypto Stalker"
        className="welcome-image"
      />
      <p id="welcome-text" className="welcome-text">
        Crypto Stalker
      </p>
      <p id="welcome-slogan" className="welcome-slogan">
        Track Your Favorite Cryptocurrencies
      </p>
    </div>
  );
};

export default WelcomePage;
