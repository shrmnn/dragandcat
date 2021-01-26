const grid = document.querySelector('.grid');
const hoop = document.querySelector('.hoop');
const spawner = document.querySelector('.spawner');

let cat;
let currentField;

function dragStart() {
  this.classList.add('hold');
  cat = this;
}

function dragEnd(event) {
  this.classList.remove('hold');
  cat = null;

  forgetCatPosition(event);

  if (currentField === hoop) {
    rememberCatPosition(event);
  }
  if (currentField !== grid && currentField !== spawner && currentField !== hoop) {
    event.target.parentNode.removeChild(event.target);
  }

  currentField = null;
}

function dragOver(e) {
  e.preventDefault();

  const active = document.querySelector('.hold');

  const isMoveable = active && !currentField;

  if (!isMoveable) return;
}

function dragEnter(e) {
  this.classList.add('hovered');

  currentField = e.target;
}

function dragLeave(e) {
  this.classList.remove('hovered');
}

function dragDrop(e) {
  this.classList.remove('hovered');
  e.target.append(cat);

  if (!spawner.childElementCount) {
    createNewKitten(cat);
  }
}

function forgetCatPosition(cat) {
  cat.target.classList.remove('absolute');

  cat.target.style.left = '0';
  cat.target.style.top = '0';
}

function rememberCatPosition(cat) {
  cat.target.classList.add('absolute');

  if (cat.offsetX < 0 || cat.offsetY < 0) {
    cat.target.parentNode.removeChild(cat.target);
  }

  cat.target.style.left = `${cat.offsetX - 50}px`;
  cat.target.style.top = `${cat.offsetY - 50}px`;
}

function createNewKitten() {
  const newKitten = document.createElement('div');
  newKitten.className = 'cat';
  newKitten.draggable = true;
  newKitten.style.outlineColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  allowElementToBeDraggable(newKitten);

  spawner.append(newKitten);
}

function allowElementToBeDraggable(element) {
  element.addEventListener('dragstart', dragStart);
  element.addEventListener('dragend', dragEnd);
}

function allowElementsToBeDraggable(elements) {
  elements.forEach(el => {
    el.addEventListener('dragstart', dragStart);
    el.addEventListener('dragend', dragEnd);
  });
}

function allowFieldsToBeDropAvailable(field) {
  field.addEventListener('dragover', dragOver);
  field.addEventListener('dragenter', dragEnter);
  field.addEventListener('dragleave', dragLeave);
  field.addEventListener('drop', dragDrop);
}

function main() {
  createNewKitten();
  allowFieldsToBeDropAvailable(grid);
  allowFieldsToBeDropAvailable(hoop);
}

main();
window.currentField = currentField;
