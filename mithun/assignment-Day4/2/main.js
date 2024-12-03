
import Movie from './movie.js';
import AdvancedLibrary from './advancedLibrary.js';

(async () => {
  const library = new AdvancedLibrary();


  library.addMovie(new Movie('Interstellar', 'Christopher Nolan', 2014, 'Sci-Fi'));
  library.addMovie(new Movie('The Matrix', 'The Wachowskis', 1999, 'Sci-Fi'));


  console.log('List of all movies in the library:');
  console.log(library.listMovies());

  console.log('\nSearching for "The Matrix":');
  console.log(library.findMovieByTitle('The Matrix'));

  console.log('\nFiltering by genre "Sci-Fi":');
  console.log(library.filterMoviesByGenre('Sci-Fi').map(movie => movie.getInfo()).join('\n'));
  console.log('\nLoading movies asynchronously...');
  await library.loadMovies();

  console.log('\nList of all movies in the library after loading:');
  console.log(library.listMovies());
})();
