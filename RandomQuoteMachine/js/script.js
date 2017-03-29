// Random Quote Generator
//getRandomQuotes from forismatic api
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

//place the quote and author name into the webpage
var getQuote = function(data) {
  $("#quoteText").text(data.quoteText);
  var tweet = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' - ' + data.quoteAuthor +'';

  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $("#authorText").text('- ' + data.quoteAuthor);
  $(".tweetQuote").attr("href", tweet);
  
  var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  $(".dynamicBackgrounColor").css("background-color",newColor);
  $("#heading").css("color",newColor);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#newQuote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

var num = (Math.floor(Math.random()*15)) + 1;

$("body").css("background-image",'url(images/' + num + '.jpg)');

