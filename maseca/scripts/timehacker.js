function(c, a) //t:0
{
	var i = 0
	var rgx = /CPU/

	var grp=rgx.exec(a.t.call({freq:i}))

	while(grp != null){
		i+=0.1
		grp=rgx.exec(a.t.call({freq:i}))
	}
	return i


}