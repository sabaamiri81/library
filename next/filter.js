// initial authors
// let uniqueAuthors = [];
// let temp = []
// let count = 0;

// temp = BOOKS.map(item => {
//     return item.author;
// });

// for (let i = 0; i < temp.length; i++) {

//     uniqueAuthors.push(temp[i]);
//     for (let j = i + 1; j < temp.length; j++) {
//         if (temp[i] == temp[j]) {
//             temp.splice(j, 1)
//             j--;
//         }

//     }

// }

// temp = uniqueAuthors.map(item => {
//     return `<li>
//           <button class="mainSection__filter--btn" onclick="findAuthor(${item})">
//                 ${item}
//                 </button>
//             </li>`
// }).join("");


// filter.innerHTML = temp;

// let filterCards = []
// function findAuthor(name){
//      let selectedAuthor= BOOKS.filter(book => book.author == name)
//     filterCards.push(selectedAuthor)
// }

// console.log(filterCards);




// // initial language
// temp = BOOKS.map(item => item.language);
// let uniqueLanguages = [];

// for (let i = 0; i < temp.length; i++) {
//     uniqueLanguages.push(temp[i]);
//     for (let j = i + 1; j < temp.length; j++) {
//         if (temp[i] == temp[j]){
//             temp.splice(j, 1)
//             j--;
//         };
//     }
// }

// temp = uniqueLanguages.map(item => {
//     return `<li>
//                 ${item}
//             </li>`
// }).join("");

// filter.innerHTML = temp;

function showAllBook(findGenre) {
    let template =findGenre.map((book) => {
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



function findGenre(genre){
   let selectedGenre = BOOKS.filter(book => book.genre == genre);
   console.log(selectedGenre);
   showAllBook(selectedGenre)
}



// initial genre
temp = BOOKS.map(item => item.genre);
for (let i = 0; i < temp.length; i++) {
    uniqueGenres.push(temp[i]);
    for (let j = i + 1; j < temp.length; j++) {
        if (temp[i] == temp[j]){
            temp.splice(j, 1)
            j--;
        };
    }
}

console.log(uniqueGenres);

temp = uniqueGenres.map(item => {
    return `<li>
              <button class="mainSection__filter--btn" onclick="findGenre(\`${item}\`)">
                    ${item}
                    </button>
                </li>`
}).join("");


filter.innerHTML = temp;




