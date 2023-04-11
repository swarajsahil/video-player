// 
const box=document.querySelector(".box");
const btn=document.querySelector(".btn");
let videoEl=document.createElement("video");

btn.addEventListener("click",()=>{
    if(btn.classList.contains("fa-circle-play")){
        btn.classList.add("fa-circle-pause");
        btn.classList.remove("fa-circle-play");
        // videoEl.style.width="100%";
        // videoEl.style.height="100%";
        videoEl.src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4";
        box.append(videoEl);
        // videoEl.type="video/mp4";
        videoEl.play();
    }else{
        btn.classList.add("fa-circle-play");
        btn.classList.remove("fa-circle-pause");
        videoEl.pause();
    }
})
