import { Component } from "react";

import { LogoBlack } from "../../utils/Logo";
import Menu from "../../utils/Menu";
import AfterTitleIcon from "../../utils/AfterTitleIcon";

import "./Footer.scss";

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="footer__menu">
						<LogoBlack/>
						<Menu/>
					</div>
					<div className="footer__bottom">
						<AfterTitleIcon/>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;