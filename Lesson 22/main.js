// Global variable
const Sunnatilla = {
  name: "Sunnatilla",
  surname: "Xo'jayev",
  age: 20,
  study: true,
  merried: false,
  fullName: function (name) {
    return this.name + " " + this.surname+ " " + name;
  },
};

//* Calling the key of the Object
// console.log(Sunnatilla.name) //! 1-usul
// console.log(Sunnatilla["name"]) //! 2-usul

// const myFunction = function () {
//   //   const Sunnatilla = {
//   //     name: "Sunnatilla",
//   //     surname: "Xo'jayev",
//   //     age: 20,
//   //     study: true,
//   //     merried: false,
//   //   };
//   alert(`${Sunnatilla.name} dasturlashni o'rganyapti`);
// };

// const myFunction = function() {
//     const name = Sunnatilla.fullName();

//     alert(name)
// };

// console.log(Sunnatilla.name);

//* HTMLdan elementlarni olib kelish
// console.log(document.getElementById("name").innerHTML = "Sunnatilla Xo'jayev")

function changeName(name) {
  const h1 = document.getElementById("name");
  //   h1.innerHTML = Date();
  h1.innerHTML = Sunnatilla.fullName(name);
}

// let name = "sunnat"
// name = "ibrohim"
