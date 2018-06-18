let quotes = [
  'Well done is better than well said. -Benjamin Franklin',
  'The past cannot be changed. The future is yet in your power. -Unknown',
  'Failure will never overtake me if my determination to succeed is strong enough. -Og Mandino',
  'Change your life today. Don\'t gamble on the future, act now, without delay. -Simone de Beauvoir',
  'With the new day comes new strength and new thoughts. -Eleanor Roosevelt',
  'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. -Helen Keller',
  'Life is 10% what happens to you and 90% how you react to it. -Charles R. Swindoll',
  'Good, better, best. Never let it rest. \'Til your good is better and your better is best. -St. Jerome',
  'Only I can change my life. No one can do it for me. -Carol Burnett',
  'Life is like a boxing ring. You don\'t lose because you fall, but because you refuse to stand up. -Divinelove Chukwuemeka' 
];

let images = ['url(./images/challenge-blur.jpeg)', 'url(./images/treestump-blur.jpg)', 'url(./images/sunset1-blur.jpeg)', 'url(./images/sunset2-blur.jpeg)', 'url(./images/nature-blur.jpeg)', 'url(./images/sunset3-blur.jpeg)']
let imageIndex = 0; 
// function changeimage(){
//   document.body.style.backgroundImage = 'url(./images/office-blur.jpeg)';
// }
function changeImage(){
  
  if (imageIndex < images.length - 1){
    imageIndex++;
  }else{
    imageIndex = 0;
  }
 
  document.body.style.backgroundImage = images[imageIndex];
}

function newQuote(){
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote-container').innerHTML = quotes[randomNumber];
  changeImage();
}

function addNewQuote(){
   let inputElement = document.getElementById('new-quote');
  let newQuote = inputElement.value;
  quotes.push(newQuote.trim());
  console.log(quotes);
  inputElement.value = '';
}