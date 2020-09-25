Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90    
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
Webcam.snap(function(datauri){
document.getElementById("result").innerHTML = '<img id="captured_image"src="'+datauri+'"/>';
});
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-L9RVHCh1/model.json', modelLoaded);
function modelLoaded()
{
console.log('Model Loaded!');    
}
function check()
{
img=document.getElementById('captured_image');
classifier.classify(img, gotResults);    
}

function gotResults(error, results)
{
if (error) {
console.error(error);

} else{
console.log(results);
document.getElementById("gesture_result_name").innerHTML=results[0].label;


if(results[0].label == "Up")
{
document.getElementById("update_gesture").innerHTML = "&#128070;";   
}

if(results[0].label == "Down")
{
document.getElementById("update_gesture").innerHTML = "&#128071;";   
}
if(results[0].label == "Left")
{
document.getElementById("update_gesture").innerHTML = "&#128072;";   
}
if(results[0].label == "Right")
{
document.getElementById("update_gesture").innerHTML = "&#128073;";   
}
if(results[0].label == "Amazing")
{
document.getElementById("update_gesture").innerHTML = "&#128076;";   
}
if(results[0].label == "Thumbs up")
{
document.getElementById("update_gesture").innerHTML = "&#128077;";   
}
}}