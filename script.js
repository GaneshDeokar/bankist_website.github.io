'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav=document.querySelector('.nav');
const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header=document.querySelector('.header');
const allSections=document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons=document.getElementsByTagName('button');
console.log(allButtons);

console.log( document.getElementsByClassName('btn'));

// Creating and inserting elements:-

// .insertAdjecentHTML
const message=document.createElement('div');
message.classList.add('cookie-message');
message.textContent='We use coockies to improve functionality and analatics!';
message.innerHTML='We use coockies to improve functionality and analatics!.<button class="btn btn--close--cookie"></button>';
header.prepend(message);
header.append(message);


// header.append(message.cloneNode(true));

header.before(message);
header.after(message);

// Delete element
document
.querySelector('.btn--close--cookie')
.addEventListener('click',function(){
  // message.remove();
  message.parentElement.removeChild(message);
});


// Styles 
message.style.backgroundColor="#37383d";
message.style.width='120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30+'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo=document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt='Beautiful minimilist logo';

// Non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link=document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link1=document.querySelector('.nav__link--btn');
console.log(link1.href);
console.log(link1.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);


// classes
// we can add multiple classes
// In below example classes where added to just learn a point.

logo.classList.add('c','j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); //not like includes function which is in array.

// Don't use
logo.className='jonas';


// Implementing smooth scrolling:-

const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  e.preventDefault();
  const s1coords=section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)',window.pageXOffset,pageYOffset);

  console.log('height/width viewport',
  document.documentElement.clientHeight,
  document.documentElement.clientWidth);

  // Scrolling

// Old way of scrolling:-

/*   window.scrollTo(
    s1coords.left+window.pageXOffset,
    s1coords.top+window.pageYOffset
    ); */

/*     window.scrollTo({
    left:s1coords.left+window.pageXOffset,
    top:s1coords.top+window.pageYOffset,
    behavior:'smooth',
  }); */

  // Modern way of scrolling:-

  // Button Scrolling:-
  // section1.scrollIntoView({behavior:'smooth'});

});

const h1 = document.querySelector('h1');

const alertH1=function(e){
  alert('addEventListner:Great! You are reading the heading.');
};

h1.addEventListener('',alertH1);

setTimeout(()=>  h1.removeEventListener('mouseenter',alertH1),2000);

// h1.onmouseenter=function(e){
//   alert('addEventListner:Great! You are reading the heading.');
// };



// Event Propagation bubbling and capturing:-

/*     <html>
      <head>
      </head>
      <body>
        <section>
          <p><a></a>click here.</p>
        </section>
      </body>
    </html> */


/* capturing phase:- click event passes through following track

  click->Document->Element<html>->Element<body>->Element<section>->Element<p>->Element<a>   */ 

/* BUbbling Phase:- Click event passes through following traack

Element<a>->Element<p>->Element<section>->Element<body>->Element<html>->Document  */


/* // Event propagation in practice:-

const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);

const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

document.querySelector('.nav__link').addEventListener('click',function(e){
  this.style.backgroundColor=randomColor();
  console.log('LINK',e.target);
  console.log(e.currentTarget===this);

  // stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click',function(e){
  this.style.backgroundColor=randomColor();
  console.log('CONTAINER',e.target);
  console.log(e.currentTarget);
});

document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backgroundColor=randomColor();
  console.log('NAV',e.target);
  console.log(e.currentTarget);
},false);
 */

// Event delegation: Implementing page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id =this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   });
// });

// Imp steps:-
// 1.Add event listener to common parent element.
// 2.Determine what element originated the event.
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();

  // Matching Strategy
  if(e.target.classList.contains('nav__link')){   
    const id =e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});


/* 
// DOM Traversing:-
const hh1=document.querySelector('h1');

// Going downwords: child
console.log(hh1.querySelectorAll('.highlight'));

console.log(hh1.childNodes);
hh1.firstElementChild.style.color='white';
hh1.lastElementChild.style.color='orangered';

// Going upwords:-
console.log(hh1.parentNode);
console.log(hh1.parentElement);

hh1.closest('.header').style.background='var(--gradient-secondary)';

hh1.closest('h1').style.background='var(--gradient-primary)';


// Going sideways: siblings
console.log(hh1.previousElementSibling);
console.log(hh1.nextElementSibling);
console.log(hh1.previousSibling);
console.log(hh1.nextSibling);

console.log(hh1.parentElement.children); */



