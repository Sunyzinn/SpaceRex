var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);

  edges = createEdgeSprites();

  trex.debug = false
  trex.setCollider("rectangle",0,0,50,50)

  Ground=createSprite (50,195,400,15)
  Ground.addImage (groundImage) 
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("gray");
  
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //if (Ground.x < 0) {
   // Ground.x = Ground.width / 2
  //}
  trex.velocityY = trex.velocityY + 0.5;
  Ground.velocityX = -7

 //impedir que o trex caia
  trex.collide(Ground)
  drawSprites();
}