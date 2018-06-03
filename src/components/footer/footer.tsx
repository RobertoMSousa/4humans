import * as React from "react";

import Newsletter from "../newsletter/newsletter";

// css
import "./footer.scss";

// static
const facebook = require("./facebook.svg");
const twitter = require("./twitter.svg");
const youtube = require("./youtube.svg");
const discord = require("./discord.svg");

const Footer = () => (
	<div className="indexFooter">

		<div className="indexFooterAbout">
			<span className="indexFooterTitle center">Follow us:</span>
			<div className="indexFooterAboutBottom center">
				<img src={facebook} className="indexFooterSocialIcon" alt="" />
				<img src={twitter} className="indexFooterSocialIcon" alt="" />
				<img src={youtube} className="indexFooterSocialIcon" alt="" />
				<img src={discord} className="indexFooterSocialIcon" alt="" />
			</div>
		</div>

		<div className="indexFooterSupport">
			<span className="indexFooterTitle center">Support this dream</span>
			<div className="indexFooterSupportButton center">
				<span className="center">Support on Patreon</span>
			</div>
		</div>

		<div className="indexFooterNewsletter">
			<span className="indexFooterTitle center">Newsletter</span>
			<div className="indexFooterNewsletterBottom center">
				<Newsletter/>
			</div>
		</div>

	</div>
);

export default Footer;
