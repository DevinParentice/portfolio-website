import React from "react";
import CELLS from 'vanta/dist/vanta.cells.min';
import Project1 from "./components/Project1";
import SplashPage from './components/SplashPage'
import "./styles/App.css";

class App extends React.Component {

	constructor() {
		super();
		this.vantaRef = React.createRef();
	}

	componentDidMount() {
		this.vantaEffect = CELLS({
			el: this.vantaRef.current,
			mouseControls: true,
			touchControls: true,
			gyroControls: true,
			minHeight: 200.00,
			minWidth: 200.00,
			scale: 1.00,
			color1: 0x343434,
			color2: 0x0,
			size: 2.50,
			speed: 0.00
		});
	}

	componentWillUnmount() {
		if (this.vantaEffect) this.vantaEffect.destroy();
	}

	render() {
		return (
			<div className="App bg-gray-900 overflow-hidden">
				<div ref={this.vantaRef} className="sections">
					<SplashPage />
					<Project1 />
				</div>
			</div>
		  );
	}

}

export default App;
