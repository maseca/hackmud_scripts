function (c, a){
	var s = a.s
	var d = a.d
	var c = 0
	
	for (var i = 0; i < s.length; i++){
		if (s.charAt(i) == d) c++
	}

	return c
}