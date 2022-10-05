//https://teachablemachine.withgoogle.com/models/XyOn9iV-9/

prediction_1 = "";

Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 99
});

camera = document.getElementById("camera");

Webcam.attach("camera");

function take_snapshot() {

    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_gesture" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XyOn9iV-9/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction of gesture is - " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}