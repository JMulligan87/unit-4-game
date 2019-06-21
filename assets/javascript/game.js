// Crystal Variables
var crystal = {
    blue: {
        value: 0
    },
    green: {
        value: 0
    },
    red: {
        value: 0
    },
    yellow: {
        value: 0
    }
};

// functions
var getRandom = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var startGame = function(){
    currentScore = 0;
    targetScore = getRandom(19,120);

    crystal.blue.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.yellow.value = getRandom(1,12);

    $("#your-score").html(currentScore);
    $("#target-score").html(targetScore);
};

var addValue = function(crystal) {
    currentScore = currentScore + crystal.value;
     $("#your-score").html(currentScore);
     checkWin();
}

var checkWin = function() {
    if(currentScore > targetScore){
        alert("Booo! You lost!");
        lossCount++;
        $("#loss-count").text(lossCount);
        startGame();
    }
    else if(currentScore === targetScore) {
        alert("Yay! You win!");
        winCount++;
        $("#win-count").text(winCount);
        startGame();
    }
};


// Scores
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

startGame();

$("#blue").click(function(){
    addValue(crystal.blue);
});
$("#green").click(function(){
    addValue(crystal.green);
});
$("#red").click(function(){
    addValue(crystal.red);

});
$("#yellow").click(function(){
    addValue(crystal.yellow);
});
