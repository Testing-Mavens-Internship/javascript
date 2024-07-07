import { AdvancedLibrary } from "./AdvancedLibrary.js";
import { Movie } from "./Movie.js";

const library = new AdvancedLibrary();


library.addMovie(new Movie("Interstellar", "Christopher Nolan", 2014, "Sci-Fi"));
library.addMovie(new Movie("The Matrix", "The Wachowskis", 1999, "Sci-Fi"));


console.log(library.listMovies());


console.log("\nSearching for 'The Matrix':");
console.log(library.findMovieByTitle("The Matrix"));


console.log("\nFiltering by genre 'Sci-Fi':");
console.log(library.filterMoviesByGenre("Sci-Fi"));


console.log("\nLoading movies asynchronously:");
(async () => {
  await library.loadMovies();
  console.log(library.listMovies());
})();
