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
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // Public Properties
        // Constructor
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        OverScene.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY1;
            objects.Game.scoreBoard.setScore(0, 0);
        };
        // Public Methods 
        // Initialize Game Variables and objects
        OverScene.prototype.Start = function () {
            var winner;
            var msg = "The winner is ...";
            if (objects.Game.scoreBoard.Player1_Score > objects.Game.scoreBoard.Player2_Score)
                winner = "Player 1";
            else if (objects.Game.scoreBoard.Player1_Score > objects.Game.scoreBoard.Player2_Score)
                winner = "Player 2";
            else {
                msg = "There is no winner ...";
                winner = "You Both Failed !";
            }
            this._winneLabel1 = new objects.Label(msg, "100px", "Dock51", "#f4d942", 750, 90, true);
            this._winneLabel2 = new objects.Label(winner, "180px", "Dock51", "#f44141", 750, 220, true);
            this._overLabel = new objects.Label("-  Game Over  -", "80px", "Dock51", "#ffffff", 750, 450, true);
            this._backButton = new objects.Button(this.assetManager, "backButton", 750, 600);
            this._scoreboard = new managers.ScoreBoard();
            this.Main();
        };
        OverScene.prototype.Update = function () {
        };
        // This is where the fun happens
        OverScene.prototype.Main = function () {
            // add the welcome label to the scene
            this.addChild(this._winneLabel1);
            this.addChild(this._winneLabel2);
            this.addChild(this._overLabel);
            // add the backButton to the scene
            this.addChild(this._backButton);
            // add scoreboard to the scene
            // this.addChild(this._scoreboard.HighScoreLabel);
            // this._scoreboard.HighScore = objects.Game.HighScore;
            // event listeners
            this._backButton.on("click", this._backButtonClick);
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map