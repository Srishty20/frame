function setup(){
    canvas=createCanvas(640,480)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,230,150,220,200)

    fill(0,128,0)
    stroke(0,128,0)
    circle(50,50,70)

    fill(255,0,0)
    stroke(255,0,0)
    rect(80,30,460,50)

    fill(0,128,0)
    stroke(0,128,0)
    circle(570,50,70)

    fill(0,128,0)
    stroke(0,128,0)
    circle(570,440,70)

    fill(0,128,0)
    stroke(0,128,0)
    circle(50,440,70)

    fill(255,0,0)
    stroke(255,0,0)
    rect(80,420,460,50)

    fill(255,0,0)
    stroke(255,0,0)
    rect(30,80,50,360)

    fill(255,0,0)
    stroke(255,0,0)
    rect(540,20,50,390)

    //rect(x,y,w,h)
}

