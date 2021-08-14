let number = 16;
let string = "Ibrohim Turaboev";
let string2 = "Ibrohim To'raboev " + number + " yoshda";
let string3 = `Ibrohim Turaboev ${number} yoshda`;
let boolean = true & false;
let typeNull = null;
// let undefined;
let array = ["Ibrohim", "Sunnat", "Mirbek", false, true, 28, undefined];
let object = {
  name: "Ibrohim",
  surName: "Turaboev",
  age: 20,
  merried: false,
  working: true,
};

function showAlert(name, age) {
  let progLang = "JavaScript";
  alert(
    `Salom Saytga xush kelibsiz! Sizning ismingiz ${name}, yoshingiz ${age}da! Sizning bilgan dasturlash tilingiz ${progLang}`
  );
}
