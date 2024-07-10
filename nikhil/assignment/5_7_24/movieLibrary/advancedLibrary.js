import { Library } from "./library.js";
import { Movie } from "./movie.js";

class AdvancedLibrary extends Library
{
    async addMovie()
    {
        const Movies=[
    
    {"title": "The Shawshank Redemption",director: "Frank Darabont",year: 1994,genre: "Drama"}
    ,{"title": "The Godfather",director: "Francis Ford Coppola",year: 1972,genre: "Crime"}
    ,{"title": "The Dark Knight",director: "Christopher Nolan",year: 2008,genre: "Action"}
    ,{"title": "12 Angry Men",director: "Sidney Lumet",year: 1957,genre: "Drama"}
    ,{"title": "Schindler's List",director: "Steven Spielberg",year: 1993,genre: "Drama"}
    ,{"title": "Pulp Fiction",director: "Quentin Tarantino",year: 1994,genre: "Drama"}
    ,{"title": "The Lord of the Rings: The Return of the King",director: "Peter Jackson",year: 2003,genre: "Fantasy"}
    ,{"title": "The Good, the Bad and the Ugly",director: "Sergio Leone",year: 1966,genre: "Western"}
    
    ];
    return new Promise((resolve) => {
        setTimeout(() => {
            const movie=new Movie(movieDetails.title,movieDetails.director,movieDetails.year,movieDetails.genre);
            this.addMovie(movie);
        });
        resolve();
    }, 2000);
    }
}