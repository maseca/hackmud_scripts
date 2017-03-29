function(c,a){//channel:"0000", text:""

	let mess = []
	let col = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let message = a.text

	for (let i = 0; i<message.length; i++){
		mess.push("`" + letter() + message.charAt(i) + "`")
	}

	function letter() {
 		let min = Math.ceil(col.length - 1)
  		let max = Math.floor(0)
  		return col.charAt(Math.floor(Math.random() * (max - min)) + min)
	}

	#s.chats.send({channel:a.channel, msg:mess.join("")})
}
