function(c, a) //t:0
{
	//Made by: ast
	//Miniturized cracker script
	//452 chars
	//Usage: ast.crack {t:#s.account.loc}
	//Not recommended for PvP: usually fast enough for NPCs, but too slow to pass all locks on dtr's locksim
	//Please send comments/suggestions to "Ast#9365"/"ast" on discord or ingame respectively
	var i=0
	var ezs=["open","unlock","release"]
	var clrs=["red","orange","yellow","lime","green","cyan","blue","purple"]
	var cr={}
	var r=""
	if (/hard/.exec(a.t.call())) {
		return "No hardline"
	}
	while (1) {
		var rgx=/(?:TEMS !|CORE !|meter !|nection |rently )([\w\d]+)/
		var grp=rgx.exec(a.t.call(cr))
		if (grp==null){
			i+=1
		} else if (grp[1]=="terminated"||grp[1]=="breached") {
			return cr
		} else {
			i=0
			r=grp[1].toLowerCase()
		}
		if (r.match(/ez_\d/)) {
			cr[r]=ezs[i]
		} else if (r.match(/c00/)) {
			cr[r]=clrs[i]
		} else if (r.match(/digit|ez_p/)) {
			cr[r]=i
		}
	}
}