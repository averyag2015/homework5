//////////////////PAGE LOAD//////////////////////////////

//Create video variable,load to page, and set autoplay//
let video_var=document.querySelector(".video");
video_var.loop=false;
video_var.autoplay=false;
video_var.load();

///////////////////PLAY BUTTON//////////////////////////

//Variable to Play Video//
function playVideo(){
   video_var.play();
}
//Play video listener//
let play_button_var=document.getElementById("play");
play_button_var.addEventListener("click",playVideo);
////////////////////////////////////////////////////////


///////////////////PAUSE BUTTON/////////////////////////

//Variable to Pause Video//
function pauseVideo(){
  video_var.pause();
}

let pause_button_var=document.getElementById("pause");
pause_button_var.addEventListener("click",pauseVideo);
//////////////////////////////////////////////////////////

////////////////////////SLIDER////////////////////////////////

//Initalizing the text to display 1//
document.getElementById("volume").innerHTML="1";

//Creating volume change function//
function setVolume(){
  video_var.volume=this.value/100;
  let volume_text=this.value/100;
  document.getElementById("volume").innerHTML=`${volume_text}`;
}

let volumeslider=document.getElementById('slider');
volumeslider.addEventListener("change",setVolume);
///////////////////////////////////////////////////////////////

///////////////////MUTE BUTTON////////////////////////////

//Function to check if video is muted then toggle and update text//
function videoMute(){
  if (video_var.muted==true){
    video_var.muted=false;
    document.getElementById("mute").innerHTML='Mute';
    document.getElementById("slider").value=100;
    document.getElementById("volume").innerHTML=`${document.getElementById("slider").value/100}`;
    console.log(document.getElementById("slider").value);
  }

  else if (video_var.muted==false){
    video_var.muted=true;
    document.getElementById("mute").innerHTML='Umute';
    document.getElementById("slider").value=0;
    document.getElementById("volume").innerHTML=`${document.getElementById('slider').value/100}`;
  }

  }

//Adding listener//
let mute_botton_var=document.getElementById('mute');
mute_botton_var.addEventListener("click",videoMute);
volumeslider.addEventListener("click",setVolume);

/////////////////////////////////////////////////////////


//////////////////////////SET RATES/////////////////////
const normal_rate=1.0;
const slow_rate=0.5;
const fast_rate=2.0;

////////////////////////////////////////////////////////

////////////////////////SLOW BUTTON//////////////////////

function videoSlow(){
  if (video_var.playbackRate==fast_rate){
     video_var.playbackRate=normal_rate;
  }

  else if (video_var.playbackRate==normal_rate){
    video_var.playbackRate=slow_rate;
  }

  else if (video_var.playbackRate==slow_rate){
    alert("Video is at slowest speed!");
  }

}

let slow_down_button_var=document.getElementById('slower');
slow_down_button_var.addEventListener("click",videoSlow);

///////////////////////////////////////////////////////////////

////////////////////////FAST BUTTON//////////////////////////
function videoFast(){
  if (video_var.playbackRate==slow_rate){
     video_var.playbackRate=normal_rate;
  }

  else if (video_var.playbackRate==normal_rate){
    video_var.playbackRate=fast_rate;
  }

  else if (video_var.playbackRate==fast_rate){
    alert("Video is at fastest speed!");
  }

}

let fast_up_button_var=document.getElementById('faster');
fast_up_button_var.addEventListener("click",videoFast);

////////////////////////////////////////////////////////////////

////////////////////////SKIP AHEAD//////////////////////////////
function skipAhead(){
  if (video_var.ended==false){
     video_var.currentTime=video_var.currentTime+15;
  }

  else if (video_var.ended==true){
      video_var.load();
  }

}

let skip_ahead_button_var=document.getElementById("skip");
skip_ahead_button_var.addEventListener("click",skipAhead);
//////////////////////////////////////////////////////////////
