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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aws-access.json":
/*!*****************************!*\
  !*** ./src/aws-access.json ***!
  \*****************************/
/*! exports provided: accessKeyId, secretAccessKey, region, sslEnabled, default */
/***/ (function(module) {

module.exports = {"accessKeyId":"AKIAJU2Y3OXFL6CMEECQ","secretAccessKey":"RldiTzBaRSCV6sYC8yvSNQnIp16sHNN0yA0m4gYxQ","region":"us-east-2","sslEnabled":true};

/***/ }),

/***/ "./src/faker.js":
/*!**********************!*\
  !*** ./src/faker.js ***!
  \**********************/
/*! exports provided: getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
const users = {
  mathew: {
    id: 1,
    name: "Mathew",
    role: "admin"
  },
  george: {
    id: 2,
    name: "George",
    role: "editor"
  },
  johnny: {
    id: 3,
    name: "Johnny",
    role: "customer"
  }
}

const getUser = (req) => {
  const auth = req.get("Authorization")

  return users[auth] === undefined ? null : users[auth]
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-middleware */ "graphql-middleware");
/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var node_uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-uuid */ "node-uuid");
/* harmony import */ var node_uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_uuid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers */ "./src/resolvers.js");
/* harmony import */ var _faker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faker */ "./src/faker.js");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schema.graphql */ "./src/schema.graphql");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_schema_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _aws_access_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aws-access.json */ "./src/aws-access.json");
var _aws_access_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./aws-access.json */ "./src/aws-access.json", 1);
















const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_5___default.a.S3(_aws_access_json__WEBPACK_IMPORTED_MODULE_11__);
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const Server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_4__["ApolloServer"]({
  schema: Object(graphql_middleware__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(Object(graphql_tools__WEBPACK_IMPORTED_MODULE_3__["makeExecutableSchema"])({ typeDefs: (_schema_graphql__WEBPACK_IMPORTED_MODULE_10___default()), resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_8__["default"] })),
  context: ({ req }) => ({
    ...req,
    user: Object(_faker__WEBPACK_IMPORTED_MODULE_9__["getUser"])(req)
  })
});

Server.applyMiddleware({ app });

app.get(
  "/image",
  Object(_utils__WEBPACK_IMPORTED_MODULE_7__["asyncMiddleware"])(async (req, res, next) => {
    const params = { Key: "rg_23394849.jpg", Bucket: "photos-uploader" };

    const url = await Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getSignedUrlPromise"])(s3, "getObject", params);

    console.log(`Image's url is ${url}`);

    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url);

    await Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseStream"])(response, res);
  })
);

const options = { port: 4000 };

app.listen(options, () => {
  console.log(
    `🚀 Graphql ready at http://localhost:4000${Server.graphqlPath}
🚀 Server ready at http://localhost:4000/image`
  );
});


/***/ }),

/***/ "./src/resolvers.js":
/*!**************************!*\
  !*** ./src/resolvers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const resolvers = {
  Query: {
    frontPage: () => [
      { name: "orange", count: 10 },
      { name: "apple", count: 1 }
    ],
    fruits: () => [
      { name: "lemon", count: 2 }
    ]
  }
};

/* harmony default export */ __webpack_exports__["default"] = (resolvers);


/***/ }),

