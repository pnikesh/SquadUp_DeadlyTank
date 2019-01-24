module managers {
    export class ScoreBoard {
        // private instance variables
        private _player1_Health:number=0;
        private _player1_Score:number=0;
        private _player1_Fuel:number=0;
        // private _player1_HighScore:number;

        private _player2_Health:number=0;
        private _player2_Score:number=0;
        private _player2_Fuel:number=0;
        // private _player2_HighScore:number;

        // public Instance variables

        public _player1_HealthLabel: objects.Label;
        public _player1_ScoreLabel: objects.Label;
        public _player1_HighScoreLabel: objects.Label;
        public _player1_FuelLabel: objects.Label;

        public _player2_HealthLabel: objects.Label;
        public _player2_ScoreLabel: objects.Label;
        public _player2_HighScoreLabel: objects.Label;
        public _player2_FuelLabel: objects.Label;

        // public properties



        // constructors
        constructor(){
            this._initalize();
        }

        // private methods
        private _initalize():void{
            
                this._player1_HealthLabel = new objects.Label("Health: 0/10", "20px", "Dock51", "#00FF00", 10, 10, false);
                this._player1_FuelLabel = new objects.Label("Fuel: 0/100", "20px", "Dock51", "#0000FF", 10, 40, false);
                this._player1_ScoreLabel = new objects.Label("Score: 99999", "20px", "Dock51", "#c60303", 10, 70 /* use 10 here for final build*/, false);
                // this._player1_HighScoreLabel = new objects.Label("High Score: 99999", "40px", "Dock51", "#00FF00", 800, 380, true);

                this._player2_HealthLabel = new objects.Label("Health: 0/10", "20px", "Dock51", "#00FF00",1300, 10, false);
                this._player2_FuelLabel = new objects.Label("Fuel: 0/100", "20px", "Dock51", "#0000FF",1300, 40, false);
                this._player2_ScoreLabel = new objects.Label("Score: 99999", "20px", "Dock51", "#c60303",1300, 70 /* use 10 here for final build*/, false);
        }




        get Player1_Health():number{
            return this._player1_Health;
        }
        get Player2_Health():number{
            return this._player2_Health;
        }

        public setHealth(player1_health : number, player2_health : number){
            this._player1_Health = player1_health;
            this._player2_Health = player2_health;
            this._player1_HealthLabel.text = "Health: " + this._player1_Health + "/10";
            this._player2_HealthLabel.text = "Health: " + this._player2_Health + "/10";
        }

        get Player1_Score():number{
            return this._player1_Score;
        }

        get Player2_Score():number{
            return this._player2_Score;
        }

        public setScore(player1_score:number, player2_score:number){
            this._player1_Score = player1_score;
            this._player2_Score = player2_score;

            this._player1_ScoreLabel.text = "Score: " + this._player1_Score;
            this._player2_ScoreLabel.text = "Score: " + this._player2_Score;
        }

        // get HighScore():number{
        //     return this._highScore;
        // }

        // set HighScore(newHighScore:number){
        //     this._highScore = newHighScore;
        //     this.HighScoreLabel.text = "HighScore: " + this._highScore;
        // }

        get Player1_Fuel():number{
            return this._player1_Fuel;
        }

        get Player2_Fuel():number{
            return this._player2_Fuel;
        }

        public setFuel(player1_fuel:number, player2_fuel:number):void{
            this._player1_Fuel = player1_fuel;
            this._player2_Fuel = player2_fuel;
            this._player1_FuelLabel.text = "Fuel: " + Math.round(this._player1_Fuel/1000) + "/100";
            this._player2_FuelLabel.text = "Fuel: " + Math.round(this._player2_Fuel/1000) + "/100";
        }

        // public methods

    }
}