var questions = [{
    question: "What year did the Titanic sink?",
    choices: [1912,1913,1914,1915,1916],
    correctAnswer: 0
}, {
    question: "How many furlongs are in a mile?",
    choices: [2,4,6,8,10],
    correctAnswer: 3
}, {
    question: "How many problems does Jay-Z have?",
    choices: [25,50,75,99,100],
    correctAnswer: 4
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var number = 20;

$(document).ready(function () {

    displayCurrentQuestion();

    $(this).find(".nextbtn").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    clearInterval(counter);
                    number = 20;
                    displayCurrentQuestion();

                } else {
                    $('#time-left').html('');
                    displayScore();

                    $(document).find(".nextButton").text("Play Again?");
                    clearInterval(counter);
                    number = 20;
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
    runTimer();
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}

function runTimer(){
            counter = setInterval(decrement, 1000);
        }
        function decrement(){
            number--;
            $('#time-left').html('<h2> You have ' + number + ' Seconds to answer</h2>');
            if (number === 0){
                $('#time-left').html('Time Up !!!!');
                stop();

            }
        }
        function stop(){
            clearInterval(counter);
            number = 20;
            currentQuestion++;
        if (currentQuestion < questions.length) {
              displayCurrentQuestion();
              $('#time-left').html('');
        } else {
          displayScore();
         $(document).find(".nextButton").text("Play Again?");
         quizOver = true;
        }
        }
