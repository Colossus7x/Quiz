/*
 * Programmer: Zachary Pilkenton
 * JavaScript Lab Six
 * Week Nine
 * Date: 3/20/17
 * Purpose: Create a multiple choices quiz which includes five questions. Create your own set of questions.
			Each question should include three choices. If the user chooses an answer, display an alert message
			stating if the selected item is correct or incorrect. Also, increment the score by 20 for each correct answer.
			After the user completes all five questions, display an alert message showing the calculated score out of 100.
			i.e. Your score is 80 out of 100.
 */
var allButtons = document.getElementsByName("color");
var secondAnswers = document.getElementsByName("defn");
var thirdAnswers = document.getElementsByName("looneyToon");
var fourthAnswers = document.getElementsByName("fox");
var fifthAnswers = document.getElementsByName("song");

function getScore(){
	var score = 0;
  var correct = 0;

  if(allButtons[1].checked == true){
		correct++;
	}
  if(secondAnswers[2].checked == true){
    correct++;
  }
  if(thirdAnswers[0].checked == true){
    correct++;
  }
  if(fourthAnswers[2].checked == true){
    correct++;
  }
  if(fifthAnswers[0].checked == true){
    correct++;
  }
  score = correct*20;

  document.getElementById("printScore").innerHTML = score;
  alert("score is " + score);
}
