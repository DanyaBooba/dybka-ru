const random = () => Math.random() * 100 >= 50

const buttonHalf = () => {
    moneyCount() < 100 ?
        alert(`Необходимо как минимум 100 ${moneyType()}`) :
        moneySet(random() ? moneyCount() * 2 : parseInt(moneyCount() / 2))
}

const buttonAdd = () => moneyAdd(clickValueSec())

const buttonBoost = () => {
    let money = moneyCount()
    let price = moneyPriceAuto()
    if (money - price >= 0) {
        moneyBuy(price)
        priceAdd()
    } else {
        alert('Бабла не хватает.')
    }
}

const buttonsSetFunc = () => {
    document.querySelector('button#button-half').onclick = () => {
        buttonHalf()
        updateUI()
    };
    document.querySelector('button#button-add').onclick = () => {
        buttonAdd()
        click()
        updateUI()
    };
    document.querySelector('button#button-boost').onclick = () => {
        buttonBoost()
        updateUI()
    };
}
