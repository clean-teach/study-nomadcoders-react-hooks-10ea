import { useFullscreen } from "./useFullscreen";

function UseFullscreenComponent() {
  const callbackFullScreen = (isFull) => {
    console.log(isFull ? "full 이 마음에 드는가?" : "full을 해보겠는가?");
  };
  const { element, triggerFull, triggerExitFull, isFull } =
    useFullscreen(callbackFullScreen);
  return (
    <>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        {isFull && (
          <button type="button" onClick={triggerExitFull}>
            exit full screen
          </button>
        )}
      </div>
      <button type="button" onClick={triggerFull}>
        full screen
      </button>
    </>
  );
}

export default UseFullscreenComponent;
