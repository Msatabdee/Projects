// Random Quote Generator
//getRandomQuotes from forismatic api
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

//place the quote and author name into the webpage
var getQuote = function(data) {
  $("#quoteText").text(data.quoteText);
  var tweet = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor +' @Rafase282 goo.gl/2h0NHo';
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $("#authorText").text('- ' + data.quoteAuthor);
  $(".tweetQuote").attr("href", tweet);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#newQuote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

var num = (Math.floor(Math.random()*15)) + 1;

$("body").css("background-image",'url(images/' + num + '.jpg)');