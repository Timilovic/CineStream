var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "f6737a1e3fmsha387090a89b7ef9p16ba72jsn2fa88bfa64ac");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const myList = document.querySelector('.my-list')

fetch("https://imdb-top-100-movies.p.rapidapi.com/", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);
  
  result.forEach(Element => {
    const movieList = document.createElement('div');
    movieList.classList.add('movie-list');
    movieList.style.backgroundImage = `url(${Element.image})`;
    movieList.style.backgroundSize = "cover"; 
    movieList.style.backgroundPosition = "center"; 

    movieList.innerHTML = `
    <div class='infor text-light '>
    <h2> ${Element.title} | ${Element.year}</h2>
    <P> Description: ${Element.description}
    </div>`;
    myList.appendChild(movieList)
  });
})
  .catch(error => console.log('error', error));