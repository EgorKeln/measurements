
AOS.init();



const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');

})

let close0 = document.querySelector('.close0');
let close1 = document.querySelector('.close1');
let close2 = document.querySelector('.close2');
let close3 = document.querySelector('.close3');
let close4 = document.querySelector('.close4');
let close5 = document.querySelector('.close5');

close0.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close1.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close2.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close3.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close4.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close5.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
};



const SkewedOne = document.querySelector('.SkewedOne');
const SkewedTwo = document.querySelector('.SkewedTwo');
window.addEventListener('scroll', function(){
    const value1 = -15 + window.scrollY/45;
    const value2 = 15 + window.scrollY/-45;
    SkewedOne.style.transform = "skewY(" + value1 + "deg)";
    SkewedTwo.style.transform = "skewY(" + value2 + "deg)";
});



let cardOnClickOne = document.querySelector('.cardOnClickOne');
let OpenOne = document.querySelector('.OpenOne');
let CloseOne = document.querySelector('.CloseOne');
let cardOnClickTwo = document.querySelector('.cardOnClickTwo');
let OpenTwo = document.querySelector('.OpenTwo');
let CloseTwo = document.querySelector('.CloseTwo');
let cardOnClickThree = document.querySelector('.cardOnClickThree');
let OpenThree = document.querySelector('.OpenThree');
let CloseThree = document.querySelector('.CloseThree');
OpenOne.onclick = function(){
    cardOnClickOne.classList.add('activeСardOne');
    cardOnClickTwo.classList.remove('activeСardTwo');
    cardOnClickThree.classList.remove('activeСardThree');
}
OpenTwo.onclick = function(){
    cardOnClickTwo.classList.add('activeСardTwo');
    cardOnClickOne.classList.remove('activeСardOne');
    cardOnClickThree.classList.remove('activeСardThree');
}
OpenThree.onclick = function(){
    cardOnClickThree.classList.add('activeСardThree');
    cardOnClickOne.classList.remove('activeСardOne');
    cardOnClickTwo.classList.remove('activeСardTwo');
}
CloseOne.onclick = function(){
    cardOnClickOne.classList.remove('activeСardOne');
}
CloseTwo.onclick = function(){
    cardOnClickTwo.classList.remove('activeСardTwo');
}
CloseThree.onclick = function(){
    cardOnClickThree.classList.remove('activeСardThree');
};


