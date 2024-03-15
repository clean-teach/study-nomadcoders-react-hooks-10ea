import { useScroll } from "./useScroll";

function UseScrollComponent() {
  const { y } = useScroll();

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <p style={{ position: "absolute", left: 0, top: 0 }}>
        Scroll 해보슈 : y : {y}
      </p>
    </div>
  );
}

export default UseScrollComponent;
