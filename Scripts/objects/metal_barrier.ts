module objects {
    export class MetalBarrier extends objects.GameObject {
        // private instance variables
        private assetManager : createjs.LoadQueue;
        public barrier_type: string;
        public destructible: boolean;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, barrier_type:string, x:number , y:number, destructiblet: boolean=true) {
            super(assetManager, barrier_type);
            this.x=x;
            this.y=y;
            this.health=3;
            this.barrier_type= barrier_type;
            this.name = "barrier"
            this.destructible= destructiblet;
            }

        //Public Methods
        public Start():void {
        }

        public Update():void {
            if(this.health==2){
                this.image = new createjs.Bitmap("./assets/images/barriers/metal_barrier_2.png").image;
            }
            else if(this.health==1){
                this.image = new createjs.Bitmap("./assets/images/barriers/metal_barrier_3.png").image;
            }
            else if(this.health<=0){
                this.x=-100;
                this.y=-100;
                this.visible=false;
           }
        }

        public setHealth(value:number=-1){
            if(this.destructible) this.health += value;

        }
    }
}