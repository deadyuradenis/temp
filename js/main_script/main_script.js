/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 450:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('[data-header="component"]')) {
    var body = document.querySelector('.body');
    var header = document.querySelector('[data-header="component"]');
    var trigger = document.querySelector('[data-header="burger"]');
    var dropdown = document.querySelector('[data-header="dropdown"]');
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (dropdown.classList.contains('is-open') && !target.closest('[data-header="dropdown"]')) {
        trigger.classList.remove('is-active');
        dropdown.classList.remove('is-open');
      }
    });
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      trigger.classList.toggle('is-active');
      dropdown.classList.toggle('is-open');
    });
  }
});

/***/ }),

/***/ 676:
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

addEventListener('DOMContentLoaded', function () {
  var smoothLinks = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(smoothLinks),
      _step;

  try {
    var _loop = function _loop() {
      var smoothLink = _step.value;
      smoothLink.addEventListener('click', function (e) {
        var id = smoothLink.getAttribute('href');
        e.preventDefault();

        if (id != "#") {
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
});

/***/ }),

/***/ 94:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/components/header/scripts.js
var scripts = __webpack_require__(450);
// EXTERNAL MODULE: ./node_modules/imask/esm/index.js + 21 modules
var esm = __webpack_require__(647);
;// CONCATENATED MODULE: ./src/components/input/scripts.js

var regexpPhone = new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
var regexpMail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
var phoneElement = document.querySelectorAll('.jsPhoneMask');
var mailElement = document.querySelectorAll('.jsMailMask');
var phoneMaskSettings = {
  mask: [{
    mask: '8 (000) 000-00-00',
    startsWith: '8',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '7',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '9',
    lazy: true
  }],
  dispatch: function dispatch(appended, dynamicMasked) {
    var number = (dynamicMasked.value + appended).replace(/\D/g, '');
    return dynamicMasked.compiledMasks.find(function (m) {
      return number.indexOf(m.startsWith) === 0;
    }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
  }
};

if (phoneElement.length > 0) {
  for (var i = 0; i < phoneElement.length; i++) {
    var mask = (0,esm/* default */.ZP)(phoneElement[i], phoneMaskSettings);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var jsInput = document.querySelectorAll('.jsInput');

  var _loop = function _loop(index) {
    var input = jsInput[index];

    var filled = function filled() {
      if (input.value != '') {
        window.inputStatusAdd(input, 'filled');
      }
    };

    filled();

    input.onblur = function () {
      window.inputStatusRemove(input, 'focus');
      filled();
    };

    input.onfocus = function () {
      window.inputStatusAdd(input, 'focus');
      window.inputStatusRemove(input, 'error');
      window.inputStatusRemove(input, 'filled');
    };
  };

  for (var index = 0; index < jsInput.length; index++) {
    _loop(index);
  }
}); // let mailInputs = document.querySelectorAll('.jsMailMask');
// for (let index = 0; index < mailInputs.length; index++){
//     let input = mailInputs[index];
//     input.addEventListener('input', function(){
//         let result = window.InputCheckMask(input, 'mail');
//         console.log(result);
//     })
// }
// Input status
// Варианты:  'focus' ; 'error' ; 'fill' ; 'ok' ;
// window.inputStatusAdd(input, 'error')
// window.inputStatusRemove(input, 'error')

window.inputStatusAdd = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.add('is-' + status);
  } else {
    input.closest('.input').classList.add('is-' + status);
  }
};

window.inputStatusRemove = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.remove('is-' + status);
  } else {
    input.closest('.input').classList.remove('is-' + status);
  }
}; // Input masks
// Варианты:  'mail' ; 'phone'
// window.InputCheckMask(input, 'mail')


window.InputCheckMask = function (input, type) {
  if (type === 'mail') {
    // console.log('mail');
    return regexpMail.test(input.value);
  }

  if (type === 'phone') {
    // console.log('phone');
    return regexpPhone.test(input.value);
  }
};

