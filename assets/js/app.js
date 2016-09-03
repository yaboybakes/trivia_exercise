var q_array_index = 0;
var correct = 0;
var game_over = false;
var time_left = 30;

var questions = [
{
    question: "What year did the Titanic sink?",
    answers: [1912,1913,1914,1915,1916],
    correct: 0
},
{
    question: "How many furlongs are in a mile?",
    answers: [2,4,6,8,10],
    correct: 3
},
{
    question: "How many problems does Jay-Z have?",
    answers: [25,50,75,99,100],
    correct: 4
}];

$(document).ready(function() {
  start_game();

  function start_game() {

    var question = questions[q_array_index].question;
    var q0 = $(document).find("#q0");
    var q1 = $(document).find("#q1");
    var q2 = $(document).find("#q2");
    var q3 = $(document).find("#q3");
    var q4 = $(document).find("#q4");
    var q5 = $(document).find("#q5");

    $(q0).text(question);
    $(q1).text(questions[q_array_index].answers[0]);
    $(q2).text(questions[q_array_index].answers[1]);
    $(q3).text(questions[q_array_index].answers[2]);
    $(q4).text(questions[q_array_index].answers[3]);
    $(q5).text(questions[q_array_index].answers[4]);
    start_timer();
}

  function start_timer(){
      counter = setInterval(update_timer, 1000);
  }


  function update_timer(){
      time_left--;
      $('.timer').html('<h3>'+time_left + 'seconds</h3>');

      if (time_left == 0){
          $('.timer').empty();
          stop_timer();
      }

  }

  function stop_timer(){
      q_array_index++;
      time_left = 30;

      clearInterval(counter);
      if (q_array_index < questions.length) {
          $('.timer').html("");
          start_game();
      } else {
          game_over = true;
      }
  }

});
