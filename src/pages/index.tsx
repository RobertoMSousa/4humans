import * as React from "react";
import Link from "gatsby-link";

import Footer from "../components/footer/footer";

// css
import "./css/index.scss";

export default () => (
	<div className="indexPageWrapper">
		<div className="indexWhy"></div>
		<div className="indexHow"></div>
		<div className="indexWhat"></div>
		<Footer/>
	</div>
);
