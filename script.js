function aceitar(){
    window.alert("Desistiu?");
    }

   function movebutton() {
     var button = document.getElementById("bt2");
     var newTop = Math.floor(Math.random() * 400);
     var newLeft = Math.floor(Math.random() * 400);
     button.style.top = newTop + "px";
     button.style.left = newLeft + "px";
   }


