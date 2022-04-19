//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter6 from "./component/mainclock-old.js";
import Seconds from "./component/mainclock-old.js";

//render your react application
ReactDOM.render(<Seconds />, document.querySelector("#app"));