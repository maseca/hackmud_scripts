function(c,a)//t:#s.target.user, keys:{acct_nt:0,magnara:"",sn_w_glock:""}
{
	let ke = a.keys
	let r = a.t.call(ke)
	let ps = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
	let ws = ["open","release","unlock"]
	let cl = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"]
	let lib = #s.scripts.lib()
	let cs = {
		call: function(args){
			let s = args.s
			let d = args.d
			let c = 0
			for (let i = 0; i < s.length; i++){
				if (s.charAt(i) == d) c++
			}
			return c
		}
	}

	function ez_21(){
		for (let w of ws){	
			ke.ez_21 = w
			r = a.t.call(ke)
			if (r.indexOf("command") == -1){
				break
			}
		}	
	}

	function ez_35(){
		for (let w of ws){	
			ke.ez_35 = w
			r = a.t.call(ke)
			if (r.indexOf("command") == -1){
				break
			}
		}
		for (let i = 0; i < 10; i++){
			ke.digit = i
			r = a.t.call(ke)
			if (r.indexOf("digit") == -1){
				break
			}
		}	
	}

	function ez_40(){
		for (let w of ws){
			ke.ez_40 = w
			r = a.t.call(ke)
			if (r.indexOf("command") == -1){
				break
			}
		}
		for (let p of ps){
			ke.ez_prime = p
			r = a.t.call(ke)
			if (r.indexOf("prime") == -1){
				break
			}
		}
	}

	function c001(){
		for (let i = 0; i < 8; i++){
			ke.c001 = cl[i]
			r = a.t.call(ke)
			if (r.indexOf("color") == -1){
				return
			}
			ke.color_digit = cl[i].length
		}
	}

	function c002(){
		for (let i = 0; i < 8; i++){
			ke.c002 = cl[i]
			ke.c002_complement = cl[(i + 4) % 8]
			r = a.t.call(ke)
			if (r.indexOf("color") == -1){
				return
			}
		}
	}

	function c003(){
		for (let i = 0; i < 8; i++){
			ke.c003 = cl[i]
			ke.c003_triad_1 = cl[(i + 3) % 8]
			ke.c003_triad_2 = cl[(i + 5) % 8]
			r = a.t.call(ke)
			if (r.indexOf("color") == -1){
				return
			}
		}
	}

	function ret(){
		r = a.t.call(ke)
	}
	
	let lx = {
		EZ_21: ez_21,
		EZ_35: ez_35,
		EZ_40: ez_40,
		c001: c001,
		c002: c002,
		c003: c003,
		CON_SPEC: ret,
		magnara: ret,
		acct_nt: ret,
		sn_w_glock: ret
	}

	ke.CON_SPEC = cs

	while (lib.can_continue_execution(500)&&r.indexOf("LOCK_ERROR") != -1){
		Object.keys(lx).forEach(k => {
			if (r.indexOf(k) != -1) {
				lx[k]()
			}
		})
	}
	delete ke.CON_SPEC
	return r + "\n\n" + "Key: " + JSON.stringify(ke)
}
