var q_array_index = 0;
var correct = 0;
var game_over = false;
var time_left = 30;
var missed = 3;
var flag = true;

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
    console.log('start');
    start_timer();

    var question = questions[q_array_index].question;
    var q0 = $(document).find("#q0");
    var q1 = $(document).find("#q1");
    var q2 = $(document).find("#q2");
    var q3 = $(document).find("#q3");
    var q4 = $(document).find("#q4");
    var q5 = $(document).find("#q5");
    var answer = questions[q_array_index].correct;

    $(q0).text(question);
    $(q1).text(questions[q_array_index].answers[0]);
    $(q2).text(questions[q_array_index].answers[1]);
    $(q3).text(questions[q_array_index].answers[2]);
    $(q4).text(questions[q_array_index].answers[3]);
    $(q5).text(questions[q_array_index].answers[4]);

    $('.trivia').click(function() {
      console.log('click');
      missed--;
      if (answer == 0) {
        answer = 1;
      }
      var ans = "q" + answer;
      var guess = $(this).attr('id');
      console.log(ans);
      console.log(guess);

      if (guess == ans) {
        correct++;
        console.log('correct');
      }
    });

}

  function start_timer(){
    if (flag == true) {
      counter = setInterval(update_timer, 1000);
      flag = false;
    } else {
      flag = true;
    }
  }

  function update_timer(){

      time_left--;
      $('.timer').html('<h3>' + time_left + 'seconds</h3>');

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
          start_timer();
          start_game();
      } else {
          game_over();
      }
  }

  function game_over() {
    var wrong = (questions.length - missed + correct);
    $('.trivia').empty();
    $('#q1').html('You got ' + correct + ' questions right.');
    $('#q2').html('You missed ' + missed + ' questions.') ;
    $('#q3').html('You got ' + wrong + ' questions wrong.');
    $('#q4').html('Replay?');
    $('#q5').html('<button id="yes">Yes</button><button id="no">NO</button>');
    $('#yes').click(function() {
      var q_array_index = 0;
      var correct = 0;
      var game_over = false;
      var time_left = 30;
      var missed = 3;
      var flag = true;
      start_game();
    });
    $('#no').click(function() {
      $('.trivia').empty();
      $('#q3').html('Game Over');
    });
  }



});
