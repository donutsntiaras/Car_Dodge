class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.score = 0
    this.xspeed = 0;
    this.yspeed = 0;
  }  

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({      
      distance:this.distance,
      score:this.score
    });
  }

  direct(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  } 
}
