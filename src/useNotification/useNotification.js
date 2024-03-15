export const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }
  const handleNotification = () => {
    if (Notification.permission !== "granted") {
      // 현재 알림 동의가 거부 되어 있느 상태이므로, 한 번 더 동의 여부 시도
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };
  return handleNotification;
};
