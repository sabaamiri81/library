// initial authors
let uniqueAuthors = [];
let temp = []
let count = 0;

temp = BOOKS.map(item => {
    return item.author;
});

for (let i = 0; i < temp.length; i++) {

    uniqueAuthors.push(temp[i]);
    for (let j = i + 1; j < temp.length; j++) {
        if (temp[i] == temp[j]) {
            temp.splice(j, 1)
            j--;
        }

    }

}

temp = uniqueAuthors.map(item => {
    return `<li>
          <button class="mainSection__filter--btn">
                ${item}
                </button>
            </li>`
}).join("");


filter.innerHTML = temp;




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



// // initial genre
// temp = BOOKS.map(item => item.genre);
// let uniqueGenres = [];

// for (let i = 0; i < temp.length; i++) {
//     uniqueGenres.push(temp[i]);
//     for (let j = i + 1; j < temp.length; j++) {
//         if (temp[i] == temp[j]){
//             temp.splice(j, 1)
//             j--;
//         };
//     }
// }

// temp = uniqueGenres.map(item => {
//     return `<li>
//                 ${item}
//             </li>`
// }).join("");


// filter.innerHTML = temp;
