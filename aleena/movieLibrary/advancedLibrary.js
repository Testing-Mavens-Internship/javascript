import { Library } from './library.js';
import { Movie } from './movie.js';

export class AdvancedLibrary extends Library {
  async loadMovies() {
    return new Promise(resolve => {
      setTimeout(() => {
        const movies = [
          new Movie('Inception', 'Christopher Nolan', 2010, 'Sci-Fi'),
          new Movie('The Godfather', 'Francis Ford Coppola', 1972, 'Crime'),
          new Movie('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime'),
          new Movie('The Dark Knight', 'Christopher Nolan', 2008, 'Action')
        ];
        movies.forEach(movie => this.addMovie(movie));
        resolve();
      }, 1000);
    });
  }
}