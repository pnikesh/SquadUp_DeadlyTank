var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Transition = /** @class */ (function (_super) {
        __extends(Transition, _super);
        // private instance variables
        // public properties
        // Constructor
        function Transition(assetManager) {
            var _this = _super.call(this, assetManager, "transition") || this;
            _this.scaleX = 0;
            _this.scaleY = 0;
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Transition.prototype._reset = function () {
        };
        // move the object to some new location
        Transition.prototype._move = function () {
        };
        // check to see if some boundary has been passed
        Transition.prototype._checkBounds = function () {
        };
        // public methods
        // Initializes variables and creates new objects
        Transition.prototype.Start = function () {
            var i = 0;
            for (i = 0; i <= 100; i++) {
                this.scaleX = i;
                this.scaleY = i;
                var k = 0;
                for (k = 0; k <= 10000; k++) {
                }
            }
        };
        // updates the game object every frame
        Transition.prototype.Update = function () {
        };
        return Transition;
    }(objects.GameObject));
    objects.Transition = Transition;
})(objects || (objects = {}));
//# sourceMappingURL=transition.js.map