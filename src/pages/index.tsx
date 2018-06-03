import * as React from "react";
import Link from "gatsby-link";

import Footer from "../components/footer/footer";

// static
const unite = require("../svg/unite.svg");
const elearning = require("../svg/elearning.svg");
const crowdfunding = require("../svg/crowdfunding.svg");
const what = require("../svg/what.svg");
// css
import "./css/index.scss";

export default () => (
	<div className="indexPageWrapper">
		<div className="indexWhy">
			<div className="indexWhyImage center">
				<img src={unite} className="" alt="" />
			</div>
			<div className="indexWhyText center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nam commodo leo sollicitudin turpis consequat, a aliquam massa fermentum. Cras eget tempus sem.
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					Sed nec faucibus est, a suscipit turpis. Vivamus rutrum imperdiet iaculis.
					Phasellus dignissim luctus dignissim.
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					Sed faucibus augue eu tincidunt suscipit.
				</p>
			</div>
		</div>
		<div className="indexHow">
			<div className="indexHowImage center">
				<img src={elearning} className="" alt="" />
			</div>
			<div className="indexHowText center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nam commodo leo sollicitudin turpis consequat, a aliquam massa fermentum. Cras eget tempus sem.
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					Sed nec faucibus est, a suscipit turpis. Vivamus rutrum imperdiet iaculis.
					Phasellus dignissim luctus dignissim.
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					Sed faucibus augue eu tincidunt suscipit.
				</p>
			</div>
		</div>
		<div className="indexWhat">
			<div className="indexWhatImage center">
				<img src={what} className="" alt="" />
			</div>
			<div className="indexWhatText center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nam commodo leo sollicitudin turpis consequat, a aliquam massa fermentum. Cras eget tempus sem.
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					Sed nec faucibus est, a suscipit turpis. Vivamus rutrum imperdiet iaculis.
					Phasellus dignissim luctus dignissim.
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					Sed faucibus augue eu tincidunt suscipit.
				</p>
			</div>
		</div>
		<div className="indexCrowdfunding">
			<div className="indexCrowdfundingImage center">
					<img src={crowdfunding} className="" alt="" />
				</div>
				<div className="indexCrowdfundingText center">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam commodo leo sollicitudin turpis consequat, a aliquam massa fermentum. Cras eget tempus sem.
						Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
						Sed nec faucibus est, a suscipit turpis. Vivamus rutrum imperdiet iaculis.
						Phasellus dignissim luctus dignissim.
						Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
						Sed faucibus augue eu tincidunt suscipit.
					</p>
			</div>
		</div>
		<Footer/>
	</div>
);
