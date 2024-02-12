let btn = document.getElementById('btn');
let btncls = document.getElementById('btn-cls');
let vid = document.getElementById('vid');
let media = navigator.mediaDevices;
// vid.muted = true;

let stream;
btn.addEventListener('click', () => {
    media.getUserMedia({
        video: true,
        audio: true
    })
    .then((mediaStream) => {
        stream = mediaStream;
        vid.srcObject = stream;
        vid.addEventListener('loadedmetadata', () => {
            vid.play();
        })
    })
    .catch((err) => alert(err))
});

btncls.addEventListener('click', () => {
    if(stream){
        stream.getTracks().forEach(track => track.stop());
    }
});