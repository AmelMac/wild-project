const myInformation = require('./information.js');


 cowsay = require("cowsay", './information.js' );

console.log(cowsay.say({
	text : myInformation(),
	e : "oO",
	T : "U "
}));
