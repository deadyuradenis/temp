import rangeComponent from './range.js';

const initRanges = () => {
	const nodes = Array.from(document.querySelectorAll('[data-component="range"]'));

	nodes.forEach(rangeComponent);
}

document.addEventListener('DOMContentLoaded', () => {
	initRanges();
});


export default initRanges;