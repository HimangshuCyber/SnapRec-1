//Setting webcam
Webcam.set({
    width:350, 
    height:300, 
    image_format: 'png', 
    png_quality: 90
});
var camera = document.getElementById('camera');
Webcam.attach('#camera');

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log('ML5 VERSION: ' + ml5.version + '.');
var classifier = ml5.imageClassifier('', modelLoaded)