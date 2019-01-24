module objects {
    export class NewTank extends objects.GameObject {
        // private instance variables
        private assetManager : createjs.LoadQueue;
        private fuelConsumeRate : number = -20; // 10 default
        /////////////////////////////////////////////////////////////////////////////
        // PUBLIC PROPERTIES
        /////////////////////////////////////////////////////////////////////////////
        public fuel : number ;
        public health : number ;
        public fuel_ini : number = 100000;
        public health_ini : number = 10;
        public score : number ;
        public scoreStatus : Label;
        // Status bars

        public statusBackgroud : StatusBackground;


        // BULLETS
        public _bullets : Array<objects.NewBullet> = new Array<objects.NewBullet>();  // all its bullets are already instantiated
        public nextBulletCounter : number =0; // Its a counter to delay the shooting process
        public _NextBullet:number = 30; // Its the delayer, where the nextBulletCounter have to reach before shoot 
        // TANK CONTROL
        public control : managers.NewKeyboard;
        public _up: number;
        public _down: number;
        public _left: number;
        public _right: number;
        public _fire: number;
        public _direction : string;                        

        // Constructor
        constructor(assetManager: createjs.LoadQueue, tankNumber : number,  x:number , y:number, ammoQty:number ) {
            
                    super(assetManager, tankNumber==1?"tank1":"tank2");
            this.assetManager = assetManager;
            this.x=x;
            this.y=y;
            let counter : number =0; 
            // this.name = this.name + tankNumber;
            for(counter=0; counter<ammoQty; counter ++){
                this._bullets.push(new objects.NewBullet(this.assetManager, this.name));
            }
            
            switch(tankNumber){
                case 1:
                    this._up = config.KeyCode.Up_Arrow;
                    this._down = config.KeyCode.Down_Arrow;
                    this._left = config.KeyCode.Left_Arrow;
                    this._right = config.KeyCode.Right_Arrow;
                    this._fire =  config.KeyCode.Space_Bar;
                    break;
                case 2:
                    this._up = config.KeyCode.W;
                    this._down = config.KeyCode.S;
                    this._left = config.KeyCode.A;
                    this._right = config.KeyCode.D;
                    this._fire =  config.KeyCode.Q;
                    break;
                case 3:
                    this._up = config.KeyCode.Up_Arrow;
                    this._down = config.KeyCode.Down_Arrow;
                    this._left = config.KeyCode.Left_Arrow;
                    this._right = config.KeyCode.Right_Arrow;
                    this._fire =  config.KeyCode.Numpad_0;
                    break;
                default:
                    this._up = config.KeyCode.Up_Arrow;
                    this._down = config.KeyCode.Down_Arrow;
                    this._left = config.KeyCode.Left_Arrow;
                    this._right = config.KeyCode.Right_Arrow;
                    this._fire =  config.KeyCode.Space_Bar;
            }
    
            this.control = new managers.NewKeyboard(this._up, this._down, this._left, this._right, this._fire);

            this.statusBackgroud = new objects.StatusBackground( this.assetManager, this.x , this.y);
            this.scoreStatus = new Label("Score : " + this.score,"14px","Consolas","#0000FF",this.x+20, this.y-20, false);

            // Checks the starting position on screen and applies the right rotation on the tank
            if(  this.y <= 100 ){  // screen upper-left side check
                    this.rotation =180;
            } else if( this.x <=750 && this.y >100 && this.y <700 ){   // Screen upper-right side check
                    this.rotation =90;
            } else if( this.x > 750 && this.y >100 && this.y <700){   // Screen down-right side check
                    this.rotation =270;
            } else {   // Screen down-left side check
                    this.rotation =0;
            }
            this.Start();

        }
    
        // private methods
    
        // public methods
    
        // Initializes variables and creates new objects
        public Start():void {
            this.fuelConsumeRate =-10;
            this.fuel = this.fuel_ini;
            this.health = this.health_ini;
            this.score=0;
        }
    
        // updates the game object every frame
        public UpdateTank():void {
            // tank's previous position in order to be able to retrieve in case of new position's collision
            let tank_previous_x = this.x; 
            let tank_previous_y = this.y; 

            this.shoot(); // change the status (bullet.fired) of the next available bullet from false to true
            this.Move();  // updates the tank movment 
            this.checkTankCollision(tank_previous_x, tank_previous_y); // checks whether there was a tank collision when it assumes its new position (x,y)
            this.CheckBounds(); // checks whether the tank is on the screen boundaire 
            this.bulletsMovement(this); // update this tank's the bullets movements on the screen
        }
    
        // reset the objects location to some value
        public Reset():void {
    
        }
    
        // move the object to some new location
        public Move():void {
            let pace = 2.5;
            if(this.fuel <= 0){
                pace = 0;
            }
            if((this.control.moveLeft && this.control.moveForward) ||
                (this.control.moveRight && this.control.moveForward) || 
                (this.control.moveLeft && this.control.moveBackward) ||
                (this.control.moveRight && this.control.moveBackward)){
                    return;
                }

            // Keyboard Controls
            if(this.control.moveLeft){
                createjs.Sound.play("tank_engine");
                this.setFuel( this.fuelConsumeRate);
                this.x-=pace;
                this.rotation =270;
                this._direction="left";
            }
            if(this.control.moveRight){
                createjs.Sound.play("tank_engine");
                this.setFuel( this.fuelConsumeRate);
                this.x+=pace;
                this.rotation =90;
                this._direction="right";
            }
            if(this.control.moveBackward){
                createjs.Sound.play("tank_engine");
                this.setFuel( this.fuelConsumeRate);
                this.y+=pace;
                this.rotation =180;
                this._direction="down";
            }
            if(this.control.moveForward){
                createjs.Sound.play("tank_engine");
                this.setFuel( this.fuelConsumeRate);
                this.y-=pace;
                this.rotation =0;
                this._direction="up";
            }

            this.statusBackgroud.positioning(this.x, this.y, this._direction);
            this.scoreStatus.updateCache("Score : " + this.score,this.x+20, this.y-20);
        }
    
        public MoveAutomatically():void {
            
            let pace = 5;
            if( this.x <= 750 && this.y <= 400 ){  // screen upper-left side check
                if(this._direction=="up"){
                    this.rotation =0;
                    this.y-=pace;
                }else if(this._direction=="right"){
                    this.rotation =90;
                    this.x+=pace;
                }else {
                    this.rotation =0;
                    this.y-=pace;
                }

            } else if( this.x > 750 && this.y <= 400 ){   // Screen upper-right side check
                if(this._direction=="down"){
                    this.rotation =180;
                    this.y+=pace;
                }else if(this._direction=="right"){
                    this.rotation =90;
                    this.x+=pace;
                }else {
                    this.rotation =0;
                    this.y-=pace;
                }
            } else if( this.x > 750 && this.y > 400 ){   // Screen down-right side check
                if(this._direction=="down"){
                    this.rotation =180;
                    this.y+=pace;
                }else if(this._direction=="left"){
                    this.rotation =270;
                    this.x-=pace;
                }else {
                    this.rotation =180;
                    this.y+=pace;
                }
            } else {   // Screen down-left side check
                if(this._direction=="up"){
                    this.rotation =0;
                    this.y-=pace;
                }else if(this._direction=="left"){
                    this.rotation =270;
                    this.x-=pace;
                }else {
                    this.rotation =180;
                    this.y+=pace;
                }
            }
            this.CheckBounds(true);    
            // Keyboard Controls
        }
        public setFuel(value :number =5){
            super.setFuel(value);
            this.fuelStatusUpdate(this.fuel);
          }
      
        public fuelStatusUpdate(value:number):void{
            let percent = this.fuel /this.fuel_ini;

            if(percent >1) percent=1;
            if(percent<0) percent=0;
            this.statusBackgroud.statusFuel.scaleX =percent;
        }
        public setHealth(value :number =5){
            super.setHealth(value);
            this.healthStatusUpdate(this.fuel);
          }
        public healthStatusUpdate(value:number):void{
            let percent = this.health-1 /this.health_ini;
            if(percent >1) percent=1;
            if(percent<0) percent=0;
            this.statusBackgroud.statusHealth.scaleX =percent;
        }
        //public scoreStatusUpdate(value:number):void{}
   
        // check to see if some boundary has been passed
        public CheckBounds(automatic:boolean=false):void {

            // right boundary
            if(this.x > 1500 -  this.halfWidth) {
                this.x = 1500 - this.halfWidth;
                this._direction = "down";
            }
            // left boundary
            if(this.x <= this.halfWidth) {
                this.x = this.halfWidth;
                this._direction = "up";
            }
            
            // bottom boundary
            if(this.y > 800 -  this.halfHeight) {
                this.y = 800 - this.halfHeight;
                this._direction = "left";
            }
    
            // top boundary
            if(this.y < this.halfHeight) {
                this.y = this.halfHeight;
                this._direction = "right";

            }

        }

        public getAngle():number{

            if(this.rotation/90<=1) {
                return 90-this.rotation;
            } 
            else if (this.rotation/90 <=2) {
                return 270+180-this.rotation;
            }
            else if (this.rotation/90 <=3) {
                return 180+270-this.rotation;
            } else {
                return 90+360-this.rotation;
            }
            
        }

               
        public shoot():void{
            this.nextBulletCounter++;
            if(!this.control.shoot) return;
            if(this.nextBulletCounter>=this._NextBullet){
                if(this.control.shoot){
                    let bullet : NewBullet;
                    for(bullet of this._bullets){
                        if(!bullet.isFired){
                            bullet.fire(this.x , this.y,this.getAngle());
                            createjs.Sound.play("tank_fire");
                            break;
                        }
                    }
                }
                this.nextBulletCounter=0;
            }

        }

        private checkTankCollision(previous_x : number , previous_y : number):void{
            // Checks all the objects registered for collision check 
            let objectDetected : objects.GameObject;
            for(objectDetected  of objects.Game.objectsMap){
                if ( objectDetected != this){
                    // if(objectDetected.name.toUpperCase() !="BULLET" || (objectDetected.name.toUpperCase() =="POWERUP" &&
                    if(objectDetected.visible==true){
                        managers.Collision.Check(objectDetected, this);
                        if(this.isColliding && objectDetected != this) break;
                    }
                }
            }
            
            if(this.isColliding){
                this.x =  previous_x;
                this.y =  previous_y; 
                this.isColliding = false;
            }
        }

        private bulletsMovement(tank: objects.NewTank){
            this._bullets.forEach(bullet=>{
                if(bullet.isFired) bullet.bulletMovement(tank);
                
            });
        }

    }
}