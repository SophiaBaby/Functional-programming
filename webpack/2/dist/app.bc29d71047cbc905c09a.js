webpackJsonp(["app"],{

/***/ "cilB":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("gJ8e");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("x6xJ")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/_css-loader@1.0.0@css-loader/index.js!./index.css", function() {
		var newContent = require("!!../node_modules/_css-loader@1.0.0@css-loader/index.js!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "gJ8e":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("YDzL")(false);
// imports


// module
exports.push([module.i, "div {\n  background: red;\n}", ""]);

// exports


/***/ }),

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("pgxq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__("cilB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_css__);
// 没有使用react 依然会被打包

const a = () => Promise.all/* import() */([__webpack_require__.e("vendor-async"), __webpack_require__.e("a")]).then(__webpack_require__.bind(null, "aQZI"))
const b = () => Promise.all/* import() */([__webpack_require__.e("vendor-async"), __webpack_require__.e("b")]).then(__webpack_require__.bind(null, "JIOT"))
// const c = () => import(/* webpackChunkName: "c" */ './c')


console.log('index2')
a().then((e) => {
  e.default()
})

b().then((e) => {
  e.default()
})

c().then((e) => {
  e.default()
})


/***/ })

},["lVK7"]);