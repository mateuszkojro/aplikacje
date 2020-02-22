
let time_start = 0;
let now_time = 0;
let time_end1 = 0;
let time_end2 = 0;
let show_time = 0;
let result1 = 0;
let result2 = 0;
let q = false;
let p = false;
let trigered = 0;


function setup(){
    document.getElementById("pl1").style.fontSize = "50%";
    document.getElementById("pl1").innerHTML = "When page changes color press up arrow or touch the screen";
    document.getElementById("pl2").style.fontSize = "50%";
    document.getElementById("pl2").innerHTML = "When page changes color press up arrow or touch the screen";
    frameRate(20);
    background(200);
    show_time = random(50,100)
    noCanvas();
}

function draw(){

    if(frameCount == Math.floor(show_time)){
        document.getElementById("pl1").style.fontSize = "100%";
        document.getElementById("pl2").style.fontSize = "100%";
        time_start = millis();
        document.body.style.background = "black";
        document.body.style.color = "whitesmoke";
        document.getElementById("pl1").className = "light";
        document.getElementById("pl2").className = "light";
        triger();
    }
    if(q == false && trigered == true){
        console.log("i awd")
        document.getElementById("pl1").innerHTML = covert_to_time(now_time);
    }
    if(p == false && trigered == true){
        console.log("i awd")
        document.getElementById("pl2").innerHTML = covert_to_time(now_time);
    }
    if (trigered == true){
        now_time++;
    }
        

    }


function keyPressed() {
    if (keyCode === LEFT_ARROW  && trigered == true){

        clicked(1);
    }
    if (keyCode === RIGHT_ARROW && trigered == true){
        
        clicked(2);
    }
    if (keyCode === UP_ARROW){
        location.reload();
    }
}


function clicked(n){
    if (trigered == true && q == false && n == 1){
                q = true;
        document.getElementById("pl1").className = "light";
        time_end1 = millis();
        result1 = time_end1 - time_start;
        document.getElementById("pl1").innerHTML = "Your time: " + Math.floor(result1) + "ms";
        

    }
    if (trigered == true && p == false && n == 2){
        p = true;
        document.getElementById("pl2").className = "light";
        time_end2 = millis();
        result2 = time_end2 - time_start;
        document.getElementById("pl2").innerHTML = "Your time: " + Math.floor(result2) + "ms";
    }

    if (p == true && q == true){
        pause()
        document.getElementById("pl1").innerHTML = "Your time: " + Math.floor(result1) + "ms";
        document.getElementById("pl2").innerHTML = "Your time: " + Math.floor(result2) + "ms";

        if (result1 < result2){
            document.getElementById("pl1").style.background = "limegreen";
        }
        else{
            document.getElementById("pl2").style.background = "limegreen";
        }

    }


    time  = 0;
    trigered = true;
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
