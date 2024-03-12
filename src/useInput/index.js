import { useInput } from "./useInput";

function UseInputComponent() {
  const maxLength = (value) => value.length <= 10;
  const name = useInput("", maxLength);

  return <input {...name} />;
}

export default UseInputComponent;
