import { Movie } from "./movie.js";
import { AdvancedLibrary } from "./advancedLibrary.js";

(async () => {
    const library = new AdvancedLibrary();

    const interstellar = new Movie('Interstellar', 'Christopher Nolan', 2014, 'Sci-Fi');
    const matrix = new Movie('The Matrix', 'The Wachowskis', 1999, 'Sci-Fi');

    library.addMovie(interstellar);
    library.addMovie(matrix);

    console.log('List of all movies in the library:');
    console.log(library.listMovies());

    console.log('\nSearching for \'The Matrix\':');
    console.log(library.findMovieByTitle('The Matrix'));

    console.log('\nFiltering by genre \'Sci-Fi\':');
    library.filterMoviesByGenre('Sci-Fi').forEach(movie => console.log(movie.getInfo()));

    console.log('\nLoading movies asynchronously:');
    await library.loadMovies();
    console.log(library.listMovies());

    
})();
