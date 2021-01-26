/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\r\n  color: whitesmoke;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\nbody {\r\n  background: rgb(17, 75, 206);\r\n  margin: auto;\r\n}\r\n\r\n.cat {\r\n  background-color: whitesmoke;\r\n  background-image: url('https://loremflickr.com/500/500/cat');\r\n  background-size: cover;\r\n  position: relative;\r\n  height: 100px;\r\n  width: 100px;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  outline: 5px mediumseagreen solid;\r\n  outline-offset: -5px;\r\n}\r\n\r\n.hold {\r\n  background-color: gainsboro;\r\n}\r\n\r\n.hovered {\r\n  background: #eeebeb;\r\n  border-style: dashed;\r\n}\r\n\r\n.center {\r\n  margin: auto;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.grid {\r\n  height: 300px;\r\n  width: 300px;\r\n\r\n  background-color: lightyellow;\r\n}\r\n\r\n.spawner {\r\n  align-content: center;\r\n  height: 300px;\r\n  width: 300px;\r\n\r\n  background-color: lightpink;\r\n}\r\n\r\n.spawner .cat {\r\n  height: 300px;\r\n  width: 300px;\r\n}\r\n\r\n.hoop {\r\n  height: 300px;\r\n  width: 300px;\r\n\r\n  background-color: lightskyblue;\r\n  position: relative;\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n}\r\n", ""]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/* harmony import */ var _public_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);


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

})();

/******/ })()
;