import { useState } from "react";
import { useBeforeLeave } from "./useBeforeLeave";

function UseBeforeLeaveComponent() {
  const [isLeave, setIsLeave] = useState(false);
  const mouseLeave = () => {
    setIsLeave(true);
  };
  const mouseenter = () => {
    setIsLeave(false);
  };
  useBeforeLeave(mouseLeave, mouseenter);
  return (
    <p style={isLeave ? { color: "red" } : { color: "black" }}>
      {isLeave
        ? "삐짐!!"
        : "마우스를 브라우저 문서 밖으로 벗어나게 하면 나는 삐질 것이다. 특히 윗 방향으로 벗어나게 하면 말이다."}
    </p>
  );
}

export default UseBeforeLeaveComponent;
