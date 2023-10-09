import "./header.css";
import NetworkStatus from "../networkStatus/NetworkStatus";
import VsCurrencySelector from "../vsCurrencySelector/VsCurrencySelector";
import SearchBox from "../searchBox/SearchBox";
import UpdateNotification from "../updateNotification/UpdateNotification";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="header">
      <VsCurrencySelector />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NetworkStatus />
      <UpdateNotification />
    </div>
  );
};

export default Header;
