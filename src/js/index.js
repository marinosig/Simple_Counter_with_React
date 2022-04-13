import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import "../styles/index.css";

//create your first component

function Counter6(props) {
	return (
		<div className="container-counter">
			<div className="clock">TIMER --> </div>
			<div className="segundos">{props.dig1} </div>
			<div className="segundos">{props.dig2} </div>
			<div className="segundos">{props.dig3} </div>
			<div className="segundos">{props.dig4} </div>
			<div className="segundos">{props.dig5} </div>
			<div className="segundos">{props.dig6} </div>
		</div>
	);
}

Counter6.propTypes = {
	dig1: propTypes.string,
	dig2: propTypes.string,
	dig3: propTypes.string,
	dig4: propTypes.string,
	dig5: propTypes.string,
	dig6: propTypes.string,
};

var counter = 0;
setInterval(function () {
	let stringNumber = counter++;
	let result = stringNumber.toString();
	let position5 = result[result.length - 2] ? result[result.length - 2] : "0";
	let position4 = result[result.length - 3] ? result[result.length - 3] : "0";
	let position3 = result[result.length - 4] ? result[result.length - 4] : "0";
	let position2 = result[result.length - 5] ? result[result.length - 5] : "0";
	let position1 = result[result.length - 6] ? result[result.length - 6] : "0";
	let position6 = result[result.length - 1] ? result[result.length - 1] : "0";
	console.log(
		position1,
		position2,
		position3,
		position4,
		position5,
		position6
	);
	ReactDOM.render(
		<Counter6
			dig1={position1}
			dig2={position2}
			dig3={position3}
			dig4={position4}
			dig5={position5}
			dig6={position6}
		/>,
		document.querySelector("#app")
	);

	// } else console.log(dig6);
}, 1000);
