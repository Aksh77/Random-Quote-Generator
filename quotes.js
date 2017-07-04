var quote= '';
var author = '';

function getQuote() 
{
  $.ajax
  ({
    headers: 
    {
      "X-Mashape-Key": "J3rBS59FlkmshpcBDSOlIaiEfQItp1uY2MHjsn3rp5kSbjyQuN",
      Accept: "application/json"
    },
    
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    
    success: function(data) 
    {
      quote = data.quote;
      author = data.author;
      
      $('#twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" \n-' + author));
      $('#quote').html(data.quote);
      $('#author').html(data.author);
    }    
  });
}

function tweet() 
{   window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" \n-' + author));
}

$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#twitter').on('click', tweet);
});
