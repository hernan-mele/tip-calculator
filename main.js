const form = document.querySelector('#tip-form')
const button = document.querySelector('#calc')
const dinero = document.querySelector('#dinero')
const total = document.querySelector('#total')
const tipsValues = document.querySelectorAll('input[name="tip"]')
const tipsValuesArray = [...tipsValues]

const tips = {
    '0': document.querySelector('#tip0').value,
    '5': document.querySelector('#tip5').value,
    '10': document.querySelector('#tip10').value,
    '15': document.querySelector('#tip15').value,
    '20': document.querySelector('#tip20').value
}
let totalMoney


button.addEventListener('click', e => {

    e.preventDefault()

    tipsValuesArray.forEach(tip => {
        if(tip.checked){
            totalMoney = parseFloat(parseFloat(dinero.value) + (dinero.value * tip.value / 100))
            total.value = totalMoney.toString()
        }
    })
})