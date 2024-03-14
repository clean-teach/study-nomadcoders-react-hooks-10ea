import { useState } from "react";
import { useConfirm } from "./useConfirm";

function UseConfirmComponent() {
  const [word, setWord] = useState("나를 진짜로 삭제 할거야??");
  const deleteWord = () => {
    setWord("");
  };
  const cancle = () => {
    setWord("취소 했대요~ 취소 했대요~");
  };
  const confirmDelete = useConfirm(
    "레알로다가 삭제 하시겠습니까?",
    deleteWord,
    cancle
  );

  return (
    <>
      <button onClick={confirmDelete}>삭제</button>
      <input value={word} readOnly placeholder="읽기 전용" />
    </>
  );
}

export default UseConfirmComponent;
