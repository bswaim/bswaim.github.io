/**
 * Created by brandy.brasket on 3/21/2016.
 */
$(document).ready(function() {

    $square = $("<div class = 'numbered'></div>");

    for (var i = 1; i < 101; i++) {
        $square.text(i).clone().appendTo($('.container'));
    }

    $('.numbered').each(function(index){

        if(index %10 == 0)
        {
            $(this).addClass("newRow");
        }

        if((index+1) %3 == 0)
        {
            $(this).addClass("divisbileByThree");
            $(this).text('Fizz');
        }

        if((index+1) %5 == 0)
        {
            $(this).text('Buzz');
            $(this).addClass("divisibleByFive");
        }

        if((index+1) %5 == 0 && (index+1) %3 == 0)
        {
            $(this).text('FizzBuzz');
        }
    })

    $fizzBuzz = $('.divisbileByThree.divisibleByFive');
    $fizzBuzz.on('click', function(){
        alert('Fizzbuzz!');
    })
});