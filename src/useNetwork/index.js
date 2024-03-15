import { useNetwork } from "./useNetwork";

function UseNetworkComponent() {
  const handleNetworkChange = (online) => {
    console.log(`${online}`);
  };
  const onLine = useNetwork(handleNetworkChange);

  return <p>네트워크 상태 : {onLine ? "online" : "offline"}</p>;
}

export default UseNetworkComponent;
