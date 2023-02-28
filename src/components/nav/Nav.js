import { Component } from "react";

import { LogoWhite, LogoBlack } from "../../utils/Logo";
import Menu from "../../utils/Menu";

import "./Nav.scss";

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navScrolled: false
		}
	}

	onNavScroll = () => {
		document.addEventListener("scroll", () => {
			let scrollStatment = window.scrollY > 50;

			if (scrollStatment !== this.state.navScrolled) {
				this.setState({navScrolled: scrollStatment});
			}
		});
	}

	
	render() {
		const { navScrolled } = this.state;
		
		let navClass;
		if (navScrolled) {
			navClass = "navScrolled";
		}

		this.onNavScroll();

		return (
			<nav className={navClass}>
				<div className="container">
					<div className="nav_left">
						<div className="logo">
							{navScrolled ? <LogoBlack /> : <LogoWhite />}
						</div>
						<Menu/>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;