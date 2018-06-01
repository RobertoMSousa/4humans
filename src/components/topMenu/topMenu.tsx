import * as React from "react";
// import Link from "gatsby-link";
// import { connect } from "react-redux";
// import { Dispatch } from "redux";
// import * as PropTypes from "prop-types";

// css
import "./topMenu.css";

// static assets
const homeSvg = require("./home.svg");
const blogSvg = require("./blog.svg");
const courseSvg = require("./courses.svg");
const booksSvg = require("./books.svg");

import { navigateTo } from "gatsby-link"

const TopMenu = () => (
	<div className="topMenuWrapper">
		<div
			className="topMenuHome center"
			onClick={ () => navigateTo("/")}
		>
			<img src={homeSvg} className="" alt="" />
			<span>Home</span>
		</div>

		<div
			className="topMenuBooks center"
			onClick={ () => navigateTo("/books")}
		>
			<img src={booksSvg} className="" alt="" />
			<span>Books</span>
		</div>

		<div
			className="topMenuCourses center"
			onClick={ () => navigateTo("/courses")}
		>
			<img src={courseSvg} className="" alt="" />
			<span>Courses</span>
		</div>

		<div
			className="topMenuBlog center"
			onClick={ () => navigateTo("/blog")}
		>
			<img src={blogSvg} className="topMenuIcon" alt="" />
			<span className="topMenuText">Blog</span>
		</div>
	</div>
);

export default TopMenu;
