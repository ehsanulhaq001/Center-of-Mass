let points;
let sumx;
let sumy;
let comx;
let comy;
let time = 0;


window.onload = function() {
    setup();
    setInterval(draw, 1000 / 100);
    setInterval(displayData, 1000 / 5);
}

function setup() {
    cnv = document.querySelector("#canvas");
    cnv.width = 600;
    cnv.height = 600;
    cnv.style.backgroundColor = "black";
    ctx = cnv.getContext("2d");
    points = new Array();
}

function displayData() {
    document.querySelector("#Xcom").innerHTML = Math.floor((comx - cnv.width / 2) * 100) / 100;
    document.querySelector("#Ycom").innerHTML = Math.floor((cnv.height / 2 - comy) * 100) / 100;

}

function com() {

    sumx = 0;
    sumy = 0;

    for (let j = 0; j < points.length; j++) {
        sumx += points[j].x;
        sumy += points[j].y;
    }
    comx = sumx / points.length;
    comy = sumy / points.length;

    ctx.beginPath();
    ctx.arc(comx, comy, 9, 0, Math.PI * 2, true);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "#00FF0001";
    ctx.stroke();
    ctx.fill()
}

function draw() {
    document.querySelector("#numberOfPoints").innerHTML = points.length;

    ctx.beginPath();
    ctx.moveTo(cnv.width / 2, 0);
    ctx.lineTo(cnv.width / 2, cnv.height);
    ctx.strokeStyle = "rgb(20, 90, 90)";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, cnv.height / 2);
    ctx.lineTo(cnv.width, cnv.height / 2);
    ctx.strokeStyle = "rgb(20, 90, 90)";
    ctx.stroke();

    points.push({
        x: Math.floor(Math.random() * cnv.width),
        y: Math.floor(Math.random() * cnv.height)
    });

    ctx.beginPath();
    ctx.moveTo(points[time].x, points[time].y);
    ctx.lineTo(points[time].x + 1, points[time].y + 1);
    ctx.strokeStyle = "white";
    ctx.stroke();

    // console.log(comx);
    // console.log(comy);
    com();

    time++;
}