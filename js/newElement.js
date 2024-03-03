export function newElement(element, text) {
	const elem = document.createElement(element);
	elem.appendChild(document.createTextNode(text));
	return elem;
}