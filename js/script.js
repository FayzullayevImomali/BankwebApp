const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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



btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(s1coords.left, s1coords.top);
    // console.log(e.target.getBoundingClientRect());
    console.log(`Current scroll(X/Y)`, window.pageXOffset, pageYOffset);
    // console.log(`height/width viewport`, document.documentElement.clientHeight,
    // document.documentElement.clientWidth);

    //Scrolling old way
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

    // old way
    window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth',
    });

    //this is modern way 
    //ection1.scrollIntoView({behavior: 'smooth'});
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

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height); //This NOT work!

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// const increaseHeight = message.style.height = 
// Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// console.log(increaseHeight);

//                       Changing style.css form JS

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//                               Attributes


const logo = document.querySelector('.bank__logo');

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// console.log(logo.getAttribute('designer'));

// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__links--btn');
// console.log(link.getAttribute('href'));

// //                             Date atributes

// const headerImg = document.querySelector('.header__img');

// console.log(headerImg.dataset.versionNumber);


//                                  Clases

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();



const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(e){
//     //alert(`Great!: You are reading the heading`);
// });

const alertH1 = function() {
    alert('mouseenter: Great! you are reading the header');
    //h1.removeEventListener('mouseenter', alertH1);
}

h1.addEventListener('mouseenter', alertH1);

setTimeout(()=> h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function() {
//     alert(`onmouseenter: Great!: You are reading the heading`)
// };


//                               Bubble and Capturing events

// rgb(255,255,255)
const randomInt = (min, max)=> Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = ()=> `rgb(${randomInt(0,255)}, ${randomInt(0, 255)}, ${randomInt(0,255)})`;

console.log(randomColor(0,255));
document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor  = randomColor();
    console.log(`LINK`, e.target);
    console.log(e.currentTarget);

    // Stop propagation
    e.stopPropagation();
});

document.querySelector('.navbar__list').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log(`LINK`, e.target);
});

document.querySelector('.navbar').addEventListener('click',function(e) {
    this.style.backgroundColor = randomColor();
    console.log(`LINK`, e.target);
});

const btnOpen = document.querySelector('.nav__links--btn');

// setInterval(function(){
//     btnOpen.style.backgroundColor = `rgb(${randomInt(0,255)}, ${randomInt(0, 255)}, ${randomInt(0,255)})`
// },3000)














