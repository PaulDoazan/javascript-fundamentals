const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
];

const btns = document.querySelectorAll(".slider-btn");
const imgs = document.querySelectorAll(".slider-img");

let slideIndex;

init();

btns.forEach((e, index) => {
    e.leftOrRight = index;
    e.addEventListener("click", onClickBtn);
    e.addEventListener("mousedown", onDownBtn);
    e.addEventListener("mouseup", onUpBtn);
});

function onDownBtn(e) {
    console.log('down')
}

function onUpBtn(e) {
    console.log('up')
}

function onClickBtn(e) {
    console.log('click')
    if (e.currentTarget.leftOrRight === 0) {
        slideIndex--;
    } else {
        slideIndex++;
    }

    btns[0].style.opacity = btns[1].style.opacity = 1
    btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

    if (slideIndex <= 0) {
        slideIndex = 0;
        btns[0].style.opacity = 0.5
        btns[0].style.pointerEvents = 'none'
    } else if (slideIndex >= imgs.length - 1) {
        slideIndex = imgs.length - 1;
        btns[1].style.opacity = 0.5
        btns[1].style.pointerEvents = 'none'
    }

    displayImages(slideIndex)
}

function displayImages(slideI) {
    imgs.forEach((img, indexImg) => {
        img.style.transition = 'transform 3s';
        img.style.transform = `translateX(${(indexImg - slideI) * 100}%)`
    })
}

function init() {
    slideIndex = 0;
    btns[0].style.opacity = 0.5
    btns[0].style.pointerEvents = 'none'
    imgs.forEach((img, indexImg) => {
        img.style.transform = `translateX(${(indexImg - slideIndex) * 100}%)`
    })
}