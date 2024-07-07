import { Library } from "./Library.js";
import { Movie } from "./Movie.js";

export class AdvancedLibrary extends Library {
  async loadMovies() {
    const moviesData = [
      { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" },
      { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genre: "Crime" },
      { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, genre: "Crime" },
      { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action" },
    ];

    const movies = moviesData.map((data) => new Movie(data.title, data.director, data.year, data.genre));
    movies.forEach((movie) => this.addMovie(movie));
  }
}


