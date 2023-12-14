function getBooks() {
    fetch('/api/books')
      .then(response => response.json())
      .then(data => {
        const booksResult = document.getElementById('booksResult');
        booksResult.innerHTML = '<h3>Books:</h3>';
        data.forEach(book => {
          booksResult.innerHTML += `<p>${book.title} by ${book.author}</p>`;
        });
      });
  }
  
  function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
  
    fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author }),
    })
    .then(response => response.json())
    .then(data => {
      const addResult = document.getElementById('addResult');
      addResult.innerHTML = `<p>${data.message}</p><p>Added: ${data.book.title} by ${data.book.author}</p>`;
    });
  }
  