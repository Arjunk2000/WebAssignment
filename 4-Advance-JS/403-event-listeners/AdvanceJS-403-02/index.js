for(var i=0;i<document.querySelectorAll('.drum').length;i++){
    document.getElementsByClassName('drum')[i].addEventListener('click',function(){
      var buttontext=this.innerHTML;
      drumsound(buttontext);
    })
  }
    document.addEventListener("keypress",function(e){
      drumsound(e.key);
    })
    function drumsound(buttontext){
      if(buttontext=='w'){
          var tom1=new Audio("sounds/t1.mp3");
          tom1.play();
      }
      if (buttontext == "a") {
        var tom2 = new Audio("sounds/t2.mp3");
        tom2.play();
      }
      if (buttontext == "s") {
        var tom3 = new Audio("sounds/t3.mp3");
        tom3.play();
      }
      if (buttontext == "d") {
        var tom4 = new Audio("sounds/t4.mp3");
        tom4.play();
      }
      if (buttontext == "j") {
        var snare = new Audio("sounds/t5.mp3");
        snare.play();
      }
      if (buttontext == "k") {
        var kick = new Audio("sounds/t6.mp3");
        kick.play();
      }
      if (buttontext == "l") {
        var crash = new Audio("sounds/t7.mp3");
        crash.play();
      }
    }