const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    //Notification API
    // permission : 읽기전용
    console.log("테스트테스트");
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};
const AppUseNotification = () => {
  const triggerNotif = useNotification("Alert! Alert~", {
    body: "알람창이 잘 작동하는지 테스트테스트",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Hello!</button>
    </div>
  );
};
export default AppUseNotification;
