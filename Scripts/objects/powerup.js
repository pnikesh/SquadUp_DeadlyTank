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
    var PowerUp = /** @class */ (function (_super) {
        __extends(PowerUp, _super);
        // Constructor
        function PowerUp(assetManager, imageName, powerupType) {
            if (imageName === void 0) { imageName = "powerupOil"; }
            if (powerupType === void 0) { powerupType = "powerupOil"; }
            var _this = _super.call(this, assetManager, imageName) || this;
            _this.x = -100;
            _this.y = -100;
            // this.limit_x = limit_x;
            // this.limit_y=limit_y;
            _this.limit_x = 1500;
            _this.limit_y = 800;
            _this.cycle = Math.round(Math.random() * 5400); // Defines how long each one is going to take to show up
            _this.visible = false;
            _this.counter = 0;
            _this.name = powerupType;
            _this.health = 7;
            _this.Start();
            return _this;
        }
        //Public Methods
        PowerUp.prototype.Start = function () {
        };
        PowerUp.prototype.Update = function () {
            this.counter++;
            //console.log("Cycle : " + this.cycle + "  // Counter : "+ this.counter);
            if (this.counter >= this.cycle) {
                this.cycle = Math.round(Math.random() * 5400); // Defines how long each one is going to take to show up
                this.setPosition();
                this.visible = true;
                this.counter = 0;
                createjs.Sound.play("new_powerup_snd");
            }
            if (this.isColliding) {
                createjs.Sound.play("powerup_snd");
                this.counter = 0;
                this.isColliding = false;
                this.visible = false;
                this.x = -100;
                this.y = -100;
            }
        };
        PowerUp.prototype.setPosition = function () {
            do {
                this.x = Math.round(Math.random() * this.limit_x);
                this.y = Math.round(Math.random() * this.limit_y);
                if (this.x - this.getBounds().width * 0.5 < 1 || this.x - this.getBounds().width * 0.5 > 1500 || // checks horizontal boundaries
                    this.y - this.getBounds().height * 0.5 < 1 || this.y - this.getBounds().height * 0.5 > 800) {
                    this.isColliding = true;
                }
                //Checks if the new position is already occupied
                var objectDetected = void 0;
                for (var _i = 0, _a = objects.Game.objectsMap; _i < _a.length; _i++) {
                    objectDetected = _a[_i];
                    if ((objectDetected.name.toUpperCase() == "BARRIER" || objectDetected.name.toUpperCase() == "POWERUP")
                        && objectDetected != this) {
                        managers.Collision.Check(objectDetected, this);
                        if (this.isColliding && objectDetected != this)
                            break;
                    }
                }
            } while (this.isColliding);
        };
        PowerUp.prototype.decreaseHealth = function (damage) {
            if (damage === void 0) { damage = 1; }
            this.health--;
            if (this.health <= 0)
                this.isColliding = true;
        };
        return PowerUp;
    }(objects.GameObject));
    objects.PowerUp = PowerUp;
})(objects || (objects = {}));
//# sourceMappingURL=powerup.js.map