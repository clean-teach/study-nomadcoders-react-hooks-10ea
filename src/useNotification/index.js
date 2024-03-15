import { useNotification } from "./useNotification";

function UseNotificationComponent() {
  const triggerNotifications = useNotification("알림 테스트", {
    body: "잘 가냐~",
  });
  return (
    <button type="button" onClick={triggerNotifications}>
      알림 보내기
    </button>
  );
}

export default UseNotificationComponent;
