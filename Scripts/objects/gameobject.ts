module objects {
  export class GameObject extends createjs.Bitmap {
    // private instance variables
    protected _dx: number;
    protected _dy: number;

    // public properties
    public width: number;
    public height: number;
    public halfWidth: number;
    public halfHeight: number;
    public isColliding: boolean;
    public health: number;
    public fuel: number;
    public score:number;
    public movementPace:number;

    // constructors
    constructor(assetManager: createjs.LoadQueue, imageString:string) {
      super(assetManager.getResult(imageString));
      this.name = imageString;
      
      this._initialize();
  }
    // private methods
    private _initialize():void {
      this.width = this.getBounds().width;
      this.height = this.getBounds().height;
      this.halfWidth = this.width * 0.5;
      this.halfHeight = this.height * 0.5;
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this.isColliding = false;
    }

    // public methods
    public Start(): void {}

    public Update(): void {}

    public Reset():void {}

    public CheckBounds():void {}

    public Move():void {}

    public setHealth(value:number=-1){
      this.health += value;
      this.healthStatusUpdate(this.fuel);
    }

    public setScore(value :number =100){
        this.score += value;
        this.scoreStatusUpdate(this.fuel);
    }

    public setFuel(value :number =5){
      this.fuel += value;
      if(this.fuel<0) this.fuel=0;
      if(this.fuel>100000) this.fuel=100000
      this.fuelStatusUpdate(this.fuel);
    }
     ///////////////////////////////////////////////////
     // these methods implementation are for a 
     // child tank class can update the statusbars
     ///////////////////////////////////////////////////
     public fuelStatusUpdate(value:number):void{}
     public healthStatusUpdate(value:number):void{}
     public scoreStatusUpdate(value:number):void{}
     ///////////////////////////////////////////////////
    }
}
