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
    var RockBarrier = /** @class */ (function (_super) {
        __extends(RockBarrier, _super);
        // Constructor
        function RockBarrier(assetManager, barrier_type, x, y, destructiblet) {
            if (destructiblet === void 0) { destructiblet = true; }
            var _this = _super.call(this, assetManager, barrier_type) || this;
            _this.x = x;
            _this.y = y;
            _this.health = 3;
            _this.barrier_type = barrier_type;
            _this.name = "barrier";
            _this.destructible = destructiblet;
            return _this;
        }
        //Public Methods
        RockBarrier.prototype.Start = function () {
        };
        RockBarrier.prototype.Update = function () {
            if (this.health == 2) {
                this.image = new createjs.Bitmap("./assets/images/barriers/rock_barrier_2.png").image;
            }
            else if (this.health == 1) {
                this.image = new createjs.Bitmap("./assets/images/barriers/rock_barrier_3.png").image;
            }
            else if (this.health <= 0) {
                this.x = -100;
                this.y = -100;
                this.visible = false;
            }
        };
        RockBarrier.prototype.setHealth = function (value) {
            if (value === void 0) { value = -1; }
            if (this.destructible)
                this.health += value;
        };
        return RockBarrier;
    }(objects.GameObject));
    objects.RockBarrier = RockBarrier;
})(objects || (objects = {}));
//# sourceMappingURL=rock_barrier.js.map