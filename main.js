nosex=0;
nosey=0
function preload()
{
    mustache=loadImage('https://i.postimg.cc/q7bFjk0B/mustache-png-26.png')
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}
function draw()
{
    image(video,0,0,300,300);
    image(mustache,nosex,nosey,80,40)
    
}
function take_snapshot()
{
    save("myfilter image.png")
}
function modelloaded()
{
    console.log("poseNet is initialize");
} 
function gotposes(results)
{ 
    if(results.length>0)
    {
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-40;
        nosey=results[0].pose.nose.y;
    }
}