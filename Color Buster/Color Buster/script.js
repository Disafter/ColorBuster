var points = 0;

var timeRemaining = 10;
var timeRemaining = timeRemaining.toFixed(1);
var isGameOver = true;

function decrementTimer() {
    if (!isGameOver) {
        timeRemaining = (timeRemaining - .2);
        
        $("#start").text(timeRemaining.toFixed(1));
        if (timeRemaining <= 0) {
            isGameOver = true;
            timeRemaining = 0;
            $("#start").text("Restart");
            $("#22").text("Game Over!");
            //alert("Game Over!");
        }
        else {
            $("#start").text(timeRemaining.toFixed(1));
        }
    }
};


function checkBoxes() {
    var boxId = $(this).attr("id");
    var className = $(this).attr("class");
    var rowString = boxId.substring(0, 1);
    var columnString = boxId.substring(1, 2);
    var column = parseInt(columnString);
    var row = parseInt(rowString);
    var newColor = getRandomColor();
    var nextRow = row + 1;
    var previousRow = row - 1;
    var nextColumn = column + 1;
    var previousColumn = column - 1;
    
    if (!isGameOver) {
        if (nextRow < 4) {
            var neighborId = nextRow + "" + column;
            var neighborClassName = $("#" + neighborId).attr("class");

            if (neighborClassName == className) {
                $("#" + boxId).removeClass("red green blue yellow");
                $("#" + boxId).addClass(newColor);
                newColor = getRandomColor();
                $("#" + neighborId).removeClass("red green blue yellow");
                $("#" + neighborId).addClass(newColor);
                newColor = getRandomColor();
                points = points + 1;
                timeRemaining = (timeRemaining + .2);
                
            }
        }

        if (previousRow > 0) {
            var neighborId = previousRow + "" + column;
            var neighborClassName = $("#" + neighborId).attr("class");

            if (neighborClassName == className) {
                $("#" + boxId).removeClass("red green blue yellow");
                $("#" + boxId).addClass(newColor);
                newColor = getRandomColor();
                $("#" + neighborId).removeClass("red green blue yellow");
                $("#" + neighborId).addClass(newColor);
                newColor = getRandomColor();
                points = points + 1;
                timeRemaining = (timeRemaining + .2);
                
            }
        }

        if (nextColumn < 4) {
            var neighborId = row + "" + nextColumn;
            var neighborClassName = $("#" + neighborId).attr("class");

            if (neighborClassName == className) {
                $("#" + boxId).removeClass("red green blue yellow");
                $("#" + boxId).addClass(newColor);
                newColor = getRandomColor();
                $("#" + neighborId).removeClass("red green blue yellow");
                $("#" + neighborId).addClass(newColor);
                newColor = getRandomColor();
                points = points + 1;
                timeRemaining = (timeRemaining + .2);
                

            }
        }

        if (previousColumn > 0) {
            var neighborId = row + "" + previousColumn;
            var neighborClassName = $("#" + neighborId).attr("class");

            if (neighborClassName == className) {
                $("#" + boxId).removeClass("red green blue yellow");
                $("#" + boxId).addClass(newColor);
                newColor = getRandomColor();
                $("#" + neighborId).removeClass("red green blue yellow");
                $("#" + neighborId).addClass(newColor);
                newColor = getRandomColor();
                points = points + 1;
                timeRemaining = (timeRemaining + .2);
                

            }


        }
    }
    
    
    $("#scoredisplay").text(points);

    
};
///^main code for assigning points and clicking/changing color blocks


function getRandomColor() {
    var randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
        newClass = "red";
    }
    else if (randomNumber === 1) {
        newClass = "blue";
    }
    else if (randomNumber === 2) {
        newClass = "green";
    }
    else {
        newClass = "yellow";
    }

    return newClass;
};
///^works fine


function resetColors() {
   /* var boxId = $(this).attr("id");
    /var className = $(this).attr("class");
    var rowString = boxId.substring(0, 1);
    var columnString = boxId.substring(1, 2);
    var column = parseInt(columnString);
    var row = parseInt(rowString);
    
    var nextRow = row + 1;
    var previousRow = row - 1;
    var nextColumn = column + 1;
    var previousColumn = column - 1;
    */
    var newColor = getRandomColor();
    $("#11").removeClass("red green blue yellow");
    $("#11").addClass(newColor);
    newColor = getRandomColor();
    $("#12").removeClass("red green blue yellow");
    $("#12").addClass(newColor);
    newColor = getRandomColor();
    $("#13").removeClass("red green blue yellow");
    $("#13").addClass(newColor);
    newColor = getRandomColor();
    $("#21").removeClass("red green blue yellow");
    $("#21").addClass(newColor);
    newColor = getRandomColor();
    $("#22").removeClass("red green blue yellow");
    $("#22").addClass(newColor);
    newColor = getRandomColor();
    $("#23").removeClass("red green blue yellow");
    $("#23").addClass(newColor);
    newColor = getRandomColor();
    $("#31").removeClass("red green blue yellow");
    $("#31").addClass(newColor);
    newColor = getRandomColor();
    $("#32").removeClass("red green blue yellow");
    $("#32").addClass(newColor);
    newColor = getRandomColor();
    $("#33").removeClass("red green blue yellow");
    $("#33").addClass(newColor);
    newColor = getRandomColor();
    //points = points - 1;
    $("#scoredisplay").text(points);
}
 
function setTimer() {
    isGameOver = false;
    points = 0;
    $("#scoredisplay").text(points);
    timeRemaining = 10;
    $("#22").text("");
    setInterval(decrementTimer, 200);
}


$(".lilbox").on("click", checkBoxes);
$(".reset").on("click", resetColors);
$(".timer").on("click", setTimer);

$(document).keyup(function () {
    resetColors();
    
});