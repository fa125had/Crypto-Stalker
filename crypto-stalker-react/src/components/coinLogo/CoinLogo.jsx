import './coinLogo.css'

const CoinLogo = ({ src, name }) => {
  return (
    <figure className="coin-logo">
      <img src={src} alt={name} title={name} />
    </figure>
  );
};

export default CoinLogo;
