const CoinLogo = ({ coinLogoSrc, coinName }) => {
  return (
    <figure className="coin-logo">
      <img src={coinLogoSrc} alt={coinName} title={coinName} />
    </figure>
  );
};

export default CoinLogo;
