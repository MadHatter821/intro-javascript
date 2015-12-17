//Version 1
//

var nb = Number(prompt("Haut comment ton FizzBuzz ?"));

if (nb <= 0) {
	console.log("petit malin ;)");
	nb = -nb;
}
var k=1;
while (k <= nb) {
	if ( k%3 === 0 ) {
		if ( k%5 === 0 ) {
			console.log("FizzBuzz !! !");
		}
		console.log("Fizz");
	} else if ( k%5 === 0 ) {
		console.log("Buzz");
	} else {
		console.log(k);
	}
	k++;
}


//Version courte
//

var nb = 100, k=1;

while (k <= nb) {
	if ( k%3 === 0 ) {
		if ( k%5 === 0 ) {
			console.log("FizzBuzz !! !");
		}
		console.log("Fizz");
	} else if ( k%5 === 0 ) {
		console.log("Buzz");
	} else {
		console.log(k);
	}
	k++;
}
