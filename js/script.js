import { emailCheck } from "./emailCheck.js";
import { component_content } from "./componentState.js";
import { newElement } from "./newElement.js";
import { createList } from "./createList.js";

const wrapper = document.querySelector(".wrapper");
const header_img = document.getElementById("header_img");

var error = false;
let state = "initial_state";
let email = "";
function createForm(labelText, inputPlaceHolder, buttonText) {
	const form = document.createElement("form");
	const label = newElement("label", labelText);
	const button = newElement("button", buttonText);
	button.classList.add("btn_and_input");

	if (component_content(state).form.input) {
		const input = newElement("input", "");
		input.classList.add("btn_and_input");
		input.placeholder = inputPlaceHolder;
		input.id = "email";
		input.autocomplete = "off";
		label.for = "email";
		form.append(label);
		label.append(input);
	}
	form.append(button);
	return form;
}

function cleanComponent() {
	const [h, p, l, f] = [
		document.querySelector("h1"),
		document.querySelector("p"),
		document.querySelector("ul"),
		document.querySelector("form"),
	];
	function clean() {
		h.remove();
		p.remove();
		l.remove();
		f.remove();
	}
	if (h && state === "initial_state") {
		clean();
		state = "complete_state";
	} else if (h) {
		clean();
		state = "initial_state";
	}
}

function render() {
	//remove elements from prev render;

	cleanComponent();

	//setting top img
	if (window.innerWidth > 1000) {
		header_img.style.backgroundImage = `url(${
			component_content(state).header_img_src_desktop
		})`;
	} else {
		header_img.style.backgroundImage = `url(${
			component_content(state).header_img_src_mobile
		})`;
	}

	// assing label texr, placeholder for input, button text.
	const formPlaceholder = component_content(state).form.inputPlaceHolder;
	const buttonText = component_content(state).form.button;
	const labelText = component_content(state).form.label;

	// creating elements and inject to DOM

	wrapper.append(newElement("h1", component_content(state).heading));
	wrapper.append(newElement("p", component_content(state, email).paragraf));
	wrapper.append(createList(component_content(state).list));
	wrapper.append(createForm(labelText, formPlaceholder, buttonText));

	if (state === "complete_state") {
		const main = document.querySelector("main");
		main.classList.add("complete");
	}

	// handle form submit
	const form = document.querySelector("form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const input = document.querySelector("input");
		input ? (email = input.value) : "";

		if (state === "initial_state") {
			error = emailCheck(input.value);
			if (error) {
				let errorMsg = document.querySelector(".error_msg");
				if (!errorMsg) {
					errorMsg = newElement("p", "Valid email required");
					errorMsg.classList.add("error_msg");
					const label = document.querySelector("label");
					label.append(errorMsg);
				}
				if (input.length == 0) {
					input.classList.add("input_error");
				} else {
					input.classList.add("input_error");
				}
			} else {
				input.classList.remove("input_error");
				render();
			}
		} else {
			state = "initial_state";
			location.reload();
		}
	});
}

addEventListener("load", render());
