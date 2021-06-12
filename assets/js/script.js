var youTubeContainer = $("#videos");
var wikiContainer = $("#wiki");
var searchButton = $("#search-button");
var inputEl = $("#input");
var historyContainer = $("#history-container")
var youTubeUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaHR_vdcyTqtzFyLY6v-Gj9QeThGAmExA&type=video&part=snippet&maxResults=4&videoEmbeddable=true&q=+super mario`;
var wikiUrl = `https://www.mariowiki.com/api.php?action=query&list=search&format=json&srsearch=`
var searchArray = JSON.parse(localStorage.getItem('userInput')) || [];

// function to display youTube videos

var displayVideo = function (object) {
  //represents one node
  var videoContainer = $('<div>')
  videoContainer.html(`<iframe width="300" height="200" src="https://www.youtube.com/embed/${object.id.videoId}" title="${object.snippet.title}" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
  youTubeContainer.append(videoContainer)
}

// function performed when search button is clicked

searchButton.on("click", function (event) {
  event.preventDefault();
  youTubeContainer.html('')
  var inputValue = inputEl.val()
  queryUrl1 = youTubeUrl + inputValue;
  // localStorage.setItem("userInput", JSON.stringify(inputValue))
  // var data = JSON.parse(localStorage.getItem('userInput'))
  //  for (var i = searchArray.length - 1; i >= 0; i--) {
  //  var makeButton = $('searchHistoryButton')
  //  makeButton.textContent = searchArray[i];
  //  historyContainer.append(makeButton)
   
   var renderBtns = function(searchArray) {
     searchArray.push('inputValue');
     localStorage.setItem("userInput", JSON.stringify(inputValue));
     searchArray.forEach(makeButton);
      var makeButton = $('searchHistoryButton')
      makeButton.html(searchArray[i]);
      historyContainer.append(makeButton);
   

   renderBtns();
  // for (var i = searchHistoryButton.length - 1; i >= 0; i--) {
  //   var btn = document.createElement('button');
  //   btn.setAttribute('type', 'button');
  //   btn.classList.add('history-btn', 'btn-history');
  //   // `data-search` allows access to city name when click handler is invoked
  //   btn.setAttribute('data-search', searchHistory[i]);
  //   btn.textContent = searchHistory[i];
  //   searchHistoryContainer.append(btn);
  }

  fetch(queryUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      $.each(response.items, function (index, item) {
        displayVideo(item)
      })
    });
    wikiContainer.html('')
  queryUrl2 = wikiUrl + inputValue;

  // fetch data from youtube api
  fetch(queryUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const wikiResults = response.query.search.splice(0, 4)
      wikiResults.forEach(wikiTitle => {
        displayWiki(wikiTitle)
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
  //represents one node
  var wikiTitle = $('<div>')
  wikiTitle.html(wiki.title);
  wikiContainer.append(wikiTitle);
  displaySnippet(wiki)
}

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