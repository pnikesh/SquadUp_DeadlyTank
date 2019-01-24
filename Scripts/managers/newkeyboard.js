var managers;
(function (managers) {
    var NewKeyboard = /** @class */ (function () {
        // constructors
        function NewKeyboard(up, down, left, right, fire) {
            if (up === void 0) { up = config.KeyCode.Up_Arrow; }
            if (down === void 0) { down = config.KeyCode.Down_Arrow; }
            if (left === void 0) { left = config.KeyCode.Left_Arrow; }
            if (right === void 0) { right = config.KeyCode.Right_Arrow; }
            if (fire === void 0) { fire = config.KeyCode.Space_Bar; }
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
            this.controlSet = new config.Movement();
            this.controlSet.set_AllKeys(up, down, left, right, fire);
        }
        // private methods
        // public methods
        NewKeyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case this.controlSet.UP:
                    this.moveForward = true;
                    break;
                case this.controlSet.LEFT:
                    this.moveLeft = true;
                    break;
                case this.controlSet.DOWN:
                    this.moveBackward = true;
                    break;
                case this.controlSet.RIGHT:
                    this.moveRight = true;
                    break;
                case this.controlSet.SHOOT:
                    this.shoot = true;
                    break;
                case config.KeyCode.Pause_Break:
                    this.paused = true;
                    break;
                case config.KeyCode.Escape:
                    this.escape = true;
                    break;
                case config.KeyCode.Enter:
                    this.enter = true;
                    break;
                case config.KeyCode.Home:
                    this.home = true;
                    break;
                case config.KeyCode.Page_Up:
                    this.pgUp = true;
                    break;
            }
            this.anyKey = true;
        };
        NewKeyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case this.controlSet.UP:
                    this.moveForward = false;
                    break;
                case this.controlSet.LEFT:
                    this.moveLeft = false;
                    break;
                case this.controlSet.DOWN:
                    this.moveBackward = false;
                    break;
                case this.controlSet.RIGHT:
                    this.moveRight = false;
                    break;
                case this.controlSet.SHOOT:
                    this.shoot = false;
                    break;
                case config.KeyCode.Pause_Break:
                    this.paused = false;
                    break;
                case config.KeyCode.Escape:
                    this.escape = false;
                    break;
                case config.KeyCode.Enter:
                    this.enter = false;
                    break;
                case config.KeyCode.Home:
                    this.home = false;
                    break;
                case config.KeyCode.Page_Up:
                    this.pgUp = false;
                    break;
            }
            this.anyKey = false;
        };
        return NewKeyboard;
    }());
    managers.NewKeyboard = NewKeyboard;
})(managers || (managers = {}));
//# sourceMappingURL=newkeyboard.js.map