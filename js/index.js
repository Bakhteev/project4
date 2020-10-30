const question = document.getElementById('question')
const dropDown = [...document.getElementsByClassName('question__item__title')]

// dropDown.addEventListener('click', function () {
//     let dropDownText = question.getElementsByClassName('question__item__description')
//     dropDownText.style.display = 'inline-block'
// })

// dropDown.forEach(element => {
//     element.addEventListener('click', function () {
//         let dropDownText = [...document.getElementsByClassName('question__item__description')]
//         dropDownText.forEach(el => {
//             el.style.display = 'inline-block'
//         })
//     })
// });

dropDown.addEventListener('click', function () {
    let dropDownText = document.getElementsByClassName('question__item__description')
    for (let i = 0; i<4; i++){
        dropDownText.classList.toggle('is-active')
    }
}) 