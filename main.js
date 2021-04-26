
var input = process.argv.slice(2);
var names = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

var i;
for(i = 0; i < input.length; i++){
	
	var error = 0;
	var value = "";
	
	var w;
	for(w = 0; w < input[i].length; w++){
		value = value.concat(names[parseInt(input[i][w])]);
	}

	if(error == 1){
		break;
	}
	
	process.stdout.write(value);
	if(i < input.length - 1){
		process.stdout.write(",");
	}
	
}