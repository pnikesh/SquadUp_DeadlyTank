module objects {
    export class Terrain extends objects.GameObject {
      // private instance variables

  
      // public properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue, terrain_type: string) {
        super(assetManager,terrain_type);
        this.Start();
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
      }
  
      // updates the game object every frame
      public Update():void {
      }
    }
  }
  