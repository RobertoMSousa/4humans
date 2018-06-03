import * as React from "react";
import Particles from "react-particles-js";
import TopMenu from "../topMenu/topMenu";

// static assets
const logo = require("../../svg/company_logo.svg");

// css
import "./header.scss";

const Header = ({ siteTitle }) => (
	<div className="headerWrapper">
		<Particles
			width= "100%"
			params={{
				particles: {
					number: {
						density: {
							enable: true,
							value_area: 868.0624057955,
						},
						value: 100,
					},
					color: {
						value: "#ecd018",
					},
					shape: {
						type: "circle",
						stroke: {
							color: "#000000",
							width: 0,
						},
						polygon: {
							nb_sides: 3,
						},
					},
					opacity: {
						value: 0.5,
						random: true,
						// anim: {
						// 	enable: false,
						// 	speed: 1,
						// 	opacity_min: 0.1,
						// 	sync: false,
						// },
					},
					size: {
						value: 3,
						random: true,
						// anim: {
						// 	enable: false,
						// 	speed: 40,
						// 	size_min: 0.1,
						// 	sync: false,
						// },
					},
					line_linked: {
						enable: true,
						distance: 150,
						color: "#e2d018",
						opacity: 0.6,
						width: 1,
					},
					move: {
						enable: true,
						speed: 5,
						direction: "none",
						random: true,
						straight: false,
						out_mode: "out",
						bounce: false,
						// attract: {
						// 	enable: false,
						// 	rotateX: 600,
						// 	rotateY: 1200,
						// },
					},
				},
				retina_detect: true,
			}}
			style={{
				backgroundColor: "#252527",
				position: "absolute",
				width: "100%",
				height: "100%",
			}}
		/>
		<div className="headerIconAndMenu">
			<div className="headerCompanyLogo center">
				<img src={logo} className="" alt="" />
			</div>
			<TopMenu/>
		</div>
	</div>
);

export default Header;
