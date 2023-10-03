import "./header.css";
import NetworkStatus from "../networkStatus/NetworkStatus";
import VsCurrencySelector from "../vsCurrencySelector/VsCurrencySelector";

const Header = () => {
  return (
    <div className="header">
      <VsCurrencySelector />
      <NetworkStatus />
    </div>
  );
};

export default Header;
