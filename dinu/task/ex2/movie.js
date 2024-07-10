
export default class Movie{
    constructor(t,d,y,g){
        this.title= t;
        this.director= d;
        this.year =y;
        this.genre = g;
    }

getInfo() {
  return `${this.title} by ${this.director}, released in ${this.year} [${this.genre}]`;
}
}
