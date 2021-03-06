
import Helmet from "react-helmet";
import Link from "gatsby-link";
import * as React from "react";

export default function Blog({ data }) {
	const { edges: posts } = data.allMarkdownRemark;
	return (
		<div className="blog-posts">
			{posts
				.filter((post) => post.node.frontmatter.title.length > 0)
				.map(({ node: post }) => {
					return (
						<div className="blog-post-preview" key={post.id}>
							<h1>
								<Link to={post.frontmatter.path}>
									{post.frontmatter.title}
								</Link>
							</h1>
							<h2>
								{post.frontmatter.date}
							</h2>
							<p>
								{post.excerpt}
							</p>
						</div>
					);
				})}
		</div>
	);
}

export const pageQuery = graphql`
	query BlogQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] },
			filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}}
		) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
					}
				}
			}
		}
	}
`;
