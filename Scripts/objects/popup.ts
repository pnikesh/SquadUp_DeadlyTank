module objects {
    export class PopUp extends objects.GameObject {
        // private instance variables
        private assetManager : createjs.LoadQueue;
        private lastTime : number;
        private isActive: boolean;
        private counter:number;
        private limit_x:number;
        private limit_y:number;
        private cycle:number;
        private start: number;
        private timeLapse: number;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageName:string="popUpOil", popUpType:string = "popUpOil") {
            super(assetManager, imageName);
            this.x=-100;
            this.y=-100;
            // this.limit_x = limit_x;
            // this.limit_y=limit_y;
            this.limit_x = 1500;
            this.limit_y= 800;
            this.cycle = Math.round(Math.random()*2700); // Defines how long each one is going to take to show up
            this.visible = false;
            this.counter =0;
            this.name = popUpType;
            this.health = 7;
            var d = new Date();
            this.start = d.getTime();
            this.timeLapse = 60000 * Math.random()
            this.Start();
        }

        //Public Methods
        public Start():void {

        }

        public Update():void {
            var d = new Date();
            var end = d.getTime();

            console.log( end - this.start )
            this.counter++;  
            //console.log("Cycle : " + this.cycle + "  // Counter : "+ this.counter);
            // if(this.counter >= this.cycle){
            if(this.start< end && end - this.start >= this.timeLapse){
                    // this.cycle = Math.round(Math.random()*5400); // Defines how long each one is going to take to show up
                this.setPosition();
                this.visible=true;
                this.counter =0;
                createjs.Sound.play("new_pop_up_snd");
                var d = new Date();
                this.start = d.getTime();
                this.timeLapse = 60000 * Math.random()

            }

            if(this.isColliding){
                createjs.Sound.play("pop_up_snd");

                this.counter=0;
                // this.cycle = Math.round(Math.random()*2700); // re-efines how long each one is going to take to show up
                this.start = end + 20000 * Math.round(Math.random()); // re-efines how long each one is going to take to show up
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

                if(this.x- this.getBounds().width*0.5<1 || this.x- this.getBounds().width*0.5>1500 ||  this.x< 15 ||  this.x>1485 || // checks horizontal boundaries
                this.y- this.getBounds().height*0.5<1 || this.y- this.getBounds().height*0.5>800 || this.y < 5 || this.y>780 ) {   // checks vertical boundaries
                    this.isColliding = true;
                }

                //Checks if the new position is already occupied
                let objectDetected : objects.GameObject;
                for(objectDetected  of objects.Game.objectsMap){
                    // if((objectDetected.name.toUpperCase() =="BARRIER" || objectDetected.name.toUpperCase() ==this.name) 
                    //     && objectDetected != this)
                    if(objectDetected != this)
                    {
                        managers.Collision.Check(objectDetected, this);
                        // if(this.isColliding && objectDetected != this) break;
                        if(this.isColliding) break;
                    }
                }
            }while(this.isColliding)

        }

        public setHealth(value:number=-1){
            this.health += value;
            if(this.health<=0){
                 this.isColliding=true;
                 this.x=-100;
                 this.y=-100;
            }

        }
    }
}