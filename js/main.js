function layoutMenu(){

   document.getElementsByClassName("btn-group-vertical").style.display = "inline";
}

function layoutButton(){

   document.querySelectorAll(".btn-secondary").style.padding = "4px";

}

function layoutButtonHeader(){
}

function butttonCards(){
   
   let button = document.querySelectorAll(".btn-primary");
   
   button.mouse("mouseover", function( event ){
      event.style.backgroudColor = "#00d100";
   })
}

function itemList(){
   let item = document.querySelectorAll(".list-group-item");
   
   item.mouse("mouseover", function( event ){
      event.style.backgroudColor = "#788bff";
   })
}