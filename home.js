function getTotalBooksCount(books) {
  return books.length
 }
 
 function getTotalAccountsCount(accounts) {
   const totalAccounts = []
   return accounts.length
 }
 
 function getBooksBorrowedCount(books) {
     let count = 0;
     for (let i = 0; i < books.length; i++) {
         count += books[i].borrows.filter(borrow=>borrow.returned == false).length    } 
   return count;
 }
 
 function getMostCommonGenres(books) {
    const map = {}
    books.forEach(({genre}) => {
      if(map[genre]) {
        map[genre]++
      } else {
        map[genre] = 1
      }
    })
 
   return Object.entries(map).map(([name, count]) => {
     return {name, count}
   }).sort((a, b) => b.count - a.count).slice(0,5)
 }
 
 
 function getMostPopularBooks(books) {
  return books
   .map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   .slice(0, 5);
 }
                    
 
 
 function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }
 
