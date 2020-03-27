import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
// import faker from "faker";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return (
    <div className="App">
      <SeasonDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
