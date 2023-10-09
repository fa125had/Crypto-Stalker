import { useCountdown } from "../../contexts/CountDownContext";

const UpdateNotification = () => {
  const { countdown } = useCountdown();

  return (
    <div className="countdown-container">
      <p className="data-update-countdown">
        Next Update in {countdown} seconds
      </p>
    </div>
  );
};

export default UpdateNotification;
