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
    var NewBullet = /** @class */ (function (_super) {
        __extends(NewBullet, _super);
        // Constructor
        function NewBullet(assetManager, shooter) {
            var _this = _super.call(this, assetManager, "bullet") || this;
            // Private Instance Variables
            _this.updateRate = 20;
            _this.angle = 0;
            _this.xCartesianActual = 0; // register the actual x vector o the line in cartesian plan
            _this.yCartesianActual = 0; // register the actual x vector o the line in cartesian plan
            // Public Properties
            _this.isFired = false;
            //Difining the object on the screen
            _this.x = 1;
            _this.y = 1;
            _this.isColliding = false;
            _this.visible = false;
            _this.shooter = shooter;
            return _this;
        }
        // Public Methods
        NewBullet.prototype.fire = function (x, y, angle) {
            //Defining the object position on screen
            this.x = x;
            this.y = y;
            this.setAngle(angle);
            this.xCartesianActual = x;
            this.yCartesianActual = y;
            this.isColliding = false;
            this.visible = true;
            this.isFired = true;
        };
        NewBullet.prototype.setAngle = function (angle) {
            this.angle = this.absoluteAngle(angle);
        };
        NewBullet.prototype.updateCache = function () {
        };
        NewBullet.prototype.Move = function () {
        };
        NewBullet.prototype.bulletMovement = function (tank) {
            if (this.isFired) {
                this.x = this.nextCartesianX(); //- this.getBounds().width * 0.5;
                this.y = this.nextCartesianY(); //- this.getBounds().height * 0.5;           
                this.CheckBounds();
                // Checks all the objects registered for collision check 
                // objects.Game.objectsMap.forEach(obj=>{
                //     console.log("Looping Obj : "+ obj.name )
                // });
                var objectDetected = void 0;
                for (var _i = 0, _a = objects.Game.objectsMap; _i < _a.length; _i++) {
                    objectDetected = _a[_i];
                    console.log("Looping Obj : " + objectDetected.name + "  // Obj. cheking : " + this.name + " //  Owner : " + tank.name);
                    // if(objectDetected.name != "bullet") managers.Collision.Check(objectDetected, this, tank);
                    if (objectDetected.name != tank.name && objectDetected.name.toUpperCase() != "POWERUP" && objectDetected.visible == true) {
                        managers.Collision.Check(objectDetected, this, tank);
                        if (this.isColliding && objectDetected.name != this.shooter) {
                            this.destroyBullet();
                            if (objectDetected.name.toLocaleUpperCase() == "BARRIER")
                                objectDetected.Update();
                        }
                    }
                }
            }
        };
        // converts to Radians (the math functions cos() and sin() need an radian angle)
        NewBullet.prototype.radians = function (_angle) {
            var m = this.angle / 180 * Math.PI;
            return this.angle / 180 * Math.PI;
        };
        // Converts angles with high values (above 360) 
        // to the range between 0 and 360
        NewBullet.prototype.absoluteAngle = function (_angle) {
            return _angle % 360; // Checks the final angle  
        };
        // Checks which quadrant in a circle the referred angle belongs to
        // counter-clockwise
        // private quadrant(_angle:number): number{
        //     let absolute : number = this.angle;
        //     if(this.angle >270) return 4;
        //     if(this.angle >180) return 3;
        //     if(this.angle >90) return 2;
        //     return 1;
        // }
        // Based on the new x-axis value y-axis is recalculated
        NewBullet.prototype.nextCartesianY = function () {
            this.nextCartesianX();
            this.yCartesianActual -= this.updateRate * Math.sin(this.radians(this.angle));
            return this.yCartesianActual;
        };
        NewBullet.prototype.nextCartesianX = function () {
            this.xCartesianActual += this.updateRate * Math.cos(this.radians(this.angle));
            return this.xCartesianActual;
        };
        NewBullet.prototype.NoColision = function () {
            return !(this.xCartesianActual + this.getBounds().width > this.canvasWidth + this.canvasLeft ||
                this.xCartesianActual + this.getBounds().width < this.canvasLeft ||
                this.yCartesianActual + this.getBounds().height > this.canvasTop + this.canvasHeight ||
                this.yCartesianActual + this.getBounds().height < this.canvasTop);
        };
        NewBullet.prototype.CheckBounds = function () {
            // right boundary
            if (this.x >= 1500 - this.halfWidth) {
                this.destroyBullet();
                this.x = 1500 - this.halfWidth;
            }
            // left boundary
            if (this.x <= this.halfWidth) {
                this.destroyBullet();
                this.x = this.halfWidth;
            }
            // bottom boundary
            if (this.y >= 800 - this.halfHeight) {
                this.destroyBullet();
                this.y = 800 - this.halfHeight;
            }
            // top boundary
            if (this.y <= this.halfHeight) {
                this.destroyBullet();
                this.y = this.halfHeight;
            }
        };
        NewBullet.prototype.destroyBullet = function () {
            this.isFired = false;
            this.isColliding = false;
            this.visible = false;
            this.x = -100;
            this.y = -100;
        };
        return NewBullet;
    }(objects.GameObject));
    objects.NewBullet = NewBullet;
})(objects || (objects = {}));
//# sourceMappingURL=newbullet.js.map