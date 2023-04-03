const APIKEY = "1753e1b201ce0490e9cdf4ef35220355"
const getBtn = document.getElementById('getBtn')
const moviesDiv = document.getElementById('movies')

async function getPintMovieDom (e) {
        e.preventDefault()
        const search = document.getElementById('search').value
        try {
                const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1753e1b201ce0490e9cdf4ef35220355&language=en-US&query=${search}&page=1&include_adult=false`)
                const genre = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1753e1b201ce0490e9cdf4ef35220355&language=en-US`)
                const movies = res.data.results      
                movies.forEach((movie => {
                        moviesDiv.innerHTML += `
                        <div class="card mb-3 m-4" style="max-width: 540px;">
                        <div class="row g-0">
                                 <div class="col-md-4">
                                <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                        <div class="card-body">
                                        <h5 class="card-title">${movie.title}</h5>
                                        <p class="card-text">${movie.overview}</p>
                                        <p class="card-text"></small></p>
                                </div>
                        </div>
                </div>
                </div>
        `
                }))          
        }
        catch (error) {
                console.error(error);
                }

}

getBtn.addEventListener('click', getPintMovieDom)