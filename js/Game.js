class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    
  }

  play(){
    form.hide();
      
    background(rgb(198,135,103));
    image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
  
    if(keyIsDown(UP_ARROW)&& player.index !== null ){
      player.distance +=10
      player.update();
    }

  //left arrow	37
    if(keyCode === 37){
      player.direct(-1,0);
    }
  //right arrow	39
    else if(keyCode === 39){
      player.direct(1,0);
    }  
    
    createObs();
    stroke("white");
    strokeWeight(4);
    score = score + Math.round(player.distance + 1);
    text("Score: "+ score, displayWidth/2,50);
    
    if(player.distance > 5000){
      text("You Win", displayWidth/2, displayHeight/2);
    }

    isTouching(car1,carsGroup);
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");    
  }

  isTouching(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 ||
      object2.x - object1.x < object1.width/2 + object2.width/2 ||
      object1.y - object2.y < object1.hieght/2 + object2.height/2 ||
      object2.y - object1.y < object1.hieght/2 + object2.height/2 ){
        end();
        text("You Lost", displayWidth/2, displayHeight/2)
      }
  }
}
