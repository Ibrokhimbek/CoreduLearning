//! GET POST PUT DELETE

axios.get("http://xolisnazar.uz/api/index/currency")
.then((result) => {
    const currencyArray = result.data.currencyData
    currencyArray.forEach((element, index) => {
        const currencyDiv = `
        <div class="currency" data-aos="fade-right">
            <span>${element.Ccy}</span>
            <span>${element.Rate}</span>
            <span>${element.Diff}</span>
            <span>${element.Date}</span>
        </div>
        `
        document.querySelector('.main').innerHTML += currencyDiv
    });
})
.catch((err) => {
    console.log(err)
});

AOS.init({
    delay: 600,
    once: false,
})