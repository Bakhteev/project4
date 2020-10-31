let accordion1 = document.getElementById('accordion1');
let accordion2 = document.getElementById('accordion2');
let accordion3 = document.getElementById('accordion3');
let accordion4 = document.getElementById('accordion4');
let content1 = document.getElementById('content1');
let content2 = document.getElementById('content2');
let content3 = document.getElementById('content3');
let content4 = document.getElementById('content4');

accordion1.addEventListener('click', () => {
    if (accordion1.className == 'active') {
        accordion1.classList.remove('active');
    }
    else {
        accordion1.classList.toggle = 'active';
        content1.classList.toggle('is-active');
    }
});

accordion2.addEventListener('click', () => {
    if (accordion2.className == 'active') {
        accordion2.classList.remove('active');
    }
    else {
        accordion2.classList.toggle = 'active';
        content2.classList.toggle('is-active');
    }
});

accordion3.addEventListener('click', () => {
    if (accordion3.className == 'active') {
        accordion3.classList.remove('active');
    }
    else {
        accordion3.classList.toggle = 'active';
        content3.classList.toggle('is-active');
    }
});

accordion4.addEventListener('click', () => {
    if (accordion4.className == 'active') {
        accordion4.classList.remove('active');
    }
    else {
        accordion4.classList.toggle = 'active';
        content4.classList.toggle('is-active');
    }
});

// let accordion = [{
//     accordion1: document.getElementById('accordion1'),
//     content1: document.getElementById('content1')
// },
// {
//     accordion2: document.getElementById('accordion2'),
//     content2: document.getElementById('content2')
// },
// {
//     accordion3: document.getElementById('accordion3'),
//     content3: document.getElementById('content3')
// },
// {
//     accordion4: document.getElementById('accordion4'),
//     content4: document.getElementById('content4')
// }
// ]

// console.log(accordion);

// // for (let i = 0; i < accordion.length; i++) {
// //     accordion.addEventListener('click', () => {
// //         if (accordion.className == 'active') {
// //             accordion.classList.remove('active');
// //         }
// //         else {
// //             accordion.classList.toggle = 'active';
// //             content.classList.toggle('is-active');
// //         }
// //     });
    
// // }

// // accordion.addEventListener('click', () =>{
// //     for (let i = 0; i < accordion.length; i++) {

// //         if (accordion.className == 'active') {
// //             accordion.classList.remove('active');
// //         }
// //         else {
// //             accordion.classList.toggle = 'active';
// //             content.classList.toggle('is-active');
// //         }
// //     }
// // })

// for (let i = 0; i < accordion.length; i++) {
//     accordion[{i}].classList.toggle('active')
//         if (accordion[{i}].className == 'active') {
//             accordion[{i}].classList.remove('active');
//         }
//         else {
//             accordion[{i}].classList.toggle = 'active';
//             content[{i}].classList.toggle('is-active');
//         }
    
// }

// // accordion[i].addEventListener('click', () => {
// //     if (accordion[i].className == 'active') {
// //         accordion[i].classList.remove('active');
// //     }
// //     else {
// //         accordion[i].classList.toggle = 'active';
// //         content[i].classList.toggle('is-active');
// //     }
// // });



