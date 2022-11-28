//오프라인 온라인 상태 확인

import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const AppUseNetwork = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "Online!!" : "Offline!!");
  };
  const onLine = useNetwork(handleNetworkChange);
  return <div>{onLine ? "Online" : "Offline"}</div>;
};

export default AppUseNetwork;
