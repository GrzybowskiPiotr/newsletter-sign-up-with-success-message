export function createList(items) {
	const ulist = document.createElement("ul");
	items.map((item) => {
		const li = document.createElement("li");
		li.innerHTML += `<img src="./images/icon-list.svg" alt="list icon"><p>${item}</p>`;
		ulist.appendChild(li);
	});
	return ulist;
}