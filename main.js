let CHARACTER = jelly;
let ANIMATING = false;
let TRANSITIONING = false;

document.querySelector('.js-butter-icon').addEventListener('click', () => {
  switchCharacter(butter);
});

document.querySelector('.js-jelly-icon').addEventListener('click', () => {
  switchCharacter(jelly);
});

document.querySelector('.js-kiss-button').addEventListener('click', () => {
  if (ANIMATING === false) {
    CHARACTER.kissAnimation();
    CHARACTER.increaseHeart();
  } else {
    CHARACTER.increaseHeart();
  }
});

document.querySelector('.js-ribbon-button').addEventListener('click', () => {
  CHARACTER.toggleRibbon();
})

document.querySelector('.js-hamburger-menu').addEventListener('click', () => {
  const dropdown = document.querySelector('.js-dropdown-menu');
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});


function switchCharacter(char) {
  if (!ANIMATING && !TRANSITIONING && CHARACTER !== char) {
    document.querySelector('.js-dropdown-menu').style.display = 'none';
    transition();

    setTimeout(() => {
      CHARACTER = char;
      char.renderImage();
      char.switchTheme();
      if (char.ribbon === false) {
        document.querySelector('.js-ribbon-overlay').src = '';
      } else if (char.ribbon === true) {
        document.querySelector('.js-ribbon-overlay').src = `graphics/${char.name}_ribbon.png`;
      }
    }, 1500)
    // setTimeout(() => {
    //   char.kissAnimation();
    // }, 2000)
  }
}

function transition() {
  TRANSITIONING = true;

  const gif = document.querySelector('.js-transition-gif');
  const container = document.querySelector('.transition');
  gif.offsetHeight;
  gif.src = `graphics/transition.gif?cb=${Date.now()}`;
  container.style.display = 'flex';

  setTimeout(() => {
    container.style.display = "none";
    gif.src = "";
    TRANSITIONING = false;
  }, 3330);
}
