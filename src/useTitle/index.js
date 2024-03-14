import { useEffect, useState } from "react";
import { useTitle } from "./useTitle";

function UseTitleComponent() {
  const TOTAL_SEC = 5;
  const [sec, setSec] = useState(TOTAL_SEC);

  const titleUpdate = useTitle("Loading...");

  useEffect(() => {
    if (sec > 0) {
      setTimeout(() => {
        setSec(sec - 1);
      }, 1000);
    }
    titleUpdate("짜잔!");
  }, [sec, titleUpdate]);

  return (
    <p>
      {sec > 0
        ? `${sec}초 후에 Title이 변경 됩니다.`
        : "Title이 변경 되었습니다"}
    </p>
  );
}

export default UseTitleComponent;
