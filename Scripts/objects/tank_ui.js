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
    var Tank_UI = /** @class */ (function (_super) {
        __extends(Tank_UI, _super);
        // Constructor
        function Tank_UI(assetManager, image_type, x, y) {
            var _this = _super.call(this, assetManager, image_type) || this;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        //Public Methods
        Tank_UI.prototype.Start = function () {
        };
        Tank_UI.prototype.Update = function () {
        };
        Tank_UI.prototype.decreaseUiHealth = function (damage) {
            if (damage === void 0) { damage = 0.1; }
            this.scaleX -= damage;
        };
        return Tank_UI;
    }(objects.GameObject));
    objects.Tank_UI = Tank_UI;
})(objects || (objects = {}));
//# sourceMappingURL=tank_ui.js.map