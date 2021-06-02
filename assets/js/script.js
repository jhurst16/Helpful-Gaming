var youTubeContainer = $("#videos");
var wikiContainer = $("#wiki");
var searchButton = $("#search-button");
var inputEl = $("#input");
var historyContainer = $("#history-container")
var youTubeUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDSLlhNJxicn6aZwfjtRXoKPBvHT599JFc&type=video&part=snippet&maxResults=6&videoEmbeddable=true&q=+super mario`;
var wikiUrl = `https://www.mariowiki.com/api.php?action=query&list=search&format=json&srsearch=`

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
var displaySnippet = function (object) {
  //represents one node
  var wikiSnippet = $('<div>')
  wikiSnippet.html(object.snippet);
  wikiContainer.append(wikiSnippet);
}
// function to display wiki websites
var displayWiki = function (wiki) {
  console.log(wiki)
  //represents one node
  var wikiTitle = $('<div>')
  wikiTitle.html(wiki.title);
  wikiContainer.append(wikiTitle);
  displaySnippet(wiki)
  generateBtn()
}
searchButton.on("click", function (event) {
  event.preventDefault();
  wikiContainer.html('')
  var inputValue = inputEl.val()
  queryUrl = wikiUrl + inputValue;
  console.log(queryUrl)
  // fetch data from youtube api
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const wikiResults = response.query.search.splice(0, 6)
      wikiResults.forEach(wikiTitle => {
        displayWiki(wikiTitle)
       
      })
      
    });
});

//harcode array
//loop and console log to make sure loop is working
//add click event to console log button value

// function generateBtn () {
//   var createBtn = $('<button>')
//   createBtn.html = (inputEl)
//   historyContainer.append(createBtn)
// }

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