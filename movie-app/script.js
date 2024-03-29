const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("icon");
const search = document.getElementById("box");
const bgImage = document.getElementsByClassName('movie-img')

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie-container");
        bgImage.style.backgroundImage =  `url(https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg)`;

        // movieEl.innerHTML = `
        //     <img
        //         src="${IMGPATH + poster_path}"
        //         alt="${title}"
        //     />
        //     <div class="movie-info">
        //         <h3>${title}</h3>
        //         <span class="${getClassByRate(
        //             vote_average
        //         )}">${vote_average}</span>
        //     </div>
        //     <div class="overview">
        //         <h3>Overview:</h3>
        //         ${overview}
        //     </div>
        // `;

        movieEl.innerHTML = `
        <div class="cellphone-container">    
        <div class="movie">       
          <div class="menu"><i class="material-icons"></i></div>
          <div class="movie-img"></div>
          <div class="text-movie-cont">
            <div class="mr-grid">
              <div class="col1">
                <h1>Interstellar</h1>
                <ul class="movie-gen">
                  <li>PG-13  /</li>
                  <li>2h 49min  /</li>
                  <li>Adventure, Drama, Sci-Fi,</li>
                </ul>
              </div>
            </div>
            <div class="mr-grid summary-row">
              <div class="col2">
                <h5>SUMMARY</h5>
              </div>
              <div class="col2">
                 <ul class="movie-likes">
                  <li><i class="material-icons">&#xE813;</i>124</li>
                  <li><i class="material-icons">&#xE813;</i>3</li>
                </ul>
              </div>
            </div>
            <div class="mr-grid">
              <div class="col1">
                <p class="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great 
                Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way. </p>
              </div>
            </div>
            <div class="mr-grid actors-row">
              <div class="col1">
                <p class="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
              </div>
            </div>
            <div class="mr-grid action-row">
              <div class="col2"><div class="watch-btn"><h3><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
              </div>
              <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
              </div>
              <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
              </div>
              <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
              </div>
            </div>
          </div>
        </div>
    </div>
    

        `


        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("click", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});
