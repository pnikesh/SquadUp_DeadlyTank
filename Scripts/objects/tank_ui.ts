module objects {
    export class Tank_UI extends objects.GameObject {
        // private instance variables
        private assetManager : createjs.LoadQueue;
        private newtank: objects.NewTank;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, image_type:string, x:number , y:number) {
            super(assetManager, image_type);
            this.x=x;
            this.y=y;
        }

        //Public Methods
        public Start():void {
            
        }

        public Update():void {
            
        }

        public decreaseUiHealth(damage:number=0.1){
            this.scaleX -= damage;
        }
    }
}