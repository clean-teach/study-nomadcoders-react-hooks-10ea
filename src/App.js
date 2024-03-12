import React from "react";
import UseInputComponent from "./useInput";
import UseStateBeginUgly from "./useStateBegin";
import UseTabsComponent from "./useTabs";

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
    </ul>
  );
}

export default App;
