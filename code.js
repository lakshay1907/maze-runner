var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e62091b6-d2a1-4106-8a6e-0fe3b3f99450","36879140-6d3b-47f5-97d9-5963007bcf64"],"propsByKey":{"e62091b6-d2a1-4106-8a6e-0fe3b3f99450":{"name":"fly_1","sourceUrl":null,"frameSize":{"x":21,"y":15},"frameCount":2,"looping":true,"frameDelay":12,"version":"5IVNvTOuchlQJcpMgC0xthx3._r3errG","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":30},"rootRelativePath":"assets/e62091b6-d2a1-4106-8a6e-0fe3b3f99450.png"},"36879140-6d3b-47f5-97d9-5963007bcf64":{"name":"bee_1","sourceUrl":null,"frameSize":{"x":19,"y":15},"frameCount":2,"looping":true,"frameDelay":12,"version":"GP.dmCdWDJTFQyaoKO21UkZp0QFG1e8.","loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":30},"rootRelativePath":"assets/36879140-6d3b-47f5-97d9-5963007bcf64.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var    = createSprite(140,15,10,10);
ball.setAnimation("bee_1");
var ball1 = createSprite(230,390,10,10);
ball1.setAnimation("bee_1");
 fill(255);
var rect0   = createSprite(30,200,3,340);
rect0.shapeColor="black";
var rect1  = createSprite(77,30,98,3);
rect1.shapeColor="black";
var rect2  = createSprite(120,370,180,3);
rect2.shapeColor="black";
var rect3  = createSprite(370,200,3,340);
rect3.shapeColor="black";
var rect4  = createSprite(270,30,200,3);
var rect5  = createSprite(312,370,117,3);
var rect6  = createSprite(125,42,3,25);
var rect7  = createSprite(75,57,38,3);
var rect8  = createSprite(93,70,3,25);
var rect9  = createSprite(173,82,160,3);
var rect10 = createSprite(180,70,3,23);
var rect11 = createSprite(190,60,23,3);
var rect12 = createSprite(252,70,3,23);
var rect13 = createSprite(315,60,40,3);
var rect14 = createSprite(335,70,3,23);
var rect15 = createSprite(315,80,40,3);
var rect16 = createSprite(45,80,30,3);
var rect17 = createSprite(110,105,3,50);
var rect18 = createSprite(80,110,55,3);
var rect19 = createSprite(145,95,3,25);
var rect20 = createSprite(157,106,25,3);
var rect21 = createSprite(220,100,3,40);
var rect22 = createSprite(257,100,80,3);
var rect23 = createSprite(294,118,3,80);
var rect24 = createSprite(108,130,40,3);
var rect25 = createSprite(170,170,3,130);
var rect26 = createSprite(272,130,50,3);
var rect27 = createSprite(200,170,60,3);
var rect28 = createSprite(350,130,40,3);
var rect29 = createSprite(329,117,3,30);
var rect30 = createSprite(315,157,40,3);
var rect31 = createSprite(335,245,3,180);
var rect32 = createSprite(318,335,35,3);
var rect33 = createSprite(275,340,3,60);
var rect34 = createSprite(126,155,3,50);
var rect35 = createSprite(92,180,70,3);
var rect36 = createSprite(60,170,3,25);
var rect37 = createSprite(73,160,30,3);
var rect38 = createSprite(100,200,3,40);
var rect39 = createSprite(157,234,25,3);
var rect40 = createSprite(50,242,40,3);
var rect41 = createSprite(143,300,3,135);
var rect42 = createSprite(50,315,40,3);
var rect43 = createSprite(70,293,3,45);
var rect44 = createSprite(100,350,3,45);
var rect45 = createSprite(122,254,40,3);
var rect46 = createSprite(120,275,3,45);
var rect47 = createSprite(253,353,3,35);
var rect48 = createSprite(235,335,35,3);
var rect49 = createSprite(217,310,3,50);
var rect50 = createSprite(235,285,40,3);
var rect51 = createSprite(255,245,3,90);
var rect52 = createSprite(278,200,45,3);
var rect53 = createSprite(300,255,3,110);
var rect54 = createSprite(148,196,40,3);
var rect55 = createSprite(188,197,35,3);
var rect56 = createSprite(179,309,3,120);
var rect57 = createSprite(190,218,40,3);
var rect58 = createSprite(125,15,3,33);
var rect59 = createSprite(170,10,3,45);
rect4.shapeColor="black";
rect5.shapeColor="black";
rect6.shapeColor="black";
rect7.shapeColor="black";
rect8.shapeColor="black";
rect9.shapeColor="black";
rect10.shapeColor="black";
rect11.shapeColor="black";
rect12.shapeColor="black";
rect13.shapeColor="black";
rect14.shapeColor="black";
rect15.shapeColor="black";
rect16.shapeColor="black";
rect17.shapeColor="black";
rect18.shapeColor="black";
rect19.shapeColor="black";
rect20.shapeColor="black";
rect21.shapeColor="black";
rect22.shapeColor="black";
rect23.shapeColor="black";
rect24.shapeColor="black";
rect25.shapeColor="black";
rect26.shapeColor="black";
rect27.shapeColor="black";
rect28.shapeColor="black";
rect29.shapeColor="black";
rect30.shapeColor="black";
rect31.shapeColor="black";
rect32.shapeColor="black";
rect33.shapeColor="black";
rect34.shapeColor="black";
rect35.shapeColor="black";
rect36.shapeColor="black";
rect37.shapeColor="black";
rect38.shapeColor="black";
rect39.shapeColor="black";
rect40.shapeColor="black";
rect41.shapeColor="black";
rect42.shapeColor="black";
rect43.shapeColor="black";
rect44.shapeColor="black";
rect45.shapeColor="black";
rect46.shapeColor="black";
rect47.shapeColor="black";
rect48.shapeColor="black";
rect49.shapeColor="black";
rect50.shapeColor="black";
rect51.shapeColor="black";
rect52.shapeColor="black";
rect53.shapeColor="black";
rect54.shapeColor="black";
rect55.shapeColor="black";
rect56.shapeColor="black";
rect57.shapeColor="black";
rect58.shapeColor="black";
rect59.shapeColor="black";
var gamestate = "serve";
function draw()
{
  
  background("green");
  createEdgeSprites();
  fill(255);
  
  if (gamestate==="serve") {
    fill(255);
          text("Press Yellow Button to serve",230,15);
          ball.x=150;
          ball.y=10;
         
        }
  if (keyDown( "space") && gamestate ==="serve") {
    
      gamestate = "play";
              }
if (gamestate==="play") {
  fill(0);
  if(ball.x===150&&ball.y ===10){
     ball.velocityX = 0;
     ball.velocityY = 3;
   }
    if (keyDown( "up") ) {
    ball.velocityX = 0;
    ball.velocityY = -2.5;
  }
  if (keyDown( "down") ) {
    ball.velocityX = 0;
    ball.velocityY = 2.5;
  }
  
  
if (keyDown( "left") ) {
    ball.velocityX = -2.5;
    ball.velocityY = 0;
  }
if (keyDown( "right") ) {
      ball.velocityX = 2.5;
      ball.velocityY = 0;
    }

         if (ball.isTouching(rect0)) {
  reset();
  gamestate = "serve";
  
}
 
  }     
   if(ball.isTouching(ball1)){
           gamestate= "over";
           ball.pause();
           ball.velocityX =0;
           ball.velocityY=0;
         }
   if(gamestate=== "over"){
     textSize(15);
     text("YOU WIN",300,385);
     text("Press Yellow button to Serve",200,15);
  }
   if (keyDown("space") && gamestate === "over") {
    gamestate = "serve";
   
  
  }    
   fill(255);
   if (ball.isTouching(edges)) {
  ball.pause();
   ball.velocityX = 0;
   ball.velocityY = 0;
   text("Press Yellow button to Serve",230,15);
         gamestate = "serve";
}
  if (ball.isTouching(rect0)) {
      reset();
      gamestate = "serve";
    }
if (ball.isTouching(rect1)) {
      reset();
      gamestate = "serve";
    }
if (ball.isTouching(rect2)) {
    reset();
    gamestate = "serve";
        }
if (ball.isTouching(rect3)) {
   reset(); 
   gamestate = "serve";
    }
 if (ball.isTouching(rect4)) {
  reset();  
  gamestate = "serve";
   }
  if (ball.isTouching(rect5)) {
  reset(); 
  gamestate = "serve";
  }                        
if (ball.isTouching(rect6)) {
 reset();  
 gamestate = "serve";
}
if (ball.isTouching(rect7)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect8)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect9)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect10)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect11)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect12)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect13)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect14)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect15)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect16)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect17)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect18)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect19)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect20)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect21)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect22)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect23)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect24)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect25)) {
 reset(); 
 gamestate = "serve";
}
if (ball.isTouching(rect26)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect27)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect28)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect29)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect30)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect31)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect32)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect33)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect34)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect35)) {
 reset();
 gamestate = "serve";
}
if (ball.isTouching(rect36)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect37)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect38)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect39)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect40)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect41)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect42)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect43)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect44)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect45)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect46)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect47)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect48)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect49)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect50)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect51)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect52)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect53)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect54)) {
  reset();
  gamestate = "serve";
}

if (ball.isTouching(rect55)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect56)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect57)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect58)) {
  reset();
  gamestate = "serve";
}
if (ball.isTouching(rect59)) {
  reset();
  gamestate = "serve";
}

  drawSprites();
}


function reset() {
  ball.x = 140;
  ball.y = 15;
  ball.velocityX = 0;
  ball.velocityY = 0;
  text("Press Space to serve",284,12);
  gamestate="serve";
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
