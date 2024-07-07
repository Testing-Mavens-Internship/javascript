export class Library {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    listMovies() {
        return this.movies.length === 0
          ? "There are no movies in the library."
          : this.movies.reduce((acc, movie) => {
              return acc + movie.getInfo() + '\n';
            }, 'List of all movies in the library:\n');
      }
  
    findMovieByTitle(title) {
      const movie = this.movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase());
      return movie ? movie.getInfo() : "Movie not found.";
    }
  
    filterMoviesByGenre(genre) {
      const filteredMovies = this.movies.filter((movie) => movie.genre === genre);
      return filteredMovies.length === 0
        ? `No movies found in the genre '${genre}'.`
        : filteredMovies.map((movie) => movie.getInfo());
    }
  }
  

  