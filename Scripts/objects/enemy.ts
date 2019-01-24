module objects {
    export class Enemy extends objects.GameObject {
        // private instance variables
        private assetManager : createjs.LoadQueue;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start();
        }

        //Public Methods
        public Start():void {
            this.x=500;
            this.y=200;
        }

        public Update():void {
        
        }
    }
}