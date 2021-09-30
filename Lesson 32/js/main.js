// function func() {
//     console.log("It is function")
// }
// func()
//! Arrow function
// const func = () => {
//     console.log("It is function")
// }
// func()

// fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
//     return res.json()
// }).then(res => {
//     const url = res.message
//     const image = document.querySelector('#img')
//     image.setAttribute("src", url)
// })

fetch("https://open.er-api.com/v6/latest/USD").then((res) => {
    return res.json()
}).then(res => {
    const currency = res.base_code
    const uzsSotish = res.rates.UZS
    const uzsOlish = res.rates.UZS - 200.00
    const nameCurrency = document.querySelectorAll('#nameCurrency')
    const olish = document.querySelector('#olish')
    const sotish = document.querySelector('#sotish')
    nameCurrency[0].innerHTML = currency
    nameCurrency[1].innerHTML = currency
    olish.innerHTML = uzsOlish
    sotish.innerHTML = uzsSotish
})