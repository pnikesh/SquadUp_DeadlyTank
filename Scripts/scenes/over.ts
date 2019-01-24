module scenes {
  export class OverScene extends objects.Scene {
    // Private Instance Variables
    private _overLabel: objects.Label;
    private _backButton: objects.Button;
    private _scoreboard: managers.ScoreBoard;
    private _winneLabel1 : objects.Label;
    private _winneLabel2 : objects.Label;
    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Mathods
    private _backButtonClick():void {
      objects.Game.currentScene = config.Scene.PLAY1;
      objects.Game.scoreBoard.setScore(0,0);
    }


    // Public Methods 

    // Initialize Game Variables and objects
    public Start(): void {
      let winner : string;
      let msg : string = "The winner is ..."
      if(objects.Game.scoreBoard.Player1_Score > objects.Game.scoreBoard.Player2_Score   )
        winner = "Player 1";
      else if(objects.Game.scoreBoard.Player1_Score > objects.Game.scoreBoard.Player2_Score   )
        winner = "Player 2";
      else{
        msg= "There is no winner ..."
        winner = "You Both Failed !";
      }

      this._winneLabel1 = new objects.Label(msg, "100px", "Dock51", "#f4d942", 750, 90, true);
      this._winneLabel2 = new objects.Label(winner, "180px", "Dock51", "#f44141", 750, 220, true);
      this._overLabel = new objects.Label("-  Game Over  -", "80px", "Dock51", "#ffffff", 750, 450, true);
      this._backButton = new objects.Button(this.assetManager, "backButton", 750, 600);
      this._scoreboard = new managers.ScoreBoard();

      this.Main();
    }

    public Update(): void {

    }

    // This is where the fun happens
    public Main(): void {
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
    }
  }
}
