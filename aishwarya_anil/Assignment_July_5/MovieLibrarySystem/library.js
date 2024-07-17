import { Movie } from "./movie.js";
export class Library {
    constructor() {
        this.movies = [];
    }

    //movie class only deals with single movie obj, the movies[] is an object of the movie class which holds an array of all the movies
//why can't movies[] be in Movie class : becuz movie class only deal with single movie obj
  addMovie(movie) {
        this.movies.push(movie);
    }

    listMovies() {
        return this.movies.map(movieobj => movieobj.getInfo()).join('\n');// in encapuslation we are calling a method using its object
    }//getInfo is used in map method to format the output like in the getInfo method
    //The Movie class encapsulates the its intenal property liketitle, director, year, genre and has a method to interact with this properties , so the properties are hidden and the metghod can only be called usinh a obj
    
    findMovieByTitle(title) {
        const movieFind = this.movies.find(movie => movie.title === title);
        return movieFind ? movieFind.getInfo() : 'Movie not found';
    }
    

    filterMoviesByGenre(genre) {
        return this.movies.filter(movie => movie.genre === genre);
    }
}



