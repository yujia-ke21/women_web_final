// Get the search input element
var searchInput = document.getElementById('search');

// Add event listener to listen for input changes or Enter key press
searchInput.addEventListener('input', function(event) {
  // Retrieve the search input value and convert to lowercase
  var searchTerm = event.target.value.toLowerCase();

  // Get the list of vocabulary items
  var vocabularyList = document.querySelectorAll('dl > div.dict-container');

  // Loop through the vocabulary items
  for (var i = 0; i < vocabularyList.length; i++) {
    var term = vocabularyList[i].querySelector('h2 > dt').textContent.toLowerCase();
    var definition = vocabularyList[i].querySelector('dd > h3 + p').textContent.toLowerCase();
    // Check if the search term matches any part of the term or definition
    if (term.indexOf(searchTerm) !== -1 || definition.indexOf(searchTerm) !== -1) {
      // Show the vocabulary item
      vocabularyList[i].style.display = 'block';
    } else {
      // Hide the vocabulary item
      vocabularyList[i].style.display = 'none';
    }
  }
});