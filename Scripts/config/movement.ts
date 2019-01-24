module config{
    export class Movement{
        // Not for changing
        public static PAUSE: number =19;
        public static EXIT: number = 27;//(ESC) 


        // Changeble Movement Keys
        public  UP: number = 38;
        public  DOWN: number = 40;
        public  LEFT: number = 37;
        public  RIGHT: number = 39;
        public  SHOOT: number = 32;


        public Set_UP_Key(up : number){
            this.UP = up;
        }
        public Set_DOWN_Key(down : number){
            this.DOWN = down;
        }
        public Set_LEFT_Key(left : number){
            this.LEFT = left;
        }
        public Set_RIGHT_Key(right : number){
            this.RIGHT = right;
        }
        public Set_FIRE_Key(shoot : number){
            this.SHOOT = shoot;
        }

        public set_AllKeys(up:number, down:number, left:number, right:number, shoot:number):void{
            this.Set_UP_Key(up);
            this.Set_DOWN_Key(down)
            this.Set_LEFT_Key(left)
            this.Set_RIGHT_Key(right);
            this.Set_FIRE_Key(shoot);
        }
    
    }
}