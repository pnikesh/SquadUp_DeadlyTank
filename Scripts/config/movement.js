var config;
(function (config) {
    var Movement = /** @class */ (function () {
        function Movement() {
            // Changeble Movement Keys
            this.UP = 38;
            this.DOWN = 40;
            this.LEFT = 37;
            this.RIGHT = 39;
            this.SHOOT = 32;
        }
        Movement.prototype.Set_UP_Key = function (up) {
            this.UP = up;
        };
        Movement.prototype.Set_DOWN_Key = function (down) {
            this.DOWN = down;
        };
        Movement.prototype.Set_LEFT_Key = function (left) {
            this.LEFT = left;
        };
        Movement.prototype.Set_RIGHT_Key = function (right) {
            this.RIGHT = right;
        };
        Movement.prototype.Set_FIRE_Key = function (shoot) {
            this.SHOOT = shoot;
        };
        Movement.prototype.set_AllKeys = function (up, down, left, right, shoot) {
            this.Set_UP_Key(up);
            this.Set_DOWN_Key(down);
            this.Set_LEFT_Key(left);
            this.Set_RIGHT_Key(right);
            this.Set_FIRE_Key(shoot);
        };
        // Not for changing
        Movement.PAUSE = 19;
        Movement.EXIT = 27; //(ESC) 
        return Movement;
    }());
    config.Movement = Movement;
})(config || (config = {}));
//# sourceMappingURL=movement.js.map