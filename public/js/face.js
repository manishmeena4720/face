var filename = 'cam.png';
var track = null;
var constraints = { video: { facingMode: "environment" }, audio: false };
const cameraToggler = document.querySelector("#camera-toggler");    
const openCamera = document.querySelector("#open-camera");
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger"),
    cameraSave = document.querySelector("#camera--save");
// function cameraStart() {
//     navigator.mediaDevices
//         .getUserMedia(constraints)
//         .then(function(stream) {
//             track = stream.getTracks()[0];
//             cameraView.srcObject = stream;
//         })
//         .catch(function(error) {
//             console.error("Oops. Something is broken.", error);
//         });
// }
cameraSave.onclick = function () {
    var imgOrURL;
    imgOrURL = cameraOutput;
    if (typeof imgOrURL == 'object')
        imgOrURL = cameraOutput.src;
    console.log(imgOrURL);
    console.log(imgOrURL.length);
    var aaa = document.getElementById("camera--save");
    aaa.setAttribute('value',imgOrURL);
    // var image = document.createElement('a');
    // image.href = imgOrURL;
    // image.download = filename;
    // image.click();
    var x = document.getElementById('camera-section');
    x.style.display = 'none';

    track.stop();




    //window.win = open(imgOrURL);
    //setTimeout('win.document.execCommand("SaveAs")', 0);
}
cameraTrigger.onclick = function() {
    document.getElementById("camera--save").style.visibility = "visible";
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/png");
    cameraOutput.classList.add("taken");
};
//window.addEventListener("load", cameraStart, false);

cameraToggler.onclick = function() {
    console.log("hello");
    var x = document.getElementById('camera-section');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        track.stop();
    } else {
        x.style.display = 'block';
        navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
    console.log("hello2");
    }
};

openCamera.onclick = function() {
    console.log("hello");
    var x = document.getElementById('camera-section');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        track.stop();
    } else {
        x.style.display = 'block';
        navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
    console.log("hello2");
    }
};