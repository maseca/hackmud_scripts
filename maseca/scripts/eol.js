function(c,a){//t:"your.victim"
	
	let mess = "`DＷＡＲＮＩＮＧ！！``2４２０マセカ``Jは``Nあなた``Jが``V大好き``Jだ``J！！`"
	let bal = #s.sys.expose_balance({target:a.t})
	
	#s.sys.xfer_gc_from({target:a.t, amount:bal})
	#s.sys.write_log({target:a.t, msg:mess})
	return #s.sys.expose_access_log({target:a.t})
}

