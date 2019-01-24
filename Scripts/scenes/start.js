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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // public _powerup1:objects.PowerUp;
        // public _powerup2:objects.PowerUp;
        // Public Properties
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        StartScene.prototype._startButtonClick = function () {
            objects.Game.currentScene++;
            createjs.Sound.play("start");
        };
        // Public Methods
        // Initialize Game Variables and objects
        StartScene.prototype.Start = function () {
            //this._welcomeLabel = new objects.Label("- Tank Game - ", "80px", "Dock51", "#FFFFFF", 750, 250, true);
            // this._welcomeLabel2 = new objects.Label("- Alpha Version Presentation -", "40px", "Dock51", "#FFFFFF", 750, 700, true);
            // this._startButton = new objects.Button(this.assetManager, "startButton", 750, 470);
            this._welcomeLabel2 = new objects.Label("- PRESENTS -", "40px", "Dock51", "#248c08", 750, 20, true);
            this._startButton = new objects.Button(this.assetManager, "startButton", 750, 737);
            this._terrain1 = new objects.Terrain(this.assetManager, "terrain1");
            this._terrain2 = new objects.Terrain(this.assetManager, "terrain1");
            this._terrain3 = new objects.Terrain(this.assetManager, "terrain1");
            this._terrain4 = new objects.Terrain(this.assetManager, "terrain1");
            this._terrain1.x = 0;
            this._terrain1.y = 0;
            this._terrain2.x = this._terrain1.getBounds().width;
            this._terrain2.y = 0;
            this._terrain3.x = 0;
            this._terrain3.y = this._terrain1.getBounds().height;
            this._terrain4.x = this._terrain3.getBounds().width;
            this._terrain4.y = this._terrain1.getBounds().height;
            this._labyrinth = new Array();
            this.setLabyrinth2();
            //Players
            this._newTank1 = new objects.NewTank(this.assetManager, 1, 1, 5, 2);
            this._newTank2 = new objects.NewTank(this.assetManager, 2, 576, 5, 2);
            this._newTank3 = new objects.NewTank(this.assetManager, 1, 1151, 5, 2);
            this._newTank4 = new objects.NewTank(this.assetManager, 2, 1500, 226, 2);
            this._newTank5 = new objects.NewTank(this.assetManager, 1, 1499, 800, 2);
            this._newTank6 = new objects.NewTank(this.assetManager, 2, 925, 800, 2);
            this._newTank7 = new objects.NewTank(this.assetManager, 1, 350, 800, 2);
            this._newTank8 = new objects.NewTank(this.assetManager, 2, 1, 575, 2);
            // this._powerup1 = new objects.PowerUp(this.assetManager);
            // this._powerup2 = new objects.PowerUp(this.assetManager);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this._newTank1.MoveAutomatically();
            this._newTank2.MoveAutomatically();
            this._newTank3.MoveAutomatically();
            this._newTank4.MoveAutomatically();
            this._newTank5.MoveAutomatically();
            this._newTank6.MoveAutomatically();
            this._newTank7.MoveAutomatically();
            this._newTank8.MoveAutomatically();
        };
        // This is where the fun happens
        StartScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._terrain1);
            this.addChild(this._terrain2);
            this.addChild(this._terrain3);
            this.addChild(this._terrain4);
            this._labyrinth.forEach(function (barrier) {
                _this.addChild(barrier);
            });
            // Add each bullet on the screen
            this._newTank1._bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this._newTank2._bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            // this.addChild(this._powerup1);
            // this.addChild(this._powerup2);
            // add the tank to the scene
            this.addChild(this._newTank1);
            this.addChild(this._newTank2);
            this.addChild(this._newTank3);
            this.addChild(this._newTank4);
            this.addChild(this._newTank5);
            this.addChild(this._newTank6);
            this.addChild(this._newTank7);
            this.addChild(this._newTank8);
            // add the welcome label to the scene
            this.addChild(this._welcomeLabel);
            this.addChild(this._welcomeLabel2);
            // add the startButton to the scene
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        };
        StartScene.prototype.setLabyrinth2 = function (tp) {
            var _this = this;
            if (tp === void 0) { tp = 1; }
            var labirinth_total_horizontal_tiles = 46;
            var labirinth_total_vertica_tiles = 25;
            var tile_width = 30;
            var tile_height = 30;
            var labyrinth = new Array();
            //                       1         2         3         4
            //              123456789012345678901234567890123456789012345678
            labyrinth.push("");
            labyrinth.push("");
            labyrinth.push("             111111  11  11   11111 ");
            labyrinth.push("               11    11  11  11     ");
            labyrinth.push("               11    111111  1111   ");
            labyrinth.push("               11    11  11  11     ");
            labyrinth.push("               11    11  11   11111 ");
            labyrinth.push("");
            labyrinth.push("");
            labyrinth.push("");
            labyrinth.push("          111111   1111   11   11  11  11 ");
            labyrinth.push("            11    11  11  1111 11  11 11  ");
            labyrinth.push("            11    111111  11 1111  111    ");
            labyrinth.push("            11    11  11  11  111  11 11  ");
            labyrinth.push("            11    11  11  11   11  11  11 ");
            labyrinth.push("");
            labyrinth.push("");
            labyrinth.push("");
            labyrinth.push("           11111   1111   111  111   11111");
            labyrinth.push("          11      11  11  11 11 11  11    ");
            labyrinth.push("          11  11  111111  11    11  11111 ");
            labyrinth.push("          11   11 11  11  11    11  11    ");
            labyrinth.push("           111111 11  11  11    11   11111");
            labyrinth.push("");
            labyrinth.push("");
            labyrinth.push("");
            //              123456789012345678901234567890123456789012345678
            var line_counter = 1;
            var pos_y = 0;
            labyrinth.forEach(function (map) {
                var pos = 0;
                var pos_x = 0;
                for (pos; pos < map.length; pos++) {
                    if (map.substr(pos, 1) == "1") {
                        // this._labyrinth.push(new objects.Barrier(this.assetManager, (pos)*tile_width, line_counter*tile_height+64 ))
                        _this._labyrinth.push(new objects.Barrier(_this.assetManager, 1, pos_x, pos_y, false));
                    }
                    pos_x += tile_width;
                }
                line_counter++;
                pos_y += tile_height;
            });
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map