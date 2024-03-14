import { useState } from "react";
import { useClick } from "./useClick";

function UseClickComponent() {
  const [toggle, setToggle] = useState(true);
  const sayHello = () => setToggle((toggle) => !toggle);
  const clickRef = useClick(sayHello);

  return <p ref={clickRef}>{toggle ? "나를 클릭 해보슈" : "다시 해보슈"}</p>;
}

export default UseClickComponent;
