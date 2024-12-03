export class Movie {
    constructor(title, director, year, genre) {
      this.title = title;
      this.director = director;
      this.year = year;
      this.genre = genre;
    }
  
    getInfo() {
      return `${this.title} by ${this.director}, released in ${this.year} [${this.genre}]`;
    }
  }
  