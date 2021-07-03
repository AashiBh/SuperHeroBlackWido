var canvas = new fabric.Canvas('myCanvas');
var HeightBlock=10;
var WidthBlock=20;
var PlayerY=18;
var PlayerX=18;
var PlayerObjects=" ";
var Objects=" ";
var Img="BlackWidowScarlettJohansson.png";
function PLAYER(){
    fabric.Image.fromURL("BlackWidowScarlettJohansson.png", function(Img){
        PlayerObjects=Img;
        PlayerObjects.scaleToWidth(100);
        PlayerObjects.scaleToHeight(100);
        PlayerObjects.set({     
            top: PlayerY , 
            Left: PlayerX

                });
                canvas.add(PlayerObjects);
    });
}
function PLAYER2(GET_IMAGEE){
    fabric.Image.fromURL(GET_IMAGEE, function(Img){
        Objects=Img;
        Objects.scaleToWidth(WidthBlock);
        Objects.scaleToHeight(HeightBlock);
        Objects.set({
            top: PlayerY , 
            Left: PlayerX

                });
                canvas.add(Objects);
    });
}
window.addEventListener("keydown" , MineyKeyDown)
    function MineyKeyDown(a){
      keypressed=a.keyCode;
      console.log(keypressed); 
      if(a.shiftKey==true&&keypressed=="80"){
          WidthBlock=WidthBlock+10;
          HeightBlock=HeightBlock+10;
          document.getElementById("current_width").innerHTML = WidthBlock; 
          document.getElementById("current_height").innerHTML = HeightBlock;
      }
      if(a.shiftKey==true&&keypressed=="77"){
        WidthBlock=WidthBlock-10;
        HeightBlock=HeightBlock-10;
        document.getElementById("current_width").innerHTML = WidthBlock; 
        document.getElementById("current_height").innerHTML = HeightBlock;
    }
    if(keypressed=="68"){
    PLAYER2("BlackDressGoldBelt.png");
    console.log ("dress");
    }    
    if(keypressed=="72"){
        PLAYER2("CherryRedHeels.png");
        console.log ("heels");
        }  
        if(keypressed=="66"){
           PLAYER2("GoldHeartBracelet.png");
            console.log ("bracelet");
            }  
       if(keypressed=="38"){
                Up();
                console.log ("UP");
                }
         if(keypressed=="40"){
                Down();
              console.log ("DOWN");
                    }
             if(keypressed=="39"){
                 Right();
                 console.log ("RIGHT");
                        }
                 if(keypressed=="37"){
                      Left();
                     console.log ("LEFT");
                            }
         
        }        
        function Up(){
            if(PlayerY>=0){
                PlayerY=PlayerY-HeightBlock;
                console.log("Up Fuction");
                canvas.remove(PlayerObjects);
                PLAYER();
            }
        }       
        function Down(){
            if(PlayerY<=600){
                PlayerY=PlayerY+HeightBlock;
                console.log("Down Fuction");
                canvas.remove(PlayerObjects);
                PLAYER();
            }
        }       
        function Right(){
            if(PlayerX<=700){
                PlayerX=PlayerX+WidthBlock;
                console.log("Right Fuction");
                canvas.remove(PlayerObjects);
                PLAYER();
            }        
        }
        function Left(){
            if(PlayerX>=0){
                PlayerX=PlayerX-WidthBlock;
                console.log("Left Fuction");
                canvas.remove(PlayerObjects);
                PLAYER();
            }
        }  
            