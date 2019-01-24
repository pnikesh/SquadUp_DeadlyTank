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
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // constructors
        function GameObject(assetManager, imageString) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this._initialize();
            return _this;
        }
        // private methods
        GameObject.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.isColliding = false;
        };
        // public methods
        GameObject.prototype.Start = function () { };
        GameObject.prototype.Update = function () { };
        GameObject.prototype.Reset = function () { };
        GameObject.prototype.CheckBounds = function () { };
        GameObject.prototype.Move = function () { };
        GameObject.prototype.setHealth = function (value) {
            if (value === void 0) { value = -1; }
            this.health += value;
            this.healthStatusUpdate(this.fuel);
        };
        GameObject.prototype.setScore = function (value) {
            if (value === void 0) { value = 100; }
            this.score += value;
            this.scoreStatusUpdate(this.fuel);
        };
        GameObject.prototype.setFuel = function (value) {
            if (value === void 0) { value = 5; }
            this.fuel += value;
            if (this.fuel < 0)
                this.fuel = 0;
            if (this.fuel > 100000)
                this.fuel = 100000;
            this.fuelStatusUpdate(this.fuel);
        };
        ///////////////////////////////////////////////////
        // these methods implementation are for a 
        // child tank class can update the statusbars
        ///////////////////////////////////////////////////
        GameObject.prototype.fuelStatusUpdate = function (value) { };
        GameObject.prototype.healthStatusUpdate = function (value) { };
        GameObject.prototype.scoreStatusUpdate = function (value) { };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map