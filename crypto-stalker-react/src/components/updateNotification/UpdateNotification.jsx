import "./update-notification.css";
import { useCountdown } from "../../contexts/CountDownContext";

const UpdateNotification = ({ isOnline }) => {
  const { countdown } = useCountdown();

  return (
    <div className="countdown-container">
      {isOnline && <p className="countdown">Next Update {countdown}s</p>}
      {!isOnline && <p>Your Offline!</p>}
    </div>
  );
};

export default UpdateNotification;
