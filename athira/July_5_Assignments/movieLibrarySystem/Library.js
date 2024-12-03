class Library {
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
        const movie = this.movies.find(movie => movie.title === title);
        return movie ? movie.getInfo() : 'Movie not found';
    }

    filterMoviesByGenre(genre) {
        return this.movies.filter(movie => movie.genre === genre).map(movie => movie.getInfo()).join('\n');
    }
}

export default Library;
