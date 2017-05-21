/**
 * Created by brandy.brasket on 3/17/2016.
 */
$(document).ready()
{
    //5 different image object attributes
    $img =
    {
        href: ["http://www.proflowers.com/red-roses-rrs",
            "http://www.fiftyflowers.com/flowers/WeddingFlowersPureWhiteFlowers_8.htm",
            "https://en.wikipedia.org/wiki/Pink_flowers",
            "https://www.pinterest.com/bytinall/dandelion/",
            "http://www.dictionary.com/browse/mountain",],
        src:["img1","img2","img3","img4","img5"],
        alt:["Red rose image.","White flower image.","Pink flower on rocks image.","Dandelion image.","Mountains image."]
    }

    //add the images to slider
    for (var i = 0; i < 5; i++) {
        $link = $('<a href = "'+$img.href[i]+'" target = "_blank"><img src="images/'+$img.src[i]+'.jpg" alt = "White flower image."/></a>');
        $link.clone().appendTo($('#slider'));
    }

    //add class to enlarge main image
    $('a').find('img').eq(1).addClass('activeImage');//set active class

//if user clicks image, check if image has class of activeImage
    $('a>img').on('click', function(e)
    {
        //console.log('image clicked');
//clicking a big image will go to link
        if ($(e.target).hasClass('activeImage'))
        {
            return true;
        }
//clicking a small image, will make it big
        if($(e.target).not('activeImage'))
        {
            e.preventDefault();
            $('#slider>a>img').each(function(){
                $(this).removeClass('activeImage');
            })
            $(e.target).addClass('activeImage');
        }

    });


    //every four seconds, move to next image, if no interaction from user
    $delay = 4000;
    $automation = setInterval(automationFunction, $delay);
    function automationFunction(){$('#nextButton').click()}
    //console.log("play");

    //NAV BUTTONS:
    $('#nextButton').on('click', function()
        {
            $('.activeImage').removeClass('activeImage').closest('a').next('a').find('img').addClass('activeImage');
            $('a:first').detach().clone(true).insertAfter($('a:last'));

            if($('.pauseSymbol').css('display')=== 'inline-block') { //if not paused...play
                //console.log("reset timer");
                clearInterval($automation);
                $automation = setInterval(automationFunction, $delay);
            }


        });

    $('#prevButton').on('click', function()
        {
            $('a:last').detach().clone(true).insertBefore($('a:first'));
            $('.activeImage').removeClass('activeImage').closest('a').prev('a').find('img').addClass('activeImage');

            if($('.pauseSymbol').css('display')=== 'inline-block') { //if not paused...play
               // console.log("reset timer");
                clearInterval($automation);
                $automation = setInterval(automationFunction, $delay);
            }

        });

    $('#pause').on('click', function()
    {
        if($('#playSymbol').is(':hidden'))
        {
            //change symbol and pause automation
            $('#playSymbol').css('display', 'block');
            $('.pauseSymbol').css('display', 'none');
            clearInterval($automation);
            //console.log("pause");

        }
        else
        {
            //change symbol and resume automation
            $('#playSymbol').css('display', 'none');
            $('.pauseSymbol').css('display', 'inline-block');
            $automation = setInterval(automationFunction, $delay);
            //console.log("play");
        }
    });

}
