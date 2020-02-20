
let time_start = 0;
let now_time = 0;
let time_end = 0;
let show_time = 0;
let trigered = false;


function setup(){
    document.getElementById("counter").style.fontSize = "50%";
    document.getElementById("counter").innerHTML = "<h2>When page changes color press up arrow or touch the screen<h2>";
    frameRate(20);
    background(200);
    show_time = random(50,400)
    noCanvas();
}

function draw(){

    if(frameCount == Math.floor(show_time)){
        document.getElementById("counter").style.fontSize = "100%";
        time_start = millis();
        document.body.style.background = "black";
        document.body.style.color = "whitesmoke";
        document.getElementById("counter").className = "light";
        triger();
    }
    if(trigered == true){
        console.log("i awd")
        document.getElementById("counter").innerHTML = "<h2>" + covert_to_time(now_time) + "<h2>";
        now_time++;

    }
}

function keyPressed() {
    if (keyCode === UP_ARROW){
        clicked();

    }

    if (keyCode === LEFT_ARROW){
        location.reload();
    }
}


function clicked(){
    if (trigered == true){
        document.getElementById("counter").className = "light";
        time_end = millis();
        result = time_end - time_start;
        document.getElementById("counter").innerHTML = "Your time: " + Math.floor(result) + "ms";
        pause();
    }
    else{
        console.log("it happend")
        document.getElementById("counter").className = "red";
   }
    time  = 0;
    trigered = false;
}




function triger(){
    trigered = true;
}

function covert_to_time(frames){
    let set = frames * 5;
    let min = Math.floor(set/(60*100));
    set = set - min * 60*100;
    let sec = Math.floor(set/100);
    set = set - sec*100;
    if(sec < 10){
        sec = "0" + sec;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(set < 10){
        set = "0" + set;
    }
    

    text = min + ":" + sec + ":" + set;
    return text;
}

function pause(){
    noLoop();
       
   }


   function covert_to_time(frames){
    let set = frames * 5;
    let min = Math.floor(set/(60*100));
    set = set - min * 60*100;
    let sec = Math.floor(set/100);
    set = set - sec*100;
    if(sec < 10){
        sec = "0" + sec;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(set < 10){
        set = "0" + set;
    }
    

    text = min + ":" + sec + ":" + set;
    return text;
}
