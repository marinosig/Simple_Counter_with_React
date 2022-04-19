import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import "../styles/index.css";

//create your first component

function Counter6(props) {
	return (
		<div className="container-counter">
			<div className="clock">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-stopwatch"
					viewBox="0 0 16 16">
					<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
					<path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
				</svg>
			</div>
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
}, 1000);
