var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2, objectOwnerOfObject2) {
            //create 2 Vec2 Objects
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            var ref = math.Vec2.Distance(P1, P2);
            var tnk = object2.name.substr(0, 4).toUpperCase();
            var bar = object1.name.toUpperCase();
            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight) * 0.95) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    if (object2.name.toUpperCase() == "BULLET") {
                        if (object1.name.toUpperCase() == "TANK1" || object1.name.toUpperCase() == "TANK2") {
                            object1.setHealth(-1);
                            objectOwnerOfObject2.setScore(100);
                        }
                        else if (object1.name.toUpperCase() == "BARRIER") {
                            createjs.Sound.play("barrier_shot");
                            object1.setHealth(-1);
                            // if(object1.health==0){
                            //     object1.visible=false;
                            //     object1.x=-100;
                            // }
                        }
                        else if (object1.name.toUpperCase() == "POPUPLANDMINE") {
                            createjs.Sound.play("barrier_shot");
                            object1.setHealth(-1);
                            // if(object1.health==0){
                            //     object1.visible=false;
                            //     object1.x=-100;
                            // }
                        }
                    }
                    else if (object1.name.toUpperCase() == "POPUPOIL") {
                        object2.setFuel(40000);
                        object1.isColliding = true; // In the next update the powerup will be not visible
                        object2.isColliding = false;
                    }
                    else if (object1.name.toUpperCase() == "POPUPLIFE") {
                        if (object2.fuel < 40000)
                            object2.fuel += 40000;
                        else
                            object2.health++;
                        object1.isColliding = true; // In the next update the powerup will be not visible
                        object2.isColliding = false;
                    }
                    else if (object1.name.toUpperCase() == "POPUPLANDMINE") {
                        object2.health -= 3;
                        object1.isColliding = true; // In the next update the powerup will be not visible
                        object2.isColliding = false;
                    }
                    else if (object1.name.toUpperCase() == "POPUPSPEED") {
                        object2.health -= 3;
                        object1.isColliding = true; // In the next update the powerup will be not visible
                        object2.isColliding = false;
                    }
                    // else if (object2.name.substr(0,4).toUpperCase()=="TANK" && object1.name.toUpperCase()=="BARRIER"){
                    //     var obj1_ini_x = object1.x;
                    //     var obj1_end_x = object1.x+object1.getBounds().width;
                    //     var obj1_ini_y = object1.y;
                    //     var obj1_end_y = object1.y+object1.getBounds().height;
                    //     var obj2_ini_x = object2.x;
                    //     var obj2_end_x = object2.x+object2.getBounds().width;
                    //     var obj2_ini_y = object2.y;
                    //     var obj2_end_y = object2.y+object2.getBounds().height;
                    //     // Tank's HORIZONTAL movement checking : no object between ini_y and end_y
                    //     if(object2.rotation==270 || object2.rotation==90){ // check whether it is going toward left or right
                    //         // rotation effect over the boundaries
                    //         var obj2_end_y = object2.y+object2.getBounds().width;
                    //         var obj2_end_x = object2.x+object2.getBounds().height;
                    //         //checks whether either the top or the bottom of barrier is in the pathway
                    //         if ((obj1_ini_y >= obj2_ini_y && obj1_ini_y <= obj2_end_y) || // checking the barrier's top
                    //             (obj1_end_y >= obj2_ini_y && obj1_end_y <= obj2_end_y))   // checking the barrier's bottom
                    //         {
                    //             object2.isColliding= true;
                    //         } else {
                    //             object2.isColliding= false;
                    //         }
                    //     } 
                    //     else if(object2.rotation==180 || object2.rotation==0)
                    //     {
                    //         // Tank's VERTICAL movement checking : no object between ini_y and end_y
                    //         //checks whether either the top or the bottom of barrier is in the pathway
                    //         if ((obj1_ini_x >= obj2_ini_x && obj1_ini_x <= obj2_end_x) || // checking the barrier's top
                    //             (obj1_end_x >= obj2_ini_x && obj1_end_x <= obj2_end_x))   // checking the barrier's bottom
                    //         {
                    //             object2.isColliding= true;
                    //         } else {
                    //             object2.isColliding= false;
                    //         }
                    //     }
                    // }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map