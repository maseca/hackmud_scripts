function(context, args) //target:0
{
	//Made by: ast
	//Usage: ast.crack {t:#s.account.loc}; remember to be in hardline
	//Not recommended for PvP: usually fast enough for NPCs, but too slow to pass all locks on dtr's locksim
	//Please send comments/suggestions to "Ast#9365"/"ast" on discord or ingame respectively
	var i=0 //i is the selector of the current answer being attemped
	var ezs=["open","unlock","release"] //EZ release commands
	var colors=["red","orange","yellow","lime","green","cyan","blue","purple"] //Possible Colors
	var current_args={} //Current arguments, starts at none.
	var current_param="" //This will later be filled by the current lock or parameter to crack
	if (/hardline/.exec(args.target.call())) { //Tests if there is no hardline
		return "No hardline"
	}
	while (1) { //Infinite loop, this will time out if you are not in hardline
		//This regex will match the current lock or parameter, or "terminated" when the hack ends, or "breached" if the loc is already breached
		var regex=/(?:HALPERYON SYSTEMS !|CORE !|Required unlock parameter !|Connection |currently )([\w\d]+)/ //"!" is used to color text ingame
		//Use result[1] to get the lock/parameter/status
		var result=regex.exec(args.target.call(current_args)) //Calls the target with current argumnents at looks for regex all in one
		if (result==null){ //If no new parameter springs up, increment the selector by one
			i+=1
		} else if (result[1]=="terminated"||result[1]=="breached") { //Will end the program when the lock is completed or if it already breached
			return current_args //Returns the values of the locks the program has solved
		} else { //If it gets this far, a new lock/parameter has popped up
			i=0 //Reset the selector
			current_param=result[1].toLowerCase() //Makes sure EZ_xx is lowercased
		}
		if (current_param.match(/ez_\d/)) { //If the lock or parameter is of format EZ_xx...
			current_args[current_param]=ezs[i] //Try the iTH (as in 1ST,2ND,3ND,4TH) possible solution (in this case the unlock commands)
		} else if (current_param.match(/c00/)) { //If the lock or parameter contains c00...
			current_args[current_param]=colors[i] //Try the iTH color
		} else if (current_param.match(/digit|ez_prime/)) { //If it asks for a digit or prime...
			current_args[current_param]=i //Try the iTH nonnegative integer
			//It doesn't include a list of primes for space reasons, so just tries 0-99
		}
	}
}