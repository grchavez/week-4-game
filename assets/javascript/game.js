// Selects Random Number between 19-120
$(document).ready(function(){
	var ranNum=Math.floor(Math.random()*101+19);
	console.log(ranNum);

//Appends random number and userTotal to html //

$("#randNum").text(ranNum);


$("#gemstone").on ("click", function(){
	userTotal = (userTotal + num1);
	console.log("New userTotal: " + userTotal);
	$("#userGues").text(userTotal);
	win();
	loss();
		
	});

$("#quartz").on ("click", function(){
	userTotal = (userTotal + num2);
	console.log("New userTotal: " + userTotal);
	$("#userGues").text(userTotal);
	win();
	loss();
	});

$("#citrine").on ("click", function(){
	userTotal = (userTotal + num3);
	console.log("New userTotal: " + userTotal);
	$("#userGues").text(userTotal);
	win();
	loss();
	});

$("#zircon").on ("click", function(){
	userTotal = (userTotal + num4);
	console.log("New userTotal: " + userTotal);
	$("#userGues").text(userTotal);
	win();
	loss();
	});

	var userTotal = 0;
	$("#userGues").text(userTotal);

	// Variables for Crystals.  Random numbers between 1-12 //

var num1 = Math.floor(Math.random()*11+1);
var num2 = Math.floor(Math.random()*11+1);
var num3 = Math.floor(Math.random()*11+1);
var num4 = Math.floor(Math.random()*11+1);


// Variables for tallies //
var numWins = 0;
var numLoss = 0;


// Append tallies to html //

$("#wins").text(numWins);
$("#loss").text(numLoss);


// Reset Function //

function reset(){
	ranNum =Math.floor(Math.random()*101+19);
	console.log(ranNum);
	$("#randNum").text(ranNum);
	num1 = Math.floor(Math.random()*11+1);
	num2 = Math.floor(Math.random()*11+1);
	num3 = Math.floor(Math.random()*11+1);
	num4 = Math.floor(Math.random()*11+1);
	userTotal = 0;
	$("userGues").append(userTotal);


}

// Win / Loss Function //
function win(){
	if (userTotal === ranNum){
	alert("You win!");
	numWins++;
	$("#wins").text(numWins);
	userTotal = 0;
	$("#userGues").text(userTotal);
	reset();	
	}
}

function loss(){
	if (userTotal > ranNum){
	alert("You lose!");
	numLoss++;
	$("#loss").text(numLoss);
	userTotal = 0;
	$("#userGues").text(userTotal);
	reset();	
	}
}

});