// ===================================== 1. Exploring JavaScript Objects ===========================

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.bookInfo = function () {
    return `${this.title}, ${this.author}, Pages: ${this.pages}`;
  };
}

let books = [];

function addNewBook(title, author, pages) {
  let book = new Book(title, author, pages);
  books.push(book.bookInfo());
}

function searchByTitle() {
    let booksSortedByTitle = books
  console.log("List of books sorted by Title:");
  booksSortedByTitle.sort((a, b) => {
    let titleA = a.split(",")[0];
    let titleB = b.split(",")[0];
    return titleA.localeCompare(titleB);
  });
  console.log(booksSortedByTitle);
}

function searchByAuthor() {
    let booksSortedByAuthor = books
  console.log("List of books sorted by Author:");
  booksSortedByAuthor.sort((a, b) => {
    let titleA = a.split(",")[1];
    let titleB = b.split(",")[1];
    return titleA.localeCompare(titleB);
  });
  console.log(booksSortedByAuthor);
}

function checkForShortBooks(book) {
  let pages = book.split(",")[2].split(": ")[1];
  return pages < 100;
}

addNewBook("The Litte Prince", "Antoine de Saint-Exupery", 90);
addNewBook("1984", "George Orwell", 328);
addNewBook("One Hundred Years of Solitude", "Gabriel Garcia Marquez", 422);
addNewBook("Dune", "Frank Herbert", 412);
addNewBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 223);
console.log(books);
searchByTitle();
searchByAuthor();
let shortBooks = books.filter(checkForShortBooks);
console.log("List of short books:", shortBooks);

books = books.map(book => {
  let parts = book.split(", ");
  return `Title: ${parts[0]}, Author: ${parts[1]}, ${parts[2]}`;
});

console.log(books);

// ==================================================== 2. Exploring Objects and Math in JavaScript ==============================================

function Account(accountNumber, balance, owner) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.owner = owner;

  this.deposit = function (num) {
    this.balance += num;
    console.log("Deposit made!");
  };

  this.withdrawal = function (num) {
    if (this.balance - num >= 0) {
      this.balance -= num;
      console.log("Withdrawal made!");
    } else {
      console.log(
        "You don't have enough money in your account to make this withdrawal."
      );
    }
  };

  this.calculateCompoundInterest = function (rate, periods) {
    compoundInterest = this.balance * Math.pow(1 + rate / 100, periods);
    return compoundInterest;
  };
}

let myAccount = new Account(123456, 115, "Nicolas");
console.log(myAccount.balance);
myAccount.deposit(32);
console.log(myAccount.balance);
myAccount.withdrawal(22);
console.log(myAccount.balance);
console.log("Your compound interest is:", myAccount.calculateCompoundInterest(0.25, 24));
