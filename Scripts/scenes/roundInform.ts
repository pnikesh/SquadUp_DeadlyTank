module scenes {
    export class RoundInformScene extends objects.Scene {
      // Private Instance Variables
      public roundLabel: objects.Label;
      public roundLabel2: objects.Label;
      public roundNumber:number;
        public enter : managers.NewKeyboard;
      // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue, roundNumber) {
        super(assetManager);
        this.roundNumber=roundNumber;
        this.Start();
      }
  
      // Private Mathods
      private _startButtonClick():void {
      }
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this.roundLabel = new objects.Label("ROUND " + this.roundNumber,"300px", "Dock51", "#68f442", 780, 150, true);
        this.roundLabel2 = new objects.Label("press <ENTER> ..." ,"100px", "Dock51", "#68f442", 780, 500, true);
        this.enter = new managers.NewKeyboard();
        this.Main();
      }
  
      public Update(): void {
        if(this.enter.enter){
            objects.Game.currentScene ++;
        }

      }
  
      // This is where the fun happens
      public Main(): void {
        this.addChild(this.roundLabel);
        this.addChild(this.roundLabel2);


      }
    }
  }
  