function favorite(bookId) {
    let findBook= BOOKS.find(item => item.id === bookId)
    favBooks.push(findBook);
    counter.innerHTML = favBooks.length;

    localStorage.setItem(
        'myBasket',
        JSON.stringify(favBooks),
    );
}

console.log(favBooks);
