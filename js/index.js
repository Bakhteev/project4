const question = document.getElementById('question')
const dropDown = question.getElementsByClassName('question__item__title')

dropDown.addEventListener('click', function () {
    let dropDownText = question.getElementsByClassName('question__item__description')
    dropDownText.style.display = 'inline-block'
})
