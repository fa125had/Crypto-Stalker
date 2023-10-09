import "./header.css";
import NetworkStatus from "../networkStatus/NetworkStatus";
import VsCurrencySelector from "../vsCurrencySelector/VsCurrencySelector";
import SearchBox from "../searchBox/SearchBox";
import UpdateNotification from "../updateNotification/UpdateNotification";
import { CountdownProvider } from "../../contexts/CountDownContext";

const Header = ({ searchQuery, setSearchQuery, refreshTime }) => {
  return (
    <div className="header">
      <VsCurrencySelector />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NetworkStatus />
      <CountdownProvider>
        <UpdateNotification />
      </CountdownProvider>
    </div>
  );
};

export default Header;
