
import Helmet from "react-helmet";
import Link from "gatsby-link";
import * as React from "react";

// css
import "./css/books.scss";

export default function BooksPage({ data }) {
	const { edges: books } = data.allMarkdownRemark;
	return (
		<div className="blog-posts">
			{books
				.filter((book) => book.node.frontmatter.title.length > 0)
				.map(({ node: book }) => {
					return (
						<div className="blog-post-preview" key={book.id}>
							<h1>
								<Link to={book.frontmatter.path}>
									{book.frontmatter.title}
								</Link>
							</h1>
							<h2>
								{book.frontmatter.date}
							</h2>
							<p>
								{book.excerpt}
							</p>
						</div>
					);
				})}
		</div>
	);
}

export const pageQuery = graphql`
	query BooksQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] },
			filter: {fileAbsolutePath: {regex: "/(books)/.*\\.md$/"}}
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
