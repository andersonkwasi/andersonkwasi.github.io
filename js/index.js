const form = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')
const result = document.getElementById('result')

let movies = []
let search = ''

const fecthMovies = async () => {
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=1ae66acd8b3b6027ca3aec0ae8b9ba4a&query=${search}`,
  ).then((res) => res.json())
  console.log(movies)
}

const moviesDisplay = async () => {
  await fecthMovies()
  movies.results.length = 12

  result.innerHTML = movies.results
    .map(
      (movie) =>
        `
      <li>
      <h2>${movie.original_title}</h2>
      <div class="card-content">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
            <div class="infos">
                <p>${movie.overview}</p>
                <p>Popularité: ${movie.popularity} </p>
            </div>
      </div>
      </li>
        `,
    )
    .join('')
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  search = searchInput.value
  moviesDisplay()
})
