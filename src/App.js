import React from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
import image1 from "./imgs/1.jpg";
import image2 from "./imgs/2.jpg";
import image3 from "./imgs/3.jpg";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentImg: "",
			count: 0,
			images: [image1, image2, image3],
		};
	}

	changeImage(image = null) {
		if (image) {
			this.setState({ currentImg: image });
		} else {
			let count =
				this.state.count !== this.state.images.length ? this.state.count : 0;
			this.setState({ currentImg: this.state.images[count] });
			count++;
			this.setState({ count });
		}
	}

	render() {
		return (
			<div className="App">
				<Button1
					selected={this.state.currentImg}
					change={this.changeImage.bind(this)}
				/>
				<div className="imageDiv">
					<Button2
						selected={this.state.currentImg}
						change={this.changeImage.bind(this)}
					/>
					<ImageContainer
						change={this.changeImage.bind(this)}
						src={this.state.currentImg}
					/>
					<Button3
						selected={this.state.currentImg}
						change={this.changeImage.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default App;
