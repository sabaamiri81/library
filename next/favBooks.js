
function removeBook(removeId) {
    favBooks.forEach((book, index) => {
        if (book.id == removeId){
            favBooks.splice(index, 1)
            counter.innerHTML = favBooks.length
            history.pushState({}, "", "cart");
        } 
    });
    localStorage.setItem("myBasket", favBooks);
    favRender()
}


function render() {
    let currLocation = location.pathname;
    switch (currLocation){
        case "/": renderBooks(BOOKS);
            break;
        case "/cart": renderCart();
            break;
    }
   
}

function favRender() {
    let favTemplate = favBooks.map((favBook) => {
        const { id, title, author, published_date, language, genre, imgSrc } = favBook;
        return ` <div class="favBook">
       <div class="favBook__data">
       <h2 class="favBook__data--title">نام اثر : ${title}</h2>
       <h3 class="favBook__data--author">خالق اثر : ${author}</h3>
       <h4 class="favBook__data--date">زمان انتشار : سال ${published_date}</h4>
       <h5 class="favBook__data--lang">زبان : ${language} </h5>
       <h5 class="favBook__data--genre">ژانر : ${genre}</h5>
   </div>
   <button class="favBook__btn" onclick="removeBook(\`${id}\`)">خوانده شد</button>
       <img class="favBook__img" src="./image/${imgSrc}" alt="book picture">
      
      </div>`
    })
    library.innerHTML = favTemplate.join("");
    filter.classList.add("mainSection__filter--dis")
    history.pushState({}, "", "cart");

}


basket.addEventListener("click", favRender)