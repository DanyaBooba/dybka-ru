const title = () => {
    document.querySelector('title').textContent = 'JavaScript очень крут!'
}

const valueUI = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const updateTextButtons = () => {
    document.querySelector('#button-half').innerHTML = `50% шанс<span class="button__price">от ${'100'} руб.</span>`
    document.querySelector('#button-add').innerHTML = `+ деньги`
}

const updateMoney = () => {
    document.querySelector('.allcash').textContent = `${valueUI(moneyCount())} ${moneyType()}`
}

const updateButtonMoneyType = () => {
    const price = `<span class="button__price">${valueUI(moneyPriceAuto())} ${moneyType()}</span>`
    const text = moneyPriceAuto() === 0 ? 'купить робота' : 'прокачка'
    document.querySelector('#button-boost').innerHTML = `${text} ${price}`
}

const updateButtonHalf = () => {
    const price = `<span class="button__price">от 100 ${moneyType()}</span>`
    document.querySelector('.button-half').innerHTML = `${price}`
}

const updateGameInfo = () => {
    document.querySelector('#game-info-time').innerHTML = `прошло:<span>${valueUI(timeValue())} сек.</span>`
    document.querySelector('#game-info-clicks').innerHTML = `кликов:<span>${valueUI(clickValue())}</span>`
}

const updateGameInfoWhatCanDo = () => {
    document.querySelector('#game-info-whatcando').innerHTML = `за это время можно было:<span>${whatCanDo()}</span>`
}

const updateAuto = () => {
    document.querySelector('#robot-clicks').innerHTML = `<div>${clickValueSec()} ${wordForm(clickValueSec(), 'клик', 'клика', 'кликов')}/сек.</div>`
    if (statusPrice() > 0) {
        document.querySelector('#robot-auto').innerHTML = `<div>+ ${statusPrice()} ${moneyType()}/сек.</div>`
    }
}

const updateUI = () => {
    updateMoney()
    updateButtonMoneyType()
    updateAuto()
    updateGameInfo()
}

const onceUpdateUI = () => {
    title()
    updateUI()
    updateGameInfoWhatCanDo()
    updateTextButtons()
}
