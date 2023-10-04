import "./header.css";
import NetworkStatus from "../networkStatus/NetworkStatus";
import VsCurrencySelector from "../vsCurrencySelector/VsCurrencySelector";
import SearchBox from "../searchBox/SearchBox";

const Header = () => {
  return (
    <div className="header">
      <VsCurrencySelector />
      <SearchBox />
      <NetworkStatus />
    </div>
  );
};

export default Header;
