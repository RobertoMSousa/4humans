import * as React from "react";
import Link from "gatsby-link";

// css
import "./css/index.scss";

export default () => (
	<div className="indexPageWrapper">
		<div className="indexWhy"></div>
		<div className="indexHow"></div>
		<div className="indexWhat"></div>
		<div className="indexFooter">
			<div className="indexFooterAbout">
				<span className="indexFooterTitle center">About us</span>
				<div className="indexFooterAboutBottom"></div>
			</div>
			<div className="indexFooterSupport">
				<span className="indexFooterTitle center">Support this dream</span>
				<div className="indexFooterSupportButton center">
					<span className="center">Support on Patreon</span>
				</div>
			</div>
			<div className="indexFooterNewsletter">
				<span className="indexFooterTitle center">Newsletter</span>
				<div className="indexFooterNewsletterBottom"></div>
			</div>
		</div>
	</div>
);
