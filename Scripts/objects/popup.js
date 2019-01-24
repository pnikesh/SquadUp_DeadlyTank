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
    var PopUp = /** @class */ (function (_super) {
        __extends(PopUp, _super);
        // Constructor
        function PopUp(assetManager, imageName, popUpType) {
            if (imageName === void 0) { imageName = "popUpOil"; }
            if (popUpType === void 0) { popUpType = "popUpOil"; }
            var _this = _super.call(this, assetManager, imageName) || this;
            _this.x = -100;
            _this.y = -100;
            // this.limit_x = limit_x;
            // this.limit_y=limit_y;
            _this.limit_x = 1500;
            _this.limit_y = 800;
            _this.cycle = Math.round(Math.random() * 2700); // Defines how long each one is going to take to show up
            _this.visible = false;
            _this.counter = 0;
            _this.name = popUpType;
            _this.health = 7;
            var d = new Date();
            _this.start = d.getTime();
            _this.timeLapse = 60000 * Math.random();
            _this.Start();
            return _this;
        }
        //Public Methods
        PopUp.prototype.Start = function () {
        };
        PopUp.prototype.Update = function () {
            var d = new Date();
            var end = d.getTime();
            console.log(end - this.start);
            this.counter++;
            //console.log("Cycle : " + this.cycle + "  // Counter : "+ this.counter);
            // if(this.counter >= this.cycle){
            if (this.start < end && end - this.start >= this.timeLapse) {
                // this.cycle = Math.round(Math.random()*5400); // Defines how long each one is going to take to show up
                this.setPosition();
                this.visible = true;
                this.counter = 0;
                createjs.Sound.play("new_pop_up_snd");
                var d = new Date();
                this.start = d.getTime();
                this.timeLapse = 60000 * Math.random();
            }
            if (this.isColliding) {
                createjs.Sound.play("pop_up_snd");
                this.counter = 0;
                // this.cycle = Math.round(Math.random()*2700); // re-efines how long each one is going to take to show up
                this.start = end + 20000 * Math.round(Math.random()); // re-efines how long each one is going to take to show up
                this.isColliding = false;
                this.visible = false;
                this.x = -100;
                this.y = -100;
            }
        };
        PopUp.prototype.setPosition = function () {
            do {
                this.x = Math.round(Math.random() * this.limit_x);
                this.y = Math.round(Math.random() * this.limit_y);
                if (this.x - this.getBounds().width * 0.5 < 1 || this.x - this.getBounds().width * 0.5 > 1500 || this.x < 15 || this.x > 1485 || // checks horizontal boundaries
                    this.y - this.getBounds().height * 0.5 < 1 || this.y - this.getBounds().height * 0.5 > 800 || this.y < 5 || this.y > 780) {
                    this.isColliding = true;
                }
                //Checks if the new position is already occupied
                var objectDetected = void 0;
                for (var _i = 0, _a = objects.Game.objectsMap; _i < _a.length; _i++) {
                    objectDetected = _a[_i];
                    // if((objectDetected.name.toUpperCase() =="BARRIER" || objectDetected.name.toUpperCase() ==this.name) 
                    //     && objectDetected != this)
                    if (objectDetected != this) {
                        managers.Collision.Check(objectDetected, this);
                        // if(this.isColliding && objectDetected != this) break;
                        if (this.isColliding)
                            break;
                    }
                }
            } while (this.isColliding);
        };
        PopUp.prototype.setHealth = function (value) {
            if (value === void 0) { value = -1; }
            this.health += value;
            if (this.health <= 0) {
                this.isColliding = true;
                this.x = -100;
                this.y = -100;
            }
        };
        return PopUp;
    }(objects.GameObject));
    objects.PopUp = PopUp;
})(objects || (objects = {}));
//# sourceMappingURL=popup.js.map