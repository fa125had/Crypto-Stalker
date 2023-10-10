import "./update-notification.css";
import { useCountdown } from "../../contexts/CountDownContext";

const UpdateNotification = ({ isOnline }) => {
  const { countdown } = useCountdown();

  return (
    <div className="countdown-container">
      {countdown === 0 && <p className="update-done">Updated!</p>}
      {isOnline && countdown > 0 && (
        <p className="countdown">Next Update {countdown}s</p>
      )}
      {!isOnline && <p className="net-down">Your Offline!</p>}
    </div>
  );
};

export default UpdateNotification;
