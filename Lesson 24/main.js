// const h1 = document.querySelector("#text").innerHTML.length
// const name = 'O\'roqbek Islom'

// let x = 5;
// let y = "5";
// console.log(x == y);
// console.log(x === y);

const names = ["Ibrohim", "Sunnatilla", "Mirbek", "Salohiddin"];
// names[0] = "Developer"
// console.log(names[names.length - 1]);

let text = "<ul>";
for (let i = 0; i < names.length; i++) {
  text += `<li>${names[i]}</li>`;
}
text += "</ul>"

// let text = "<ul>";
//! forEach() faqat arraylar uchun
// names.forEach(function (name, index) { 
//     text+= `<li>${name} ${index}</li>`
// })
// text += "</ul>"

const parent = document.querySelector(".parent").innerHTML = text

// let x = 5
// console.log( x += 5) // x = x + 5
