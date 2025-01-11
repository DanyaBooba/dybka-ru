const popup = () => {
    document.querySelector('.popup').classList.add('show')
    document.querySelector('#popup-open').classList.add('d-none')
}

const popupClose = () => {
    document.querySelector('.popup').classList.remove('show')
    document.querySelector('#popup-open').classList.remove('d-none')
}
