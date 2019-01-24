module managers{
    export class NewKeyboard{
        // private Instance Varables

        // public instance variables
        public moveForward: boolean;
        public moveBackward: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public shoot: boolean;
        public enabled: boolean;
        public paused: boolean;
        public escape: boolean;
        public controlSet :config.Movement;
        public anyKey:boolean;
        public enter:boolean;
        public home: boolean;
        public pgUp: boolean;

        // constructors
        constructor(up:number= config.KeyCode.Up_Arrow, down: number= config.KeyCode.Down_Arrow , left:number= config.KeyCode.Left_Arrow, right:number= config.KeyCode.Right_Arrow, fire:number= config.KeyCode.Space_Bar){
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
            this.controlSet = new config.Movement();
            this.controlSet.set_AllKeys(up,down,left,right,fire);
        }

        // private methods

        // public methods
        public onKeyDown(event:KeyboardEvent): void{
            switch(event.keyCode){
                case this.controlSet.UP:
                    this.moveForward = true;
                    break;
                case this.controlSet.LEFT:
                    this.moveLeft = true;
                    break;
                case this.controlSet.DOWN:
                    this.moveBackward = true;
                    break;
                case this.controlSet.RIGHT:
                    this.moveRight = true;
                    break;
                case this.controlSet.SHOOT:
                    this.shoot = true;
                    break;
                case config.KeyCode.Pause_Break:
                    this.paused=true;
                    break;
                case config.KeyCode.Escape:
                    this.escape = true;
                    break;
                case config.KeyCode.Enter:
                    this.enter = true;
                    break;
                case config.KeyCode.Home:
                    this.home = true;
                    break;
                case config.KeyCode.Page_Up:
                    this.pgUp = true;
                    break;

            }
            this.anyKey=true;
        }

        public onKeyUp(event:KeyboardEvent): void{
            switch(event.keyCode){
                case this.controlSet.UP:
                    this.moveForward = false;
                    break;
                case this.controlSet.LEFT:
                    this.moveLeft = false;
                    break;
                case this.controlSet.DOWN:
                    this.moveBackward = false;
                    break;
                case this.controlSet.RIGHT:
                    this.moveRight = false;
                    break;
                case this.controlSet.SHOOT:
                    this.shoot = false;
                    break;
                case config.KeyCode.Pause_Break:
                    this.paused=false;
                    break;
                case config.KeyCode.Escape:
                    this.escape = false;
                    break;
                case config.KeyCode.Enter:
                    this.enter = false;
                    break;
                case config.KeyCode.Home:
                    this.home = false;
                    break;
                case config.KeyCode.Page_Up:
                    this.pgUp = false;
                    break;
            }
            this.anyKey=false;
        }
    }
}