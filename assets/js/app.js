$(document).ready(function(){
  $("#start-button").click(function(){

    var number = 50;
    
    $("#submit").on("click", finish);  

    $("#restart").on("click", restart); 

    function start(){
      counter = setInterval(timer, 1000);
      showMe(".question");
      showMe(".answers");
      showMe("#submit");
      hideMe("#start-button");
      hideMe(".rules");
      hideMe("#restart");
      hideMe("#results");
    }
    function timer(){
      number-- 
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Time is Up!")
        stop(); 
      }
    }
   
    function finish(){
      number = 1; 
      clearInterval(counter); 
      timer();
    }

    function restart(){
      number = 50;
      start();
    }


    start(); 
  });
});






