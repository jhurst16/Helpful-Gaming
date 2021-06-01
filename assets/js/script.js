var youTubeContainer = $("#videos");
var wikiContainer = $("#wiki");
var searchButton = $("#search-button");
var inputEl = $("#input");
var youTubeUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDSLlhNJxicn6aZwfjtRXoKPBvHT599JFc&type=video&part=snippet&maxResults=6&videoEmbeddable=true&q=+super mario`;
var wikiUrl = `https://www.mariowiki.com/api.php?action=query&list=search&format=json&srsearch=+super%20mario`

// function to display youTube videos
var displayVideo = function (object) {
  console.log(object)
  //represents one node
  var video = $('<div>')
  video.html(`<iframe width="300" height="200" src="https://www.youtube.com/embed/${object.id.videoId}" title="${object.snippet.title}" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
  youTubeContainer.append(video)
}

// function performed when search button is clicked
searchButton.on("click", function (event) {
  event.preventDefault();
  youTubeContainer.html('')
  var inputValue = inputEl.val()
  queryUrl = youTubeUrl + inputValue;

  // fetch data from youtube api
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      $.each(response.items, function (index, item) {
        displayVideo(item)
      })
    });
});

// function to display wiki websites
var displayWiki = function (object) {
  console.log(object)
  //represents one node
  var wiki = $('<div>')
  wiki.html(json.query.search[0].title);
  wikiContainer.append(wiki);

}
searchButton.on("click", function (event) {
  event.preventDefault();
  wikiContainer.html('')
  var inputValue = inputEl.val()
  queryUrl = wikiUrl + inputValue;

  // fetch data from youtube api
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      $.each(response.items, function (index, item) {
        displayWiki(item)
      })
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