const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
console.log(btnOpenModal);


const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal =  function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnOpenModal.forEach(btn=> btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', btnCloseModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
});


//////////////////////////////////
/////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// const section1 = document.getElementById('section--1');
// const btn = document.getElementsByClassName('btn');
// console.log(btn);


//                             Creating elements 

//.insertAdjacentHTML;

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics`;

message.innerHTML =  `We use cookies for improved functionality and analytics.
<button class="btn btn--close-cookie">Got it!</button>`;

//header.prepend(message);
// header.append(message);
// prepend() method inserts a set of node objects or string objects before the
// first child of the element

//append() method inserts a set of node objects or string objects after the last
// child

//header.append(message.cloneNode(true)); // => this is copy of the element

// header.before(message); // inserts element before that selectrd element

//eader.after(message); // inserts element after that selectrd element


//                                  Delete elements

// document.querySelector('.btn--close-cookie').
// addEventListener('click', function() {
//     //message.remove()
//     message.parentElement.removeChild(message);
// });

// console.log(message.parentElement);
// console.log(btnCloseModal.parentElement);

//                                Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //This NOT work!

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

const increaseHeight = message.style.height = 
Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

console.log(increaseHeight);

//                       Changing style.css form JS

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//                               Attributes


const logo = document.querySelector('.bank__logo');

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

console.log(logo.getAttribute('designer'));

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__links--btn');
console.log(link.getAttribute('href'));

//                             Date atributes

const headerImg = document.querySelector('.header__img');

console.log(headerImg.dataset.versionNumber);


//                                  Clases

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();









