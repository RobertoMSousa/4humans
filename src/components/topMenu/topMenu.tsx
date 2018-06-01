import * as React from "react";

// css
import "./topMenu.scss";

// static assets
const homeSvg = require("./home.svg");
const blogSvg = require("./blog.svg");
const courseSvg = require("./courses.svg");
const booksSvg = require("./books.svg");

import { navigateTo } from "gatsby-link";
import Link from "gatsby-link";

const TopMenu = () => (
	<div className="topMenuWrapper">
		<Link
			exact
			to="/"
			className="topMenuHome center"
			activeClassName="active"
		>
			<img src={homeSvg} className="" alt="" />
			<span>Home</span>
		</Link>

		<Link
			exact
			to="/books"
			className="topMenuBooks center"
			activeClassName="active"
		>
			<img src={booksSvg} className="" alt="" />
			<span>Books</span>
		</Link>

		<Link
			to="/courses"
			activeClassName="active"
			className="topMenuCourses center"
			exact
		>
			<img src={courseSvg} className="" alt="" />
			<span>Courses</span>
		</Link>

		<Link
			exact
			to="/blog"
			className="topMenuBlog center"
			activeClassName="active"
		>
			<img src={blogSvg} className="topMenuIcon" alt="" />
			<span className="topMenuText">Blog</span>
		</Link>
	</div>
);

export default TopMenu;
