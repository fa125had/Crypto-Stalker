import "./header.css";
import NetworkStatus from "../networkStatus/NetworkStatus";
import VsCurrencySelector from "../vsCurrencySelector/VsCurrencySelector";

const Header = ({ selectedVsCurrency, setSelectedVsCurrency }) => {
  const handleVsCurrencyChange = (newCurrency) => {
    setSelectedVsCurrency(newCurrency);
  };

  return (
    <div className="header">
      <VsCurrencySelector
        handleChange={handleVsCurrencyChange}
        selectedVsCurrency={selectedVsCurrency}
      />
      <NetworkStatus />
    </div>
  );
};

export default Header;
