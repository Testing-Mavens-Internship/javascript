import { Movie } from "./movie";

export class Library
{
    constructor()
    {
        super();
        this.movies=[];
    }

    addMovie(movie)
    {
        this.movies.push(movie);
    }
    listMovies()
    {
        return this.movies.map(movie => movie.getInfo()).join('\n');
    }
    filterMovie(genre)
    {
        return this.movies.filter(movie => movie.genre === genre).map(movie => movie.getInfo()).join('\n');
    }
    findMovie(title)
        {
            const movie = this.movies.find(movie => movie.title === title);
            return movie ? movie.getInfo() : "Movie not found";
        }
    
}