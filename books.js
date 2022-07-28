function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
 }
 
 function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id === id);
  return foundBooks;
 }
 
 function partitionBooksByBorrowedStatus(books) {
   const currentlyChecked = books.filter((book)=> book.borrows[0].returned == false);
   const currentlyReturned = books.filter((book) => book.borrows[0].returned == true);
   const result = [currentlyChecked, currentlyReturned];
   return result;
 }
 
 function getBorrowersForBook(book, accounts) {
   const result = book.borrows.map(borrower => { 
     const result = accounts.find(account => borrower.id === account.id )
     result.returned = borrower.returned;
     return result;
    })
    return result.filter((borrower, index)=> result.findIndex(item => item.id === borrower.id) === index);
  
 }
