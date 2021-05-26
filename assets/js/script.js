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
document.getElementById("body").onscroll = function scrollingBackgound() {  
  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("background2");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}