const quote = document.getElementById('quote')
const author = document.getElementById('author')
const generateButton = document.getElementById('generateButton')

generateButton.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  //https://freequote.herokuapp.com/
  //https://ataturk.now.sh/tr
  //https://api.quotable.io/random
  //http://quotes.rest/qod.json?category=inspire   -->quote.innerHTML =data.contents.quotes[0].quote;
  //https://codepen.io/mikelduffy/pen/EPdYMp
  //http://quotes.stormconsultancy.co.uk/random.json --> random programming (belki twitter bot yazılabilir bunun için)
 fetch('https://api.quotable.io/random')
.then(res=> res.json())
.then(data=>{
console.log(data.author);
quote.innerHTML ="'"+ data.content +"'";
author.innerHTML=data.author;
})
  }
