let accordion1 = document.getElementById('accordion1');
let accordion2 = document.getElementById('accordion2');
let accordion3 = document.getElementById('accordion3');
let accordion4 = document.getElementById('accordion4');
let content1 = document.getElementById('content1');
let content2 = document.getElementById('content2');
let content3 = document.getElementById('content3');
let content4 = document.getElementById('content4');

let accordionArray = [accordion1, accordion2, accordion3, accordion4];
let accordionContent = [content1, content2, content3, content4];

accordionArray.forEach((bogdan, i) => bogdan.addEventListener('click', () => {
    bogdan.classList.toggle('active');
    accordionContent[i].classList.toggle(`is-active`);
}));
