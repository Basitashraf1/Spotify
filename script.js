

let songs=[
    {songName:"Tere Hawale" , filePath:"songs/1.mp3",cover:"./pics/1.jpg"},
    {songName:"Challeya" , filePath:"songs/2.mp3",cover:"./pics/2.jpg"},
    {songName:"Phir Milenge" , filePath:"songs/3.mp3",cover:"./pics/3.jpg"},
    {songName:"Amari" , filePath:"songs/4.mp3",cover:"./pics/4.jpg"},
    {songName:"Middle Child" , filePath:"songs/5.mp3",cover:"./pics/5.jpg"},
    {songName:"Jeena" , filePath:"songs/6.mp3",cover:"./pics/6.jpg"},
    {songName:"DNA" , filePath:"songs/7.mp3",cover:"./pics/7.jpg"}
]
let songIndex=0;
const seek=document.getElementById("input")
const mainPlay=document.querySelector("#main")
let songOne= new Audio("songs/1.mp3")
const gif=document.querySelector(".gif")
const container=document.querySelector(".container")
const songItems=Array.from(document.querySelectorAll(".songItem"))
const songItemPlay= Array.from(document.querySelectorAll(".songitemPlay"))
const prev=document.getElementById("prev")
const next=document.getElementById("next")
let info=document.getElementById("information")
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].cover
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
})

mainPlay.addEventListener("click",()=>{
    
    if(songOne.paused || songOne.currentTime<=0){
        songOne.play()
        mainPlay.classList.remove("fa-play")
        mainPlay.classList.add("fa-pause")
        gif.style.opacity=1
    }
    else if(songOne.played || songOne.currentTime > 0){
        songOne.pause()
        mainPlay.classList.remove("fa-pause")
        mainPlay.classList.add("fa-play")
        gif.style.opacity=0;
    }
})
songOne.addEventListener("timeupdate",()=>{
    let  progress =parseInt((songOne.currentTime/songOne.duration)*100)
   seek.value=progress
})
seek.addEventListener('change',()=>{
    songOne.currentTime=seek.value * songOne.duration/100
})

const makeAllPlays=()=>{
    songItemPlay.forEach((element)=>{
    element.classList.remove("fa-pause")
     element.classList.add("fa-play")
    } )
 }
 
 songItemPlay.forEach((ele)=>{
         ele.addEventListener("click",(e)=>{
             makeAllPlays()
             let songIndex=parseInt(e.target.id)
         e.target.classList.remove("fa-play")
         e.target.classList.add("fa-pause")
         songOne.src=`songs/${songIndex +1}.mp3`
         songOne.currentTime=0
         info.innerText=songs[songIndex].songName
         songOne.play()
         mainPlay.classList.remove("fa-play")
         mainPlay.classList.add("fa-pause")
     })
 })
 prev.addEventListener("click",()=>{
    if(songIndex<0){
    songIndex=6
    }
    else{
        songIndex-=1
    }
    songOne.src=`songs/${songIndex +1}.mp3`
    info.innerText=songs[songIndex].songName
    songOne.currentTime=0
         songOne.play()
         mainPlay.classList.remove("fa-play")
         mainPlay.classList.add("fa-pause")
 })
 next.addEventListener("click",()=>{
    if(songIndex>6){
    songIndex=0
    }
    else{
        songIndex+=1
    }
    songOne.src=`songs/${songIndex +1}.mp3`
    info.innerText=songs[songIndex].songName
         songOne.currentTime=0
         songOne.play()
         mainPlay.classList.remove("fa-play")
         mainPlay.classList.add("fa-pause")
 })