module objects {
    export class StatusFuel extends objects.GameObject {
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
        

        // Public Properties
        public isFired: boolean = false;


        // Constructor
            constructor(assetManager: createjs.LoadQueue, 
                x:number, 
                y:number,
                direction:string="down") 
            {
                 super(assetManager,"status_fuel");
                
                
                //Difining the object position on screen
                this.x = x; 
                this.y = y; 
                this.tank_direction = direction;
            }


        // Public Methods
        public updateCache(){
        } 

        public positioning(x: number, y : number, direction: string){
            
            if(direction ==  "down"){
                    this.x = x ;
                    this.y = y+3;
            } else if(direction =="up"){
                    this.x = x ;
                    this.y = y-3;
            } else if(direction =="left"){
                    this.x = x ;
                    this.y = y+3;
            } else { // right
                    this.x = x ;
                    this.y = y+3;
            }
            
        }
        private move(){

        }

        public CheckBounds(){

        }

    }
}
