var icon1=document.getElementById("icon1");
var mysong1=document.getElementById("mysong1");

var play=document.getElementById('play');
icon1.onclick=function()
{
    i=0;
    if(mysong1.paused)
    {
        mysong1.play();

    }
    else{
        mysong1.pause();
    }
}
var icon2=document.getElementById("icon2");
var mysong2=document.getElementById("mysong2");

var play=document.getElementById('play');
icon2.onclick=function()
{
    i=1;
    if(mysong2.paused)
    {
        mysong2.play();

    }
    else{
        mysong2.pause();
    }
}
var icon3=document.getElementById("icon3");
var mysong3=document.getElementById("mysong3");

var play=document.getElementById('play');
icon3.onclick=function()
{
    i=2;
    if(mysong3.paused)
    {
        mysong3.play();

    }
    else{
        mysong3.pause();
    }
}
var icon4=document.getElementById("icon4");
var mysong4=document.getElementById("mysong4");

var play=document.getElementById('play');
icon4.onclick=function()
{
    i=3;
    if(mysong4.paused)
    {
        mysong4.play();

    }
    else{
        mysong4.pause();
    }
}

