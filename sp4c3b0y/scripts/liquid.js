function(_,{t}){//t:#s.
	let ke = {}
	let r = t.call(ke)
	let ps = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
	let ws = ["open","release","unlock"]
	let cl = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"]

	function ez_21(){
		for (let w of ws){	
			ke.ez_21 = w
			r = t.call(ke)
			if (r.indexOf("command") == -1){
				break
			}
		}	
	}

	function ez_35(){
		for (let w of ws){	
			ke.ez_35 = w
			if (r.indexOf("command") == -1){
				break
			}
		}
		for (let i = 0; i < 10; i++){
			ke.digit = i
			if (r.indexOf("digit") == -1){
				break
			}
		}	
	}

	function ez_40(){
		for (let w of ws){
			ke.ez_40 = w
			if (r.indexOf("command") == -1){
				break
			}
		}
		for (let p of ps){
			ke.ez_prime = p
			if (r.indexOf("prime") == -1){
				break
			}
		}
	}

	function c001(){
		for (let i = 0; i < 8; i++){
			ke.c001 = cl[i]
			ke.color_digit = cs[i].length
			if (r.indexOf("color") == -1){
				break
			}
		}
	}

	function c002(){
		for (let i = 0; i < 8; i++){
			ke.c002 = cs[i]
			ke.c002_complement = cs[(i + 4) % 8]
			if (r.indexOf("color") == -1){
				break
			}
		}
	}

	function c003(){
		for (let i = 0; i < 8; i++){
			ke.c003 = cs[i]
			ke.c002_triad_1 = cs[(i + 3) % 8]
			ke.c003_triad_2 = cs[(i + 5) % 8]
			if (r.indexOf("color") == -1){
				break
			}
		}
	}


	let lx = {
		EZ_21: ez_21,
		EZ_35: ez_35,
		EZ_40: ez_40,
		c001: c001,
		c002: c002,
		c003: c003,
	}

	while (r.indexOf("LOCK_ERROR") !== -1){
		Object.keys(lx).forEach(k => {
			if (r.indexOf(k) !== -1) {
				lx[k]()
			}
		})
	}

	return r + "\n\n" + "Key: " + JSON.stringify(ke)

}

