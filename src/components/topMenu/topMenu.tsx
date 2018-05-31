import * as React from "react";
import Link from "gatsby-link";
import { GraphQLID } from "graphql";

// css
import "./topMenu.css";
// import homeSvg from "./home.svg";

const TopMenu = () => (
	<div className="topMenuWrapper">
		<div className="topMenuHome"></div>
		<div className="topMenuBooks"></div>
		<div className="topMenuCourses"></div>
		<div className="topMenuBlog"></div>
	</div>
);

export default TopMenu;
