// adapted from https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
function hsv_to_rgb(h, s, v) {
	let h_i = Math.floor(h * 6);
	let f = h * 6 - h_i;
	let p = v * (1 - s);
	let q = v * (1 - f * s);
	let t = v * (1 - (1 - f) * s);
	let r, g, b;
	switch (h_i) {
		case 0:
			[r, g, b] = [v, t, p];
			break;
		case 1:
			[r, g, b] = [q, v, p];
			break;
		case 2:
			[r, g, b] = [p, v, t];
			break;
		case 3:
			[r, g, b] = [p, q, v];
			break;
		case 4:
			[r, g, b] = [t, p, v];
			break;
		case 5:
			[r, g, b] = [v, p, q];
			break;
		default:
			break;
	}
	return (
		'' +
		Math.floor(r * 256).toString(16) +
		Math.floor(g * 256).toString(16) +
		Math.floor(b * 256).toString(16)
	);
}

const golden_ratio_conjugate = 0.618033988749895;

function random_color() {
	let h = (Math.random() + golden_ratio_conjugate) % 1;
	return hsv_to_rgb(h, 0.5, 0.95);
}
