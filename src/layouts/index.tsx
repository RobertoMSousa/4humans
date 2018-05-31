import * as React from "react";
import * as PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/header/header";
import "./index.css";

const Layout: any = ({ children, data }) => (
	<div style={{height: "100vh"} } >
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{ name: "description", content: "Sample" },
				{ name: "keywords", content: "sample, something" },
			]}
		/>

		<Header siteTitle={data.site.siteMetadata.title} />

		<div
			style={{
				margin: "0 auto",
				padding: "0px 1.0875rem 1.45rem",
				paddingTop: 0,
			}}
		>
			{children()}
		</div>
	</div>
);

Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