/***/ "./src/schema.graphql":
/*!****************************!*\
  !*** ./src/schema.graphql ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = `type Fruit {
  name: String!
  count: Int!
}

type Customer {
  id: ID!
  basket: [Fruit!]!
}

type Query {
  frontPage: [Fruit!]!
  fruits: [Fruit!]!
  customers: [Customer!]!
}

type Mutation {
  addFruitToBasket: Boolean!
}
`

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getSignedUrlPromise, getObject, parseStream, asyncMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedUrlPromise", function() { return getSignedUrlPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObject", function() { return getObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStream", function() { return parseStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncMiddleware", function() { return asyncMiddleware; });
const getSignedUrlPromise = (s3, operation, params) =>
  new Promise((resolve, reject) => {
    s3.getSignedUrl(operation, params, (err, url) => {
      err ? reject(err) : resolve(url);
    });
  })


const getObject = (s3, params) =>
  new Promise((resolve, reject) => {
    s3.getObject(params, (err, url) => {
      err ? reject(err) : resolve(url);
    });
  })

const parseStream = (res, dest) => new Promise((resolve, reject) => {
    if(res.status !== 200)
        throw new Error('Could not retrieve AWS response')

    res.body.pipe(dest);
    res.body.on('error', err => {
        reject(err);
    });
    dest.on('finish', () => {
        resolve();
    });
    dest.on('error', err => {
        reject(err);
    });
})

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  }

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-middleware":
/*!*************************************!*\
  !*** external "graphql-middleware" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-middleware");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "node-uuid":
/*!****************************!*\
  !*** external "node-uuid" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zha2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb2x2ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEuZ3JhcGhxbCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXdzLXNka1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRvb2xzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdXVpZFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztBQUUwQjtBQUNLO0FBQ1I7O0FBRXZCO0FBQ0E7O0FBT0M7QUFDRDtBQUNrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlLQUFnRCxxSUFBc0I7QUFDdEUsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCx3QkFBd0IsTUFBTTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjs7QUFFQSxrQ0FBa0MsSUFBSTs7QUFFdEM7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkREO0FBQUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7O0FDbkNBLGtEOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHVzZXJzID0ge1xuICBtYXRoZXc6IHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIk1hdGhld1wiLFxuICAgIHJvbGU6IFwiYWRtaW5cIlxuICB9LFxuICBnZW9yZ2U6IHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkdlb3JnZVwiLFxuICAgIHJvbGU6IFwiZWRpdG9yXCJcbiAgfSxcbiAgam9obm55OiB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJKb2hubnlcIixcbiAgICByb2xlOiBcImN1c3RvbWVyXCJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChyZXEpID0+IHtcbiAgY29uc3QgYXV0aCA9IHJlcS5nZXQoXCJBdXRob3JpemF0aW9uXCIpXG5cbiAgcmV0dXJuIHVzZXJzW2F1dGhdID09PSB1bmRlZmluZWQgPyBudWxsIDogdXNlcnNbYXV0aF1cbn0iLCJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5cbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJncmFwaHFsLW1pZGRsZXdhcmVcIjtcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSBcImdyYXBocWwtdG9vbHNcIjtcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcblxuaW1wb3J0IEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuaW1wb3J0IHV1aWQgZnJvbSBcIm5vZGUtdXVpZFwiO1xuXG5pbXBvcnQge1xuICBnZXRTaWduZWRVcmxQcm9taXNlLFxuICBnZXRPYmplY3QsXG4gIHBhcnNlU3RyZWFtLFxuICBhc3luY01pZGRsZXdhcmVcbn0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCByZXNvbHZlcnMgZnJvbSBcIi4vcmVzb2x2ZXJzXCI7XG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4vZmFrZXJcIjtcbmltcG9ydCB0eXBlRGVmcyBmcm9tIFwiLi9zY2hlbWEuZ3JhcGhxbFwiO1xuaW1wb3J0IGF3c0FjY2VzcyBmcm9tIFwiLi9hd3MtYWNjZXNzLmpzb25cIjtcblxuY29uc3QgczMgPSBuZXcgQVdTLlMzKGF3c0FjY2Vzcyk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBTZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgc2NoZW1hOiBhcHBseU1pZGRsZXdhcmUobWFrZUV4ZWN1dGFibGVTY2hlbWEoeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH0pKSxcbiAgY29udGV4dDogKHsgcmVxIH0pID0+ICh7XG4gICAgLi4ucmVxLFxuICAgIHVzZXI6IGdldFVzZXIocmVxKVxuICB9KVxufSk7XG5cblNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSk7XG5cbmFwcC5nZXQoXG4gIFwiL2ltYWdlXCIsXG4gIGFzeW5jTWlkZGxld2FyZShhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7IEtleTogXCJyZ18yMzM5NDg0OS5qcGdcIiwgQnVja2V0OiBcInBob3Rvcy11cGxvYWRlclwiIH07XG5cbiAgICBjb25zdCB1cmwgPSBhd2FpdCBnZXRTaWduZWRVcmxQcm9taXNlKHMzLCBcImdldE9iamVjdFwiLCBwYXJhbXMpO1xuXG4gICAgY29uc29sZS5sb2coYEltYWdlJ3MgdXJsIGlzICR7dXJsfWApO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgYXdhaXQgcGFyc2VTdHJlYW0ocmVzcG9uc2UsIHJlcyk7XG4gIH0pXG4pO1xuXG5jb25zdCBvcHRpb25zID0geyBwb3J0OiA0MDAwIH07XG5cbmFwcC5saXN0ZW4ob3B0aW9ucywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICBg8J+agCBHcmFwaHFsIHJlYWR5IGF0IGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCR7U2VydmVyLmdyYXBocWxQYXRofVxu8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2ltYWdlYFxuICApO1xufSk7XG4iLCJjb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgZnJvbnRQYWdlOiAoKSA9PiBbXG4gICAgICB7IG5hbWU6IFwib3JhbmdlXCIsIGNvdW50OiAxMCB9LFxuICAgICAgeyBuYW1lOiBcImFwcGxlXCIsIGNvdW50OiAxIH1cbiAgICBdLFxuICAgIGZydWl0czogKCkgPT4gW1xuICAgICAgeyBuYW1lOiBcImxlbW9uXCIsIGNvdW50OiAyIH1cbiAgICBdXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVycztcbiIsIm1vZHVsZS5leHBvcnRzID0gYHR5cGUgRnJ1aXQge1xuICBuYW1lOiBTdHJpbmchXG4gIGNvdW50OiBJbnQhXG59XG5cbnR5cGUgQ3VzdG9tZXIge1xuICBpZDogSUQhXG4gIGJhc2tldDogW0ZydWl0IV0hXG59XG5cbnR5cGUgUXVlcnkge1xuICBmcm9udFBhZ2U6IFtGcnVpdCFdIVxuICBmcnVpdHM6IFtGcnVpdCFdIVxuICBjdXN0b21lcnM6IFtDdXN0b21lciFdIVxufVxuXG50eXBlIE11dGF0aW9uIHtcbiAgYWRkRnJ1aXRUb0Jhc2tldDogQm9vbGVhbiFcbn1cbmAiLCJleHBvcnQgY29uc3QgZ2V0U2lnbmVkVXJsUHJvbWlzZSA9IChzMywgb3BlcmF0aW9uLCBwYXJhbXMpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzMy5nZXRTaWduZWRVcmwob3BlcmF0aW9uLCBwYXJhbXMsIChlcnIsIHVybCkgPT4ge1xuICAgICAgZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKHVybCk7XG4gICAgfSk7XG4gIH0pXG5cblxuZXhwb3J0IGNvbnN0IGdldE9iamVjdCA9IChzMywgcGFyYW1zKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgczMuZ2V0T2JqZWN0KHBhcmFtcywgKGVyciwgdXJsKSA9PiB7XG4gICAgICBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUodXJsKTtcbiAgICB9KTtcbiAgfSlcblxuZXhwb3J0IGNvbnN0IHBhcnNlU3RyZWFtID0gKHJlcywgZGVzdCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmKHJlcy5zdGF0dXMgIT09IDIwMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcmV0cmlldmUgQVdTIHJlc3BvbnNlJylcblxuICAgIHJlcy5ib2R5LnBpcGUoZGVzdCk7XG4gICAgcmVzLmJvZHkub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgfSk7XG4gICAgZGVzdC5vbignZmluaXNoJywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgZGVzdC5vbignZXJyb3InLCBlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICB9KTtcbn0pXG5cbmV4cG9ydCBjb25zdCBhc3luY01pZGRsZXdhcmUgPSBmbiA9PlxuICAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBQcm9taXNlLnJlc29sdmUoZm4ocmVxLCByZXMsIG5leHQpKVxuICAgICAgLmNhdGNoKG5leHQpO1xuICB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLW1pZGRsZXdhcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9