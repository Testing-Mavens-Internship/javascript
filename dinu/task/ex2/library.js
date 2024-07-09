//Library Class:
 
// Properties: movies (array)
// Methods: addMovie(movie), listMovies(), findMovieByTitle(title), filterMoviesByGenre(genre)
// Should be in Library.js

import  Movie  from './movie.js';

export default class Library {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  listMovies() {
    return this.movies.map(movie => movie.getInfo()).join('\n');
  }

  findMovieByTitle(title) {
    const movie = this.movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
    return movie ? movie.getInfo() : 'Movie not found';
  }

  filterMoviesByGenre(genre) {
    return this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  }
}