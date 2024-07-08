// Task Description: Movie Library System
// Objective: Create a movie library system where you can add, list, search, and filter movies. Implement classes for Movie and Library. Use inheritance and polymorphism to extend functionalities. Utilize async/await to simulate asynchronous data fetching.
 // Requirements:

// Movie Class:
// Properties: title, director, year, genre
// Method: getInfo()
// Should be in Movie.js
// Library Class:
 
// Properties: movies (array)
// Methods: addMovie(movie), listMovies(), findMovieByTitle(title), filterMoviesByGenre(genre)
// Should be in Library.js
// AdvancedLibrary Class:
 
// Extends Library
// Method: loadMovies() (async method to simulate fetching movies from an external source)
// Should be in AdvancedLibrary.js
// Main Script:
 
// Create instances of Movie and AdvancedLibrary
// Add movies to the library
// Demonstrate listing, searching, filtering, and loading movies asynchronously
// Should be in main.js
// Detailed Steps:
// Create Movie.js:
 
// Define a Movie class with a constructor that accepts title, director, year, and genre.
// Implement a getInfo() method that returns a string with the movie details.
// Create Library.js:
 
// Define a Library class with a constructor that initializes an empty movies array.
// Implement methods:
// addMovie(movie): Adds a movie to the movies array.
// listMovies(): Returns a string listing all movies in the library.
// findMovieByTitle(title): Finds a movie by its title and returns its details.
// filterMoviesByGenre(genre): Filters movies by genre and returns an array of matched movies.
// Create AdvancedLibrary.js:
 
// Import Library and Movie classes.
// Define an AdvancedLibrary class that extends Library.
// Implement an async method loadMovies() that simulates loading movies asynchronously and adds them to the library.
// Create main.js:
 
// Import Movie and AdvancedLibrary classes.
// Create an instance of AdvancedLibrary.
// Add some movies to the library using addMovie().
// List all movies in the library using listMovies().
// Search for a movie by title using findMovieByTitle().
// Filter movies by genre using filterMoviesByGenre().
// Load movies asynchronously using loadMovies() and list all movies again to show the updated library.

import Movie from './Movie.js';
import AdvancedLibrary from './AdvancedLibrary.js';

(async function main() {
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
    console.log(library.filterMoviesByGenre('Sci-Fi'));

    console.log('\nLoading movies asynchronously:');
    await library.loadMovies();
    console.log(library.listMovies());
})();
