import * as React from "react";
import Link from "gatsby-link";
import { GraphQLID } from "graphql";

// css
import "./topMenu.css";

// static assets
const homeSvg = require("./home.svg");
const blogSvg = require("./blog.svg");
const courseSvg = require("./courses.svg");
const booksSvg = require("./books.svg");

const TopMenu = () => (
	<div className="topMenuWrapper">
		<div className="topMenuHome center">
			<img src={homeSvg} className="" alt=""/>
			<span>Home</span>
		</div>
		<div className="topMenuBooks center">
			<img src={booksSvg} className="" alt=""/>
			<span>Books</span>
		</div>
		<div className="topMenuCourses center">
			<img src={courseSvg} className="" alt=""/>
			<span>Courses</span>
		</div>
		<div className="topMenuBlog center">
			<img src={blogSvg} className="topMenuIcon" alt=""/>
			<span className="topMenuText">Blog</span>
		</div>
	</div>
);

export default TopMenu;
