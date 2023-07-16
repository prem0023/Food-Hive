import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnlineEvent = (e) => {
    setIsOnline(true);
  };

  const handleOfflineEvent = (e) => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnlineEvent);
    window.addEventListener("offline", handleOfflineEvent);

    clearInterval();

    return () => {
      window.removeEventListener("online", handleOnlineEvent);
      window.removeEventListener("offline", handleOfflineEvent);
    };
  }, []);

  return isOnline;
};

export default useOnline;
