const box=document.querySelector(".box");
const playBtn=document.querySelector(".playBtn");
const nextBtn=document.querySelector(".nextBtn");
const prevBtn=document.querySelector(".prevBtn");
const progressBar=document.querySelector(".progressBar");
const currTime=document.querySelector(".curr-time");
const duraTime=document.querySelector(".dura-time");
const forward=document.querySelector(".forw");
const backward=document.querySelector(".back");
const expand=document.querySelector(".expand");
const volumeBar=document.querySelector(".volumeBar");
const volumeIcon=document.querySelector(".volumeIcon");
// creating the video tag
let videoEl=document.createElement("video");
let track_index=0;
let videosLink=[
    {
        name:"youtube",
        path:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        name:"demo",
        path:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
    },
    {
        name:"test",
        path:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    }
    
]

// load the first video in video tag source
videoEl.src=videosLink[track_index].path;
box.append(videoEl);

// play the video from the list
playBtn.addEventListener("click",()=>{
    if(playBtn.classList.contains("fa-circle-play")){
        playBtn.classList.add("fa-circle-pause");
        playBtn.classList.remove("fa-circle-play");
        videoEl.play();
        if(videoEl.paused || videoEl.currentTime<=0){
            videoEl.play();
        }
    }else{
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.remove("fa-circle-pause");
        videoEl.pause();
    }
    // if the video ended then play the next video
    videoEl.addEventListener("ended",()=>{
        nextTrack();
    })
})
// play the next video from the list
nextBtn.addEventListener("click",()=>{
    nextTrack();
})
// play the previous video from the list
prevBtn.addEventListener("click",()=>{
    prevTrack();
})
// function to play next video from the list
function nextTrack(){
    videoEl.currentTime=0;
    if (track_index < videosLink.length - 1) track_index += 1;
    else track_index = 0;
    videoEl.src=videosLink[track_index].path;
    playBtn.classList.remove("fa-circle-play");
    playBtn.classList.add("fa-circle-pause");
    videoEl.play();
}
// function to play previous video from the list
function prevTrack(){
    if (track_index > 0) track_index -= 1;
    else track_index = videosLink.length;
    videoEl.src=videosLink[track_index].path;
    playBtn.classList.remove("fa-circle-play");
    playBtn.classList.add("fa-circle-pause");
    videoEl.play();
}

// change the current time of the video according to progress bar changes
progressBar.addEventListener("change",()=>{
    videoEl.currentTime=progressBar.value*videoEl.duration/100;
})
// update the progress bar according to video current time
videoEl.addEventListener("timeupdate",()=>{
    progress = parseInt((videoEl.currentTime/videoEl.duration)* 100);
    progressBar.value=progress;
})
// set the current time and total duration of song
videoEl.addEventListener('timeupdate',function (){
    let duration = videoEl.duration;
   let sec= new Number();
   let min= new Number();
   sec = Math.floor(videoEl.currentTime);    
   min = Math.floor( sec / 60 );
   min = min >= 10 ? min : '0' + min;    
   sec = Math.floor( sec % 60 );
   sec = sec >= 10 ? sec : '0' + sec;

   duraTime.innerHTML=Math.round(duration/60) + ':' + Math.round(duration%60);
   currTime.innerHTML=(min + ":" + sec);
   });
//  increase the video by 10 seconds 
   forward.addEventListener("click",()=>{
    videoEl.currentTime+=10;
   })
//  decrease the video by 10 seconds
   backward.addEventListener("click",()=>{
    videoEl.currentTime-=10;
   })
//    expand the video to full screen
expand.addEventListener("click",()=>{
    videoEl.webkitRequestFullScreen();
})
// update the volume according to volume bar
volumeBar.addEventListener("change",()=>{
    videoEl.volume=volumeBar.value/100;
})
/* hide the volume bar if the video sound is muted
and show the volume bar if the video is unmuted.*/
volumeIcon.addEventListener("click",()=>{
    if(videoEl.muted===false){
    volumeIcon.src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-cartoon-mute-icon-download-image_1256960.jpg";
    volumeBar.style.display="none";
    videoEl.muted=true;
    }else{
        volumeIcon.src="https://w7.pngwing.com/pngs/662/751/png-transparent-volume-icon-volume-computer-icons-sound-icon-volume-miscellaneous-text-hand-thumbnail.png";
        volumeBar.style.display="block";
        videoEl.muted=false;
    }
})