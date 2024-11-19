const movieList = document.querySelector('.movie-list')
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjdmMDk5ZGYwYjE0YjJlYWU4ODcyOTEzMmIwNTY1ZiIsIm5iZiI6MTczMTM0MzIxNy40NDkzMDQ4LCJzdWIiOiI2NzE4Y2U5NDI2ODVjYjY1NjNjMDcwMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._aoCfCND1lj_UCYvJIRosd_DcFZhpKQs1KpSNIiZbGg'
  }
};

function fetchPopularMovies(){
fetch('https://api.themoviedb.org/3/movie/popular', options)
  .then(res => res.json())
  .then(data => {
    // console.log("Data:", data );

    
    const list = data.results;

    list.map(item => {
      console.log(item);
      const name = item.title;
      const describe  = item.overview;
      const poster = item.poster_path;
      const back = item.backdrop_path;

      const baseUrl = "https://image.tmdb.org/t/p/";

      const posterSize = "w500";    // Common size for posters
      const backdropSize = "w980";

      const fullPosterUrl = `${baseUrl}${posterSize}${poster}`;
      const fullBackdropUrl = `${baseUrl}${backdropSize}${back}`;

      const movie = `<div class='movie-con m-3 text-center col-md rounded-3 p-2' > <img class='rounded m-auto' src="${fullPosterUrl}"> <h4 class="mt-4"> ${name}</h4> `;
      movieList.innerHTML += movie;
      const movieCon = document.querySelector('.movie-con');

    })
  })

  // .then(res => console.log(res))
  .catch(err => console.error(err));
}

const cour = document.querySelector('.my-inner');

function fetchRatedMovies(){
  fetch('https://api.themoviedb.org/3/movie/upcoming', options)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const latest = data.results;

    latest.map(item => {
      console.log(item);
      const name = item.title;
      const date = item.release_date;
      const poster = item.poster_path;
      const bgImg = item.backdrop_path
      

      const baseUrl = "https://image.tmdb.org/t/p/";

      const posterSize = "w500"; 
      const backdropSize = "w1280";

      const fullPosterUrl = `${baseUrl}${posterSize}${poster}`
      // const fullBackdropUrl = bgImg ? `${baseUrl}${backdropSize}${bgImg}` : 'default-background.jpg';
      const fullBackdropUrl = `${baseUrl}${backdropSize}${bgImg}`

 

      const sRoll = `<div class="w-100  carousel-item court  p-2 text-center"
      style='background-image: url(${fullBackdropUrl}); background-size: cover; background-position: center;'> 
      <img class="d-block post m-auto rounded" src="${fullPosterUrl}"> 
      <h4 class="text-white">Title: ${name}</h4>
      <p class="text-white">Release Date: ${date}</p> </div>`
      const cour = document.querySelector('.my-inner');


      const caroItems = document.querySelector('.court');
      if (cour) {
          cour.style.backgroundImage = `url(${fullBackdropUrl})`;
      } else {
          console.warn("Element with class 'court' not found");
      }

      cour.innerHTML += sRoll;

      
    });
  })
  .catch(err => console.error(err));
}



  fetchPopularMovies(); 
  fetchRatedMovies()