window.runMask = function () {
  var phoneElement = document.querySelectorAll('.jsPhoneMask');
  var phoneMaskSettings = {
    mask: [{
      mask: '8 (000) 000-00-00',
      startsWith: '8',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '7',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '9',
      lazy: true
    }],
    dispatch: function dispatch(appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');
      return dynamicMasked.compiledMasks.find(function (m) {
        return number.indexOf(m.startsWith) === 0;
      }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
    }
  };

  if (phoneElement.length > 0) {
    for (var _i = 0; _i < phoneElement.length; _i++) {
      var _mask = (0,esm/* default */.ZP)(phoneElement[_i], phoneMaskSettings);
    }
  }
}; // window.runMask() перезвапуск маски
;// CONCATENATED MODULE: ./src/components/input-file/scripts.js
var inputFileComponent = function inputFileComponent(node) {
  var component = node;
  var input = component.querySelector('[data-input-file="input"]');
  var content = component.querySelector('[data-input-file="content"] span');

  input.onchange = function () {
    if (input.files.length != 0) {
      component.classList.add('is-upload');
      content.innerHTML = input.files[0].name;
    } else {
      component.classList.remove('is-upload');
      content.innerHTML = 'Прикрепить файл';
    }
  };
};

var inputFileInit = function inputFileInit() {
  var inputs = Array.from(document.querySelectorAll('[data-component="input-file"]'));
  inputs.forEach(function (item) {
    inputFileComponent(item);
  });
};

document.addEventListener('DOMContentLoaded', function () {
  inputFileInit();
});
/* harmony default export */ var input_file_scripts = (inputFileInit);
// EXTERNAL MODULE: ./src/components/link/scripts.js
var link_scripts = __webpack_require__(676);
;// CONCATENATED MODULE: ./src/blocks.js




// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./node_modules/select2/dist/js/select2.js
var select2 = __webpack_require__(686);
;// CONCATENATED MODULE: ./src/components/select/scripts.js



var initSelects = function initSelects() {
  jquery_default()('[data-component="select"]').each(function () {
    var thisSelect = jquery_default()(this);
    var placeholder = thisSelect.attr('placeholder');
    var select = jquery_default()(this).closest('.select');
    var theme;

    if (select.get(0).classList.contains('select--blue')) {
      theme = 'select--blue';
    }

    thisSelect.select2({
      width: '100%',
      placeholder: placeholder,
      allowClear: true,
      // dropdownParent: thisSelect.closest('.select'),
      dropdownCssClass: theme
    });
    jquery_default()(this).on("select2:open", function () {
      select.addClass('is-focus');
    });
    jquery_default()(this).on("select2:close", function () {
      select.removeClass('is-focus');
    });
    jquery_default()(this).on("select2:select", function () {
      select.addClass('is-filled');
    }); // $(this).on("select2:unselect", function () { 
    // });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  initSelects();
});
/* harmony default export */ var select_scripts = (initSelects);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var slicedToArray = __webpack_require__(324);
// EXTERNAL MODULE: ./node_modules/nouislider/dist/nouislider.js
var nouislider = __webpack_require__(211);
var nouislider_default = /*#__PURE__*/__webpack_require__.n(nouislider);
// EXTERNAL MODULE: ./node_modules/wnumb/wNumb.js
var wNumb = __webpack_require__(18);
var wNumb_default = /*#__PURE__*/__webpack_require__.n(wNumb);
// EXTERNAL MODULE: ./node_modules/gator/gator.js
var gator = __webpack_require__(140);
var gator_default = /*#__PURE__*/__webpack_require__.n(gator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(144);
;// CONCATENATED MODULE: ./src/components/range/classes/RangeService.js



var RangeService = /*#__PURE__*/function () {
  function RangeService() {
    (0,classCallCheck/* default */.Z)(this, RangeService);
  }

  (0,createClass/* default */.Z)(RangeService, null, [{
    key: "removeLetters",
    value: function removeLetters(value) {
      return value.replace(/\D/g, '');
    }
  }, {
    key: "updateSlider",
    value: function updateSlider(props) {
      var slider = props.slider,
          type = props.type,
          value = props.value;

      if (type === 'from') {
        slider.set([value, null]);
      }

      if (type === 'to') {
        slider.set([null, value]);
      }
    }
  }]);

  return RangeService;
}();

/* harmony default export */ var classes_RangeService = (RangeService);
;// CONCATENATED MODULE: ./src/components/range/classes/RangeRender.js




var RangeRender = /*#__PURE__*/function () {
  function RangeRender() {
    (0,classCallCheck/* default */.Z)(this, RangeRender);
  }

  (0,createClass/* default */.Z)(RangeRender, null, [{
    key: "inputsValues",
    value: function inputsValues(props) {
      var inputFromNode = props.inputFromNode,
          inputToNode = props.inputToNode,
          type = props.type,
          value = props.value;
      var inputNode = type === 'from' ? inputFromNode : inputToNode;
      inputNode.value = value;
      inputNode.dispatchEvent(new Event('change'));
      inputNode.size = inputNode.value.length;
    }
  }, {
    key: "inputsStates",
    value: function inputsStates(props) {
      var inputFromNode = props.inputFromNode,
          inputToNode = props.inputToNode,
          type = props.type,
          state = props.state;
      var inputNode = type === 'from' ? inputFromNode : inputToNode;
      var fieldNode = inputNode.parentElement;
      inputNode.size = inputNode.value.length;

      if (state === 'focused') {
        fieldNode.classList.add('_focused');
      }

      if (state === 'default') {
        fieldNode.classList.remove('_focused');
      }
    }
  }, {
    key: "maskedInput",
    value: function maskedInput(props) {
      var inputNode = props.inputNode,
          value = props.value;
      var normalizedValue = classes_RangeService.removeLetters(value);
      inputNode.value = normalizedValue;
      inputNode.size = inputNode.value > 0 ? inputNode.value.length : 1;
    }
  }]);

  return RangeRender;
}();

/* harmony default export */ var classes_RangeRender = (RangeRender);
;// CONCATENATED MODULE: ./src/components/range/range.js






var selectors = {
  component: '[data-component="range"]',
  slider: '[data-range="slider"]',
  input: '[data-range="input"]'
};

var rangeComponent = function rangeComponent(node) {
  var sliderNode = node.querySelector(selectors.slider);

  var _Array$from = Array.from(node.querySelectorAll(selectors.input)),
      _Array$from2 = (0,slicedToArray/* default */.Z)(_Array$from, 2),
      inputFromNode = _Array$from2[0],
      inputToNode = _Array$from2[1];

  var sliderOptions = node.dataset.options ? JSON.parse(node.dataset.options) : {};
  var valueSpan = node.querySelector('[data-range="value"]');
  var start = sliderOptions.start,
      min = sliderOptions.min,
      max = sliderOptions.max,
      step = sliderOptions.step,
      suffix = sliderOptions.suffix;
  var normalizedConnectProp = start.length > 1 ? true : 'lower';
  var slider = nouislider_default().create(sliderNode, {
    start: start,
    range: {
      min: min,
      max: max
    },
    connect: normalizedConnectProp,
    step: step,
    format: wNumb_default()({
      decimals: 0,
      thousand: ' ',
      suffix: suffix
    })
  });
  gator_default()(node).on('input', selectors.input, function (_ref) {
    var target = _ref.target;
    var type = target.dataset.type;
    classes_RangeRender.maskedInput({
      inputNode: target,
      value: target.value
    });
    classes_RangeService.updateSlider({
      slider: slider,
      type: type,
      value: +target.value
    });
  });
  slider.on('update', function (values, handle) {
    var normalizedHandleType = handle === 0 ? 'from' : 'to';
    var value = values[handle];
    valueSpan ? valueSpan.innerHTML = value : '';
    classes_RangeRender.inputsValues({
      type: normalizedHandleType,
      value: value,
      inputFromNode: inputFromNode,
      inputToNode: inputToNode
    });
  });
  slider.on('start', function (values, handle) {
    var normalizedHandleType = handle === 0 ? 'from' : 'to';
    classes_RangeRender.inputsStates({
      type: normalizedHandleType,
      state: 'focused',
      inputFromNode: inputFromNode,
      inputToNode: inputToNode
    });
  });
  slider.on('end', function (values, handle) {
    var normalizedHandleType = handle === 0 ? 'from' : 'to';
    classes_RangeRender.inputsStates({
      type: normalizedHandleType,
      state: 'default',
      inputFromNode: inputFromNode,
      inputToNode: inputToNode
    });
  });
};

/* harmony default export */ var range = (rangeComponent);
;// CONCATENATED MODULE: ./src/components/range/scripts.js


var initRanges = function initRanges() {
  var nodes = Array.from(document.querySelectorAll('[data-component="range"]'));
  nodes.forEach(range);
};

document.addEventListener('DOMContentLoaded', function () {
  initRanges();
});
/* harmony default export */ var range_scripts = (initRanges);
;// CONCATENATED MODULE: ./src/globals.js





var initGlobals = function initGlobals(namespace) {
  __webpack_require__.g[namespace] = {
    $: (jquery_default()),
    inputFile: input_file_scripts,
    select: select_scripts,
    range: range_scripts
  };
};

/* harmony default export */ var globals = (initGlobals);
;// CONCATENATED MODULE: ./src/script.js


document.addEventListener('DOMContentLoaded', function () {
  globals('current');
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	!function() {
/******/ 		__webpack_require__.j = 940;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			940: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmarkup_starter_kit"] = self["webpackChunkmarkup_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(94); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main_script.js.map