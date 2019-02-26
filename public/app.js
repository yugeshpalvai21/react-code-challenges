/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript_es6_features.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript_es6_features.js":
/*!****************************************!*\
  !*** ./src/javascript_es6_features.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Object Destructuring Syntax\nvar person = {\n  name: 'yugesh',\n  branch: 'CSE',\n  location: {\n    country: 'IND',\n    temp: '35'\n  }\n};\nvar name = person.name,\n    branch = person.branch; //Renaming and Assigning Default Value\n\nvar _person$location = person.location,\n    country = _person$location.country,\n    _person$location$temp = _person$location.temp,\n    temparature = _person$location$temp === void 0 ? 25 : _person$location$temp;\nconsole.log(\"Hello Mr.\".concat(name, \", You'r Branch Is \").concat(branch));\nconsole.log(\"It's \".concat(temparature, \" degrees in \").concat(country)); // Array Destructuring Syntax\n\nvar item = ['Coffee(hot)', '$2.00', '$2.50', '$3.00']; // Assigning Default Value for undefined index\n\nvar itemName = item[0],\n    mediumPrice = item[2],\n    _item$ = item[4],\n    location = _item$ === void 0 ? \"USA\" : _item$;\nconsole.log(\"A Medium \".concat(itemName, \" costs \").concat(mediumPrice, \" In \").concat(location)); // Array Spread Operator\n\nvar names = ['Yugesh', 'Palvai', 'John'];\nconsole.log(names);\nvar new_names = [].concat(names, ['Doe']);\nconsole.log(new_names);\nvar another_set = ['Mike'].concat(_toConsumableArray(new_names), ['Max']);\nconsole.log(another_set); // Object Spread Operator\n\nvar user = {\n  name: 'yugesh',\n  branch: 'cse'\n};\nconsole.log(person);\n\nvar details = _objectSpread({}, user, {\n  location: 'IND'\n});\n\nconsole.log(details);\n\nvar modified_details = _objectSpread({}, details, {\n  name: 'Palvai',\n  location: 'Ind'\n});\n\nconsole.log(modified_details);\n\n//# sourceURL=webpack:///./src/javascript_es6_features.js?");

/***/ })

/******/ });