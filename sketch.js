var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  Leafimg =loadImage("leaf.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//Apples and Leaf
var rand = Math.round(random(1,400))
 console.log(rand)  

//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApples();
  spawnLeaf();
  createRed();
  createOrange();
   drawSprites();
   
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

// var select_sprites = Math.round(random(1,3));

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
}

function createOrange() {
  if(frameCount%170==0){
orangeL = createSprite(200,10,10,10)
orangeL.addImage("orangeLeaf",orangeImg);
orangeL.scale=0.08;
orangeL.setVelocity(0,1)
orangeL.x=Math.round(random(20,380))
orangeL.depth=rabbit.depth;
rabbit.depth=rabbit.depth+1
  }
}

function createRed() {
  if(frameCount%150==0){
redL = createSprite(100,5,10,10);
redL.addImage("redLeaf",redImg);
redL.scale=0.06;
redL.setVelocity(0,2)
redL.x=Math.round(random(5,395)) 
redL.depth=rabbit.depth;
rabbit.depth=rabbit.depth+1; 
  }
}
function spawnApples(){
  if(frameCount%80==0){
  var apple=createSprite(70,20,20,20);
  apple.setVelocity(0,3.50);
  apple.scale=0.1;
  apple.addImage("apple",appleImg);
  apple.x=Math.round(random(60,340))
  apple.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
  }
}

function spawnLeaf(){
  if(frameCount%100==0){
  var Leaf=createSprite(50,10,10,10);
  Leaf.setVelocity(0,3);
  Leaf.addImage("Leaf",Leafimg);
  Leaf.scale=0.1;
  Leaf.x=Math.round(random(50,350))
  Leaf.depth=rabbit.depth;
  Leaf.depth=Leaf.depth-1;
}
}

