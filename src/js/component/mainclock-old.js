import propTypes from "prop-types";
import React from "react";

//include images into your bundle

//create your first component

const Counter6 = (props) => {
	return (
		<div className="counter">
			<div className="clock">clock icon</div>
			<div className="segundos">{props.dig1}</div>
			<div className="segundos">{props.dig2}</div>
			<div className="segundos">{props.dig3}</div>
			<div className="segundos">{props.dig4}</div>
			<div className="segundos">{props.dig5}</div>
			<div className="segundos">{props.dig6}</div>
		</div>
	);
};

Counter6.propTypes = {
	dig1: propTypes.string,
	dig2: propTypes.string,
	dig3: propTypes.string,
	dig4: propTypes.string,
	dig5: propTypes.string,
	dig6: propTypes.string,
};

const Seconds = () => {
	var counter = 0;
	const Timer = setInterval(function () {
		let stringNumber = counter++;
		// let digito1 = stringNumber % 10;
		// let digito2 = Math.floor(stringNumber / 10);
		// let digito3 = Math.floor(stringNumber / 100);
		// let digito4 = Math.floor(stringNumber / 1000);
		// let digito5 = Math.floor(stringNumber / 10000);
		// let digito6 = Math.floor(stringNumber / 100000);
		// B.solution "const one = Math.floor(counter / 1) % 10;"
		// console.log(digito6, digito5, digito4, digito3, digito2, digito1);
		let result = stringNumber.toString();
		let position5 = result[result.length - 2]
			? result[result.length - 2]
			: "0";
		let position4 = result[result.length - 3]
			? result[result.length - 3]
			: "0";
		let position3 = result[result.length - 4]
			? result[result.length - 4]
			: "0";
		let position2 = result[result.length - 5]
			? result[result.length - 5]
			: "0";
		let position1 = result[result.length - 6]
			? result[result.length - 6]
			: "0";
		let position6 = result[result.length - 1]
			? result[result.length - 1]
			: "0";
		console.log(
			position1,
			position2,
			position3,
			position4,
			position5,
			position6
		);

		// } else console.log(dig6);
	}, 1000);
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
};

export default Seconds;
