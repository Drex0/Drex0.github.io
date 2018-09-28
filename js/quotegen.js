var quotes = [
	"Saving the world from bad audio one venue at a time. -PZ",
	"As it turns out, cubicle life isn\'t just like Workaholics. - PZ",
	"It is only a matter of time until I can programmatically change the rotation of the Earth. -PZ",
	"I couldn't have done it without NOS and Slimjims. -PZ",
	"Consultant for common sense. This is how I will make my millions. -PZ",
	"It\'s been proven over and over, happy employees work harder. You should hire me strictly for my sense of humor. -PZ",
	"I don\'t have time to explain why I don\'t have time. ---",
	"When somebody hands me panties and a brassiere iwth a note, I gotta read it. -Frank Zappa",
	"You know it's time to rock when ol' glory drops! -Kid Rock"
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];	
}