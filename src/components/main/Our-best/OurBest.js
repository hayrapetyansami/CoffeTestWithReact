import { Component } from "react";

import OurBestProducts from "./Our-best-products/OurBestProducts";

import "./OurBest.scss"

import bg from "../../../img/our-best-bg.png";
import item1 from "../../../img/item1.jpg";
import item2 from "../../../img/item2.jpg";
import item3 from "../../../img/item3.jpg";

class OurBest extends Component {
	constructor (props) {
		super(props);
		this.state = {
			products: [
				{ title: "Solimo Coffee Beans 2 kg", price: "10.73$", cover: item1, id: 1 },
				{ title: "Presto Coffee Beans 1 kg", price: "15.99$", cover: item2, id: 2 },
				{ title: "AROMISTICO Coffee 1 kg", price: "6.99$", cover: item3, id: 3 }
			]
		};
	}
	render () {
		return (
			<div className="our__best__section-full" style={{ backgroundImage: `url(${bg})`}}>
				<div className="our__best__section container">
					<h2>Our Best</h2>

					<div className="our__best__sectio-items">
						{<OurBestProducts products={this.state.products}/>}
					</div>
				</div>
			</div>
		)
	}
}

export default OurBest;