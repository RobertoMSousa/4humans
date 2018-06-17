import * as React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import "./newsletter.scss";

interface IMailAtributes {
	pathname: string;
}

class Newsletter extends React.Component <any, any>  {

	constructor(props: any) {
		super(props);
		this.state = {
			status: "",
			email: "",
		};
	}

	public handleEmailChange = (e: any) => {
		this.setState({ email: e.target.value });
	}

	public postEmailToMailchimp = (email: string, attributes: IMailAtributes) => {
		const result = addToMailchimp(email, attributes);
		this.setState({
			status: `success`,
		});
	}

	public handleFormSubmit = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		this.postEmailToMailchimp(this.state.email, {
			pathname: document.location.pathname,
		});
	}

	public render() {
		return (
			<div className="center newsletterMainWrapper">
				{
					this.state.status === `success` ? (
					<span>Thank you! Youʼll receive your first email shortly.</span>
					) : (
					<div>
						<form
							id="email-capture"
							method="post"
							noValidate
							>
							<div className="newsletterFormWrapper">
								<input
								type="email"
								name="email"
								placeholder="you@email.com"
								onChange={this.handleEmailChange}
								/>
								<button
									type="submit"
									onClick={this.handleFormSubmit}
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>)
				}
			</div>
		);
	}
}

export default Newsletter;
