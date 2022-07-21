var selected,prev=null;

 document.getElementsByClassName("songitemcontainer")[0].addEventListener("click",f);
 document.getElementsByClassName("songitemcontainer")[1].addEventListener("click",f);
 document.getElementsByClassName("songitemcontainer")[2].addEventListener("click",f);
 document.getElementsByClassName("songitemcontainer")[3].addEventListener("click",f);
 function f(e)
 {
    selected=e.target.children[2];
    if(prev==null)prev=e.target.children[2];
    else{
        if(prev!=selected){
        prev.pause();
        prev=e.target.children[2];}
    }
     if(selected.paused)
     {
         selected.play();
     }
     else{
        selected.pause();
     }
 }
 document.getElementsByClassName("bottom")[0].onclick=function(){
    if(selected.paused)
     {
         selected.play();
     }
     else{
        selected.pause();
     }
 }
