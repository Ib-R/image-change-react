import React from "react";
import image from "../imgs/1.jpg";

export default class ImageContainer extends React.Component {
	render() {
		return (
			<img
				onClick={() => this.props.change()}
				height="300"
				width="400"
				src={this.props.src || image}
				alt="random"
			/>
		);
	}
}
