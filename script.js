// IIFE Immediately invoked function Expressions
(async function () {
    const response = await fetch("../movie.json");
    const movies = await response.json();
  
    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("movie-list");
    const detailsElem = document.getElementById("movieDetailsContainer");
  
    function loadmovieDetails(movie) {
      detailsElem.innerHTML = `
          <h2 class="title">${movie.title}</h2>
          <h3>Genre</h3>
          <ul>${movie.genres.map(function (genres) {
            return "<li>" + genres + "</li>"
          }).join("")}</ul>
          <h3>Instruction:</h3>
          <div>${movie.instructions}</div>
      `;
    }
  
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
  
    function search() {
      const query = inputElem.value.toLowerCase();
      const results = movies.filter(function (movie) {
        return (movie.title.toLowerCase().includes(query) ||
        movie.genres.join(" ").toLowerCase().includes(query))
      });
  
      displaySearchResults(results);
    }
  
    btnElem.addEventListener("click", search);
  })();