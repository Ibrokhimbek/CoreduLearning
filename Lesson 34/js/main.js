// const button = document.querySelector('#fullInfoBtn')
// const name = document.querySelector('#name')
// const age = document.querySelector('#age')
// const p = document.querySelector("#result")

// button.addEventListener("click", () => {
//     const getFullName = () => {
//         return `My name is ${name.value}, I'm ${age.value} years old`
//     }

//     p.innerHTML = getFullName()
// })

// fetch("http://xolisnazar.uz/api/index/currency")
// .then(res => {
//     return res.json()
// })
// .then(res => {
//     const array = res.currencyData
//     const search = array.find((obj) => {
//         return obj.Ccy == "EUR"
//     })
//     console.log(search);
// })

fetch("http://xolisnazar.uz/api/index/currency")
    .then(res => {
        return res.json()
    })
    .then(res => {
        const selectHTML = document.querySelector("#currencyGroup")
        const array = res.currencyData
        array.forEach(obj => {
            const option = `
        <option value="${obj.Ccy}">${obj.Ccy}</option>
        `
            selectHTML.innerHTML += option
        });
    })

const getValue = () => {
    const selectHTML = document.querySelector("#currencyGroup")
    document.querySelector("#result").innerHTML = selectHTML.value
}