function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

questions = [
// create questions
    new Question("Entries in a stack are “ordered”. What is the meaning of this statement?",
        ["A collection of stacks is sortable", "Stack entries may be compared with the ‘<‘ operation",
            "The entries are stored in a linked list", "There is a Sequential entry that is one by one"], "D"),
    new Question("Which of the following applications may use a stack?",
        ["A parentheses balancing program", "Tracking of local variables at run time",
            "Compiler Syntax Analyzer",
            "All of the mentioned"], "D"),
    new Question("Express -15 as a 6-bit signed binary number.", ["001111", "101111","101110", "001110"], "B"),
    new Question("What is a skip list?", ["a linkedlist with size value in nodes",
        "a linkedlist that allows faster search within an ordered sequence",
        "a linkedlist that allows slower search within an ordered sequence",
        "a tree which is in the form of linked list"], "B"),
    new Question("Skip lists are similar to which of the following datastructure?",
        ["stack", "heap", "binary search tree", "balanced binary tree"], "D")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();