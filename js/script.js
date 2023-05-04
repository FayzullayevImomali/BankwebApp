const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navLinks = document.querySelectorAll('.nav__links');



//                   Modal window             //     
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
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Button scrolling

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


//Event Deligation
//1. Add event listener to common parent element
//2. Determine what element originated the event
document.querySelector('.navbar__list').addEventListener('click', function(e){
    console.log(e.target);

    // Matching strategy
    if(e.target.classList.contains('nav__links')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    };
});


// Tabbed component 

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
    e.preventDefault();
    const clicked = e.target.closest('.operations__tab');

    //Guard clause
    if(!clicked) return;

    tabs.forEach(function(tab){
        tab.classList.remove('operations__tab--active');
    });
    clicked.classList.add('operations__tab--active');
    //Remove all active classes
    tabsContent.forEach(function(content){
        content.classList.remove('operations__content--active');
    })
    //Activa content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
    console.log(clicked.dataset.tab);
});


//Menu fade animations
const navbar = document.querySelector('.navbar');

const handleHover = function(e) {
    if(e.target.classList.contains('nav__links')) {
        const link = e.target;
        const siblings = link.closest('.navbar').querySelectorAll('.nav__link');
        const logo = link.closest('.navbar').querySelector('img');

        siblings.forEach(function(el){
            if(el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    };
};

//Passing an argument  into event handler
navbar.addEventListener('mouseover', handleHover.bind(0.5));
navbar.addEventListener('mouseout', handleHover.bind(1));


//Sticky navigation
const navbarContainer = document.querySelector('.container');
const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function(){
//     //console.log(window.scrollY);
//     if(window.scrollY > initialCoords.top){ 
//         navbar.classList.add('sticky');
//     }    
//     else navbar.classList.remove('sticky');
// });

//Stick navigation with IntersectionObserver API
const header = document.querySelector('.header');
const navbarHeight = navbar.getBoundingClientRect().height;

const stickyNav = function(entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) navbar.classList.add('sticky');
    else navbar.classList.remove('sticky');
    // console.log(entry);
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navbarHeight}px`,
});

headerObserver.observe(header);

// Reveal sections
const sectionReveal = function(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    else {
        entry.target.classList.remove('section--hidden');
    }
    observer.unobserve(entry.target);
    // console.log(entry)
    // console.log(observer);
}
const sectionObserver = new IntersectionObserver(sectionReveal, {
    root: null,
    threshold: 0.15,
});
const allSections = document.querySelectorAll('.section');

allSections.forEach(function(section){
    section.classList.add('section--hidden');
    sectionObserver.observe(section); 
});

// Lazy loading images
const imgTarget = document.querySelectorAll('[data-src]');



const loadImg = function(entries, observer) {
    const [entry] = entries;

    // Replace src with data-src
    if(!entry.isIntersecting) return;
    
    entry.target.src = entry.target.dataset.src;
    // entry.target.classList.remove('lazy-img');
    // loading event
    entry.target.addEventListener('load', function() {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
});
imgTarget.forEach(function(img) {
    imgObserver.observe(img);
});

//Slider 

const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length;

// Next slide
const goToSlide = function(slide) {
    slides.forEach((s, i)=> s.style.transform = `translateX(${100 * (i - slide)}%)`)
}

goToSlide(0);
const nextSlide = function() {
    if(currentSlide === maxSlide - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    goToSlide(currentSlide);
}

const prevSlide = function() {
    if(currentSlide === 0) {
        currentSlide = maxSlide - 1;
    } else{
        currentSlide--;
    }

    goToSlide(currentSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e) {
    if(e.key === "ArrowRight") {
        nextSlide();
    } else if(e.key === "ArrowLeft") {
        
    }
});




//Vladini Minin tasks

const isUnique = function(str) {
    console.log(str.split(''));
}

isUnique('abcd');







// const obsCallback = function(entries, observer) {
//     entries.forEach(entry=> {
//         console.log(entry)
//     });
// };

// const obsOptions = {
//     root: null,
//     threshold: [0,0.2],
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
// console.log(observer);

// const observer2 = new IntersectionObserver(function(entries) {
//     console.log(entries);
// });





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

// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = `We use cookies for improved functionality and analytics`;

// message.innerHTML =  `We use cookies for improved functionality and analytics.
// <button class="btn btn--close-cookie">Got it!</button>`;

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





// const alertH1 = function() {
//     alert(`Great !`)
// }
// h1.addEventListener('mouseenter', function(e) {
//     alert('You are reading the heading :D');
// });


// h1.addEventListener('mouseenter', function(e){
//     //alert(`Great!: You are reading the heading`);
// });


// h1.addEventListener('mouseenter', alertH1);

// setTimeout(()=> h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function() {
//     alert(`onmouseenter: Great!: You are reading the heading`)
// };


//                               Bubble and Capturing events

// rgb(255,255,255)
// const randomInt = (min, max)=> Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = ()=> `rgb(${randomInt(0,255)}, ${randomInt(0, 255)}, ${randomInt(0,255)})`;

// console.log(randomColor(0,255));
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//     this.style.backgroundColor  = randomColor();
//     console.log(`LINK`, e.target);
//     console.log(e.currentTarget);

//     // Stop propagation
//     e.stopPropagation();
// });

// document.querySelector('.navbar__list').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log(`LINK`, e.target);
// });

// document.querySelector('.navbar').addEventListener('click',function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log(`LINK`, e.target);
// });

// const btnOpen = document.querySelector('.nav__links--btn');

// setInterval(function(){
//     btnOpen.style.backgroundColor = `rgb(${randomInt(0,255)}, ${randomInt(0, 255)}, ${randomInt(0,255)})`
// },3000)

//                              193.DOM TRAVERSING                     //

const header1 = document.querySelector('h1');

// Going downwards: child

// console.log(header1.querySelectorAll('.highlight'));
// console.log(header1.childNodes);
// console.log(header1.children);
// header1.lastElementChild.style.color = 'red';
// header1.firstElementChild.style.color = 'orange';


// //  Going upwards: parents
// console.log(header1.parentNode);
// console.log(header1.parentElement);

// //header1.closest('.header__title').style.background = 'var(--gradient-secondary)';

// //  Going sideways: siblings

// console.log(header1.previousElementSibling);
// console.log(header1.nextElementSibling);

// console.log(header1.previousSibling);
// console.log(header1.nextSibling);

// console.log(header1.parentElement.children);
// [...header1.parentElement.children].forEach(function(element) {
//     //if(element !== header1) element.style.transform = 'scale(0.5)';
// });



// const btnOpen = document.querySelector('.nav__links--btn');

// // setInterval(function(){
// //     btnOpen.style.backgroundColor = `rgb(${randomInt(0,255)}, ${randomInt(0, 255)}, ${randomInt(0,255)})`
// // },3000)

// console.log(Math.floor(5.67));
// console.log(Math.random());












