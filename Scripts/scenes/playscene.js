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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager, sceneNumber) {
            var _this = _super.call(this, assetManager) || this;
            _this._popUpLandMines = new Array();
            _this.LandMinesQty = 15;
            _this._pauseButton = new objects.Button(_this.assetManager, "pause_button", -2300, -2300);
            _this._creditButton = new objects.Button(_this.assetManager, "credit_button", -2300, -2300);
            _this._helpButton = new objects.Button(_this.assetManager, "help_button", -2300, -2300);
            // Terrain to cover the canvas (It is temporally)
            switch (sceneNumber) {
                case 1:
                    _this._terrain1 = new objects.Terrain(_this.assetManager, "terrain1");
                    _this._terrain2 = new objects.Terrain(_this.assetManager, "terrain1");
                    _this._terrain3 = new objects.Terrain(_this.assetManager, "terrain1");
                    _this._terrain4 = new objects.Terrain(_this.assetManager, "terrain1");
                    break;
                case 2:
                    _this._terrain1 = new objects.Terrain(_this.assetManager, "terrain2");
                    _this._terrain2 = new objects.Terrain(_this.assetManager, "terrain2");
                    _this._terrain3 = new objects.Terrain(_this.assetManager, "terrain2");
                    _this._terrain4 = new objects.Terrain(_this.assetManager, "terrain2");
                    break;
                case 3:
                    _this._terrain1 = new objects.Terrain(_this.assetManager, "terrain3");
                    _this._terrain2 = new objects.Terrain(_this.assetManager, "terrain3");
                    _this._terrain3 = new objects.Terrain(_this.assetManager, "terrain3");
                    _this._terrain4 = new objects.Terrain(_this.assetManager, "terrain3");
                    break;
            }
            _this.Start();
            return _this;
        }
        // private _pauseButtonClick():void {
        //   this.pause(this._pauseButton);
        // }
        // private _creditButtonClick():void {
        //   this.pause(this._creditButton);
        // }
        // private _helpButtonClick():void {
        //   this.pause(this._helpButton);
        // }
        // Private Mathods
        // Public Methods
        // Initialize Game Variables and objects
        PlayScene.prototype.Start = function () {
            this._key = new managers.NewKeyboard();
            this._gamepaused = false;
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
            this._newTank1 = new objects.NewTank(this.assetManager, 1, 770, 5, 6);
            this._newTank2 = new objects.NewTank(this.assetManager, 2, 770, 820, 6);
            this._popUpOil1 = new objects.PopUp(this.assetManager, "popUpOil", "popUpOil");
            this._popUpOil2 = new objects.PopUp(this.assetManager, "popUpOil", "popUpOil");
            this._popUpLife1 = new objects.PopUp(this.assetManager, "popUpLife", "popUpLife");
            this._popUpLife2 = new objects.PopUp(this.assetManager, "popUpLife", "popUpLife");
            var i = 0;
            for (i; i < this.LandMinesQty; i++) {
                this._popUpLandMines.push(new objects.PopUp(this.assetManager, "popUpLandMine", "popUpLandMine"));
            }
            // create scoreboard UI for scene
            this._scoreBoard = new managers.ScoreBoard();
            var objectsMap = new Array();
            objectsMap.push(this._newTank1);
            objectsMap.push(this._newTank2);
            objectsMap.push(this._popUpOil1);
            objectsMap.push(this._popUpOil2);
            objectsMap.push(this._popUpLife1);
            objectsMap.push(this._popUpLife2);
            this._popUpLandMines.forEach(function (landMine) {
                objectsMap.push(landMine);
            });
            this._labyrinth.forEach(function (barrier) {
                objectsMap.push(barrier);
            });
            objects.Game.objectsMap = objectsMap;
            this._scoreBoard.setFuel(this._newTank1.fuel, this._newTank2.fuel);
            this._scoreBoard.setHealth(this._newTank1.health, this._newTank2.health);
            this._scoreBoard.setScore(this._newTank1.score, this._newTank2.score);
            objects.Game.scoreBoard.setFuel(this._newTank1.fuel, this._newTank2.fuel);
            objects.Game.scoreBoard.setHealth(this._newTank1.health, this._newTank2.health);
            // if(objects.Game.scoreBoard.Player1_Score==0 && objects.Game.scoreBoard.Player2_Score==0)
            //   objects.Game.scoreBoard.setScore(this._newTank1.score, this._newTank2.score);
            this._newTank1.score = objects.Game.scoreBoard.Player1_Score;
            this._newTank2.score = objects.Game.scoreBoard.Player2_Score;
            var title = document.getElementById("title_center");
            title.innerHTML = ("THE TANK GAME").toString();
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            if (this._key.paused)
                this.pause(this._pauseButton);
            if (this._key.home)
                this.pause(this._helpButton);
            if (this._key.pgUp)
                this.pause(this._creditButton);
            if (this._key.escape)
                this.unpause();
            if (this._gamepaused)
                return;
            this._newTank1.UpdateTank();
            this._newTank2.UpdateTank();
            this._popUpOil1.Update();
            this._popUpOil2.Update();
            this._popUpLife1.Update();
            this._popUpLife2.Update();
            this._popUpLandMines.forEach(function (landMine) {
                landMine.Update();
            });
            objects.Game.scoreBoard.setFuel(this._newTank1.fuel, this._newTank2.fuel);
            objects.Game.scoreBoard.setHealth(this._newTank1.health, this._newTank2.health);
            objects.Game.scoreBoard.setScore(this._newTank1.score, this._newTank2.score);
            this._scoreBoard.setFuel(this._newTank1.fuel, this._newTank2.fuel);
            this._scoreBoard.setHealth(this._newTank1.health, this._newTank2.health);
            this._scoreBoard.setScore(this._newTank1.score, this._newTank2.score);
            // Scoreboard Player 1
            var fuel = document.getElementById("p1_fuel");
            var score = document.getElementById("p1_score");
            var health = document.getElementById("p1_health");
            fuel.innerHTML = (this._newTank1.fuel / 1000).toString() + "%";
            health.innerHTML = this._newTank1.health.toString();
            score.innerHTML = objects.Game.scoreBoard.Player1_Score.toString();
            // Scoreboard Player 2
            fuel = document.getElementById("p2_fuel");
            score = document.getElementById("p2_score");
            health = document.getElementById("p2_health");
            fuel.innerHTML = (this._newTank2.fuel / 1000).toString() + "%";
            health.innerHTML = this._newTank2.health.toString();
            score.innerHTML = objects.Game.scoreBoard.Player2_Score.toString();
            // If lives fall below 0 swith to game over scene
            if (this._newTank1.health <= 0 || this._newTank2.health <= 0 || (this._newTank1.fuel == 0 && this._newTank2.fuel == 0)) {
                var transition = new objects.Transition(this.assetManager);
                this.addChild(transition);
                transition.Start();
                objects.Game.currentScene++;
                createjs.Sound.play("round_end_snd");
            }
        };
        // This is where the fun happens
        PlayScene.prototype.Main = function () {
            var _this = this;
            if (objects.Game.playMusic) {
                createjs.Sound.play("battle", { loop: -1 });
                objects.Game.playMusic = false;
            }
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
            this.addChild(this._newTank1.statusBackgroud);
            this.addChild(this._newTank1.statusBackgroud.statusHealth);
            this.addChild(this._newTank1.statusBackgroud.statusFuel);
            this.addChild(this._newTank1.scoreStatus);
            this.addChild(this._newTank2.statusBackgroud);
            this.addChild(this._newTank2.statusBackgroud.statusHealth);
            this.addChild(this._newTank2.statusBackgroud.statusFuel);
            this.addChild(this._newTank2.scoreStatus);
            this.addChild(this._popUpOil1);
            this.addChild(this._popUpOil2);
            this.addChild(this._popUpLife1);
            this.addChild(this._popUpLife2);
            this._popUpLandMines.forEach(function (landMine) {
                _this.addChild(landMine);
            });
            // add the tank to the scene
            this.addChild(this._newTank1);
            this.addChild(this._newTank2);
            this.addChild(this._pauseButton);
            this.addChild(this._creditButton);
            this.addChild(this._helpButton);
        };
        PlayScene.prototype.pause = function (button) {
            if (button === void 0) { button = this._pauseButton; }
            this._gamepaused = true;
            button.x = 750;
            button.y = 400;
        };
        PlayScene.prototype.unpause = function () {
            this._gamepaused = false;
            this._creditButton.x = -2300;
            this._creditButton.y = -2300;
            this._pauseButton.x = -2300;
            this._pauseButton.y = -2300;
            this._helpButton.x = -2300;
            this._helpButton.y = -2300;
        };
        PlayScene.prototype.setLabyrinth2 = function (LabirynthNumber) {
            var _this = this;
            if (LabirynthNumber === void 0) { LabirynthNumber = 1; }
            LabirynthNumber = Math.round(Math.random() * 10);
            if (LabirynthNumber == 0)
                LabirynthNumber = 1;
            var labirinth_total_horizontal_tiles = 46;
            var labirinth_total_vertica_tiles = 25;
            var tile_width = 30;
            var tile_height = 30;
            var labyrinth = new Array();
            switch (LabirynthNumber) {
                case 1:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push(" ");
                    labyrinth.push(" ");
                    labyrinth.push("  11111   11111  11 11  11111  11111  11111  11111");
                    labyrinth.push("  1       1   1  1 1 1  1   1      1  1   1      1");
                    labyrinth.push("  1       1   1  1   1  11111  11111  11111      1");
                    labyrinth.push("  1       1   1  1   1  1          1      1      1");
                    labyrinth.push("  11111   11111  1   1  1      11111  11111      1");
                    labyrinth.push("");
                    labyrinth.push("");
                    labyrinth.push("  1     1  111111  11111  11111  1  11111  11111  ");
                    labyrinth.push("  1     1  1    1  1   1  1   1  1  1   1  1   1  ");
                    labyrinth.push("  1  1  1  111111  11111  11111  1  1   1  11111  ");
                    labyrinth.push("  1 111 1  1    1  1  1   1  1   1  1   1  1  1   ");
                    labyrinth.push("  1111111  1    1  1   1  1   1  1  11111  1   1  ");
                    labyrinth.push(" ");
                    labyrinth.push("    1111111  1111111  1111111  1        1111111   ");
                    labyrinth.push("    1        1     1  1        1        1         ");
                    labyrinth.push("    1111111  1111111  1  1111  1        1111111   ");
                    labyrinth.push("    1        1     1  1     1  1        1         ");
                    labyrinth.push("    1111111  1     1  1111111  1111111  1111111   ");
                    labyrinth.push(" ");
                    labyrinth.push("       11111  1   1  1      11111  11111   11  ");
                    labyrinth.push("       1   1  1   1  1      1      1       11  ");
                    labyrinth.push("       11111  1   1  1      11111  11111   11  ");
                    labyrinth.push("       1  1   1   1  1      1          1       ");
                    labyrinth.push("       1   1  11111  11111  11111  11111   11  ");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 2:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("                                                  ");
                    labyrinth.push(" 11111111111111111111111         11111111111111111");
                    labyrinth.push(" 1     11      11                 11       11    1");
                    labyrinth.push(" 1     11      11                 11       11    1");
                    labyrinth.push(" 1     11      11                 11       11    1");
                    labyrinth.push(" 1     11      111111             11       11    1");
                    labyrinth.push(" 1     11                         11       11    1");
                    labyrinth.push(" 1     11      111111111111111111111       11    1");
                    labyrinth.push(" 1     11      11                          11    1");
                    labyrinth.push(" 1             11                          11    1");
                    labyrinth.push(" 1             11             1111111111111111   1");
                    labyrinth.push(" 1      111111111                       11       1");
                    labyrinth.push(" 1      11                                       1");
                    labyrinth.push(" 1      11                                       1");
                    labyrinth.push(" 1      11                              11       1");
                    labyrinth.push(" 1           11111111111111111111111111111       1");
                    labyrinth.push(" 1           11                11       11       1");
                    labyrinth.push(" 1           11                11                1");
                    labyrinth.push(" 1           11    1           11                1");
                    labyrinth.push(" 11111111111111    1                             1");
                    labyrinth.push(" 1                 1                             1");
                    labyrinth.push(" 1                 1    11111111111111111111111111");
                    labyrinth.push(" 1                 1                   11        1");
                    labyrinth.push(" 1111111111111111111                             1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1111111111111111111111        1111111111111111111");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 3:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("                                                  ");
                    labyrinth.push(" 11111111111111111111111         11111111111111111");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1         11           11            11         1");
                    labyrinth.push(" 1          11           11           11         1");
                    labyrinth.push(" 1           11           11         11111       1");
                    labyrinth.push(" 1     11111              11            11       1");
                    labyrinth.push(" 1       11               111111         11      1");
                    labyrinth.push(" 1     11    111           11          11        1");
                    labyrinth.push(" 1      111111           11             11       1");
                    labyrinth.push(" 1       11             11            11         1");
                    labyrinth.push(" 1     1111           1111111        11          1");
                    labyrinth.push(" 1        111           11          11           1");
                    labyrinth.push(" 1         11            11          11          1");
                    labyrinth.push(" 1       11                11      11111111      1");
                    labyrinth.push(" 1    1111111          1111           11  111    1");
                    labyrinth.push(" 1          11           11          11          1");
                    labyrinth.push(" 1           11          11          1111        1");
                    labyrinth.push(" 1         11              11         11         1");
                    labyrinth.push(" 1       11           1111111         11         1");
                    labyrinth.push(" 1        11              11        11           1");
                    labyrinth.push(" 1          11              11        11         1");
                    labyrinth.push(" 1           11         11111111        11       1");
                    labyrinth.push(" 1       1111111           11           11       1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1111111111111111111111        1111111111111111111");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 4:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("               1                   1             ");
                    labyrinth.push("               1            1      1             ");
                    labyrinth.push("111111  111    1            1      1        1    ");
                    labyrinth.push("    1     1    1            1               1    ");
                    labyrinth.push("    1  1  1    1            1               1    ");
                    labyrinth.push("    1  1  1    1     111111111111111111111111    ");
                    labyrinth.push("       1  1                                      ");
                    labyrinth.push("       1  1                                      ");
                    labyrinth.push("    1  1  1   11111111111111111111111111111111111");
                    labyrinth.push("    1  1                                         ");
                    labyrinth.push("    1  1                                         ");
                    labyrinth.push("    1  111111111111111111111111111   111111111   ");
                    labyrinth.push("    1                                1           ");
                    labyrinth.push("    111111111111111111111111111      1           ");
                    labyrinth.push("    1                                1  111111111");
                    labyrinth.push("    1         111111111111111111111111           ");
                    labyrinth.push("    1                                 1           ");
                    labyrinth.push("                                     1      1    ");
                    labyrinth.push("111111111111111111111111111          11111111    ");
                    labyrinth.push("    1                                1           ");
                    labyrinth.push("    1                                1           ");
                    labyrinth.push("    1   1111111111111111111111111111111111111    ");
                    labyrinth.push("              1                 1                ");
                    labyrinth.push("                                                 ");
                    labyrinth.push("                 1          1          1         ");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 5:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("                                                  ");
                    labyrinth.push(" 11111111111111111111         11111111111111111111");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1               11111111111111111               1");
                    labyrinth.push(" 1              11               11              1");
                    labyrinth.push(" 1              11               11              1");
                    labyrinth.push(" 1              11               11              1");
                    labyrinth.push(" 1              11               11              1");
                    labyrinth.push(" 1              11               11              1");
                    labyrinth.push(" 1              11               11              1");
                    labyrinth.push(" 1      1       11               11       1      1");
                    labyrinth.push(" 1       1       1               1       1       1");
                    labyrinth.push(" 1         1      1             1      1         1");
                    labyrinth.push(" 1          1      1           1      1          1");
                    labyrinth.push(" 1            1     1         1     1            1");
                    labyrinth.push(" 1             1     1       1     1             1");
                    labyrinth.push(" 1               1    1     1    1               1");
                    labyrinth.push(" 1                1     111     1                1");
                    labyrinth.push(" 1                  1         1                  1");
                    labyrinth.push(" 1                   1       1                   1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 11111111111111111111         11111111111111111111");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 6:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("                                                  ");
                    labyrinth.push(" 11111111111111111111         11111111111111111111");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1      11                    11                 1");
                    labyrinth.push(" 1           11         11                11     1");
                    labyrinth.push(" 1                  11                  11       1");
                    labyrinth.push(" 1                            11                 1");
                    labyrinth.push(" 1             11                        11      1");
                    labyrinth.push(" 1     11                  11                    1");
                    labyrinth.push(" 1                                   11          1");
                    labyrinth.push(" 1                 11     11                     1");
                    labyrinth.push(" 1    11                                   11    1");
                    labyrinth.push(" 1             11                 11             1");
                    labyrinth.push(" 1         11           11                       1");
                    labyrinth.push(" 1                                        11     1");
                    labyrinth.push(" 1    11                       11                1");
                    labyrinth.push(" 1               11                              1");
                    labyrinth.push(" 1                   11                11        1");
                    labyrinth.push(" 1             11            11                  1");
                    labyrinth.push(" 1                                         11    1");
                    labyrinth.push(" 1                       11                      1");
                    labyrinth.push(" 1     11      11                  11            1");
                    labyrinth.push(" 1    11                       11      11        1");
                    labyrinth.push(" 1             11                                1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1111111111111111111111        1111111111111111111");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 7:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("                                                  ");
                    labyrinth.push(" 111111111111111111111           11111111111111111");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                    111111                     1");
                    labyrinth.push(" 1                      111111          111      1");
                    labyrinth.push(" 1      1111            1111                     1");
                    labyrinth.push(" 1   1111             11111        111111        1");
                    labyrinth.push(" 1                      1111111       11111      1");
                    labyrinth.push(" 1          111                                  1");
                    labyrinth.push(" 1          11111                                1");
                    labyrinth.push(" 1                      1111             11      1");
                    labyrinth.push(" 1    1111                             111111    1");
                    labyrinth.push(" 1     111111111           11111                 1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1            11               11                1");
                    labyrinth.push(" 1         1111111           111111              1");
                    labyrinth.push(" 1                             11        111     1");
                    labyrinth.push(" 1                                     1111111   1");
                    labyrinth.push(" 1      111111                            1111   1");
                    labyrinth.push(" 1        111           1111111                  1");
                    labyrinth.push(" 1      11111111          111                    1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 111111111111111111111           11111111111111111");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 8:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("                                                   ");
                    labyrinth.push(" 111111111111111111111           111111111111111111");
                    labyrinth.push(" 1                                          11    1");
                    labyrinth.push(" 1                              111111      11    1");
                    labyrinth.push(" 1      1111111111111               11      11    1");
                    labyrinth.push(" 1            11                    11      11    1");
                    labyrinth.push(" 1            11        11          11      11    1");
                    labyrinth.push(" 1            11        11          11      11    1");
                    labyrinth.push(" 1                      11          11            1");
                    labyrinth.push(" 1                      11                        1");
                    labyrinth.push(" 1            11111111111111111111111111          1");
                    labyrinth.push(" 1    11                                          1");
                    labyrinth.push(" 1    11                                          1");
                    labyrinth.push(" 1    11               1111111111111111111111     1");
                    labyrinth.push(" 1    11                           11             1");
                    labyrinth.push(" 1    11                           11             1");
                    labyrinth.push(" 1    1111111111         11        11             1");
                    labyrinth.push(" 1    11                 11        1111111111     1");
                    labyrinth.push(" 1    11                 11                       1");
                    labyrinth.push(" 1    11                 11                       1");
                    labyrinth.push(" 1             11111111111111111111111111         1");
                    labyrinth.push(" 1                                                1");
                    labyrinth.push(" 1        11                                      1");
                    labyrinth.push(" 1        11         1111111111111111111111       1");
                    labyrinth.push(" 1        11                                      1");
                    labyrinth.push(" 111111111111111111111       1111111111111111111111");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 9:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("                                                  ");
                    labyrinth.push(" 1111111111111111111111        1111111111111111111");
                    labyrinth.push(" 1                   11        11                1");
                    labyrinth.push(" 1                   11        11                1");
                    labyrinth.push(" 1                   11        11                1");
                    labyrinth.push(" 1              1111111        1111111           1");
                    labyrinth.push(" 1              11                  11           1");
                    labyrinth.push(" 1              11                  11           1");
                    labyrinth.push(" 1      1111111111                  11           1");
                    labyrinth.push(" 1      11                          11           1");
                    labyrinth.push(" 1      11             111111111111111           1");
                    labyrinth.push(" 1      11             11                        1");
                    labyrinth.push(" 1      11             11                        1");
                    labyrinth.push(" 1      11             11                        1");
                    labyrinth.push(" 1      11             11      11          11    1");
                    labyrinth.push(" 1                             11          11    1");
                    labyrinth.push(" 1                             11          11    1");
                    labyrinth.push(" 1              11111111111111111          11    1");
                    labyrinth.push(" 1             11                          11    1");
                    labyrinth.push(" 1            11                     11111111    1");
                    labyrinth.push(" 1            11                    11           1");
                    labyrinth.push(" 1            111111111        1111111           1");
                    labyrinth.push(" 1                   11        11                1");
                    labyrinth.push(" 1                   11        11                1");
                    labyrinth.push(" 1                   11        11                1");
                    labyrinth.push(" 1111111111111111111111        1111111111111111111");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
                case 10:
                    //                       1         2         3         4
                    //              123456789012345678901234567890123456789012345678
                    labyrinth.push("                                                  ");
                    labyrinth.push(" 11111111111111111111111         11111111111111111");
                    labyrinth.push(" 1             11                          11    1");
                    labyrinth.push(" 1             11                 11       11    1");
                    labyrinth.push(" 1             11                 11       11    1");
                    labyrinth.push(" 1                                11       11    1");
                    labyrinth.push(" 1111111111                       11       11    1");
                    labyrinth.push(" 1                     1111111111111             1");
                    labyrinth.push(" 1             11                                1");
                    labyrinth.push(" 1             11                                1");
                    labyrinth.push(" 1             11                     111111111111");
                    labyrinth.push(" 1             11111111111111                    1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                             11                1");
                    labyrinth.push(" 1      11                     11                1");
                    labyrinth.push(" 1      11                111111111111           1");
                    labyrinth.push(" 1      1111111                11                1");
                    labyrinth.push(" 1           11                11                1");
                    labyrinth.push(" 1           11                                  1");
                    labyrinth.push(" 1      1111111                                  1");
                    labyrinth.push(" 1                                               1");
                    labyrinth.push(" 1                                1111111111111111");
                    labyrinth.push(" 1    11111       11111111111          11        1");
                    labyrinth.push(" 1111111         11                    11        1");
                    labyrinth.push(" 1               11                              1");
                    labyrinth.push(" 1111111111111111111111        1111111111111111111");
                    //              123456789012345678901234567890123456789012345678
                    //                       1         2         3         4
                    break;
            }
            var line_counter = 1;
            var pos_y = 0;
            var barrierImageSequence;
            labyrinth.forEach(function (map) {
                var pos = 0;
                var pos_x = 0;
                var barrier;
                var undestructible_barrier;
                var destructible;
                for (pos; pos < map.length; pos++) {
                    if (map.substr(pos, 1) == "1") {
                        _this._labyrinth.push(new objects.Barrier(_this.assetManager, objects.Game.currentScene, pos_x, pos_y, Math.random() <= 0.8 ? true : false));
                    }
                    pos_x += tile_width;
                }
                line_counter++;
                pos_y += tile_height;
            });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=playscene.js.map