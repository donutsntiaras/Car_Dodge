class Form {

  constructor() {
    
    this.button = createButton('Play');
    
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    
    this.button.hide();
    
    this.title.hide();
  }

  display(){
    this.title.html("Car Dodging Game");
    this.title.position(displayWidth/2 - 50, 0);

    
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      
      this.button.hide();
      
      game.update(1);
    });

    this.reset.mousePressed(()=>{
      
      game.update(0);
    });

  }
}
