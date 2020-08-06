import React from "react";
import image from "../imgs/1.jpg";

export default function Button1(props) {
	return (
		<button
			className={props.selected === image ? "selected" : null}
			onClick={() => props.change(image)}
		>
			First Image
		</button>
	);
}
