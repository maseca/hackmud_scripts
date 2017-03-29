//keys: update, remove, display, img, author, date, desc
function(c,a){//display:"help"
	a = a || {display:"help"};

	let menu = "\n`1ＷＥＬＣＯＭＥ　ＴＯ　ＴＨＥ　ＧＡＬＬＥＲＹ～`\n\nMenu is under construction.\n`Nsort` by `Vtitle`, `Vdate`, or `Vauthor`, then `Ndisplay` by `Vtitle`";

	if (a.remove == true){
		#db.r({type:"gallery", title:a.display});
		return {ok:true, msg:"Entry Deleted"};
	}

	if (a.update == true){	

		if (#db.f({type:"gallery", title:a.display}).count() > 0) {
	    	#db.u({type:"gallery", title:a.display}, {$set:{art:a.img, author:a.author, date:Date.now(), description:a.desc}});
		} else {
	    	#db.i({type:"gallery", title:a.display, art:a.img, date:Date.now(), description:a.desc, author:a.author});
		}
		
		let piece = #db.f({type:"gallery", title:a.display}).first();
		return "\n" +piece.art + "\ntitle: " + piece.title + "\nauthor: " + piece.author + "\ndate posted: " + piece.date + "\ndescription: " + piece.description;
	}

	if (a.display == "help"){
		return menu;
	}else if (a.display){
		let piece = #db.f({type:"gallery", title:a.display}).first();
		return "\n" + piece.art + "\ntitle: " + piece.title + "\nauthor: " + piece.author + "\ndate posted: " + piece.date + "\ndescription: " + piece.description;
	}

	if (a.sort){
        return #db.f({type:"gallery"}, {art:false}).sort({[a.sort]:-1}).array()//.map(formatListing);
    }

    function formatListing(piece){
		
	};
}
