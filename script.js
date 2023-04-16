 fetch('mdata.json')
 .then(response => response.json())
 .then(data => {
   const dropdown = document.getElementById('genreDropdown');
   const genresMovie = [...new Set(data.map(item => item.genres))];
   genresMovie.forEach(genres => {
     const optionElement = document.createElement('option');
     optionElement.value = genres;
     optionElement.textContent = genres;
     dropdown.appendChild(optionElement);
   });
 });

 fetch('mdata.json')
 .then(response => response.json())
 .then(data => {
  const dropdown = document.getElementById('yearDropdown');
  const yearMovie = [...new Set(data.map(item => item.release_date))];
  yearMovie.forEach(release_date => {
    const optionElement = document.createElement('option');
    optionElement.value = new Date(release_date);
    optionElement.textContent = new Date(release_date);
    dropdown.appendChild(optionElement);
  });
});


fetch('mdata.json')
 .then(response => response.json())
 .then(data => {
  const dropdown = document.getElementById('languageDropdown');
  const originalLanguage = [...new Set(data.map(item => item.original_language))];
  originalLanguage.forEach(original_language => {
    const optionElement = document.createElement('option');
    optionElement.value = original_language;
    optionElement.textContent = original_language;
    dropdown.appendChild(optionElement);
  });
});

fetch('mdata.json')
 .then(response => response.json())
 .then(data => {
  const dropdown = document.getElementById('ratingDropdown');
  const voteAverage = [...new Set(data.map(item => item.vote_average))];
  voteAverage.forEach(vote_average => {
    const optionElement = document.createElement('option');
    optionElement.value = vote_average;
    optionElement.textContent = vote_average;
    dropdown.appendChild(optionElement);
  });
});



  
    function displaySearchResults (results) {
      listElem.innerHTML = "";
      results.forEach(function (movie) {
        const li = document.createElement("li");
        const listItem = `
            <h2 class="title">${movie.title}</h2>
            <div class="description">${movie.description}</div>
        `;
        li.innerHTML = listItem;
        li.addEventListener("click", function () {
          loadmovieDetails(movie);
        });
        listElem.appendChild(li);
      })
    }
  
 
    btnElem.addEventListener("click", search);