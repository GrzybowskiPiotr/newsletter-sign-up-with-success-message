export function component_content(state, email) {
	const StartContent = {
		header_img_src_mobile: "./images/illustration-sign-up-mobile.svg",
		header_img_src_desktop: "./images/illustration-sign-up-desktop.svg",
		heading: "Stay updated!",
		paragraf: "Join 60,000+ product managers receiving monthly updates on:",
		list: [
			"Product discovery and building what matters",
			"Measuring to ensure updates are a success",
			"And much more!",
		],
		form: {
			label: "Email address",
			input: true,
			inputPlaceHolder: "email@company.com",
			button: "Subscribe to monthly newsletter",
		},
	};

	const CompleteContent = {
		header_img_src_mobile: "./images/icon-success.svg",
		header_img_src_desktop: "./images/icon-success.svg",
		heading: "Thanks for subscribing!",
		paragraf:
			`A confirmation email has been sent to ${email} Please open it and click the button inside to confirm your subscription.`,
		list: [],
		form: {
			label: "",
			input: false,
			button: "Dismiss message",
		},
	};
	if (state === "initial_state") {
		header_img.classList.add("header_img");
		header_img.classList.remove("complete_img");

		return StartContent;
	} else {
		header_img.classList.remove("header_img");
		header_img.classList.add("complete_img");
		return CompleteContent;
	}
}
