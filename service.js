const getMovies = async () => {
    try {
        return await fetch("https://my-json-server.typicode.com/Jeck99/movies-api-json/movies")
            .then(res => res.json())
    } catch (error) {
        console.log(error);
    }
}
getMovies()
.then(result=>console.log(result))
const postMovie = async () => {
    const options={
        method:"POST",
        body:JSON.stringify(
            {
                id:5,
                name: "spider-man",
                year: 2018,
                isSubtitled: true,
                tags: [
                    "spider",
                    "spiderman",
                    "spider-man",
                    "miles morales"
                ],
                rating: {
                    imdb: 8,
                    rottentomato: 9,
                    watchlist: 8.5
                }
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        return await fetch("https://my-json-server.typicode.com/Jeck99/movies-api-json/movies",options)
            .then(res => res.json())
    } catch (error) {
        console.log(error);
    }
}