import React from "react";

const VsCurrencySelector = ({ selectedVsCurrency,handleChange }) => {
  return (
    <>
      <span className="currency-selector-container">
        <select
          id="currency-selector"
          value={selectedVsCurrency}
          onChange={({ target }) => handleChange(target.value)}
        >
          <option value="usd">USD</option>
          <option value="btc">BTC</option>
          <option value="eur">Eur</option>
        </select>
      </span>
    </>
  );
};

export default VsCurrencySelector;
