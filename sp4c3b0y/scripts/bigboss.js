function(c,a)//t:0,con:0,cr:{}
{
	var l = #s.scripts.lib()
	var i = 0
	var ez = ["unlock","open","release"]
	var cw = ["red","orange","yellow","lime","green","cyan","blue","purple","red","orange","yellow","lime","green"]
	var gl = {secret:7,special:38,meaning:42,secure:443,beast:666,magic:1089,elite:1337,monolith:2001,hunter:3006}
	var lk = ["ez_21","ez_35","digit","ez_40","ez_prime","c001","color_digit","c002","c002_complement","c003",
			  "c003_triad_1","c003_triad_2","CON_SPEC","magnara","sn_w_glock","acct_nt"]
	var pr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
	var ret = ""
	var cr = {}
	//Needs to read current lock and set appropriate i value.
	//Needs to handle multiple locks in a row.
	//Needs to initialize all args sent to target.
	//Needs to be able to break out, return current args and take custom args if it hits a lock it doesn't know.

	while(new DATE() - _START < 4500){
		var rgx=/(?:TEMS !|CORE !|meter !|nection |rently )([\w\d]+)/
		var grp=rgx.exec(a.t.call(cr))

		switch(i){
			case 0:
				for(var k=0; k<2; k++){
					ret = lk[i]
					a.t.call({ret:ez[k]})
						
					cr[i] = ret
					
				}
				break
			case 1:
				for(var k=0; k<2; k++){
					for(var j=0; j<10; j++){
						ret = a.t.call({ez_35:ez[k], digit:j})
						
						cr[i] = ret
						
					}
				}
				break
			case 2:
				for(var j=0; j<10; j++){
						ret = a.t.call({lk[i]:j})
						
						cr[i] = ret		
				}
			case 2:
				for(var k=0; k<2; k++){
					for(var j=0; j<25; j++){
						ret = a.t.call({ez_40:ez[k], ez_prime:pr[j]})
						
						cr[i] = ret
						
					}
				}
				break
			case 3:
				for(var k=0; k<8; k++){
					var col = cw[k]
					var cl = cw[k].length
					ret = a.t.call({c001:col, color_digit:cl})
						
					cr[i] = ret
					
				}
				break
			case 4:
				for(var k=0; k<8; k++){
					var col = cw[k]
					var com = cw[k+4]
					ret = a.t.call({c002:col, c002_complement:com})
						
					cr[i] = ret
					
				}
				break
			case 5:
				for(var k=0; k<8; k++){
					var col = cw[k]
					var ct1 = cw[k+3]
					var ct2 = cw[k+5]
					ret = a.t.call({c002:col, c003_triad_1:ct1, c003_triad_2:ct2})
						
					cr[i] = ret
					
				}
				break
			case 6:
				a.t.call({CON_SPEC:a.con})
				break
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:

				break
		}

	}
	return {msg:ret}
}