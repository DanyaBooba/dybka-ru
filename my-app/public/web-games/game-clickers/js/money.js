let money = +(sessionStorage.getItem('_money') ?? 0)
let type = sessionStorage.getItem('_type') ?? 'руб.'
let priceAutoIndex = parseInt(sessionStorage.getItem('_auto') ?? 0)

const moneyCount = () => money

const moneyType = () => type

const moneyAdd = value => {
    money += parseInt(value >= 0 ? value : 0)
    moneySave()
}

const moneyBuy = value => {
    money -= parseInt(value <= money ? value : 0)
    moneySave()
}

const moneySet = value => {
    money = parseInt(value >= 0 ? value : money)
    moneySave()
}

const moneySave = () => sessionStorage.setItem('_money', money)

const moneyPriceAuto = () => parseInt(2.8 ** parseInt(priceAutoIndex))

const statusPrice = () => parseInt(2 ** (priceAutoIndex - 1))

const priceAdd = () => {
    priceAutoIndex += 1
    priceSave()
}

const priceSave = () => sessionStorage.setItem('_auto', priceAutoIndex)

const randomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const clickValueSec = () => priceAutoIndex > 0 ? 2 * priceAutoIndex : 1

const resetMoney = () => moneySet(0)
