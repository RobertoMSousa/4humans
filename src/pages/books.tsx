
import Helmet from "react-helmet";
import Link from "gatsby-link";
import * as React from "react";

// css
import "./css/books.scss";

export default function BooksPage({ data }) {
	const { edges: books } = data.allMarkdownRemark;
	return (
		<div className="books_main_wrapper">
			{books
				.filter((book) => book.node.frontmatter.title.length > 0)
				.map(({ node: book }) => {
					return (
						<Link to={book.frontmatter.path}>
							<div className="blog-post-preview" key={book.id}>
								<img src={book.frontmatter.image.childImageSharp.resize.src} className="" alt=""/>
								<p>{book.frontmatter.title}</p>
							</div>
						</Link>
					);
				})}
		</div>
	);
}

export const pageQuery = graphql`
	query BooksQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] },
			filter: {fileAbsolutePath: {regex: "/(books)/.*\\.*$/"}}
		) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						image {
							childImageSharp {
							  resize(width: 800) {
								src
							  }
							}
						}
					}
				}
			}
		}
	}
`;
