// arrays
const favBooks =[]
const filterWriter =[]
const filterLang =[]
const filterGenre =[]


// dom nodes
let library = document.querySelector(".mainSection__library");
let basket = document.querySelector(".header__shoppingIcon");
let filter = document.querySelector(".mainSection__filter");
let counter = document.querySelector(".header__shoppingIcon--number");


let storedBasket = localStorage.getItem("myBasket");

// if(storedBasket == "[object Object]" || !storedBasket){
//     favBooks = [];
// }else{
//     favBooks = JSON.parse(storedBasket);
// }
