quotes=["Be yourself; everyone else is already taken ― Oscar Wilde", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ― Marilyn Monroe ","So many books, so little time. ― Frank Zappa","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.― Albert Einstein", "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening,And live like it's heaven on earth. ― William W. Purkey","You know you're in love when you can't fall asleep because reality is finally better than your dreams.― Dr. Seuss ","You only live once, but if you do it right, once is enough.― Mae West ","Be the change that you wish to see in the world.― Mahatma Gandhi ","It is better to be hated for what you are than to be loved for what you are not.― Andre Gide, Autumn Leaves" ];
console.log("Opened")
function randomQuote(){
   var randomIndex = Math.floor(Math.random() * quotes.length);
   var randomValue= quotes[randomIndex];
   quotes.splice(randomIndex, 1);
   document.getElementById("genQuote").innerHTML=randomValue;

}