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
    var Terrain = /** @class */ (function (_super) {
        __extends(Terrain, _super);
        // private instance variables
        // public properties
        // Constructor
        function Terrain(assetManager, terrain_type) {
            var _this = _super.call(this, assetManager, terrain_type) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Terrain.prototype._reset = function () {
        };
        // move the object to some new location
        Terrain.prototype._move = function () {
        };
        // check to see if some boundary has been passed
        Terrain.prototype._checkBounds = function () {
        };
        // public methods
        // Initializes variables and creates new objects
        Terrain.prototype.Start = function () {
        };
        // updates the game object every frame
        Terrain.prototype.Update = function () {
        };
        return Terrain;
    }(objects.GameObject));
    objects.Terrain = Terrain;
})(objects || (objects = {}));
//# sourceMappingURL=terrain.js.map