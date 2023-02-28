import { Component } from "react";

class OurBestProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render () {
		const { products } = this.props;

		return products.map(item => {
			return (
				<div className="our__best__sectio-item" key={item.id}>
					<img src={item.cover} alt={item.title} />
					<h4>
						<a href="#">{item.title}</a>
					</h4>
					<p>{item.price}</p>
				</div>
			);
		});
	}
}

export default OurBestProducts;