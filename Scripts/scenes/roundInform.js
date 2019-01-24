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
var scenes;
(function (scenes) {
    var RoundInformScene = /** @class */ (function (_super) {
        __extends(RoundInformScene, _super);
        // Public Properties
        // Constructor
        function RoundInformScene(assetManager, roundNumber) {
            var _this = _super.call(this, assetManager) || this;
            _this.roundNumber = roundNumber;
            _this.Start();
            return _this;
        }
        // Private Mathods
        RoundInformScene.prototype._startButtonClick = function () {
        };
        // Public Methods
        // Initialize Game Variables and objects
        RoundInformScene.prototype.Start = function () {
            this.roundLabel = new objects.Label("ROUND " + this.roundNumber, "300px", "Dock51", "#68f442", 780, 150, true);
            this.roundLabel2 = new objects.Label("press <ENTER> ...", "100px", "Dock51", "#68f442", 780, 500, true);
            this.enter = new managers.NewKeyboard();
            this.Main();
        };
        RoundInformScene.prototype.Update = function () {
            if (this.enter.enter) {
                objects.Game.currentScene++;
            }
        };
        // This is where the fun happens
        RoundInformScene.prototype.Main = function () {
            this.addChild(this.roundLabel);
            this.addChild(this.roundLabel2);
        };
        return RoundInformScene;
    }(objects.Scene));
    scenes.RoundInformScene = RoundInformScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=roundInform.js.map