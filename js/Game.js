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
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
car1 = new Car(100,200)
car2 = new Car(300,200)
car3 = new Car(500,200)
car4 = new Car(700,200)
cars = [car1, car2, car3, car4];
  }
  
  
  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if(allPlayers !== undefined){
     // background(rgb(198,135,103));
      image(track,displayWidth, displayHeight);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y = 175;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        //cars[index - 1].body.x = 180;
        //position the cars a little away from each other in x direction
        y = y + 200;
        //use data form the database to display the cars in y direction
        x = displayWidth - allPlayers[plr].distance;
        cars[index-1].body.position.x = x;
        cars[index-1].body.position.y = y;

        if (index === player.index){
          fill("red");
          ellipse(x,y,60,100)
          camera.position.x = cars[index-1].body.position.x;
          camera.position.y = displayHeight / 2;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    /*if(KeyDown("up") && player.index !== null){
     // Matter.Body.rotate(body, rotation, [point])
      Matter.Body.rotate(cars[index-1].body,180 , {x : 60, y: 80})
    }
    if(keyDown("left") && player.index !== null){
      cars[index - 1].rotation -= 2;
      player.update();
    }
    if(keyDown("right") && player.index !== null){
      cars[index - 1].rotation += 2
      player.update();
    }*/
    if(player.distance > 4400){
      gameState = 2;
      player.rank += 1
      Player.updateCarsAtEnd(player.rank)
    }
   
    car1.display() 
    car2.display()
    car3.display()
    car4.display()

    
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
    var message = createElement('h2')
    message.html("congratulations "+player.name+" ! your rank is"+ player.rank)
    message.position(displayWidth/2,displayHeight/4);
  }
 
}
