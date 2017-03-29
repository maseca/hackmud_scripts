function (context, args){//to:"username", amount:0
	
	var username = args.to;
	var amnt = args.amount;

	for (var i = 0; i < 16; i++){
		#s.accts.xfer_gc_to({to:username, amount:amnt});
	}
}