// Building a tabbed component:-

tabsContainer.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab');

  // Guard clause
  if(!clicked) return;

  // remove tab
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c=>c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});



// Passing Argument to Event Handlers:-

// Menu fade animation:-

const handleHover=function(e){
  if(e.target.classList.contains('nav__link')){
    const clicked1=e.target;
    const siblings1=clicked1.closest('.nav').querySelectorAll('.nav__link');
    const logo1=clicked1.closest('.nav').querySelector('img');

    siblings1.forEach(el=>{
      if(el!==clicked1) el.style.opacity=this;
    });
    logo1.style.opacity=this;
  }
};

nav.addEventListener('mouseover',handleHover.bind(0.5));

nav.addEventListener('mouseout',handleHover.bind(1));


// Implementing sticky navigation: the scroll event:-
// const initialCords=section1.getBoundingClientRect();
// console.log(initialCords);
// window.addEventListener('scroll',function(){
//   // console.log(window.scrollY);
  
//   if(window.scrollY>initialCords.top)nav.classList.add('sticky') 
//   else nav.classList.remove('sticky');
// });


// A  better way of the Intersection Observer API:-
// Implementing a sticky Navigation: The Scroll

/* const section2=document.getElementById('section--2');

const obsCallback=function(entries,observer){
  entries.forEach(entry=>{
    console.log(entry);

  })
};

const obsOptions={
  root:null,
  threshold:[0,0.2],
};

const observer=new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); */

const navHeight=nav.getBoundingClientRect().height;

const stickynav=(entries)=>{
  const [entry]=entries;
  // console.log(entry);

  if(!entry.isIntersecting)nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const options1={
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`,
};

const header11=document.querySelector('.header');

const headerObserver=new IntersectionObserver(stickynav,options1);

headerObserver.observe(header11);



// Revealing Elements on scroll:-

const allSections1=document.querySelectorAll('.section')

const revealSection=function(entries,observer){
  const [entry]=entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver=new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
});

allSections1.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});


// Lazy loading images:-

const imgTargets=document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg=function(entries,observer){
 const[entry]=entries ;
//  console.log(entry);
 if(!entry.isIntersecting)return;

//  Replace src with data-src
entry.target.src=entry.target.dataset.src;

entry.target.addEventListener('load',function(){
entry.target.classList.remove('lazy-img');
});
  // observer.unobserve(entry.target);
};

const imgObserver=new IntersectionObserver(loadImg,{
  root:null,
  threshhold:0,
  rootMargin:'200px',
});

imgTargets.forEach(img=>imgObserver.observe(img));



// Building a Slider component : part 1:-

// slider:-

const slides=document.querySelectorAll('.slide');
const btnLeft=document.querySelector('.slider__btn--left');
const btnRight=document.querySelector('.slider__btn--right');

let curSlide=0;
const maxSlide=slides.length;

const slider=document.querySelector('.slider');
// slider.style.transform='scale(0.4) translateX(-800px)';
// slider.style.overflow='visible';

const goToSlide=function(slide){
  slides.forEach((s,i)=>s.style.transform=`translateX(${100*(i-slide)}%)`);
};

goToSlide(0);

// Next slide

const nextSlide=function(){
  if(curSlide===maxSlide-1){
    curSlide=0;
  }
  else{
  curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide=function(){
  if(curSlide===maxSlide*0){
    curSlide=maxSlide-1;
  }else{
  curSlide--;
  }
  goToSlide(curSlide);
}

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide)
// curSlide=1:-100%,0%,100%,200%,....



document.addEventListener('DOMContentLoaded',function(e){
  console.log('html parsed and dom tree built!',e);
});

 window.addEventListener('load',function(e){
   console.log('page fully loaded!',e);
 });

// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue='';
// });

