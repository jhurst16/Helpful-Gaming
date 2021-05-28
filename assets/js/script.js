var youTubeDiv = document.getElementById("you-tube");
var searchButton = document.getElementById("search-button");
var inputEl = document.getElementById("input");
var youTubeUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDSLlhNJxicn6aZwfjtRXoKPBvHT599JFc&type=video&part=snippet&maxResults=6&videoEmbeddable=true&q=+super mario`;


// function performed when search button is clicked
$(searchButton).on("click", function(event) {
  event.preventDefault();
  youTubeDiv.innerHTML = "";
  var inputValue = inputEl.value;
  queryUrl = youTubeUrl + inputValue;

// fetch data from youtube api
  fetch(queryUrl)
  .then(function(response) {
    return response.json();
})
.then(function(response) {
  var videoId = response.items[0].id.videoId;
  var videoTitle = response.items[0].snippet.title;

  youTubeDiv.innerHTML = `<iframe width="400" height="300" src="https://www.youtube.com/embed/${videoId}" title="${videoTitle}" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  });
});

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