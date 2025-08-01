const paths = [];

for (let i = 1; i <=7; i++) {
  paths.push(`graphics/heart/heart_animation_${i}.jpeg`);
}
for (let i = 1; i <=7; i++) {
  paths.push(`graphics/heart/heart_bar_${i}.jpeg`);
}
paths.push('graphics/heart/heart_bar_EMPTY.jpeg');
paths.push('graphics/heart/heart_bar_FULL.jpeg');
for (let i = 1; i <= 8; i++) {
  paths.push(`graphics/kiss/jelly_kiss_${i}.jpeg`);
}
for (let i = 1; i <= 13; i++) {
  paths.push(`graphics/kiss/butter_kiss_${i}.jpeg`);
}
paths.push('graphics/butter.jpeg');
paths.push('graphics/jelly.jpeg');
paths.push('graphics/butter_ribbon.png');
paths.push('graphics/jelly_ribbon.png');

paths.push('graphics/transition.gif');

preload();

function preload() {
  console.log('preloading');
  paths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
  console.log('preload complete!');
}

