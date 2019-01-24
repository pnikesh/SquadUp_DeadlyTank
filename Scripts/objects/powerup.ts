module objects {
    export class PowerUp extends objects.GameObject {
        // private instance variables
        private assetManager : createjs.LoadQueue;
        private lastTime : number;
        private isActive: boolean;
        private counter:number;
        private limit_x:number;
        private limit_y:number;
        private cycle:number;
        private powerupType:string;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageName:string="powerupOil", powerupType:string = "powerupOil") {
            super(assetManager, imageName);
            this.x=-100;
            this.y=-100;
            // this.limit_x = limit_x;
            // this.limit_y=limit_y;
            this.limit_x = 1500;
            this.limit_y= 800;
            this.cycle = Math.round(Math.random()*5400); // Defines how long each one is going to take to show up
            this.visible = false;
            this.counter =0;
            this.name = powerupType;
            this.health = 7;
            this.Start();
        }

        //Public Methods
        public Start():void {

        }

        public Update():void {
            this.counter++;  
            //console.log("Cycle : " + this.cycle + "  // Counter : "+ this.counter);
            if(this.counter >= this.cycle){
                this.cycle = Math.round(Math.random()*5400); // Defines how long each one is going to take to show up
                this.setPosition();
                this.visible=true;
                this.counter =0;
                createjs.Sound.play("new_powerup_snd");

            }

            if(this.isColliding){
                createjs.Sound.play("powerup_snd");

                this.counter=0;
                this.isColliding = false;
                this.visible = false;
                this.x=-100;
                this.y=-100
            }

        }
        private setPosition():void{
            do{
                this.x = Math.round(Math.random()*this.limit_x);
                this.y = Math.round(Math.random()*this.limit_y);

                if(this.x- this.getBounds().width*0.5<1 || this.x- this.getBounds().width*0.5>1500 ||  // checks horizontal boundaries
                this.y- this.getBounds().height*0.5<1 || this.y- this.getBounds().height*0.5>800  ) {   // checks vertical boundaries
                    this.isColliding = true;
                }

                //Checks if the new position is already occupied
                let objectDetected : objects.GameObject;
                for(objectDetected  of objects.Game.objectsMap){
                    if((objectDetected.name.toUpperCase() =="BARRIER" || objectDetected.name.toUpperCase() =="POWERUP") 
                        && objectDetected != this)
                    {
                        managers.Collision.Check(objectDetected, this);
                        if(this.isColliding && objectDetected != this) break;
                    }
                }
            }while(this.isColliding)

        }

        public decreaseHealth(damage:number=1){
            this.health--;
            if(this.health<=0) this.isColliding=true;
        }
    }
}