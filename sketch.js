var dog,dogImage;

function preload(){

dogImage = loadImage("dogImg.png")



}


function setup(){
    createCanvas(500,500);

    dog = createSprite(250,250,10,10);
    dog.shapeColor = "red";
dogImage.add("dog",dogImage)   
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dog.x = dog.x + x;
    dog.y = dog.y + y;
}
