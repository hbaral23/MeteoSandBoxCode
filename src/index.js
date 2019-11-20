import React from "react";
import ReactDOM from "react-dom";
//import { FetchRandomUser} from "FetchRandomUser.js"

import "./styles.css";

function App() {
  return (
    /*<FetchRandomUser></FetchRandomUser>*/
    <div className="App">
      <h1>Appli Météo !</h1>
      <img src="./res/sun.png" alt="sun" className="picture sun" />
      <img src="./res/rain.png" alt="rain" className="picture rain" />
      <img src="./res/snowing.png" alt="sun" className="picture cloud" />
      <div id="circle" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
