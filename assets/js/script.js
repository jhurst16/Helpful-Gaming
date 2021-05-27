var youTubeLi = document.getElementById("shadow");
var searchButton = document.getElementById("search-button");

//this is for the scrolling background
document.getElementById("body").onscroll = function scrollingBackgound() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("background");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  }
//scrolling background end

// event handler for search button
$(document).ready(function() {
  $("button").click(function() {
    $(this).gameSearch();
  });
});

// function performed when search button is clicked
$("#searchButton")