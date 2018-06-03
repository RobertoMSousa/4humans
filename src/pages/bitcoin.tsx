import * as React from "react";
import Link from "gatsby-link";

import Footer from "../components/footer/footer";

// static
const bitcoin = require("../svg/bitcoin.png");

// css
import "./css/bitcoin.scss";

export default () => (
	<div className="bitCoinPageWrapper">
		<div className="bitCoinWrapper">
			<div className="bitCoinImage center">
				<img src={bitcoin} className="" alt="" />
			</div>
			<div className="bitCoinText center">
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
