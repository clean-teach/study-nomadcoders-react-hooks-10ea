import { useClick } from "./useClick";

function UseClickComponent() {
  const sayHello = () => console.log("Hello!");
  const clickRef = useClick(sayHello);

  return <p ref={clickRef}>나를 클릭 해보슈</p>;
}

export default UseClickComponent;
