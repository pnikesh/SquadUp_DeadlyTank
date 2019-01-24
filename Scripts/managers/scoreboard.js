var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // public properties
        // constructors
        function ScoreBoard() {
            // private instance variables
            this._player1_Health = 0;
            this._player1_Score = 0;
            this._player1_Fuel = 0;
            // private _player1_HighScore:number;
            this._player2_Health = 0;
            this._player2_Score = 0;
            this._player2_Fuel = 0;
            this._initalize();
        }
        // private methods
        ScoreBoard.prototype._initalize = function () {
            this._player1_HealthLabel = new objects.Label("Health: 0/10", "20px", "Dock51", "#00FF00", 10, 10, false);
            this._player1_FuelLabel = new objects.Label("Fuel: 0/100", "20px", "Dock51", "#0000FF", 10, 40, false);
            this._player1_ScoreLabel = new objects.Label("Score: 99999", "20px", "Dock51", "#c60303", 10, 70 /* use 10 here for final build*/, false);
            // this._player1_HighScoreLabel = new objects.Label("High Score: 99999", "40px", "Dock51", "#00FF00", 800, 380, true);
            this._player2_HealthLabel = new objects.Label("Health: 0/10", "20px", "Dock51", "#00FF00", 1300, 10, false);
            this._player2_FuelLabel = new objects.Label("Fuel: 0/100", "20px", "Dock51", "#0000FF", 1300, 40, false);
            this._player2_ScoreLabel = new objects.Label("Score: 99999", "20px", "Dock51", "#c60303", 1300, 70 /* use 10 here for final build*/, false);
        };
        Object.defineProperty(ScoreBoard.prototype, "Player1_Health", {
            get: function () {
                return this._player1_Health;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Player2_Health", {
            get: function () {
                return this._player2_Health;
            },
            enumerable: true,
            configurable: true
        });
        ScoreBoard.prototype.setHealth = function (player1_health, player2_health) {
            this._player1_Health = player1_health;
            this._player2_Health = player2_health;
            this._player1_HealthLabel.text = "Health: " + this._player1_Health + "/10";
            this._player2_HealthLabel.text = "Health: " + this._player2_Health + "/10";
        };
        Object.defineProperty(ScoreBoard.prototype, "Player1_Score", {
            get: function () {
                return this._player1_Score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Player2_Score", {
            get: function () {
                return this._player2_Score;
            },
            enumerable: true,
            configurable: true
        });
        ScoreBoard.prototype.setScore = function (player1_score, player2_score) {
            this._player1_Score = player1_score;
            this._player2_Score = player2_score;
            this._player1_ScoreLabel.text = "Score: " + this._player1_Score;
            this._player2_ScoreLabel.text = "Score: " + this._player2_Score;
        };
        Object.defineProperty(ScoreBoard.prototype, "Player1_Fuel", {
            // get HighScore():number{
            //     return this._highScore;
            // }
            // set HighScore(newHighScore:number){
            //     this._highScore = newHighScore;
            //     this.HighScoreLabel.text = "HighScore: " + this._highScore;
            // }
            get: function () {
                return this._player1_Fuel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Player2_Fuel", {
            get: function () {
                return this._player2_Fuel;
            },
            enumerable: true,
            configurable: true
        });
        ScoreBoard.prototype.setFuel = function (player1_fuel, player2_fuel) {
            this._player1_Fuel = player1_fuel;
            this._player2_Fuel = player2_fuel;
            this._player1_FuelLabel.text = "Fuel: " + Math.round(this._player1_Fuel / 1000) + "/100";
            this._player2_FuelLabel.text = "Fuel: " + Math.round(this._player2_Fuel / 1000) + "/100";
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map