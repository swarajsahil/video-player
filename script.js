// 
const box=document.querySelector(".box");
const playBtn=document.querySelector(".playBtn");
const nextBtn=document.querySelector(".nextBtn");
const prevBtn=document.querySelector(".prevBtn");
let videoEl=document.createElement("video");
let track_index=0;
let videosLink=[
    {
        name:"apna",
        path:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
    },
    {
        name:"youtube",
        path:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
    
]


videoEl.src=videosLink[track_index].path;
box.append(videoEl);

playBtn.addEventListener("click",()=>{
    if(playBtn.classList.contains("fa-circle-play")){
        playBtn.classList.add("fa-circle-pause");
        playBtn.classList.remove("fa-circle-play");
        // videoEl.style.width="100%";
        // videoEl.style.height="100%";
        // videoEl.type="video/mp4";
        videoEl.play();
        if(videoEl.paused || videoEl.currentTime<=0){
            videoEl.play();
        }
        else{
            nextTrack();
        }
    }else{
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.remove("fa-circle-pause");
        videoEl.pause();
    }
})
nextBtn.addEventListener("click",()=>{
    nextTrack();
})
prevBtn.addEventListener("click",()=>{
    prevTrack();
})
function nextTrack(){
    videoEl.currentTime=0;
    if (track_index < videosLink.length - 1) track_index += 1;
    else track_index = 0;
    videoEl.src=videosLink[track_index].path;
    videoEl.play();
}
function prevTrack(){
    if (track_index > 0) track_index -= 1;
    else track_index = videosLink.length;
    videoEl.src=videosLink[track_index].path;
    videoEl.play();
}