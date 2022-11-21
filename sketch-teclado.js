function setup(){
createCanvas (300,300);

}
function draw(){

    clear();
    background(123);
    console.log("teclaPulsada"+keyCode);
   textSize(50);
    switch(keyCode){
    case 74:
        text("J",200,200);
        break;
    case 38:
        text("arriba",100,100);
        break;
    case 40:
        text("abajo",100,100);
        break;
    case 39:
        ellipse(100,100,50,50);
        text("derecha",100,100);
        break;
    default:
        break;
    }
}