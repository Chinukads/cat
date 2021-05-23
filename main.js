video = "";
status="";
objects=[];
function preload(){
    video= createVideo('Video2.mp4');
    video.hide();
    
    
}

function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    

}

function draw() {
    image(video, 0, 0, 480, 380);
        if(status != "")
        {
          objectDetector.detect(video, gotResult);
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
   
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          
  
        
        
    
    fill("#B00023");
    percent=floor(objects[i].confidence * 100);
    text(objects[i].label+" "+ percent+"%", objects[i].x+15, objects[i].y+15);
    noFill();
    stroke("#BF1C36");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: detecting object";
}

function modelLoaded(){
    console.log("Model Is Loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}

function gotResult(error, results){
    if(error){
        console.error("Error 404 Site Not Found")
    }else{
        console.log(results);
        objects=results;
    }
}


