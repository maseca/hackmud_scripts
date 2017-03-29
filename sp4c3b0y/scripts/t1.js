function(_, {t}) { // t: 0
	let key = {};
	let r;
	let ps = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	let ws = ["unlock", "release", "open"];
	let cs = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"];

	function ez_21() {
		for (let w of ws) {
			key.ez_21 = w;

			r = t.call(key);
			if (r.indexOf("command") === -1) {
				break;
			}
		}
	}

	function ez_35() {
		for (let w of ws) {
			key.ez_35 = w;

			r = t.call(key);
			if (r.indexOf("command") === -1) {
				break;
			}
		}

		for (let i = 0; i < 10; i += 1) {
			key.digit = i;
			r = t.call(key);

			if (r.indexOf("digit") === -1) {
				break;
			}
		}
	}

	function ez_40() {
		for (let w of ws) {
			key.ez_40 = w;

			r = t.call(key);
			if (r.indexOf("command") === -1) {
				break;
			}
		}

		for (let p of ps) {
			key.ez_prime = p;

			r = t.call(key);
			if (r.indexOf("prime") === -1) {
				break;
			}
		}
	}

	function c001() {
		for (let i = 0; i < cs.length; i += 1) {
			key.c001 = cs[i];
			key.color_digit = cs[i].length;

			r = t.call(key);
			if (r.indexOf("color") === -1) {
				return
			}
		}
	}

	function c002() {
		for (let i = 0; i < cs.length; i += 1) {
			key.c002 = cs[i]
;			key.c002_complement = cs[(i + (cs.length/2)) % cs.length];

			r = t.call(key);
			if (r.indexOf("color") === -1) {
				return
			}
		}
	}

	function c003() {
		for (let i = 0; i < cs.length; i += 1) {
			key.c003 = cs[i];
			key.c003_triad_1 = cs[(i + (cs.length/2) + 1) % cs.length];
			key.c003_triad_2 = cs[(i + (cs.length/2) - 1) % cs.length];

			r = t.call(key);
			if (r.indexOf("color") === -1) {
				return
			}
		}
	}

	let locks = {
		EZ_21: ez_21,
		EZ_35: ez_35,
		EZ_40: ez_40,
		c001: c001,
		c002: c002,
		c003: c003,
	};

	r = t.call(key);
	while (r.indexOf("LOCK_ERROR") !== -1) {
		Object.keys(locks).forEach(k => {
			if (r.indexOf(k) !== -1) {
				locks[k]();
			}
		});
	}

	return r + "\n\n" + "Key: " + JSON.stringify(key);
}