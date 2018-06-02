import * as React from "react";

// css
import "./footer.scss";

const Footer = () => (
	<div className="indexFooter">

		<div className="indexFooterAbout">
			<span className="indexFooterTitle center">About us</span>
			<div className="indexFooterAboutBottom" />
		</div>

		<div className="indexFooterSupport">
			<span className="indexFooterTitle center">Support this dream</span>
			<div className="indexFooterSupportButton center">
				<span className="center">Support on Patreon</span>
			</div>
		</div>

		<div className="indexFooterNewsletter">
			<span className="indexFooterTitle center">Newsletter</span>
			<div className="indexFooterNewsletterBottom" />
		</div>

	</div>
);

export default Footer;
