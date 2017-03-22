/*
    Program Name: Recipe Display Application
    Author: Donna Sothen
    Date: 03/21/2017
    Filename: myRecipe.js
*/

//One event
    //displays the next element after the current target 
    function display (event) {
        $ (event.currentTarget).next().fadeIn("slow");
     }//end of display

    //attach event listener to h3 elements to invoke display function when clicked
        $("h3").click(display);

//One CSS change
    //change the background color h3 element when mouse hovers over it
        $("h3").hover(function() {
         $(this).css("background-color", "yellow");
            }, function () {
         $(this).css("background-color", "pink");
        });

//hover() will trigger display2 method each time mouse hovers over headers
$("h3").hover(display);


