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

  currentField = null;
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function dragEnter(event) {
  this.classList.add('hovered');

  currentField = this;
}

function dragLeave(event) {
  this.classList.remove('hovered');
}

function dragDrop(event) {
  event.stopPropagation();

  this.classList.remove('hovered');

  console.log('event', this, event, event.target, currentField);

  if (this !== spawner) {
    this.append(cat);
  } else if (this !== hoop && this !== grid) {
    console.log('removed!', this);
    cat.parentNode.removeChild(cat);
  }

  if (spawner.childElementCount <= 0) {
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
  allowFieldsToBeDropAvailable(spawner);
}

main();
window.currentField = currentField;
