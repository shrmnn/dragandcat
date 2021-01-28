const grid = document.querySelector('.element-grid');
const hoop = document.querySelector('.element-hoop');
const spawner = document.querySelector('.element-spawner');

let cat;
let currentField;

const CENTEROFCAT = 50;

const pointerDown = event => {
  event.preventDefault();

  cat = event.target;
  cat.classList.add('_absolute');
  cat.classList.add('_hold');

  moveCat(cat, event);

  document.addEventListener('pointermove', pointerMove);

  cat.addEventListener('pointerup', pointerUp);
  cat.ondragstart = () => false;
};

const pointerMove = event => {
  event.preventDefault();

  if (cat.parentNode === hoop) {
    moveCat(cat, event, {x: hoop.offsetLeft, y: hoop.offsetTop});
  } else {
    moveCat(cat, event);
  }
};

const pointerUp = event => {
  event.preventDefault();

  document.removeEventListener('pointermove', pointerMove);
  cat.removeEventListener('pointerup', pointerUp);
  cat.classList.remove('_hold');

  [currentField] = document
    .elementsFromPoint(event.clientX, event.clientY)
    .filter(element => [grid, hoop].includes(element));

  if (currentField === grid) {
    forgetCatPosition(cat);
    saveCat(cat);
  }

  if (currentField === hoop) {
    rememberCatPosition(cat, event);
    saveCat(cat);
  }

  if (!currentField || currentField === 'undefined') {
    shelterCat(cat);
  }

  return;
};

function forgetCatPosition(cat) {
  cat.classList.remove('_absolute');

  cat.style.left = '0';
  cat.style.top = '0';
}

function saveCat(cat) {
  currentField.append(cat);

  if (spawner.childElementCount <= 0) {
    createNewKitten();
  }
}

function shelterCat(cat) {
  cat.parentNode.removeChild(cat);

  if (spawner.childElementCount <= 0) {
    createNewKitten();
  }
}

function rememberCatPosition(cat, event) {
  if (cat.offsetX < 0 || cat.offsetY < 0) {
    cat.parentNode.removeChild(cat);
  }

  moveCat(cat, event, {
    x: currentField.offsetLeft,
    y: currentField.offsetTop,
  });
}

function moveCat(
  cat,
  event,
  pos = {
    x: 0,
    y: 0,
  }
) {
  cat.style.left = `${event.pageX - pos.x - CENTEROFCAT}px`;
  cat.style.top = `${event.pageY - pos.y - CENTEROFCAT}px`;
}

function createNewKitten() {
  const newKitten = document.createElement('div');
  newKitten.className = 'cat';
  newKitten.style.outlineColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  fetchNewCat(newKitten);

  allowElementToBeDraggable(newKitten);

  spawner.append(newKitten);
}

const fetchNewCat = newKitten => {
  fetch('https://loremflickr.com/500/500/cat')
    .then(result => (newKitten.style.backgroundImage = `url(${result.url})`))
    .catch(error => console.error(error));
};

function allowElementToBeDraggable(element) {
  element.addEventListener('pointerdown', pointerDown);
}

function main() {
  createNewKitten();
}

main();