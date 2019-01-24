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
    var StatusBackground = /** @class */ (function (_super) {
        __extends(StatusBackground, _super);
        // Constructor
        function StatusBackground(assetManager, x, y, direction) {
            if (direction === void 0) { direction = "down"; }
            var _this = _super.call(this, assetManager, "status_background") || this;
            // Private Instance Variables
            _this.updateRate = 20;
            _this.angle = 0;
            _this.xCartesianActual = 0; // register the actual x vector o the line in cartesian plan
            _this.yCartesianActual = 0; // register the actual x vector o the line in cartesian plan
            // Public Properties
            _this.isFired = false;
            //Difining the object position on screen
            // this.x = x; 
            // this.y = y; 
            _this.statusHealth = new objects.StatusHealth(assetManager, _this.x, _this.y, _this.tank_direction);
            _this.statusFuel = new objects.StatusFuel(assetManager, _this.x, _this.y, _this.tank_direction);
            _this.positioning(x, y, direction);
            _this.tank_direction = direction;
            return _this;
        }
        // Public Methods
        StatusBackground.prototype.updateCache = function () {
        };
        StatusBackground.prototype.positioning = function (x, y, direction) {
            if (direction == "down") {
                this.x = x;
                this.y = y - 25;
            }
            else if (direction == "up") {
                this.x = x;
                this.y = y + 25;
            }
            else if (direction == "left") {
                this.x = x;
                this.y = y - 25;
            }
            else {
                this.x = x;
                this.y = y - 25;
            }
            this.statusHealth.positioning(this.x, this.y, direction);
            this.statusFuel.positioning(this.x, this.y, direction);
        };
        StatusBackground.prototype.move = function () {
        };
        StatusBackground.prototype.CheckBounds = function () {
        };
        return StatusBackground;
    }(objects.GameObject));
    objects.StatusBackground = StatusBackground;
})(objects || (objects = {}));
//# sourceMappingURL=statusbackground.js.map