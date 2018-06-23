let quotes = [
  {
    quote: "Well done is better than well said.",
    quoteAuthor: "Benjamin Franklin"
  },

  {
    quote: "The past cannot be changed. The future is yet in your power.",
    quoteAuthor: "Unknown"
  },

  {
    quote:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    quoteAuthor: "Og Mandino"
  },

  {
    quote:
      "Change your life today. Don't gamble on the future, act now, without delay.",
    quoteAuthor: "Simone de Beauvoir"
  },
  {
    quote: "With the new day comes new strength and new thoughts.",
    quoteAuthor: "Eleanor Roosevelt"
  },
  {
    quote:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    quoteAuthor: "Helen Keller"
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    quoteAuthor: "Charles R. Swindoll"
  },
  {
    quote:
      "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    quoteAuthor: "St. Jerome"
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    quoteAuthor: "Carol Burnett"
  },
  {
    quote:
      "Life is like a boxing ring. You don't lose because you fall, but because you refuse to stand up.",
    quoteAuthor: "Divinelove Chukwuemeka"
  }
];

let images = [
  "url(./images/original/challenge.jpeg)",
  "url(./images/original/nature.jpeg)",
  "url(./images/original/sunset1.jpeg)",
  "url(./images/original/sunset2.jpeg)",
  "url(./images/original/sunset3.jpeg)",
  "url(./images/original/tree.jpg)"
];
let imageIndex = 0;

function changeImage() {
  if (imageIndex < images.length - 1) {
    imageIndex++;
  } else {
    imageIndex = 0;
  }

  document.body.style.backgroundImage = images[imageIndex];
}

function getNewQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomNumber].quote;
  document.getElementById("quote-author").innerHTML =
    quotes[randomNumber].quoteAuthor;
  changeImage();
}

function addNewQuote() {
  let quoteElement = document.getElementById("new-quote");
  let quoteAuthorElement = document.getElementById("new-author");
  // console.log(quoteElement.value);
  // console.log(quoteAuthorElement.value);
  let newQuote = quoteElement.value.trim();
  let newQuoteAuthor = "-" + quoteAuthorElement.value.trim();
  quotes.push({
    quote: newQuote,
    quoteAuthor: newQuoteAuthor
  });
  quoteElement.value = "";
  quoteAuthorElement.value = "";
  // console.log(quotes);
  document.getElementById("quote").innerHTML = newQuote;
  document.getElementById("quote-author").innerHTML = newQuoteAuthor;

  changeImage();
}
