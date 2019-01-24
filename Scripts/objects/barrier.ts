module objects {
    export class Barrier extends objects.GameObject {
        // private instance variables
        private assetManager : createjs.LoadQueue;
        public barrier_type: number;
        public destructible: boolean;

        // Constructor
        // constructor(assetManager: createjs.LoadQueue, barrier_type:string, x:number , y:number, destructiblet: boolean=true) {
        constructor(assetManager: createjs.LoadQueue, barrier_type:number, x:number , y:number, destructible: boolean=true) {
                super(assetManager, barrier_type==config.Scene.PLAY1?"barrier" : barrier_type==config.Scene.PLAY2?"rock_barrier":barrier_type==config.Scene.PLAY3?"metal_barrier":"barrier" );
            this.x=x;
            this.y=y;
            this.health=3;
            this.barrier_type= barrier_type;
            this.name = "barrier"
            this.destructible= destructible;
            if(!destructible && barrier_type == config.Scene.PLAY1 ){
                this.image = new createjs.Bitmap("./Assets/images/barriers/brick_big_undestructible.png").image;
            } else if(!destructible && barrier_type == config.Scene.PLAY2 ){
                this.image = new createjs.Bitmap("./Assets/images/barriers/rock_barrier_undestructible.png").image;
            }else if(!destructible && barrier_type == config.Scene.PLAY3 ){
                this.image = new createjs.Bitmap("./Assets/images/barriers/metal_barrier_undestructible.png").image;
            }

        }

        //Public Methods
        public Start():void {
        }

        public Update():void {
            let barrier_destroyed1: string;
            let barrier_destroyed2: string;
            switch(this.barrier_type){
                case config.Scene.PLAY1:
                    barrier_destroyed1="./assets/images/barriers/brick_big_2.png";
                    barrier_destroyed2="./assets/images/barriers/brick_big_3.png";
                break;
                case config.Scene.PLAY2:
                    barrier_destroyed1="./assets/images/barriers/rock_barrier_2.png";
                    barrier_destroyed2="./assets/images/barriers/rock_barrier_3.png";
                break;
                case config.Scene.PLAY3:
                    barrier_destroyed1="./assets/images/barriers/metal_barrier_2.png";
                    barrier_destroyed2="./assets/images/barriers/metal_barrier_3.png";
                break;
                default:
                    barrier_destroyed1="./assets/images/barriers/brick_big_2.png";
                    barrier_destroyed2="./assets/images/barriers/brick_big_3.png";
        }
            
            if(this.health==2){
              this.image = new createjs.Bitmap(barrier_destroyed1).image;
            }
            else if(this.health==1){
                this.image = new createjs.Bitmap(barrier_destroyed2).image;
            }
            else if(this.health<=0){
                this.x=-100;
                this.y=-100;
                this.visible=false;
            }
        }

        public setHealth(value:number=-1){
            // if(this.destructible) this.health += value;
            if(this.destructible) super.setHealth(value);

        }
    }
}