import { useFadeIn } from "./useFadeIn";

function UseFadeInComponent() {
  const fadeInH1 = useFadeIn(1, 1);
  const fadeInP = useFadeIn(2, 0);

  return (
    <>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>나는 문단이다</p>
    </>
  );
}

export default UseFadeInComponent;
