$(document).ready()
{
    //add images to containers
    $totalArtImages = 9;
    $totalDesignImages = 13;

    for(var i=1; i<=$totalArtImages; i++)
    {
        $source = 'images/art/img'+i;
        $link = $('<img src='+$source+'.jpg>');
        $link.clone().appendTo($('#art .slider'));
    }

    for(var j=1; j<=$totalDesignImages; j++)
    {
        $source = 'images/graphicDesign/img'+j;
        $link = $('<img src='+$source+'.jpg>');
        $link.clone().appendTo($('#graphicDesign .slider'));
    }

    //add active classes
    $('.playSymbol').addClass('isActive');

    $('.outerBanner').each(function(){
        $(this).find('img').eq(1).addClass('activeImage');
    });

    $('img').on('click', function(e)
    {

        if($(e.target).not('activeImage'))
        {
            $(e.target).siblings('img.activeImage').removeClass('activeImage');
            $(e.target).addClass('activeImage');
        }

    });


    //every four seconds, move to next image, if no interaction from user
    $delay = 4000;
    $automation = setInterval(automationFunction, $delay);
    function automationFunction(e)
    {
        $('.playSymbol.isActive').closest('.controls').find('.nextButton').click();
    }

    //NAV BUTTONS:
    $('.nextButton').on('click', function()
        {
            $(this).closest('.outerBanner').find('.activeImage').removeClass('activeImage').next('img').addClass('activeImage');
            $(this).closest('.outerBanner').find('img:first').detach().clone(true).insertAfter($(this).closest('.outerBanner').find('img:last'));

            if($(this).closest('.outerBanner').find('.playSymbol.isActive').length>0)
            {
                clearInterval($automation);
                $automation = setInterval(automationFunction, $delay);
            }
        });

    $('.prevButton').on('click', function()
        {
            $(this).closest('.outerBanner').find('img:last').detach().clone(true).insertBefore($(this).closest('.outerBanner').find('img:first'));
            $(this).closest('.outerBanner').find('.activeImage').removeClass('activeImage').prev('img').addClass('activeImage');

            if($(this).closest('.outerBanner').find('.playSymbol.isActive').length>0)
            {
                clearInterval($automation);
                $automation = setInterval(automationFunction, $delay);
            }

        });

    $('.pause').on('click', function()
    {
        if($(this).find('.playSymbol.isActive').length>0)
        {
            $(this).find('.playSymbol').css('display', 'block');
            $(this).find('.playSymbol').removeClass('isActive');
            $(this).find('.pauseSymbol').css('display', 'none');

        }
        else
        {
            $(this).find('.playSymbol').css('display', 'none');
            $(this).find('.pauseSymbol').css('display', 'inline-block');
            $(this).find('.playSymbol').addClass('isActive');
            $automation = setInterval(automationFunction, $delay);
        }
    });
}
