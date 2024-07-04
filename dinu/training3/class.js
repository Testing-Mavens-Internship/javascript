class Numbers{
    constructor(a,b){ //(2,3)
        this.a=a; //2
        this.b=b;//3
        this.c=7;
        }
     multiplication(a,b)//(5,8)
        {
            let y = a*b;//(5*8)
            console.log(y)
            let z = this.a * this.b;
            console.log(z);

        }
    }
    let mul=new Numbers(2,4);

class Sum extends Numbers{
    constructor(a,b){
        super();
        this.a=a;
        this.b=b;
    }
     sum(a,b)
    {
        let y = a+b;
        console.log(y)
        let z = this.a + this.b;
        console.log(z);
        console.log(b+this.c);
    }
}
let add= new Sum(3,4);

mul.multiplication(5,8);//add.sum(multiplication)to get the same value
add.multiplication(7,3);
add.sum(5,6);
add.sum(7,3);







// class Book {
//     constructor(title, author, year) {
//       this.title = title;
//       this.author = author;
//       this.year = year;
//     }
   
//     getInfo() {
//       return `${this.title} by ${this.author}, published in ${this.year}`;
//     }
//   }
   
//   class Library {
//     constructor() {
//       this.books = [];
//     }
   
//     addBook(book) {
//       this.books.push(book);
//     }
   
//     listBooks() {
//       return this.books.map(book => book.getInfo()).join('\n');
//     }
   
//     findBookByTitle(title) {
//       const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
//       return book ? book.getInfo() : `Book titled "${title}" not found.`;
//     }
//   }
   
//   const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
//   const book2 = new Book("1984", "George Orwell", 1949);
//   const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
   
//   const myLibrary = new Library();
   
//   myLibrary.addBook(book1);
//   myLibrary.addBook(book2);
//   myLibrary.addBook(book3);
   
//   console.log("List of all books in the library:");
//   console.log(myLibrary.listBooks());
   
//   console.log("\nSearching for '1984':");
//   console.log(myLibrary.findBookByTitle("1984"));
   
//   console.log("\nSearching for 'Moby Dick':");
//   console.log(myLibrary.findBookByTitle("Moby Dick"));
