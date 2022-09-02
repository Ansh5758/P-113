function setup(){
    canvas = createCanvas(750, 500);
    canvas.position(344.5, 310);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = '';
    img = loadImage('border.png');
}
function applyFilter(){
    tintColor = document.getElementById('input').value;
}
function draw(){
    image(img, 0, 0, 750, 500);
    image(video, 72.5, 50, 607.5, 400);
    tint(tintColor);
}
function takeSnap(){
    save('new.png');
}