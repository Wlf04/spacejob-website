
const toggleMenu = () => {
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === 'burger.svg' ?
        'x.svg'
        :
        'burger.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    const navigation = document.querySelector('.navigation');

    navigation.classList.toggle(
        'navigation--mobile'
    );
};


/*seccion de productos*/

const events = document.getElementById("events");

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

events.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - events.offsetLeft;
  startY = e.pageY - events.offsetTop;
  scrollLeft = events.scrollLeft;
  scrollTop = events.scrollTop;
  events.style.cursor = "grabbing";
});

events.addEventListener("mouseleave", () => {
  isDown = false;
  events.style.cursor = "grab";
});

events.addEventListener("mouseup", () => {
  isDown = false;
  events.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - events.offsetLeft;
  const y = e.pageY - events.offsetTop;
  const walkX = (x - startX) * 1;
  const walkY = (y - startY) * 1;
  events.scrollLeft = scrollLeft - walkX;
  events.scrollTop = scrollTop - walkY;
});

const scrollLeftButton = document.getElementById("action-button--previous");
const scrollRightButton = document.getElementById("action-button--next");

scrollLeftButton.addEventListener("click", () => {
  events.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  events.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
});

events.addEventListener("scroll", (e) => {
  const position = events.scrollLeft;
  if (position === 0) {
    scrollLeftButton.disabled = true;
  } else {
    scrollLeftButton.disabled = false;
  }

  if (Math.round(position) === events.scrollWidth - events.clientWidth) {
    scrollRightButton.disabled = true;
  } else {
    scrollRightButton.disabled = false;
  }
});

/*productos hover*/

function cambiarImagen1() {
  document.getElementById('water').src = 'assets/producto2.jpg';
}

function restaurarImagen1() {
  document.getElementById('water').src = 'assets/producto1.jpg';
}

function cambiarImagen2() {
  document.getElementById('earth').src = 'assets/earth2.jpg';
}

function restaurarImagen2() {
  document.getElementById('earth').src = 'assets/earth.jpg';
}

function cambiarImagen3() {
  document.getElementById('fire').src = 'assets/red2.jpg';
}

function restaurarImagen3() {
  document.getElementById('fire').src = 'assets/red1.jpg';
}


function cambiarImagen4() {
  document.getElementById('forest').src = 'assets/forest2.jpg';
}

function restaurarImagen4() {
  document.getElementById('forest').src = 'assets/forest1.jpg';
}

/*SIDE BAR*/

function openNav() {
  document.getElementById("sidebar").style.width = "350px";
  document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*CONTACT FORM*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



