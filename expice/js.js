let changerR = document.querySelector('.changerR'),
    changerL = document.querySelector('.changerL');
changerR.onclick = () => {
    document.body.classList.toggle('green');
};
changerL.onclick = () => {
    document.body.classList.toggle('green');
};
///
document.querySelector('.btn').onclick = myCalc;
function myCalc () {
    let a = document.querySelectorAll('#searcher').value;
    document.querySelector('#searcher').value = null;
};
///
let menuOpener = document.querySelector(".menuOpener"),
    burger = document.querySelector(".menu1"),
    menuCloser = document.querySelector('.menuCloser');

menuOpener.addEventListener('click', function(){
        burger.classList.toggle('menuClose');
        document.body.style.overflow = "hidden";
        menuCloser.style.opacity= 1;
        menuCloser.style.visibility = "visible"
    });
menuCloser.addEventListener('click', function(){
        burger.classList.toggle('menuClose');
        document.body.style.overflow = "";
        
        menuCloser.style.opacity= 0;
        menuCloser.style.visibility = "hidden"
    });