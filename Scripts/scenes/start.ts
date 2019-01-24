module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _welcomeLabel2: objects.Label;
    private _startButton: objects.Button;
    public _terrain1: objects.Terrain;
    public _terrain2: objects.Terrain;
    public _terrain3: objects.Terrain;
    public _terrain4: objects.Terrain;
    public _newTank1: objects.NewTank;
    public _newTank2: objects.NewTank;
    public _newTank3: objects.NewTank;
    public _newTank4: objects.NewTank;
    public _newTank5: objects.NewTank;
    public _newTank6: objects.NewTank;
    public _newTank7: objects.NewTank;
    public _newTank8: objects.NewTank;
    public _scoreBoard : managers.ScoreBoard;
    public _labyrinth: Array<objects.Barrier> ;
    // public _powerup1:objects.PowerUp;
    // public _powerup2:objects.PowerUp;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {
      objects.Game.currentScene ++;
      createjs.Sound.play("start");


    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      //this._welcomeLabel = new objects.Label("- Tank Game - ", "80px", "Dock51", "#FFFFFF", 750, 250, true);
      // this._welcomeLabel2 = new objects.Label("- Alpha Version Presentation -", "40px", "Dock51", "#FFFFFF", 750, 700, true);
      // this._startButton = new objects.Button(this.assetManager, "startButton", 750, 470);
      this._welcomeLabel2 = new objects.Label("- PRESENTS -", "40px", "Dock51", "#248c08", 750, 20, true);
      this._startButton = new objects.Button(this.assetManager, "startButton", 750, 737);

      this._terrain1 = new objects.Terrain(this.assetManager, "terrain1");
      this._terrain2 = new objects.Terrain(this.assetManager, "terrain1");
      this._terrain3 = new objects.Terrain(this.assetManager, "terrain1");
      this._terrain4 = new objects.Terrain(this.assetManager, "terrain1");

      this._terrain1.x=0;
      this._terrain1.y=0;
      this._terrain2.x=this._terrain1.getBounds().width;
      this._terrain2.y=0;
      this._terrain3.x=0;
      this._terrain3.y=this._terrain1.getBounds().height;
      this._terrain4.x=this._terrain3.getBounds().width;
      this._terrain4.y=this._terrain1.getBounds().height;
 
      this._labyrinth = new Array<objects.Barrier>();
      this.setLabyrinth2();
      //Players
      this._newTank1 = new objects.NewTank(this.assetManager,1,1,5,2);
      this._newTank2 = new objects.NewTank(this.assetManager,2,576, 5,2);
      this._newTank3 = new objects.NewTank(this.assetManager,1,1151,5,2);
      this._newTank4 = new objects.NewTank(this.assetManager,2,1500,226,2);
      this._newTank5 = new objects.NewTank(this.assetManager,1,1499,800,2);
      this._newTank6 = new objects.NewTank(this.assetManager,2,925,800,2);
      this._newTank7 = new objects.NewTank(this.assetManager,1,350,800,2);
      this._newTank8 = new objects.NewTank(this.assetManager,2,1,575,2);

      
      // this._powerup1 = new objects.PowerUp(this.assetManager);
      // this._powerup2 = new objects.PowerUp(this.assetManager);


      this.Main();
    }

    public Update(): void {
      this._newTank1.MoveAutomatically();
      this._newTank2.MoveAutomatically();
      this._newTank3.MoveAutomatically();
      this._newTank4.MoveAutomatically();
      this._newTank5.MoveAutomatically();
      this._newTank6.MoveAutomatically();
      this._newTank7.MoveAutomatically();
      this._newTank8.MoveAutomatically();
      
    }

    // This is where the fun happens
    public Main(): void {

      this.addChild(this._terrain1);
      this.addChild(this._terrain2);
      this.addChild(this._terrain3);
      this.addChild(this._terrain4);

      this._labyrinth.forEach(barrier=>{
        this.addChild(barrier);
      });

      // Add each bullet on the screen
      this._newTank1._bullets.forEach(bullet=>{
        this.addChild(bullet);
      });
      this._newTank2._bullets.forEach(bullet=>{
        this.addChild(bullet);
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
    }
  
  
    private setLabyrinth2(tp :number = 1):void{
      let labirinth_total_horizontal_tiles = 46;
      let labirinth_total_vertica_tiles = 25;
      let tile_width : number = 30; 
      let tile_height : number = 30;

      let labyrinth : Array<string> = new Array<string>();
          //                       1         2         3         4
          //              123456789012345678901234567890123456789012345678
          labyrinth.push("")  
          labyrinth.push("")  
          labyrinth.push("             111111  11  11   11111 ")  
          labyrinth.push("               11    11  11  11     ")
          labyrinth.push("               11    111111  1111   ")
          labyrinth.push("               11    11  11  11     ")
          labyrinth.push("               11    11  11   11111 ")
          labyrinth.push("")
          labyrinth.push("")
          labyrinth.push("")
          labyrinth.push("          111111   1111   11   11  11  11 ")
          labyrinth.push("            11    11  11  1111 11  11 11  ")
          labyrinth.push("            11    111111  11 1111  111    ")
          labyrinth.push("            11    11  11  11  111  11 11  ")  
          labyrinth.push("            11    11  11  11   11  11  11 ")  
          labyrinth.push("")
          labyrinth.push("")
          labyrinth.push("")
          labyrinth.push("           11111   1111   111  111   11111")
          labyrinth.push("          11      11  11  11 11 11  11    ")
          labyrinth.push("          11  11  111111  11    11  11111 ")
          labyrinth.push("          11   11 11  11  11    11  11    ")
          labyrinth.push("           111111 11  11  11    11   11111")
          labyrinth.push("")
          labyrinth.push("")
          labyrinth.push("")
          //              123456789012345678901234567890123456789012345678
          let line_counter : number =1
          let pos_y =0;
          labyrinth.forEach(map =>{
            let pos : number =0;
            let pos_x : number =0;
    
            for(pos; pos<map.length; pos++){
              if(map.substr(pos,1)=="1"){
                // this._labyrinth.push(new objects.Barrier(this.assetManager, (pos)*tile_width, line_counter*tile_height+64 ))
                this._labyrinth.push(new objects.Barrier(this.assetManager,1, pos_x, pos_y, false ));
              }
              pos_x +=tile_width; 
            }
            line_counter++; 
            pos_y += tile_height;
          });
        }
  }
}
