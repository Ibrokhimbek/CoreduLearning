fetch("http://xolisnazar.uz/api/index/currency")
    .then((data) => {
        return data.json()
    })
    .then(data => {
        const database = data.currencyData
        const currencyGroup = document.querySelector("#currencyGroup")
        database.forEach(object => {
            const optionHtml = `
            <option value="${object.Ccy}">${object.CcyNm_UZ}</option>
        `
            currencyGroup.innerHTML += optionHtml
        });
        return data
    })
    .then((data) => {
        const database = data.currencyData
        const sumbitBtn = document.querySelector("#submitBtn")

        sumbitBtn.addEventListener("click", () => {
            const currencyGroup = document.querySelector("#currencyGroup").value
            const summaUser = document.querySelector("#ccyValue").value
            const resultHtml = document.querySelector("#result")

            const currencyObj = database.find((obj) => {
                return obj.Ccy == currencyGroup
            })
            
            const lastResult = () => {
                const kursNarxi = currencyObj.Rate
                return parseInt(summaUser*kursNarxi)+" so'm"
            }
            
            resultHtml.innerHTML = lastResult() 
        })
    })
    .catch((err) => {
        console.log(err);
    })