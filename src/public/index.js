let left1 = 0;
let left2 = 0;
let left3 = 0;

let right1 = 0;
let right2 = 0;
let right3 = 0;

$("#left-1").click(function() {
    if(left1){
        $("#left-1").css("background-color", "#888");
        left1 = 0;
    }
    else{
        $("#left-1").css("background-color", "#fff");
        left1 = 1;
    }
});

$("#left-2").click(function() {
    if(left2){
        $("#left-2").css("background-color", "#888");
        left2 = 0;
    }
    else{
        $("#left-2").css("background-color", "#fff");
        left2 = 1;
    }
});

$("#left-3").click(function() {
    if(left3){
        $("#left-3").css("background-color", "#888");
        left3 = 0;
    }
    else{
        $("#left-3").css("background-color", "#fff");
        left3 = 1;
    }
});

$("#right-1").click(function() {
    if(right1){
        $("#right-1").css("background-color", "#888");
        right1 = 0;
    }
    else{
        $("#right-1").css("background-color", "#fff");
        right1 = 1;
    }
});

$("#right-2").click(function() {
    if(right2){
        $("#right-2").css("background-color", "#888");
        right2 = 0;
    }
    else{
        $("#right-2").css("background-color", "#fff");
        right2 = 1;
    }
});

$("#right-3").click(function() {
    if(right3){
        $("#right-3").css("background-color", "#888");
        right3 = 0;
    }
    else{
        $("#right-3").css("background-color", "#fff");
        right3 = 1;
    }
});


//Editable

$(".team-name").editable();

$( "html" ).keypress(function( event ) {
    if ( event.which == 48 ) {
        event.preventDefault();
        var txt1 = $('#team-l').html();
        var txt2 = $('#team-r').html();
        $('#team-l').html(txt2);
        $('#team-r').html(txt1);
    }
    if (event.which == 49) {
        if(left1){
            $("#left-1").css("background-color", "#888");
            left1 = 0;
        }
        else{
            $("#left-1").css("background-color", "#fff");
            left1 = 1;
        }
    }
    if (event.which == 50) {
        if(left2){
            $("#left-2").css("background-color", "#888");
            left2 = 0;
        }
        else{
            $("#left-2").css("background-color", "#fff");
            left2 = 1;
        }
    }
    if (event.which == 51) {
        if(left3){
            $("#left-3").css("background-color", "#888");
            left3 = 0;
        }
        else{
            $("#left-3").css("background-color", "#fff");
            left3 = 1;
        }
    }
    if (event.which == 52) {
        if(right1){
            $("#right-1").css("background-color", "#888");
            right1 = 0;
        }
        else{
            $("#right-1").css("background-color", "#fff");
            right1 = 1;
        }
    }
    if (event.which == 53) {
        if(right2){
            $("#right-2").css("background-color", "#888");
            right2 = 0;
        }
        else{
            $("#right-2").css("background-color", "#fff");
            right2 = 1;
        }
    }
    if (event.which == 54) {
        if(right3){
            $("#right-3").css("background-color", "#888");
            right3 = 0;
        }
        else{
            $("#right-3").css("background-color", "#fff");
            right3 = 1;
        }
    }
});
