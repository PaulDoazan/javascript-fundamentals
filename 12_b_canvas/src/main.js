// import { character } from "./character.js";

let stage;
let radius = 30

export default function main(st) {
    stage = st;
    createBackground();
    createCircle(120, 80, "blue");
    createCircle(200, 200, "yellow");
    createRect(200, 300, "green");
    // addCharacter()
    return stage;
}

function createCircle(paramX, paramY, col) {
    let gr = new createjs.Graphics();
    let circle = new createjs.Shape(gr);

    circle.pace = 1;
    circle.canMove = false
    //circle.addEventListener('tick', onCircleTick)
    // circle.addEventListener('click', onCircleClick)
    circle.addEventListener('pressmove', onCircleMove)

    gr.setStrokeStyle(5)
    gr.beginStroke('black')
    gr.beginFill(col)
    gr.drawCircle(0, 0, radius);
    circle.x = paramX;
    circle.y = paramY;
    stage.addChild(circle);
}

function createRect(paramX, paramY, col) {
    let gr = new createjs.Graphics();
    let rect = new createjs.Shape(gr);
    gr.setStrokeStyle(5)
    gr.beginStroke('black')
    gr.beginFill(col)
    gr.drawRect(0, 0, 80, 40);
    rect.x = paramX;
    rect.y = paramY;
    stage.addChild(rect);
}

function onCircleMove(e) {
    e.currentTarget.x = stage.mouseX
    e.currentTarget.y = stage.mouseY
    console.log(e.currentTarget.x, e.currentTarget.y)
}

function onCircleClick(e) {

}

function onCircleTick(e) {
    let tg = e.currentTarget;

    if (!tg.canMove) return

    tg.x += tg.pace
    if (tg.x > stage.width) {
        tg.pace *= -1
    }
}

function createBackground() {
    let gr = new createjs.Graphics()
    let bg = new createjs.Shape(gr)

    gr.beginFill('#ffffff')
    gr.drawRect(0, 0, stage.width, stage.height)

    stage.addChild(bg)
}

function addCharacter() {
    let mainCharacter = character()
    stage.addChild(mainCharacter)

    mainCharacter.x = 200
    mainCharacter.y = 200
}