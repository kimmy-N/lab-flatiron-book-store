const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// Step 2: Manipulating Existing Elements
// 1. Select Title Element - Select the DOM element with the id of "header" and save as a variable called "bookStoreTitle"
const bookStoreTitle = document.querySelector('#header');

// 2. Change element to match bookstore name - Change the textContent of "bookStoreTitle" to the name property of the "bookStore" variable
bookStoreTitle.textContent = bookStore.name;

// Step 3: Create New Elements - Loop through every book
// Select the element with the id of "book-list" and save it to the variable "bookList"
const bookList = document.querySelector('#book-list');

// Loop through every book element - Every book is saved in the books property of the bookStore variable
bookStore.books.forEach(book => {
    // Create elements for each book:
    const bookContainer = document.createElement('li');  // li element: bookContainer
    const bookTitle = document.createElement('h3');      // h3 element: bookTitle
    const bookAuthor = document.createElement('p');      // p element: bookAuthor
    const bookImage = document.createElement('img');     // img element: bookImage
    
    // Change the textContent of each element to match book object:
    bookTitle.textContent = book.title;     // Set bookTitle textContent to the title of the book
    bookAuthor.textContent = book.author;   // Set bookAuthor textContent to the author of the book
    bookImage.src = book.imageUrl;          // Set bookImage src to the image url of the book
    
    // Append book elements to bookList
    // Append bookTitle, bookAuthor, and bookImage elements to bookContainer element
    bookContainer.append(bookTitle, bookAuthor, bookImage);
    
    // Append bookContainer element to bookList
    bookList.append(bookContainer);
});

