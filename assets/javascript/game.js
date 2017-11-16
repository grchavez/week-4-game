// Selects Random Number between 19-120
$(document).ready(function(){
	var ranNum=Math.floor(Math.random()*101+19)
}

//Appends random number to html //

$("#randNum").text(ranNum);

// Variables for Crystals.  Random numbers between 1-12 //

var num1 = Math.floor(Math.random()*11+1);
var num2 = Math.floor(Math.random()*11+1);
var num3 = Math.floor(Math.random()*11+1);
var num4 = Math.floor(Math.random()*11+1);


// Variables for tallies //

var userTotal = 0;
var wins = 0;
var losses = 0;
