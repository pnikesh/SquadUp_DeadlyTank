module objects {
    export class Transition extends objects.GameObject {
      // private instance variables

  
      // public properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager,"transition");
        this.scaleX=0;
        this.scaleY=0;
        
      }
  
      // private methods
  
      // reset the objects location to some value
      private _reset():void {
        
      }
  
      // move the object to some new location
      private _move():void {
        
      }
  
      // check to see if some boundary has been passed
      private _checkBounds():void {
      }
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
          let i =0;
          for(i=0;i<=100;i++){
            this.scaleX=i;
            this.scaleY=i;
            let k =0;
            for(k=0;k<=10000;k++){
            }
  
        }

      }
  
      // updates the game object every frame
      public Update():void {
      }
    }
  }
  