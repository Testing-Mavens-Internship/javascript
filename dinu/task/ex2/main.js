import Movie from "./movie.js";
import Library from "./library.js";
import AdvancedLibrary from "./advancedLibrary.js";


const library = new AdvancedLibrary();

const movie1 = new Movie('Interstellar', 'Christopher Nolan', 2014, 'Sci-Fi');
const movie2 = new Movie('The Matrix', 'The Wachowskis', 1999, 'Sci-Fi');

library.addMovie(movie1);
library.addMovie(movie2);

console.log('List of all movies in the library:');
console.log(library.listMovies());

console.log('\nSearching for \'The Matrix\':');
console.log(library.findMovieByTitle('The Matrix'));

console.log('\nFiltering by genre \'Sci-Fi\':');
library.filterMoviesByGenre('Sci-Fi').forEach(movie => console.log(movie.getInfo()));

await library.loadMovies();

console.log('\nLoading movies asynchronously:');
console.log(library.listMovies());