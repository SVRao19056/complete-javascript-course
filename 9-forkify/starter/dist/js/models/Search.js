'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
    function Search(query) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Search);

        this.query = query;
    }

    _createClass(Search, [{
        key: 'GetResults',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var proxy, key, url, apiErr, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                //const proxy = 'http://crossorigin.me'
                                proxy = 'https://cors-anywhere.herokuapp.com';
                                key = '185642ca82ffb6918b7b29c4d3e68f46';
                                url = 'http://www.food2fork.com/api/search';
                                apiErr = void 0;
                                _context.prev = 4;

                                console.log(url + '/?key=' + key + '&q=' + this.query);
                                _context.next = 8;
                                return _axios2.default.get(proxy + '/' + url + '/?key=' + key + '&q=' + this.query);

                            case 8:
                                res = _context.sent;

                                console.log(res);
                                this.result = res.data.recipes || res.data;
                                console.log(result);
                                console.log(!result && !res.data.recipes);
                                if (!result && !res.data.recipes) {
                                    this.result = JSON.parse('{\n                "count": 1, \n                "recipes": [{\n                "publisher": "Allrecipes.com",\n                "social_rank": 99.81007979198002, \n                "f2f_url": "https://www.food2fork.com/recipes/view/29159", \n                "publisher_url": "http://allrecipes.com", \n                "title": "Slow-Cooker Chicken Tortilla Soup", \n                "source_url": "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",\n                "page":1}]\n                }');
                                }
                                console.log(this.result);

                                _context.next = 20;
                                break;

                            case 17:
                                _context.prev = 17;
                                _context.t0 = _context['catch'](4);

                                apiErr = _context.t0;

                            case 20:
                                console.log(' ' + (apiErr ? 'Error-' + apiErr : 'Sucess'));
                                //   return {
                                //     err: apiErr,  
                                //     result: result
                                //   } 

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[4, 17]]);
            }));

            function GetResults() {
                return _ref.apply(this, arguments);
            }

            return GetResults;
        }()
    }]);

    return Search;
}();

exports.default = Search;
//# sourceMappingURL=Search.js.map