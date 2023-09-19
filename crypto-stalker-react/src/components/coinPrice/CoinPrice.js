const CoinPrice = ({ coinPrice, vsCurrency }) => {
  return (
    <>
      <p className="coin-price">{`${coinPrice}-${vsCurrency}`}</p>
    </>
  );
};

export default CoinPrice;
