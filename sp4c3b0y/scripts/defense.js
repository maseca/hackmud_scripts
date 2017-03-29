function(context, args)
{
    var caller = context.caller;
    var l = #s.scripts.lib();
    args = JSON.parse( JSON.stringify( args ) );
    if(args==null) args = {};

    //config vars
    var trans_history = 1;
    var yourloc = #s.sys.loc();

    // other vars
    var destinations = [];
    var R = [];

    var output = #s.accts.transactions({script:yourloc,count:trans_history})
    for(var i=0;i<output.length;i++) {
            if(destinations.indexOf(output[i].sender) === -1) {
                destinations.push(output[i].sender);
            }
    }

    for(var one_hacker of destinations) { 
        R.push("Serving: "+one_hacker)
        for(var i = 1; i<11; i++){
            R.push(#s.accts.xfer_gc_to({to:one_hacker,amount:Math.floor(Math.random()*9)+1}));
        }
    }

    return R;
}