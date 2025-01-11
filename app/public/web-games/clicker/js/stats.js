let statsTime = parseInt(sessionStorage.getItem('_stats_time') ?? 0)
let statsClicks = parseInt(sessionStorage.getItem('_stats_click') ?? 0)

const time = () => {
    statsTime += 1
    saveTime()
}

const click = () => {
    statsClicks += 1
    saveClick()
}

const timeValue = () => statsTime

const clickValue = () => statsClicks

const saveTime = () => sessionStorage.setItem('_stats_time', statsTime)

const saveClick = () => sessionStorage.setItem('_stats_click', statsClicks)

const wordForm = (num, form1, form2, form3) => {
    num = Math.abs(num) % 100
    numx = num % 10

    if (num > 10 && num < 20) return form3;
    if (numx > 1 && numx < 5) return form2;
    if (numx == 1)            return form1;

    return form3;
}

const whatCanDo = () => {
    let value1 = randomValue(1, 10)
    let listWhatCanDo = [
        `научиться кричать как настоящий пират`,
        `построить замок из конфет`,
        `придумать новый способ есть суп`,
        `организовать чемпионат по перетягиванию стула`,
        `сходить на ${['работу', 'учебу', 'благотворительность'][randomValue(0, 2)]}`,
        `сшить шапку для кактуса`,
        `создать язык жестов для общения с животными`,
        `сделать матанализ ${value1} ${wordForm(value1, 'раз', 'раза', 'раз')}`,
        `устроить соревнование по прыжкам в одеяло`,
        `провести чаепитие с плюшевыми мишками`,
        `организовать соревнование по метанию тапочек`,
    ]
    return listWhatCanDo[randomValue(0, listWhatCanDo.length - 1)]
}

const resetStats = () => {
    statsTime = 0
    sessionStorage.setItem('_stats_time', 0)
    statsClicks = 0
    sessionStorage.setItem('_stats_click', 0)
}
