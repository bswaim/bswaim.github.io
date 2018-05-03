$(document).ready(function() {
    $totalArtImages = 9;
    $totalDesignImages = 13;

    for (var i = 1; i <= $totalArtImages; i++) {
        $source = 'images/art/img' + i;
        $link = $('<img src=' + $source + '.jpg>');
        $link.clone().appendTo($('#art .slider'));
    }

    for (var j = 1; j <= $totalDesignImages; j++) {
        $source = 'images/graphicDesign/img' + j;
        $link = $('<img src=' + $source + '.jpg>');
        $link.clone().appendTo($('#graphicDesign .slider'));
    }

    var toggleButton = function (button) {
        if (button.find('.playSymbol.isActive').length > 0) {
            button.removeClass('pause');
            button.addClass('play');

            button.find('.playSymbol').css('display', 'block');
            button.find('.playSymbol').removeClass('isActive');
            button.find('.pauseSymbol').css('display', 'none');
        }
        else {
            button.removeClass('play');
            button.addClass('pause');

            button.find('.playSymbol').css('display', 'none');
            button.find('.pauseSymbol').css('display', 'inline-block');
            button.find('.playSymbol').addClass('isActive');
            clearInterval($automation);
            $automation = setInterval(automationFunction, $delay);
        }
    };

    var bindImgClick = function ()
    {

        var activeImage = $('.activeImage');

        $('img').on('click', function (e)
        {
            if ($(e.target).hasClass('activeImage'))
            {
                var activeImage = $(e.target);
                viewImage(activeImage);
            }
            else
            {

                $(e.target).siblings('img.activeImage').removeClass('activeImage');
                $(e.target).addClass('activeImage');
            }
        });
    };

    bindImgClick();

    var pausePlayer = function () {
        var pauseButton = $('.pause');
        pauseButton.click();
    };

    var viewImage = function (activeImage) {
        var container = $('<div class="largeImageContainer"></div>');
        var overlay = $('<div class="overlay"></div>');
        var image = activeImage.clone();
        var close = $('<button class="button-close">X</button>');

        image.addClass('image-large');
        container.prependTo('html');
        image.appendTo(container);
        close.appendTo(container);
        overlay.appendTo(container);

        $('.overlay').add('.button-close').on('click', function () {
            var closeButton = $(this);
            closeLargeImage(closeButton);
        });

        pausePlayer();
    };

    var closeLargeImage = function (closeButton) {
        closeButton.parent().remove();
    };

    //add active classes
    $('.playSymbol').addClass('isActive');

    $('.outerBanner').each(function () {
        $(this).find('img').eq(1).addClass('activeImage');
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

    $('.pause').add('.play').on('click', function()
    {
        var button = $(this);
        toggleButton(button);66
    });

});
