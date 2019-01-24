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
    var Barrier = /** @class */ (function (_super) {
        __extends(Barrier, _super);
        // Constructor
        // constructor(assetManager: createjs.LoadQueue, barrier_type:string, x:number , y:number, destructiblet: boolean=true) {
        function Barrier(assetManager, barrier_type, x, y, destructible) {
            if (destructible === void 0) { destructible = true; }
            var _this = _super.call(this, assetManager, barrier_type == config.Scene.PLAY1 ? "barrier" : barrier_type == config.Scene.PLAY2 ? "rock_barrier" : barrier_type == config.Scene.PLAY3 ? "metal_barrier" : "barrier") || this;
            _this.x = x;
            _this.y = y;
            _this.health = 3;
            _this.barrier_type = barrier_type;
            _this.name = "barrier";
            _this.destructible = destructible;
            if (!destructible && barrier_type == config.Scene.PLAY1) {
                _this.image = new createjs.Bitmap("./Assets/images/barriers/brick_big_undestructible.png").image;
            }
            else if (!destructible && barrier_type == config.Scene.PLAY2) {
                _this.image = new createjs.Bitmap("./Assets/images/barriers/rock_barrier_undestructible.png").image;
            }
            else if (!destructible && barrier_type == config.Scene.PLAY3) {
                _this.image = new createjs.Bitmap("./Assets/images/barriers/metal_barrier_undestructible.png").image;
            }
            return _this;
        }
        //Public Methods
        Barrier.prototype.Start = function () {
        };
        Barrier.prototype.Update = function () {
            var barrier_destroyed1;
            var barrier_destroyed2;
            switch (this.barrier_type) {
                case config.Scene.PLAY1:
                    barrier_destroyed1 = "./assets/images/barriers/brick_big_2.png";
                    barrier_destroyed2 = "./assets/images/barriers/brick_big_3.png";
                    break;
                case config.Scene.PLAY2:
                    barrier_destroyed1 = "./assets/images/barriers/rock_barrier_2.png";
                    barrier_destroyed2 = "./assets/images/barriers/rock_barrier_3.png";
                    break;
                case config.Scene.PLAY3:
                    barrier_destroyed1 = "./assets/images/barriers/metal_barrier_2.png";
                    barrier_destroyed2 = "./assets/images/barriers/metal_barrier_3.png";
                    break;
                default:
                    barrier_destroyed1 = "./assets/images/barriers/brick_big_2.png";
                    barrier_destroyed2 = "./assets/images/barriers/brick_big_3.png";
            }
            if (this.health == 2) {
                this.image = new createjs.Bitmap(barrier_destroyed1).image;
            }
            else if (this.health == 1) {
                this.image = new createjs.Bitmap(barrier_destroyed2).image;
            }
            else if (this.health <= 0) {
                this.x = -100;
                this.y = -100;
                this.visible = false;
            }
        };
        Barrier.prototype.setHealth = function (value) {
            if (value === void 0) { value = -1; }
            // if(this.destructible) this.health += value;
            if (this.destructible)
                _super.prototype.setHealth.call(this, value);
        };
        return Barrier;
    }(objects.GameObject));
    objects.Barrier = Barrier;
})(objects || (objects = {}));
//# sourceMappingURL=barrier.js.map