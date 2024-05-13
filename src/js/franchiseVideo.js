const timeVideo = document.getElementById('timeVideo')

function video () {
    timeVideo.value++
    if(timeVideo.value === 5){
        function timeReset (){
            timeVideo.value = 0
        }
        setTimeout(timeReset, 1500)
    }
}
setInterval(video, 1000)