export function emailCheck(email) {
	const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	return !reg.test(email);
}