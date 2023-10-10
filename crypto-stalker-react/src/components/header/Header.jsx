import "./header.css";
import NetworkStatus from "../networkStatus/NetworkStatus";
import VsCurrencySelector from "../vsCurrencySelector/VsCurrencySelector";
import SearchBox from "../searchBox/SearchBox";
import UpdateNotification from "../updateNotification/UpdateNotification";
import NavBar from "../navBar/NavBar";
import { CountdownProvider } from "../../contexts/CountDownContext";
import { useState } from "react";

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  return (
    <header className="header-container">
      <div className="header">
        <span className="header-cta">
          <VsCurrencySelector />
          <SearchBox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <span className="nav-bar">
            <NavBar />
          </span>
        </span>

        <span className="header-jfi">
          <NetworkStatus isOnline={isOnline} setIsOnline={setIsOnline} />
          <CountdownProvider>
            <UpdateNotification isOnline={isOnline} />
          </CountdownProvider>
        </span>
      </div>
    </header>
  );
};

export default Header;
