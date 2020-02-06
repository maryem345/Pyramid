var readline = require('readline')

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var n
r1.question("Salut , bienvenu dans ma super pyramide ! Combien d'etage veux tu ?? \n ", function (answer) {
    n = answer
    outside();
    r1.close();
});

outside = function(){
    if (n >= 0 && n < 25 ) {
console.log('voici  la pyramide')
	const centre =Math.floor((n*2 -1) /2);

	for(ligne =0; ligne< n ;ligne++){
	let espace = '';

	for (col =0; col < n * 2 - 1 ;col++){
		if(centre - ligne <= col && centre + ligne >= col ){
			espace += '#';
		}else{
			espace += ' ';
		}
	}
	console.log(espace);
	}


} else {
      console.log(" tres grand ");
    }
}