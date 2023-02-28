import { Component } from "react";

import AboutUs from "./About-us/AboutUs";
import OurBest from "./Our-best/OurBest";

class Main extends Component {
	render(){
		return (
			<main>
				<div>
					<AboutUs fromApp={this.props}/>
					<OurBest/>
				</div>
			</main>
		)
	}
}

export default Main;