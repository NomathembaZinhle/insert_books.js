// insert_books.js
// Run this script with: `mongosh insert_books.js` or inside your MongoDB shell

use plp_bookstore;

db.books.insertMany([
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 15.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 19.99,
    in_stock: true,
    pages: 223,
    publisher: "Bloomsbury"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    published_year: 2003,
    price: 12.99,
    in_stock: false,
    pages: 489,
    publisher: "Doubleday"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 10.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 14.99,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 9.99,
    in_stock: true,
    pages: 279,
    publisher: "T. Egerton"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 11.99,
    in_stock: false,
    pages: 214,
    publisher: "Little, Brown and Company"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 13.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 16.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperTorch"
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Young Adult",
    published_year: 2012,
    price: 17.99,
    in_stock: true,
    pages: 313,
    publisher: "Dutton Books"
  }
]);

print("Inserted 10 books successfully!");
