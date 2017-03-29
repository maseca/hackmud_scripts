function(c,a){//t:#s.your.victim
	let msg = ""

	#s.sys.xfer_gc_from({from:a.t, amount:#s.sys.expose_balance({target:a.t})})
	#s.sys.write_log({target:a.t, message:msg})
	#s.sys.expose_access_log({target:a.t})

}