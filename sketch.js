var player,playerimg,form,bgimg,bgimg2,role,cafe,cafeimg,standImg,rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,ledge,redge,tedge,bedge;
var name=null;
var gameState='start';
function preload(){
    bgimg=loadImage('BG.png')
    playerimg=loadAnimation('walk2.png','walk3.png','walk4.png','walk5.png')
    cafeimg=loadImage('cafe.png')
    standImg=loadImage('walk1.png')
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    form=new Form();
    if (gameState==='start'){
        
        background(bgimg)
       
        form.display()
        console.log("gamestate is start");
       
    }
    ledge=createSprite(0,displayHeight/2,1,displayHeight)
    redge=createSprite(displayWidth,displayHeight/2,1,displayHeight)
    tedge=createSprite(displayWidth/2,0,displayWidth,1)
    bedge=createSprite(displayWidth/2,displayHeight,displayWidth,1)
    
    
}
function draw(){
    
    
   
    if (gameState==='play'){
       
       // textSize(40)
       // fill("red")
       // text(role,displayWidth/2,displayHeight/2-400)
        player.depth=cafe.depth+1
        
        play()
        rect1=createSprite(390,150,10,300)
        rect2=createSprite(390,displayHeight-150,10,300)
        rect3=createSprite(1150,250,10,500)
        rect4=createSprite(1150,displayHeight-100,10,200)
        player.collide(rect1)
        player.collide(rect2)
        player.collide(rect3)
        player.collide(rect4)
        rect5=createSprite(150,300,300,10)
        rect6=createSprite(240,displayHeight-300,300,10)
        rect7=createSprite(1350,displayHeight-200,200,10)
        rect8=createSprite(1300,500,300,10)


    }
    drawSprites()
    if(gameState==='play'){
        fill('white')
        text(name,player.x-10,player.y-50)
        textSize(20)
        text('You are : '+role,displayWidth/2,20)
        player.bounceOff(redge)
        player.bounceOff(ledge)
        player.bounceOff(tedge)
        player.bounceOff(bedge)
    }
   
    
}
function getRole(){
    player=createSprite(displayWidth/2,displayHeight/2,20,20);
    player.addImage("stand",standImg);
    player.addAnimation('running',playerimg);

    player.scale=.5
    var rand = Math.round(random(1,3));
    switch(rand) {
   //   case 1: role='IMPOSTER';
   //           break;
        case 1:role='CrewMate'
        break;
      case 2: role='CrewMate';
              break;
      case 3: role='CrewMate';
              break;
    default:break;
    }
    
}
function play(){
    player.changeImage("stand",standImg);
    

    if(keyDown("w")) {
      
        player.y = player.y-3;
        player.changeAnimation('running',playerimg);
      }
      if (keyDown("s")) {
        
       player.y =player.y + 3;
       player.changeAnimation('running',playerimg);
        
      }
      if (keyDown("d")) {
       
      player.x=player.x+ 3;
      player.changeAnimation('running',playerimg);
     
      }
      if (keyDown("a")) {
        
        player.x=player.x -3;
        player.changeAnimation('running',playerimg);
    }
    

}