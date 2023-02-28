import { Component } from "react";

import "./AboutUs.scss";

import AfterTitleIcon from "../../../utils/AfterTitleIcon";

class AboutUs extends Component {
	render () {
		const { aboutUsTitle, aboutUsFirstText, aboutUsSecondText } = this.props.fromApp.data[0];

		return(
			<div className="about__us__section">
				<article>
					<h2>{aboutUsTitle}</h2>
					<AfterTitleIcon />
					<p>
						{aboutUsFirstText}
					</p>
					<p>
						{aboutUsSecondText}
					</p>
				</article>
			</div>
		)
	}
}

export default AboutUs;