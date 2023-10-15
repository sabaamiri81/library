
function showAllBooks() {
    let template = BOOKS.map((book) => {
        const { id, title, author, published_date, language, genre, imgSrc } = book;
        return `<div class="library__product">
        <img class="library__product--img" src="./image/${imgSrc}" alt="book picture">
<div class="library__product--shadow">
  <h1 class="library__product--shadow--title">${title}</h1>
  <h2 class="library__product--shadow--author">  اثر : ${author}</h2>
  <h3 class="library__product--shadow--date">${published_date}</h3>
  <h4 class="library__product--shadow--lang">زبان : ${language} </h4>
  <h4 class="library__product--shadow--genre">ژانر : ${genre}</h4>
</div>
<button class="library__btn"  onclick="favorite(${id})">افزودن به کتاب های من</button>
      </div>`
    })
    library.innerHTML = template.join("")
}


// event listener
window.addEventListener("load", showAllBooks);