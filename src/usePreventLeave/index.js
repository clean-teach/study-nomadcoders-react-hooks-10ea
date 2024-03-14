import { useEffect, useState } from "react";
import { usePreventLeave } from "./usePreventLeave";

function UsePreventLeaveComponent() {
  const [isProtect, setIsProtect] = useState(false);
  const onChange = () => {
    setIsProtect((isProtect) => !isProtect);
  };

  const { enablePrevent, disablePrevent } = usePreventLeave();

  useEffect(() => {
    if (isProtect) {
      enablePrevent();
    } else {
      disablePrevent();
    }
  }, [isProtect, enablePrevent, disablePrevent]);

  return (
    <>
      <input type="checkbox" id="checkBoxId" onChange={onChange} />
      <label htmlFor="checkBoxId">페이지 이탈 방지 여부</label>
      <p>브라우저 새로고침 등 페이지를 이탈하여 보세요</p>
    </>
  );
}

export default UsePreventLeaveComponent;
