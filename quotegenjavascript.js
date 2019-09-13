var quotes = ['If something is important enough, even if the odds are against you, you should still do it.',

	'Persistence is very important. You should not give up unless you are forced to give up.', 
	
	'If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.', 
	
	'No matter how much cats fight, there always seem to be plenty of kittens.', 
	
	'Success is liking yourself, liking what you do, and liking how you do it.', 
	
	'Let go of who you think you are supposed to be and be who you are.', 
	
	'Don\'t let the bozos grind you down.', 
	
	'If you\'re not progressing, you\'re regressing, so keep moving forward.', 
	
	'Life is ten percent what happens to you and ninety percent how you respond to it.', 
	
	'The only impossible journey is the one you never begin.'];
	
var randQ;
		
function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}//End newQuote
		
function main(){
	randQ = setInterval(newQuote,4500);
}
		
function stopIt(){
	clearInterval(randQ);
	alert("Stopped!");
}

main();
