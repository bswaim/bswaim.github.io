$(document).ready(function(){
    
  var magicBall = {};
  magicBall.answers = ["Yep, yep, yep!", "Nope sauce.", "It's unclear. Ask again later."];
  magicBall.askQuestion = function (question)
  {    
    $("#answer").fadeIn(4000);
   var getRandomAnswer = Math.floor(Math.random() * magicBall.answers.length) ;
    var answer = this.answers[getRandomAnswer]
    
    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png").fadeIn(4000);
    $("#answer").text( answer );
  };
  $("#answer").hide();
  
  var clickFunction = function()
  {
    $("#answer").hide();
    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png")
      
    var promptQuestion = prompt("Ask a YES/NO question.");

    if(promptQuestion =="")
    {
      return false;
    }

    if(promptQuestion != null)
    {

      $("#8ball").effect("shake");
      setTimeout(
          function () {
            magicBall.askQuestion(promptQuestion);
          }, 500);
    }
  }
  var askButton = document.getElementById("questionButton");
  $(askButton).click(clickFunction);

});
