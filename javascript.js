var selected;
  document.getElementsByClassName("songitemcontainer")[0].addEventListener("click",f);
  document.getElementsByClassName("songitemcontainer")[1].addEventListener("click",f);
  document.getElementsByClassName("songitemcontainer")[2].addEventListener("click",f);
  document.getElementsByClassName("songitemcontainer")[3].addEventListener("click",f);
  function f(e)
  {
     selected=e.target.children[2];
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
var pr=null;
  var a=Array.from(document.getElementsByTagName("audio"));
  a.forEach(element => {
  element.addEventListener("play",ply);});
  function ply(e){
     if(pr==null)pr=e.target;
     else if(pr!=e.target){
        pr.pause();
        pr=e.target;
     }
  }

