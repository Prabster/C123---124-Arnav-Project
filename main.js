function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(200, 200);
    canvas = createCanvas(700, 550);
    canvas.position(1000, 200);
    canvas.background("white");
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}

function modelLoaded() {
    console.log("Your Model Is Loaded");
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
    }
}