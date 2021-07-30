song = "";
song2 = "";
function preload() {
    song = loadSound("Alan-Walker-Faded.mp3");
    song2 = loadSound("JokerSongLaiLai.mp3");   
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
    video.position(480,180);
    video.size(580,500);
}
function draw() {
    image(video,0,0,600,500);
}