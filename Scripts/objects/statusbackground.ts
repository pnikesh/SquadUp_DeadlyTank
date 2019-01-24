module objects {
    export class StatusBackground extends objects.GameObject {
        // Private Instance Variables
        private updateRate : number = 20;
        private angle : number =0;
        private xCartesianActual : number = 0;// register the actual x vector o the line in cartesian plan
        private yCartesianActual : number = 0;// register the actual x vector o the line in cartesian plan

        private canvasLeft : number;
        private canvasTop : number;
        private canvasWidth : number;
        private canvasHeight :number;
        private tank_direction : string;
        public statusHealth : StatusHealth;        
        public statusFuel : StatusFuel;        

        // Public Properties
        public isFired: boolean = false;


        // Constructor
            constructor(assetManager: createjs.LoadQueue, 
                x:number, 
                y:number,
                direction:string="down") 
            {
                 super(assetManager,"status_background");
                
                
                //Difining the object position on screen
                // this.x = x; 
                // this.y = y; 
                this.statusHealth = new objects.StatusHealth(assetManager, this.x, this.y, this.tank_direction)
                this.statusFuel = new objects.StatusFuel(assetManager, this.x, this.y, this.tank_direction)
                this.positioning(x,y, direction)
                this.tank_direction = direction;
            }


        // Public Methods
        public updateCache(){
        } 

        public positioning(x: number, y : number, direction: string){
            if(direction ==  "down"){
                    this.x = x;
                    this.y = y-25;
            } else if(direction =="up"){
                    this.x = x;
                    this.y = y+25;
            } else if(direction =="left"){
                    this.x = x;
                    this.y = y-25;
            } else { // right
                    this.x = x;
                    this.y = y-25;
            }

            this.statusHealth.positioning(this.x,this.y,direction);
            this.statusFuel.positioning(this.x,this.y,direction);
        }
        private move(){

        }

        public CheckBounds(){

        }

    }
}
