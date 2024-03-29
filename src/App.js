import React from "react";
import UseInputComponent from "./useInput";
import UseStateBeginUgly from "./useStateBegin";
import UseTabsComponent from "./useTabs";
import UseTitleComponent from "./useTitle";
import UseClickComponent from "./useClick";
import UseConfirmComponent from "./useConfirm";
import UsePreventLeaveComponent from "./usePreventLeave";
import UseBeforeLeaveComponent from "./useBeforeLeave";
import UseFadeInComponent from "./useFadeIn";
import UseNetworkComponent from "./useNetwork";
import UseScrollComponent from "./useScroll";
import UseFullscreenComponent from "./useFullscreen";
import UseNotificationComponent from "./useNotification";
import UseAxiosComponent from "./useAxios";

function App() {
  return (
    <ul>
      <li>
        <h2>Introduction to useState</h2>
        <UseStateBeginUgly />
        <hr />
      </li>
      <li>
        <h2>useInput</h2>
        <UseInputComponent />
        <hr />
      </li>
      <li>
        <h2>useTabs</h2>
        <UseTabsComponent />
        <hr />
      </li>
      <li>
        <h2>useTitle</h2>
        <UseTitleComponent />
        <hr />
      </li>
      <li>
        <h2>useClick</h2>
        <UseClickComponent />
        <hr />
      </li>
      <li>
        <h2>useConfirm</h2>
        <UseConfirmComponent />
        <hr />
      </li>
      <li>
        <h2>usePreventLeave</h2>
        <UsePreventLeaveComponent />
        <hr />
      </li>
      <li>
        <h2>useBeforeLeave</h2>
        <UseBeforeLeaveComponent />
        <hr />
      </li>
      <li>
        <h2>useFadeIn</h2>
        <UseFadeInComponent />
        <hr />
      </li>
      <li>
        <h2>useNetwork</h2>
        <UseNetworkComponent />
        <hr />
      </li>
      <li>
        <h2>useScroll</h2>
        <UseScrollComponent />
        <hr />
      </li>
      <li>
        <h2>useFullscreen</h2>
        <UseFullscreenComponent />
        <hr />
      </li>
      <li>
        <h2>useNotification</h2>
        <UseNotificationComponent />
        <hr />
      </li>
      <li>
        <h2>useAxios</h2>
        <UseAxiosComponent />
        <hr />
      </li>
    </ul>
  );
}

export default App;
