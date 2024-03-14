import React from "react";
import UseInputComponent from "./useInput";
import UseStateBeginUgly from "./useStateBegin";
import UseTabsComponent from "./useTabs";
import UseTitleComponent from "./useTitle";
import UseClickComponent from "./useClick";

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
    </ul>
  );
}

export default App;
