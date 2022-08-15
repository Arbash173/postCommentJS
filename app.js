function bg(){
    var a=document.getElementById("text")
    a.style.background="url('https://media.istockphoto.com/photos/textured-abstract-background-picture-id168589200?b=1&k=20&m=168589200&s=170667a&w=0&h=ODoC7Uhx1vJC1D2XnDwnQpz3P4mV7g2tM4iH46xyPkw=')"

}
function bg1(){
    var a=document.getElementById("text")
    a.style.backgroundSize="100%"
 a.style.background="url('https://media.istockphoto.com/photos/sticky-note-post-it-board-office-picture-id664975134?b=1&k=20&m=664975134&s=170667a&w=0&h=NWzhBOf1mH2gOwh8ma5RHUXbs4qiNNFEvA_ScQsUQQw=')"

}
function bg2(){
    var a=document.getElementById("text")
    a.style.backgroundSize="100%"
    a.style.background="url('https://media.istockphoto.com/videos/abstract-futuristic-corridor-with-pink-hearts-on-dark-background-video-id1299191015?s=640x640')"

}
function bg3(){
    var a=document.getElementById("text")
    a.style.backgroundSize="100%"
    a.style.background="url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-31-badgewatercolor_1.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=969d007dc84a90f2df4679a93124b512')"

}
function bg4(){
    var a=document.getElementById("text")
    a.style.backgroundSize="100%"
    a.style.background="url('https://previews.123rf.com/images/digifuture/digifuture1103/digifuture110300037/9006388-colorful-wood-background.jpg')"

}

function post(){
   
    var ptext=document.getElementById("text").value;
console.log(ptext)
   document.getElementById("p1").innerHTML+=`<div id="p2" class="posted-box">${ptext}</div>
    `
    if(bg()===true){
    var p3=document.getElementById("p2")
    p3.style.backgroundSize="100%"
    p3.style.background="url('https://previews.123rf.com/images/digifuture/digifuture1103/digifuture110300037/9006388-colorful-wood-background.jpg')"
    }
}