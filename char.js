class Jellycat {
  constructor(name, frames, bgColor, altColor, textColor) {
    this.heartBar = 'EMPTY';
    this.ribbon = false;
    this.name = name;
    this.frames = frames;
    this.bgColor = bgColor;
    this.altColor = altColor;
    this.textColor = textColor;
  }

  kissAnimation() {
    // this.increaseHeart();
    ANIMATING = true;
    let i = 1;

    const myInterval = setInterval(() => {    
      if (i > this.frames) {
        document.querySelector('.js-jellycat-img').src = `graphics/${this.name}.jpeg`
        clearInterval(myInterval);
        ANIMATING = false;
        return;
      }
      document.querySelector('.js-jellycat-img').src = `graphics/kiss/${this.name}_kiss_${i}.jpeg`
      i += 1;
    }, 140);
  }

  toggleRibbon() {
    if (this.ribbon === false) {
      document.querySelector('.js-ribbon-overlay').src = `graphics/${this.name}_ribbon.png`;
      this.increaseHeart();
      this.ribbon = true;
      if (!ANIMATING) {
        this.kissAnimation();
      }
    } else {
      document.querySelector('.js-ribbon-overlay').src = '';
      this.ribbon = false;
    }
  }

  renderImage() {
    document.querySelector('.js-jellycat-img').src = `graphics/${this.name}.jpeg`;
    document.querySelector('.js-heart-bar').src = `graphics/heart/heart_bar_${this.heartBar}.jpeg`;
    document.querySelector('.js-jellycat-namecard').src = `graphics/${this.name}_namecard.png`;
  }

  increaseHeart() {
    const heartBarHTML = document.querySelector('.js-heart-bar');
    if (this.heartBar === 'EMPTY') {
      heartBarHTML.src = 'graphics/heart/heart_bar_1.jpeg'
      this.heartBar = 1;
    } else if (this.heartBar < 7 && this.heartBar >= 1) {
      this.heartBar += 1;
      heartBarHTML.src = `graphics/heart/heart_bar_${this.heartBar}.jpeg`;
    } else if (this.heartBar === 7) {
      let i = 1;

      const myInterval = setInterval(() => {
        if (i > 7) {
          heartBarHTML.src = 'graphics/heart/heart_bar_FULL.jpeg';
          clearInterval(myInterval);
          return;
        }
        heartBarHTML.src = `graphics/heart/heart_animation_${i}.jpeg`;
        i += 1;
      }, 100);

      this.heartBar = 'FULL';
    }
  }

  switchTheme() {
    document.documentElement.style.setProperty('--bg-color', this.bgColor);
    document.documentElement.style.setProperty('--alt-color', this.altColor);
    document.documentElement.style.setProperty('--text-color', this.textColor);
  }
}

const jelly = new Jellycat('jelly', 8, 'lavenderblush', 'pink', 'rgb(60, 60, 60)');
const butter = new Jellycat('butter', 13, 'white', 'rgb(255, 250, 220)', '#ff5961');



// rgb(140, 98, 57)
// 'rgb(230, 88, 88)'
// 'rgba(255, 250, 224, 1)'
//#ff5961 '#ff656d'